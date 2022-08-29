export const getMembership = (
  price: string,
): {
  duration: number;
  unit: 'month' | 'week';
  type: 'NORMAL' | 'BASIC' | 'GOLD' | 'SILVER' | 'PLATINUM';
} => {
  switch (price) {
    case process.env.OTP_PRICE_NORMAL:
      return {
        duration: 1,
        unit: 'week',
        type: 'NORMAL',
      };
    case process.env.OTP_PRICE_SILVER:
      return {
        duration: 3,
        unit: 'month',
        type: 'SILVER',
      };
    case process.env.OTP_PRICE_GOLD:
      return {
        duration: 6,
        unit: 'month',
        type: 'GOLD',
      };
    case process.env.OTP_PRICE_PLATINUM:
      return {
        duration: 12,
        unit: 'month',
        type: 'PLATINUM',
      };

    default:
      return {
        duration: 1,
        unit: 'week',
        type: 'NORMAL',
      };
  }
};
