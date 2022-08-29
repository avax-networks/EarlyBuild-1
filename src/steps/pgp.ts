import { Middleware } from 'telegraf';
import { C } from '../types';
import { steps } from '.';

export const pgp: Array<Middleware<C>> = steps('pgp');
