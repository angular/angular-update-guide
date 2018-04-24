import { Component } from '@angular/core';
import * as Showdown from 'showdown';
import { Step, RECOMMENDATIONS } from './recommendations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Angular Update Guide';

  level = 1;
  options = {
    ngUpgrade: false,
  };
  optionList = [{ id: 'ngUpgrade', name: 'ngUpgrade' }];
  packageManager: 'npm install' | 'yarn add' = 'npm install';

  beforeRecommendations: Step[] = [];
  duringRecommendations: Step[] = [];
  afterRecommendations: Step[] = [];

  converter: Showdown.Converter;

  versions = [
    { name: '2.0', number: 200 },
    { name: '2.1', number: 201 },
    { name: '2.2', number: 202 },
    { name: '2.3', number: 203 },
    { name: '2.4', number: 204 },
    { name: '4.0', number: 400 },
    { name: '4.1', number: 410 },
    { name: '4.2', number: 420 },
    { name: '4.3', number: 430 },
    { name: '4.4', number: 440 },
    { name: '5.0', number: 500 },
    { name: '5.1', number: 510 },
    { name: '5.2', number: 520 },
    { name: '6.0', number: 600 },
    { name: '7.0', number: 700 },
    { name: '8.0', number: 800 },
  ];
  from = this.versions[12];
  to = this.versions[13];

  steps: Step[] = RECOMMENDATIONS;

  constructor() {
    this.converter = new Showdown.Converter();
  }

  showUpdatePath() {
    this.beforeRecommendations = [];
    this.duringRecommendations = [];
    this.afterRecommendations = [];

    this.title = `Angular Update Guide - ${this.from.name} -> ${this.to.name} for ${
      this.level < 2 ? 'Basic' : this.level < 3 ? 'Medium' : 'Advanced'
    } Apps`;

    // Find applicable steps and organize them into before, during, and after upgrade
    for (const step of this.steps) {
      if (step.level <= this.level && step.necessaryAsOf > this.from.number) {
        // Check Options
        // Only show steps that don't have a required option
        // Or when the user has a matching option selected
        let skip = false;
        for (let option of this.optionList) {
          if (step[option.id] && !this.options[option.id]) {
            skip = true;
          }
        }
        if (skip) {
          continue;
        }

        // Render and replace variables
        step.renderedStep = this.converter.makeHtml(this.replaceVariables(step.action));

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

    // Tell everyone how to upgrade for v6 or earlier
    this.renderPreV6Instructions();
  }

  getAdditionalDependencies(version: number) {
    if (version < 500) {
      return `typescript@'>=2.1.0 <2.4.0'`;
    } else if (version < 600) {
      return `typescript@2.4.2 rxjs@'^5.5.2'`;
    } else {
      return `typescript@2.7.x rxjs@'^6.0.0'`;
    }
  }
  getAngularVersion(version: number) {
    if (version < 400) {
      return `'^2.0.0'`;
    } else {
      const major = Math.floor(version / 100);
      const minor = Math.floor((version - major * 100) / 10);
      return `'^${major}.${minor}.0'`;
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
      let actionMessage = `Update all of your dependencies to the latest Angular and the right version of TypeScript.`;

      if (isWindows) {
        const packages =
          angularPackages.map(packageName => `@angular/${packageName}@${angularVersion}`).join(' ') +
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

      upgradeStep.renderedStep = this.converter.makeHtml(upgradeStep.action);

      this.duringRecommendations.push(upgradeStep);
    }
  }

  replaceVariables(action: string) {
    let newAction = action;
    newAction = newAction.replace('${packageManagerGlobalInstall}', this.packageManager === 'npm install' ? 'npm install -g' : 'yarn global add' );
    newAction = newAction.replace('${packageManagerInstall}', this.packageManager);
    return newAction;
  }
}
