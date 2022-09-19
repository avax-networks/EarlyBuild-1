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
exports.customDtmfFlow = void 0;
const __1 = require("..");
const uuid_1 = require("uuid");
const languages_1 = require("../languages");
const customDtmfFlow = (dtmf, res, language, chatId, step, destination, actions, customMessage) => __awaiter(void 0, void 0, void 0, function* () {
    if (dtmf) {
        yield __1.bot.telegram.sendMessage(Number(chatId), `On call (${destination}) 🤳🏽`, {
            parse_mode: 'HTML',
        });
    }
    const ac = JSON.parse(actions);
    if (dtmf && (dtmf === '1' || dtmf === '2')) {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call CUSTOM STEP - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: ac[0][1],
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
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
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/custom/${step}/${chatId}/${language}?actions=${JSON.stringify(ac.splice(1, 2))}&action=${ac[0][0]}`,
                    },
                },
            ],
        });
    }
    else if (dtmf && dtmf === '3') {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call CUSTOM STEP - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangCustomDTMFFlow)({ dtmf, language, customMessage }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
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
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}?actions=${actions}&customMessage=${customMessage}`,
                    },
                },
            ],
        });
    }
    else {
        return res.json({
            id: (0, uuid_1.v4)(),
            title: `call CUSTOM STEP - ${chatId}`,
            record: false,
            steps: [
                {
                    id: (0, uuid_1.v4)(),
                    action: 'say',
                    options: {
                        payload: (0, languages_1.getLangCustomDTMFFlow)({ dtmf, language, customMessage }),
                        language,
                        voice: 'female',
                    },
                    onKeypressGoto: 'nextStepGoto',
                    onKeypressVar: 'dtmf',
                    endKey: '#',
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
                },
                {
                    id: 'nextStepGoto',
                    action: 'fetchCallFlow',
                    options: {
                        url: `${process.env.ENDPOINT_URL}/custom/${step}/${chatId}/${language}?actions=${JSON.stringify(ac.splice(1, 2))}&action=${ac[0][0]}`,
                    },
                },
            ],
        });
    }
});
exports.customDtmfFlow = customDtmfFlow;
