import { Step } from './recommendations';

export interface LocalizedSteps {
  [stepKey: string]: {
    action: string;
  };
}

const localizations = new Map<string, LocalizedSteps>();

export function registerLocalization(locale: string, steps: LocalizedSteps) {
  localizations.set(locale, steps);
}

export function getLocalizedAction(locale: string, original: Step): string {
  if (!localizations.has(locale)) {
    return original.action;
  }
  const step = localizations.get(locale)[original.stepKey];
  return step ? step.action : original.action;
}
