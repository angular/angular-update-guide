import { Component } from '@angular/core';
import * as Showdown from 'showdown';


export interface Step {
  step: string;
  action: string;
  possibleIn: number;
  necessaryAsOf: number;
  level: number;
  ngUpgrade?: boolean;
  pwa?: boolean;
  material?: boolean;
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
  material: boolean;
  pwa: boolean;

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
    { name: '6.0', number: 600 },
    { name: '7.0', number: 600 },
  ];
  to = this.versions[10];
  from = this.versions[5];
  steps: Step[] = [
    { step: 'Extends OnInit', action: 'Ensure you don\'t use `extends OnInit`, or use `extends` with any lifecycle event. Instead use `implements <lifecycle event>.`', possibleIn: 200, necessaryAsOf: 400, level: 1, },
    { step: 'Deep Imports', action: 'Stop using deep imports, these symbols are now marked with ɵ and are not part of our public API.', possibleIn: 200, necessaryAsOf: 400, level: 3, },
    { step: 'invokeElementMethod', action: 'Stop using `Renderer.invokeElementMethod` as this method has been removed. There is not currently a replacement.', possibleIn: 200, necessaryAsOf: 400, level: 3, },
    { step: 'Non Animations Module', action: 'If you use animations in your application, you should import `BrowserAnimationsModule` from `@angular/platform-browser/animations` in your App `NgModule`.', possibleIn: 400, necessaryAsOf: 400, level: 1, },
    { step: 'Native Form Validation', action: 'Angular began adding a `novalidate` attribute to form elements when you include `FormsModule`. To re-enable native forms behaviors, use `ngNoForm` or add `ngNativeValidate`.', possibleIn: 400, necessaryAsOf: 400, level: 2, },
    { step: 'RootRenderer', action: 'Replace `RootRenderer` with `RendererFactoryV2` instead.', possibleIn: 400, necessaryAsOf: 400, level: 3, },
    { step: 'downgradeInjectable', action: 'The return value of `upgrade/static/downgradeInjectable` has changed.', possibleIn: 400, necessaryAsOf: 400, level: 3, ngUpgrade: true, },
    { step: 'Animations Tests', action: 'If you use Animations and tests, add `mods[1].NoopAnimationsModule` to your `TestBed.initTestEnvironment` call.', possibleIn: 400, necessaryAsOf: 400, level: 3, },
    { step: 'DefaultIterableDiffer', action: 'Stop using `DefaultIterableDiffer`, `KeyValueDiffers#factories`, or `IterableDiffers#factories`', possibleIn: 200, necessaryAsOf: 500, level: 3, },
    { step: 'Template Tag', action: 'Rename your `template` tags to `ng-template`', possibleIn: 400, necessaryAsOf: 500, level: 1, },
    { step: 'OpaqueToken', action: 'Replace `OpaqueToken`s with `InjectionToken`s.', possibleIn: 400, necessaryAsOf: 500, level: 2, },
    { step: 'DifferFactory', action: 'If you call `DifferFactory.create(...)` remove the `ChangeDetectorRef` argument.', possibleIn: 400, necessaryAsOf: 500, level: 3, },
    { step: 'ErrorHandler Parameter', action: 'Stop passing any arguments to the constructor for ErrorHandler', possibleIn: 400, necessaryAsOf: 500, level: 3, },
    { step: 'ngProbeToken', action: 'If you use ngProbeToken, make sure you import it from @angular/core instead of @angular/platform-browser', possibleIn: 400, necessaryAsOf: 500, level: 3, },
    { step: 'TrackByFn', action: 'If you use TrackByFn, instead use TrackByFunction', possibleIn: 400, necessaryAsOf: 500, level: 3, },
    //{ step: 'Material Design Rename', action: 'For every use of `md` in your use of material, update to `Mat`. We have provided a tool X that does this for you.', possibleIn: 500, necessaryAsOf: 500, level: 1, material: true, },
    //{ step: 'Service Worker', action: 'If you use service workers, update your manifest to the new format. Learn more about upgrading your manifest.', possibleIn: 500, necessaryAsOf: 500, level: 2, pwa: true, },
    { step: 'i18n Pipe Change', action: 'If you rely on the date, currency, decimal, or percent pipes, in 5 you will see minor changes to the format. For applications using locales other than en-us you will need to import it and optionally `locale_extended_fr` from `@angular/common/i18n_data/locale_fr` and registerLocaleData(local).', possibleIn: 500, necessaryAsOf: 500, level: 1, },
    { step: 'Dynamic ngUpgrade', action: 'Replace `downgradeComponent`, `downgradeInjectable`, `UpgradeComponent`, and `UpgradeModule` imported from `@angular/upgrade`. Instead use the new versions in `@angular/upgrade/static`.', possibleIn: 220, necessaryAsOf: 600, level: 1, ngUpgrade: true, },
    { step: 'Animations in Core', action: 'If you import any animations services or tools from @angular/core, you should import them from @angular/animations', possibleIn: 400, necessaryAsOf: 600, level: 2, },
    { step: 'ngOutletContext', action: 'Replace `ngOutletContext` with `ngTemplateOutletContext`.', possibleIn: 400, necessaryAsOf: 600, level: 3, },
    { step: 'collectionChangeRecord', action: 'Replace `CollectionChangeRecord` with `IterableChangeRecord`', possibleIn: 400, necessaryAsOf: 600, level: 3, },
    { step: 'Render', action: 'Anywhere you use Render, now use Render2', possibleIn: 400, necessaryAsOf: 600, level: 3, },
    { step: 'Http', action: 'Switch from `HttpModule` and the `Http` service to `HttpClientModule` and the `HttpClient` service. HttpClient simplifies the default ergonomics (You don\'t need to map to json anymore) and now supports typed return values and interceptors. Read more on [angular.io](https://angular.io/guide/http)', possibleIn: 430, necessaryAsOf: 700, level: 1, },
    { step: 'DOCUMENT in @angular/platform-browser', action: 'If you use DOCUMENT from @angular/platform-browser, you should start to import this from @angular/common', possibleIn: 430, necessaryAsOf: 600, level: 3, },
    //{ step: 'JIT for Development', action: 'Anywhere you use ngc, now use ?', possibleIn: 500, necessaryAsOf: 600, level: 3, },
    { step: 'StaticInjector', action: 'Anywhere you use StaticInjector, now use DynamicInjector', possibleIn: 500, necessaryAsOf: 600, level: 3, },
    { step: 'i18n ID Changes', action: 'If you are currently using i18n, the IDs will change', possibleIn: 600, necessaryAsOf: 700, level: 2, },
    { step: 'Whitespace', action: 'Turn off retainwhitespace', possibleIn: 500, necessaryAsOf: 600, level: 2, },
    { step: 'RxJS Operators', action: 'For each RxJS Operator you import, you should now import `rxjs/operator/blah`, and then apply and compose operators via Observable.compose[operator, operator]', possibleIn: 500, necessaryAsOf: 700, level: 1, },
    { step: 'Min Max Validators', action: 'If you created a custom form control with min and max input properties, you will need to adapt to the new behavior by renaming them or using the native validators.', possibleIn: 500, necessaryAsOf: 500, level: 3, },
    { step: 'Router Query Params', action: 'If you use preserveQueryParams, instead use queryParamsHandling', possibleIn: 400, necessaryAsOf: 600, level: 3, },
  ];

  constructor() {
    this.converter = new Showdown.Converter();

    this.steps.map(item => item.renderedStep = this.converter.makeHtml(item.action));

  }


  showUpdatePath() {
    this.beforeRecommendations = [];
    this.duringRecommendations = [];
    this.afterRecommendations = [];

    this.title = `Angular Update Guide - ${this.from.name} -> ${this.to.name} for ${this.level
      < 2 ? 'Basic' : this.level < 3 ? 'Medium' : 'Advanced'} Apps`;

    // Find applicable steps and organize them into before, during, and after upgrade
    for (let step of this.steps) {

      if (
        step.level <= this.level && step.necessaryAsOf > this.from.number &&
        (!step.ngUpgrade || this.ngUpgrade) &&
        (!step.material || this.material) &&
        (!step.pwa || this.pwa)
      ) {

        // If you could do it before now, but didn't have to finish it before now
        if (step.possibleIn <= this.from.number && step.necessaryAsOf >= this.from.number) {
          this.beforeRecommendations.push(step);
          // If you couldn't do it before now, and you must do it now
        } else if (step.possibleIn > this.from.number && step.necessaryAsOf <= this.to.number) {
          this.duringRecommendations.push(step);
        } else if (step.possibleIn <= this.to.number) {
          this.afterRecommendations.push(step);
        } else {
          console.log('ignoring irrelevant step', step);
        }
      }
    }

    // Tell everyone how to upgrade.
    let upgradeStep;
    const isWindows = /win/i.test(navigator.platform);
    if (isWindows) {
      upgradeStep = { step: 'General Update', action: 'Update all of your dependencies to the latest Angular and the latest TypeScript.\n\nIf you are using Windows, you can use: `npm install @angular/common@latest @angular/compiler@latest @angular/compiler-cli@latest @angular/core@latest @angular/forms@latest @angular/http@latest @angular/platform-browser@latest @angular/platform-browser-dynamic@latest @angular/platform-server@latest @angular/router@latest @angular/animations@latest typescript@latest --save`'};
    } else {
      upgradeStep = { step: 'General update', action: 'Update all of your dependencies to the latest Angular and the latest TypeScript.\n\nIf you are using Linux/Mac, you can use: `npm install @angular/{animations,common,compiler,compiler-cli,core,forms,http,platform-browser,platform-browser-dynamic,platform-server,router}@latest typescript@latest --save`'};
    }
    upgradeStep.renderedStep = this.converter.makeHtml(upgradeStep.action)

    this.duringRecommendations.push(upgradeStep);
  }


}
