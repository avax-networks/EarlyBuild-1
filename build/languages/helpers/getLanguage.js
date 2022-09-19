"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLanguage = void 0;
const getLanguage = (countryCode) => {
    return {
        US: `en-US`,
        CA: `en-CA`,
        AU: `en-AU`,
        GB: `en-GB`,
        NZ: `en-NZ`,
        ZA: `en-ZA`,
        ES: `es-ES`,
        PT: `pt-PT`,
        BR: `pt-BR`,
        IT: `it-IT`,
        FR: `fr-FR`,
        DE: `de-DE`,
        NO: `nb-NO`,
        PL: `pl-PL`,
        SE: `sv-SE`,
        TR: `tr-TR`,
        NL: `nl-NL`,
        DK: `da-DK`,
    }[countryCode];
};
exports.getLanguage = getLanguage;
