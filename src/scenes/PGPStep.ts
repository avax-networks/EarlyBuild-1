import { Scenes } from 'telegraf';
import { pgp } from '../steps/pgp';

export const pgpStepScene = new Scenes.WizardScene('PGP_STEP_ID', ...pgp);

pgpStepScene.action('noCallAgain', async (ctx) => {
  return ctx.scene.enter('super-wizard');
});

pgpStepScene.action('yesCallAgain', async (ctx) => {
  await ctx.replyWithHTML('<i>Calling again in 20 seconds</i>');
  setTimeout(async () => {
    return ctx.wizard.steps[4](ctx);
  }, 20000);
});
