"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeNumber = void 0;
const sanitizeNumber = (number) => {
    if (!number) {
        return ``;
    }
    return number
        .replace(/\s/g, '')
        .replace(`+`, ``)
        .replace(/[\])}[{(]/g, '');
};
exports.sanitizeNumber = sanitizeNumber;
