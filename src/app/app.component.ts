import { Component } from '@angular/core';
import * as Showdown from 'showdown';


export interface Step {
  step: string;
  possibleIn: number;
  necessaryAsOf: number;
  level: number;
  ngUpgrade?: boolean;
  renderedStep?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Angular Update Guide - Beta';

  level: number = 1;
  ngUpgrade: boolean;

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
    { name: '5.0', number: 500 },
    { name: '6.0', number: 600 },
  ];
  to = this.versions[5];
  from = this.versions[0];


  steps: Step[] = [
    { step: 'Rename your `template` tags to `ng-template`.', possibleIn: 400, necessaryAsOf: 500, level: 1 },
    { step: 'Replace `OpaqueToken`s with `InjectionToken`s.', possibleIn: 400, necessaryAsOf: 500, level: 2 },
    { step: 'Ensure you don\'t use `extends OnInit`, or use `extends` with any lifecycle event. Instead use `implements <lifecycle event>.`', possibleIn: 200, necessaryAsOf: 400, level: 1 },
    { step: 'Update all of your dependencies to version 4 and the latest typescript.\n\nIf you are using Linux/Mac, you can use: `npm install @angular/{animations,common,compiler,compiler-cli,core,forms,http,platform-browser,platform-browser-dynamic,platform-server,router}@4.0.0 typescript@latest --save`', possibleIn: 400, necessaryAsOf: 400, level: 1 },
    { step: 'If you use animations in your application, you should import `BrowserAnimationsModule` from `@angular/platform-browser/animations` in your App `NgModule`.', possibleIn: 400, necessaryAsOf: 400, level: 1 },
    { step: 'Replace `RootRenderer` with `RendererFactoryV2` instead.  ', possibleIn: 400, necessaryAsOf: 400, level: 3 },
    { step: 'The return value of `upgrade/static/downgradeInjectable` has changed.', possibleIn: 400, necessaryAsOf: 400, level: 3, ngUpgrade: true },
    { step: 'Replace `downgradeComponent`, `downgradeInjectable`, `UpgradeComponent`, and `UpgradeModule` imported from `@angular/upgrade`. Instead use the new versions in `@angular/upgrade/static`.', possibleIn: 220, necessaryAsOf: 500, level: 1, ngUpgrade: true },
    { step: 'If you call `DifferFactory.create(...)` remove the `ChangeDetectorRef` argument.', possibleIn: 400, necessaryAsOf: 500, level: 3 },
    { step: 'Replace `ngOutletContext` with `ngTemplateOutletContext`.', possibleIn: 400, necessaryAsOf: 600, level: 3 },
    { step: 'Replace `CollectionChangeRecord` with `IterableChangeRecord`', possibleIn: 400, necessaryAsOf: 600, level: 3 },
    { step: 'Stop using `DefaultIterableDiffer`, `KeyValueDiffers#factories`, or `IterableDiffers#factories`', possibleIn: 200, necessaryAsOf: 500, level: 3 },
    { step: 'Stop using deep imports, these symbols are now marked with ɵ and are not part of our public API.', possibleIn: 200, necessaryAsOf: 400, level: 3 },
    { step: 'Stop using `Renderer.invokeElementMethod` as this method has been removed. There is not currently a replacement.', possibleIn: 200, necessaryAsOf: 400, level: 3 },
    { step: 'Angular began adding a `novalidate` attribute to form elements when you include `FormsModule`. To re-enable native forms behaviors, use `ngNoForm` or add `ngNativeValidate`.', possibleIn: 400, necessaryAsOf: 400, level: 2 },
    { step: 'If you use Animations and tests, add `mods[1].NoopAnimationsModule` to your `TestBed.initTestEnvironment` call.', possibleIn: 400, necessaryAsOf: 400, level: 3 },

  ];

  constructor() {
    this.converter = new Showdown.Converter();

    this.steps.map(item => item.renderedStep = this.converter.makeHtml(item.step));

  }


  showUpdatePath() {
    this.beforeRecommendations = [];
    this.duringRecommendations = [];
    this.afterRecommendations = [];

    this.title = `Angular Update Guide - ${this.from.name} -> ${this.to.name} for ${this.level
      < 2 ? 'Basic' : this.level < 3 ? 'Medium' : 'Advanced'} Apps`;

    for (let step of this.steps) {
      if (step.level <= this.level && (!step.ngUpgrade || this.ngUpgrade) && step.necessaryAsOf > this.from.number) {

        // If you could do it before now, but didn't have to finish it before now
        if (step.possibleIn <= this.from.number && step.necessaryAsOf >= this.from.number) {
          this.beforeRecommendations.push(step);
          // If you couldn't do it before now, and you must do it now 
        } else if (step.possibleIn > this.from.number && step.necessaryAsOf <= this.to.number) {
          this.duringRecommendations.push(step);
        } else if (step.possibleIn <= this.to.number) {
          this.afterRecommendations.push(step);
        } else {
          console.log("ignoring irrelevant step", step);
        }
      }
    }
  }


}
