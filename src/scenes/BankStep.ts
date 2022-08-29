import { Markup, Scenes } from 'telegraf';
import { bank } from '../steps/bank';
import { client } from '../utils/plivo';

export const bankStepScene = new Scenes.WizardScene('BANK_STEP_ID', ...bank);

bankStepScene.action('valid', async (ctx) => {
  if (!ctx.wizard.state.callUUID) {
    return ctx.reply('This call has ended already.', {
      parse_mode: 'HTML',
      reply_markup: Markup.inlineKeyboard([
        Markup.button.callback('🚀 Start again', 'LET_GO'),
      ]).reply_markup,
    });
  }

  client.calls.speakText(
    ctx.wizard.state.callUUID,
    'Your information has been verified.',
    {},
  );
});

bankStepScene.action('noCallAgain', async (ctx) => {
  return ctx.scene.enter('super-wizard');
});

bankStepScene.action('yesCallAgain', async (ctx) => {
  await ctx.replyWithHTML('<i>Calling again in 20 seconds</i>');
  setTimeout(async () => {
    return ctx.wizard.steps[4](ctx);
  }, 20000);
});
