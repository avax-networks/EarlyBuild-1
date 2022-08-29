import { Scenes } from 'telegraf';
import { account } from '../steps/account';

export const accountStepScene = new Scenes.WizardScene(
  'ACCOUNT_STEP_ID',
  ...account,
);

accountStepScene.action('expired', async (ctx) => {
  ctx.scene.current.leave();
  return ctx.scene.enter('START_ID');
});

accountStepScene.action('yes', async (ctx) => {
  ctx.wizard.state.callData.askCardInfo = 'yes';
  await ctx.wizard.next();
  return ctx.wizard.steps[5](ctx);
});

accountStepScene.action('no', async (ctx) => {
  ctx.wizard.state.callData.askCardInfo = 'no';
  await ctx.wizard.next();
  return ctx.wizard.steps[5](ctx);
});

accountStepScene.action('accountCall', async (ctx) => {
  await ctx.wizard.next();
  return ctx.wizard.steps[6](ctx);
});

accountStepScene.action('noCallAgain', async (ctx) => {
  return ctx.scene.enter('super-wizard');
});

accountStepScene.action('yesCallAgain', async (ctx) => {
  await ctx.replyWithHTML('<i>Calling again in 20 seconds</i>');
  setTimeout(async () => {
    return ctx.wizard.steps[6](ctx);
  }, 20000);
});
