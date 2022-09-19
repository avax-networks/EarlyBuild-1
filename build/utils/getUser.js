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
exports.getUser = void 0;
const moment_1 = __importDefault(require("moment"));
const contentful_1 = require("./contentful");
const getUser = ({ id, }) => __awaiter(void 0, void 0, void 0, function*() {
  try {
    const space = yield contentful_1.client.getSpace(process.env.CONTENTFUL_SPACE);
    const env = yield space.getEnvironment('master');
    const user = yield env.getEntries({
      content_type: 'membership',
      include: 0,
      'fields.id': id,
    });
    const hasExpired = (0, moment_1.default)(user.items[0].fields.membershipExpiry['en-US']).isSameOrBefore((0, moment_1.default)());
    return Promise.resolve({
      user: user.items[0],
      hasExpired,
    });
  }
  catch (error) {
    return Promise.reject();
  }
});
exports.getUser = getUser;
