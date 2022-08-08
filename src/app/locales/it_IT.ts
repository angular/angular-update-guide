import { LocalizedSteps, registerLocalization, LocalizedLabels } from '../localization';

const uiLabels: LocalizedLabels = {
  Advanced: 'Avanzada',
  'After the Update': `Dopo l'aggiornmento`,
  'Angular Update Guide': `Guida all'aggiornamento di Angular`,
  'Angular Versions': 'Versione di Angular',
  'App Complexity': `Complessità dell'Applicazione`,
  Basic: 'Base',
  'Before Updating': 'Prima di aggiornare',
  'During the Update': `Durante l'aggiornmento`,
  From: 'Dalla',
  'I use': 'Io uso',
  Medium: 'Media',
  'Other Dependencies': 'Altre Dipendenze',
  'Package Manager': 'Gestore pacchetti',
  'Plans for releases after the current major release are not finalized and may change. These recommendations are based on scheduled deprecations.': `I piani per le versioni successive all'attuale versione principale non sono ancora finalizzati e potrebbero cambiare. Questi consigli si basano su ritiri programmati.`,
  'Select the options matching your project:': 'Scegli le opzioni che corrispondono al tuo progetto:',
  'Show all the information we have about the update.': `Mostra tutte le informazioni a nostra disposizione sull'aggiornamento.`,
  'Show me how to update!': 'Mostrami come aggiornare!',
  'Show more specific update information relevant to around 10% of Angular developers.':
    'Mostra informazioni di aggiornamento più specifiche pertinenti a circa il 10% degli sviluppatori Angular.',
  'Show update information relevant to all Angular developers.':
    'Mostra informazioni rilevanti sugli aggiornamenti per tutti gli sviluppatori Angular.',
  // tslint:disable-next-line: quotemark
  "There aren't currently any changes needed before moving between these versions.": `Al momento non sono necessarie modifiche prima di passare da una versione all'altra.`,
  // tslint:disable-next-line: quotemark
  "There aren't currently any changes needed after moving between these versions.": `Al momento non sono necessarie modifiche dopo il passaggio da una versione all'altra.`,
  // tslint:disable-next-line: quotemark
  "There aren't currently any recommendations for moving between these versions.": `Al momento non ci sono consigli per passare da una versione all'altra.`,
  To: 'Alla',
  Warning: 'Avviso',
  'We do not currently support downgrading versions of Angular.': 'Al momento non supportiamo il downgrade a versioni di Angular.',
  'We do not recommend moving across multiple major versions.': 'Sconsigliamo di passare a più versioni principali.',
  npm: 'npm',
  yarn: 'yarn',
  'to combine AngularJS & Angular': 'per combinare AngularJS ed Angular',
  for: 'per',
  'Basic Apps': 'una Applicazione Base',
  'Medium Apps': 'una Applicazione Media',
  'Advanced Apps': 'una Applicazione Avanzada',
};

