import { Middleware } from 'telegraf';
import { C } from '../types';
import { steps } from '.';

export const account: Array<Middleware<C>> = steps('account');
