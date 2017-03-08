import { Component } from '@angular/core';

export interface Step {
  step: string;
  possibleIn: number;
  necessaryAsOf: number;
  level: number;
  ngUpgrade?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Upgrade Guide';
  to: number = 400;
  from: number = 200;
  level: number = 1;
  ngUpgrade: boolean;

  beforeRecommendations: Step[] = [];
  duringRecommendations: Step[] = [];
  afterRecommendations: Step[] = [];

  steps: Step[]  = [
    { step: 'Rename template tags to ng-template', possibleIn: 400, necessaryAsOf: 500, level: 1 },
    { step: 'Replace Opaque Tokens with InjectionToken', possibleIn: 400, necessaryAsOf: 500, level: 2 },
    { step: 'Ensure you don\'t use implements OnInit, or any lifecycle event. Instead use `extends <lifecycle event>`', possibleIn: 200, necessaryAsOf: 400, level: 1 },
    { step: 'NPM update to version 4 and the latest typescript using this command: npm install @angular/{animations,common,compiler,compiler-cli,core,forms,http,platform-browser,platform-browser-dynamic,platform-server,router}@next typescript@latest --save --save-exact', possibleIn: 400, necessaryAsOf: 400, level: 1},
    { step: 'If you use animations in your application, add it to your App NgModule.', possibleIn: 400, necessaryAsOf: 400, level: 1 },
    { step: 'RootRenderer cannot be used any more, use RendererFactoryV2 instead. ', possibleIn: 400, necessaryAsOf: 400, level: 3 },
    { step: 'DowngradeInject', possibleIn: 400, necessaryAsOf: 400, level: 3, ngUpgrade: true },
    { step: 'Four newly added APIs in 2.2.0-beta: downgradeComponent, downgradeInjectable, UpgradeComponent, and UpgradeModule are no longer exported by @angular/upgrade. Import these from @angular/upgrade/static instead.', possibleIn: 220, necessaryAsOf: 500, level: 1, ngUpgrade: true},
    { step: 'If you call DifferFactory.create(...) remove the ChangeDetectorRef argument.', possibleIn: 400, necessaryAsOf: 500, level: 3},
    { step: 'Stop using ngOutletContext. Use ngTemplateOutletContext instead.', possibleIn: 400, necessaryAsOf: 600, level: 3},
    { step: 'Update `CollectionChangeRecord` to `IterableChangeRecord`', possibleIn: 400, necessaryAsOf: 600, level: 3},
    { step: 'Stop using DefaultIterableDiffer, KeyValueDiffers#factories, or IterableDiffers#factories', possibleIn: 200, necessaryAsOf: 500, level: 3},


  ];

  showUpgradePath() {
    this.beforeRecommendations = [];
    this.duringRecommendations = [];
    this.afterRecommendations = [];

    for (let step of this.steps) {
      if (step.level <= this.level && (!step.ngUpgrade || this.ngUpgrade) && step.necessaryAsOf > this.from) {
        
        if (step.possibleIn <= this.from) {
          this.beforeRecommendations.push(step);
        } else if (step.possibleIn > this.from && step.necessaryAsOf <= this.to) {
          this.duringRecommendations.push(step);
        } else if (step.possibleIn <= this.to) {
          this.afterRecommendations.push(step);
        } else {
          console.log("ignoring irrelevant step", step);
        }
      }
    }
  }


}
