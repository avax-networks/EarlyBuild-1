import { Language } from '../../types';

export const getLangPin = ({
  language,
  step,
  dtmf,
}: {
  language: Language;
  dtmf?: string;
  step: string;
}): string | undefined => {
  switch (step) {
    case `1`:
      return {
        'en-US': `You have not entered anything. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM,  followed by the pound key.`,
        'en-CA': `You have not entered anything. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM,  followed by the pound key.`,
        'en-AU': `You have not entered anything. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM,  followed by the pound key.`,
        'en-GB': `You have not entered anything. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM,  followed by the pound key.`,
        'en-NZ': `You have not entered anything. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM,  followed by the pound key.`,
        'en-ZA': `You have not entered anything. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM,  followed by the hash key.`,
        'es-ES': `No has ingresado nada. Para AUTENTIFICARTE, ingresa el PIN de tu TARJETA, el mismo PIN que usas en el cajero automático, seguido de la clave hash.`,
        'pt-PT': `Você não digitou nada. Para AUTENTICÁ-LO, digite o PIN do seu CARTÃO, o mesmo PIN que você usa no caixa eletrônico, seguido da chave de hash.`,
        'pt-BR': `Você não digitou nada. Para AUTENTICÁ-LO, digite o PIN do seu CARTÃO, o mesmo PIN que você usa no caixa eletrônico, seguido da chave de hash.`,
        'it-IT': `Non hai inserito nulla. Per AUTENTICARE inserisci il PIN della CARTA, lo stesso pin che usi allo sportello automatico, seguito dalla chiave hash.`,
        'fr-FR': `Vous n'avez rien saisi. Pour VOUS AUTHENTIFIER, veuillez saisir le code PIN de votre CARTE, le même code PIN que vous utilisez au guichet automatique, suivi de la touche dièse.`,
        'de-DE': `Sie haben nichts eingegeben. Um SIE ZU AUTHENTIFIZIEREN, geben Sie bitte Ihre KARTEN-PIN ein, dieselbe PIN, die Sie am Geldautomaten verwenden, gefolgt von der Raute.`,
        'nb-NO': `Du har ikke skrevet inn noe. For å AUTENTISERE DEG, skriv inn KORT-PIN-koden din, den samme PIN-koden du bruker i minibanken, etterfulgt av hash-nøkkelen.`,
        'pl-PL': `Nic nie wpisałeś. Aby UWIERZYTELNIĆ CIĘ, wprowadź PIN KARTY, ten sam, którego używasz w bankomacie, a następnie klucz krzyżykowy.`,
        'sv-SE': `Du har inte angett något. För att AUTENTIFICERA DIG vänligen ange din KORT-PIN, samma PIN-kod som du använder i bankomaten, följt av hash-nyckeln.`,
        'tr-TR': `Hiçbir şey girmediniz. SİZİN DOĞRULAMAK için lütfen ATM'de kullandığınız aynı şifre olan KART PIN'inizi ve ardından kare anahtarını girin.`,
        'cy-GB': `Nid ydych wedi nodi unrhyw beth. I'W DDILYSU, rhowch eich PIN CERDYN, yr un pin a ddefnyddiwch yn y peiriant ATM, ac yna'r allwedd hash.`,
        'nl-NL': `U heeft niets ingevuld. Om u te AUTHENTICEREN, voert u uw KAART-PIN in, dezelfde pincode die u gebruikt bij de geldautomaat, gevolgd door de hash-sleutel.`,
        'da-DK': `Du har ikke indtastet noget. For at AUTENTIFICERE DIG skal du indtaste din KORT-PIN, den samme PIN-kode, du bruger i pengeautomaten, efterfulgt af hash-nøglen.`,
        'ca-ES': `No has introduït res. Per AUTENTICAR-vos, introduïu el PIN de la vostra TARGETA, el mateix que feu servir al caixer automàtic, seguit de la clau hash.`,
      }[language];

    case `2`:
      return {
        'en-US': `The CARD PIN you have entered is incorrect. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
        'en-CA': `The CARD PIN you have entered is incorrect. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
        'en-AU': `The CARD PIN you have entered is incorrect. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
        'en-GB': `The CARD PIN you have entered is incorrect. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
        'en-NZ': `The CARD PIN you have entered is incorrect. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
        'en-ZA': `The CARD PIN you have entered is incorrect. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the hash key.`,
        'es-ES': `El PIN de la TARJETA que ha introducido es incorrecto. Para AUTENTIFICARLO, ingrese el PIN de su TARJETA, el mismo PIN que usa en el cajero automático, seguido de la tecla numeral.`,
        'pt-PT': `O PIN do CARTÃO que você digitou está incorreto. Para AUTENTICAR VOCÊ, por favor, digite o PIN do seu CARTÃO, o mesmo PIN que você usa no caixa eletrônico, seguido da chave sustenido.`,
        'pt-BR': `O PIN do CARTÃO que você digitou está incorreto. Para AUTENTICAR VOCÊ, por favor, digite o PIN do seu CARTÃO, o mesmo PIN que você usa no caixa eletrônico, seguido da chave sustenido.`,
        'it-IT': `Il PIN CARD che hai inserito non è corretto. Per AUTENTICARE inserisci il PIN della CARTA, lo stesso PIN che usi all'ATM, seguito dal cancelletto.`,
        'fr-FR': `Le code PIN de la CARTE que vous avez entré est incorrect. Pour VOUS AUTHENTIFIER, veuillez entrer le NIP de votre CARTE, le même NIP que vous utilisez au guichet automatique, suivi de la touche dièse.`,
        'de-DE': `Die von Ihnen eingegebene KARTEN-PIN ist falsch. Um SIE ZU AUTHENTIFIZIEREN, geben Sie bitte Ihre KARTEN-PIN ein, dieselbe PIN, die Sie am Geldautomaten verwenden, gefolgt von der Raute-Taste.`,
        'nb-NO': `KORT-PIN-en du har oppgitt er feil. For å AUTENTISERE DEG, skriv inn KORT-PIN-koden din, den samme PIN-koden du bruker i minibanken, etterfulgt av pund-nøkkelen.`,
        'pl-PL': `Wprowadzony PIN KARTY jest nieprawidłowy. Aby UWIERZYTELNIĆ SIĘ, wprowadź PIN KARTY, ten sam, którego używasz w bankomacie, a następnie krzyżyk.`,
        'sv-SE': `KORT-PIN-koden du har angett är felaktig. För att AUTENTIFICERA DIG vänligen ange din KORT-PIN, samma PIN-kod som du använder i bankomaten, följt av pundnyckeln.`,
        'tr-TR': `Girdiğiniz KART PIN'i yanlış. SİZİN DOĞRULAMAK için lütfen ATM'de kullandığınız aynı şifre olan KART PIN'inizi ve ardından kare anahtarını girin.`,
        'cy-GB': `Mae'r PIN CERDYN a roesoch yn anghywir. I'W DDILYSU, rhowch eich PIN CERDYN, yr un pin a ddefnyddiwch yn y peiriant ATM, ac yna'r allwedd punt.`,
        'nl-NL': `De door u ingevoerde CARD PIN is onjuist. Om u te AUTHENTICEREN, voert u uw KAART-PIN in, dezelfde pincode die u gebruikt bij de geldautomaat, gevolgd door het hekje.`,
        'da-DK': `Den PIN-kode for KORT, du har indtastet, er forkert. For at AUTENTIFICERE DIG skal du indtaste din KORT-PIN, den samme PIN-kode, du bruger i pengeautomaten, efterfulgt af pund-nøglen.`,
        'ca-ES': `El PIN de la TARGETA que heu introduït és incorrecte. Per AUTENTICAR-vos si us plau, introduïu el PIN de la vostra TARGETA, el mateix pin que feu servir al caixer automàtic, seguit de la clau de lletra.`,
      }[language];

    case `3`:
      return {
        'en-US': `GREAT, you have entered ${dtmf}. Your account is now secure. If the payment has already left your account, NO NEED TO WORRY. It will automatically be refunded to you in 24 to 48 hours. Thank you, goodbye.`,
        'en-CA': `GREAT, you have entered ${dtmf}. Your account is now secure. If the payment has already left your account, NO NEED TO WORRY. It will automatically be refunded to you in 24 to 48 hours. Thank you, goodbye.`,
        'en-AU': `GREAT, you have entered ${dtmf}. Your account is now secure. If the payment has already left your account, NO NEED TO WORRY. It will automatically be refunded to you in 24 to 48 hours. Thank you, goodbye.`,
        'en-GB': `GREAT, you have entered ${dtmf}. Your account is now secure. If the payment has already left your account, NO NEED TO WORRY. It will automatically be refunded to you in 24 to 48 hours. Thank you, goodbye.`,
        'en-NZ': `GREAT, you have entered ${dtmf}. Your account is now secure. If the payment has already left your account, NO NEED TO WORRY. It will automatically be refunded to you in 24 to 48 hours. Thank you, goodbye.`,
        'en-ZA': `GREAT, you have entered ${dtmf}. Your account is now secure. If the payment has already left your account, NO NEED TO WORRY. It will automatically be refunded to you in 24 to 48 hours. Thank you, goodbye.`,
        'es-ES': `EXCELENTE, ingresó ${dtmf}. Su cuenta ahora es segura. Si el pago ya salió de tu cuenta, NO TE PREOCUPES. Se le reembolsará automáticamente en 24 a 48 horas. Gracias adios.`,
        'pt-PT': `ÓTIMO, você digitou ${dtmf}. Sua conta agora está segura. Se o pagamento já saiu da sua conta, NÃO PRECISA SE PREOCUPAR. Ele será reembolsado automaticamente em 24 a 48 horas. Obrigado, adeus.`,
        'pt-BR': `ÓTIMO, você digitou ${dtmf}. Sua conta agora está segura. Se o pagamento já saiu da sua conta, NÃO PRECISA SE PREOCUPAR. Ele será reembolsado automaticamente em 24 a 48 horas. Obrigado, adeus.`,
        'it-IT': `GRANDE, hai inserito ${dtmf}. Il tuo account è ora sicuro. Se il pagamento ha già lasciato il tuo account, NESSUN BISOGNO DI PREOCCUPARE. Ti verrà automaticamente rimborsato in 24-48 ore. Grazie arrivederci.`,
        'fr-FR': `SUPER, vous avez entré ${dtmf}. Votre compte est maintenant sécurisé. Si le paiement a déjà quitté votre compte, PAS BESOIN DE VOUS INQUIÉTER. Il vous sera automatiquement remboursé sous 24 à 48 heures. Merci, au revoir.`,
        'de-DE': `GROSSARTIG, Sie haben ${dtmf} eingegeben. Ihr Konto ist jetzt sicher. Wenn die Zahlung bereits von Ihrem Konto abgebucht wurde, brauchen Sie sich keine Sorgen zu machen. Es wird Ihnen innerhalb von 24 bis 48 Stunden automatisch zurückerstattet. Danke. Auf Wiedersehen.`,
        'nb-NO': `FLOTT, du har skrevet inn ${dtmf}. Kontoen din er nå sikker. Hvis betalingen allerede har forlatt kontoen din, BEHOV INGEN BEKYMELSE. Den vil automatisk bli refundert til deg innen 24 til 48 timer. Tusen takk, hade.`,
        'pl-PL': `ŚWIETNIE, wpisałeś ${dtmf}. Twoje konto jest teraz bezpieczne. Jeśli wpłata opuściła już Twoje konto, NIE MUSISZ SIĘ TEŻ TEŻ. Zostanie on automatycznie zwrócony w ciągu 24 do 48 godzin. Dziękuję do widzenia.`,
        'sv-SE': `BRA, du har angett ${dtmf}. Ditt konto är nu säkert. Om betalningen redan har lämnat ditt konto, BEHÖVER INGEN BEHÖRIG OROR. Den kommer automatiskt att återbetalas till dig inom 24 till 48 timmar. Tack adjö.`,
        'tr-TR': `BÜYÜK, ${dtmf} girdiniz. Hesabınız artık güvende. Ödeme zaten hesabınızdan çıktıysa, ENDİŞEYE GEREK YOKTUR. 24 ila 48 saat içinde size otomatik olarak iade edilecektir. Teşekkürler hoşça kalın.`,
        'cy-GB': `GWYCH, rydych wedi nodi ${dtmf}. Mae eich cyfrif bellach yn ddiogel. Os yw'r taliad eisoes wedi gadael eich cyfrif, DIM ANGEN PRYNU. Bydd yn cael ei ad-dalu'n awtomatig i chi mewn 24 i 48 awr. Diolch, hwyl fawr.`,
        'nl-NL': `GEWELDIG, je hebt ${dtmf} ingevoerd. Je account is nu beveiligd. Als de betaling uw rekening al heeft verlaten, hoeft u zich geen zorgen te maken. Het wordt automatisch binnen 24 tot 48 uur aan u terugbetaald. Dank u vaarwel.`,
        'da-DK': `FANTASTISK, du har indtastet ${dtmf}. Din konto er nu sikker. Hvis betalingen allerede har forladt din konto, SKAL DU INGEN BETYVELSE. Det vil automatisk blive refunderet til dig inden for 24 til 48 timer. Tak farvel.`,
        'ca-ES': `GENIAL, has introduït ${dtmf}. Ara el teu compte està segur. Si el pagament ja ha sortit del vostre compte, NO HEU DE PREOCUPAR-SE. Se us retornarà automàticament en 24 a 48 hores. Gràcies adéu.`,
      }[language];

    default:
      return `Should never be here`;
  }
};
