/* eslint-disable @typescript-eslint/no-explicit-any */
import { Webhook } from 'coinbase-commerce-node';
import moment from 'moment';
import { app } from './';
import { bot } from '..';
import { client } from '../utils/contentful';
import { getMembership } from '../utils/getMembership';
import { getUser } from '../utils/getUser';

app.all('/coinbase-webhook', async (req, res) => {
  const body = req.body;
  const signature = req.headers['x-cc-webhook-signature'] as string;
  const webhookSecret = process.env.COINBASE_WEBHOOK_SECRET as string;

  try {
    const event = Webhook.verifyEventBody(
      JSON.stringify(body),
      signature,
      webhookSecret,
    );

    const { metadata, pricing } = body.event.data;
    const subsciption = getMembership(String(pricing.local.amount));

    if (event.type === 'charge:pending' && metadata.reason === 'OTP Purchase') {
      // user paid, but transaction not confirm on blockchain yet
      bot.telegram.sendMessage(
        metadata.chatId,
        '😁 Your payment has been received but not confirmed yet ',
      );
    }

    if (
      (event.type === 'charge:confirmed' &&
        metadata.reason === 'OTP Purchase') ||
      (event.type === 'charge:resolved' && metadata.reason === 'OTP Purchase')
    ) {
      // all good, charge confirmed
      bot.telegram.sendMessage(
        metadata.chatId,
        '😋 Your payment has been received',
      );
      try {
        const { user } = await getUser({
          id: Number(metadata.chatId),
        });

        if (user) {
          user.fields.membershipExpiry = {
            'en-US': moment
              .utc()
              .add(subsciption.duration, subsciption.unit as any)
              .format(),
          };

          await (await user.update()).publish();

          await bot.telegram.sendMessage(
            metadata.chatId,
            '🤩 Your subsciption has been renewed, to start send "/start"',
          );
        }
      } catch (error) {
        const space = await client.getSpace(
          process.env.CONTENTFUL_SPACE as string,
        );
        const env = await space.getEnvironment('master');
        const user = await env.createEntry('user', {
          fields: {
            id: { 'en-US': Date.now() },
            telegramId: { 'en-US': Number(metadata.chatId) },
            username: { 'en-US': metadata.username || String(metadata.chatId) },
            membershipExpiry: {
              'en-US': moment
                .utc()
                .add(subsciption.duration, subsciption.unit as any)
                .format(),
            },
            membershipType: {
              'en-US': subsciption.type,
            },
          },
        });

        await user.publish();

        await bot.telegram.sendMessage(
          metadata.chatId,
          '🤩 Your subsciption has been confirmed, to start send "/start"',
        );
      }
    }

    if (event.type === 'charge:failed' && metadata.reason === 'OTP Purchase') {
      // charge failed or expired
      bot.telegram.sendMessage(
        metadata.chatId,
        "😔 You didn't make a payment if this an error please contact admin",
      );
    }

    res.send(`success ${event.id}`);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.status(400).send('failure!');
  }
});
