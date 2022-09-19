"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountStepScene = void 0;
const telegraf_1 = require("telegraf");
const account_1 = require("../steps/account");
exports.accountStepScene = new telegraf_1.Scenes.WizardScene('ACCOUNT_STEP_ID', ...account_1.account);
exports.accountStepScene.action('expired', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.scene.current.leave();
    return ctx.scene.enter('START_ID');
}));
exports.accountStepScene.action('yes', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.wizard.state.callData.askCardInfo = 'yes';
    yield ctx.wizard.next();
    return ctx.wizard.steps[5](ctx);
}));
exports.accountStepScene.action('no', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.wizard.state.callData.askCardInfo = 'no';
    yield ctx.wizard.next();
    return ctx.wizard.steps[5](ctx);
}));
exports.accountStepScene.action('accountCall', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.wizard.next();
    return ctx.wizard.steps[6](ctx);
}));
exports.accountStepScene.action('noCallAgain', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    return ctx.scene.enter('super-wizard');
}));
exports.accountStepScene.action('yesCallAgain', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.replyWithHTML('<i>Calling again in 20 seconds</i>');
    setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
        return ctx.wizard.steps[6](ctx);
    }), 20000);
}));
