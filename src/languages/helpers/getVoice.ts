import { Language, Voice } from '../../types';

export const getVoice = (language: Language): Voice => {
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
  }[language] as Voice;
};
