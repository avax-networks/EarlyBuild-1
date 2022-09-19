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
var __importDefault = (this && this.__importDefault) || function(mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.superWizard = void 0;
const moment_1 = __importDefault(require("moment"));
const telegraf_1 = require("telegraf");
const getUser_1 = require("../utils/getUser");
exports.superWizard = new telegraf_1.Scenes.WizardScene('super-wizard', (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  var _a;
  const { id, is_bot, first_name } = ctx.from;
  if (is_bot) {
    ctx.reply('Unfortunatly bot can not create an account with us');
    return ctx.scene.leave();
  }
  ctx.scene.state.me = {};
  try {
    const { hasExpired, user } = yield (0, getUser_1.getUser)({ id });
    console.log('****', hasExpired, user);
    ctx.wizard.state.chatId = Number(user.fields.id['en-US']);
    ctx.scene.state.id = user.fields.id;
    const reply = hasExpired
      ? yield ctx.replyWithHTML(`🌴 <b>Welcome ${first_name}</b>,\n\nYour subscirption has <b>expired.</b> ⏰\n\nPlease renew your license by selecting from the list below.\n\n 
<b>🛒 /1 Day License - $${process.env.OTP_PRICE_NORMAL}</b>\n
<b>🛒 /3 Day License - $${process.env.OTP_PRICE_SILVER}</b>\n
<b>🛒 /7 Day License - $${process.env.OTP_PRICE_BASIC}</b>\n
<b>🛒 /30 Day License - $${process.env.OTP_PRICE_GOLD}</b>\n
<b>🛒 /lifetime License - $${process.env.OTP_PRICE_PLATINUM}</b>\n

Purchase a subscription by entering the digit corresponding to the subscription duriation you would like.\n<i>Example: (1 = 1 Day) (3 = 3 Days) (7 = 7 Days)</i>`)
      : ctx.replyWithHTML(`🌴 <b>Welcome ${first_name}</b>,\n\nYou currently have an active license, you are on the <b>${user.fields.membershipType['en-US']}</b> plan and your license expires in <b>${(0, moment_1.default)(user.fields.membershipExpiry['en-US']).toNow(true)}.</b>\n\n<b>Please report any bugs or issues to support:</b>\n\n☁ <b>Support:</b> @SMSParadiseSupport\n☁<b>Owners:</b> @truedex & @twixgod\n`, telegraf_1.Markup.inlineKeyboard([
        telegraf_1.Markup.button.callback("🌴 Get Started", 'LET_GO'),
      ]));
    console.log('+++', reply);
    yield reply;
    return ctx.wizard.next();
  }
  catch (error) {
    console.log('&&&', error);
    return ctx.replyWithHTML(`🌴 <b>Welcome ${first_name}</b>,\n\nYou dont have a active subscription. ⏰\n\nPlease purhcase a license by selecting from the list below.\n\n 
<b>🛒 /1 Day License - $${process.env.OTP_PRICE_NORMAL}</b>\n
<b>🛒 /3 Day License - $${process.env.OTP_PRICE_SILVER}</b>\n
<b>🛒 /7 Day License - $${process.env.OTP_PRICE_BASIC}</b>\n
<b>🛒 /30 Day License - $${process.env.OTP_PRICE_GOLD}</b>\n
<b>🛒 /Lifetime License - $${process.env.OTP_PRICE_PLATINUM}</b>\n\n <b>Please report any bugs or issues to support:</b>\n\n☁ <b>Support:</b> @SMSParadiseSupport\n☁<b>Owners:</b> @truedex & @twixgod\n

Purchase a subscription by entering the digit corresponding to the subscription duriation you would like.\n<i>Example: (1 = 1 Day) (3 = 3 Days) (7 = 7 Days)</i>`);
  }
}));
exports.superWizard.hears(/[/1|/3|/7|/30|/Lifetime]$/gi, (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  return ctx.scene.enter('BUY_ID');
}));
exports.superWizard.action('/start', (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  return ctx.scene.enter('START_ID');
}));
exports.superWizard.action('/purchase', (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  return ctx.scene.enter('BUY_ID');
}));
exports.superWizard.action('LET_GO', (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  return ctx.scene.enter('START_ID');
}));
