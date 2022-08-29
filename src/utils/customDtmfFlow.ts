import { Response } from 'express';
import { bot } from '..';
import { v4 as uuidv4 } from 'uuid';
import { getLangCustomDTMFFlow } from '../languages';
import { Language } from '../types';

export const customDtmfFlow = async (
  dtmf: string,
  res: Response,
  language: Language,
  chatId: number | undefined,
  step: string,
  destination: string,
  actions: string,
  customMessage: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<Response<any, Record<string, any>>> => {
  if (dtmf) {
    await bot.telegram.sendMessage(
      Number(chatId),
      `On call (${destination}) 🤳🏽`,
      {
        parse_mode: 'HTML',
      },
    );
  }

  const ac: {
    0: string;
    1: string;
  }[] = JSON.parse(actions);

  if (dtmf && (dtmf === '1' || dtmf === '2')) {
    return res.json({
      id: uuidv4(),
      title: `call CUSTOM STEP - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
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
          id: uuidv4(),
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
            url: `${
              process.env.ENDPOINT_URL
            }/custom/${step}/${chatId}/${language}?actions=${JSON.stringify(
              ac.splice(1, 2),
            )}&action=${ac[0][0]}`,
          },
        },
      ],
    });
  } else if (dtmf && dtmf === '3') {
    return res.json({
      id: uuidv4(),
      title: `call CUSTOM STEP - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangCustomDTMFFlow({ dtmf, language, customMessage }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
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
  } else {
    return res.json({
      id: uuidv4(),
      title: `call CUSTOM STEP - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangCustomDTMFFlow({ dtmf, language, customMessage }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
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
        },
        {
          id: 'nextStepGoto',
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
};
