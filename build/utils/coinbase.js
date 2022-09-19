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
exports.retrieveCharge = exports.createCharge = void 0;
const coinbase_commerce_node_1 = require("coinbase-commerce-node");
coinbase_commerce_node_1.Client.init(process.env.COINBASE_API_KEY);
const { Charge } = coinbase_commerce_node_1.resources;
const createCharge = (name, description, amount, username, chatId, reason) => __awaiter(void 0, void 0, void 0, function* () {
    const chargeData = {
        name,
        description,
        local_price: {
            amount,
            currency: 'USD',
        },
        pricing_type: 'fixed_price',
        metadata: {
            username,
            chatId,
            reason,
        },
    };
    const charge = yield Charge.create(chargeData);
    return charge;
});
exports.createCharge = createCharge;
const retrieveCharge = (chargeId) => __awaiter(void 0, void 0, void 0, function* () {
    const charge = yield Charge.retrieve(chargeId);
    return charge;
});
exports.retrieveCharge = retrieveCharge;
