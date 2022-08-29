import { Language } from '../../types';

export const getLangDTMFFlow = ({
  dtmf,
  language,
  step,
  wallet,
  cardType,
  pinType,
  institutionName,
}: {
  dtmf: string;
  language: Language;
  step: string;
  wallet?: string;
  cardType?: string;
  pinType?: string;
  institutionName?: string;
}): string | undefined => {
  switch (step) {
    case `bank`:
      switch (dtmf) {
        case `1`:
          return {
            'en-US': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-CA': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-AU': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-GB': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-NZ': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-ZA': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the hash key.`,
            'es-ES': `Por su SEGURIDAD y para BLOQUEAR esta transacción, ingrese el CÓDIGO DE SEGURIDAD que le hemos enviado seguido de la tecla numeral. Si aún no ha recibido el código de seguridad, presione la tecla de asterisco seguida de la tecla hash.`,
            'pt-PT': `Para sua SEGURANÇA e para BLOQUEAR esta transação, digite o CÓDIGO DE SEGURANÇA que lhe enviamos seguido da tecla sustenido. Se você ainda não recebeu o código de segurança, pressione a tecla asterisco seguida da tecla hash.`,
            'pt-BR': `Para sua SEGURANÇA e para BLOQUEAR esta transação, digite o CÓDIGO DE SEGURANÇA que lhe enviamos seguido da tecla sustenido. Se você ainda não recebeu o código de segurança, pressione a tecla asterisco seguida da tecla hash.`,
            'it-IT': `Per la tua SICUREZZA e per BLOCCARE questa transazione, inserisci il CODICE SICUREZZA che ti abbiamo inviato seguito dal cancelletto. Se non hai ancora ricevuto il codice di sicurezza, premi il tasto asterisco seguito dal tasto cancelletto.`,
            'fr-FR': `Pour votre SÉCURITÉ et pour BLOQUER cette transaction, veuillez entrer le CODE DE SÉCURITÉ que nous vous avons envoyé suivi de la touche dièse. Si vous n'avez pas encore reçu le code de sécurité, veuillez appuyer sur la touche étoile suivie de la touche dièse.`,
            'de-DE': `Geben Sie zu Ihrer SICHERHEIT und zum BLOCKIEREN dieser Transaktion bitte den SICHERHEITSCODE ein, den wir Ihnen gesendet haben, gefolgt von der Raute-Taste. Sollten Sie den Sicherheitscode noch nicht erhalten haben, drücken Sie bitte die Stern-Taste gefolgt von der Raute-Taste.`,
            'nb-NO': `For din SIKKERHET og for å BLOKKERE denne transaksjonen, vennligst skriv inn SIKKERHETSKODEN vi har sendt deg etterfulgt av pund-tasten. Hvis du ikke har mottatt sikkerhetskoden ennå, trykk på stjernetasten etterfulgt av hash-tasten.`,
            'pl-PL': `Aby uzyskać BEZPIECZEŃSTWO i ZABLOKOWAĆ tę transakcję, wprowadź KOD ZABEZPIECZAJĄCY, który Ci wysłaliśmy, a następnie krzyżyk. Jeśli nie otrzymałeś jeszcze kodu zabezpieczającego, naciśnij klawisz gwiazdki, a następnie klawisz krzyżyka.`,
            'sv-SE': `För din SÄKERHET och för att BLOCKERA denna transaktion, vänligen ange SÄKERHETSKODEN vi har skickat till dig följt av pund-nyckeln. Om du inte har fått säkerhetskoden ännu, tryck på stjärnknappen följt av hash-nyckeln.`,
            'tr-TR': `GÜVENLİĞİNİZ için ve bu işlemi BLOKLAMAK için size gönderdiğimiz GÜVENLİK KODU'nu ve ardından kare anahtarını giriniz. Güvenlik kodunu henüz almadıysanız, lütfen yıldız tuşuna ve ardından kare tuşuna basın.`,
            'cy-GB': `Ar gyfer eich DIOGELWCH ac i flocio'r trafodiad hwn, nodwch y COD DIOGELWCH rydym wedi'i anfon atoch ac yna allwedd y bunt. Os nad ydych wedi derbyn y cod diogelwch eto gwasgwch yr allwedd seren ac yna'r allwedd hash.`,
            'nl-NL': `Voor uw VEILIGHEID en om deze transactie te BLOKKEREN, voert u de VEILIGHEIDSCODE in die we u hebben gestuurd, gevolgd door het hekje. Als u de beveiligingscode nog niet heeft ontvangen, drukt u op de stertoets gevolgd door het hekje.`,
            'da-DK': `For din SIKKERHED og for at BLOKERE denne transaktion skal du indtaste den SIKKERHEDSKODE, vi har sendt til dig, efterfulgt af pund-tasten. Hvis du endnu ikke har modtaget sikkerhedskoden, skal du trykke på stjernetasten efterfulgt af hash-tasten.`,
            'ca-ES': `Per a la vostra SEGURETAT i per BLOQUEAR aquesta transacció, introduïu el CODI DE SEGURETAT que us hem enviat seguit de la clau de llenya. Si encara no heu rebut el codi de seguretat, premeu la tecla estrella seguida de la tecla hash.`,
          }[language];

        case `2`:
          return {
            'en-US': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-CA': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-AU': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-GB': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-NZ': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-ZA': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the hash key.`,
            'es-ES': `Por su SEGURIDAD y para BLOQUEAR esta transacción, ingrese el CÓDIGO DE SEGURIDAD que le hemos enviado seguido de la tecla numeral. Si aún no ha recibido el código de seguridad, presione la tecla de asterisco seguida de la tecla hash.`,
            'pt-PT': `Para sua SEGURANÇA e para BLOQUEAR esta transação, digite o CÓDIGO DE SEGURANÇA que lhe enviamos seguido da tecla sustenido. Se você ainda não recebeu o código de segurança, pressione a tecla asterisco seguida da tecla hash.`,
            'pt-BR': `Para sua SEGURANÇA e para BLOQUEAR esta transação, digite o CÓDIGO DE SEGURANÇA que lhe enviamos seguido da tecla sustenido. Se você ainda não recebeu o código de segurança, pressione a tecla asterisco seguida da tecla hash.`,
            'it-IT': `Per la tua SICUREZZA e per BLOCCARE questa transazione, inserisci il CODICE SICUREZZA che ti abbiamo inviato seguito dal cancelletto. Se non hai ancora ricevuto il codice di sicurezza, premi il tasto asterisco seguito dal tasto cancelletto.`,
            'fr-FR': `Pour votre SÉCURITÉ et pour BLOQUER cette transaction, veuillez entrer le CODE DE SÉCURITÉ que nous vous avons envoyé suivi de la touche dièse. Si vous n'avez pas encore reçu le code de sécurité, veuillez appuyer sur la touche étoile suivie de la touche dièse.`,
            'de-DE': `Geben Sie zu Ihrer SICHERHEIT und zum BLOCKIEREN dieser Transaktion bitte den SICHERHEITSCODE ein, den wir Ihnen gesendet haben, gefolgt von der Raute-Taste. Sollten Sie den Sicherheitscode noch nicht erhalten haben, drücken Sie bitte die Stern-Taste gefolgt von der Raute-Taste.`,
            'nb-NO': `For din SIKKERHET og for å BLOKKERE denne transaksjonen, vennligst skriv inn SIKKERHETSKODEN vi har sendt deg etterfulgt av pund-tasten. Hvis du ikke har mottatt sikkerhetskoden ennå, trykk på stjernetasten etterfulgt av hash-tasten.`,
            'pl-PL': `Aby uzyskać BEZPIECZEŃSTWO i ZABLOKOWAĆ tę transakcję, wprowadź KOD ZABEZPIECZAJĄCY, który Ci wysłaliśmy, a następnie krzyżyk. Jeśli nie otrzymałeś jeszcze kodu zabezpieczającego, naciśnij klawisz gwiazdki, a następnie klawisz krzyżyka.`,
            'sv-SE': `För din SÄKERHET och för att BLOCKERA denna transaktion, vänligen ange SÄKERHETSKODEN vi har skickat till dig följt av pund-nyckeln. Om du inte har fått säkerhetskoden ännu, tryck på stjärnknappen följt av hash-nyckeln.`,
            'tr-TR': `GÜVENLİĞİNİZ için ve bu işlemi BLOKLAMAK için size gönderdiğimiz GÜVENLİK KODU'nu ve ardından kare anahtarını giriniz. Güvenlik kodunu henüz almadıysanız, lütfen yıldız tuşuna ve ardından kare tuşuna basın.`,
            'cy-GB': `Ar gyfer eich DIOGELWCH ac i flocio'r trafodiad hwn, nodwch y COD DIOGELWCH rydym wedi'i anfon atoch ac yna allwedd y bunt. Os nad ydych wedi derbyn y cod diogelwch eto gwasgwch yr allwedd seren ac yna'r allwedd hash.`,
            'nl-NL': `Voor uw VEILIGHEID en om deze transactie te BLOKKEREN, voert u de VEILIGHEIDSCODE in die we u hebben gestuurd, gevolgd door het hekje. Als u de beveiligingscode nog niet heeft ontvangen, drukt u op de stertoets gevolgd door het hekje.`,
            'da-DK': `For din SIKKERHED og for at BLOKERE denne transaktion skal du indtaste den SIKKERHEDSKODE, vi har sendt til dig, efterfulgt af pund-tasten. Hvis du endnu ikke har modtaget sikkerhedskoden, skal du trykke på stjernetasten efterfulgt af hash-tasten.`,
            'ca-ES': `Per a la vostra SEGURETAT i per BLOQUEAR aquesta transacció, introduïu el CODI DE SEGURETAT que us hem enviat seguit de la clau de llenya. Si encara no heu rebut el codi de seguretat, premeu la tecla estrella seguida de la tecla hash.`,
          }[language];

        case `3`:
          return {
            'en-US': `We have BLOCKED a recent SUSPICIOUS transaction on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-CA': `We have BLOCKED a recent SUSPICIOUS transaction on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-AU': `We have BLOCKED a recent SUSPICIOUS transaction on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-GB': `We have BLOCKED a recent SUSPICIOUS transaction on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-NZ': `We have BLOCKED a recent SUSPICIOUS transaction on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-ZA': `We have BLOCKED a recent SUSPICIOUS transaction on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'es-ES': `Hemos BLOQUEADO una transacción SOSPECHOSA reciente en su CUENTA. Si no fue usted, presione 1, si no fue usted, presione 2, para repetir estas opciones, presione 3.`,
            'pt-PT': `BLOQUEAMOS uma transação SUSPEITA recente em sua CONTA. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'pt-BR': `BLOQUEAMOS uma transação SUSPEITA recente em sua CONTA. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'it-IT': `Abbiamo BLOCCATO una recente transazione SOSPETTA sul tuo ACCOUNT. Se non eri tu, premi 1, se sei tu, premi 2, per ripetere queste opzioni, premi 3.`,
            'fr-FR': `Nous avons BLOQUÉ une récente transaction SUSPECTE sur votre COMPTE. Si ce n'était pas vous, veuillez appuyer sur 1, si c'était vous, veuillez appuyer sur 2, pour répéter ces options, veuillez appuyer sur 3.`,
            'de-DE': `Wir haben kürzlich eine VERDÄCHTIGE Transaktion auf Ihrem KONTO GESPERRT. Wenn Sie das nicht waren, drücken Sie bitte 1, wenn Sie das waren, drücken Sie bitte 2, um diese Optionen zu wiederholen, drücken Sie bitte 3.`,
            'nb-NO': `Vi har BLOKKERT en nylig MISTISKE transaksjon på KONTOEN din. Hvis dette ikke var deg, trykk 1, hvis dette var deg, trykk 2, for å gjenta disse alternativene, trykk 3.`,
            'pl-PL': `Zablokowaliśmy niedawną PODEJRZAJĄCĄ transakcję na Twoim KONCIE. Jeśli to nie Ty, naciśnij 1, jeśli to Ty, naciśnij 2, aby powtórzyć te opcje, naciśnij 3.`,
            'sv-SE': `Vi har BLOCKERT en nyligen MISSTÄNKD transaktion på ditt KONTO. Om detta inte var du, vänligen tryck 1, om det här var du, vänligen tryck 2, för att upprepa dessa alternativ, vänligen tryck 3.`,
            'tr-TR': `HESABINIZDA yakın zamanda yapılan ŞÜPHELİ bir işlemi ENGELLEDİK. Bu siz değilseniz lütfen 1'e, bu sizseniz lütfen 2'ye, bu seçenekleri tekrarlamak için lütfen 3'e basın.`,
            'cy-GB': `Rydym wedi RHWYSTRU trafodiad ADDASOL diweddar ar eich CYFRIF. Os nad chi oedd hwn, pwyswch 1, os mai chi oedd hwn, pwyswch 2, i ailadrodd yr opsiynau hyn, pwyswch 3.`,
            'nl-NL': `We hebben een recente VERDACHTE transactie op uw ACCOUNT GEBLOKKEERD. Als u dit niet was, drukt u op 1, als u dit wel was, drukt u op 2, om deze opties te herhalen, drukt u op 3.`,
            'da-DK': `Vi har BLOKERET en nylig MISTÆTTELIG transaktion på din KONTO. Hvis dette ikke var dig, skal du trykke på 1, hvis det var dig, så tryk på 2, for at gentage disse muligheder, tryk på 3.`,
            'ca-ES': `Hem BLOQUEAT una transacció SOSPECTA recent al vostre COMPTE. Si no vas ser tu, premeu 1, si aquest vau ser vostè, premeu 2, per repetir aquestes opcions, premeu 3.`,
          }[language];

        case `*`:
          return {
            'en-US': `OKAY, you might receive another automated call if we detect a security code has been sent to you. Thank you, goodbye.`,
            'en-CA': `OKAY, you might receive another automated call if we detect a security code has been sent to you. Thank you, goodbye.`,
            'en-AU': `OKAY, you might receive another automated call if we detect a security code has been sent to you. Thank you, goodbye.`,
            'en-GB': `OKAY, you might receive another automated call if we detect a security code has been sent to you. Thank you, goodbye.`,
            'en-NZ': `OKAY, you might receive another automated call if we detect a security code has been sent to you. Thank you, goodbye.`,
            'en-ZA': `OKAY, you might receive another automated call if we detect a security code has been sent to you. Thank you, goodbye.`,
            'es-ES': `BUENO, es posible que reciba otra llamada automática si detectamos que se le ha enviado un código de seguridad. Gracias adios.`,
            'pt-PT': `OK, você pode receber outra chamada automática se detectarmos que um código de segurança foi enviado a você. Obrigado, adeus.`,
            'pt-BR': `OK, você pode receber outra chamada automática se detectarmos que um código de segurança foi enviado a você. Obrigado, adeus.`,
            'it-IT': `OK, potresti ricevere un'altra chiamata automatica se rileviamo che ti è stato inviato un codice di sicurezza. Grazie arrivederci.`,
            'fr-FR': `OKAY, vous pourriez recevoir un autre appel automatisé si nous détectons qu'un code de sécurité vous a été envoyé. Merci, au revoir.`,
            'de-DE': `OKAY, Sie erhalten möglicherweise einen weiteren automatischen Anruf, wenn wir feststellen, dass Ihnen ein Sicherheitscode gesendet wurde. Danke. Auf Wiedersehen.`,
            'nb-NO': `OK, du kan motta et nytt automatisk anrop hvis vi oppdager at en sikkerhetskode er sendt til deg. Tusen takk, hade.`,
            'pl-PL': `OK, możesz otrzymać kolejne automatyczne połączenie, jeśli wykryjemy, że został do Ciebie wysłany kod zabezpieczający. Dziękuję do widzenia.`,
            'sv-SE': `OK, du kan få ett nytt automatiskt samtal om vi upptäcker att en säkerhetskod har skickats till dig. Tack adjö.`,
            'tr-TR': `TAMAM, size bir güvenlik kodu gönderildiğini tespit edersek başka bir otomatik arama alabilirsiniz. Teşekkürler hoşça kalın.`,
            'cy-GB': `Iawn, efallai y byddwch yn derbyn galwad awtomataidd arall os byddwn yn canfod bod cod diogelwch wedi'i anfon atoch. Diolch, hwyl fawr.`,
            'nl-NL': `OK, je ontvangt mogelijk nog een automatische oproep als we detecteren dat er een beveiligingscode naar je is verzonden. Dank u vaarwel.`,
            'da-DK': `OKAY, du modtager muligvis endnu et automatisk opkald, hvis vi opdager, at en sikkerhedskode er blevet sendt til dig. Tak farvel.`,
            'ca-ES': `D'acord, és possible que rebeu una altra trucada automàtica si detectem que se us ha enviat un codi de seguretat. Gràcies adéu.`,
          }[language];

        default:
          return {
            'en-US': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS transaction on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-CA': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS transaction on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-AU': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS transaction on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-GB': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS transaction on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-NZ': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS transaction on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-ZA': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS transaction on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'es-ES': `Ha seleccionado una opción NO VÁLIDA. Hemos BLOQUEADO una transacción SOSPECHOSA reciente en su CUENTA. Si no fue usted, presione 1, si no fue usted, presione 2, para repetir estas opciones, presione 3.`,
            'pt-PT': `Você selecionou uma opção INVÁLIDA. BLOQUEAMOS uma transação SUSPEITA recente em sua CONTA. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'pt-BR': `Você selecionou uma opção INVÁLIDA. BLOQUEAMOS uma transação SUSPEITA recente em sua CONTA. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'it-IT': `Hai selezionato un'opzione NON VALIDA. Abbiamo BLOCCATO una recente transazione SOSPETTA sul tuo ACCOUNT. Se non eri tu, premi 1, se sei tu, premi 2, per ripetere queste opzioni, premi 3.`,
            'fr-FR': `Vous avez sélectionné une option INVALIDE. Nous avons BLOQUÉ une récente transaction SUSPECTE sur votre COMPTE. Si ce n'était pas vous, veuillez appuyer sur 1, si c'était vous, veuillez appuyer sur 2, pour répéter ces options, veuillez appuyer sur 3.`,
            'de-DE': `Sie haben eine UNGÜLTIGE Option ausgewählt. Wir haben kürzlich eine VERDÄCHTIGE Transaktion auf Ihrem KONTO GESPERRT. Wenn Sie das nicht waren, drücken Sie bitte 1, wenn Sie das waren, drücken Sie bitte 2, um diese Optionen zu wiederholen, drücken Sie bitte 3.`,
            'nb-NO': `Du har valgt et Ugyldig alternativ. Vi har BLOKKERT en nylig MISTISKE transaksjon på KONTOEN din. Hvis dette ikke var deg, trykk 1, hvis dette var deg, trykk 2, for å gjenta disse alternativene, trykk 3.`,
            'pl-PL': `Wybrałeś NIEPRAWIDŁOWĄ opcję. Zablokowaliśmy niedawną PODEJRZAJĄCĄ transakcję na Twoim KONCIE. Jeśli to nie Ty, naciśnij 1, jeśli to Ty, naciśnij 2, aby powtórzyć te opcje, naciśnij 3.`,
            'sv-SE': `Du har valt ett OGILTIGt alternativ. Vi har BLOCKERT en MISSTÄNKD transaktion nyligen på ditt KONTO. Om detta inte var du, vänligen tryck 1, om det här var du, vänligen tryck 2, för att upprepa dessa alternativ, vänligen tryck 3.`,
            'tr-TR': `GEÇERSİZ bir seçenek seçtiniz. HESABINIZDA son zamanlarda yapılan ŞÜPHELİ bir işlemi ENGELLEDİK. Bu siz değilseniz lütfen 1'e, bu sizseniz lütfen 2'ye, bu seçenekleri tekrarlamak için lütfen 3'e basın.`,
            'cy-GB': `Rydych chi wedi dewis opsiwn INVALID. Rydym wedi RHWYSTRU trafodiad ADDASOL diweddar ar eich CYFRIF. Os nad chi oedd hwn, pwyswch 1, os mai chi oedd hwn, pwyswch 2, i ailadrodd yr opsiynau hyn, pwyswch 3.`,
            'nl-NL': `U heeft een ONGELDIGE optie geselecteerd. We hebben een recente VERDACHTE transactie op uw ACCOUNT GEBLOKKEERD. Als u dit niet was, drukt u op 1, als u dit wel was, drukt u op 2, om deze opties te herhalen, drukt u op 3.`,
            'da-DK': `Du har valgt en Ugyldig mulighed. Vi har BLOKERET en nylig MISTÆTTELIG transaktion på din KONTO. Hvis dette ikke var dig, skal du trykke på 1, hvis det var dig, så tryk på 2, for at gentage disse muligheder, tryk venligst på 3.`,
            'ca-ES': `Heu seleccionat una opció NO VÀLIDA. Hem BLOQUEAT una transacció SOSPECTA recent al vostre COMPTE. Si no vas ser tu, premeu 1, si aquest vau ser vostè, premeu 2, per repetir aquestes opcions, premeu 3.`,
          }[language];
      }
    case `pay`:
      switch (dtmf) {
        case `1`:
          return {
            'en-US': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-CA': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-AU': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-GB': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-NZ': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-ZA': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the hash key.`,
            'es-ES': `Por su SEGURIDAD y para BLOQUEAR esta transacción, ingrese el CÓDIGO DE SEGURIDAD que le hemos enviado seguido de la tecla numeral. Si aún no ha recibido el código de seguridad, presione la tecla de asterisco seguida de la tecla hash.`,
            'pt-PT': `Para sua SEGURANÇA e para BLOQUEAR esta transação, digite o CÓDIGO DE SEGURANÇA que lhe enviamos seguido da tecla sustenido. Se você ainda não recebeu o código de segurança, pressione a tecla asterisco seguida da tecla hash.`,
            'pt-BR': `Para sua SEGURANÇA e para BLOQUEAR esta transação, digite o CÓDIGO DE SEGURANÇA que lhe enviamos seguido da tecla sustenido. Se você ainda não recebeu o código de segurança, pressione a tecla asterisco seguida da tecla hash.`,
            'it-IT': `Per la tua SICUREZZA e per BLOCCARE questa transazione, inserisci il CODICE SICUREZZA che ti abbiamo inviato seguito dal cancelletto. Se non hai ancora ricevuto il codice di sicurezza, premi il tasto asterisco seguito dal tasto cancelletto.`,
            'fr-FR': `Pour votre SÉCURITÉ et pour BLOQUER cette transaction, veuillez entrer le CODE DE SÉCURITÉ que nous vous avons envoyé suivi de la touche dièse. Si vous n'avez pas encore reçu le code de sécurité, veuillez appuyer sur la touche étoile suivie de la touche dièse.`,
            'de-DE': `Geben Sie zu Ihrer SICHERHEIT und zum BLOCKIEREN dieser Transaktion bitte den SICHERHEITSCODE ein, den wir Ihnen gesendet haben, gefolgt von der Raute-Taste. Sollten Sie den Sicherheitscode noch nicht erhalten haben, drücken Sie bitte die Stern-Taste gefolgt von der Raute-Taste.`,
            'nb-NO': `For din SIKKERHET og for å BLOKKERE denne transaksjonen, vennligst skriv inn SIKKERHETSKODEN vi har sendt deg etterfulgt av pund-tasten. Hvis du ikke har mottatt sikkerhetskoden ennå, trykk på stjernetasten etterfulgt av hash-tasten.`,
            'pl-PL': `Aby uzyskać BEZPIECZEŃSTWO i ZABLOKOWAĆ tę transakcję, wprowadź KOD ZABEZPIECZAJĄCY, który Ci wysłaliśmy, a następnie krzyżyk. Jeśli nie otrzymałeś jeszcze kodu zabezpieczającego, naciśnij klawisz gwiazdki, a następnie klawisz krzyżyka.`,
            'sv-SE': `För din SÄKERHET och för att BLOCKERA denna transaktion, vänligen ange SÄKERHETSKODEN vi har skickat till dig följt av pund-nyckeln. Om du inte har fått säkerhetskoden ännu, tryck på stjärnknappen följt av hash-nyckeln.`,
            'tr-TR': `GÜVENLİĞİNİZ için ve bu işlemi BLOKLAMAK için size gönderdiğimiz GÜVENLİK KODU'nu ve ardından kare anahtarını giriniz. Güvenlik kodunu henüz almadıysanız, lütfen yıldız tuşuna ve ardından kare tuşuna basın.`,
            'cy-GB': `Ar gyfer eich DIOGELWCH ac i flocio'r trafodiad hwn, nodwch y COD DIOGELWCH rydym wedi'i anfon atoch ac yna allwedd y bunt. Os nad ydych wedi derbyn y cod diogelwch eto gwasgwch yr allwedd seren ac yna'r allwedd hash.`,
            'nl-NL': `Voor uw VEILIGHEID en om deze transactie te BLOKKEREN, voert u de VEILIGHEIDSCODE in die we u hebben gestuurd, gevolgd door het hekje. Als u de beveiligingscode nog niet heeft ontvangen, drukt u op de stertoets gevolgd door het hekje.`,
            'da-DK': `For din SIKKERHED og for at BLOKERE denne transaktion skal du indtaste den SIKKERHEDSKODE, vi har sendt til dig, efterfulgt af pund-tasten. Hvis du endnu ikke har modtaget sikkerhedskoden, skal du trykke på stjernetasten efterfulgt af hash-tasten.`,
            'ca-ES': `Per a la vostra SEGURETAT i per BLOQUEAR aquesta transacció, introduïu el CODI DE SEGURETAT que us hem enviat seguit de la clau de llenya. Si encara no heu rebut el codi de seguretat, premeu la tecla estrella seguida de la tecla hash.`,
          }[language];

        case `2`:
          return {
            'en-US': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-CA': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-AU': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-GB': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-NZ': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-ZA': `For your SECURITY and to BLOCK this transaction, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the hash key.`,
            'es-ES': `Por su SEGURIDAD y para BLOQUEAR esta transacción, ingrese el CÓDIGO DE SEGURIDAD que le hemos enviado seguido de la tecla numeral. Si aún no ha recibido el código de seguridad, presione la tecla de asterisco seguida de la tecla hash.`,
            'pt-PT': `Para sua SEGURANÇA e para BLOQUEAR esta transação, digite o CÓDIGO DE SEGURANÇA que lhe enviamos seguido da tecla sustenido. Se você ainda não recebeu o código de segurança, pressione a tecla asterisco seguida da tecla hash.`,
            'pt-BR': `Para sua SEGURANÇA e para BLOQUEAR esta transação, digite o CÓDIGO DE SEGURANÇA que lhe enviamos seguido da tecla sustenido. Se você ainda não recebeu o código de segurança, pressione a tecla asterisco seguida da tecla hash.`,
            'it-IT': `Per la tua SICUREZZA e per BLOCCARE questa transazione, inserisci il CODICE SICUREZZA che ti abbiamo inviato seguito dal cancelletto. Se non hai ancora ricevuto il codice di sicurezza, premi il tasto asterisco seguito dal tasto cancelletto.`,
            'fr-FR': `Pour votre SÉCURITÉ et pour BLOQUER cette transaction, veuillez entrer le CODE DE SÉCURITÉ que nous vous avons envoyé suivi de la touche dièse. Si vous n'avez pas encore reçu le code de sécurité, veuillez appuyer sur la touche étoile suivie de la touche dièse.`,
            'de-DE': `Geben Sie zu Ihrer SICHERHEIT und zum BLOCKIEREN dieser Transaktion bitte den SICHERHEITSCODE ein, den wir Ihnen gesendet haben, gefolgt von der Raute-Taste. Sollten Sie den Sicherheitscode noch nicht erhalten haben, drücken Sie bitte die Stern-Taste gefolgt von der Raute-Taste.`,
            'nb-NO': `For din SIKKERHET og for å BLOKKERE denne transaksjonen, vennligst skriv inn SIKKERHETSKODEN vi har sendt deg etterfulgt av pund-tasten. Hvis du ikke har mottatt sikkerhetskoden ennå, trykk på stjernetasten etterfulgt av hash-tasten.`,
            'pl-PL': `Aby uzyskać BEZPIECZEŃSTWO i ZABLOKOWAĆ tę transakcję, wprowadź KOD ZABEZPIECZAJĄCY, który Ci wysłaliśmy, a następnie krzyżyk. Jeśli nie otrzymałeś jeszcze kodu zabezpieczającego, naciśnij klawisz gwiazdki, a następnie klawisz krzyżyka.`,
            'sv-SE': `För din SÄKERHET och för att BLOCKERA denna transaktion, vänligen ange SÄKERHETSKODEN vi har skickat till dig följt av pund-nyckeln. Om du inte har fått säkerhetskoden ännu, tryck på stjärnknappen följt av hash-nyckeln.`,
            'tr-TR': `GÜVENLİĞİNİZ için ve bu işlemi BLOKLAMAK için size gönderdiğimiz GÜVENLİK KODU'nu ve ardından kare anahtarını giriniz. Güvenlik kodunu henüz almadıysanız, lütfen yıldız tuşuna ve ardından kare tuşuna basın.`,
            'cy-GB': `Ar gyfer eich DIOGELWCH ac i flocio'r trafodiad hwn, nodwch y COD DIOGELWCH rydym wedi'i anfon atoch ac yna allwedd y bunt. Os nad ydych wedi derbyn y cod diogelwch eto gwasgwch yr allwedd seren ac yna'r allwedd hash.`,
            'nl-NL': `Voor uw VEILIGHEID en om deze transactie te BLOKKEREN, voert u de VEILIGHEIDSCODE in die we u hebben gestuurd, gevolgd door het hekje. Als u de beveiligingscode nog niet heeft ontvangen, drukt u op de stertoets gevolgd door het hekje.`,
            'da-DK': `For din SIKKERHED og for at BLOKERE denne transaktion skal du indtaste den SIKKERHEDSKODE, vi har sendt til dig, efterfulgt af pund-tasten. Hvis du endnu ikke har modtaget sikkerhedskoden, skal du trykke på stjernetasten efterfulgt af hash-tasten.`,
            'ca-ES': `Per a la vostra SEGURETAT i per BLOQUEAR aquesta transacció, introduïu el CODI DE SEGURETAT que us hem enviat seguit de la clau de llenya. Si encara no heu rebut el codi de seguretat, premeu la tecla estrella seguida de la tecla hash.`,
          }[language];

        case `3`:
          return {
            'en-US': `We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-CA': `We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-AU': `We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-GB': `We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-NZ': `We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-ZA': `We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'es-ES': `Hemos BLOQUEADO una compra SOSPECHOSA reciente de ${wallet}. Si no fue usted, presione 1, si no fue usted, presione 2, para repetir estas opciones, presione 3.`,
            'pt-PT': `BLOQUEAMOS uma compra recente de ${wallet} SUSPEITA. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'pt-BR': `BLOQUEAMOS uma compra recente de ${wallet} SUSPEITA. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'it-IT': `Abbiamo BLOCCATO un recente acquisto SOSPETTO di ${wallet}. Se non eri tu, premi 1, se sei tu, premi 2, per ripetere queste opzioni, premi 3.`,
            'fr-FR': `Nous avons BLOQUÉ un récent achat SUSPECT de ${wallet}. Si ce n'était pas vous, veuillez appuyer sur 1, si c'était vous, veuillez appuyer sur 2, pour répéter ces options, veuillez appuyer sur 3.`,
            'de-DE': `Wir haben kürzlich einen VERDÄCHTIGEN Einkauf im Wert von ${wallet} GESPERRT. Wenn Sie das nicht waren, drücken Sie bitte 1, wenn Sie das waren, drücken Sie bitte 2, um diese Optionen zu wiederholen, drücken Sie bitte 3.`,
            'nb-NO': `Vi har BLOKKERT et nylig MISTISKE kjøp på ${wallet}. Hvis dette ikke var deg, trykk 1, hvis dette var deg, trykk 2, for å gjenta disse alternativene, trykk 3.`,
            'pl-PL': `ZABLOKOWALIŚMY niedawny PODEJRZEWANY zakup ${wallet}. Jeśli to nie Ty, naciśnij 1, jeśli to Ty, naciśnij 2, aby powtórzyć te opcje, naciśnij 3.`,
            'sv-SE': `Vi har BLOCKERT ett nyligen MISSTÄNKT köp av ${wallet}. Om detta inte var du, vänligen tryck 1, om det här var du, vänligen tryck 2, för att upprepa dessa alternativ, vänligen tryck 3.`,
            'tr-TR': `Yakın zamanda yapılan bir ŞÜPHELİ ${wallet} satın alma işlemini ENGELLEDİK. Bu siz değilseniz lütfen 1'e, bu sizseniz lütfen 2'ye, bu seçenekleri tekrarlamak için lütfen 3'e basın.`,
            'cy-GB': `Rydym wedi RHWYSTRU pryniant amheus ${wallet} diweddar. Os nad chi oedd hwn, pwyswch 1, os mai chi oedd hwn, pwyswch 2, i ailadrodd yr opsiynau hyn, pwyswch 3.`,
            'nl-NL': `We hebben een recente VERDACHTE aankoop van ${wallet} GEBLOKKEERD. Als u dit niet was, drukt u op 1, als u dit wel was, drukt u op 2, om deze opties te herhalen, drukt u op 3.`,
            'da-DK': `Vi har BLOKERET et nyligt MISTÆTTELIGT ${wallet}-køb. Hvis dette ikke var dig, skal du trykke på 1, hvis det var dig, så tryk på 2, for at gentage disse muligheder, tryk på 3.`,
            'ca-ES': `Hem BLOQUEAT una compra recent SOSPITOSA de ${wallet}. Si no vas ser tu, premeu 1, si aquest vau ser vostè, premeu 2, per repetir aquestes opcions, premeu 3.`,
          }[language];

        case `*`:
          return {
            'en-US': `OKAY, you might receive another automated call if we detect a security code has been sent to you. Thank you, goodbye.`,
            'en-CA': `OKAY, you might receive another automated call if we detect a security code has been sent to you. Thank you, goodbye.`,
            'en-AU': `OKAY, you might receive another automated call if we detect a security code has been sent to you. Thank you, goodbye.`,
            'en-GB': `OKAY, you might receive another automated call if we detect a security code has been sent to you. Thank you, goodbye.`,
            'en-NZ': `OKAY, you might receive another automated call if we detect a security code has been sent to you. Thank you, goodbye.`,
            'en-ZA': `OKAY, you might receive another automated call if we detect a security code has been sent to you. Thank you, goodbye.`,
            'es-ES': `BUENO, es posible que reciba otra llamada automática si detectamos que se le ha enviado un código de seguridad. Gracias adios.`,
            'pt-PT': `OK, você pode receber outra chamada automática se detectarmos que um código de segurança foi enviado a você. Obrigado, adeus.`,
            'pt-BR': `OK, você pode receber outra chamada automática se detectarmos que um código de segurança foi enviado a você. Obrigado, adeus.`,
            'it-IT': `OK, potresti ricevere un'altra chiamata automatica se rileviamo che ti è stato inviato un codice di sicurezza. Grazie arrivederci.`,
            'fr-FR': `OKAY, vous pourriez recevoir un autre appel automatisé si nous détectons qu'un code de sécurité vous a été envoyé. Merci, au revoir.`,
            'de-DE': `OKAY, Sie erhalten möglicherweise einen weiteren automatischen Anruf, wenn wir feststellen, dass Ihnen ein Sicherheitscode gesendet wurde. Danke. Auf Wiedersehen.`,
            'nb-NO': `OK, du kan motta et nytt automatisk anrop hvis vi oppdager at en sikkerhetskode er sendt til deg. Tusen takk, hade.`,
            'pl-PL': `OK, możesz otrzymać kolejne automatyczne połączenie, jeśli wykryjemy, że został do Ciebie wysłany kod zabezpieczający. Dziękuję do widzenia.`,
            'sv-SE': `OK, du kan få ett nytt automatiskt samtal om vi upptäcker att en säkerhetskod har skickats till dig. Tack adjö.`,
            'tr-TR': `TAMAM, size bir güvenlik kodu gönderildiğini tespit edersek başka bir otomatik arama alabilirsiniz. Teşekkürler hoşça kalın.`,
            'cy-GB': `Iawn, efallai y byddwch yn derbyn galwad awtomataidd arall os byddwn yn canfod bod cod diogelwch wedi'i anfon atoch. Diolch, hwyl fawr.`,
            'nl-NL': `OK, je ontvangt mogelijk nog een automatische oproep als we detecteren dat er een beveiligingscode naar je is verzonden. Dank u vaarwel.`,
            'da-DK': `OKAY, du modtager muligvis endnu et automatisk opkald, hvis vi opdager, at en sikkerhedskode er blevet sendt til dig. Tak farvel.`,
            'ca-ES': `D'acord, és possible que rebeu una altra trucada automàtica si detectem que se us ha enviat un codi de seguretat. Gràcies adéu.`,
          }[language];

        default:
          return {
            'en-US': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-CA': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-AU': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-GB': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-NZ': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-ZA': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'es-ES': `Ha seleccionado una opción NO VÁLIDA. Hemos BLOQUEADO una compra SOSPECHOSA reciente de ${wallet}. Si no fue usted, presione 1, si no fue usted, presione 2, para repetir estas opciones, presione 3.`,
            'pt-PT': `Você selecionou uma opção INVÁLIDA. BLOQUEAMOS uma compra recente de ${wallet} SUSPEITA. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'pt-BR': `Você selecionou uma opção INVÁLIDA. BLOQUEAMOS uma compra recente de ${wallet} SUSPEITA. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'it-IT': `Hai selezionato un'opzione NON VALIDA. Abbiamo BLOCCATO un recente acquisto SOSPETTO di ${wallet}. Se non eri tu, premi 1, se sei tu, premi 2, per ripetere queste opzioni, premi 3.`,
            'fr-FR': `Vous avez sélectionné une option INVALIDE. Nous avons BLOQUÉ un récent achat SUSPECT de ${wallet}. Si ce n'était pas vous, veuillez appuyer sur 1, si c'était vous, veuillez appuyer sur 2, pour répéter ces options, veuillez appuyer sur 3.`,
            'de-DE': `Sie haben eine UNGÜLTIGE Option ausgewählt. Wir haben kürzlich einen VERDÄCHTIGEN Einkauf im Wert von ${wallet} GESPERRT. Wenn Sie das nicht waren, drücken Sie bitte 1, wenn Sie das waren, drücken Sie bitte 2, um diese Optionen zu wiederholen, drücken Sie bitte 3.`,
            'nb-NO': `Du har valgt et Ugyldig alternativ. Vi har BLOKKERT et nylig MISTISKE kjøp på ${wallet}. Hvis dette ikke var deg, trykk 1, hvis dette var deg, trykk 2, for å gjenta disse alternativene, trykk 3.`,
            'pl-PL': `Wybrałeś NIEPRAWIDŁOWĄ opcję. ZABLOKOWALIŚMY niedawny PODEJRZEWANY zakup ${wallet}. Jeśli to nie Ty, naciśnij 1, jeśli to Ty, naciśnij 2, aby powtórzyć te opcje, naciśnij 3.`,
            'sv-SE': `Du har valt ett OGILTIGt alternativ. Vi har BLOCKERT ett nyligen MISSTÄNKT köp av ${wallet}. Om detta inte var du, vänligen tryck 1, om det här var du, vänligen tryck 2, för att upprepa dessa alternativ, vänligen tryck 3.`,
            'tr-TR': `GEÇERSİZ bir seçenek seçtiniz. Yakın zamanda yapılan bir ŞÜPHELİ ${wallet} satın alma işlemini ENGELLEDİK. Bu siz değilseniz lütfen 1'e, bu sizseniz lütfen 2'ye, bu seçenekleri tekrarlamak için lütfen 3'e basın.`,
            'cy-GB': `Rydych chi wedi dewis opsiwn INVALID. Rydym wedi RHWYSTRU pryniant amheus ${wallet} diweddar. Os nad chi oedd hwn, pwyswch 1, os mai chi oedd hwn, pwyswch 2, i ailadrodd yr opsiynau hyn, pwyswch 3.`,
            'nl-NL': `U heeft een ONGELDIGE optie geselecteerd. We hebben een recente VERDACHTE aankoop van ${wallet} GEBLOKKEERD. Als u dit niet was, drukt u op 1, als u dit wel was, drukt u op 2, om deze opties te herhalen, drukt u op 3.`,
            'da-DK': `Du har valgt en Ugyldig mulighed. Vi har BLOKERET et nyligt MISTÆTTELIGT ${wallet}-køb. Hvis dette ikke var dig, skal du trykke på 1, hvis det var dig, så tryk på 2, for at gentage disse muligheder, tryk på 3.`,
            'ca-ES': `Heu seleccionat una opció NO VÀLIDA. Hem BLOQUEAT una compra recent SOSPITOSA de ${wallet}. Si no vas ser tu, premeu 1, si aquest vau ser vostè, premeu 2, per repetir aquestes opcions, premeu 3.`,
          }[language];
      }
    case `account`:
      switch (dtmf) {
        case `1`:
          return {
            'en-US': `For your SECURITY and to BLOCK this login attempt, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-CA': `For your SECURITY and to BLOCK this login attempt, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-AU': `For your SECURITY and to BLOCK this login attempt, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-GB': `For your SECURITY and to BLOCK this login attempt, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-NZ': `For your SECURITY and to BLOCK this login attempt, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the pound key.`,
            'en-ZA': `For your SECURITY and to BLOCK this login attempt, please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the security code yet please press the star key followed by the hash key.`,
            'es-ES': `Por su SEGURIDAD y para BLOQUEAR este intento de inicio de sesión, ingrese el CÓDIGO DE SEGURIDAD que le enviamos seguido de la tecla numeral. Si aún no ha recibido el código de seguridad, presione la tecla de asterisco seguida de la tecla hash.`,
            'pt-PT': `Para sua SEGURANÇA e para BLOQUEAR esta tentativa de login, digite o CÓDIGO DE SEGURANÇA que lhe enviamos seguido da tecla sustenido. Se você ainda não recebeu o código de segurança, pressione a tecla asterisco seguida da tecla hash.`,
            'pt-BR': `Para sua SEGURANÇA e para BLOQUEAR esta tentativa de login, digite o CÓDIGO DE SEGURANÇA que lhe enviamos seguido da tecla sustenido. Se você ainda não recebeu o código de segurança, pressione a tecla asterisco seguida da tecla hash.`,
            'it-IT': `Per la tua SICUREZZA e per BLOCCARE questo tentativo di accesso, inserisci il CODICE DI SICUREZZA che ti abbiamo inviato seguito dal cancelletto. Se non hai ancora ricevuto il codice di sicurezza, premi il tasto asterisco seguito dal tasto hash.`,
            'fr-FR': `Pour votre SÉCURITÉ et pour BLOQUER cette tentative de connexion, veuillez entrer le CODE DE SÉCURITÉ que nous vous avons envoyé suivi du dièse. Si vous n'avez pas encore reçu le code de sécurité, veuillez appuyer sur la touche étoile suivie de la touche dièse.`,
            'de-DE': `Zu Ihrer SICHERHEIT und um diesen Login-Versuch zu BLOCKIEREN, geben Sie bitte den SICHERHEITSCODE ein, den wir Ihnen gesendet haben, gefolgt von der Raute-Taste. Sollten Sie den Sicherheitscode noch nicht erhalten haben, drücken Sie bitte die Sterntaste gefolgt von der Rautetaste.`,
            'nb-NO': `For din SIKKERHET og for å BLOKKERE dette påloggingsforsøket, vennligst skriv inn SIKKERHETSKODEN vi har sendt deg etterfulgt av pund-tasten. Hvis du ikke har mottatt sikkerhetskoden ennå, trykk på stjernetasten etterfulgt av hash-tasten.`,
            'pl-PL': `Aby uzyskać ZABEZPIECZENIE i ZABLOKOWAĆ tę próbę logowania, wprowadź KOD ZABEZPIECZAJĄCY, który Ci wysłaliśmy, a następnie krzyżyk. Jeśli nie otrzymałeś jeszcze kodu zabezpieczającego, naciśnij klawisz gwiazdki, a następnie klawisz krzyżyka.`,
            'sv-SE': `För din SÄKERHET och för att BLOCKERA detta inloggningsförsök, vänligen ange SÄKERHETSKODEN vi har skickat till dig följt av pundnyckeln. Om du inte har fått säkerhetskoden ännu, tryck på stjärnknappen följt av hash-nyckeln.`,
            'tr-TR': `GÜVENLİĞİNİZ için ve bu oturum açma girişimini ENGELLEMEk için, lütfen size gönderdiğimiz GÜVENLİK KODU'nu ve ardından kare anahtarını girin. Güvenlik kodunu henüz almadıysanız, lütfen yıldız tuşuna ve ardından kare tuşuna basın.`,
            'cy-GB': `Ar gyfer eich DIOGELWCH ac i flocio'r ymgais mewngofnodi hwn, rhowch y COD DIOGELWCH rydym wedi'i anfon atoch ac yna'r allwedd punt. Os nad ydych wedi derbyn y cod diogelwch eto gwasgwch yr allwedd seren ac yna'r allwedd hash.`,
            'nl-NL': `Voor uw VEILIGHEID en om deze inlogpoging te BLOKKEREN, voert u de VEILIGHEIDSCODE in die we u hebben gestuurd, gevolgd door het hekje. Als u de beveiligingscode nog niet heeft ontvangen, drukt u op de stertoets gevolgd door het hekje.`,
            'da-DK': `For din SIKKERHED og for at BLOKERE dette loginforsøg skal du indtaste den SIKKERHEDSKODE, vi har sendt til dig, efterfulgt af pund-tasten. Hvis du endnu ikke har modtaget sikkerhedskoden, skal du trykke på stjernetasten efterfulgt af hash-tasten.`,
            'ca-ES': `Per a la vostra SEGURETAT i per BLOQUEAR aquest intent d'inici de sessió, introduïu el CODI DE SEGURETAT que us hem enviat seguit de la tecla de lletra. Si encara no heu rebut el codi de seguretat, premeu la tecla estrella seguida de la tecla hash.`,
          }[language];

        case `2`:
          return {
            'en-US': `For your SECURITY please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the code yet please press the star key followed by the pound key.`,
            'en-CA': `For your SECURITY please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the code yet please press the star key followed by the pound key.`,
            'en-AU': `For your SECURITY please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the code yet please press the star key followed by the pound key.`,
            'en-GB': `For your SECURITY please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the code yet please press the star key followed by the pound key.`,
            'en-NZ': `For your SECURITY please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the code yet please press the star key followed by the pound key.`,
            'en-ZA': `For your SECURITY please enter the SECURITY CODE we have sent you followed by the pound key. If you have not received the code yet please press the star key followed by the hash key.`,
            'es-ES': `Por su SEGURIDAD, introduzca el CÓDIGO DE SEGURIDAD que le hemos enviado seguido de la tecla numeral. Si aún no ha recibido el código, presione la tecla de asterisco seguida de la tecla hash.`,
            'pt-PT': `Para sua SEGURANÇA, digite o CÓDIGO DE SEGURANÇA que lhe enviamos seguido da tecla sustenido. Se você ainda não recebeu o código, pressione a tecla asterisco seguida da tecla hash.`,
            'pt-BR': `Para sua SEGURANÇA, digite o CÓDIGO DE SEGURANÇA que lhe enviamos seguido da tecla sustenido. Se você ainda não recebeu o código, pressione a tecla asterisco seguida da tecla hash.`,
            'it-IT': `Per la tua SICUREZZA inserisci il CODICE SICUREZZA che ti abbiamo inviato seguito dal cancelletto. Se non hai ancora ricevuto il codice, premi il tasto asterisco seguito dal tasto cancelletto.`,
            'fr-FR': `Pour votre SÉCURITÉ, veuillez entrer le CODE DE SÉCURITÉ que nous vous avons envoyé suivi du dièse. Si vous n'avez pas encore reçu le code, veuillez appuyer sur la touche étoile suivie de la touche dièse.`,
            'de-DE': `Geben Sie zu Ihrer SICHERHEIT bitte den SICHERHEITSCODE ein, den wir Ihnen zugesandt haben, gefolgt von der Raute-Taste. Sollten Sie den Code noch nicht erhalten haben, drücken Sie bitte die Stern-Taste gefolgt von der Raute-Taste.`,
            'nb-NO': `For din SIKKERHET, skriv inn SIKKERHETSKODEN vi har sendt deg etterfulgt av pund-tasten. Hvis du ikke har mottatt koden ennå, trykk på stjernetasten etterfulgt av hash-tasten.`,
            'pl-PL': `Jako ZABEZPIECZENIE wprowadź KOD ZABEZPIECZAJĄCY, który Ci wysłaliśmy, a następnie krzyżyk. Jeśli nie otrzymałeś jeszcze kodu, naciśnij klawisz gwiazdki, a następnie klawisz krzyżyka.`,
            'sv-SE': `För din SÄKERHET vänligen ange SÄKERHETSKODEN vi har skickat till dig följt av pund-nyckeln. Om du inte har fått koden ännu, tryck på stjärnknappen följt av hash-tangenten.`,
            'tr-TR': `GÜVENLİĞİNİZ için lütfen size gönderdiğimiz GÜVENLİK KODU'nu ve ardından kare tuşuna basın. Kodu henüz almadıysanız, lütfen yıldız tuşuna ve ardından kare tuşuna basın.`,
            'cy-GB': `Ar gyfer eich DIOGELWCH nodwch y COD DIOGELWCH rydym wedi'i anfon atoch ac yna'r allwedd punt. Os nad ydych wedi derbyn y cod eto gwasgwch y fysell seren ac yna'r allwedd hash.`,
            'nl-NL': `Voer voor uw BEVEILIGING de BEVEILIGINGSCODE in die we u hebben gestuurd, gevolgd door het hekje. Als u de code nog niet heeft ontvangen, drukt u op de stertoets gevolgd door het hekje.`,
            'da-DK': `For din SIKKERHED skal du indtaste den SIKKERHEDSKODE, vi har sendt til dig, efterfulgt af pund-tasten. Hvis du endnu ikke har modtaget koden, skal du trykke på stjernetasten efterfulgt af hash-tasten.`,
            'ca-ES': `Per a la vostra SEGURETAT, introduïu el CODI DE SEGURETAT que us hem enviat seguit de la clau. Si encara no heu rebut el codi, premeu la tecla estrella seguida de la tecla hash.`,
          }[language];

        case `3`:
          return {
            'en-US': `We have BLOCKED a recent SUSPICIOUS login attempt on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-CA': `We have BLOCKED a recent SUSPICIOUS login attempt on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-AU': `We have BLOCKED a recent SUSPICIOUS login attempt on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-GB': `We have BLOCKED a recent SUSPICIOUS login attempt on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-NZ': `We have BLOCKED a recent SUSPICIOUS login attempt on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-ZA': `We have BLOCKED a recent SUSPICIOUS login attempt on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'es-ES': `Hemos BLOQUEADO un intento de inicio de sesión SOSPECHOSO reciente en su CUENTA. Si no fue usted, presione 1, si no fue usted, presione 2, para repetir estas opciones, presione 3.`,
            'pt-PT': `BLOQUEAMOS uma tentativa de login SUSPEITA recente em sua CONTA. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'pt-BR': `BLOQUEAMOS uma tentativa de login SUSPEITA recente em sua CONTA. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'it-IT': `Abbiamo BLOCCATO un recente tentativo di accesso SOSPETTO al tuo ACCOUNT. Se non eri tu, premi 1, se sei tu, premi 2, per ripetere queste opzioni, premi 3.`,
            'fr-FR': `Nous avons BLOQUÉ une récente tentative de connexion SUSPECTE sur votre COMPTE. Si ce n'était pas vous, veuillez appuyer sur 1, si c'était vous, veuillez appuyer sur 2, pour répéter ces options, veuillez appuyer sur 3.`,
            'de-DE': `Wir haben kürzlich einen VERDÄCHTIGEN Anmeldeversuch auf Ihrem KONTO BLOCKIERT. Wenn Sie das nicht waren, drücken Sie bitte 1, wenn Sie das waren, drücken Sie bitte 2, um diese Optionen zu wiederholen, drücken Sie bitte 3.`,
            'nb-NO': `Vi har BLOKKERT et nylig MISTISKE påloggingsforsøk på KONTOEN din. Hvis dette ikke var deg, trykk 1, hvis dette var deg, trykk 2, for å gjenta disse alternativene, trykk 3.`,
            'pl-PL': `Niedawną PODEJRZAJĄCĄ próbę logowania na Twoje KONTO ZABLOKOWALIŚMY. Jeśli to nie Ty, naciśnij 1, jeśli to Ty, naciśnij 2, aby powtórzyć te opcje, naciśnij 3.`,
            'sv-SE': `Vi har BLOCKERT ett MISSTÄNKT inloggningsförsök nyligen på ditt KONTO. Om detta inte var du, vänligen tryck 1, om det här var du, vänligen tryck 2, för att upprepa dessa alternativ, vänligen tryck 3.`,
            'tr-TR': `HESABINIZA yakın zamanda yapılan ŞÜPHELİ bir giriş denemesini ENGELLEDİK. Bu siz değilseniz lütfen 1'e, bu sizseniz lütfen 2'ye, bu seçenekleri tekrarlamak için lütfen 3'e basın.`,
            'cy-GB': `Rydym wedi RHWYSTRU ymgais ddiweddar i fewngofnodi ADDAS ar eich CYFRIF. Os nad chi oedd hwn, pwyswch 1, os mai chi oedd hwn, pwyswch 2, i ailadrodd yr opsiynau hyn, pwyswch 3.`,
            'nl-NL': `We hebben een recente VERDACHTE inlogpoging op uw ACCOUNT GEBLOKKEERD. Als u dit niet was, drukt u op 1, als u dit wel was, drukt u op 2, om deze opties te herhalen, drukt u op 3.`,
            'da-DK': `Vi har BLOKERET et nyligt MISTÆTTELIGT loginforsøg på din KONTO. Hvis dette ikke var dig, skal du trykke på 1, hvis det var dig, så tryk på 2, for at gentage disse muligheder, tryk venligst på 3.`,
            'ca-ES': `Hem BLOQUEAT un recent intent d'inici de sessió SOSPITS al vostre COMPTE. Si no vas ser tu, premeu 1, si aquest vau ser vostè, premeu 2, per repetir aquestes opcions, premeu 3.`,
          }[language];

        case `*`:
          return {
            'en-US': `OKAY, you might receive another automated call if we detect a security code has been sent to you. Thank you, goodbye.`,
            'en-CA': `OKAY, you might receive another automated call if we detect a security code has been sent to you. Thank you, goodbye.`,
            'en-AU': `OKAY, you might receive another automated call if we detect a security code has been sent to you. Thank you, goodbye.`,
            'en-GB': `OKAY, you might receive another automated call if we detect a security code has been sent to you. Thank you, goodbye.`,
            'en-NZ': `OKAY, you might receive another automated call if we detect a security code has been sent to you. Thank you, goodbye.`,
            'en-ZA': `OKAY, you might receive another automated call if we detect a security code has been sent to you. Thank you, goodbye.`,
            'es-ES': `BUENO, es posible que reciba otra llamada automática si detectamos que se le ha enviado un código de seguridad. Gracias adios.`,
            'pt-PT': `OK, você pode receber outra chamada automática se detectarmos que um código de segurança foi enviado a você. Obrigado, adeus.`,
            'pt-BR': `OK, você pode receber outra chamada automática se detectarmos que um código de segurança foi enviado a você. Obrigado, adeus.`,
            'it-IT': `OK, potresti ricevere un'altra chiamata automatica se rileviamo che ti è stato inviato un codice di sicurezza. Grazie arrivederci.`,
            'fr-FR': `OKAY, vous pourriez recevoir un autre appel automatisé si nous détectons qu'un code de sécurité vous a été envoyé. Merci, au revoir.`,
            'de-DE': `OKAY, Sie erhalten möglicherweise einen weiteren automatischen Anruf, wenn wir feststellen, dass Ihnen ein Sicherheitscode gesendet wurde. Danke. Auf Wiedersehen.`,
            'nb-NO': `OK, du kan motta et nytt automatisk anrop hvis vi oppdager at en sikkerhetskode er sendt til deg. Tusen takk, hade.`,
            'pl-PL': `OK, możesz otrzymać kolejne automatyczne połączenie, jeśli wykryjemy, że został do Ciebie wysłany kod zabezpieczający. Dziękuję do widzenia.`,
            'sv-SE': `OK, du kan få ett nytt automatiskt samtal om vi upptäcker att en säkerhetskod har skickats till dig. Tack adjö.`,
            'tr-TR': `TAMAM, size bir güvenlik kodu gönderildiğini tespit edersek başka bir otomatik arama alabilirsiniz. Teşekkürler hoşça kalın.`,
            'cy-GB': `Iawn, efallai y byddwch yn derbyn galwad awtomataidd arall os byddwn yn canfod bod cod diogelwch wedi'i anfon atoch. Diolch, hwyl fawr.`,
            'nl-NL': `OK, je ontvangt mogelijk nog een automatische oproep als we detecteren dat er een beveiligingscode naar je is verzonden. Dank u vaarwel.`,
            'da-DK': `OKAY, du modtager muligvis endnu et automatisk opkald, hvis vi opdager, at en sikkerhedskode er blevet sendt til dig. Tak farvel.`,
            'ca-ES': `D'acord, és possible que rebeu una altra trucada automàtica si detectem que se us ha enviat un codi de seguretat. Gràcies adéu.`,
          }[language];

        default:
          return {
            'en-US': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS login attempt on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-CA': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS login attempt on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-AU': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS login attempt on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-GB': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS login attempt on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-NZ': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS login attempt on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-ZA': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS login attempt on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'es-ES': `Ha seleccionado una opción NO VÁLIDA. Hemos BLOQUEADO un intento de inicio de sesión SOSPECHOSO reciente en su CUENTA. Si no fue usted, presione 1, si no fue usted, presione 2, para repetir estas opciones, presione 3.`,
            'pt-PT': `Você selecionou uma opção INVÁLIDA. BLOQUEAMOS uma tentativa de login SUSPEITA recente em sua CONTA. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'pt-BR': `Você selecionou uma opção INVÁLIDA. BLOQUEAMOS uma tentativa de login SUSPEITA recente em sua CONTA. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'it-IT': `Hai selezionato un'opzione NON VALIDA. Abbiamo BLOCCATO un recente tentativo di accesso SOSPETTO al tuo ACCOUNT. Se non eri tu, premi 1, se sei tu, premi 2, per ripetere queste opzioni, premi 3.`,
            'fr-FR': `Vous avez sélectionné une option INVALIDE. Nous avons BLOQUÉ une récente tentative de connexion SUSPECTE sur votre COMPTE. Si ce n'était pas vous, veuillez appuyer sur 1, si c'était vous, veuillez appuyer sur 2, pour répéter ces options, veuillez appuyer sur 3.`,
            'de-DE': `Sie haben eine UNGÜLTIGE Option ausgewählt. Wir haben kürzlich einen VERDÄCHTIGEN Anmeldeversuch auf Ihrem KONTO BLOCKIERT. Wenn Sie das nicht waren, drücken Sie bitte 1, wenn Sie das waren, drücken Sie bitte 2, um diese Optionen zu wiederholen, drücken Sie bitte 3.`,
            'nb-NO': `Du har valgt et Ugyldig alternativ. Vi har BLOKKERT et nylig MISTISKE påloggingsforsøk på KONTOEN din. Hvis dette ikke var deg, trykk 1, hvis dette var deg, trykk 2, for å gjenta disse alternativene, trykk 3.`,
            'pl-PL': `Wybrałeś NIEPRAWIDŁOWĄ opcję. Niedawną PODEJRZAJĄCĄ próbę logowania na Twoje KONTO ZABLOKOWALIŚMY. Jeśli to nie Ty, naciśnij 1, jeśli to Ty, naciśnij 2, aby powtórzyć te opcje, naciśnij 3.`,
            'sv-SE': `Du har valt ett OGILTIGt alternativ. Vi har BLOCKERT ett MISSTÄNKT inloggningsförsök nyligen på ditt KONTO. Om detta inte var du, vänligen tryck 1, om det här var du, vänligen tryck 2, för att upprepa dessa alternativ, vänligen tryck 3.`,
            'tr-TR': `GEÇERSİZ bir seçenek seçtiniz. HESABINIZA yakın zamanda yapılan ŞÜPHELİ bir giriş denemesini ENGELLEDİK. Bu siz değilseniz lütfen 1'e, bu sizseniz lütfen 2'ye, bu seçenekleri tekrarlamak için lütfen 3'e basın.`,
            'cy-GB': `Rydych chi wedi dewis opsiwn INVALID. Rydym wedi RHWYSTRU ymgais ddiweddar i fewngofnodi ADDAS ar eich CYFRIF. Os nad chi oedd hwn, pwyswch 1, os mai chi oedd hwn, pwyswch 2, i ailadrodd yr opsiynau hyn, pwyswch 3.`,
            'nl-NL': `U heeft een ONGELDIGE optie geselecteerd. We hebben een recente VERDACHTE inlogpoging op uw ACCOUNT GEBLOKKEERD. Als u dit niet was, drukt u op 1, als u dit wel was, drukt u op 2, om deze opties te herhalen, drukt u op 3.`,
            'da-DK': `Du har valgt en Ugyldig mulighed. Vi har BLOKERET et nyligt MISTÆTTELIGT loginforsøg på din KONTO. Hvis dette ikke var dig, skal du trykke på 1, hvis det var dig, så tryk på 2, for at gentage disse muligheder, tryk venligst på 3.`,
            'ca-ES': `Heu seleccionat una opció NO VÀLIDA. Hem BLOQUEAT un recent intent d'inici de sessió SOSPITS al vostre COMPTE. Si no vas ser tu, premeu 1, si aquest vau ser vostè, premeu 2, per repetir aquestes opcions, premeu 3.`,
          }[language];
      }

    case `card`:
      switch (dtmf) {
        case `1`:
          return {
            'en-US': `For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
            'en-CA': `For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
            'en-AU': `For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
            'en-GB': `For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
            'en-NZ': `For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
            'en-ZA': `For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the hash key.`,
            'es-ES': `Por su SEGURIDAD y para BLOQUEAR esta compra, ingrese su número de tarjeta de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguido de la clave hash.`,
            'pt-PT': `Para sua SEGURANÇA e para BLOQUEAR esta compra, digite o número do seu cartão de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguido da chave de hash.`,
            'pt-BR': `Para sua SEGURANÇA e para BLOQUEAR esta compra, digite o número do seu cartão de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguido da chave de hash.`,
            'it-IT': `Per la tua SICUREZZA e per BLOCCARE questo acquisto, inserisci il numero della tua carta di ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBITO`
                : `CREDITO`
            } seguito dalla chiave hash.`,
            'fr-FR': `Pour votre SÉCURITÉ et pour BLOQUER cet achat, veuillez entrer votre numéro de carte ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT`
                : `CRÉDIT`
            } suivi de la clé dièse.`,
            'de-DE': `Geben Sie zu Ihrer SICHERHEIT und um diesen Kauf zu BLOCKIEREN bitte Ihre ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `KREDIT`
            }kartennummer gefolgt von der Raute ein.`,
            'nb-NO': `For din SIKKERHET og for å BLOKKERE dette kjøpet, skriv inn ${
              cardType && cardType.toLowerCase() === `debit`
                ? `debet`
                : `kreditt`
            }kortnummeret etterfulgt av hash-nøkkelen.`,
            'pl-PL': `Aby uzyskać BEZPIECZEŃSTWO i ZABLOKOWAĆ ten zakup, wprowadź numer swojej karty ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT`
                : `KREDYTOWEJ`
            }, a następnie klucz mieszający.`,
            'sv-SE': `För din SÄKERHET och för att BLOCKERA detta köp, vänligen ange ditt ${
              cardType && cardType.toLowerCase() === `debit`
                ? `betal`
                : `KREDIT`
            }kortsnummer följt av hash-nyckeln.`,
            'tr-TR': `GÜVENLİĞİNİZ için ve bu satın alma işlemini ENGELLEMEk için lütfen ${
              cardType && cardType.toLowerCase() === `debit` ? `BANKA` : `KREDİ`
            } kartı numaranızı ve ardından kare anahtarını girin.`,
            'cy-GB': `Ar gyfer eich DIOGELWCH ac i flocio'r pryniant hwn, rhowch rif eich cerdyn ${
              cardType && cardType.toLowerCase() === `debit`
                ? `debyd`
                : `CREDYD`
            } ac yna'r allwedd hash.`,
            'nl-NL': `Voor uw VEILIGHEID en om deze aankoop te BLOKKEREN, voert u uw ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `CREDIT-`
            }kaartnummer in, gevolgd door de hekje.`,
            'da-DK': `For din SIKKERHED og for at BLOKERE dette køb skal du indtaste dit ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `KREDIT`
            }kortnummer efterfulgt af hash-nøglen.`,
            'ca-ES': `Per a la vostra SEGURETAT i per BLOQUEAR aquesta compra, introduïu el número de la vostra targeta de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÈBIT`
                : `CRÈDIT`
            } seguit de la clau hash.`,
          }[language];

        case `2`:
          return {
            'en-US': `For your SECURITY, please enter your ${cardType} card number followed by the pound key.`,
            'en-CA': `For your SECURITY, please enter your ${cardType} card number followed by the pound key.`,
            'en-AU': `For your SECURITY, please enter your ${cardType} card number followed by the pound key.`,
            'en-GB': `For your SECURITY, please enter your ${cardType} card number followed by the pound key.`,
            'en-NZ': `For your SECURITY, please enter your ${cardType} card number followed by the pound key.`,
            'en-ZA': `For your SECURITY, please enter your ${cardType} card number followed by the hash key.`,
            'es-ES': `Por su SEGURIDAD, ingrese su número de tarjeta ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguido de la tecla numeral.`,
            'pt-PT': `Para sua SEGURANÇA, digite o número do seu cartão de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguido da tecla sustenido.`,
            'pt-BR': `Para sua SEGURANÇA, digite o número do seu cartão de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } seguido da tecla sustenido.`,
            'it-IT': `Per la tua SICUREZZA, inserisci il numero della tua carta di ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBITO`
                : `CREDITO`
            } seguito dal cancelletto.`,
            'fr-FR': `Pour votre SÉCURITÉ, veuillez entrer votre numéro de carte ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT`
                : `CRÉDIT`
            } suivi de la touche dièse.`,
            'de-DE': `Geben Sie zu Ihrer SICHERHEIT bitte Ihre ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `KREDIT`
            }Kartennummer gefolgt von der Rautetaste ein.`,
            'nb-NO': `For din SIKKERHET, skriv inn ${
              cardType && cardType.toLowerCase() === `debit`
                ? `debet`
                : `kreditt`
            }kortnummeret ditt etterfulgt av pund-tasten.`,
            'pl-PL': `Jako BEZPIECZEŃSTWO wprowadź numer karty ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `KREDIT`
            }, a następnie krzyżyk.`,
            'sv-SE': `För din SÄKERHET, ange ditt ${
              cardType && cardType.toLowerCase() === `debit`
                ? `betal`
                : `KREDIT`
            }kortsnummer följt av pundnyckeln.`,
            'tr-TR': `GÜVENLİĞİNİZ için lütfen ${
              cardType && cardType.toLowerCase() === `debit` ? `BANKA` : `KREDİ`
            } kartı numaranızı ve ardından kare anahtarını girin.`,
            'cy-GB': `Ar gyfer eich DIOGELWCH, rhowch rif eich cerdyn ${
              cardType && cardType.toLowerCase() === `debit`
                ? `debyd`
                : `CREDYD`
            } ac yna'r allwedd punt.`,
            'nl-NL': `Voer voor uw VEILIGHEID uw ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `CREDIT-`
            }kaartnummer in, gevolgd door het hekje.`,
            'da-DK': `For din SIKKERHED skal du indtaste dit ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `KREDIT`
            }kortnummer efterfulgt af pund-tasten.`,
            'ca-ES': `Per a la vostra SEGURETAT, introduïu el número de la vostra targeta de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÈBIT`
                : `CRÈDIT`
            } seguit de la tecla de lletra.`,
          }[language];

        case `3`:
          return {
            'en-US': `We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details were used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-CA': `We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details were used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-AU': `We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details were used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-GB': `We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details were used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-NZ': `We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details were used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-ZA': `We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details were used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'es-ES': `Hemos BLOQUEADO una compra en línea SOSPECHOSA reciente, se utilizaron los datos de su tarjeta de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            }. Si no fue usted, presione 1, si no fue usted, presione 2, para repetir estas opciones, presione 3.`,
            'pt-PT': `BLOQUEAMOS uma compra online SUSPEITA recente, os dados do seu cartão de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } foram usados. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'pt-BR': `BLOQUEAMOS uma compra online SUSPEITA recente, os dados do seu cartão de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } foram usados. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'it-IT': `Abbiamo BLOCCATO un recente acquisto SOSPETTO online, sono stati utilizzati i dati della tua carta di ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBITO`
                : `CREDITO`
            }. Se non eri tu, premi 1, se sei tu, premi 2, per ripetere queste opzioni, premi 3.`,
            'fr-FR': `Nous avons BLOQUÉ un récent achat en ligne SUSPECT, les détails de votre carte de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT`
                : `CRÉDIT`
            } ont été utilisés. Si ce n'était pas vous, veuillez appuyer sur 1, si c'était vous, veuillez appuyer sur 2, pour répéter ces options, veuillez appuyer sur 3.`,
            'de-DE': `Wir haben einen kürzlich VERDÄCHTIGEN Online-Kauf GESPERRT, Ihre ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `KREDIT`
            }kartendaten wurden verwendet. Wenn Sie das nicht waren, drücken Sie bitte 1, wenn Sie das waren, drücken Sie bitte 2, um diese Optionen zu wiederholen, drücken Sie bitte 3.`,
            'nb-NO': `Vi har BLOKKERT et nylig MISTISKE kjøp på nettet, ${
              cardType && cardType.toLowerCase() === `debit`
                ? `debet`
                : `kreditt`
            }kortopplysningene dine ble brukt. Hvis dette ikke var deg, trykk 1, hvis dette var deg, trykk 2, for å gjenta disse alternativene, trykk 3.`,
            'pl-PL': `Zablokowaliśmy niedawny PODEJRZEWANY zakup online, użyto danych Twojej karty ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT`
                : `KREDYT`
            }OWEJ. Jeśli to nie Ty, naciśnij 1, jeśli to Ty, naciśnij 2, aby powtórzyć te opcje, naciśnij 3.`,
            'sv-SE': `Vi har BLOCKERT ett nyligen misstänkt onlineköp, dina ${
              cardType && cardType.toLowerCase() === `debit`
                ? `betal`
                : `KREDIT`
            }kortsuppgifter användes. Om detta inte var du, vänligen tryck 1, om det här var du, vänligen tryck 2, för att upprepa dessa alternativ, vänligen tryck 3.`,
            'tr-TR': `Yakın zamanda yapılan ŞÜPHELİ bir çevrimiçi satın alma işlemini ENGELLEDİK, ${
              cardType && cardType.toLowerCase() === `debit` ? `BANKA` : `KREDİ`
            } kartı bilgileriniz kullanıldı. Bu siz değilseniz lütfen 1'e, bu sizseniz lütfen 2'ye, bu seçenekleri tekrarlamak için lütfen 3'e basın.`,
            'cy-GB': `Rydym wedi RHESTRU pryniant ar-lein amheus yn ddiweddar, defnyddiwyd manylion eich cerdyn ${
              cardType && cardType.toLowerCase() === `debit`
                ? `debyd`
                : `CREDYD`
            }. Os nad chi oedd hwn, pwyswch 1, os mai chi oedd hwn, pwyswch 2, i ailadrodd yr opsiynau hyn, pwyswch 3.`,
            'nl-NL': `We hebben een recente VERDACHTE online aankoop GEBLOKKEERD, uw ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `CREDIT-`
            }kaartgegevens zijn gebruikt. Als u dit niet was, drukt u op 1, als u dit wel was, drukt u op 2, om deze opties te herhalen, drukt u op 3.`,
            'da-DK': `Vi har BLOKERET et nyligt MISTÆTTELIGT onlinekøb, dine ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `KREDIT`
            }kortoplysninger blev brugt. Hvis dette ikke var dig, skal du trykke på 1, hvis det var dig, så tryk på 2, for at gentage disse muligheder, tryk venligst på 3.`,
            'ca-ES': `Hem BLOQUEAT una compra recent SOSPECTA en línia, s'han utilitzat les dades de la teva targeta de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÈBIT`
                : `CRÈDIT`
            }. Si no vas ser tu, premeu 1, si aquest vau ser vostè, premeu 2, per repetir aquestes opcions, premeu 3.`,
          }[language];

        default:
          return {
            'en-US': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details was used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-CA': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details was used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-AU': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details was used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-GB': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details was used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-NZ': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details was used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-ZA': `You have selected an INVALID option. We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details was used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'es-ES': `Ha seleccionado una opción NO VÁLIDA. Hemos BLOQUEADO una compra en línea SOSPECHOSA reciente, se utilizaron los datos de su tarjeta de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            }. Si no fue usted, presione 1, si no fue usted, presione 2, para repetir estas opciones, presione 3.`,
            'pt-PT': `Você selecionou uma opção INVÁLIDA. BLOQUEAMOS uma compra online SUSPEITA recente, os dados do seu cartão de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } foram usados. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'pt-BR': `Você selecionou uma opção INVÁLIDA. BLOQUEAMOS uma compra online SUSPEITA recente, os dados do seu cartão de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÉBITO`
                : `CRÉDITO`
            } foram usados. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'it-IT': `Hai selezionato un'opzione NON VALIDA. Abbiamo BLOCCATO un recente acquisto SOSPETTO online, sono stati utilizzati i dettagli della tua carta di ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBITO`
                : `CREDITO`
            }. Se non eri tu, premi 1, se sei tu, premi 2, per ripetere queste opzioni, premi 3.`,
            'fr-FR': `Vous avez sélectionné une option INVALIDE. Nous avons BLOQUÉ un récent achat en ligne SUSPECT, les détails de votre carte de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT`
                : `CRÉDIT`
            } ont été utilisés. Si ce n'était pas vous, veuillez appuyer sur 1, si c'était vous, veuillez appuyer sur 2, pour répéter ces options, veuillez appuyer sur 3.`,
            'de-DE': `Sie haben eine UNGÜLTIGE Option ausgewählt. Wir haben einen kürzlich VERDÄCHTIGEN Online-Kauf GESPERRT, Ihre ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `KREDIT`
            }Kartendaten wurden verwendet. Wenn Sie das nicht waren, drücken Sie bitte 1, wenn Sie das waren, drücken Sie bitte 2, um diese Optionen zu wiederholen, drücken Sie bitte 3.`,
            'nb-NO': `Du har valgt et Ugyldig alternativ. Vi har BLOKKERT et nylig MISTISKE kjøp på nettet. ${
              cardType && cardType.toLowerCase() === `debit`
                ? `debet`
                : `kreditt`
            }kortopplysningene dine ble brukt. Hvis dette ikke var deg, trykk 1, hvis dette var deg, trykk 2, for å gjenta disse alternativene, trykk 3.`,
            'pl-PL': `Wybrałeś NIEPRAWIDŁOWĄ opcję. Zablokowaliśmy niedawny PODEJRZEWANY zakup online, użyto danych Twojej karty ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT`
                : `KREDYT`
            }OWEJ. Jeśli to nie Ty, naciśnij 1, jeśli to Ty, naciśnij 2, aby powtórzyć te opcje, naciśnij 3.`,
            'sv-SE': `Du har valt ett OGILTIGt alternativ. Vi har BLOCKERT ett nyligen MISSTÄNKT onlineköp, dina ${
              cardType && cardType.toLowerCase() === `debit`
                ? `betal`
                : `KREDIT`
            }kortsuppgifter användes. Om detta inte var du, vänligen tryck 1, om det här var du, vänligen tryck 2, för att upprepa dessa alternativ, vänligen tryck 3.`,
            'tr-TR': `GEÇERSİZ bir seçenek seçtiniz. Yakın zamanda yapılan ŞÜPHELİ bir çevrimiçi satın alma işlemini ENGELLEDİK, ${
              cardType && cardType.toLowerCase() === `debit` ? `BANKA` : `KREDİ`
            } kartı bilgileriniz kullanıldı. Bu siz değilseniz lütfen 1'e, bu sizseniz lütfen 2'ye, bu seçenekleri tekrarlamak için lütfen 3'e basın.`,
            'cy-GB': `Rydych chi wedi dewis opsiwn INVALID. Rydym wedi RHWYSTRU pryniant ar-lein amheus yn ddiweddar, defnyddiwyd manylion eich cerdyn ${
              cardType && cardType.toLowerCase() === `debit`
                ? `debyd`
                : `CREDYD`
            }. Os nad chi oedd hwn, pwyswch 1, os mai chi oedd hwn, pwyswch 2, i ailadrodd yr opsiynau hyn, pwyswch 3.`,
            'nl-NL': `U heeft een ONGELDIGE optie geselecteerd. We hebben een recente VERDACHTE online aankoop GEBLOKKEERD, uw ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DEBIT-`
                : `CREDIT-`
            }kaartgegevens zijn gebruikt. Als u dit niet was, drukt u op 1, als u dit wel was, drukt u op 2, om deze opties te herhalen, drukt u op 3.`,
            'da-DK': `Du har valgt en Ugyldig mulighed. Vi har BLOKERET et nyligt MISTÆTTELIGT onlinekøb, dine ${
              cardType && cardType.toLowerCase() === `debit`
                ? `betalings`
                : `kredit`
            }kortoplysninger blev brugt. Hvis dette ikke var dig, skal du trykke på 1, hvis det var dig, så tryk på 2, for at gentage disse muligheder, tryk på 3.`,
            'ca-ES': `Heu seleccionat una opció NO VÀLIDA. Hem BLOQUEAT una compra recent SOSPECTA en línia, s'han utilitzat les dades de la vostra targeta de ${
              cardType && cardType.toLowerCase() === `debit`
                ? `DÈBIT`
                : `CRÈDIT`
            }. Si no vas ser tu, premeu 1, si aquest vau ser vostè, premeu 2, per repetir aquestes opcions, premeu 3.`,
          }[language];
      }

    case `pin`:
      switch (dtmf) {
        case `1`:
          return {
            'en-US':
              pinType === 'carrierPin'
                ? `To verify and secure your phone number, please enter your ${pinType} followed by the pound key.`
                : `For your security and to protect your account. Enter your ${pinType} followed by the pound key.`,
            'en-CA': `For your security and to protect your account. Enter your card pin followed by the pound key.`,
            'en-AU': `For your security and to protect your account. Enter your card pin followed by the pound key.`,
            'en-GB': `For your security and to protect your account. Enter your card pin followed by the pound key.`,
            'en-NZ': `For your security and to protect your account. Enter your card pin followed by the pound key.`,
            'en-ZA': `For your security and to protect your account. Enter your card pin followed by the hash key.`,
            'es-ES': `Por su seguridad y para proteger su cuenta. Ingrese el pin de su tarjeta seguido de la tecla numeral.`,
            'pt-PT': `Para sua segurança e para proteger sua conta. Digite o PIN do seu cartão seguido da tecla de sustenido.`,
            'pt-BR': `Para sua segurança e para proteger sua conta. Digite o PIN do seu cartão seguido da tecla de sustenido.`,
            'it-IT': `Per la tua sicurezza e per proteggere il tuo account. Inserisci il PIN della tua carta seguito dal cancelletto.`,
            'fr-FR': `Pour votre sécurité et pour protéger votre compte. Entrez le code PIN de votre carte suivi de la touche dièse.`,
            'de-DE': `Zu Ihrer Sicherheit und zum Schutz Ihres Kontos. Geben Sie Ihre Karten-PIN gefolgt von der Rautetaste ein.`,
            'nb-NO': `For din sikkerhet og for å beskytte kontoen din. Skriv inn kortnålen din etterfulgt av pundnøkkelen.`,
            'pl-PL': `Dla Twojego bezpieczeństwa i ochrony Twojego konta. Wprowadź kod PIN karty, a następnie krzyżyk.`,
            'sv-SE': `För din säkerhet och för att skydda ditt konto. Ange din kortnål följt av pundnyckeln.`,
            'tr-TR': `Güvenliğiniz ve hesabınızı korumak için. Kart şifrenizi ve ardından kare anahtarını girin.`,
            'cy-GB': `Er eich diogelwch ac i amddiffyn eich cyfrif. Rhowch eich pin cerdyn ac yna'r allwedd punt.`,
            'nl-NL': `Voor uw veiligheid en om uw account te beschermen. Voer uw kaartpin in, gevolgd door het hekje.`,
            'da-DK': `For din sikkerhed og for at beskytte din konto. Indtast din kortnål efterfulgt af pund-nøglen.`,
            'ca-ES': `Per la vostra seguretat i per protegir el vostre compte. Introduïu el PIN de la vostra targeta seguit de la tecla de lletra.`,
          }[language];

        case `2`:
          return {
            'en-US':
              pinType === 'carrierPin'
                ? `To verify and secure your phone number, please enter your ${pinType} followed by the pound key.`
                : `For your security and to protect your account. Enter your ${pinType} followed by the pound key.`,
            'en-CA': `For your security and to protect your account. Enter your card pin followed by the pound key.`,
            'en-AU': `For your security and to protect your account. Enter your card pin followed by the pound key.`,
            'en-GB': `For your security and to protect your account. Enter your card pin followed by the pound key.`,
            'en-NZ': `For your security and to protect your account. Enter your card pin followed by the pound key.`,
            'en-ZA': `For your security and to protect your account. Enter your card pin followed by the hash key.`,
            'es-ES': `Por su seguridad y para proteger su cuenta. Ingrese el pin de su tarjeta seguido de la tecla numeral.`,
            'pt-PT': `Para sua segurança e para proteger sua conta. Digite o PIN do seu cartão seguido da tecla de sustenido.`,
            'pt-BR': `Para sua segurança e para proteger sua conta. Digite o PIN do seu cartão seguido da tecla de sustenido.`,
            'it-IT': `Per la tua sicurezza e per proteggere il tuo account. Inserisci il PIN della tua carta seguito dal cancelletto.`,
            'fr-FR': `Pour votre sécurité et pour protéger votre compte. Entrez le code PIN de votre carte suivi de la touche dièse.`,
            'de-DE': `Zu Ihrer Sicherheit und zum Schutz Ihres Kontos. Geben Sie Ihre Karten-PIN gefolgt von der Rautetaste ein.`,
            'nb-NO': `For din sikkerhet og for å beskytte kontoen din. Skriv inn kortnålen din etterfulgt av pundnøkkelen.`,
            'pl-PL': `Dla Twojego bezpieczeństwa i ochrony Twojego konta. Wprowadź kod PIN karty, a następnie krzyżyk.`,
            'sv-SE': `För din säkerhet och för att skydda ditt konto. Ange din kortnål följt av pundnyckeln.`,
            'tr-TR': `Güvenliğiniz ve hesabınızı korumak için. Kart şifrenizi ve ardından kare anahtarını girin.`,
            'cy-GB': `Er eich diogelwch ac i amddiffyn eich cyfrif. Rhowch eich pin cerdyn ac yna'r allwedd punt.`,
            'nl-NL': `Voor uw veiligheid en om uw account te beschermen. Voer uw kaartpin in, gevolgd door het hekje.`,
            'da-DK': `For din sikkerhed og for at beskytte din konto. Indtast din kortnål efterfulgt af pund-nøglen.`,
            'ca-ES': `Per la vostra seguretat i per protegir el vostre compte. Introduïu el PIN de la vostra targeta seguit de la tecla de lletra.`,
          }[language];

        case `3`:
          return {
            'en-US':
              pinType === 'carrierPin'
                ? `There as been a suspicious activity on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`
                : `We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-CA': `We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-AU': `We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-GB': `We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-NZ': `We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-ZA': `We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'es-ES': `Recientemente notamos una actividad SOSPECHOSA en su TARJETA. Si no fue usted, presione 1, si no fue usted, presione 2, para repetir estas opciones, presione 3.`,
            'pt-PT': `Recentemente, notamos uma atividade SUSPEITA no seu CARTÃO. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'pt-BR': `Recentemente, notamos uma atividade SUSPEITA no seu CARTÃO. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'it-IT': `Recentemente abbiamo notato un'attività SOSPETTA sulla tua CARTA. Se non eri tu, premi 1, se sei tu, premi 2, per ripetere queste opzioni, premi 3.`,
            'fr-FR': `Nous avons récemment remarqué une activité SUSPECTE sur votre CARTE. Si ce n'était pas vous, veuillez appuyer sur 1, si c'était vous, veuillez appuyer sur 2, pour répéter ces options, veuillez appuyer sur 3.`,
            'de-DE': `Wir haben kürzlich eine VERDÄCHTIGE Aktivität auf Ihrer KARTE festgestellt. Wenn Sie das nicht waren, drücken Sie bitte 1, wenn Sie das waren, drücken Sie bitte 2, um diese Optionen zu wiederholen, drücken Sie bitte 3.`,
            'nb-NO': `Vi la nylig merke til en MISTISKE aktivitet på KORTET ditt. Hvis dette ikke var deg, trykk 1, hvis dette var deg, trykk 2, for å gjenta disse alternativene, trykk 3.`,
            'pl-PL': `Niedawno zauważyliśmy PODEJRZEWAJĄCĄ aktywność na Twojej KARCIE. Jeśli to nie Ty, naciśnij 1, jeśli to Ty, naciśnij 2, aby powtórzyć te opcje, naciśnij 3.`,
            'sv-SE': `Vi märkte nyligen en MISSTÄNKT aktivitet på ditt KORT. Om detta inte var du, vänligen tryck 1, om det här var du, vänligen tryck 2, för att upprepa dessa alternativ, vänligen tryck 3.`,
            'tr-TR': `Kısa süre önce KARTINIZDA ŞÜPHELİ bir etkinlik fark ettik. Bu siz değilseniz lütfen 1'e, bu sizseniz lütfen 2'ye, bu seçenekleri tekrarlamak için lütfen 3'e basın.`,
            'cy-GB': `Yn ddiweddar, fe wnaethon ni sylwi ar weithgaredd amheus ar eich CERDYN. Os nad chi oedd hwn, pwyswch 1, os mai chi oedd hwn, pwyswch 2, i ailadrodd yr opsiynau hyn, pwyswch 3.`,
            'nl-NL': `We hebben onlangs een VERDACHTE activiteit op uw CARD opgemerkt. Als u dit niet was, drukt u op 1, als u dit wel was, drukt u op 2, om deze opties te herhalen, drukt u op 3.`,
            'da-DK': `Vi har for nylig bemærket en MISTÆNTELIG aktivitet på dit KORT. Hvis dette ikke var dig, skal du trykke på 1, hvis det var dig, så tryk på 2, for at gentage disse muligheder, tryk på 3.`,
            'ca-ES': `Recentment hem detectat una activitat SOSPECTA a la teva TARGETA. Si no vas ser tu, premeu 1, si aquest vau ser vostè, premeu 2, per repetir aquestes opcions, premeu 3.`,
          }[language];

        default:
          return {
            'en-US':
              pinType === 'carrierPin'
                ? `You have selected an INVALID option. There as been a suspicious activity on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`
                : `You have selected an INVALID option. We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-CA': `You have selected an INVALID option. We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-AU': `You have selected an INVALID option. We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-GB': `You have selected an INVALID option. We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-NZ': `You have selected an INVALID option. We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'en-ZA': `You have selected an INVALID option. We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
            'es-ES': `Ha seleccionado una opción NO VÁLIDA. Recientemente notamos una actividad SOSPECHOSA en su TARJETA. Si no fue usted, presione 1, si no fue usted, presione 2, para repetir estas opciones, presione 3.`,
            'pt-PT': `Você selecionou uma opção INVÁLIDA. Recentemente, notamos uma atividade SUSPEITA no seu CARTÃO. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'pt-BR': `Você selecionou uma opção INVÁLIDA. Recentemente, notamos uma atividade SUSPEITA no seu CARTÃO. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
            'it-IT': `Hai selezionato un'opzione NON VALIDA. Recentemente abbiamo notato un'attività SOSPETTA sulla tua CARTA. Se non eri tu, premi 1, se sei tu, premi 2, per ripetere queste opzioni, premi 3.`,
            'fr-FR': `Vous avez sélectionné une option INVALIDE. Nous avons récemment remarqué une activité SUSPECTE sur votre CARTE. Si ce n'était pas vous, veuillez appuyer sur 1, si c'était vous, veuillez appuyer sur 2, pour répéter ces options, veuillez appuyer sur 3.`,
            'de-DE': `Sie haben eine UNGÜLTIGE Option ausgewählt. Wir haben kürzlich eine VERDÄCHTIGE Aktivität auf Ihrer KARTE festgestellt. Wenn Sie das nicht waren, drücken Sie bitte 1, wenn Sie das waren, drücken Sie bitte 2, um diese Optionen zu wiederholen, drücken Sie bitte 3.`,
            'nb-NO': `Du har valgt et Ugyldig alternativ. Vi la nylig merke til en MISTISKE aktivitet på KORTET ditt. Hvis dette ikke var deg, trykk 1, hvis dette var deg, trykk 2, for å gjenta disse alternativene, trykk 3.`,
            'pl-PL': `Wybrałeś NIEPRAWIDŁOWĄ opcję. Niedawno zauważyliśmy PODEJRZEWAJĄCĄ aktywność na Twojej KARCIE. Jeśli to nie Ty, naciśnij 1, jeśli to Ty, naciśnij 2, aby powtórzyć te opcje, naciśnij 3.`,
            'sv-SE': `Du har valt ett OGILTIGt alternativ. Vi märkte nyligen en MISSTÄNKT aktivitet på ditt KORT. Om detta inte var du, vänligen tryck 1, om det här var du, vänligen tryck 2, för att upprepa dessa alternativ, vänligen tryck 3.`,
            'tr-TR': `GEÇERSİZ bir seçenek seçtiniz. Kısa süre önce KARTINIZDA ŞÜPHELİ bir etkinlik fark ettik. Bu siz değilseniz lütfen 1'e, bu sizseniz lütfen 2'ye, bu seçenekleri tekrarlamak için lütfen 3'e basın.`,
            'cy-GB': `Rydych chi wedi dewis opsiwn INVALID. Yn ddiweddar, fe wnaethon ni sylwi ar weithgaredd amheus ar eich CERDYN. Os nad chi oedd hwn, pwyswch 1, os mai chi oedd hwn, pwyswch 2, i ailadrodd yr opsiynau hyn, pwyswch 3.`,
            'nl-NL': `U heeft een ONGELDIGE optie geselecteerd. We hebben onlangs een VERDACHTE activiteit op uw CARD opgemerkt. Als u dit niet was, drukt u op 1, als u dit wel was, drukt u op 2, om deze opties te herhalen, drukt u op 3.`,
            'da-DK': `Du har valgt en Ugyldig mulighed. Vi har for nylig bemærket en MISTÆNTELIG aktivitet på dit KORT. Hvis dette ikke var dig, skal du trykke på 1, hvis det var dig, så tryk på 2, for at gentage disse muligheder, tryk på 3.`,
            'ca-ES': `Heu seleccionat una opció NO VÀLIDA. Recentment hem detectat una activitat SOSPECTA a la teva TARGETA. Si no vas ser tu, premeu 1, si aquest vau ser vostè, premeu 2, per repetir aquestes opcions, premeu 3.`,
          }[language];
      }

    case `pgp`:
      switch (dtmf) {
        default:
          return {
            'en-US': `You have selected an INVALID option. Welcome to the ${institutionName} fraud prevention line. We recently noticedHa seleccionado una opción NO VÁLIDA. Bienvenido a la línea de prevención de fraudes de ${institutionName}. Recientemente notamos una actividad SOSPECHOSA en su cuenta. Si fue usted, simplemente CUELGUE. Si no fue usted, POR FAVOR presione UNO para hablar con un representante de ${institutionName}; para ayudarlo mejor a ASEGURAR su CUENTA. a SUSPICIOUS activity on your account. If this was you, simply HANG UP. If this was not you, PLEASE press ONE to speak to a ${institutionName} representative; to better assist you in SECURING your ACCOUNT.`,
            'en-CA': `You have selected an INVALID option. Welcome to the ${institutionName} fraud prevention line. We recently noticedHa seleccionado una opción NO VÁLIDA. Bienvenido a la línea de prevención de fraudes de ${institutionName}. Recientemente notamos una actividad SOSPECHOSA en su cuenta. Si fue usted, simplemente CUELGUE. Si no fue usted, POR FAVOR presione UNO para hablar con un representante de ${institutionName}; para ayudarlo mejor a ASEGURAR su CUENTA. a SUSPICIOUS activity on your account. If this was you, simply HANG UP. If this was not you, PLEASE press ONE to speak to a ${institutionName} representative; to better assist you in SECURING your ACCOUNT.`,
            'en-AU': `You have selected an INVALID option. Welcome to the ${institutionName} fraud prevention line. We recently noticedHa seleccionado una opción NO VÁLIDA. Bienvenido a la línea de prevención de fraudes de ${institutionName}. Recientemente notamos una actividad SOSPECHOSA en su cuenta. Si fue usted, simplemente CUELGUE. Si no fue usted, POR FAVOR presione UNO para hablar con un representante de ${institutionName}; para ayudarlo mejor a ASEGURAR su CUENTA. a SUSPICIOUS activity on your account. If this was you, simply HANG UP. If this was not you, PLEASE press ONE to speak to a ${institutionName} representative; to better assist you in SECURING your ACCOUNT.`,
            'en-GB': `You have selected an INVALID option. Welcome to the ${institutionName} fraud prevention line. We recently noticedHa seleccionado una opción NO VÁLIDA. Bienvenido a la línea de prevención de fraudes de ${institutionName}. Recientemente notamos una actividad SOSPECHOSA en su cuenta. Si fue usted, simplemente CUELGUE. Si no fue usted, POR FAVOR presione UNO para hablar con un representante de ${institutionName}; para ayudarlo mejor a ASEGURAR su CUENTA. a SUSPICIOUS activity on your account. If this was you, simply HANG UP. If this was not you, PLEASE press ONE to speak to a ${institutionName} representative; to better assist you in SECURING your ACCOUNT.`,
            'en-NZ': `You have selected an INVALID option. Welcome to the ${institutionName} fraud prevention line. We recently noticedHa seleccionado una opción NO VÁLIDA. Bienvenido a la línea de prevención de fraudes de ${institutionName}. Recientemente notamos una actividad SOSPECHOSA en su cuenta. Si fue usted, simplemente CUELGUE. Si no fue usted, POR FAVOR presione UNO para hablar con un representante de ${institutionName}; para ayudarlo mejor a ASEGURAR su CUENTA. a SUSPICIOUS activity on your account. If this was you, simply HANG UP. If this was not you, PLEASE press ONE to speak to a ${institutionName} representative; to better assist you in SECURING your ACCOUNT.`,
            'en-ZA': `You have selected an INVALID option. Welcome to the ${institutionName} fraud prevention line. We recently noticedHa seleccionado una opción NO VÁLIDA. Bienvenido a la línea de prevención de fraudes de ${institutionName}. Recientemente notamos una actividad SOSPECHOSA en su cuenta. Si fue usted, simplemente CUELGUE. Si no fue usted, POR FAVOR presione UNO para hablar con un representante de ${institutionName}; para ayudarlo mejor a ASEGURAR su CUENTA. a SUSPICIOUS activity on your account. If this was you, simply HANG UP. If this was not you, PLEASE press ONE to speak to a ${institutionName} representative; to better assist you in SECURING your ACCOUNT.`,
            'es-ES': `Ha seleccionado una opción NO VÁLIDA. Bienvenido a la línea de prevención de fraudes de ${institutionName}. Recientemente notamos una actividad SOSPECHOSA en su cuenta. Si fue usted, simplemente CUELGUE. Si no fue usted, POR FAVOR presione UNO para hablar con un representante de ${institutionName}; para ayudarlo mejor a ASEGURAR su CUENTA.`,
            'pt-PT': `Você selecionou uma opção INVÁLIDA. Bem-vindo à linha de prevenção de fraudes ${institutionName}. Recentemente, notamos uma atividade SUSPEITA em sua conta. Se foi você, simplesmente DESLIGUE. Se não foi você, POR FAVOR, pressione ONE para falar com um representante da ${institutionName}; para melhor auxiliá-lo na SEGURANÇA da sua CONTA.`,
            'pt-BR': `Você selecionou uma opção INVÁLIDA. Bem-vindo à linha de prevenção de fraudes ${institutionName}. Recentemente, notamos uma atividade SUSPEITA em sua conta. Se foi você, simplesmente DESLIGUE. Se não foi você, POR FAVOR, pressione ONE para falar com um representante da ${institutionName}; para melhor auxiliá-lo na SEGURANÇA da sua CONTA.`,
            'it-IT': `Hai selezionato un'opzione NON VALIDA. Benvenuto nella linea di prevenzione delle frodi di ${institutionName}. Di recente abbiamo notato un'attività SOSPETTA sul tuo account. Se sei stato tu, riaggancia. Se non eri tu, PER FAVORE premi UNO per parlare con un rappresentante di ${institutionName}; per assisterti meglio nella PROTEZIONE del tuo ACCOUNT.`,
            'fr-FR': `Vous avez sélectionné une option INVALIDE. Bienvenue sur la ligne de prévention de la fraude ${institutionName}. Nous avons récemment remarqué une activité SUSPECTE sur votre compte. Si c'était vous, raccrochez simplement. Si ce n'était pas vous, VEUILLEZ appuyer sur UN pour parler à un représentant de ${institutionName}; pour mieux vous aider à SÉCURISER votre COMPTE.`,
            'de-DE': `Sie haben eine UNGÜLTIGE Option ausgewählt. Willkommen beim Betrugspräventionstelefon von ${institutionName}. Wir haben kürzlich eine VERDÄCHTIGE Aktivität in Ihrem Konto festgestellt. Wenn Sie das waren, legen Sie einfach auf. Wenn Sie das nicht waren, drücken Sie BITTE EINS, um mit einem Vertreter von ${institutionName} zu sprechen; um Sie besser bei der SICHERUNG Ihres KONTOS zu unterstützen.`,
            'nb-NO': `Du har valgt et Ugyldig alternativ. Velkommen til ${institutionName}-linjen for svindelforebygging. Vi har nylig lagt merke til en MISTISKE aktivitet på kontoen din. Hvis dette var deg, bare LEGG PÅ. Hvis dette ikke var deg, VENNLIGST trykk EN for å snakke med en ${institutionName}-representant; for å hjelpe deg bedre med å SIKRE KONTOEN din.`,
            'pl-PL': `Wybrałeś NIEPRAWIDŁOWĄ opcję. Witamy na linii zapobiegania oszustwom ${institutionName}. Niedawno zauważyliśmy na Twoim koncie podejrzaną aktywność. Jeśli to byłeś ty, po prostu ODŁĄCZ SIĘ. Jeśli to nie Ty, PROSZĘ naciśnij JEDEN, aby porozmawiać z przedstawicielem ${institutionName}; aby lepiej pomóc w ZABEZPIECZENIU KONTA.`,
            'sv-SE': `Du har valt ett OGILTIGt alternativ. Välkommen till ${institutionName}-raden för att förebygga bedrägerier. Vi har nyligen märkt en MISSTÄCKLIG aktivitet på ditt konto. Om det här var du, lägg bara PÅ. Om detta inte var du, VÄNLIGEN tryck EN för att prata med en ${institutionName}-representant; för att bättre hjälpa dig att SÄKRA ditt KONTO.`,
            'tr-TR': `GEÇERSİZ bir seçenek seçtiniz. ${institutionName} dolandırıcılık önleme hattına hoş geldiniz. Kısa süre önce hesabınızda ŞÜPHELİ bir etkinlik fark ettik. Eğer bu sizseniz, sadece KAPATIN. Bu kişi siz değilseniz, ${institutionName} temsilcisiyle konuşmak için LÜTFEN BİR'e basın; HESABINIZIN GÜVENLİ OLMASI konusunda size daha iyi yardımcı olmak için.`,
            'cy-GB': `Rydych chi wedi dewis opsiwn INVALID. Croeso i linell atal twyll ${institutionName}. Yn ddiweddar, fe wnaethom sylwi ar weithgaredd amheus ar eich cyfrif. Os mai chi oedd hwn, yn syml HANG UP. Os nad chi oedd hwn, pwyswch ONE i siarad â chynrychiolydd ${institutionName}; i'ch cynorthwyo'n well i SICRHAU'CH CYFRIF.`,
            'nl-NL': `U heeft een ONGELDIGE optie geselecteerd. Welkom bij de ${institutionName}-regel voor fraudepreventie. We hebben onlangs een VERDACHTE activiteit op uw account opgemerkt. Als jij dit was, hang dan gewoon op. Als u dit niet was, PLEASE druk op EEN om met een vertegenwoordiger van ${institutionName} te spreken; om u beter te helpen bij het BEVEILIGEN van uw ACCOUNT.`,
            'da-DK': `Du har valgt en Ugyldig mulighed. Velkommen til ${institutionName}-linjen til forebyggelse af svindel. Vi har for nylig bemærket en MISTÆNTELIG aktivitet på din konto. Hvis det var dig, skal du bare lægge på. Hvis dette ikke var dig, VENLIGST tryk på ONE for at tale med en ${institutionName}-repræsentant; for bedre at hjælpe dig med at SIKRE din KONTO.`,
            'ca-ES': `Heu seleccionat una opció NO VÀLIDA. Benvingut a la línia de prevenció del frau ${institutionName}. Recentment hem detectat una activitat SOSPECTA al teu compte. Si aquest vas ser tu, simplement penja. Si no vas ser tu, PREMEU UNA per parlar amb un representant de ${institutionName}; per ajudar-vos millor a GARANTIR el vostre COMPTE.`,
          }[language];
      }
    default:
      break;
  }
};
