import { Component, HostListener, OnInit } from '@angular/core';
import snarkdown from 'snarkdown';
import { Step, RECOMMENDATIONS } from './recommendations';
import { Location } from '@angular/common';
import { AnalyticsService } from './analytics.service';
import { getLocalizedAction, currentLocale } from './localization';
import { I18nPipe } from './i18n.pipe';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [I18nPipe]
})
export class AppComponent implements OnInit {
  title = 'Angular Update Guide';

  level = 1;
  options = {
    ngUpgrade: false,
  };
  optionList = [];
  packageManager: 'npm install' | 'yarn add' = 'npm install';

  beforeRecommendations: Step[] = [];
  duringRecommendations: Step[] = [];
  afterRecommendations: Step[] = [];

  versions = [
    { name: '12.0', number: 1200 },
    { name: '11.0', number: 1100 },
    { name: '10.2', number: 1020 },
    { name: '10.1', number: 1010 },
    { name: '10.0', number: 1000 },
    { name: '9.1', number: 910 },
    { name: '9.0', number: 900 },
    { name: '8.2', number: 820 },
    { name: '8.1', number: 810 },
    { name: '8.0', number: 800 },
    { name: '7.2', number: 720 },
    { name: '7.1', number: 710 },
    { name: '7.0', number: 700 },
    { name: '6.1', number: 610 },
    { name: '6.0', number: 600 },
    { name: '5.2', number: 520 },
    { name: '5.1', number: 510 },
    { name: '5.0', number: 500 },
    { name: '4.4', number: 440 },
    { name: '4.3', number: 430 },
    { name: '4.2', number: 420 },
    { name: '4.1', number: 410 },
    { name: '4.0', number: 400 },
    { name: '2.4', number: 204 },
    { name: '2.3', number: 203 },
    { name: '2.2', number: 202 },
    { name: '2.1', number: 201 },
    { name: '2.0', number: 200 },
  ];
  from = this.versions.find((version) => version.name === '10.0');
  to = this.versions.find((version) => version.name === '11.0');
  futureVersion = 1200
  /**
   * Only save the locale in the URL if it was already there, or the user changed it
   */
  saveLocale = false;

  steps: Step[] = RECOMMENDATIONS;

  constructor(
    public location: Location,
    public track: AnalyticsService,
    public i18Service: I18nPipe,
    private clipboard: Clipboard
  ) {

    const searchParams = new URLSearchParams(window.location.search);
    // Detect settings in URL
    this.level = parseInt(searchParams.get('l'), 10) || this.level;
    currentLocale.locale = searchParams.get('locale') || navigator.language;
    if (searchParams.get('locale')) {
      this.saveLocale = true;
    }
    const versions = searchParams.get('v');

    // Detect versions of from and to
    if (versions) {
      const [from, to] = versions.split('-');
      this.from = this.versions.find((version) => version.name === from);
      this.to = this.versions.find((version) => version.name === to);
      this.showUpdatePath();
    }
  }

  ngOnInit() {
    this.optionList =  [
      { id: 'ngUpgrade', name: 'ngUpgrade', description: this.i18Service.transform('to combine AngularJS & Angular') },
      { id: 'material', name: 'Angular Material', description: '' },
    ];
  }

  @HostListener('click', ['$event.target'])
  copyCode({tagName, textContent}) {
    if (tagName === 'CODE') {
      this.clipboard.copy(textContent);
    }
  }

