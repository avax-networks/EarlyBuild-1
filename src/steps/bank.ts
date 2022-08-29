import { Middleware } from 'telegraf';
import { C } from '../types';
import { steps } from '.';

export const bank: Array<Middleware<C>> = steps('bank');
