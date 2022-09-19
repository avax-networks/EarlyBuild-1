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
exports.pinStepScene = void 0;
const telegraf_1 = require("telegraf");
const pin_1 = require("../steps/pin");
exports.pinStepScene = new telegraf_1.Scenes.WizardScene('PIN_STEP_ID', ...pin_1.pin);
exports.pinStepScene.action('noCallAgain', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    return ctx.scene.enter('super-wizard');
}));
exports.pinStepScene.action('yesCallAgain', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.replyWithHTML('<i>Calling again in 20 seconds</i>');
    setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
        return ctx.wizard.steps[4](ctx);
    }), 20000);
}));
exports.pinStepScene.action('carrierPin', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.wizard.state.callData.pinType = 'carrierPin';
    return ctx.wizard.steps[ctx.wizard.cursor](ctx);
}));
exports.pinStepScene.action('cardPin', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.wizard.state.callData.pinType = 'cardPin';
    return ctx.wizard.steps[ctx.wizard.cursor](ctx);
}));
