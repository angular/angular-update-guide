import { Step } from './recommendations';

export interface LocalizedSteps {
  [step: string]: {
    action: string;
  };
}

export const localizations = new Map<string, LocalizedSteps>();

export function registerLocalization(locale: string, steps: LocalizedSteps) {
  localizations.set(locale, steps);
}

export function getLocalizedAction(locale: string, original: Step): string {
  if (!localizations.has(locale)) {
    return original.action;
  }
  const step = localizations.get(locale)[original.step];
  return step ? step.action : original.action;
}
