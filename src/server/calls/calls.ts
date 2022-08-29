import { Markup } from 'telegraf';
import { app } from '../';
import { bot } from '../..';

app.all('/calls/:chatId', async (req, res) => {
  const { chatId } = req.params;
  const { status, destination, webhook, Status } = req.body.items[0].payload;

  if ((!chatId || !webhook) && !Status) {
    return res.send('success');
  }

  if (status === 'ringing' || status === 'starting') {
    await bot.telegram.sendMessage(chatId, `Ringing (${destination}) 🔔`);
  }

  if (status === 'busy') {
    await bot.telegram.sendMessage(
      chatId,
      '<b>On another call </b> ❌\n\nCall again',
      {
        parse_mode: 'HTML',
        reply_markup: Markup.inlineKeyboard([
          Markup.button.callback('👍🏽 Yes', 'yesCallAgain'),
          Markup.button.callback('👎🏽 No', 'noCallAgain'),
        ]).reply_markup,
      },
    );
  }

  if (Status === 'MACHINE') {
    await bot.telegram.sendMessage(chatId, '<b>Voicemail</b> ❌', {
      parse_mode: 'HTML',
    });
  }

  if (status === 'cancelled') {
    await bot.telegram.sendMessage(
      chatId,
      'Call could not be placed, the number is unreachable ❌.',
    );

    await bot.context.scene?.enter('super-wizard');
  }

  if (status === 'failed' || status === 'declined') {
    await bot.telegram.sendMessage(chatId, '<b>Hang up</b> ❌\n\nCall again', {
      parse_mode: 'HTML',
      reply_markup: Markup.inlineKeyboard([
        Markup.button.callback('👍🏽 Yes', 'yesCallAgain'),
        Markup.button.callback('👎🏽 No', 'noCallAgain'),
      ]).reply_markup,
    });
  }

  if (status === 'no_answer' || status === 'timeout') {
    await bot.telegram.sendMessage(chatId, '<b>No answer</b> ❌', {
      parse_mode: 'HTML',
      reply_markup: Markup.inlineKeyboard([
        Markup.button.callback('👍🏽 Yes', 'yesCallAgain'),
        Markup.button.callback('👎🏽 No', 'noCallAgain'),
      ]).reply_markup,
    });
  }

  // if (status === 'failed') {
  //   await bot.telegram.sendMessage(
  //     chatId,
  //     '😔💔 Bot is down and will back soon.\n\nPlease contact admin to follow up.',
  //     {
  //       parse_mode: 'HTML',
  //       reply_markup: Markup.inlineKeyboard([
  //         Markup.button.callback('Try again', 'start'),
  //       ]).reply_markup,
  //     },
  //   );

  //   await bot.context.scene?.enter('super-wizard');
  // }
  if (status === 'ended') {
    await bot.telegram.sendMessage(chatId, '<b>Ended.</b>.\n\nCall again? 📞', {
      parse_mode: 'HTML',
      reply_markup: Markup.inlineKeyboard([
        Markup.button.callback('👍🏽 Yes', 'yesCallAgain'),
        Markup.button.callback('👎🏽 No', 'noCallAgain'),
      ]).reply_markup,
    });
  }
  res.send('success');
});
