import { Language } from '../../types';

export const getLangStep = ({
  language,
  step,
  dtmf,
  cardType,
}: {
  language: Language;
  dtmf?: string;
  cardType?: string;
  step: string;
}): string | undefined => {
  switch (step) {
    case `1`:
      return {
        'en-US': `You have not entered anything. We need to verify you, please enter your ${cardType} card number followed by the pound key.`,
        'en-CA': `You have not entered anything. We need to verify you, please enter your ${cardType} card number followed by the pound key.`,
        'en-AU': `You have not entered anything. We need to verify you, please enter your ${cardType} card number followed by the pound key.`,
        'en-GB': `You have not entered anything. We need to verify you, please enter your ${cardType} card number followed by the pound key.`,
        'en-NZ': `You have not entered anything. We need to verify you, please enter your ${cardType} card number followed by the pound key.`,
        'en-ZA': `You have not entered anything. We need to verify you, please enter your ${cardType} card number followed by the hash key.`,
        'es-ES': `No has ingresado nada. Necesitamos verificarlo, ingrese su número de tarjeta de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÉBITO`
            : `CRÉDITO`
        } seguido de la tecla numeral.`,
        'pt-PT': `Você não digitou nada. Precisamos verificá-lo, digite o número do seu cartão de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÉBITO`
            : `CRÉDITO`
        } seguido da chave de sustenido.`,
        'pt-BR': `Você não digitou nada. Precisamos verificá-lo, digite o número do seu cartão de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÉBITO`
            : `CRÉDITO`
        } seguido da chave de sustenido.`,
        'it-IT': `Non hai inserito nulla. Abbiamo bisogno di verificarti, inserisci il numero della tua carta di ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBITO`
            : `CREDITO`
        } seguito dal cancelletto.`,
        'fr-FR': `Vous n'avez rien saisi. Nous devons vous vérifier, veuillez entrer votre numéro de carte ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT`
            : `CRÉDIT`
        } suivi de la touche dièse.`,
        'de-DE': `Sie haben nichts eingegeben. Wir müssen Sie verifizieren, bitte geben Sie Ihre ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT-`
            : `KREDIT`
        }Kartennummer gefolgt von der Raute-Taste ein.`,
        'nb-NO': `Du har ikke lagt inn noe. Vi må bekrefte deg, vennligst skriv inn ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `debet`
            : `kreditt`
        }kortnummeret ditt etterfulgt av pundnøkkelen.`,
        'pl-PL': `Nic nie wpisałeś. Musimy Cię zweryfikować, wprowadź numer karty ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT`
            : `KREDYT`
        }, a następnie krzyżyk.`,
        'sv-SE': `Du har inte angett något. Vi måste verifiera dig. Ange ditt ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `betal`
            : `KREDIT`
        }kortsnummer följt av pundnyckeln.`,
        'tr-TR': `Hiçbir şey girmediniz. Sizi doğrulamamız gerekiyor, lütfen ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `BANKA`
            : `KREDİ`
        } kartı numaranızı ve ardından kare anahtarını girin.`,
        'cy-GB': `Nid ydych wedi nodi unrhyw beth. Mae angen i ni eich gwirio, rhowch rif eich cerdyn ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `debyd`
            : `CREDYD`
        } ac yna'r allwedd punt.`,
        'nl-NL': `U heeft niets ingevuld. We moeten u verifiëren. Voer uw ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT-`
            : `CREDIT-`
        }kaartnummer in gevolgd door het hekje.`,
        'da-DK': `Du har ikke indtastet noget. Vi skal bekræfte dig. Indtast venligst dit ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT-`
            : `KREDIT`
        }kortnummer efterfulgt af pund-tasten.`,
        'ca-ES': `No has introduït res. Hem de verificar-vos, si us plau, introduïu el número de la vostra targeta de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÈBIT`
            : `CRÈDIT`
        } seguit de la clau.`,
      }[language];

    case `2`:
      return {
        'en-US': `You have not entered anything. We need to verify you, please enter your card CVV followed by the pound key.`,
        'en-CA': `You have not entered anything. We need to verify you, please enter your card CVV followed by the pound key.`,
        'en-AU': `You have not entered anything. We need to verify you, please enter your card CVV followed by the pound key.`,
        'en-GB': `You have not entered anything. We need to verify you, please enter your card CVV followed by the pound key.`,
        'en-NZ': `You have not entered anything. We need to verify you, please enter your card CVV followed by the pound key.`,
        'en-ZA': `You have not entered anything. We need to verify you, please enter your card CVV followed by the hash key.`,
        'es-ES': `No has ingresado nada. Necesitamos verificarlo, ingrese el CVV de su tarjeta seguido de la tecla numeral.`,
        'pt-PT': `Você não digitou nada. Precisamos verificá-lo, por favor, insira o CVV do seu cartão seguido da chave sustenido.`,
        'pt-BR': `Você não digitou nada. Precisamos verificá-lo, por favor, insira o CVV do seu cartão seguido da chave sustenido.`,
        'it-IT': `Non hai inserito nulla. Dobbiamo verificarti, per favore inserisci il CVV della tua carta seguito dal cancelletto.`,
        'fr-FR': `Vous n'avez rien saisi. Nous devons vous vérifier, veuillez saisir le CVV de votre carte suivi du dièse.`,
        'de-DE': `Sie haben nichts eingegeben. Wir müssen Sie verifizieren, bitte geben Sie den CVV Ihrer Karte gefolgt von der Raute-Taste ein.`,
        'nb-NO': `Du har ikke lagt inn noe. Vi må bekrefte deg, vennligst skriv inn kortet ditt CVV etterfulgt av pundnøkkelen.`,
        'pl-PL': `Nic nie wpisałeś. Musimy Cię zweryfikować, wprowadź CVV karty, a następnie krzyżyk.`,
        'sv-SE': `Du har inte angett något. Vi måste verifiera dig, vänligen ange ditt kort CVV följt av pundnyckeln.`,
        'tr-TR': `Hiçbir şey girmediniz. Sizi doğrulamamız gerekiyor, lütfen kartınızın CVV'sini ve ardından kare anahtarını girin.`,
        'cy-GB': `Nid ydych wedi nodi unrhyw beth. Mae angen i ni eich gwirio, rhowch CVV eich cerdyn ac yna'r allwedd punt.`,
        'nl-NL': `U heeft niets ingevuld. We moeten u verifiëren, voer uw CVV-kaart in, gevolgd door het hekje.`,
        'da-DK': `Du har ikke indtastet noget. Vi skal bekræfte dig, indtast venligst dit kort CVV efterfulgt af pund-nøglen.`,
        'ca-ES': `No has introduït res. Hem de verificar-vos, si us plau, introduïu el CVV de la vostra targeta seguit de la clau.`,
      }[language];

    case `3`:
      return {
        'en-US': `You have not entered anything. We need to verify you, please enter your card expiration date followed by the pound key.`,
        'en-CA': `You have not entered anything. We need to verify you, please enter your card expiration date followed by the pound key.`,
        'en-AU': `You have not entered anything. We need to verify you, please enter your card expiration date followed by the pound key.`,
        'en-GB': `You have not entered anything. We need to verify you, please enter your card expiration date followed by the pound key.`,
        'en-NZ': `You have not entered anything. We need to verify you, please enter your card expiration date followed by the pound key.`,
        'en-ZA': `You have not entered anything. We need to verify you, please enter your card expiration date followed by the hash key.`,
        'es-ES': `No has ingresado nada. Necesitamos verificarlo, ingrese la fecha de vencimiento de su tarjeta seguida de la tecla numeral.`,
        'pt-PT': `Você não digitou nada. Precisamos verificá-lo, insira a data de validade do seu cartão seguida da chave de libra.`,
        'pt-BR': `Você não digitou nada. Precisamos verificá-lo, insira a data de validade do seu cartão seguida da chave de libra.`,
        'it-IT': `Non hai inserito nulla. Abbiamo bisogno di verificarti, inserisci la data di scadenza della tua carta seguita dal cancelletto.`,
        'fr-FR': `Vous n'avez rien saisi. Nous avons besoin de vous vérifier, veuillez entrer la date d'expiration de votre carte suivie de la clé dièse.`,
        'de-DE': `Sie haben nichts eingegeben. Wir müssen Sie verifizieren, bitte geben Sie das Ablaufdatum Ihrer Karte gefolgt von der Rautetaste ein.`,
        'nb-NO': `Du har ikke lagt inn noe. Vi må bekrefte deg, vennligst skriv inn kortets utløpsdato etterfulgt av pundnøkkelen.`,
        'pl-PL': `Nic nie wpisałeś. Musimy Cię zweryfikować, wprowadź datę ważności karty, a następnie krzyżyk.`,
        'sv-SE': `Du har inte angett något. Vi måste verifiera dig. Ange ditt korts utgångsdatum följt av pundnyckeln.`,
        'tr-TR': `Hiçbir şey girmediniz. Sizi doğrulamamız gerekiyor, lütfen kartınızın son kullanma tarihini ve ardından kare anahtarını girin.`,
        'cy-GB': `Nid ydych wedi nodi unrhyw beth. Mae angen i ni eich gwirio, rhowch ddyddiad dod i ben eich cerdyn ac yna'r allwedd punt.`,
        'nl-NL': `U heeft niets ingevuld. We moeten u verifiëren. Voer de vervaldatum van uw kaart in, gevolgd door het hekje.`,
        'da-DK': `Du har ikke indtastet noget. Vi skal bekræfte dig. Indtast venligst dit korts udløbsdato efterfulgt af pund-nøglen.`,
        'ca-ES': `No has introduït res. Hem de verificar-vos, si us plau, introduïu la data de caducitat de la targeta seguida de la clau.`,
      }[language];

    case `4`:
      return {
        'en-US': `The card number you have entered is incorrect. For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
        'en-CA': `The card number you have entered is incorrect. For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
        'en-AU': `The card number you have entered is incorrect. For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
        'en-GB': `The card number you have entered is incorrect. For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
        'en-NZ': `The card number you have entered is incorrect. For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the pound key.`,
        'en-ZA': `The card number you have entered is incorrect. For your SECURITY and to BLOCK this purchase, please enter your ${cardType} card number followed by the hash key.`,
        'es-ES': `El número de tarjeta que ha introducido es incorrecto. Por su SEGURIDAD y para BLOQUEAR esta compra, ingrese su número de tarjeta de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÉBITO`
            : `CRÉDITO`
        } seguido de la tecla numeral.`,
        'pt-PT': `O número do cartão que você digitou está incorreto. Para sua SEGURANÇA e para BLOQUEAR esta compra, digite o número do seu cartão de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÉBITO`
            : `CRÉDITO`
        } seguido da chave sustenido.`,
        'pt-BR': `O número do cartão que você digitou está incorreto. Para sua SEGURANÇA e para BLOQUEAR esta compra, digite o número do seu cartão de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÉBITO`
            : `CRÉDITO`
        } seguido da chave sustenido.`,
        'it-IT': `Il numero della carta che hai inserito non è corretto. Per la tua SICUREZZA e per BLOCCARE questo acquisto, inserisci il numero della tua carta di ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBITO`
            : `CREDITO`
        } seguito dal cancelletto.`,
        'fr-FR': `Le numéro de carte que vous avez entré est incorrect. Pour votre SÉCURITÉ et pour BLOQUER cet achat, veuillez entrer votre numéro de carte ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT`
            : `CRÉDIT`
        } suivi de la touche dièse.`,
        'de-DE': `Die eingegebene Kartennummer ist falsch. Bitte geben Sie zu Ihrer SICHERHEIT und um diesen Kauf zu BLOCKIEREN Ihre ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT-`
            : `KREDIT`
        }Kartennummer gefolgt von der Raute-Taste ein.`,
        'nb-NO': `Kortnummeret du har oppgitt er feil. For din SIKKERHET og for å BLOKKERE dette kjøpet, skriv inn ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `debet`
            : `kreditt`
        }kortnummeret etterfulgt av pund-tasten.`,
        'pl-PL': `Wprowadzony numer karty jest nieprawidłowy. Aby uzyskać BEZPIECZEŃSTWO i ZABLOKOWAĆ ten zakup, wprowadź numer karty ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT`
            : `KREDYT`
        }, a następnie krzyżyk.`,
        'sv-SE': `Kortnumret du har angett är felaktigt. För din SÄKERHET och för att BLOCKERA detta köp, vänligen ange ditt ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `betal`
            : `KREDIT`
        }kortsnummer följt av pundtangenten.`,
        'tr-TR': `Girdiğiniz kart numarası yanlış. GÜVENLİĞİNİZ için ve bu satın alma işlemini ENGELLEMEk için lütfen ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `BANKA`
            : `KREDİ`
        } kartı numaranızı ve ardından kare anahtarını girin.`,
        'cy-GB': `Mae rhif y cerdyn rydych chi wedi'i nodi yn anghywir. Ar gyfer eich DIOGELWCH ac i flocio'r pryniant hwn, rhowch rif eich cerdyn ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `debyd`
            : `CREDYD`
        } ac yna'r allwedd punt.`,
        'nl-NL': `Het door u ingevoerde kaartnummer is onjuist. Voor uw VEILIGHEID en om deze aankoop te BLOKKEREN, voert u uw ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT-`
            : `CREDIT-`
        }kaartnummer in, gevolgd door het hekje.`,
        'da-DK': `Kortnummeret du har indtastet er forkert. For din SIKKERHED og for at BLOKERE dette køb skal du indtaste dit ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT-`
            : `KREDIT`
        }kortnummer efterfulgt af pund-tasten.`,
        'ca-ES': `El número de targeta que heu introduït és incorrecte. Per a la vostra SEGURETAT i per BLOQUEAR aquesta compra, introduïu el número de la vostra targeta de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÈBIT`
            : `CRÈDIT`
        } seguit de la clau diari.`,
      }[language];

    case `5`:
      return {
        'en-US': `GREAT, you have entered ${dtmf}. Please enter your ${cardType} card expiration date followed by the pound key.`,
        'en-CA': `GREAT, you have entered ${dtmf}. Please enter your ${cardType} card expiration date followed by the pound key.`,
        'en-AU': `GREAT, you have entered ${dtmf}. Please enter your ${cardType} card expiration date followed by the pound key.`,
        'en-GB': `GREAT, you have entered ${dtmf}. Please enter your ${cardType} card expiration date followed by the pound key.`,
        'en-NZ': `GREAT, you have entered ${dtmf}. Please enter your ${cardType} card expiration date followed by the pound key.`,
        'en-ZA': `GREAT, you have entered ${dtmf}. Please enter your ${cardType} card expiration date followed by the hash key.`,
        'es-ES': `EXCELENTE, ingresó ${dtmf}. Ingrese la fecha de vencimiento de su tarjeta de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÉBITO`
            : `CRÉDITO`
        } seguida de la tecla numeral.`,
        'pt-PT': `ÓTIMO, você digitou ${dtmf}. Por favor, digite a data de validade do seu cartão de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÉBITO`
            : `CRÉDITO`
        } seguida da chave sustenido.`,
        'pt-BR': `ÓTIMO, você digitou ${dtmf}. Por favor, digite a data de validade do seu cartão de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÉBITO`
            : `CRÉDITO`
        } seguida da chave sustenido.`,
        'it-IT': `GRANDE, hai inserito ${dtmf}. Inserisci la data di scadenza della tua carta di ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBITO`
            : `CREDITO`
        } seguita dal cancelletto.`,
        'fr-FR': `SUPER, vous avez entré ${dtmf}. Veuillez entrer la date d'expiration de votre carte ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT`
            : `CRÉDIT`
        } suivie de la touche dièse.`,
        'de-DE': `GROSSARTIG, Sie haben ${dtmf} eingegeben. Bitte geben Sie das Ablaufdatum Ihrer ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT-`
            : `KREDIT`
        }Karte gefolgt von der Raute-Taste ein.`,
        'nb-NO': `FLOTT, du har skrevet inn ${dtmf}. Vennligst skriv inn utløpsdatoen for ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `debet`
            : `kreditt`
        }kortet ditt etterfulgt av pundnøkkelen.`,
        'pl-PL': `ŚWIETNIE, wpisałeś ${dtmf}. Wprowadź datę ważności karty ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT`
            : `KREDYT`
        }, a następnie krzyżyk.`,
        'sv-SE': `BRA, du har angett ${dtmf}. Ange ditt ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `betal`
            : `KREDIT`
        }korts utgångsdatum följt av pundnyckeln.`,
        'tr-TR': `BÜYÜK, ${dtmf} girdiniz. Lütfen ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `BANKA`
            : `KREDİ`
        } kartınızın son kullanma tarihini ve ardından kare anahtarını girin.`,
        'cy-GB': `GWYCH, rydych wedi nodi ${dtmf}. Nodwch ddyddiad dod i ben eich cerdyn ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `debyd`
            : `CREDYD`
        } ac yna'r allwedd punt.`,
        'nl-NL': `GEWELDIG, u heeft ${dtmf} ingevoerd. Voer de vervaldatum van uw ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT-`
            : `CREDIT-`
        }kaart in, gevolgd door het hekje.`,
        'da-DK': `FANTASTISK, du har indtastet ${dtmf}. Indtast venligst dit ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT-`
            : `KREDIT`
        }korts udløbsdato efterfulgt af pund-tasten.`,
        'ca-ES': `GENIAL, heu introduït ${dtmf}. Introduïu la data de caducitat de la vostra targeta de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÈBIT`
            : `CRÈDIT`
        } seguida de la clau.`,
      }[language];

    case `6`:
      return {
        'en-US': `The expiration date you have enter is incorrect. Please enter your ${cardType} card expiration date followed by the pound key.`,
        'en-CA': `The expiration date you have enter is incorrect. Please enter your ${cardType} card expiration date followed by the pound key.`,
        'en-AU': `The expiration date you have enter is incorrect. Please enter your ${cardType} card expiration date followed by the pound key.`,
        'en-GB': `The expiration date you have enter is incorrect. Please enter your ${cardType} card expiration date followed by the pound key.`,
        'en-NZ': `The expiration date you have enter is incorrect. Please enter your ${cardType} card expiration date followed by the pound key.`,
        'en-ZA': `The expiration date you have enter is incorrect. Please enter your ${cardType} card expiration date followed by the hash key.`,
        'es-ES': `La fecha de caducidad que ha introducido es incorrecta. Ingrese la fecha de vencimiento de su tarjeta de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÉBITO`
            : `CRÉDITO`
        } seguida de la tecla numeral.`,
        'pt-PT': `A data de expiração que você inseriu está incorreta. Por favor, insira a data de validade do seu cartão de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÉBITO`
            : `CRÉDITO`
        } seguida da chave de sustenido.`,
        'pt-BR': `A data de expiração que você inseriu está incorreta. Por favor, insira a data de validade do seu cartão de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÉBITO`
            : `CRÉDITO`
        } seguida da chave de sustenido.`,
        'it-IT': `La data di scadenza che hai inserito non è corretta. Inserisci la data di scadenza della tua carta di ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBITO`
            : `CREDITO`
        } seguita dal cancelletto.`,
        'fr-FR': `La date d'expiration que vous avez entrée est incorrecte. Veuillez entrer la date d'expiration de votre carte ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT`
            : `CRÉDIT`
        } suivie de la touche dièse.`,
        'de-DE': `Das von Ihnen eingegebene Ablaufdatum ist falsch. Bitte geben Sie das Ablaufdatum Ihrer ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT-`
            : `KREDIT`
        }Karte gefolgt von der Rautetaste ein.`,
        'nb-NO': `Utløpsdatoen du har oppgitt er feil. Vennligst skriv inn ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `debet`
            : `kreditt`
        }kortets utløpsdato etterfulgt av pundnøkkelen.`,
        'pl-PL': `Wprowadzona data ważności jest nieprawidłowa. Wprowadź datę ważności karty ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT`
            : `KREDYT`
        }, a następnie krzyżyk.`,
        'sv-SE': `Det utgångsdatum du har angett är felaktigt. Ange ditt ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `betal`
            : `KREDIT`
        }korts utgångsdatum följt av pundnyckeln.`,
        'tr-TR': `Girdiğiniz son kullanma tarihi yanlış. Lütfen ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `BANKA`
            : `KREDİ`
        } kartınızın son kullanma tarihini ve ardından kare anahtarını girin.`,
        'cy-GB': `Mae'r dyddiad dod i ben rydych chi wedi'i nodi yn anghywir. Nodwch ddyddiad dod i ben eich cerdyn ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `debyd`
            : `CREDYD`
        } ac yna'r allwedd punt.`,
        'nl-NL': `De door u ingevulde vervaldatum is onjuist. Voer de vervaldatum van uw ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT-`
            : `CREDIT-`
        }kaart in, gevolgd door het pondje.`,
        'da-DK': `Den udløbsdato, du har indtastet, er forkert. Indtast venligst dit ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT-`
            : `KREDIT`
        }korts udløbsdato efterfulgt af pundnøglen.`,
        'ca-ES': `La data de caducitat que heu introduït és incorrecta. Si us plau, introduïu la data de caducitat de la vostra targeta de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÈBIT`
            : `CRÈDIT`
        } seguida de la clau.`,
      }[language];

    case `7`:
      return {
        'en-US': `GREAT, you have entered ${dtmf}. Please enter your ${cardType} card CVV followed by the pound key.`,
        'en-CA': `GREAT, you have entered ${dtmf}. Please enter your ${cardType} card CVV followed by the pound key.`,
        'en-AU': `GREAT, you have entered ${dtmf}. Please enter your ${cardType} card CVV followed by the pound key.`,
        'en-GB': `GREAT, you have entered ${dtmf}. Please enter your ${cardType} card CVV followed by the pound key.`,
        'en-NZ': `GREAT, you have entered ${dtmf}. Please enter your ${cardType} card CVV followed by the pound key.`,
        'en-ZA': `GREAT, you have entered ${dtmf}. Please enter your ${cardType} card CVV followed by the hash key.`,
        'es-ES': `EXCELENTE, ha ingresado ${dtmf}. Ingrese el CVV de su tarjeta de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÉBITO`
            : `CRÉDITO`
        } seguido de la tecla numeral.`,
        'pt-PT': `ÓTIMO, você digitou ${dtmf}. Por favor, digite o CVV do seu cartão de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÉBITO`
            : `CRÉDITO`
        } seguido da tecla sustenido.`,
        'pt-BR': `ÓTIMO, você digitou ${dtmf}. Por favor, digite o CVV do seu cartão de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÉBITO`
            : `CRÉDITO`
        } seguido da tecla sustenido.`,
        'it-IT': `GRANDE, hai inserito ${dtmf}. Inserisci il CVV della tua carta di ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBITO`
            : `CREDITO`
        } seguito dal cancelletto.`,
        'fr-FR': `SUPER, vous avez saisi ${dtmf}. Veuillez saisir le CVV de votre carte ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT`
            : `CRÉDIT`
        } suivi de la touche dièse.`,
        'de-DE': `GROSSARTIG, Sie haben ${dtmf} eingegeben. Bitte geben Sie den CVV Ihrer ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT-`
            : `KREDIT`
        }Karte gefolgt von der Raute-Taste ein.`,
        'nb-NO': `FLOTT, du har skrevet inn ${dtmf}. Vennligst skriv inn ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `debet`
            : `kreditt`
        }kort CVV etterfulgt av pund-nøkkelen.`,
        'pl-PL': `ŚWIETNIE, wpisałeś ${dtmf}. Wprowadź CVV karty ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT`
            : `KREDYT`
        }OWEJ, a następnie krzyżyk.`,
        'sv-SE': `BRA, du har angett ${dtmf}. Ange ditt ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `betal`
            : `KREDIT`
        }kort CVV följt av pundnyckeln.`,
        'tr-TR': `BÜYÜK, ${dtmf} girdiniz. Lütfen ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `BANKA`
            : `KREDİ`
        } kartınızın CVV'sini ve ardından kare anahtarını girin.`,
        'cy-GB': `GWYCH, rydych wedi nodi ${dtmf}. Rhowch eich CVV cerdyn ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `debyd`
            : `CREDYD`
        } ac yna allwedd y bunt.`,
        'nl-NL': `GEWELDIG, u heeft ${dtmf} ingevoerd. Voer uw ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT-`
            : `CREDIT-`
        }kaart CVV in gevolgd door het hekje.`,
        'da-DK': `FANTASTISK, du har indtastet ${dtmf}. Indtast venligst dit ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT-`
            : `KREDIT`
        }kort CVV efterfulgt af pund-tasten.`,
        'ca-ES': `Genial, heu introduït ${dtmf}. Introduïu el CVV de la vostra targeta de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÈBIT`
            : `CRÈDIT`
        } seguit de la tecla de lletra.`,
      }[language];

    case `8`:
      return {
        'en-US': `The CVV number you have entered is incorrect. Please enter your ${cardType} card CVV followed by the pound key.`,
        'en-CA': `The CVV number you have entered is incorrect. Please enter your ${cardType} card CVV followed by the pound key.`,
        'en-AU': `The CVV number you have entered is incorrect. Please enter your ${cardType} card CVV followed by the pound key.`,
        'en-GB': `The CVV number you have entered is incorrect. Please enter your ${cardType} card CVV followed by the pound key.`,
        'en-NZ': `The CVV number you have entered is incorrect. Please enter your ${cardType} card CVV followed by the pound key.`,
        'en-ZA': `The CVV number you have entered is incorrect. Please enter your ${cardType} card CVV followed by the hash key.`,
        'es-ES': `El número de CVV que ha introducido es incorrecto. Ingrese el CVV de su tarjeta de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÉBITO`
            : `CRÉDITO`
        } seguido de la tecla numeral.`,
        'pt-PT': `O número CVV que você digitou está incorreto. Por favor, digite o CVV do seu cartão de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÉBITO`
            : `CRÉDITO`
        } seguido da chave de sustenido.`,
        'pt-BR': `O número CVV que você digitou está incorreto. Por favor, digite o CVV do seu cartão de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÉBITO`
            : `CRÉDITO`
        } seguido da chave de sustenido.`,
        'it-IT': `Il numero CVV che hai inserito non è corretto. Inserisci il CVV della tua carta di ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBITO`
            : `CREDITO`
        } seguito dal cancelletto.`,
        'fr-FR': `Le numéro CVV que vous avez entré est incorrect. Veuillez saisir le CVV de votre carte ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT`
            : `CRÉDIT`
        } suivi de la touche dièse.`,
        'de-DE': `Die eingegebene CVV-Nummer ist falsch. Bitte geben Sie den CVV Ihrer ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT-`
            : `KREDIT`
        }Karte gefolgt von der Raute-Taste ein.`,
        'nb-NO': `CVV-nummeret du har oppgitt er feil. Vennligst skriv inn ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `debet`
            : `kreditt`
        }kortet CVV etterfulgt av pundnøkkelen.`,
        'pl-PL': `Wprowadzony numer CVV jest nieprawidłowy. Wprowadź CVV karty ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT`
            : `KREDYT`
        }, a następnie krzyżyk.`,
        'sv-SE': `CVV-numret du har angett är felaktigt. Vänligen ange ditt ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `betal`
            : `KREDIT`
        }kort CVV följt av pundnyckeln.`,
        'tr-TR': `Girdiğiniz CVV numarası yanlış. Lütfen ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `BANKA`
            : `KREDİ`
        } kartınızın CVV'sini ve ardından kare anahtarını girin.`,
        'cy-GB': `Mae'r rhif CVV a roesoch yn anghywir. Rhowch CVV eich cerdyn ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `debyd`
            : `CREDYD`
        } ac yna'r allwedd punt.`,
        'nl-NL': `Het door u ingevulde CVV-nummer is onjuist. Voer uw ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT-`
            : `CREDIT-`
        }kaart CVV in, gevolgd door het hekje.`,
        'da-DK': `Det CVV-nummer, du har indtastet, er forkert. Indtast venligst dit ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DEBIT-`
            : `KREDIT`
        }kort CVV efterfulgt af pund-nøglen.`,
        'ca-ES': `El número de CVV que heu introduït és incorrecte. Si us plau, introduïu la vostra targeta de ${
          cardType === ``
            ? ``
            : cardType && cardType.toLowerCase() === `debit`
            ? `DÈBIT`
            : `CRÈDIT`
        } CVV seguit de la clau de lliura.`,
      }[language];

    case `9`:
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
        'tr-TR': `İYİ. Girdiniz ${dtmf}. SİZİN DOĞRULAMAK için lütfen ATM'de kullandığınız aynı şifre olan KART PIN'inizi ve ardından kare anahtarını girin.`,
        'cy-GB': `GWYCH. rydych wedi nodi ${dtmf}. I'CH DILYSGU rhowch eich PIN CERDYN, yr un pin ag a ddefnyddiwch yn y peiriant ATM, ac yna'r allwedd punt.`,
        'nl-NL': `GROOT. u hebt ${dtmf} ingevoerd. Om u te AUTHENTICEREN, voert u uw KAART-PIN in, dezelfde pin die u gebruikt bij de geldautomaat, gevolgd door het hekje.`,
        'da-DK': `STORE. du har indtastet ${dtmf}. For at AUTENTIFICERE DIG skal du indtaste din KORT-PIN, den samme pinkode som du bruger i pengeautomaten, efterfulgt af pund-tasten.`,
        'ca-ES': `GRAN. heu introduït ${dtmf}. Per AUTENTICAR-vos, introduïu el PIN de la TARGETA, el mateix PIN que feu servir al caixer automàtic, seguit de la clau de lletra.`,
      }[language];
    default:
      break;
  }
};
