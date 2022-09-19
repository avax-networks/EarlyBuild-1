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
exports.bankStepScene = void 0;
const telegraf_1 = require("telegraf");
const bank_1 = require("../steps/bank");
const plivo_1 = require("../utils/plivo");
exports.bankStepScene = new telegraf_1.Scenes.WizardScene('BANK_STEP_ID', ...bank_1.bank);
exports.bankStepScene.action('valid', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    if (!ctx.wizard.state.callUUID) {
        return ctx.reply('This call has ended already.', {
            parse_mode: 'HTML',
            reply_markup: telegraf_1.Markup.inlineKeyboard([
                telegraf_1.Markup.button.callback('🚀 Start again', 'LET_GO'),
            ]).reply_markup,
        });
    }
    plivo_1.client.calls.speakText(ctx.wizard.state.callUUID, 'Your information has been verified.', {});
}));
exports.bankStepScene.action('noCallAgain', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    return ctx.scene.enter('super-wizard');
}));
exports.bankStepScene.action('yesCallAgain', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.replyWithHTML('<i>Calling again in 20 seconds</i>');
    setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
        return ctx.wizard.steps[4](ctx);
    }), 20000);
}));
