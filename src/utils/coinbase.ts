import { Client, resources, CreateCharge } from 'coinbase-commerce-node';

Client.init(process.env.COINBASE_API_KEY as string);

const { Charge } = resources;

export const createCharge = async (
  name: string,
  description: string,
  amount: string,
  username: string,
  chatId: number,
  reason: string,
): Promise<resources.Charge> => {
  const chargeData: CreateCharge = {
    name,
    description,
    local_price: {
      amount,
      currency: 'USD',
    },
    pricing_type: 'fixed_price',
    metadata: {
      username,
      chatId,
      reason,
    },
  };

  const charge: resources.Charge = await Charge.create(chargeData);

  return charge;
};

export const retrieveCharge = async (
  chargeId: string,
): Promise<resources.Charge> => {
  const charge = await Charge.retrieve(chargeId);

  return charge;
};
