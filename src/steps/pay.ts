import { Middleware } from 'telegraf';
import { C } from '../types';
import { steps } from '.';

export const pay: Array<Middleware<C>> = steps('pay');
