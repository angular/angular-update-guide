import { Step } from './recommendations';

export interface LocalizedLabels {
  [step: string]: string;
}

export interface LocalizedSteps {
  [step: string]: {
    action: string;
  };
}

export const stepLocalizations = new Map<string, LocalizedSteps>();
export const labelLocalizations = new Map<string, LocalizedLabels>();

export function registerLocalization(locale: string, steps: LocalizedSteps, ui: LocalizedLabels) {
  stepLocalizations.set(locale, steps);
  labelLocalizations.set(locale, ui);
}

export function getLocalizedAction(locale: string, original: Step): string {
  if (locale === 'debug') {
    return '*******';
  }
  if (!stepLocalizations.has(locale)) {
    return original.action;
  }
  const step = stepLocalizations.get(locale)[original.step];
  return step ? step.action : original.action;
}

export function getLocalizedLabel(locale: string, original: string): string {
  if (locale === 'debug') {
    return '*******';
  }
  if (!labelLocalizations.has(locale)) {
    return original;
  }
  const label = labelLocalizations.get(locale)[original];
  return label != null ? label : original;
}

export let currentLocale = { locale: undefined };
