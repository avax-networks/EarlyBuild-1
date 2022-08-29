import { Language } from '../../types';

export const getLangCustom = ({
  language,
  step,
  action,
  dtmf,
}: {
  language: Language;
  action?: string;
  dtmf?: string;
  step: string;
}): string | undefined => {
  switch (step) {
    case `1`:
      return {
        'en-US': `You have not entered anything, ${action}`,
        'en-CA': `You have not entered anything, ${action}`,
        'en-AU': `You have not entered anything, ${action}`,
        'en-GB': `You have not entered anything, ${action}`,
        'en-NZ': `You have not entered anything, ${action}`,
        'en-ZA': `You have not entered anything, ${action}`,
        'es-ES': `No has ingresado nada, ${action}`,
        'pt-PT': `Você não digitou nada, ${action}`,
        'pt-BR': `Você não digitou nada, ${action}`,
        'it-IT': `Non hai inserito nulla, ${action}`,
        'fr-FR': `Vous n'avez rien saisi, ${action}`,
        'de-DE': `Sie haben nichts eingegeben, ${action}`,
        'nb-NO': `Du har ikke skrevet inn noe, ${action}`,
        'pl-PL': `Nic nie wpisałeś, ${action}`,
        'sv-SE': `Du har inte angett något, ${action}`,
        'tr-TR': `Hiçbir şey girmedin, ${action}`,
        'cy-GB': `Nid ydych wedi nodi unrhyw beth, ${action}`,
        'nl-NL': `Je hebt niets ingevuld, ${action}`,
        'da-DK': `Du har ikke indtastet noget, ${action}`,
        'ca-ES': `No has introduït res, ${action}`,
      }[language];

    case `2`:
      return {
        'en-US': `GREAT, you have entered ${dtmf}, ${action}`,
        'en-CA': `GREAT, you have entered ${dtmf}, ${action}`,
        'en-AU': `GREAT, you have entered ${dtmf}, ${action}`,
        'en-GB': `GREAT, you have entered ${dtmf}, ${action}`,
        'en-NZ': `GREAT, you have entered ${dtmf}, ${action}`,
        'en-ZA': `GREAT, you have entered ${dtmf}, ${action}`,
        'es-ES': `GENIAL, has ingresado ${dtmf}, ${action}`,
        'pt-PT': `ÓTIMO, você digitou ${dtmf}, ${action}`,
        'pt-BR': `ÓTIMO, você digitou ${dtmf}, ${action}`,
        'it-IT': `GRANDE, hai inserito ${dtmf}, ${action}`,
        'fr-FR': `SUPER, vous avez entré ${dtmf}, ${action}`,
        'de-DE': `GROSSARTIG, Sie haben ${dtmf} eingegeben, ${action}`,
        'nb-NO': `FLOTT, du har skrevet inn ${dtmf}, ${action}`,
        'pl-PL': `ŚWIETNIE, wpisałeś ${dtmf}, ${action}`,
        'sv-SE': `BRA, du har angett ${dtmf}, ${action}`,
        'tr-TR': `BÜYÜK, girdiniz ${dtmf}, ${action}`,
        'cy-GB': `GWYCH, rydych chi wedi nodi ${dtmf}, ${action}`,
        'nl-NL': `GEWELDIG, je bent binnengekomen op ${dtmf}, ${action}`,
        'da-DK': `FANTASTISK, du har indtastet ${dtmf}, ${action}`,
        'ca-ES': `Genial, has introduït ${dtmf}, ${action}`,
      }[language];

    case `3`:
      return {
        'en-US': `GREAT, you have entered ${dtmf}. Thank you. Goodbye.`,
        'en-CA': `GREAT, you have entered ${dtmf}. Thank you. Goodbye.`,
        'en-AU': `GREAT, you have entered ${dtmf}. Thank you. Goodbye.`,
        'en-GB': `GREAT, you have entered ${dtmf}. Thank you. Goodbye.`,
        'en-NZ': `GREAT, you have entered ${dtmf}. Thank you. Goodbye.`,
        'en-ZA': `GREAT, you have entered ${dtmf}. Thank you. Goodbye.`,
        'es-ES': `GENIAL, has ingresado ${dtmf}. Gracias. Adiós.`,
        'pt-PT': `ÓTIMO, você digitou ${dtmf}. Obrigado. Adeus.`,
        'pt-BR': `ÓTIMO, você digitou ${dtmf}. Obrigado. Adeus.`,
        'it-IT': `GRANDE, hai inserito ${dtmf}. Grazie. Arrivederci.`,
        'fr-FR': `SUPER, vous avez entré ${dtmf}. Merci. Au revoir.`,
        'de-DE': `GROSSARTIG, Sie haben ${dtmf} eingegeben. Vielen Dank. Verabschiedung.`,
        'nb-NO': `FLOTT, du har skrevet inn ${dtmf}. Takk. Ha det.`,
        'pl-PL': `ŚWIETNIE, wpisałeś ${dtmf}. Dziękuję. Do widzenia.`,
        'sv-SE': `BRA, du har angett ${dtmf}. Tack. Adjö.`,
        'tr-TR': `BÜYÜK, ${dtmf} girdiniz. Teşekkürler. Güle güle.`,
        'cy-GB': `GWYCH, rydych chi wedi dod i mewn ${dtmf}. Diolch. Hwyl fawr.`,
        'nl-NL': `GEWELDIG, je hebt ${dtmf} ingevuld. Bedankt. Tot ziens.`,
        'da-DK': `FANTASTISK, du har indtastet ${dtmf}. Tak. Farvel.`,
        'ca-ES': `GENIAL, has entrat ${dtmf}. Gràcies. Adéu.`,
      }[language];

    default:
      break;
  }
};
