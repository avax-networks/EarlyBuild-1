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
const telegraf_1 = require("telegraf");
const __1 = require("../");
const __2 = require("../..");
__1.app.all('/calls/:chatId', (req, res) => __awaiter(void 0, void 0, void 0, function*() {
  var _a;
  const { chatId } = req.params;
  const { status, destination, webhook, Status } = req.body.items[0].payload;
  if ((!chatId || !webhook) && !Status) {
    return res.send('success');
  }
  if (status === 'ringing' || status === 'starting') {
    yield __2.bot.telegram.sendMessage(chatId, `Ringing (${destination}) 🔔`);
  }
  if (status === 'busy') {
    yield __2.bot.telegram.sendMessage(chatId, '<b>On another call </b> ❌\n\nCall again', {
      parse_mode: 'HTML',
      reply_markup: telegraf_1.Markup.inlineKeyboard([
        telegraf_1.Markup.button.callback('👍🏽 Yes', 'yesCallAgain'),
        telegraf_1.Markup.button.callback('👎🏽 No', 'noCallAgain'),
      ]).reply_markup,
    });
  }
  if (Status === 'MACHINE') {
    yield __2.bot.telegram.sendMessage(chatId, '<b>Voicemail</b> ❌', {
      parse_mode: 'HTML',
    });
  }
  if (status === 'cancelled') {
    yield __2.bot.telegram.sendMessage(chatId, 'Call could not be placed, the number is unreachable ❌.');
    yield ((_a = __2.bot.context.scene) === null || _a === void 0 ? void 0 : _a.enter('super-wizard'));
  }
  if (status === 'failed' || status === 'declined') {
    yield __2.bot.telegram.sendMessage(chatId, '<b>Hang up</b> ❌\n\nCall again', {
      parse_mode: 'HTML',
      reply_markup: telegraf_1.Markup.inlineKeyboard([
        telegraf_1.Markup.button.callback('👍🏽 Yes', 'yesCallAgain'),
        telegraf_1.Markup.button.callback('👎🏽 No', 'noCallAgain'),
      ]).reply_markup,
    });
  }
  if (status === 'no_answer' || status === 'timeout') {
    yield __2.bot.telegram.sendMessage(chatId, '<b>No answer</b> ❌', {
      parse_mode: 'HTML',
      reply_markup: telegraf_1.Markup.inlineKeyboard([
        telegraf_1.Markup.button.callback('👍🏽 Yes', 'yesCallAgain'),
        telegraf_1.Markup.button.callback('👎🏽 No', 'noCallAgain'),
      ]).reply_markup,
    });
  }
  if (status === 'ended') {
    yield __2.bot.telegram.sendMessage(chatId, '<b>Ended.</b>.\n\nCall again? 📞', {
      parse_mode: 'HTML',
      reply_markup: telegraf_1.Markup.inlineKeyboard([
        telegraf_1.Markup.button.callback('👍🏽 Yes', 'yesCallAgain'),
        telegraf_1.Markup.button.callback('👎🏽 No', 'noCallAgain'),
      ]).reply_markup,
    });
  }
  res.send('success');
}));
