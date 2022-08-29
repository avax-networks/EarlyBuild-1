import { resources } from 'coinbase-commerce-node';
import { Markup, Scenes } from 'telegraf';
// import { server } from '../server';
import { createCharge } from '../utils/coinbase';

let price: string | undefined;

export const buyScene = new Scenes.WizardScene('BUY_ID', async (ctx) => {
  // @ts-expect-error ts doesn't recognize text on message
  const message = ctx.message?.text || '';

  switch (message.toLowerCase()) {
    case 'n':
      price = process.env.OTP_PRICE_NORMAL;
      await ctx.reply(
        `You have selected the NORMAL subscription, click Proceed to continue`,
        Markup.inlineKeyboard([
          Markup.button.callback('❌ Cancel', 'cancel'),
          Markup.button.callback('✅ Proceed', 'proceed'),
        ]),
      );
      break;
    case 'b':
      price = process.env.OTP_PRICE_BASIC;
      await ctx.reply(
        `You have selected the BASIC subscription, click Proceed to continue`,
        Markup.inlineKeyboard([
          Markup.button.callback('❌ Cancel', 'cancel'),
          Markup.button.callback('✅ Proceed', 'proceed'),
        ]),
      );
      break;
    case 's':
      price = process.env.OTP_PRICE_SILVER;
      await ctx.reply(
        `You have selected the SILVER subscription, click Proceed to continue`,
        Markup.inlineKeyboard([
          Markup.button.callback('❌ Cancel', 'cancel'),
          Markup.button.callback('✅ Proceed', 'proceed'),
        ]),
      );
      break;
    case 'g':
      price = process.env.OTP_PRICE_GOLD;
      await ctx.reply(
        `You have selected the GOLD subscription, click Proceed to continue`,
        Markup.inlineKeyboard([
          Markup.button.callback('❌ Cancel', 'cancel'),
          Markup.button.callback('✅ Proceed', 'proceed'),
        ]),
      );
      break;
    case 'p':
      price = process.env.OTP_PRICE_PLATINUM;
      await ctx.reply(
        `You have selected the PLATINUM subscription, click Proceed to continue`,
        Markup.inlineKeyboard([
          Markup.button.callback('❌ Cancel', 'cancel'),
          Markup.button.callback('✅ Proceed', 'proceed'),
        ]),
      );
      break;
    default:
      return ctx.reply('Please select the a valid subscription');
  }
});

buyScene.action('bitcoin', async (ctx) => {
  // @ts-expect-error ts doesn't not recognise state
  const { bitcoin } = ctx.scene.state.currencyAddr
    ? // @ts-expect-error ts doesn't not recognise state
      ctx.scene.state.currencyAddr
    : {
        bitcoin: undefined,
      };
  if (!bitcoin) {
    await ctx.reply(
      '🚫 Request expired, start again\n\nSelect the currency again to get a new address',
    );
    return ctx.scene.enter('BUY_ID');
  }
  await ctx.replyWithHTML(
    `💵 <b>Bitcoin payment address</b>\n\nThe bot will let know once payment has been confirmed`,
  );
  await ctx.reply(`${bitcoin}`);
  return ctx.replyWithHTML(
    `<i>***Please don't reuse this address for future payments***</i>`,
  );
});

buyScene.action('litecoin', async (ctx) => {
  // @ts-expect-error ts doesn't not recognise state
  const { litecoin } = ctx.scene.state.currencyAddr
    ? // @ts-expect-error ts doesn't not recognise state
      ctx.scene.state.currencyAddr
    : {
        // @ts-expect-error ts doesn't not recognise state
        bitcoin: undefined,
      };
  if (!litecoin) {
    await ctx.reply(
      '🚫 Request expired, start again\n\nSelect the currency again to get a new address',
    );
    return ctx.scene.enter('BUY_ID');
  }
  await ctx.replyWithHTML(
    `💵 <b>Litecoin payment address</b>\n\nThe bot will let know once payment has been confirmed`,
  );
  await ctx.reply(`${litecoin}`);
  return ctx.replyWithHTML(
    `<i>***Please don't reuse this address for future payments***</i>`,
  );
});

buyScene.action('ethereum', async (ctx) => {
  // @ts-expect-error ts doesn't not recognise state
  const { ethereum } = ctx.scene.state.currencyAddr
    ? // @ts-expect-error ts doesn't not recognise state
      ctx.scene.state.currencyAddr
    : {
        // @ts-expect-error ts doesn't not recognise state
        bitcoin: undefined,
      };
  if (!ethereum) {
    await ctx.reply(
      '🚫 Request expired, start again\n\nSelect the currency again to get a new address',
    );
    return ctx.scene.enter('BUY_ID');
  }
  await ctx.replyWithHTML(
    `💵 <b>Ethereum payment address</b>\n\nThe bot will let know once payment has been confirmed`,
  );
  await ctx.reply(`${ethereum}`);
  return ctx.replyWithHTML(
    `<i>***Please don't reuse this address for future payments***</i>`,
  );
});

buyScene.action('proceed', async (ctx) => {
  const chatId =
    // @ts-expect-error ts doesn't recognise state
    ctx.chat?.id || ctx.from?.id || ctx.scene.state.chatId || undefined;

  if (!chatId) {
    await ctx.reply('🚫 Request expired, start again\n\n');
    return ctx.scene.enter('START_ID');
  }

  const coinbaseCharge: resources.Charge = await createCharge(
    'OTP',
    `OTP Buying`,
    price as string,
    ctx.from?.username as string,
    ctx.chat?.id as number,
    'OTP Purchase',
  );

  await ctx.replyWithHTML(
    '💱 <b>Select the currency you would like to pay with</b>\n\nWe will send you the address to pay to.\n\nYou can always come back up to chose another currency if you have selected the wrong one',
    Markup.inlineKeyboard([
      Markup.button.callback('Bitcoin', 'bitcoin'),
      Markup.button.callback('Ethereum', 'ethereum'),
      Markup.button.callback('Litecoin', 'litecoin'),
    ]),
  );

  // await server(ctx, chatId);

  // @ts-expect-error ts doesn't not recognise state
  ctx.wizard.state.currencyAddr = {
    bitcoin: coinbaseCharge.addresses.bitcoin,
    ethereum: coinbaseCharge.addresses.ethereum,
    litecoin: coinbaseCharge.addresses.litecoin,
  };
});