  showUpdatePath() {
    this.beforeRecommendations = [];
    this.duringRecommendations = [];
    this.afterRecommendations = [];

    // Refuse to generate recommendations for downgrades
    if (this.to.number < this.from.number) {
      alert('We do not support downgrading versions of Angular.');
      return;
    }

    const labelTitle = this.i18Service.transform('Angular Update Guide');
    const labelBasic = this.i18Service.transform('Basic Apps');
    const labelMedium = this.i18Service.transform('Medium Apps');
    const labelAdvanced = this.i18Service.transform('Advanced Apps');

    this.title =
    `${labelTitle} | ${this.from.name} -> ${this.to.name}
    ${this.i18Service.transform('for')}
    ${
      this.level < 2 ?
        labelBasic : this.level < 3 ?
          labelMedium : labelAdvanced
    }`;

    // Find applicable steps and organize them into before, during, and after upgrade
    for (const step of this.steps) {
      if (step.level <= this.level && step.necessaryAsOf > this.from.number) {
        // Check Options
        // Only show steps that don't have a required option
        // Or when the user has a matching option selected
        let skip = false;
        for (const option of this.optionList) {
          if (step[option.id] && !this.options[option.id]) {
            skip = true;
          }
        }
        if (skip) {
          continue;
        }

        // Render and replace variables
        step.renderedStep = snarkdown(this.replaceVariables(getLocalizedAction(currentLocale.locale, step)));

        // If you could do it before now, but didn't have to finish it before now
        if (step.possibleIn <= this.from.number && step.necessaryAsOf >= this.from.number) {
          this.beforeRecommendations.push(step);
          // If you couldn't do it before now, and you must do it now
        } else if (step.possibleIn > this.from.number && step.necessaryAsOf <= this.to.number) {
          this.duringRecommendations.push(step);
        } else if (step.possibleIn <= this.to.number) {
          this.afterRecommendations.push(step);
        } else {
        }
      }
    }

    // Update the URL so users can link to this transition
    const searchParams = new URLSearchParams();
    if (currentLocale.locale && this.saveLocale) {
      searchParams.set('locale', currentLocale.locale);
    }
    if (this.level >= 2) {
      searchParams.set('l', `${this.level}`);
    }
    searchParams.set('v', `${this.from.name}-${this.to.name}`);
    this.location.replaceState('', searchParams.toString());

    // Tell everyone how to upgrade for v6 or earlier
    this.renderPreV6Instructions();
  }

  getAdditionalDependencies(version: number) {
    if (version < 500) {
      return `typescript@'>=2.1.0 <2.4.0'`;
    } else if (version < 600) {
      return `typescript@2.4.2 rxjs@^5.5.2`;
    } else {
      return `typescript@2.7.x rxjs@^6.0.0`;
    }
  }
  getAngularVersion(version: number) {
    if (version < 400) {
      return `'^2.0.0'`;
    } else {
      const major = Math.floor(version / 100);
      const minor = Math.floor((version - major * 100) / 10);
      return `^${major}.${minor}.0`;
    }
  }

  renderPreV6Instructions() {
    let upgradeStep;
    const isWindows = /win/i.test(navigator.platform);
    const additionalDeps = this.getAdditionalDependencies(this.to.number);
    const angularVersion = this.getAngularVersion(this.to.number);
    const angularPackages = [
      'animations',
      'common',
      'compiler',
      'compiler-cli',
      'core',
      'forms',
      'http',
      'platform-browser',
      'platform-browser-dynamic',
      'platform-server',
      'router',
    ];

    // Provide npm/yarn instructions for versions before 6
    if (this.to.number < 600) {
      const actionMessage = `Update all of your dependencies to the latest Angular and the right version of TypeScript.`;

      if (isWindows) {
        const packages =
          angularPackages.map((packageName) => `@angular/${packageName}@${angularVersion}`).join(' ') +
          ' ' +
          additionalDeps;

        upgradeStep = {
          step: 'General Update',
          action: `${actionMessage}
          If you are using Windows, you can use:

\`${this.packageManager} ${packages}\``,
        };
      } else {
        const packages = `@angular/{${angularPackages.join(',')}}@${angularVersion} ${additionalDeps}`;
        upgradeStep = {
          step: 'General update',
          action: `${actionMessage}
          If you are using Linux/Mac, you can use:

\`${this.packageManager} ${packages}\``,
        };
      }

      // Npm installs typescript wrong in v5, let's manually specify
      // https://github.com/npm/npm/issues/16813
      if (this.packageManager === 'npm install' && this.to.number === 500) {
        upgradeStep.action += `

\`npm install typescript@2.4.2 --save-exact\``;
      }

      upgradeStep.renderedStep = snarkdown(upgradeStep.action);

      this.duringRecommendations.push(upgradeStep);
    }
  }

  replaceVariables(action: string) {
    let newAction = action;
    newAction = newAction.replace(
      '${packageManagerGlobalInstall}',
      this.packageManager === 'npm install' ? 'npm install -g' : 'yarn global add'
    );
    newAction = newAction.replace('${packageManagerInstall}', this.packageManager);
    return newAction;
  }

  getVersion(newVersion: string) {
    return this.versions.find((version) => version.name === newVersion);
  }

  log(x) {
    console.log(x);
    return x;
  }

  setLocale(locale: string) {
    currentLocale.locale = locale;
    this.saveLocale = true;
    this.showUpdatePath();
  }
}
