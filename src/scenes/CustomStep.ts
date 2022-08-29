import { Scenes } from 'telegraf';
import { custom } from '../steps/custom';

export const customStepScene = new Scenes.WizardScene(
  'CUSTOM_STEP_ID',
  ...custom(),
);

customStepScene.action('noCallAgain', async (ctx) => {
  return ctx.scene.enter('super-wizard');
});

customStepScene.action('yesCallAgain', async (ctx) => {
  await ctx.replyWithHTML('<i>Calling again in 20 seconds</i>');
  setTimeout(async () => {
    return ctx.wizard.steps[4](ctx);
  }, 20000);
});
