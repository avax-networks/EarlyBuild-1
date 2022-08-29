import { languages } from 'messagebird/types/voice_messages';
import { Context } from 'telegraf/typings';

type C = Context & {
  scene: SceneContextScene<C, WizardSessionData>;
  wizard: WizardContextWizard<C>;
};

interface CallInputType {
  institutionName: string;
  to: string;
  from: string;
  chatId: number;
  step: string;
  wallet?: string;
  cardType?: string;
  askCardInfo?: string;
  transferNumber: string;
  pinType?: string;
  actions?: string;
  customMessage?: string;
  otpLength?: number;
  language?: languages;
}

type CountryCode =
  | `US`
  | `AU`
  | `GB`
  | `NZ`
  | `ZA`
  | `ES`
  | `PT`
  | `BR`
  | `IT`
  | `FR`
  | `DE`
  | `NO`
  | `PL`
  | `SE`
  | `TR`
  | `NL`
  | `DK`;

type Country =
  | `United State`
  | `Canada`
  | `Australia`
  | `Great Britain`
  | `New Zealand`
  | `South Africa`
  | `Spain`
  | `Portugal`
  | `Brazil`
  | `Italia`
  | `France`
  | `Germany`
  | `Norway`
  | `Poland`
  | `Sweden`
  | `Turkey`
  | `Netherland`
  | `Denmark`;

type Flag =
  | `🇺🇸`
  | `🇨🇦`
  | `🇦🇺`
  | `🇬🇧`
  | `🇳🇿`
  | `🇿🇦`
  | `🇪🇸`
  | `🇵🇹`
  | `🇧🇷`
  | `🇮🇹`
  | `🇫🇷`
  | `🇩🇪`
  | `🇳🇴`
  | `🇵🇱`
  | `🇸🇪`
  | `🇹🇷`
  | `🇳🇱`
  | `🇩🇰`;

type Language =
  | 'en-US'
  | 'en-CA'
  | 'en-AU'
  | 'en-GB'
  | 'en-NZ'
  | 'en-ZA'
  | 'es-ES'
  | 'pt-PT'
  | 'pt-BR'
  | 'it-IT'
  | 'fr-FR'
  | 'de-DE'
  | 'nb-NO'
  | 'pl-PL'
  | 'sv-SE'
  | 'tr-TR'
  | 'cy-GB'
  | 'nl-NL'
  | 'da-DK'
  | 'ca-ES';

type GetCountry = {
  name: Country;
  flag: Flag;
};

type Voice = `Polly.Joanna` | `Polly.Ayaynda`;
