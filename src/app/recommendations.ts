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

export const RECOMMENDATIONS: Step[] = [
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
    //{ step: 'Service Worker', action: 'If you use service workers, update your manifest to the new format. Learn more about upgrading your manifest.', possibleIn: 500, necessaryAsOf: 500, level: 2, pwa: true, },
    { step: 'i18n Pipe Change', action: 'If you rely on the date, currency, decimal, or percent pipes, in 5 you will see minor changes to the format. For applications using locales other than en-us you will need to import it and optionally `locale_extended_fr` from `@angular/common/i18n_data/locale_fr` and registerLocaleData(local).', possibleIn: 500, necessaryAsOf: 500, level: 1, },
    { step: 'Dynamic ngUpgrade', action: 'Replace `downgradeComponent`, `downgradeInjectable`, `UpgradeComponent`, and `UpgradeModule` imported from `@angular/upgrade`. Instead use the new versions in `@angular/upgrade/static`.', possibleIn: 220, necessaryAsOf: 600, level: 1, ngUpgrade: true, },
    { step: 'Animations in Core', action: 'If you import any animations services or tools from @angular/core, you should import them from @angular/animations', possibleIn: 400, necessaryAsOf: 600, level: 2, },
    { step: 'ngOutletContext', action: 'Replace `ngOutletContext` with `ngTemplateOutletContext`.', possibleIn: 400, necessaryAsOf: 600, level: 3, },
    { step: 'collectionChangeRecord', action: 'Replace `CollectionChangeRecord` with `IterableChangeRecord`', possibleIn: 400, necessaryAsOf: 600, level: 3, },
    { step: 'Renderer', action: 'Anywhere you use Renderer, now use Renderer2', possibleIn: 400, necessaryAsOf: 600, level: 3, },
    { step: 'Http', action: 'Switch from `HttpModule` and the `Http` service to `HttpClientModule` and the `HttpClient` service. HttpClient simplifies the default ergonomics (You don\'t need to map to json anymore) and now supports typed return values and interceptors. Read more on [angular.io](https://angular.io/guide/http)', possibleIn: 430, necessaryAsOf: 800, level: 1, },
    { step: 'DOCUMENT in @angular/platform-browser', action: 'If you use DOCUMENT from @angular/platform-browser, you should start to import this from @angular/common', possibleIn: 430, necessaryAsOf: 600, level: 3, },
    { step: 'gendir', action: 'Do not rely on `gendir`, instead look at using `skipTemplateCodeGen`. [Read more](https://github.com/angular/angular/issues/19339#issuecomment-332607471)', possibleIn: 500, necessaryAsOf: 500, level: 3, },
    { step: 'ReflectiveInjector', action: 'Anywhere you use ReflectiveInjector, now use StaticInjector', possibleIn: 500, necessaryAsOf: 600, level: 3, },
    { step: 'i18n ID Changes', action: 'If you are currently using i18n, the IDs will change', possibleIn: 600, necessaryAsOf: 700, level: 2, },
    { step: 'Whitespace', action: 'Choose a value of `off` `preserveWhitespaces` in your `tsconfig.json` to gain the benefits of this setting while the default is still to preserve whitespace.', possibleIn: 500, necessaryAsOf: 600, level: 2, },
    { step: 'RxJS Operators', action: 'For each RxJS Operator you import, you should now `import from \'rxjs/operators\'` and use the `pipe` operator`. [Read more](https://github.com/ReactiveX/rxjs/blob/master/doc/lettable-operators.md)', possibleIn: 500, necessaryAsOf: 800, level: 2, },
    { step: 'Min Max Validators', action: 'If you created a custom form control with min and max input properties, you will need to adapt to the new behavior by renaming them or using the native validators.', possibleIn: 500, necessaryAsOf: 500, level: 3, },
    { step: 'Router Query Params', action: 'If you use preserveQueryParams, instead use queryParamsHandling', possibleIn: 400, necessaryAsOf: 600, level: 3, },
  ];
  