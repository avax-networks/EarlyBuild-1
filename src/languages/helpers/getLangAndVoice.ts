import axios from 'axios';
import { Language, GetCountry, Voice } from '../../types';
import { sanitizeNumber } from '../../utils/sanitizeNumber';
import { getCountry } from './getCountry';
import { getLanguage } from './getLanguage';
import { getVoice } from './getVoice';

export const getLangAndVoice = async (
  number: string,
): Promise<{
  language: Language | undefined;
  voice: Voice | undefined;
  country: GetCountry;
  to: string;
}> => {
  const {
    data: { data: res },
  } = await axios.get(
    `https://api.telnyx.com/anonymous/v2/number_lookup/${sanitizeNumber(
      number,
    )}`,
  );

  const language = getLanguage(res[`country_code`]);
  const voice = getVoice(language as Language);
  const country = getCountry(res[`country_code`]);
  const to = sanitizeNumber(res[`phone_number`]);

  return {
    language,
    voice,
    country,
    to,
  };
};
