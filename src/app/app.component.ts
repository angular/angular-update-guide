import { Component } from "@angular/core";
import * as Showdown from "showdown";
import { Step, RECOMMENDATIONS } from "./recommendations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "Angular Update Guide";

  level: number = 1;
  ngUpgrade: boolean;
  material: boolean;
  pwa: boolean;
  packageManager: string = 'npm install';

  beforeRecommendations: Step[] = [];
  duringRecommendations: Step[] = [];
  afterRecommendations: Step[] = [];

  converter: Showdown.Converter;

  versions = [
    { name: "2.0", number: 200 },
    { name: "2.1", number: 201 },
    { name: "2.2", number: 202 },
    { name: "2.3", number: 203 },
    { name: "2.4", number: 204 },
    { name: "4.0", number: 400 },
    { name: "4.1", number: 410 },
    { name: "4.2", number: 420 },
    { name: "4.3", number: 430 },
    { name: "4.4", number: 440 },
    { name: "5.0", number: 500 },
    { name: "6.0", number: 600 },
    { name: "7.0", number: 600 }
  ];
  to = this.versions[10];
  from = this.versions[5];
  steps: Step[] = RECOMMENDATIONS;

  constructor() {
    this.converter = new Showdown.Converter();

    this.steps.map(
      item => (item.renderedStep = this.converter.makeHtml(item.action))
    );
  }

  showUpdatePath() {
    this.beforeRecommendations = [];
    this.duringRecommendations = [];
    this.afterRecommendations = [];

    this.title = `Angular Update Guide - ${this.from.name} -> ${this.to
      .name} for ${this.level < 2
      ? "Basic"
      : this.level < 3 ? "Medium" : "Advanced"} Apps`;

    // Find applicable steps and organize them into before, during, and after upgrade
    for (let step of this.steps) {
      if (
        step.level <= this.level &&
        step.necessaryAsOf > this.from.number &&
        (!step.ngUpgrade || this.ngUpgrade) &&
        (!step.material || this.material) &&
        (!step.pwa || this.pwa)
      ) {
        // If you could do it before now, but didn't have to finish it before now
        if (
          step.possibleIn <= this.from.number &&
          step.necessaryAsOf >= this.from.number
        ) {
          this.beforeRecommendations.push(step);
          // If you couldn't do it before now, and you must do it now
        } else if (
          step.possibleIn > this.from.number &&
          step.necessaryAsOf <= this.to.number
        ) {
          this.duringRecommendations.push(step);
        } else if (step.possibleIn <= this.to.number) {
          this.afterRecommendations.push(step);
        } else {
          console.log("ignoring irrelevant step", step);
        }
      }
    }

    // Tell everyone how to upgrade.
    let upgradeStep;
    const isWindows = /win/i.test(navigator.platform);
    const additionalDeps = this.getAdditionalDependencies(this.to.number);
    const angularVersion = this.getAngularVersion(this.to.number);
    const angularPackages = ['animations','common','compiler','compiler-cli','core','forms','http','platform-browser','platform-browser-dynamic','platform-server','router'];

    const actionMessage = `Update all of your dependencies to the latest Angular and the right version of TypeScript.`

    if (isWindows) {
      const packages = angularPackages.map(packageName => `@angular/${packageName}@${angularVersion}`).join(' ') + ' ' + additionalDeps;
      
      upgradeStep = {
        step: "General Update",
        action:
          `${actionMessage}
          If you are using Windows, you can use: 
          
\`${this.packageManager} ${packages}\``
      };
    } else {
      const packages = `@angular/{${angularPackages.join(',')}}@${angularVersion} ${additionalDeps}`;
      upgradeStep = {
        step: "General update",
        action:
        `${actionMessage}
          If you are using Linux/Mac, you can use:  
          
\`${this.packageManager} ${packages}\``
      };
    }
    upgradeStep.renderedStep = this.converter.makeHtml(upgradeStep.action);

    this.duringRecommendations.push(upgradeStep);
  }

  getAdditionalDependencies(version: number) {
    if (version < 400) {
      return "typescript@'>=2.1.0 <2.4.0'";
    } else {
      return "typescript@2.4.2 rxjs@'^5.5.2'";
    }
  }
  getAngularVersion(version: number) {
    if (version < 400) {
      return `'^2.0.0'`;
    } else if (version < 500) {
      return `'^4.0.0'`;
    } else {
      return `'5.0.0-rc.6'`;
    }
  }
}
