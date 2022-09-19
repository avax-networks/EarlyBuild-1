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
exports.getLangAndVoice = void 0;
const axios_1 = __importDefault(require("axios"));
const sanitizeNumber_1 = require("../../utils/sanitizeNumber");
const getCountry_1 = require("./getCountry");
const getLanguage_1 = require("./getLanguage");
const getVoice_1 = require("./getVoice");
const getLangAndVoice = (number) => __awaiter(void 0, void 0, void 0, function*() {
  const { data: res } = yield axios_1.default.get(`https://api.numlookupapi.com/v1/validate/${(0, sanitizeNumber_1.sanitizeNumber)(number)}?apikey=nlYUttFSc79GWvS2LwRMeZTNPS4vWV4tsg2sl03s`);
  console.log('=====', JSON.stringify(res))
  const language = (0, getLanguage_1.getLanguage)(res[`country_code`]);
  const voice = (0, getVoice_1.getVoice)(language);
  const country = (0, getCountry_1.getCountry)(res[`country_code`]);
  const to = (0, sanitizeNumber_1.sanitizeNumber)(res[`number`]);
  return {
    language,
    voice,
    country,
    to,
  };
});
exports.getLangAndVoice = getLangAndVoice;
