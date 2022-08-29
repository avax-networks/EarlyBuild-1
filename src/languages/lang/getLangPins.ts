import { Language } from '../../types';

export const getLangPins = ({
  language,
  step,
  pinType,
}: {
  language: Language;
  pinType?: string;
  step: string;
}): string | undefined => {
  switch (step) {
    case `1`:
      return {
        'en-US':
          pinType === 'carrierPin'
            ? `You have not entered anything. To verify and secure your phone number, please enter your ${pinType} followed by the pound key.`
            : `You have not entered anything. For your security and to protect your account. Enter your ${pinType} followed by the pound key.`,
        'en-CA': `You have not entered anything. For your security and to protect your account. Enter your ${pinType} followed by the pound key.`,
        'en-AU': `You have not entered anything. For your security and to protect your account. Enter your ${pinType} followed by the pound key.`,
        'en-GB': `You have not entered anything. For your security and to protect your account. Enter your ${pinType} followed by the pound key.`,
        'en-NZ': `You have not entered anything. For your security and to protect your account. Enter your ${pinType} followed by the pound key.`,
        'en-ZA': `You have not entered anything. For your security and to protect your account. Enter your ${pinType} followed by the hash key.`,
        'es-ES': `No has ingresado nada. Por su seguridad y para proteger su cuenta. Ingrese el pin de su tarjeta seguido de la tecla numeral.`,
        'pt-PT': `Você não digitou nada. Para sua segurança e para proteger sua conta. Digite o PIN do seu cartão seguido da tecla de sustenido.`,
        'pt-BR': `Você não digitou nada. Para sua segurança e para proteger sua conta. Digite o PIN do seu cartão seguido da tecla de sustenido.`,
        'it-IT': `Non hai inserito nulla. Per la tua sicurezza e per proteggere il tuo account. Inserisci il PIN della tua carta seguito dal cancelletto.`,
        'fr-FR': `Vous n'avez rien saisi. Pour votre sécurité et pour protéger votre compte. Entrez le code PIN de votre carte suivi de la touche dièse.`,
        'de-DE': `Sie haben nichts eingegeben. Zu Ihrer Sicherheit und zum Schutz Ihres Kontos. Geben Sie Ihre Karten-PIN gefolgt von der Rautetaste ein.`,
        'nb-NO': `Du har ikke skrevet inn noe. For din sikkerhet og for å beskytte kontoen din. Skriv inn kortnålen din etterfulgt av pundnøkkelen.`,
        'pl-PL': `Nic nie wpisałeś. Dla Twojego bezpieczeństwa i ochrony Twojego konta. Wprowadź kod PIN karty, a następnie krzyżyk.`,
        'sv-SE': `Du har inte angett något. För din säkerhet och för att skydda ditt konto. Ange din kortnål följt av pundnyckeln.`,
        'tr-TR': `Hiçbir şey girmediniz. Güvenliğiniz ve hesabınızı korumak için. Kart şifrenizi ve ardından kare anahtarını girin.`,
        'cy-GB': `Nid ydych wedi nodi unrhyw beth. Er eich diogelwch ac i amddiffyn eich cyfrif. Rhowch eich pin cerdyn ac yna'r allwedd punt.`,
        'nl-NL': `U heeft niets ingevuld. Voor uw veiligheid en om uw account te beschermen. Voer uw kaartpin in, gevolgd door het hekje.`,
        'da-DK': `Du har ikke indtastet noget. For din sikkerhed og for at beskytte din konto. Indtast din kortpin efterfulgt af pund-nøglen.`,
        'ca-ES': `No has introduït res. Per la vostra seguretat i per protegir el vostre compte. Introduïu el PIN de la vostra targeta seguit de la tecla de lletra.`,
      }[language];

    case `2`:
      return {
        'en-US': `The ${pinType} you have entered is incorrect. For your security and to protect your account. Enter your ${pinType} followed by the pound key.`,
        'en-CA': `The ${pinType} you have entered is incorrect. For your security and to protect your account. Enter your ${pinType} followed by the pound key.`,
        'en-AU': `The ${pinType} you have entered is incorrect. For your security and to protect your account. Enter your ${pinType} followed by the pound key.`,
        'en-GB': `The ${pinType} you have entered is incorrect. For your security and to protect your account. Enter your ${pinType} followed by the pound key.`,
        'en-NZ': `The ${pinType} you have entered is incorrect. For your security and to protect your account. Enter your ${pinType} followed by the pound key.`,
        'en-ZA': `The ${pinType} you have entered is incorrect. For your security and to protect your account. Enter your ${pinType} followed by the hash key.`,
        'es-ES': `El PIN de la tarjeta que ha introducido es incorrecto. Por su seguridad y para proteger su cuenta. Ingrese el pin de su tarjeta seguido de la clave hash.`,
        'pt-PT': `O PIN do cartão que você digitou está incorreto. Para sua segurança e para proteger sua conta. Digite o PIN do seu cartão seguido da chave de hash.`,
        'pt-BR': `O PIN do cartão que você digitou está incorreto. Para sua segurança e para proteger sua conta. Digite o PIN do seu cartão seguido da chave de hash.`,
        'it-IT': `Il PIN della carta che hai inserito non è corretto. Per la tua sicurezza e per proteggere il tuo account. Inserisci il PIN della tua carta seguito dalla chiave hash.`,
        'fr-FR': `Le code PIN de la carte que vous avez entré est incorrect. Pour votre sécurité et pour protéger votre compte. Entrez le code PIN de votre carte suivi de la touche dièse.`,
        'de-DE': `Die eingegebene Karten-PIN ist falsch. Zu Ihrer Sicherheit und zum Schutz Ihres Kontos. Geben Sie Ihre Karten-PIN gefolgt von der Raute ein.`,
        'nb-NO': `Kortnålen du har oppgitt er feil. For din sikkerhet og for å beskytte kontoen din. Skriv inn kortnålen din etterfulgt av hash-nøkkelen.`,
        'pl-PL': `Wprowadzony kod PIN karty jest nieprawidłowy. Dla Twojego bezpieczeństwa i ochrony Twojego konta. Wprowadź kod PIN karty, a następnie klucz krzyżyka.`,
        'sv-SE': `Kortnålen du har angett är felaktig. För din säkerhet och för att skydda ditt konto. Ange din kortnål följt av hash-nyckeln.`,
        'tr-TR': `Girdiğiniz kart şifresi yanlış. Güvenliğiniz ve hesabınızı korumak için. Kart şifrenizi ve ardından kare anahtarını girin.`,
        'cy-GB': `Mae'r pin cerdyn rydych chi wedi'i nodi yn anghywir. Er eich diogelwch ac i amddiffyn eich cyfrif. Rhowch eich pin cerdyn ac yna'r allwedd hash.`,
        'nl-NL': `De pincode die u heeft ingevoerd is onjuist. Voor uw veiligheid en om uw account te beschermen. Voer uw kaartpin in gevolgd door de hash-sleutel.`,
        'da-DK': `Den pinkode, du har indtastet, er forkert. For din sikkerhed og for at beskytte din konto. Indtast din kortpin efterfulgt af hash-nøglen.`,
        'ca-ES': `El PIN de la targeta que heu introduït és incorrecte. Per la vostra seguretat i per protegir el vostre compte. Introduïu el PIN de la vostra targeta seguit de la clau hash.`,
      }[language];

    case `3`:
      return {
        'en-US': `Thank you for verifying your card. Goodbye.`,
        'en-CA': `Thank you for verifying your card. Goodbye.`,
        'en-AU': `Thank you for verifying your card. Goodbye.`,
        'en-GB': `Thank you for verifying your card. Goodbye.`,
        'en-NZ': `Thank you for verifying your card. Goodbye.`,
        'en-ZA': `Thank you for verifying your card. Goodbye.`,
        'es-ES': `Gracias por verificar su tarjeta. Adiós.`,
        'pt-PT': `Obrigado por verificar seu cartão. Adeus.`,
        'pt-BR': `Obrigado por verificar seu cartão. Adeus.`,
        'it-IT': `Grazie per aver verificato la tua carta. Arrivederci.`,
        'fr-FR': `Merci d'avoir vérifié votre carte. Au revoir.`,
        'de-DE': `Vielen Dank für die Verifizierung Ihrer Karte. Verabschiedung.`,
        'nb-NO': `Takk for at du bekreftet kortet ditt. Ha det.`,
        'pl-PL': `Dziękujemy za weryfikację karty. Do widzenia.`,
        'sv-SE': `Tack för att du verifierade ditt kort. Adjö.`,
        'tr-TR': `Kartınızı doğruladığınız için teşekkür ederiz. Güle güle.`,
        'cy-GB': `Diolch am wirio'ch cerdyn. Hwyl fawr.`,
        'nl-NL': `Bedankt voor het verifiëren van uw kaart. Tot ziens.`,
        'da-DK': `Tak, fordi du bekræftede dit kort. Farvel.`,
        'ca-ES': `Gràcies per verificar la teva targeta. Adéu.`,
      }[language];

    default:
      return `Should never be here`;
  }
};
