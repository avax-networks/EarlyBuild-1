export const getMembership = (
  price: string,
): {
  duration: number;
  unit: 'month' | 'day';
  type: '1 Day' | '3 Day' | '7 Day' | '30 Day' | 'Lifetime';
} => {
  switch (price) {
    case process.env.OTP_PRICE_NORMAL:
      return {
        duration: 1,
        unit: 'day',
        type: '1 Day',
      };
    case process.env.OTP_PRICE_SILVER:
      return {
        duration: 3,
        unit: 'day',
        type: '3 Day',
      };
    case process.env.OTP_PRICE_GOLD:
      return {
        duration: 1,
        unit: 'month',
        type: '30 Day',
      };
    case process.env.OTP_PRICE_PLATINUM:
      return {
        duration: 9999,
        unit: 'month',
        type: 'Lifetime',
      };

    default:
      return {
        duration: 1,
        unit: 'day',
        type: '1 Day',
      };
  }
};
