"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVoice = void 0;
const getVoice = (language) => {
    return {
        'en-US': `Polly.Joanna`,
        'en-CA': ``,
        'en-AU': `Polly.Olivia`,
        'en-GB': `Polly.Amy`,
        'en-NZ': `Polly.Aria`,
        'en-ZA': `Polly.Ayanda`,
        'es-ES': ``,
        'pt-PT': ``,
        'pt-BR': ``,
        'it-IT': ``,
        'fr-FR': ``,
        'de-DE': ``,
        'nb-NO': ``,
        'pl-PL': ``,
        'sv-SE': ``,
        'tr-TR': ``,
        'cy-GB': ``,
        'nl-NL': ``,
        'da-DK': ``,
        'ca-ES': `Polly.Arlet`,
    }[language];
};
exports.getVoice = getVoice;
