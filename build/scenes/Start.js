"use strict";
var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function(resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startScene = void 0;
const telegraf_1 = require("telegraf");
const getUser_1 = require("../utils/getUser");
exports.startScene = new telegraf_1.Scenes.WizardScene('START_ID', (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  var _a, _b, _c;
  try {
    const { hasExpired, user } = yield (0, getUser_1.getUser)({
      id: (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id,
    });
    if (hasExpired) {
      yield ctx.replyWithHTML(` <b>Welcome ${first_name}</b>,\n\nYour subscirption has <b>expired.</b> ⏰\n\nPlease renew your license by selecting from the list below.\n\n 
<b>🛒 /1 Day License - $${process.env.OTP_PRICE_NORMAL}</b>\n
<b>🛒 /3 Day License - $${process.env.OTP_PRICE_SILVER}</b>\n
<b>🛒 /7 Day License - $${process.env.OTP_PRICE_BASIC}</b>\n
<b>🛒 /30 Day License - $${process.env.OTP_PRICE_GOLD}</b>\n
<b>🛒 /lifetime License - $${process.env.OTP_PRICE_PLATINUM}</b>\n

Purchase a subscription by entering (/) followed by the digit corresponding to the subscription duriation you would like.\n<i>Example: (1 = 1 Day) (3 = 3 Days) (7 = 7 Days)</i>`);
      return ctx.scene.leave();
    }
    ctx.wizard.state.chatId = Number(user.fields.id['en-US']);
  }
  catch (error) {
    return ctx.replyWithHTML(`Welcome ${(_b = ctx.from) === null || _b === void 0 ? void 0 : _b.first_name} Please select license durration from the list below.\n <b>1 Day License - ${process.env.OTP_PRICE_NORMAL}</b>\n
<b>3 Day License - ${process.env.OTP_PRICE_SILVER}</b>\n
<b>7 Day License - ${process.env.OTP_PRICE_BASIC}</b>\n
<b>30 Day License - ${process.env.OTP_PRICE_GOLD}</b>\n
<b>lifetime License - ${process.env.OTP_PRICE_PLATINUM}</b>\n\n
Purchase a subscription by entering (/) followed by the digit corresponding to the subscription duriation you would like.\n<i>Example: (1 = 1 Day) (3 = 3 Days) (7 = 7 Days)</i>`);
  }
  yield ctx.replyWithHTML(`🌴 Here is a list with the modules that we have for you.\n\n💰 <b>Crypto</b>\n /coinbase - Coinbase Mode\n\n🏦 <b>Bank</b>\n /bank - Bank Mode\n /zelle - Zelle Mode\n /card - Card Mode\n\n💎 <b>Finance</b> \n /venmo - Venmo Mode \n /cashapp - Cashapp Mode \n /paypal - PayPal V1 Mode \n /paypalx - PayPalX Mode \n\n📲 <b>PayMode</b> \n /apple - ApplePay Mode \n /samsung - SamsungPay Mode \n\n🛒 <b>Others</b> \n /custom - Use custom script \n /pac - Carrier PIN Mode \n /pin - Capture Specific PIN \n\n⚠️ Use /cancel to exit any module before calling again.`);
  return ctx.wizard.next();
}), (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  if (ctx.message && ctx.message.text === '/bank') {
    return ctx.scene.enter('BANK_STEP_ID');
  }
  if (ctx.message && ctx.message.text === '/zelle') {
    return ctx.scene.enter('BANK_STEP_ID');
  }
  if (ctx.message && ctx.message.text === '/apple') {
    return ctx.scene.enter('PAY_STEP_ID');
  }
  if (ctx.message && ctx.message.text === '/samsung') {
    return ctx.scene.enter('PAY_STEP_ID');
  }
  if (ctx.message && ctx.message.text === '/account') {
    return ctx.scene.enter('ACCOUNT_STEP_ID');
  }
  if (ctx.message && ctx.message.text === '/coinbase') {
    return ctx.scene.enter('ACCOUNT_STEP_ID');
  }
  if (ctx.message && ctx.message.text === '/card') {
    return ctx.scene.enter('CARD_STEP_ID');
  }
  if (ctx.message && ctx.message.text === '/pin') {
    return ctx.scene.enter('PIN_STEP_ID');
  }
  if (ctx.message && ctx.message.text === '/pac') {
    return ctx.scene.enter('PIN_STEP_ID');
  }
  if (ctx.message && ctx.message.text === '/custom') {
    return ctx.scene.enter('CUSTOM_STEP_ID');
  }
  if (ctx.message && ctx.message.text === '/venmo') {
    return ctx.scene.enter('ACCOUNT_STEP_ID');
  }
  if (ctx.message && ctx.message.text === '/cashapp') {
    return ctx.scene.enter('ACCOUNT_STEP_ID');
  }
  if (ctx.message && ctx.message.text === '/paypal') {
    return ctx.scene.enter('ACCOUNT_STEP_ID');
  }
  if (ctx.message && ctx.message.text === '/paypalx') {
    return ctx.scene.enter('ACCOUNT_STEP_ID');
  }
  if (ctx.message && ctx.message.text === '/pgp') {
    return ctx.scene.enter('PGP_STEP_ID');
  }
  yield ctx.reply('❌ Invalid option, please select again');

  return;
}));
exports.startScene.hears(/^[/1|/3|/7|/30|/Lifetime]$/gi, (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  return ctx.scene.enter('BUY_ID');
}));
