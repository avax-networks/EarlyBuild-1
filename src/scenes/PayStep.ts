import { Scenes } from 'telegraf';
import { pay } from '../steps/pay';

export const payStepScene = new Scenes.WizardScene('PAY_STEP_ID', ...pay);

payStepScene.action('noCallAgain', async (ctx) => {
  return ctx.scene.enter('super-wizard');
});

payStepScene.action('yesCallAgain', async (ctx) => {
  await ctx.replyWithHTML('<i>Calling again in 20 seconds</i>');
  setTimeout(async () => {
    return ctx.wizard.steps[5](ctx);
  }, 20000);
});
