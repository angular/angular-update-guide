export interface Step {
  step: string;
  action: string;
  possibleIn: number;
  necessaryAsOf: number;
  level: number;
  angularCLI?: boolean;
  ngUpgrade?: boolean;
  pwa?: boolean;
  material?: boolean;
  universalHapi?: boolean;
  universalExpress?: boolean;
  renderedStep?: string;
}

export const RECOMMENDATIONS: Step[] = [
  { possibleIn: 200, necessaryAsOf: 400, level: 1, step: 'Extends OnInit', action: 'Ensure you don\'t use `extends OnInit`, or use `extends` with any lifecycle event. Instead use `implements <lifecycle event>.`', },
  { possibleIn: 200, necessaryAsOf: 400, level: 3, step: 'Deep Imports', action: 'Stop using deep imports, these symbols are now marked with ɵ and are not part of our public API.', },
  { possibleIn: 200, necessaryAsOf: 400, level: 3, step: 'invokeElementMethod', action: 'Stop using `Renderer.invokeElementMethod` as this method has been removed. There is not currently a replacement.', },
  { possibleIn: 400, necessaryAsOf: 400, level: 1, step: 'Non Animations Module', action: 'If you use animations in your application, you should import `BrowserAnimationsModule` from `@angular/platform-browser/animations` in your App `NgModule`.', },
  { possibleIn: 400, necessaryAsOf: 400, level: 2, step: 'Native Form Validation', action: 'Angular began adding a `novalidate` attribute to form elements when you include `FormsModule`. To re-enable native forms behaviors, use `ngNoForm` or add `ngNativeValidate`.', },
  { possibleIn: 400, necessaryAsOf: 400, level: 3, step: 'RootRenderer', action: 'Replace `RootRenderer` with `RendererFactoryV2` instead.', },
  { possibleIn: 400, necessaryAsOf: 400, level: 3, ngUpgrade: true, step: 'downgradeInjectable', action: 'The return value of `upgrade/static/downgradeInjectable` has changed.', },
  { possibleIn: 400, necessaryAsOf: 400, level: 3, step: 'Animations Tests', action: 'If you use Animations and tests, add `mods[1].NoopAnimationsModule` to your `TestBed.initTestEnvironment` call.', },
  { possibleIn: 200, necessaryAsOf: 500, level: 3, step: 'DefaultIterableDiffer', action: 'Stop using `DefaultIterableDiffer`, `KeyValueDiffers#factories`, or `IterableDiffers#factories`', },
  { possibleIn: 400, necessaryAsOf: 500, level: 1, step: 'Template Tag', action: 'Rename your `template` tags to `ng-template`', },
  { possibleIn: 400, necessaryAsOf: 500, level: 2, step: 'OpaqueToken', action: 'Replace any `OpaqueToken` with `InjectionToken`.', },
  { possibleIn: 400, necessaryAsOf: 500, level: 3, step: 'DifferFactory', action: 'If you call `DifferFactory.create(...)` remove the `ChangeDetectorRef` argument.', },
  { possibleIn: 400, necessaryAsOf: 500, level: 3, step: 'ErrorHandler Parameter', action: 'Stop passing any arguments to the constructor for ErrorHandler', },
  { possibleIn: 400, necessaryAsOf: 500, level: 3, step: 'ngProbeToken', action: 'If you use ngProbeToken, make sure you import it from @angular/core instead of @angular/platform-browser', },
  { possibleIn: 400, necessaryAsOf: 500, level: 3, step: 'TrackByFn', action: 'If you use TrackByFn, instead use TrackByFunction', },
  { possibleIn: 500, necessaryAsOf: 500, level: 1, step: 'i18n Pipe Change', action: 'If you rely on the date, currency, decimal, or percent pipes, in 5 you will see minor changes to the format. For applications using locales other than en-us you will need to import it and optionally `locale_extended_fr` from `@angular/common/i18n_data/locale_fr` and registerLocaleData(local).', },
  { possibleIn: 500, necessaryAsOf: 500, level: 3, step: 'gendir', action: 'Do not rely on `gendir`, instead look at using `skipTemplateCodeGen`. <a href=https://github.com/angular/angular/issues/19339#issuecomment-332607471" target="_blank">Read More</a>', },
  { possibleIn: 220, necessaryAsOf: 600, level: 1, ngUpgrade: true, step: 'Dynamic ngUpgrade', action: 'Replace `downgradeComponent`, `downgradeInjectable`, `UpgradeComponent`, and `UpgradeModule` imported from `@angular/upgrade`. Instead use the new versions in `@angular/upgrade/static`', },
  { possibleIn: 400, necessaryAsOf: 600, level: 2, step: 'Animations in Core', action: 'If you import any animations services or tools from @angular/core, you should import them from @angular/animations', },
  { possibleIn: 400, necessaryAsOf: 600, level: 3, step: 'ngOutletContext', action: 'Replace `ngOutletContext` with `ngTemplateOutletContext`.', },
  { possibleIn: 400, necessaryAsOf: 600, level: 3, step: 'collectionChangeRecord', action: 'Replace `CollectionChangeRecord` with `IterableChangeRecord`', },
  { possibleIn: 400, necessaryAsOf: 600, level: 3, step: 'Renderer', action: 'Anywhere you use Renderer, now use Renderer2', },
  { possibleIn: 400, necessaryAsOf: 600, level: 3, step: 'Router Query Params', action: 'If you use preserveQueryParams, instead use queryParamsHandling', },
  { possibleIn: 430, necessaryAsOf: 800, level: 1, step: 'Http', action: 'If you use the legacy `HttpModule` and the `Http` service, switch to `HttpClientModule` and the `HttpClient` service. HttpClient simplifies the default ergonomics (you don\'t need to map to JSON anymore) and now supports typed return values and interceptors. Read more on [angular.io](https://angular.io/guide/http).', },
  { possibleIn: 430, necessaryAsOf: 600, level: 3, step: 'DOCUMENT in @angular/platform-browser', action: 'If you use DOCUMENT from @angular/platform-browser, you should start to import this from @angular/common', },
  { possibleIn: 500, necessaryAsOf: 600, level: 3, step: 'ReflectiveInjector', action: 'Anywhere you use ReflectiveInjector, now use StaticInjector', },
  { possibleIn: 500, necessaryAsOf: 550, level: 2, step: 'Whitespace', action: 'Choose a value of `off` for `preserveWhitespaces` in your `tsconfig.json` under the `angularCompilerOptions` key to gain the benefits of this setting, which was set to `off` by default in v6.', },
  { possibleIn: 600, necessaryAsOf: 600, level: 1, step: 'node 8', action: 'Make sure you are using <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 8 or later</a>', },
  { possibleIn: 600, necessaryAsOf: 600, level: 1, step: 'Update to CLI v6', action: 'Update your Angular CLI locally, and migrate the configuration to the <a href="https://github.com/angular/angular-cli/wiki/angular-workspace" target="_blank">new angular.json format</a> by running the following:<br/><br/>`${packageManagerInstall} @angular/cli@6`<br/>`ng update @angular/cli@6`<br/>', },
  { possibleIn: 600, necessaryAsOf: 600, level: 2, step: 'cli v6 scripts', action: 'Update any `scripts` you may have in your `package.json` to use the latest Angular CLI commands. All CLI commands now use two dashes for flags (eg `ng build --prod --source-map`) to be POSIX compliant.', },
  { possibleIn: 600, necessaryAsOf: 600, level: 1, step: 'Update to Angular v6', action: 'Update all of your Angular framework packages to v6, and the correct version of RxJS and TypeScript.<br/><br/>`ng update @angular/core@6`<br/><br/>After the update, TypeScript and RxJS will more accurately flow types across your application, which may expose existing errors in your application\'s typings', },
  { possibleIn: 600, necessaryAsOf: 600, level: 3, step: 'forms v6', action: 'In Angular Forms, `AbstractControl#statusChanges` now emits an event of `PENDING` when you call `AbstractControl#markAsPending`. Ensure that if you are filtering or checking events from `statusChanges` that you account for the new event when calling `markAsPending`.', },
  { possibleIn: 600, necessaryAsOf: 600, level: 3, step: 'animations timing', action: 'If you use totalTime from an `AnimationEvent` within a disabled Zone, it will no longer report a time of 0. To detect if an animation event is reporting a disabled animation then the `event.disabled` property can be used instead.', },
  { possibleIn: 600, necessaryAsOf: 700, level: 3, step: 'ngModel on form control', action: 'Support for using the ngModel input property and ngModelChange event with reactive form directives has been deprecated in v6 and removed in v7.', },
  { possibleIn: 600, necessaryAsOf: 600, level: 2, step: 'ngModelChange order', action: 'ngModelChange is now emitted after the value/validity is updated on its control instead of before to better match expectations. If you rely on the order of these events, you will need to begin tracking the old value in your component.', },
  { possibleIn: 600, necessaryAsOf: 600, level: 1, material: true, step: 'Update Dependencies for v6', action: 'Update Angular Material to the latest version.<br/><br/>`ng update @angular/material`<br/><br/>This will also automatically migrate deprecated APIs.', },
  { possibleIn: 600, necessaryAsOf: 600, level: 2, step: 'strictPropertyInitializer', action: 'If you have TypeScript configured to be strict (if you have set `strict` to `true` in your `tsconfig.json` file), update your `tsconfig.json` to disable `strictPropertyInitialization` or move property initialization from `ngOnInit` to your constructor. You can learn more about this flag on the <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization">TypeScript 2.7 release notes</a>.'},
  { possibleIn: 600, necessaryAsOf: 700, level: 1, step: 'update to RxJS 6', action: 'Remove deprecated RxJS 5 features using <a href="https://github.com/ReactiveX/rxjs-tslint" target="_blank">rxjs-tslint auto update rules</a><br/><br/>For most applications this will mean running the following two commands:<br/><br/>`${packageManagerGlobalInstall} rxjs-tslint`<br/>`rxjs-5-to-6-migrate -p src/tsconfig.app.json`'},
  { possibleIn: 600, necessaryAsOf: 800, level: 2, step: 'remove rxjs-compat', action: 'Once you and all of your dependencies have updated to RxJS 6, remove `rxjs-compat`.'},
  { possibleIn: 610, necessaryAsOf: 800, level: 2, step: 'use files instead of versionedFiles', action: 'If you use the Angular Service worker, migrate any `versionedFiles` to the `files` array. The behavior is the same.'},
  { possibleIn: 700, necessaryAsOf: 700, level: 1, step: 'TypeScript 3.1', action: 'Angular now uses TypeScript 3.1, read more about any potential breaking changes: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html', },
  { possibleIn: 700, necessaryAsOf: 700, level: 1, step: 'Node 10', action: 'Angular has now added support for Node 10: https://nodejs.org/en/blog/release/v10.0.0/', },
  { possibleIn: 700, necessaryAsOf: 700, level: 1, step: 'v7 update', action: 'Update to v7 of the core framework and CLI by running `ng update @angular/cli@7 @angular/core@7` in your terminal.'},
  { possibleIn: 700, necessaryAsOf: 700, level: 1, material: true, step: 'v7 material update', action: 'Update Angular Material to v7 by running `ng update @angular/material@7` in your terminal. You should test your application for sizing and layout changes.'},
  { possibleIn: 700, necessaryAsOf: 700, level: 2, material: true, step: 'v7 material changes', action: 'If you use screenshot tests, you\'ll need to regenerate your screenshot golden files as many minor visual tweaks have landed.'},
  { possibleIn: 700, necessaryAsOf: 800, level: 3, material: true, step: 'v7 material deprecations', action: 'Stop using `matRippleSpeedFactor` and `baseSpeedFactor` for ripples, using Animation config instead.'},
  { possibleIn: 800, necessaryAsOf: 800, level: 1, step: 'v8 update', action: 'Update to version 8 of the core framework and CLI by running `ng update @angular/cli@8 @angular/core@8` in your terminal'},
  { possibleIn: 800, necessaryAsOf: 800, level: 1, step: 'use ::ng-deep instead of /deep/', action: 'Replace `/deep/` with `::ng-deep` in your styles, [read more about angular component styles and ::ng-deep](https://angular.io/guide/component-styles#deprecated-deep--and-ng-deep). `/deep/` and `::ng-deep` both are deprecated but using `::ng-deep` is preferred until the shadow-piercing descendant combinator is [removed from browsers and tools](https://www.chromestatus.com/features/6750456638341120) completely.', },
  { possibleIn: 800, necessaryAsOf: 800, level: 1, step: 'TypeScript 3.4', action: 'Angular now uses TypeScript 3.4, [read more about errors that might arise from improved type checking](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html).', },
  { possibleIn: 800, necessaryAsOf: 800, level: 1, step: 'node 10', action: 'Make sure you are using <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 10 or later</a>.', },
  { possibleIn: 800, necessaryAsOf: 800, level: 1, step: 'Differential Loading', action: 'The CLI\'s build command now automatically creates a modern ES2015 build with minimal polyfills and a compatible ES5 build for older browsers, and loads the appropriate file based on the browser.  You may opt-out of this change by setting your `target` back to `es5` in your `tsconfig.json`. Learn more on [angular.io](https://angular.io/guide/deployment#differential-loading).', },
  { possibleIn: 800, necessaryAsOf: 800, level: 1, step: 'CLI Telemetry', action: 'When using new versions of the CLI, you will be asked if you want to opt-in to share your CLI usage data. You can also add your own Google Analytics account. This lets us make better decisions about which CLI features to prioritize, and measure the impact of our improvements. Learn more on [angular.io](https://angular.io/analytics).', },
  { possibleIn: 800, necessaryAsOf: 800, level: 1, step: 'static query timing', action: 'If you use `ViewChild` or `ContentChild`, we\'re updating the way we resolve these queries to give developers more control. You must now specify that change detection should run before results are set. Example: `@ContentChild(\'foo\', {static: false}) foo !: ElementRef;`. `ng update` will update your queries automatically, but it will err on the side of making your queries `static` for compatibility. Learn more on [angular.io](https://angular.io/guide/static-query-migration).'},
  { possibleIn: 800, necessaryAsOf: 800, level: 1, material: true, step: 'v8 material update', action: 'Update Angular Material to version 8 by running `ng update @angular/material@8` in your terminal.'},
  { possibleIn: 800, necessaryAsOf: 900, level: 1, material: true, step: 'deep imports', action: 'Instead of importing from `@angular/material`, you should import deeply from the specific component. E.g. `@angular/material/button`. `ng update` will do this automatically for you.'},
  { possibleIn: 800, necessaryAsOf: 1000, level: 1, step: 'new loadChildren', action: 'For lazy loaded modules via the router, make sure you are [using dynamic imports](https://angular.io/guide/deprecations#loadchildren-string-syntax). Importing via string is removed in v9. `ng update` should take care of this automatically. Learn more on [angular.io](https://angular.io/guide/deprecations#loadchildren-string-syntax).'},
  { possibleIn: 800, necessaryAsOf: 900, level: 3, step: 'platform deprecated', action: 'We are deprecating support for `@angular/platform-webworker`, as it has been incompatible with the CLI. Running Angular\'s rendering architecture in a web worker did not meet developer needs. You can still use web workers with Angular. Learn more in our [web worker guide](https://v9.angular.io/guide/web-worker). If you have use cases where you need this, let us know at devrel@angular.io!' },
  { possibleIn: 800, necessaryAsOf: 800, level: 3, step: 'node-sass', action: 'We have switched from the native Sass compiler to the JavaScript compiler. To switch back to the native version, install it as a devDependency: `npm install node-sass --save-dev`.' },
  { possibleIn: 800, necessaryAsOf: 800, level: 3, step: 'schematics async', action: 'If you are building your own Schematics, they have previously been *potentially* asynchronous. As of 8.0, all schematics will be asynchronous.' },
  { possibleIn: 900, necessaryAsOf: 900, level: 1, step: 'node 10.13', action: 'Make sure you are using <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 10.13 or later</a>.' },
  { possibleIn: 900, necessaryAsOf: 900, level: 1, step: 'cli v9 latest', action: 'Run `ng update @angular/core@9 @angular/cli@9` in your workspace directory to update to the latest 9.x version of `@angular/core` and `@angular/cli` and commit these changes.' },
  { possibleIn: 900, necessaryAsOf: 900, level: 2, step: 'create commits', action: 'You can optionally pass the `--create-commits` (or `-C`) flag to [ng update](https://angular.io/cli/update) commands to create a git commit per individual migration.' },
  { possibleIn: 900, necessaryAsOf: 900, level: 1, step: 'ng update v9', action: 'Run `ng update @angular/core @angular/cli` which should bring you to version 9 of Angular.' },
  { possibleIn: 900, necessaryAsOf: 900, level: 1, step: 'typescript 3.7', action: 'Your project has now been updated to TypeScript 3.7, read more about new compiler checks and errors that might require you to fix issues in your code in the [TypeScript 3.6](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-6.html) or [TypeScript 3.7](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html) announcements.', },
  { possibleIn: 900, necessaryAsOf: 900, level: 1, material: true, step: 'update @angular/material', action: 'Run `ng update @angular/material`.' },
  { possibleIn: 900, necessaryAsOf: 900, level: 3, step: 'update @nguniversal/hapi-engine', action: 'If you use Angular Universal, run `ng update @nguniversal/hapi-engine` or `ng update @nguniversal/express-engine` depending on the engine you use. This step may require the `--force` flag if any of your third-party dependencies have not updated the Angular version of their peer dependencies.' },
  { possibleIn: 900, necessaryAsOf: 900, level: 1, step: 'dependencies update', action: 'If your project depends on other Angular libraries, we recommend that you consider updating to their latest version. In some cases this update might be required in order to resolve API incompatibilities. Consult `ng update` or `npm outdated` to learn about your outdated libraries.' },
  { possibleIn: 900, necessaryAsOf: 900, level: 1, step: 'ivy update', action: 'During the update to version 9, your project was transformed as necessary via code migrations in order to remove any incompatible or deprecated API calls from your code base. You can now review these changes, and consult the [Updating to version 9 guide](https://v9.angular.io/guide/updating-to-version-9) to learn more about the changes.' },
  { possibleIn: 900, necessaryAsOf: 900, level: 2, step: 'stylesUpdate', action: 'Bound CSS styles and classes previously were applied with a "last change wins" strategy, but now follow a defined precedence. Learn more about [Class and Style bindings](https://v9.angular.io/guide/template-syntax).' },
  { possibleIn: 900, necessaryAsOf: 900, level: 3, step: 'ModuleWithProviders', action: 'If you are a library author and you had a method returning `ModuleWithProviders`  (typically via a method named `forRoot()`), you will need to specify the generic type. Learn more [angular.io](https://v9.angular.io/guide/deprecations#modulewithproviders-type-without-a-generic)' },
  { possibleIn: 800, necessaryAsOf: 900, level: 3, step: 'wtf', action: 'Support for web tracing framework in Angular was deprecated in version 8. You should stop using any of the `wtf*` APIs. To do performance tracing, we recommend using [browser performance tools](https://developers.google.com/web/tools/lighthouse/audits/user-timing).' },
  { possibleIn: 900, necessaryAsOf: 900, level: 2, step: 'ngForm selector', action: 'If you use `ngForm` element selector to create Angular Forms, you should instead use `ng-form`.' },
  { possibleIn: 900, necessaryAsOf: 1000, level: 1, step: 'ngcc postinstall', action: 'If you depend on many Angular libraries you may consider speeding up your build by invoking the `ngcc` (Angular Compatibility Compiler) in an npm `postinstall` script via [small change to your package.json](https://v9.angular.io/guide/ivy#speeding-up-ngcc-compilation).' },
  { possibleIn: 900, necessaryAsOf: 1000, level: 3, step: 'express-universal-server', action: 'If you use Angular Universal with  `@nguniversal/express-engine` or `@nguniversal/hapi-engine`, several backup files will be created. One of them for `server.ts`. If this file defers from the default one, you may need to copy some changes from the `server.ts.bak` to `server.ts` manually.' },
  { possibleIn: 900, necessaryAsOf: 1000, level: 1, step: 'ivy i18n', action: 'Angular 9 introduced a global `$localize()` function that needs to be loaded if you depend on Angular\'s internationalization (i18n). Run `ng add @angular/localize` to add the necessary packages and code modifications. Consult the [$localize Global Import Migration guide](https://v9.angular.io/guide/migration-localize) to learn more about the changes.' },
  { possibleIn: 900, necessaryAsOf: 1000, level: 2, step: 'entryComponents', action: 'If you have specified any `entryComponents` in your NgModules or had any uses of `ANALYZE_FOR_ENTRY_COMPONENTS`, you can remove them. They are no longer required with the Ivy compiler and runtime.' },
  { possibleIn: 900, necessaryAsOf: 1000, level: 2, step: 'testbed-get', action: 'If you use `TestBed.get`, you should instead use `TestBed.inject`. This new method has the same behavior, but is type safe.' },
  { possibleIn: 900, necessaryAsOf: 1000, level: 2, step: '$localize', action: 'If you use [Angular\'s i18n support](http://angular.io/guide/i18n), you will need to begin using `@angular/localize`. Learn more about the [$localize Global Import Migration](https://v9.angular.io/guide/migration-localize).' },


];
