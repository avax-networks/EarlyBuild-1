"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({
    extended: true,
}));
require("./answer");
require("./cbHook");
require("./calls");
const port = process.env.PORT || 4040;
exports.app.all(`/ding`, (_, res) => {
    res.send(`dong`);
});
exports.app.all('/', (_, res) => {
    res.send('Hello World!');
});
exports.app.listen(port, () => console.log(`⚡⚡⚡ Server has started on http://localhost:${port}`));
