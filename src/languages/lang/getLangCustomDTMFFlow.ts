import { Language } from '../../types';

export const getLangCustomDTMFFlow = ({
  dtmf,
  language,
  customMessage,
}: {
  dtmf: string;
  language: Language;
  customMessage: string;
}): string | undefined => {
  switch (dtmf) {
    case `3`:
      return {
        'en-US': `${customMessage}. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-CA': `${customMessage}. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-AU': `${customMessage}. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-GB': `${customMessage}. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-NZ': `${customMessage}. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-ZA': `${customMessage}. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'es-ES': `${customMessage}. Si no fue usted, presione 1, si no fue usted, presione 2, para repetir estas opciones, presione 3.`,
        'pt-PT': `${customMessage}. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
        'pt-BR': `${customMessage}. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
        'it-IT': `${customMessage}. Se non eri tu, premi 1, se sei tu, premi 2, per ripetere queste opzioni, premi 3.`,
        'fr-FR': `${customMessage}. Si ce n'était pas vous, veuillez appuyer sur 1, si c'était vous, veuillez appuyer sur 2, pour répéter ces options, veuillez appuyer sur 3.`,
        'de-DE': `${customMessage}. Wenn Sie das nicht waren, drücken Sie bitte 1, wenn Sie das waren, drücken Sie bitte 2, um diese Optionen zu wiederholen, drücken Sie bitte 3.`,
        'nb-NO': `${customMessage}. Hvis dette ikke var deg, trykk 1, hvis dette var deg, trykk 2, for å gjenta disse alternativene, trykk 3.`,
        'pl-PL': `${customMessage}. Jeśli to nie Ty, naciśnij 1, jeśli to Ty, naciśnij 2, aby powtórzyć te opcje, naciśnij 3.`,
        'sv-SE': `${customMessage}. Om detta inte var du, vänligen tryck 1, om det här var du, vänligen tryck 2, för att upprepa dessa alternativ, vänligen tryck 3.`,
        'tr-TR': `${customMessage}. Bu siz değilseniz lütfen 1'e, bu sizseniz lütfen 2'ye, bu seçenekleri tekrarlamak için lütfen 3'e basın.`,
        'cy-GB': `${customMessage}. Os nad chi oedd hwn, pwyswch 1, os mai chi oedd hwn, pwyswch 2, i ailadrodd yr opsiynau hyn, pwyswch 3.`,
        'nl-NL': `${customMessage}. Als u dit niet was, drukt u op 1, als u dit wel was, drukt u op 2, om deze opties te herhalen, drukt u op 3.`,
        'da-DK': `${customMessage}. Hvis dette ikke var dig, skal du trykke på 1, hvis det var dig, så tryk på 2, for at gentage disse muligheder, tryk på 3.`,
        'ca-ES': `${customMessage}. Si no vas ser tu, premeu 1, si aquest vau ser vostè, premeu 2, per repetir aquestes opcions, premeu 3.`,
      }[language];

    default:
      return {
        'en-US': `You have selected an INVALID option. ${customMessage}. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-CA': `You have selected an INVALID option. ${customMessage}. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-AU': `You have selected an INVALID option. ${customMessage}. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-GB': `You have selected an INVALID option. ${customMessage}. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-NZ': `You have selected an INVALID option. ${customMessage}. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-ZA': `You have selected an INVALID option. ${customMessage}. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'es-ES': `Ha seleccionado una opción NO VÁLIDA. ${customMessage}. Si no fue usted, presione 1, si no fue usted, presione 2, para repetir estas opciones, presione 3.`,
        'pt-PT': `Você selecionou uma opção INVÁLIDA. ${customMessage}. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
        'pt-BR': `Você selecionou uma opção INVÁLIDA. ${customMessage}. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
        'it-IT': `Hai selezionato un'opzione NON VALIDA. ${customMessage}. Se non eri tu, premi 1, se sei tu, premi 2, per ripetere queste opzioni, premi 3.`,
        'fr-FR': `Vous avez sélectionné une option INVALIDE. ${customMessage}. Si ce n'était pas vous, veuillez appuyer sur 1, si c'était vous, veuillez appuyer sur 2, pour répéter ces options, veuillez appuyer sur 3.`,
        'de-DE': `Sie haben eine UNGÜLTIGE Option ausgewählt. ${customMessage}. Wenn Sie das nicht waren, drücken Sie bitte 1, wenn Sie das waren, drücken Sie bitte 2, um diese Optionen zu wiederholen, drücken Sie bitte 3.`,
        'nb-NO': `Du har valgt et Ugyldig alternativ. ${customMessage}. Hvis dette ikke var deg, trykk 1, hvis dette var deg, trykk 2, for å gjenta disse alternativene, trykk 3.`,
        'pl-PL': `Wybrałeś NIEPRAWIDŁOWĄ opcję. ${customMessage}. Jeśli to nie Ty, naciśnij 1, jeśli to Ty, naciśnij 2, aby powtórzyć te opcje, naciśnij 3.`,
        'sv-SE': `Du har valt ett OGILTIGt alternativ. ${customMessage}. Om detta inte var du, vänligen tryck 1, om det här var du, vänligen tryck 2, för att upprepa dessa alternativ, vänligen tryck 3.`,
        'tr-TR': `GEÇERSİZ bir seçenek seçtiniz. ${customMessage}. Bu siz değilseniz lütfen 1'e, bu sizseniz lütfen 2'ye, bu seçenekleri tekrarlamak için lütfen 3'e basın.`,
        'cy-GB': `Rydych chi wedi dewis opsiwn INVALID. ${customMessage}. Os nad chi oedd hwn, pwyswch 1, os mai chi oedd hwn, pwyswch 2, i ailadrodd yr opsiynau hyn, pwyswch 3.`,
        'nl-NL': `U heeft een ONGELDIGE optie geselecteerd. ${customMessage}. Als u dit niet was, drukt u op 1, als u dit wel was, drukt u op 2, om deze opties te herhalen, drukt u op 3.`,
        'da-DK': `Du har valgt en Ugyldig mulighed. ${customMessage}. Hvis dette ikke var dig, skal du trykke på 1, hvis det var dig, så tryk på 2, for at gentage disse muligheder, tryk på 3.`,
        'ca-ES': `Heu seleccionat una opció NO VÀLIDA. ${customMessage}. Si no vas ser tu, premeu 1, si aquest vau ser vostè, premeu 2, per repetir aquestes opcions, premeu 3.`,
      }[language];
  }
};
