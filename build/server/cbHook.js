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
const coinbase_commerce_node_1 = require("coinbase-commerce-node");
const moment_1 = __importDefault(require("moment"));
const _1 = require("./");
const __1 = require("..");
const contentful_1 = require("../utils/contentful");
const getMembership_1 = require("../utils/getMembership");
const getUser_1 = require("../utils/getUser");
_1.app.all('/coinbase-webhook', (req, res) => __awaiter(void 0, void 0, void 0, function*() {
  const body = req.body;
  const signature = req.headers['x-cc-webhook-signature'];
  const webhookSecret = process.env.COINBASE_WEBHOOK_SECRET;
  try {
    const event = coinbase_commerce_node_1.Webhook.verifyEventBody(JSON.stringify(body), signature, webhookSecret);
    const { metadata, pricing } = body.event.data;
    const subsciption = (0, getMembership_1.getMembership)(String(pricing.local.amount));
    if (event.type === 'charge:pending' && metadata.reason === 'OTP Purchase') {
      __1.bot.telegram.sendMessage(metadata.chatId, '😁 Your payment has been received but not confirmed yet ');
    }
    if ((event.type === 'charge:confirmed' &&
      metadata.reason === 'OTP Purchase') ||
      (event.type === 'charge:resolved' && metadata.reason === 'OTP Purchase')) {
      __1.bot.telegram.sendMessage(metadata.chatId, '😋 Your payment has been received');
      try {
        const { user } = yield (0, getUser_1.getUser)({
          id: Number(metadata.chatId),
        });
        if (user) {
          user.fields.membershipExpiry = {
            'en-US': moment_1.default
              .utc()
              .add(subsciption.duration, subsciption.unit)
              .format(),
          };
          yield (yield user.update()).publish();
          yield __1.bot.telegram.sendMessage(metadata.chatId, '🤩 Your subsciption has been renewed, to start send "/start"');
        }
      }
      catch (error) {
        const space = yield contentful_1.client.getSpace(process.env.CONTENTFUL_SPACE);
        const env = yield space.getEnvironment('master');
        const user = yield env.createEntry('membership', {
          fields: {
            id: { 'en-US': Date.now() },
            telegramId: { 'en-US': Number(metadata.chatId) },
            username: { 'en-US': metadata.username || String(metadata.chatId) },
            membershipExpiry: {
              'en-US': moment_1.default
                .utc()
                .add(subsciption.duration, subsciption.unit)
                .format(),
            },
            membershipType: {
              'en-US': subsciption.type,
            },
          },
        });
        yield user.publish();
        yield __1.bot.telegram.sendMessage(metadata.chatId, '🤩 Your subsciption has been confirmed, to start send "/start"');
      }
    }
    if (event.type === 'charge:failed' && metadata.reason === 'OTP Purchase') {
      __1.bot.telegram.sendMessage(metadata.chatId, "😔 You didn't make a payment if this an error please contact admin");
    }
    res.send(`success ${event.id}`);
  }
  catch (error) {
    console.log(error);
    res.status(400).send('failure!');
  }
}));
