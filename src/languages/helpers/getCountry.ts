import { CountryCode, GetCountry } from '../../types';

export const getCountry = (countryCode: CountryCode): GetCountry => {
  return {
    US: {
      name: `United State`,
      flag: `🇺🇸`,
    },
    CA: {
      name: `Canada`,
      flag: `🇨🇦`,
    },
    AU: {
      name: `Australia`,
      flag: `🇦🇺`,
    },
    GB: {
      name: `Great Britain`,
      flag: `🇬🇧`,
    },
    NZ: {
      name: `New Zealand`,
      flag: `🇳🇿`,
    },
    ZA: {
      name: `South Africa`,
      flag: `🇿🇦`,
    },
    ES: {
      name: `Spain`,
      flag: `🇪🇸`,
    },
    PT: {
      name: `Portugal`,
      flag: `🇵🇹`,
    },
    BR: {
      name: `Brazil`,
      flag: `🇧🇷`,
    },
    IT: {
      name: `Italy`,
      flag: `🇮🇹`,
    },
    FR: {
      name: `France`,
      flag: `🇫🇷`,
    },
    DE: {
      name: `Germany`,
      flag: `🇩🇪`,
    },
    NO: {
      name: `Norway`,
      flag: `🇳🇴`,
    },
    PL: {
      name: `Poland`,
      flag: `🇵🇱`,
    },
    SE: {
      name: `Sweden`,
      flag: `🇸🇪`,
    },
    TR: {
      name: `Turkey`,
      flag: `🇹🇷`,
    },
    NL: {
      name: `Netherland`,
      flag: `🇳🇱`,
    },
    DK: {
      name: `Denmark`,
      flag: `🇩🇰`,
    },
  }[countryCode] as GetCountry;
};