const steps: LocalizedSteps = {
  'Extends OnInit': {
    action:
      "Assicurati di non utilizzare `extends OnInit` o `extends` con qualsiasi evento del ciclo di vita. Usa al suo posto `implements <lifecycle event>.`",
  },
  'Deep Imports': {
    action:
      "Non usare piú i deep imports, questi simboli sono ora contrassegnati con ɵ e non fanno parte della nostra API pubblica.",
  },
  invokeElementMethod: {
    action:
      "Non usare piú `renderer.invokeelementMethod` poiché questo metodo è stato rimosso. Al momento non c'è un sostituto.",
  },
  'Non Animations Module': {
    action:
      'Se utilizzi le animazioni nella tua applicazione, devi importare `BrowserAnimationsModule` da `@angular/platform-browser/animations` nella tua app `NgModule`.',
  },
  'Native Form Validation': {
    action:
      'Angular ha iniziato ad aggiungere un attributo `novalidate` per gli elementi del formulario quando si include `formsmodule`. Per riattivare i comportamenti dei native forms, utilizzare `ngNoForm` oppure aggiungere `ngNativeValidate`.',
  },
  RootRenderer: {
    action:
      'Sostituisci `RootRenderer` con `RendererFactoryV2`.',
  },
  // downgradeInjectable: {
  //   ngUpgrade: true,
  //   action:
  //     'Il valore di ritorno di `upgrade/static/downgradeInjectable` è cambiato.',
  // },
  'Animations Tests': {
    action:
      'Se usi Animazioni e test, aggiungi `mods[1].NoopAnimationsModule` alla tua chiamata `TestBed.initTestEnvironment`.',
  },
  DefaultIterableDiffer: {
    action:
      'Stop using `DefaultIterableDiffer`, `KeyValueDiffers#factories`, or `IterableDiffers#factories`',
  },
  'Template Tag': {
    action: 'Rinimina it tuoi tag `template` in `ng-template`',
  },

  OpaqueToken: {
    action: 'Sostituisci qualsiasi `OpaqueToken` con `InjectionToken`.',
  },
  DifferFactory: {
    action: "Se chiami `DifferFactory.create(...)` rimuovi l'argomento `ChangeDetectorRef`.",
  },
  'ErrorHandler Parameter': {
    action: 'Smettere di passare qualsiasi argomento al construttore per ErrorHandler',
  },
  ngProbeToken: {
    action: 'Se usi ngProbeToken, assicurati di importarlo da @angular/core anziché da @angular/platform-browser',
  },
  TrackByFn: {
    action: 'Se usi TrackByFn, usa TrackByFunction',
  },
  'i18n Pipe Change': {
    action:
      'Se ti affidi alle pipe di data, currency, decimal o percent, nei 5 casi vedrai piccole modifiche al formato. Per le applicazioni che utilizzano locali diversi da en-us dovrai importarlo e facoltativamente `locale_extended_fr` da `@angular/common/i18n_data/locale_fr` e registerLocaleData(local).',
  },
  gendir: {
    action:
      'Non fare affidamento su `gendir`, invece guarda usando `skipTemplateCodeGen`. <a href=https://github.com/angular/angular/issues/19339#issuecomment-332607471" target="_blank">Ulteriori informazioni</a>',
  },
  'Dynamic ngUpgrade': {
  //   ngUpgrade: true,
    action:
      'Sostituisci `downgradeComponent`, `downgradeInjectable`, `UpgradeComponent` e `UpgradeModule` importati da `@angular/upgrade`. Utilizzare invece le nuove versioni in `@angular/upgrade/static`',
  },
  'Animations in Core': {
    action:
      'Se importi servizi di animazione o strumenti da @angular/core, dovresti importarli da @angular/animations',
  },
  ngOutletContext: {
    action:
      'Sostituisci `ngOutletContext` con `ngTemplateOutletContext`.',
  },
  collectionChangeRecord: {
    action: 'Sostituisci `CollectionChangeRecord` con `IterableChangeRecord`',
  },
  Renderer: {
    action: 'Ovunque utilizzi Renderer, ora usa Renderer2',
  },
  'Router Query Params': {
    action: 'If you use preserveQueryParams, instead use queryParamsHandling',
  },
  Http: {
    action:
      "If you use the legacy `HttpModule` and the `Http` service, switch to `HttpClientModule` and the `HttpClient` service. HttpClient simplifies the default ergonomics (you don't need to map to JSON anymore) and now supports typed return values and interceptors. Read more on [angular.io](https://angular.io/guide/http).",
  },
  'DOCUMENT in @angular/platform-browser': {
    action: 'If you use DOCUMENT from @angular/platform-browser, you should start to import this from @angular/common',
  },
  ReflectiveInjector: {
    action: 'Ovunque utilizzi ReflectiveInjector, ora usa StaticInjector',
  },
  Whitespace: {
    action:
      'Choose a value of `off` for `preserveWhitespaces` in your `tsconfig.json` under the `angularCompilerOptions` key to gain the benefits of this setting, which was set to `off` by default in v6.',
  },
  'node 8': {
    action:
      'Make sure you are using <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 8 or later</a>',
  },

  // START v6
  'Update to CLI v6': {
    // windows: false,
    action:
      'Update your Angular CLI, and migrate the configuration to the <a href="https://github.com/angular/angular-cli/wiki/angular-workspace" target="_blank">new angular.json format</a> by running the following:<br/><br/>`NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@6 update @angular/cli@6`<br/>',
  },
  // 'Update to CLI v6': {
  //   windows: true,
  //    action:
  //     'Update your Angular CLI, and migrate the configuration to the <a href="https://github.com/angular/angular-cli/wiki/angular-workspace" target="_blank">new angular.json format</a> by running the following:<br/><br/>`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@6 update @angular/cli@6 @angular/core@6"`<br/>',
  // },
  'cli v6 scripts': {
    action:
      'Update any `scripts` you may have in your `package.json` to use the latest Angular CLI commands. All CLI commands now use two dashes for flags (eg `ng build --prod --source-map`) to be POSIX compliant.',
  },
  'Update to Angular v6': {
  //   windows: false,
    action:
      "Update all of your Angular framework packages to v6, and the correct version of RxJS and TypeScript.<br/><br/>`NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@6 update @angular/core@6`<br/><br/>After the update, TypeScript and RxJS will more accurately flow types across your application, which may expose existing errors in your application's typings",
  },
  // 'Update to Angular v6': {
  //   windows: true,
  //    action:
  //     'Update all of your Angular framework packages to v6, and the correct version of RxJS and TypeScript.<br/><br/>`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@6 update @angular/cli@6 @angular/core@6"`<br/><br/>After the update, TypeScript and RxJS will more accurately flow types across your application, which may expose existing errors in your application\'s typings',
  // },
  'forms v6': {
    action:
      'In Angular Forms, `AbstractControl#statusChanges` now emits an event of `PENDING` when you call `AbstractControl#markAsPending`. Ensure that if you are filtering or checking events from `statusChanges` that you account for the new event when calling `markAsPending`.',
  },
  'animations timing': {
    action:
      'If you use totalTime from an `AnimationEvent` within a disabled Zone, it will no longer report a time of 0. To detect if an animation event is reporting a disabled animation then the `event.disabled` property can be used instead.',
  },
  'ngModel on form control': {
    action:
      'Support for using the ngModel input property and ngModelChange event with reactive form directives has been deprecated in v6 and removed in v7.',
  },
  'ngModelChange order': {
    action:
      'ngModelChange is now emitted after the value/validity is updated on its control instead of before to better match expectations. If you rely on the order of these events, you will need to begin tracking the old value in your component.',
  },
  // 'Update Dependencies for v6': {
  //   windows: false,
  //   material: true,
  //   action:
  //     'Update Angular Material to the latest version.<br/><br/>`NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@6 update @angular/material@6`<br/><br/>This will also automatically migrate deprecated APIs.',
  // },
  // 'Update Dependencies for v6': {
  //   windows: true,
  //   material: true,
  //    action:
  //     'Update Angular Material to the latest version.<br/><br/>`cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@6 update @angular/material@6"`<br/><br/>This will also automatically migrate deprecated APIs.',
  // },
  strictPropertyInitializer: {
    action:
      'Se TypeScript è configurato per essere strict (se hai impostato `strict` su `true` nel tuo file `tsconfig.json`), aggiorna il tuo `tsconfig.json` per disabilitare `strictPropertyInitialization` o sposta l\'inizializzazione della proprietà da `ngOnInit` al tuo costruttore. Puoi saperne di più su questo flag nella <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization">versione TypeScript 2.7 note</a>.'
  },
  'update to RxJS 6': {
    action:
      'Rimuovere le funzionalità di RxJS 5 obsolete utilizzando le <a href="https://github.com/ReactiveX/rxjs-tslint" target="_blank">regole di aggiornamento automatico rxjs-tslint</a><br/><br/>Per per la maggior parte delle applicazioni ciò significherà eseguire i due comandi seguenti:<br/><br/>`npx rxjs-tslint`<br/>`rxjs-5-to-6-migrate -p src/tsconfig.app.json`'
  },
  'remove rxjs-compat': {
    action:
      'Una volta che tutte le tue dipendenze sono state aggiornate a RxJS 6, rimuovete `rxjs-compat`.'
  },
  'use files instead of versionedFiles': {
    action:
      "Se utilizzi l'Angular Service worker, migra qualsiasi `versionedFiles` nell'array `files`. Il comportamento è lo stesso."
  },
  'TypeScript 3.1': {
    action:
      'Angular ora utilizza TypeScript 3.1, leggi di più su eventuali modifiche potenziali: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html'
  },
  'Node 10': {
    action:
      'Angular ha aggiunto il supporto alla versione 10 di Node: https://nodejs.org/en/blog/release/v10.0.0/',
  },
  // END v6

  // START v7
  // 'v7 update': {
  //   windows: false,
  //   action:
  //     'Update to v7 of the core framework and CLI by running `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@7 update @angular/cli@7 @angular/core@7` in your terminal.',
  // },
  // 'v7 update': {
  //   windows: true,
  //    action:
  //     'Update to v7 of the core framework and CLI by running `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@7 update @angular/cli@7 @angular/core@7"` in your terminal.'
  // },
  // 'v7 material update': {
  //   windows: false,
  //   material: true,
  //   action:
  //     'Update Angular Material to v7 by running `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@7 update @angular/material@7` in your terminal. You should test your application for sizing and layout changes.',
  // },
  // 'v7 material update': {
  //   windows: true,
  //   material: true,
  //    action:
  //     'Update Angular Material to v7 by running `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@7 update @angular/material@7"` in your terminal. You should test your application for sizing and layout changes.'
  // },
  // 'v7 material changes': {
  //   material: true,
  //   action:
  //     "If you use screenshot tests, you'll need to regenerate your screenshot golden files as many minor visual tweaks have landed.",
  // },
  // 'v7 material deprecations': {
  //   material: true,
  //   action:
  //     'Stop using `matRippleSpeedFactor` and `baseSpeedFactor` for ripples, using Animation config instead.',
  // },
  // END v7

  // START v8
  // 'v8 update': {
  //   windows: false,
  //   action:
  //     'Update to version 8 of the core framework and CLI by running `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@8 update @angular/cli@8 @angular/core@8` in your terminal and review and commit the changes.',
  // },
  // 'v8 update': {
  //   windows: true,
  //    action:
  //     'Update to version 8 of the core framework and CLI by running `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@8 update @angular/cli@8 @angular/core@8"` in your terminal and review and commit the changes.'
  // },
  'use ::ng-deep instead of /deep/': {
    action:
      'Sostituisci `/deep/` con `::ng-deep` nei tuoi stili, [leggi di più sugli stili dei componenti angular e ::ng-deep](https://angular.io/guide/component-styles#deprecated-deep--and-ng-dee). `/deep/` e `::ng-deep` sono entrambi deprecati ma si preferisce usare `::ng-deep` finché il combinatore discendente (shadow-piercing) non viene [rimosso da browser e strumenti](https://www.chromestatus.com/features/6750456638341120) completamente.'
  },
  'TypeScript 3.4': {
    action:
      'Angular ora utilizza TypeScript 3.4, [leggi di piú sugli errori che potrebbero derivare da un migliore controllo del tipo](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html).',
  },
  'node 10': {
    action:
      'Make sure you are using <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 10 or later</a>.',
  },
  'Differential Loading': {
    action:
      "The CLI's build command now automatically creates a modern ES2015 build with minimal polyfills and a compatible ES5 build for older browsers, and loads the appropriate file based on the browser.  You may opt-out of this change by setting your `target` back to `es5` in your `tsconfig.json`. Learn more on [angular.io](https://angular.io/guide/deployment#differential-loading).",
  },
  'CLI Telemetry': {
    action:
      'When using new versions of the CLI, you will be asked if you want to opt-in to share your CLI usage data. You can also add your own Google Analytics account. This lets us make better decisions about which CLI features to prioritize, and measure the impact of our improvements. Learn more on [angular.io](https://angular.io/analytics).',
  },
  'static query timing': {
    action:
      "If you use `ViewChild` or `ContentChild`, we're updating the way we resolve these queries to give developers more control. You must now specify that change detection should run before results are set. Example: `@ContentChild('foo', {static: false}) foo !: ElementRef;`. `ng update` will update your queries automatically, but it will err on the side of making your queries `static` for compatibility. Learn more on [angular.io](https://angular.io/guide/static-query-migration).",
  },
  // 'v8 material update': {
  //   windows: false,
  //   material: true,
  //   action:
  //     'Update Angular Material to version 8 by running `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@8 update @angular/material@8` in your terminal.',
  // },
  // 'v8 material update': {
  //   windows: true,
  //   material: true,
  //    action:
  //     'Update Angular Material to version 8 by running `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@8 update @angular/material@8"` in your terminal.'
  // },
  // 'deep imports': {
  //   material: true,
  //   action:
  //     'Instead of importing from `@angular/material`, you should import deeply from the specific component. E.g. `@angular/material/button`. `ng update` will do this automatically for you.',
  // },
  'new loadChildren': {
    action:
      "Per i moduli caricati in modo lento tramite il router, assicurati di [utilizzare le importazioni dinamiche](https://angular.io/guide/deprecations#loadchildren-string-syntax). L'importazione tramite stringa è stata rimossa nella v9. `ng update` dovrebbe occuparsene automaticamente. Scopri di più su [angular.io](https://angular.io/guide/deprecations#loadchildren-string-syntax)."
  },
  'platform deprecated': {
    action:
      "Stiamo ritirando il supporto per `@angular/platform-webworker`, in quanto incompatibile con la CLI. L'esecuzione dell'architettura di rendering di Angular in un web worker non ha soddisfatto le esigenze degli sviluppatori. È ancora possibile utilizzare i web worker con Angular. Scopri di più nella nostra [guida per i web worker](https://v9.angular.io/guide/web-worker). Se hai casi d'uso in cui ne hai bisogno, faccelo sapere all'indirizzo devrel@angular.io!"
  },
  'node-sass': {
    action:
      'Siamo passati dal compilatore Sass nativo al compilatore JavaScript. Per tornare alla versione nativa, installalo come devDependency: `npm install node-sass --save-dev`.'
  },
  'schematics async': {
    action:
      'Se stai creando i tuoi schemi, in precedenza erano *potenzialmente* asincroni. A partire dalla versione 8.0, tutti gli schemi saranno asincroni.'
  },
  'node 10.13': {
    action:
      'Assicurati di utilizzare una versione di <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 10.13 o successiva</a >.',
  },
  'cli v8 latest': {
  //   windows: false,
    action:
      "Esegui `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@8 update @angular/core@8 @angular/cli@8` nella directory del tuo spazio di lavoro per aggiornare all'ultima versione 8.x di `@angular/core` e `@angular/cli` e confermare questi cambiamenti."
    },
  // 'cli v8 latest': {
  //    windows: true,
  //    action:
  //     'Esegui `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@8 update @angular/cli@8 @angular/core@8"` nella directory del tuo spazio di lavoro per aggiornare all\'ultima versione 8.x di `@angular/core` e `@angular/cli` e confermare questi cambiamenti.'
  // },
  'create commits': {
    action:
      'Puoi opzionalmente passare il flag `--create-commits` (o `-C`) ai comandi [ng update](https://angular.io/cli/update) per creare un commit git per migrazione individuale.',
    },
  // END v8

  // START v9
  'ng update v9': {
    // windows: false,
    action:
      'Esegui `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@9 update @angular/core@9 @angular/cli@9` che ti dovrebbe portare alla versione 9 di Angular.'
  },
  // 'ng update v9': {
  //   windows: true,
  //    action:
  //     'Esegui `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @angular/cli@9 @angular/core@9"` che ti dovrebbe portare alla versione 9 di Angular.'
  // },
  'typescript 3.8': {
    action:
      'Il tuo progetto è stato ora aggiornato a TypeScript 3.8, leggi di più sui nuovi controlli ed errori del compilatore che potrebbero richiedere la risoluzione di problemi nel codice in [TypeScript 3.7](https://www.typescriptlang.org/docs/handbook/release -notes/typescript-3-7.html) o annunci [TypeScript 3.8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html).'
  },
  // 'update @angular/material': {
  //   windows: false,
  //   material: true,
  //   action:
  //     'Esegui `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@9 update @angular/material@9`.',
  // },
  // 'update @angular/material': {
  //   windows: true,
  //   material: true,
  //    action:
  //     'Esegui `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @angular/material@9"`.'
  // },
  // 'update @nguniversal/hapi-engine': {
  //   windows: false,
  //   action:
  //     'If you use Angular Universal, run `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@9 update @nguniversal/hapi-engine@9` or `NG_DISABLE_VERSION_CHECK=1 npx @angular/cli@9 update @nguniversal/express-engine@9` depending on the engine you use. This step may require the `--force` flag if any of your third-party dependencies have not updated the Angular version of their peer dependencies.',
  // },
  // 'update @nguniversal/hapi-engine': {
  //   windows: true,
  //    action:
  //     'If you use Angular Universal, run `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @nguniversal/hapi-engine@9"` or `cmd /C "set "NG_DISABLE_VERSION_CHECK=1" && npx @angular/cli@9 update @nguniversal/express-engine@9"` depending on the engine you use. This step may require the `--force` flag if any of your third-party dependencies have not updated the Angular version of their peer dependencies.'
  // },
  'dependencies update': {
    action:
      "Se il tuo progetto dipende da altre librerie Angular, ti consigliamo di prendere in considerazione l'aggiornamento alla loro versione più recente. In alcuni casi questo aggiornamento potrebbe essere necessario per risolvere le incompatibilità delle API. Consulta `ng update` o `npm outdated` per informazioni sulle tue librerie obsolete."
  },
  'ivy update': {
    action:
      "Durante l'aggiornamento alla versione 9, il tuo progetto è stato trasformato, se necessario, tramite migrazioni di codice al fine di rimuovere eventuali chiamate API incompatibili o obsolete dalla base di codice. Ora puoi rivedere queste modifiche e consultare la [Guida all'aggiornamento alla versione 9](https://v9.angular.io/guide/updating-to-version-9) per saperne di più sulle modifiche."
  },
  stylesUpdate: {
    action:
      'Gli stili e le classi CSS vincolati in precedenza erano applicati con una strategia "last change wins" (vince l\'ultimo cambiamento), ma ora seguono una precedenza definita. Scopri di più su [Styling Precedence](https://angular.io/guide/attribute-binding#styling-precedence)'
  },
  ModuleWithProviders: {
    action:
      'Se sei un autore di una libreria e hai un metodo che restituisce `ModuleWithProviders` (tipicamente tramite un metodo chiamato forRoot()`), dovrai specificare il tipo generico. Scopri di più [angular.io](https://v9.angular.io/guide/deprecations#modulewithproviders-type- without-a-generic)'
  },
  wtf: {
    action:
      'Il supporto per il framework di tracciamento web in Angular è stato deprecato nella versione 8. Dovresti smettere di usare le API `wtf*`. Per eseguire il tracciamento delle prestazioni, ti consigliamo di utilizzare [strumenti di prestazioni del browser](https://developers.google.com/web/tools/lighthouse/audits/user-timing).'
  },
  es5browser: {
    action:
      "Rimuovi qualsiasi flag `es5BrowserSupport` nel tuo `angular.json` e imposta il tuo `target` su `es2015` nel tuo `tsconfig.json`. Angular ora utilizza l'elenco dei browser per determinare se è necessaria una build ES5. `ng update` ti migra automaticamente."
  },
  'ngForm selector': {
    action:
      'Se utilizzi il selettore di elementi `ngForm` per creare moduli Angular, dovresti invece usare `ng-form`.'
  },
  'typings compilation': {
    action:
      "Abbiamo aggiornato `tsconfig.app.json` per limitare i file compilati. Se fai affidamento sull'inclusione di altri file nella compilazione, come un file `typings.d.ts`, devi aggiungerlo manualmente alla compilation."
  },
  debug: {
    action:
      'Con Angular 9 Ivy è ora il motore di rendering predefinito, per eventuali problemi di compatibilità che potrebbero sorgere, leggi la [Guida alla compatibilità di Ivy](https://v9.angular.io/guide/ivy-compatibility).'
  },
  'express-universal-server': {
    action:
      'Se utilizzi Angular Universal con `@nguniversal/express-engine` o `@nguniversal/hapi-engine`, verranno creati diversi file di backup. Uno di questi per `server.ts`. Se questo file differisce da quello predefinito, potrebbe essere necessario copiare alcune modifiche da `server.ts.bak` a `server.ts` manualmente.'
  },
  'ivy i18n': {
    action:
      "Angular 9 ha introdotto una funzione globale `$localize()` che necessita di essere caricata se si dipende dall'internazionalizzazione di Angular (i18n). Esegui `ng add @angular/localize` per aggiungere i pacchetti necessari e le modifiche al codice. Consulta la [$localize Global Import Migration guide](https://v9.angular.io/guide/migration-localize) per saperne di più sulle modifiche."
  },
  entryComponents: {
    action:
      "Nei tuoi progetti, puoi rimuovere `entryComponents` NgModules e qualsiasi uso di `ANALYZE_FOR_ENTRY_COMPONENTS`. Non sono più necessari con il compilatore con runtime Ivy. Potrebbe essere necessario conservarli se si crea una libreria che verrà utilizzata da un'applicazione che non usa Ivy (View Engine)."
  },
  'testbed-get': {
    action:
      'Se utizzi `TestBed.get`, dovresti invece usare `TestBed.inject`. Questo nuovo metodo ha lo stesso comportamento, ma è sicuro dai tipi.'
  },
  $localize: {
    action:
      'Se utilizzi il [supporto i18n di Angular](http://angular.io/guide/i18n), dovrai iniziare a usare `@angular/localize`. Ulteriori informazioni su [$localize Global Import Migration](https://v9.angular.io/guide/migration-localize).'
  },
  'v10 NodeJS 12': {
    action:
      'Assicurati di utilizzare una versione di <a href="https://nodejs.org/dist/latest-v12.x/" target="_blank">Node 12 o successiva</a>.'

  },
  // END v9

  // START v10
  'ng update v10': {
    action:
      'Esegui `npx @angular/cli@10 update @angular/core@10 @angular/cli@10` che dovrebbe portarti alla versione 10 di Angular.',
  },
  // 'update @angular/material': {
  //   material: true,
  //   action:
  //     'Esegui `npx @angular/cli@10 update @angular/material@10`.'
  // },
  browserlist: {
    action:
      'I nuovi progetti usano il nome del file `.browserslistrc` invece di `browserslist`. `ng update` ti eseguirà automaticamente la migrazione.'
  },
  'v10-versions': {
    action:
      'Angular ora richiede `tslint` v6, `tslib` v2, e [TypeScript 3.9](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html). `ng update` ti eseguirà automaticamente la migrazione.',
  },
  styleext: {
    action:
      'Smetti di usare `styleext` o `spec` nei tuoi schemi Angular. `ng update` ti eseguirà automaticamente la migrazione.'
  },
  'classes-without-decorators': {
    action:
      'Nella versione 10, le classi che utilizzano le funzionalità Angular e non dispongono di un decoratore Angular non sono più supportate. [Per saperne di più](https://v10.angular.io/guide/migration-undecorated-classes). `ng update` ti eseguirà automaticamente la migrazione',
  },
  'injectable-definitions': {
    action:
      "A partire da Angular 9, l'applicazione dei decoratori @Injectable per DI è più rigorosa e le definizioni del provider incomplete si comportano in modo diverso. [Per saperne di più](https://v9.angular.io/guide/migration-injectable). `ng update` ti eseguirà automaticamente la migrazione",
  },
  'closure-jsdoc-comments': {
    action:
      "Angular's NPM packages no longer contain jsdoc comments, which are necessary for use with closure compiler (extremely uncommon). This support was experimental and only worked in some use cases. There will be an alternative recommended path announced shortly.",
  },
  'forms-number-input': {
    action:
      'If you use Angular forms, inputs of type `number` no longer listen to [change events](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) (this events are not necessarily fired for each alteration the value), instead listen for an [input events](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event). ',
  },
  'forms-length-input': {
    action:
      "For Angular forms validation, the `minLength` and `maxLength` validators now verify that the form control's value has a numeric length property, and only validate for length if that's the case.",
  },
  'esm5-bundles': {
    action:
      "The [Angular Package Format](https://g.co/ng/apf) has been updated to remove `esm5` and `fesm5` formats. These are no longer distributed in our npm packages. If you don't use the CLI, you may need to downlevel Angular code to ES5 yourself.",
  },
  'console-errors': {
    action:
      "Warnings about unknown elements are now logged as errors. This won't break your app, but it may trip up tools that expect nothing to be logged via `console.error`.",
  },
  'router-resolver-empty': {
    action:
      'Any resolver which returns `EMPTY` will cancel navigation. If you want to allow navigation to continue, you will need to update the resolvers to emit some value, (i.e. `defaultIfEmpty(...)`, `of(...)`, etc).',
  },
  'sw-vary-headers': {
    action:
      'If you use the Angular service worker and rely on resources with [Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary) headers, these headers are now ignored to avoid unpredictable behavior across browsers. To avoid this, [configure](https://angular.io/guide/service-worker-config) your service worker to avoid caching these resources.',
  },
  'expression-changed-after-checked-new': {
    action:
      'You may see `ExpressionChangedAfterItHasBeenChecked` errors that were not detected before when using the `async` pipe. The error could previously have gone undetected because two `WrappedValues` are considered "equal" in all cases for the purposes of the check, even if their respective unwrapped values are not. In version 10, `WrappedValue` has been removed.',
  },
  'property-binding-change-detection': {
    action:
      'If you have a property binding such as `[val]=(observable | async).someProperty`, this will no longer trigger change detection if the value of `someProperty` is identical to the previous emit. If you rely on this, either manually subscribe and call `markForCheck` as needed or update the binding to ensure the reference changes.',
  },
  'day-periods-crossing-midnight': {
    action:
      'If you use either `formatDate()` or `DatePipe` and any of the `b` or `B` format codes, the logic has been updated so that it matches times that are within a day period that spans midnight, so it will now render the correct output, such as at `night` in the case of English.',
  },
  'urlmatcher-null': {
    action:
      'If you use the `UrlMatcher`, the type now reflects that it could always return `null`.',
  },
  'v10-more-details': {
    action:
      'For more details about deprecations, automated migrations, and changes visit the [guide angular.io](https://v10.angular.io/guide/updating-to-version-10)',
  },
  // END v10
};
// @TODO This console log is required or the locale won't be registered
console.log(`it-IT registered`);
registerLocalization('it-IT', steps, uiLabels);
