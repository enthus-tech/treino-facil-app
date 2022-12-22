import { I18n } from 'i18n-js';
import enUS from './en-US';
import esES from './es-ES';
import ptBR from './pt-BR';

const translations = {
  ['en-US']: enUS,
  ['es-ES']: esES,
  ['pt-BR']: ptBR,
}

export const t = (data: string) => {
  return i18n.t(data)
}

export const i18n = new I18n(translations);
