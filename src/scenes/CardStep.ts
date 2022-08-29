import { Scenes } from 'telegraf';
import { card } from '../steps/card';

export const cardStepScene = new Scenes.WizardScene('CARD_STEP_ID', ...card);

cardStepScene.action('debit', async (ctx) => {
  ctx.wizard.state.callData.cardType = 'debit';
  return ctx.wizard.steps[ctx.wizard.cursor](ctx);
});

cardStepScene.action('credit', async (ctx) => {
  ctx.wizard.state.callData.cardType = 'credit';
  return ctx.wizard.steps[ctx.wizard.cursor](ctx);
});

cardStepScene.action('noCallAgain', async (ctx) => {
  return ctx.scene.enter('super-wizard');
});

cardStepScene.action('yesCallAgain', async (ctx) => {
  await ctx.replyWithHTML('<i>Calling again in 20 seconds</i>');
  setTimeout(async () => {
    return ctx.wizard.steps[4](ctx);
  }, 20000);
});
