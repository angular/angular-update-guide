import { Pipe, PipeTransform } from '@angular/core';
import { getLocalizedAction, currentLocale } from './localization';

/**
 * Re-use the step translation system for system UI
 */
@Pipe({
  name: 'i18n',
  // @TODO maybe we switch locale to be an observable so we can make this pure?
  pure: false,
})
export class I18nPipe implements PipeTransform {
  transform(value: string): string {
    return getLocalizedAction(currentLocale.locale, { action: value, step: value } as any);
  }
}
