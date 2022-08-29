import { Middleware } from 'telegraf';
import { C } from '../types';
import { steps } from '.';

export const card: Array<Middleware<C>> = steps('card');
