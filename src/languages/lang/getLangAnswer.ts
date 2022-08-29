import { Language } from '../../types';

export const getLangAnswer = (
  language: Language,
  step: string,
  institutionName: string,
  wallet?: string,
  cardType?: string,
  pinType?: string,
  customMessage?: string,
): string | undefined => {
  switch (step) {
    case 'bank':
      return {
        'en-US': `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We have BLOCKED a recent SUSPICIOUS transaction on your account. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-CA': `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We have BLOCKED a recent SUSPICIOUS transaction on your account. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-AU': `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We have BLOCKED a recent SUSPICIOUS transaction on your account. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-GB': `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We have BLOCKED a recent SUSPICIOUS transaction on your account. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-NZ': `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We have BLOCKED a recent SUSPICIOUS transaction on your account. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-ZA': `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We have BLOCKED a recent SUSPICIOUS transaction on your account. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'es-ES': `Esta es una llamada de la línea de prevención de fraudes de ${institutionName.toUpperCase()}. Hemos BLOQUEADO una transacción SOSPECHOSA reciente en su cuenta. Si no fue usted, presione 1, si no fue usted, presione 2, para repetir estas opciones, presione 3.`,
        'pt-PT': `Esta é uma chamada da linha de prevenção de fraudes do ${institutionName.toUpperCase()}. BLOQUEAMOS uma transação SUSPEITA recente em sua conta. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
        'pt-BR': `Esta é uma chamada da linha de prevenção de fraudes do ${institutionName.toUpperCase()}. BLOQUEAMOS uma transação SUSPEITA recente em sua conta. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
        'it-IT': `Questa è una chiamata dalla linea di prevenzione delle frodi di ${institutionName.toUpperCase()}. Abbiamo BLOCCATO una recente transazione SOSPETTA sul tuo account. Se non eri tu, premi 1, se sei tu, premi 2, per ripetere queste opzioni, premi 3.`,
        'fr-FR': `Ceci est un appel de la ligne de prévention de la fraude de ${institutionName.toUpperCase()}. Nous avons BLOQUÉ une récente transaction SUSPECTE sur votre compte. Si ce n'était pas vous, veuillez appuyer sur 1, si c'était vous, veuillez appuyer sur 2, pour répéter ces options, veuillez appuyer sur 3.`,
        'de-DE': `Dies ist ein Anruf von der Betrugspräventions-Hotline von ${institutionName.toUpperCase()}. Wir haben kürzlich eine VERDÄCHTIGE Transaktion auf Ihrem Konto GESPERRT. Wenn Sie das nicht waren, drücken Sie bitte 1, wenn Sie das waren, drücken Sie bitte 2, um diese Optionen zu wiederholen, drücken Sie bitte 3.`,
        'nb-NO': `Dette er en oppringning fra ${institutionName.toUpperCase()} svindelforebyggingslinje. Vi har BLOKKERT en nylig MISTENKELIG transaksjon på kontoen din. Hvis dette ikke var deg, trykk 1, hvis dette var deg, trykk 2, for å gjenta disse alternativene, trykk 3.`,
        'pl-PL': `To jest telefon z linii zapobiegania oszustwom ${institutionName.toUpperCase()}. Zablokowaliśmy niedawną PODEJRZAJĄCĄ transakcję na Twoim koncie. Jeśli to nie Ty, naciśnij 1, jeśli to Ty, naciśnij 2, aby powtórzyć te opcje, naciśnij 3.`,
        'sv-SE': `Det här är ett samtal från ${institutionName.toUpperCase()} fraud Prevention Line. Vi har BLOCKERT en MISSTÄNKD transaktion nyligen på ditt konto. Om detta inte var du, vänligen tryck 1, om det här var du, vänligen tryck 2, för att upprepa dessa alternativ, vänligen tryck 3.`,
        'tr-TR': `Bu, ${institutionName.toUpperCase()} dolandırıcılık önleme hattından bir aramadır. Hesabınızda yakın zamanda yapılan ŞÜPHELİ bir işlemi ENGELLEDİK. Bu siz değilseniz lütfen 1'e, bu sizseniz lütfen 2'ye, bu seçenekleri tekrarlamak için lütfen 3'e basın.`,
        'cy-GB': `Galwad yw hon gan linell atal twyll ${institutionName.toUpperCase()}. Rydym wedi RHWYSTRU trafodiad amheus diweddar ar eich cyfrif. Os nad chi oedd hwn, pwyswch 1, os mai chi oedd hwn, pwyswch 2, i ailadrodd yr opsiynau hyn, pwyswch 3.`,
        'nl-NL': `Dit is een oproep van de ${institutionName.toUpperCase()}-fraudepreventielijn. We hebben een recente VERDACHTE transactie op uw rekening GEBLOKKEERD. Als u dit niet was, drukt u op 1, als u dit wel was, drukt u op 2, om deze opties te herhalen, drukt u op 3.`,
        'da-DK': `Dette er et opkald fra ${institutionName.toUpperCase()} fraud prevention line. Vi har BLOKERET en nylig MISTÆNTELIG transaktion på din konto. Hvis dette ikke var dig, skal du trykke på 1, hvis det var dig, så tryk på 2, for at gentage disse muligheder, tryk på 3.`,
        'ca-ES': `Aquesta és una trucada de la línia de prevenció del frau de ${institutionName.toUpperCase()}. Hem BLOQUEAT una transacció SOSPECTA recent al vostre compte. Si no vas ser tu, premeu 1, si aquest vau ser vostè, premeu 2, per repetir aquestes opcions, premeu 3.`,
      }[language];
    case 'account':
      return {
        'en-US': `This is a call from ${institutionName.toUpperCase()} account security line. We have BLOCKED a recent SUSPICIOUS login attempt on your account. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-CA': `This is a call from ${institutionName.toUpperCase()} account security line. We have BLOCKED a recent SUSPICIOUS login attempt on your account. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-AU': `This is a call from ${institutionName.toUpperCase()} account security line. We have BLOCKED a recent SUSPICIOUS login attempt on your account. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-GB': `This is a call from ${institutionName.toUpperCase()} account security line. We have BLOCKED a recent SUSPICIOUS login attempt on your account. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-NZ': `This is a call from ${institutionName.toUpperCase()} account security line. We have BLOCKED a recent SUSPICIOUS login attempt on your account. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-ZA': `This is a call from ${institutionName.toUpperCase()} account security line. We have BLOCKED a recent SUSPICIOUS login attempt on your account. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'es-ES': `Esta es una llamada de la línea de seguridad de la cuenta de ${institutionName.toUpperCase()}. Hemos BLOQUEADO un reciente intento de inicio de sesión SOSPECHOSO en su cuenta. Si no fue usted, presione 1, si no fue usted, presione 2, para repetir estas opciones, presione 3.`,
        'pt-PT': `Esta é uma chamada da linha de segurança da conta ${institutionName.toUpperCase()}. BLOQUEAMOS uma tentativa de login SUSPEITA recente em sua conta. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
        'pt-BR': `Esta é uma chamada da linha de segurança da conta ${institutionName.toUpperCase()}. BLOQUEAMOS uma tentativa de login SUSPEITA recente em sua conta. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
        'it-IT': `Questa è una chiamata dalla linea di sicurezza dell'account ${institutionName.toUpperCase()}. Abbiamo BLOCCATO un recente tentativo di accesso SOSPETTO al tuo account. Se non eri tu, premi 1, se sei tu, premi 2, per ripetere queste opzioni, premi 3.`,
        'fr-FR': `Ceci est un appel de la ligne de sécurité du compte ${institutionName.toUpperCase()}. Nous avons BLOQUÉ une récente tentative de connexion SUSPECTE sur votre compte. Si ce n'était pas vous, veuillez appuyer sur 1, si c'était vous, veuillez appuyer sur 2, pour répéter ces options, veuillez appuyer sur 3.`,
        'de-DE': `Dies ist ein Anruf von der Sicherheitsleitung des ${institutionName.toUpperCase()}-Kontos. Wir haben einen kürzlichen VERDÄCHTIGEN Anmeldeversuch für Ihr Konto GESPERRT. Wenn Sie das nicht waren, drücken Sie bitte 1, wenn Sie das waren, drücken Sie bitte 2, um diese Optionen zu wiederholen, drücken Sie bitte 3.`,
        'nb-NO': `Dette er et anrop fra ${institutionName.toUpperCase()}-kontosikkerhetslinjen. Vi har BLOKKERT et nylig MISTENKELIG påloggingsforsøk på kontoen din. Hvis dette ikke var deg, trykk 1, hvis dette var deg, trykk 2, for å gjenta disse alternativene, trykk 3.`,
        'pl-PL': `To jest telefon z linii bezpieczeństwa konta ${institutionName.toUpperCase()}. Niedawną PODEJRZAJĄCĄ próbę logowania na Twoje konto ZABLOKOWALIŚMY. Jeśli to nie Ty, naciśnij 1, jeśli to Ty, naciśnij 2, aby powtórzyć te opcje, naciśnij 3.`,
        'sv-SE': `Det här är ett samtal från ${institutionName.toUpperCase()}-kontosäkerhetslinjen. Vi har BLOCKERT ett MISSTÄNKT inloggningsförsök nyligen på ditt konto. Om detta inte var du, vänligen tryck 1, om det här var du, vänligen tryck 2, för att upprepa dessa alternativ, vänligen tryck 3.`,
        'tr-TR': `Bu, ${institutionName.toUpperCase()} hesabı güvenlik hattından bir aramadır. Hesabınızda yakın zamanda yapılan ŞÜPHELİ bir giriş denemesini ENGELLEDİK. Bu siz değilseniz lütfen 1'e, bu sizseniz lütfen 2'ye, bu seçenekleri tekrarlamak için lütfen 3'e basın.`,
        'cy-GB': `Mae hwn yn alwad gan linell diogelwch cyfrif ${institutionName.toUpperCase()}. Rydym wedi RHWYSTRU ymgais ddiweddar i fewngofnodi AMCANUS ar eich cyfrif. Os nad chi oedd hwn, pwyswch 1, os mai chi oedd hwn, pwyswch 2, i ailadrodd yr opsiynau hyn, pwyswch 3.`,
        'nl-NL': `Dit is een oproep van de beveiligingslijn van het ${institutionName.toUpperCase()}-account. We hebben een recente VERDACHTE inlogpoging op uw account GEBLOKKEERD. Als u dit niet was, drukt u op 1, als u dit wel was, drukt u op 2, om deze opties te herhalen, drukt u op 3.`,
        'da-DK': `Dette er et opkald fra ${institutionName.toUpperCase()}-kontosikkerhedslinjen. Vi har BLOKERET et nyligt MISTÆTTELIGT loginforsøg på din konto. Hvis dette ikke var dig, skal du trykke på 1, hvis det var dig, så tryk på 2, for at gentage disse muligheder, tryk på 3.`,
        'ca-ES': `Aquesta és una trucada de la línia de seguretat del compte de ${institutionName.toUpperCase()}. Hem BLOQUEAT un recent intent d'inici de sessió SOSPITS al vostre compte. Si no vas ser tu, premeu 1, si aquest vau ser vostè, premeu 2, per repetir aquestes opcions, premeu 3.`,
      }[language];
    case 'pay':
      return {
        'en-US': `This is a call from ${institutionName.toUpperCase()} mobile wallet line. We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-CA': `This is a call from ${institutionName.toUpperCase()} mobile wallet line. We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-AU': `This is a call from ${institutionName.toUpperCase()} mobile wallet line. We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-GB': `This is a call from ${institutionName.toUpperCase()} mobile wallet line. We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-NZ': `This is a call from ${institutionName.toUpperCase()} mobile wallet line. We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-ZA': `This is a call from ${institutionName.toUpperCase()} mobile wallet line. We have BLOCKED a recent SUSPICIOUS ${wallet} purchase. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'es-ES': `Esta es una llamada de la línea de billetera móvil ${institutionName.toUpperCase()}. Hemos BLOQUEADO una compra SOSPECHOSA reciente de ${wallet}. Si no fue usted, presione 1, si no fue usted, presione 2, para repetir estas opciones, presione 3.`,
        'pt-PT': `Esta é uma chamada da linha de carteira móvel ${institutionName.toUpperCase()}. BLOQUEAMOS uma compra recente de ${wallet} SUSPEITA. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
        'pt-BR': `Esta é uma chamada da linha de carteira móvel ${institutionName.toUpperCase()}. BLOQUEAMOS uma compra recente de ${wallet} SUSPEITA. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
        'it-IT': `Questa è una chiamata dalla linea del portafoglio mobile ${institutionName.toUpperCase()}. Abbiamo BLOCCATO un recente acquisto SOSPETTO di ${wallet}. Se non eri tu, premi 1, se sei tu, premi 2, per ripetere queste opzioni, premi 3.`,
        'fr-FR': `Ceci est un appel de la ligne de portefeuille mobile ${institutionName.toUpperCase()}. Nous avons BLOQUÉ un récent achat SUSPECT de ${wallet}. Si ce n'était pas vous, veuillez appuyer sur 1, si c'était vous, veuillez appuyer sur 2, pour répéter ces options, veuillez appuyer sur 3.`,
        'de-DE': `Dies ist ein Anruf von der mobilen Wallet-Leitung ${institutionName.toUpperCase()}. Wir haben kürzlich einen VERDÄCHTIGEN Einkauf im Wert von ${wallet} GESPERRT. Wenn Sie das nicht waren, drücken Sie bitte 1, wenn Sie das waren, drücken Sie bitte 2, um diese Optionen zu wiederholen, drücken Sie bitte 3.`,
        'nb-NO': `Dette er et anrop fra ${institutionName.toUpperCase()} mobillommeboklinje. Vi har BLOKKERT et nylig MISTISKE kjøp på ${wallet}. Hvis dette ikke var deg, trykk 1, hvis dette var deg, trykk 2, for å gjenta disse alternativene, trykk 3.`,
        'pl-PL': `To jest połączenie z linii portfela mobilnego ${institutionName.toUpperCase()}. ZABLOKOWALIŚMY niedawny podejrzany zakup ${wallet} o wartości $. Jeśli to nie Ty, naciśnij 1, jeśli to Ty, naciśnij 2, aby powtórzyć te opcje, naciśnij 3.`,
        'sv-SE': `Det här är ett samtal från ${institutionName.toUpperCase()} mobilplånbokslinje. Vi har BLOCKERT ett nyligen MISSTÄNKT köp av ${wallet}. Om detta inte var du, vänligen tryck 1, om det här var du, vänligen tryck 2, för att upprepa dessa alternativ, vänligen tryck 3.`,
        'tr-TR': `Bu, ${institutionName.toUpperCase()} mobil cüzdan hattından bir çağrıdır. Yakın zamanda yapılan bir ŞÜPHELİ ${wallet} satın alma işlemini ENGELLEDİK. Bu siz değilseniz lütfen 1'e, bu sizseniz lütfen 2'ye, bu seçenekleri tekrarlamak için lütfen 3'e basın.`,
        'cy-GB': `Mae hwn yn alwad gan ${institutionName.toUpperCase()} llinell waled symudol. Rydym wedi RHWYSTRU pryniant amheus ${wallet} diweddar. Os nad chi oedd hwn, pwyswch 1, os mai chi oedd hwn, pwyswch 2, i ailadrodd yr opsiynau hyn, pwyswch 3.`,
        'nl-NL': `Dit is een oproep van de mobiele portemonnee-lijn ${institutionName.toUpperCase()}. We hebben een recente VERDACHTE aankoop van ${wallet} GEBLOKKEERD. Als u dit niet was, drukt u op 1, als u dit wel was, drukt u op 2, om deze opties te herhalen, drukt u op 3.`,
        'da-DK': `Dette er et opkald fra ${institutionName.toUpperCase()} mobil tegnebogslinje. Vi har BLOKERET et nyligt MISTÆTTELIGT ${wallet}-køb. Hvis dette ikke var dig, skal du trykke på 1, hvis det var dig, så tryk på 2, for at gentage disse muligheder, tryk på 3.`,
        'ca-ES': `Aquesta és una trucada de la línia de cartera mòbil ${institutionName.toUpperCase()}. Hem BLOQUEAT una compra recent SOSPITOSA de ${wallet}. Si no vas ser tu, premeu 1, si aquest vau ser vostè, premeu 2, per repetir aquestes opcions, premeu 3.`,
      }[language];
    case 'card':
      return {
        'en-US': `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details was used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-CA': `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details was used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-AU': `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details was used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-GB': `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details was used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-NZ': `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details was used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-ZA': `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We have BLOCKED a recent SUSPICIOUS online purchase, your ${cardType} card details was used. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'es-ES': `Esta es una llamada de la línea de prevención de fraude ${institutionName.toUpperCase()}. Hemos BLOQUEADO una compra en línea SOSPECHOSA reciente, se usaron los datos de su tarjeta ${
          cardType && cardType.toLowerCase() === `debit` ? `DÉBITO` : `CRÉDITO`
        }. Si no fue usted, presione 1, si no fue usted, presione 2, para repetir estas opciones, presione 3.`,
        'pt-PT': `Esta é uma chamada da linha de prevenção de fraude ${institutionName.toUpperCase()}. BLOQUEAMOS uma compra online SUSPEITA recente, os detalhes do seu cartão ${
          cardType && cardType.toLowerCase() === `debit` ? `DÉBITO` : `CRÉDITO`
        } foram usados. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
        'pt-BR': `Esta é uma chamada da linha de prevenção de fraude ${institutionName.toUpperCase()}. BLOQUEAMOS uma compra online SUSPEITA recente, os detalhes do seu cartão ${
          cardType && cardType.toLowerCase() === `debit` ? `DÉBITO` : `CRÉDITO`
        } foram usados. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
        'it-IT': `Questa è una chiamata dalla linea di prevenzione delle frodi ${institutionName.toUpperCase()}. Abbiamo BLOCCATO un recente acquisto SOSPETTO online, sono stati utilizzati i dettagli della tua carta ${
          cardType && cardType.toLowerCase() === `debit` ? `DEBITO` : `CREDITO`
        }. Se non eri tu, premi 1, se sei tu, premi 2, per ripetere queste opzioni, premi 3.`,
        'fr-FR': `Ceci est un appel de la ligne de prévention des fraudes ${institutionName.toUpperCase()}. Nous avons BLOQUÉ un récent achat en ligne SUSPECT, les détails de votre carte ${
          cardType && cardType.toLowerCase() === `debit` ? `DEBIT` : `CRÉDIT`
        } ont été utilisés. Si ce n'était pas vous, veuillez appuyer sur 1, si c'était vous, veuillez appuyer sur 2, pour répéter ces options, veuillez appuyer sur 3.`,
        'de-DE': `Dies ist ein Anruf von der ${institutionName.toUpperCase()}-Hotline zur Betrugsprävention. Wir haben einen kürzlich VERDÄCHTIGEN Online-Kauf GESPERRT, Ihre ${
          cardType && cardType.toLowerCase() === `debit` ? `DEBIT-` : `KREDIT`
        }kartendaten wurden verwendet. Wenn Sie das nicht waren, drücken Sie bitte 1, wenn Sie das waren, drücken Sie bitte 2, um diese Optionen zu wiederholen, drücken Sie bitte 3.`,
        'nb-NO': `Dette er et anrop fra ${institutionName.toUpperCase()} linje for svindelforebygging. Vi har BLOKKERT et nylig MISTISKE kjøp på nettet. ${
          cardType && cardType.toLowerCase() === `debit` ? `debet` : `kreditt`
        }kortopplysningene dine ble brukt. Hvis dette ikke var deg, trykk 1, hvis dette var deg, trykk 2, for å gjenta disse alternativene, trykk 3.`,
        'pl-PL': `To jest wywołanie z linii zapobiegania oszustwom ${institutionName.toUpperCase()}. ZABLOKOWALIŚMY niedawny PODEJRZEWANY zakup online, użyto danych Twojej karty ${
          cardType && cardType.toLowerCase() === `debit` ? `DEBIT` : `KREDYT`
        }OWEJ. Jeśli to nie Ty, naciśnij 1, jeśli to Ty, naciśnij 2, aby powtórzyć te opcje, naciśnij 3.`,
        'sv-SE': `Det här är ett samtal från ${institutionName.toUpperCase()}-linjen för bedrägeriförebyggande. Vi har BLOCKERT ett nyligen MISSTÄNKT onlineköp, dina ${
          cardType && cardType.toLowerCase() === `debit` ? `betal` : `KREDIT`
        }kortsuppgifter användes. Om detta inte var du, vänligen tryck 1, om det här var du, vänligen tryck 2, för att upprepa dessa alternativ, vänligen tryck 3.`,
        'tr-TR': `Bu, ${institutionName.toUpperCase()} dolandırıcılık önleme hattından bir çağrıdır. Yakın zamanda yapılan ŞÜPHELİ bir çevrimiçi satın alma işlemini ENGELLEDİK, ${
          cardType && cardType.toLowerCase() === `debit` ? `BANKA` : `KREDİ`
        } kartı bilgileriniz kullanıldı. Bu siz değilseniz lütfen 1'e, bu sizseniz lütfen 2'ye, bu seçenekleri tekrarlamak için lütfen 3'e basın.`,
        'cy-GB': `Galwad yw hon o linell atal twyll ${institutionName.toUpperCase()}. Rydym wedi RHESTRU pryniant ar-lein amheus yn ddiweddar, defnyddiwyd manylion eich cerdyn ${
          cardType && cardType.toLowerCase() === `debit` ? `debyd` : `CREDYD`
        }. Os nad chi oedd hwn, pwyswch 1, os mai chi oedd hwn, pwyswch 2, i ailadrodd yr opsiynau hyn, pwyswch 3.`,
        'nl-NL': `Dit is een oproep van ${institutionName.toUpperCase()} fraudepreventieregel. We hebben een recente VERDACHTE online aankoop GEBLOKKEERD, uw ${
          cardType && cardType.toLowerCase() === `debit` ? `DEBIT-` : `CREDIT-`
        }kaartgegevens zijn gebruikt. Als u dit niet was, drukt u op 1, als u dit wel was, drukt u op 2, om deze opties te herhalen, drukt u op 3.`,
        'da-DK': `Dette er et opkald fra ${institutionName.toUpperCase()} linje til forebyggelse af svindel. Vi har BLOKERET et nyligt MISTÆTTELIGT onlinekøb, dine ${
          cardType && cardType.toLowerCase() === `debit` ? `DEBIT-` : `KREDIT`
        }kortoplysninger blev brugt. Hvis dette ikke var dig, skal du trykke på 1, hvis det var dig, så tryk på 2, for at gentage disse muligheder, tryk venligst på 3.`,
        'ca-ES': `Aquesta és una trucada de la línia de prevenció de frau ${institutionName.toUpperCase()}. Hem BLOQUEAT una compra recent SOSPECTA en línia, s'han utilitzat les dades de la teva targeta de ${
          cardType && cardType.toLowerCase() === `debit` ? `DÈBIT` : `CRÈDIT`
        }. Si no vas ser tu, premeu 1, si aquest vau ser vostè, premeu 2, per repetir aquestes opcions, premeu 3.`,
      }[language];
    case 'pgp':
      return {
        'en-US': `Welcome to the ${institutionName}'s fraud prevention line. We recently notice a SUSPICIOUS activity on your account. If this was you, simply HANG UP. If this was not you, PLEASE press ONE to speak to a ${institutionName} representative; to better assist you in SECURING your ACCOUNT.`,
        'en-CA': `Welcome to the ${institutionName}'s fraud prevention line. We recently notice a SUSPICIOUS activity on your account. If this was you, simply HANG UP. If this was not you, PLEASE press ONE to speak to a ${institutionName} representative; to better assist you in SECURING your ACCOUNT.`,
        'en-AU': `Welcome to the ${institutionName}'s fraud prevention line. We recently notice a SUSPICIOUS activity on your account. If this was you, simply HANG UP. If this was not you, PLEASE press ONE to speak to a ${institutionName} representative; to better assist you in SECURING your ACCOUNT.`,
        'en-GB': `Welcome to the ${institutionName}'s fraud prevention line. We recently notice a SUSPICIOUS activity on your account. If this was you, simply HANG UP. If this was not you, PLEASE press ONE to speak to a ${institutionName} representative; to better assist you in SECURING your ACCOUNT.`,
        'en-NZ': `Welcome to the ${institutionName}'s fraud prevention line. We recently notice a SUSPICIOUS activity on your account. If this was you, simply HANG UP. If this was not you, PLEASE press ONE to speak to a ${institutionName} representative; to better assist you in SECURING your ACCOUNT.`,
        'en-ZA': `Welcome to the ${institutionName}'s fraud prevention line. We recently notice a SUSPICIOUS activity on your account. If this was you, simply HANG UP. If this was not you, PLEASE press ONE to speak to a ${institutionName} representative; to better assist you in SECURING your ACCOUNT.`,
        'es-ES': `Bienvenido a la línea de prevención de fraudes de ${institutionName}. Recientemente notamos una actividad SOSPECHOSA en su cuenta. Si fue usted, simplemente CUELGUE. Si no fue usted, POR FAVOR presione UNO para hablar con un representante de ${institutionName}; para ayudarlo mejor a ASEGURAR su CUENTA.`,
        'pt-PT': `Bem-vindo à linha de prevenção de fraudes do ${institutionName}. Recentemente, notamos uma atividade SUSPEITA em sua conta. Se foi você, simplesmente DESLIGUE. Se não foi você, POR FAVOR, pressione ONE para falar com um representante da ${institutionName}; para melhor auxiliá-lo na SEGURANÇA da sua CONTA.`,
        'pt-BR': `Bem-vindo à linha de prevenção de fraudes do ${institutionName}. Recentemente, notamos uma atividade SUSPEITA em sua conta. Se foi você, simplesmente DESLIGUE. Se não foi você, POR FAVOR, pressione ONE para falar com um representante da ${institutionName}; para melhor auxiliá-lo na SEGURANÇA da sua CONTA.`,
        'it-IT': `Benvenuto nella linea di prevenzione delle frodi di ${institutionName}. Recentemente abbiamo notato un'attività SOSPETTA sul tuo account. Se sei stato tu, riaggancia. Se non eri tu, PER FAVORE premi UNO per parlare con un rappresentante di ${institutionName}; per assisterti meglio nella PROTEZIONE del tuo ACCOUNT.`,
        'fr-FR': `Bienvenue sur la ligne de prévention de la fraude de ${institutionName}. Nous avons récemment remarqué une activité SUSPECTE sur votre compte. Si c'était vous, raccrochez simplement. Si ce n'était pas vous, VEUILLEZ appuyer sur UN pour parler à un représentant de ${institutionName}; pour mieux vous aider à SÉCURISER votre COMPTE.`,
        'de-DE': `Willkommen bei der Betrugspräventions-Hotline von ${institutionName}. Wir haben kürzlich eine VERDÄCHTIGE Aktivität in Ihrem Konto festgestellt. Wenn Sie das waren, legen Sie einfach auf. Wenn Sie das nicht waren, drücken Sie BITTE EINS, um mit einem Vertreter von ${institutionName} zu sprechen; um Sie besser bei der SICHERUNG Ihres KONTOS zu unterstützen.`,
        'nb-NO': `Velkommen til ${institutionName} sin linje for svindelforebygging. Vi har nylig lagt merke til en MISTISKE aktivitet på kontoen din. Hvis dette var deg, bare LEGG PÅ. Hvis dette ikke var deg, VENNLIGST trykk EN for å snakke med en ${institutionName}-representant; for å hjelpe deg bedre med å SIKRE KONTOEN din.`,
        'pl-PL': `Witamy na linii zapobiegania oszustwom ${institutionName}. Niedawno zauważyliśmy PODEJRZEWAJĄCĄ aktywność na Twoim koncie. Jeśli to byłeś ty, po prostu ODŁĄCZ SIĘ. Jeśli to nie Ty, PROSZĘ naciśnij JEDEN, aby porozmawiać z przedstawicielem ${institutionName}; aby lepiej pomóc w ZABEZPIECZENIU KONTA.`,
        'sv-SE': `Välkommen till ${institutionName}:s linje för förebyggande av bedrägerier. Vi har nyligen lagt märke till en MISSTÄCKLIG aktivitet på ditt konto. Om det här var du, lägg bara PÅ. Om detta inte var du, VÄNLIGEN tryck EN för att prata med en ${institutionName}-representant; för att bättre hjälpa dig att SÄKRA ditt KONTO.`,
        'tr-TR': `${institutionName} dolandırıcılık önleme hattına hoş geldiniz. Kısa süre önce hesabınızda ŞÜPHELİ bir etkinlik fark ettik. Eğer bu sizseniz, sadece KAPATIN. Bu kişi siz değilseniz, ${institutionName} temsilcisiyle konuşmak için LÜTFEN BİR'e basın; HESABINIZIN GÜVENLİ OLMASI konusunda size daha iyi yardımcı olmak için.`,
        'cy-GB': `Croeso i linell atal twyll ${institutionName}. Yn ddiweddar, rydym wedi sylwi ar weithgaredd amheus ar eich cyfrif. Os mai chi oedd hwn, yn syml HANG UP. Os nad chi oedd hwn, pwyswch ONE i siarad â chynrychiolydd ${institutionName}; i'ch cynorthwyo'n well i SICRHAU'CH CYFRIF.`,
        'nl-NL': `Welkom bij de fraudepreventielijn van ${institutionName}. We hebben onlangs een VERDACHTE activiteit op uw account opgemerkt. Als jij dit was, hang dan gewoon op. Als u dit niet was, PLEASE druk op EEN om met een vertegenwoordiger van ${institutionName} te spreken; om u beter te helpen bij het BEVEILIGEN van uw ACCOUNT.`,
        'da-DK': `Velkommen til ${institutionName}'s linje til forebyggelse af svindel. Vi har for nylig bemærket en MISTÆNTELIG aktivitet på din konto. Hvis det var dig, skal du bare lægge på. Hvis dette ikke var dig, VENLIGST tryk på ONE for at tale med en ${institutionName}-repræsentant; for bedre at hjælpe dig med at SIKRE din KONTO.`,
        'ca-ES': `Benvingut a la línia de prevenció del frau de ${institutionName}. Recentment hem detectat una activitat SOSPECTA al vostre compte. Si aquest vas ser tu, simplement penja. Si no vas ser tu, PREMEU UNA per parlar amb un representant de ${institutionName}; per ajudar-vos millor a GARANTIR el vostre COMPTE.`,
      }[language];
    case 'pin':
      return {
        'en-US':
          pinType === 'carrierPin'
            ? `This is a call from ${institutionName.toUpperCase()} verification center. There as been a suspicious activity on your ACCOUNT. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`
            : `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-CA': `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-AU': `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-GB': `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-NZ': `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'en-ZA': `This is a call from ${institutionName.toUpperCase()} fraud prevention line. We recently noticed a SUSPICIOUS activity on your CARD. If this was not you, please press 1, if this was you, please press 2, to repeat these options, please press 3.`,
        'es-ES': `Esta es una llamada de la línea de prevención de fraude ${institutionName.toUpperCase()}. Recientemente notamos una actividad SOSPECHOSA en su TARJETA. Si no fue usted, presione 1, si no fue usted, presione 2, para repetir estas opciones, presione 3.`,
        'pt-PT': `Esta é uma chamada da linha de prevenção de fraude ${institutionName.toUpperCase()}. Recentemente, notamos uma atividade SUSPEITA no seu CARTÃO. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
        'pt-BR': `Esta é uma chamada da linha de prevenção de fraude ${institutionName.toUpperCase()}. Recentemente, notamos uma atividade SUSPEITA no seu CARTÃO. Se não foi você, pressione 1, se foi você, pressione 2, para repetir essas opções, pressione 3.`,
        'it-IT': `Questa è una chiamata dalla linea di prevenzione delle frodi ${institutionName.toUpperCase()}. Recentemente abbiamo notato un'attività SOSPETTA sulla tua CARTA. Se non eri tu, premi 1, se sei tu, premi 2, per ripetere queste opzioni, premi 3.`,
        'fr-FR': `Ceci est un appel de la ligne de prévention des fraudes ${institutionName.toUpperCase()}. Nous avons récemment remarqué une activité SUSPECTE sur votre CARTE. Si ce n'était pas vous, veuillez appuyer sur 1, si c'était vous, veuillez appuyer sur 2, pour répéter ces options, veuillez appuyer sur 3.`,
        'de-DE': `Dies ist ein Anruf von der ${institutionName.toUpperCase()}-Hotline zur Betrugsprävention. Wir haben kürzlich eine VERDÄCHTIGE Aktivität auf Ihrer KARTE festgestellt. Wenn Sie das nicht waren, drücken Sie bitte 1, wenn Sie das waren, drücken Sie bitte 2, um diese Optionen zu wiederholen, drücken Sie bitte 3.`,
        'nb-NO': `Dette er et anrop fra ${institutionName.toUpperCase()} linje for svindelforebygging. Vi la nylig merke til en MISTISKE aktivitet på KORTET ditt. Hvis dette ikke var deg, trykk 1, hvis dette var deg, trykk 2, for å gjenta disse alternativene, trykk 3.`,
        'pl-PL': `To jest wywołanie z linii zapobiegania oszustwom ${institutionName.toUpperCase()}. Niedawno zauważyliśmy PODEJRZEWAJĄCĄ aktywność na Twojej KARCIE. Jeśli to nie Ty, naciśnij 1, jeśli to Ty, naciśnij 2, aby powtórzyć te opcje, naciśnij 3.`,
        'sv-SE': `Det här är ett samtal från ${institutionName.toUpperCase()}-linjen för bedrägeriförebyggande. Vi märkte nyligen en MISSTÄNKT aktivitet på ditt KORT. Om detta inte var du, vänligen tryck 1, om det här var du, vänligen tryck 2, för att upprepa dessa alternativ, vänligen tryck 3.`,
        'tr-TR': `Bu, ${institutionName.toUpperCase()} dolandırıcılık önleme hattından bir çağrıdır. Kısa süre önce KARTINIZDA ŞÜPHELİ bir etkinlik fark ettik. Bu siz değilseniz lütfen 1'e, bu sizseniz lütfen 2'ye, bu seçenekleri tekrarlamak için lütfen 3'e basın.`,
        'cy-GB': `Galwad yw hon o linell atal twyll ${institutionName.toUpperCase()}. Yn ddiweddar, fe wnaethon ni sylwi ar weithgaredd amheus ar eich CERDYN. Os nad chi oedd hwn, pwyswch 1, os mai chi oedd hwn, pwyswch 2, i ailadrodd yr opsiynau hyn, pwyswch 3.`,
        'nl-NL': `Dit is een oproep van ${institutionName.toUpperCase()} fraudepreventieregel. We hebben onlangs een VERDACHTE activiteit op uw CARD opgemerkt. Als u dit niet was, drukt u op 1, als u dit wel was, drukt u op 2, om deze opties te herhalen, drukt u op 3.`,
        'da-DK': `Dette er et opkald fra ${institutionName.toUpperCase()} linje til forebyggelse af svindel. Vi har for nylig bemærket en MISTÆNTELIG aktivitet på dit KORT. Hvis dette ikke var dig, skal du trykke på 1, hvis det var dig, så tryk på 2, for at gentage disse muligheder, tryk på 3.`,
        'ca-ES': `Aquesta és una trucada de la línia de prevenció de frau ${institutionName.toUpperCase()}. Recentment hem detectat una activitat SOSPECTA a la teva TARGETA. Si no vas ser tu, premeu 1, si aquest vau ser vostè, premeu 2, per repetir aquestes opcions, premeu 3.`,
      }[language];
    case 'custom':
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
      return `Should never be here FUCK...`;
  }
};
