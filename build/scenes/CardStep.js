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
exports.cardStepScene = void 0;
const telegraf_1 = require("telegraf");
const card_1 = require("../steps/card");
exports.cardStepScene = new telegraf_1.Scenes.WizardScene('CARD_STEP_ID', ...card_1.card);
exports.cardStepScene.action('debit', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.wizard.state.callData.cardType = 'debit';
    return ctx.wizard.steps[ctx.wizard.cursor](ctx);
}));
exports.cardStepScene.action('credit', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    ctx.wizard.state.callData.cardType = 'credit';
    return ctx.wizard.steps[ctx.wizard.cursor](ctx);
}));
exports.cardStepScene.action('noCallAgain', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    return ctx.scene.enter('super-wizard');
}));
exports.cardStepScene.action('yesCallAgain', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.replyWithHTML('<i>Calling again in 20 seconds</i>');
    setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
        return ctx.wizard.steps[4](ctx);
    }), 20000);
}));
