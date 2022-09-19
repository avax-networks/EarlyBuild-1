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
exports.buyScene = void 0;
const telegraf_1 = require("telegraf");
const coinbase_1 = require("../utils/coinbase");
let price;
exports.buyScene = new telegraf_1.Scenes.WizardScene('BUY_ID', (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  var _a;
  const message = ((_a = ctx.message) === null || _a === void 0 ? void 0 : _a.text) || '';
  switch (message.toLowerCase()) {
    case '/1':
      price = process.env.OTP_PRICE_NORMAL;
      yield ctx.reply(`You have selected a 1 Day license, click Proceed to continue`, telegraf_1.Markup.inlineKeyboard([
        telegraf_1.Markup.button.callback('❌ Cancel', 'cancel'),
        telegraf_1.Markup.button.callback('✅ Proceed', 'proceed'),
      ]));
      break;
    case '/3':
      price = process.env.OTP_PRICE_BASIC;
      yield ctx.reply(`You have selected a 3 Day license, click Proceed to continue`, telegraf_1.Markup.inlineKeyboard([
        telegraf_1.Markup.button.callback('❌ Cancel', 'cancel'),
        telegraf_1.Markup.button.callback('✅ Proceed', 'proceed'),
      ]));
      break;
    case '/7':
      price = process.env.OTP_PRICE_SILVER;
      yield ctx.reply(`You have selected a 7 Day license, click Proceed to continue`, telegraf_1.Markup.inlineKeyboard([
        telegraf_1.Markup.button.callback('❌ Cancel', 'cancel'),
        telegraf_1.Markup.button.callback('✅ Proceed', 'proceed'),
      ]));
      break;
    case '/30':
      price = process.env.OTP_PRICE_GOLD;
      yield ctx.reply(`You have selected a 30 Day license, click Proceed to continue`, telegraf_1.Markup.inlineKeyboard([
        telegraf_1.Markup.button.callback('❌ Cancel', 'cancel'),
        telegraf_1.Markup.button.callback('✅ Proceed', 'proceed'),
      ]));
      break;
    case '/lifetime':
      price = process.env.OTP_PRICE_PLATINUM;
      yield ctx.reply(`You have selected a lifetime license, click Proceed to continue`, telegraf_1.Markup.inlineKeyboard([
        telegraf_1.Markup.button.callback('❌ Cancel', 'cancel'),
        telegraf_1.Markup.button.callback('✅ Proceed', 'proceed'),
      ]));
      break;
  }
}));
exports.buyScene.action('bitcoin', (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  const { bitcoin } = ctx.scene.state.currencyAddr
    ?
    ctx.scene.state.currencyAddr
    : {
      bitcoin: undefined,
    };
  if (!bitcoin) {
    yield ctx.reply('🚫 Request expired, start again\n\nSelect the currency again to get a new address');
    return ctx.scene.enter('BUY_ID');
  }
  yield ctx.replyWithHTML(`💵 <b>Bitcoin payment address</b>\n\nThe bot will let know once payment has been confirmed`);
  yield ctx.reply(`${bitcoin}`);
  return ctx.replyWithHTML(`<i>***Please don't reuse this address for future payments***</i>`);
}));
exports.buyScene.action('litecoin', (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  const { litecoin } = ctx.scene.state.currencyAddr
    ?
    ctx.scene.state.currencyAddr
    : {
      bitcoin: undefined,
    };
  if (!litecoin) {
    yield ctx.reply('🚫 Request expired, start again\n\nSelect the currency again to get a new address');
    return ctx.scene.enter('BUY_ID');
  }
  yield ctx.replyWithHTML(`💵 <b>Litecoin payment address</b>\n\nThe bot will let know once payment has been confirmed`);
  yield ctx.reply(`${litecoin}`);
  return ctx.replyWithHTML(`<i>***Please don't reuse this address for future payments***</i>`);
}));
exports.buyScene.action('ethereum', (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  const { ethereum } = ctx.scene.state.currencyAddr
    ?
    ctx.scene.state.currencyAddr
    : {
      bitcoin: undefined,
    };
  if (!ethereum) {
    yield ctx.reply('🚫 Request expired, start again\n\nSelect the currency again to get a new address');
    return ctx.scene.enter('BUY_ID');
  }
  yield ctx.replyWithHTML(`💵 <b>Ethereum payment address</b>\n\nThe bot will let know once payment has been confirmed`);
  yield ctx.reply(`${ethereum}`);
  return ctx.replyWithHTML(`<i>***Please don't reuse this address for future payments***</i>`);
}));
exports.buyScene.action('proceed', (ctx) => __awaiter(void 0, void 0, void 0, function*() {
  var _b, _c, _d, _e;
  const chatId = ((_b = ctx.chat) === null || _b === void 0 ? void 0 : _b.id) || ((_c = ctx.from) === null || _c === void 0 ? void 0 : _c.id) || ctx.scene.state.chatId || undefined;
  if (!chatId) {
    yield ctx.reply('🚫 Request expired, start again\n\n');
    return ctx.scene.enter('START_ID');
  }
  const coinbaseCharge = yield (0, coinbase_1.createCharge)('OTP', `OTP Buying`, price, (_d = ctx.from) === null || _d === void 0 ? void 0 : _d.username, (_e = ctx.chat) === null || _e === void 0 ? void 0 : _e.id, 'OTP Purchase');
  yield ctx.replyWithHTML('💱 <b>Select the currency you would like to pay with</b>\n\nWe will send you the address to pay to.\n\nYou can always come back up to chose another currency if you have selected the wrong one', telegraf_1.Markup.inlineKeyboard([
    telegraf_1.Markup.button.callback('Bitcoin', 'bitcoin'),
    telegraf_1.Markup.button.callback('Ethereum', 'ethereum'),
    telegraf_1.Markup.button.callback('Litecoin', 'litecoin'),
  ]));
  ctx.wizard.state.currencyAddr = {
    bitcoin: coinbaseCharge.addresses.bitcoin,
    ethereum: coinbaseCharge.addresses.ethereum,
    litecoin: coinbaseCharge.addresses.litecoin,
  };
}));
