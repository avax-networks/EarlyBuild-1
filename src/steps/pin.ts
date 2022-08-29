import { Middleware } from 'telegraf';
import { C } from '../types';
import { steps } from '.';

export const pin: Array<Middleware<C>> = steps('pin');
