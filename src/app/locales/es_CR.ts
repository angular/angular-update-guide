import { LocalizedSteps, registerLocalization, LocalizedLabels } from '../localization';

const uiLabels: LocalizedLabels = {
  'Angular Update Guide': 'Guía de Actualización de Angular',
  'Select the options matching your project:': 'Seleccione las opciónes que más se asimilen a su proyecto:',
  'Angular Versions': 'Version de Angular',
  From: 'De',
  To: 'A',
  Warning: 'Alerta',
  'Plans for releases after the current major release are not finalized and may change. These recommendations are based on scheduled deprecations.':
    'Los planes de releases para después de esta versión no estan finalizados y puede que cambien. Estas recomendaciones son basadas en la programación de depreciaciones.',
  'We do not currently support downgrading versions of Angular.':
    'No soportamos bajar a versiones anteriores de Angular',
  'We do not recommend moving across multiple major versions.':
    'No recomendamos moverse atravez de versiones principales.',
  'App Complexity': 'Complejida de la aplicación',
  Basic: 'Basica',
  Medium: 'Media',
  Advanced: 'Avanzada',
  'Show update information relevant to all Angular developers.':
    'Muestra de actualizaciónes relevantes a todos los desarolladores en Angular.',
  'Show more specific update information relevant to around 10% of Angular developers.':
    'Muestra información de actualizaciones más especifica para alrededor del 10% de los desarolladores de Angular.',
  'Show all the information we have about the update.': 'Muestra toda la información sobre la actualización.',
  'Other Dependencies': 'Otras dependencias',
  'I use': 'Yo uso',
  'Package Manager': 'Manajeador de paquetes',
  npm: 'npm',
  yarn: 'yarn',
  'Show me how to update!': '¡Muestrame como actualizar!',
  'Before Updating': 'Antes de actualizar',
  // tslint:disable-next-line: quotemark
  "There aren't currently any changes needed before moving between these versions.":
    'No se necesita ningun cambio para moverse entre estas versiones.',
  'During the Update': 'Durante la actualización',
  // tslint:disable-next-line: quotemark
  "There aren't currently any recommendations for moving between these versions.":
    'No hay ninguna recomendación para moverser entre estas versiones.',
  'After the Update': 'Después de la actulización',
  // tslint:disable-next-line: quotemark
  "There aren't currently any changes needed after moving between these versions.":
    'No es necesario realizar ningun cambio al moverse entre estas versiones.',
};

const steps: LocalizedSteps = {
  'Extends OnInit': {
    action:
      'Asegúrese de no utilizar `extends OnInit` o con cualquier evento del ciclo de vida. Utiliza `implements` para agregar los métodos de ciclos de vida.',
  },
  'Deep Imports': {
    action:
      'No continúe utilizado deep imports, estos símbolos ahora son marcados con ɵ y no son parte del API publico',
  },
  invokeElementMethod: {
    action:
      'No continúe utilizando `Renderer.invokeElementMethod` dado que este método ha sido borrado y no tiene reemplazo',
  },
  'Non Animations Module': {
    action:
      'Si utiliza animaciones en su aplicación, debe importar `BrowserAnimationsModule` de `@angular/platform-browser/animations` en el App `NgModule`.',
  },
  'Native Form Validation': {
    action:
      'Angular inició a agregar el atributo `novalidate` a los elementos de formulario cuando se incluye `FormsModule`. Para habilitar los comportamientos nativos, utilice `ngNoForm` o agregue `ngNativeValidate`.',
  },
  RootRenderer: {
    action: 'Reemplace RootRenderer por `RendererFactoryV2`.',
  },
  downgradeInjectable: {
    action: 'El valor de retorno de `upgrade/static/downgradeInjectable` cambió.',
  },
  'Animations Tests': {
    action:
      'Si utiliza animaciones y pruebas unitarias, agregue `mods[1].NoopAnimationsModule` al llamado de `TestBed.initTestEnvironment`.',
  },
  DefaultIterableDiffer: {
    action: 'No utilice `DefaultIterableDiffer`, `KeyValueDiffers#factories`, o `IterableDiffers#factories.`',
  },
  'Template Tag': {
    action: 'Renombre las etiquetas `template` a `ng-template`.',
  },

  OpaqueToken: {
    action: 'Reemplace `OpaqueToken` por `InjectionToken`.',
  },
  DifferFactory: {
    action: 'Si utiliza `DifferFactory.create(...)` remueva `ChangeDetectorRef` como argumento.',
  },
  'ErrorHandler Parameter': {
    action: 'No pase ningún argumento al constructor de ErrorHandler',
  },
  ngProbeToken: {
    action: 'Si usa ngProbeToken. asegúrese de importarlo de `@angular/core` en vez de `@angular/platform-browser`',
  },
  TrackByFn: {
    action: 'Utilice TrackByFunction en vez de TrackByFn',
  },
  'i18n Pipe Change': {
    action:
      'Si utiliza los pipes de date, currency, decimal o porcentaje, en la v5 verá algunos cambios pequeños en el formato. Para aplicaciones que utilicen otros locales aparte de en-us, necesitara impórtalo y opcionalmente `locale_extended_fr` de `@angular/common/i18n_data/locale_fr` y registerLocaleData(local).',
  },
  gendir: {
    action:
      'No confíe en el uso de `gendir`, en vez use `skipTemplateCodeGen`. <a href=https://github.com/angular/angular/issues/19339#issuecomment-332607471" target="_blank">Lee más</a>',
  },
  'Dynamic ngUpgrade': {
    action:
      'Reemplace `downgradeComponent`, `downgradeInjectable`, `UpgradeComponent`, y `UpgradeModule` importado de `@angular/upgrade`. Utilice la nueva version en `@angular/upgrade/static`',
  },
  'Animations in Core': {
    action:
      'Si utiliza servicios para animaciones o herramientas de @angular/core, debe de importarlo desde @angular/animations',
  },
  ngOutletContext: {
    action: 'Reemplace `ngOutletContext` por `ngTemplateOutletContext`.',
  },
  collectionChangeRecord: {
    action: 'Reemplace `CollectionChangeRecord` por `IterableChangeRecord`',
  },
  Renderer: {
    action: 'En todos los lugares que este utilizando Renderer, remplácelo por Renderer2',
  },
  'Router Query Params': {
    action: 'En caso de utilizar preserveQueryParams, utilice queryParamsHandling en vez',
  },
  Http: {
    action:
      'Si utiliza el antiguo `HttpModule` modulo y el `Http` service, reemplácelo por `HttpClientModule` y  `HttpClient` service. HttpClient mejora la ergonomía por defecto (ya no necesita utilizar un map para convertir a JSON la respuesta) y ahora soporta tipos de retorno e interceptores. Puede leer más en [angular.io](https://angular.io/guide/http).',
  },
  'DOCUMENT in @angular/platform-browser': {
    action: 'Si utiliza DOCUMENT de @angular/platform-browser, debería empezar a importarlo desde @angular/common',
  },
  ReflectiveInjector: {
    action: 'Reemplace ReflectiveInjector por StaticInjector',
  },
  Whitespace: {
    action:
      'Obtenga beneficios al utilizar `preserveWhitespaces` con el valor de `off` en el `tsconfig.json` en la propiedad `angularCompilerOptions`. En la versión 6 es inicializada por defecto con `off`.',
  },
  'node 8': {
    action:
      'Asegúrese de utilizar <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 8 o una versión posterior.</a>',
  },
  'Update to CLI v6': {
    action:
      'Actualice la versión local del Angular CLI, y migre la configuración al <a href="https://github.com/angular/angular-cli/wiki/angular-workspace" target="_blank">al nuevo formato del angular.json</a>, corriendo el siguiente comando: <br/><br/>`${packageManagerInstall} @angular/cli@6`<br/>`ng update @angular/cli@6`<br/>',
  },
  'cli v6 scripts': {
    action:
      'Actualice cualquier script que tenga en su `package.json` a la ultima versión para poder utilizar comando del Angular CLI. Ahora todos los comandos utilizan guiones para las banderas (ejemplo: eg `ng build --prod --source-map`) para ser compatible con el estándar POSIX.',
  },
  'Update to Angular v6': {
    action:
      'Actualice todos los paquetes de Angular a la versión 6, junto la versión correspondiente de RxJS y Typescript. <br/><br/>`ng update @angular/core@6`<br/><br/> Después de la actualización de Typescript y RxJS pueden que aparezcan algunos errores dado que mejoran el tipado en la aplicación.',
  },
  'forms v6': {
    action:
      '`AbstractControl#statusChanges` en los formuarios de Angular, ahora emite un evento de `PENDING` cuando se hace un llamado a `AbstractControl#markAsPending`. Asegúrese si esta filtrando o chequeando eventos utilizando `statusChanges` tome en cuenta el nuevo evento cuando llame a `markAsPending`.',
  },
  'animations timing': {
    action:
      'Si utiliza totalTime de un `AnimationEvent` dentro de una zona deshabilitada, ya no reportara un tiempo de 0. Para detectar si evento de animacion estar reportando una animación deshabilitada puede utilizar la propiedad `event.disabled`',
  },
  'ngModel on form control': {
    action:
      'El input ngModel y el evento ngModelChange han quedado en desuso en la versión 7 y serán removidas en la versión 7.',
  },
  'ngModelChange order': {
    action:
      'Ahora ngModelChange es emitido después de que el valor/validación es actualizado por su control para cumplir mejor con las expectativas. Si depende del orden de estos eventos, lo mejor es que empieza a almacenar el valor previo en su componente.',
  },
  'Update Dependencies for v6': {
    action:
      'Actualice Angular Material a la ultima versión. <br/><br/>`ng update @angular/material`<br/><br/> Esto migrara los APIs en desuso automáticamente.',
  },
  strictPropertyInitializer: {
    action:
      'Si tiene configurado Typescript en modo estricto (la propiedad `strict` en `true` en su `tsconfig.json`), actualiza el `tsconfig.json` para deshabilitar `strictPropertyInitialization` o mueva la inicialización al `ngOnInit` al constructor. Puede leer mas sobre esta opción en <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization">TypeScript 2.7 notas de release</a>.',
  },
  'update to RxJS 6': {
    action:
      'Remueva las funciones en desuso de RxJS 5 usando <a href="https://github.com/ReactiveX/rxjs-tslint" target="_blank">rxjs-tslint auto update rules</a><br/><br/> Para la mayoría de aplicaciones debe de correr estos dos comandos <br/><br/>`npx rxjs-tslint`<br/>`rxjs-5-to-6-migrate -p src/tsconfig.app.json`',
  },
  'remove rxjs-compat': {
    action: 'Una vez que todas las dependencias han sido actualizadas a RxJS 6, remueva `rxjs-compat`.',
  },
  'use files instead of versionedFiles': {
    action:
      'Si utiliza el Service worker de Angular, migre cualquier `versionedFiles` al arreglo `files`. El comportamiento no se verá afectado.',
  },
  'TypeScript 3.1': {
    action:
      'Angular ahora utiliza TypeScript 3.1, puede leer mas sobre cambios potenciales que pueden afectar su aplicación en https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html',
  },
  'Node 10': {
    action: 'Angular ahora soporta Node 10: https://nodejs.org/en/blog/release/v10.0.0/',
  },
  'v7 update': {
    action:
      'Actualice a la version 7 la base del framework y el CLI corriendo  `ng update @angular/cli@7 @angular/core@7` en la terminal.',
  },
  'v7 material update': {
    action:
      'Actualizace Angular Material a la versión 7 corriendo `ng update @angular/material@7` en la terminal. Haga pruebas en su aplicación relacionadas con el tamaño y cambios en diseño.',
  },
  'v7 material changes': {
    action:
      'Si hace pruebas visuales, debe de regenerar los "golden screenshots" debido a que algunos cambios menores han sido implementados.',
  },
  'v7 material deprecations': {
    action: 'No utilice `matRippleSpeedFactor` ni `baseSpeedFactor` para ripples, use la configuración de Animation',
  },
  'v8 update': {
    action:
      'Actualice a la versión 8 los paquetes principales del framework y del CLI corriendo `ng update @angular/cli@8 @angular/core@8` en la terminal, verifica los cambios y commitealos.',
  },
  'use ::ng-deep instead of /deep/': {
    action:
      'Remplace `/deep/` por `::ng-deep` en las hojas de estilo. [Lea más sobre estilos en componentes y ::ng-deep](https://angular.io/guide/component-styles#deprecated-deep--and-ng-deep).  `/deep/` y `::ng-deep` están obsoletas pero utilizar `::ng-deep` es preferido hasta que shadow-piercing descendant combinator sea [removido de los navegadores y herramientas](https://www.chromestatus.com/features/6750456638341120) completamente.',
  },
  'TypeScript 3.4': {
    action:
      'Angular ahora usa Typescript 3.4, [lea más sobre posibles errores que puedan aparecer por las mejoras en la revisión de tipos](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html).',
  },
  'node 10': {
    action:
      'Asegurese de <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">usar la version 10 de Node o más reciente</a>.',
  },
  'Differential Loading': {
    action:
      'Ahora, el comando build del CLI crea un build que soporta ES2015 y con solo los polyfills necesarios y otro compatible con ES5 para navegadores antiguos, y se carga adecuadamente según el navegador. Puedes no utilizar esto cambiando el `target` a `es5` en el `tsconfig.json`. Lea más sobre ello en [angular.io](https://angular.io/guide/deployment#differential-loading).',
  },
  'CLI Telemetry': {
    action:
      'En las nuevas versiones el Angular CLI le preguntará si quiere optar por compartir información de uso del CLI. También puede agregar su cuenta de Google Analytics. Esto nos permite tomar mejores decisiones sobre cuales funciones deben ser prioritizadas y medir el impacto de las mejoras. Lea más sobre ello en [angular.io](https://angular.io/analytics).',
  },
  'static query timing': {
    action:
      "Hemos actualizado la forma de resolver queries de `ViewChild` y `ContentChild`, para darle más control al desarrollador. Ahora debe especificar el cambio de detección (change detection) que debe correr antes de dar los resultados. Por ejemplo:`@ContentChild('foo', {static: false}) foo !: ElementRef;`. `ng update` actualizara los queries automáticamente. Lea mas sobre ello [angular.io](https://angular.io/guide/static-query-migration).",
  },
  'v8 material update': {
    action: 'Actualiza Angular Material a la versión 8 corriendo `ng update @angular/material@8` en la terminal.',
  },
  'deep imports': {
    action:
      'No importe componentes desde `@angular/material`, si no especifique que la ruta directa al component, por ejemplo `@angular/material/button`. `ng update` cambiara estoy automáticamente.',
  },
  'new loadChildren': {
    action:
      'Módulos que sean cargados de manera lazy, asegúrese de utilizar [imports dinamicos](https://angular.io/guide/deprecations#loadchildren-string-syntax). Importar modulo utilizando strings sera removido en la versión 9. `ng update` modificara las rutas automáticamente. Lea mas sobre ello en [angular.io](https://angular.io/guide/deprecations#loadchildren-string-syntax).',
  },
  'platform deprecated': {
    action:
      '`@angular/platform-webworker` no sera soportado, dado que es incompatible con el CLI. Correr la arquitectura de rendering de Angular no cumple con las necesidades del los desarrolladores. Todavía puede utilizar web workes con Angular. Lea mas sobre la guía de [web worker](https://v9.angular.io/guide/web-worker). Si tiene un caso en el que necesite esto, déjanoslo saber a devrel@angular.io!',
  },
  'node-sass': {
    action:
      'Nos cambiamos de utilizar el compilador nativo de Sass al compilador en Javascript. Para volver a la versión nativa, instale el paquete como devDependecy: `npm install node-sass --save-dev`.',
  },
  'schematics async': {
    action:
      'Si esta construyendo su propio Schematics, eran potencialmente asincrónicos. En la versión 8.0, todos los schematics van ser asincrónicos',
  },
  'node 10.13': {
    action:
      'Asegúrese de utilizar la versión <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 10.13 o posterior</a>.',
  },
  'cli v8 latest': {
    action:
      'Corra `ng update @angular/core@8 @angular/cli@8` en su directorio de trabajo para actualizar a la ultima versión 8.x del `@angular/core` y `@angular/cli` y haga commit de estos cambios.',
  },
  'create commits': {
    action:
      'Opcionalmente puede pasar `--create-commits` (o `-C`) al comando [ng update](https://angular.io/cli/update) para crear commits separados para cada migración.',
  },
  'ng update v9': {
    action: 'Corra `ng update @angular/core@9 @angular/cli@9` para actualizar a la versión 9 de Angular.',
  },
  'typescript 3.8': {
    action:
      'El proyecto ha sido actualizado a la versión de Typescript 3.8, lea más sobre las nuevas opciones de compilador y errores que puede que requiera reparar en el código en la versión de [Typescript 3.7](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html) o [TypeScript 3.8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html).',
  },
  'update @angular/material@9': {
    action: 'Corra `ng update @angular/material@9`.',
  },
  'update @nguniversal/hapi-engine': {
    action:
      'Si esta utilizando Angular Universal, corra `ng update @nguniversal/hapi-engine` o `ng update @nguniversal/express-engine` dependiendo del motor que este utilizando. Si las dependencias de Angular de terceros no ha sido actualizado, talvez tenga que correr el comando con la opción `--force`.',
  },
  'dependencies update': {
    action:
      'Si depende de otras librerías es Angular, es recomendable actualizarlas a la ultima versión. En algunos casos va ser requerido por incompatibilidades en el API. Puede utilizar `ng update` o `npm outdated` para saber que librerías están desactualizadas.',
  },
  'ivy update': {
    action:
      'Durante la actualización a la versión 9, el proyecto fue transformado atraves de migraciones de código para remover API obsoletos o no compatibles. Puedes ver y leer más de los cambios en la [guía de actualización a la versión 9](https://v9.angular.io/guide/updating-to-version-9).',
  },
  stylesUpdate: {
    action:
      'Anteriormente los estilos y clases eran aplicadas con la estrategia "el último cambio gana", pero ahora define de manera precedente. Para saber más de [estilos en precendencia](https://angular.io/guide/template-syntax#styling-precedence).',
  },
  ModuleWithProviders: {
    action:
      'Si es autor de una librería y utiliza un método que retorna un valor de tipo `ModuleWithProviders` (comúnmente la función `forRoot()`), necesitara especificar el tipo genérico. Para saber más [angular.io](https://v9.angular.io/guide/deprecations#modulewithproviders-type-without-a-generic)',
  },
  wtf: {
    action:
      'El soporte a web tracing en la versión 8 fue deshechado. No utilice nada del `wtf*`. Para hacer pruebas de rendimiento, recomendamos utilizar [las herramientas del navegador](https://developers.google.com/web/tools/lighthouse/audits/user-timing).',
  },
  es5browser: {
    action:
      'Elimine todas las opciones de `es5BrowserSupport` del `angular.json` y defina el `target` a `es2015` en su `tsconfig.json`. Ahora Angular utiliza el browerslist para determinar si se necesita un build para ES5. El comando `ng update` migrará todo automáticamente.',
  },
  'ngForm selector': {
    action: 'Si utiliza el selector de `ngForm` para crear formularios en Angular, reemplácelo por `ng-form`.',
  },
  'typings compilation': {
    action:
      'Hemos actualizado y limitado el tsconfig.app.json a los archivos necesarios para la compilación. Si necesita agregar otros, tal como `typings.d.ts`, tiene que hacerlo manualmente.',
  },
  debug: {
    action:
      'Ivy es el motor de renderizado por defecto en Angular 9. En caso que aparezcan problemas, lea la [guía de compatibilidad de Ivy](https://angular.io/guide/ivy-compatibility).',
  },
  'ngcc postinstall': {
    action:
      'En caso de que dependa de muchas librerías de Angular, considere utilizar `ngcc` (Compilador de Compatibilidad de Angular) en un script de npm `postinstall` en el [package.json](https://v9.angular.io/guide/ivy#speeding-up-ngcc-compilation).',
  },
  'express-universal-server': {
    action:
      'Se crearan muchos archivos de respaldo si utiliza Angular Universal con `@nguniversal/express-engine` o `@nguniversal/hapi-engine`. Uno de ellos es `server.ts`, si esta proviene del original, talvez tenga que copiar algunos cambios del `server.ts.bak` al `server.ts` manualmente.',
  },
  'ivy i18n': {
    action:
      'La función global `$localize()` fue agregada en Angular 9, debe ser cargada si utiliza la internacionalización de Angular (i18n). Corra `ng add @angular/localize` para agregar los paquetes necesarios y hacer modificaciones en el código. Consulte la [guía de migración de $localize](https://v9.angular.io/guide/migration-localize) para saber más de los cambios.',
  },
  entryComponents: {
    action:
      'Si tiene algún `entryComponents` listado en su NgModules o `ANALYZE_FOR_ENTRY_COMPONENTS`, remuévalos. Ya no son necesarios en compilador de Ivy ni en tiempo de ejecución.',
  },
  'testbed-get': {
    action:
      'Si utiliza `TestBed.get`, deberia utilizar `TestBed.inject`. Es nuevo método tiene el mismo comportamiento, pero tipado.',
  },
  $localize: {
    action:
      'Si utiliza [i18n de Angular](http://angular.io/guide/i18n), necesita empezar a utilizar `@angular/localize`. Aprende más de [migración de importación global de $localize](https://v9.angular.io/guide/migration-localize).',
  },
  'ng update v10': {
    action:
      'Corra `ng update @angular/core@10 @angular/cli@10` el cual debería actualizarlo a la versión 10 de Angular.',
  },
  // 'update @angular/material': {
  //   action:
  //     ' Corra `ng update @angular/material`.'
  // },
  browserlist: {
    action:
      'Los proyectos nuevos utilizan `.browserslistrc` en vez de `browserslist`. `ng update` lo migrara automáticamente.',
  },
  'v10-versions': {
    action:
      'Angular ahora utiliza la  `tslint` v6, `tslib` v2, y [TypeScript 3.9](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html). `ng update` lo migrara automáticamente.',
  },
  styleext: {
    action: 'No utilice más `styleext` o `spec` en su Angular schematics. `ng update` lo migrara automáticamente.',
  },
  'tsconfig-layout': {
    action:
      'Angular recomienda utilizar `tsconfig.base.json` para ayudar a organizar el tipado en diferentes contextos(en común, pruebas unitarias, pruebas end to end, aplicación, etc) `ng update` lo migrara automáticamente.',
  },
  'classes-without-decorators': {
    action:
      'En la versión 10, las clases que utilicen Angular y no tenga el decorardor respectivo ya no son soportadas. [Lee más](https://v10.angular.io/guide/migration-undecorated-classes). `ng update` lo migrara automáticamente.',
  },
  'injectable-definitions': {
    action:
      'A partir de Angular 9, la aplicación de los decoradores @Injectable en DI es más estricta y las definiciones de provider incompletas se comportan de manera diferente. [Lee más](https://v9.angular.io/guide/migration-injectable). `ng update` lo migrara automáticamente.',
  },
  'closure-jsdoc-comments': {
    action:
      'Paquete de NPM de Angular ya no contiene comentarios en jsdoc, los cuales eran necesarios para usar el closure compiler (extremamente poco común). El soporte era experimental y solo funciono en algunos casos. Existirá un camino alternativo prontamente.',
  },
  'forms-number-input': {
    action:
      'Si utiliza los formularios de Angular, el campo tipo `number` ya no escuchara ningún [evento de cambio](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) (estos eventos no son necesariamente lanzados por cada alteración en el valor),  en vez escuche [eventos del input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).',
  },
  'forms-length-input': {
    action:
      'Para la validación de formularios de Angular, los validadores `minLength` y `maxLength` ahora verifican si el valor del form control tiene una propiedad de longitud numérica y solo valida la longitud si es el caso.',
  },
  'esm5-bundles': {
    action:
      'El [Paquete de formato de Angular](https://g.co/ng/apf) ha sido actualizado para remover el `esm5` y `fesm5`. Estos paquetes de NPM ya no serán distribuidos. Si no utiliza el CLI, tal vez deba de bajar de nivel el código de Angular a ES5.',
  },
  'console-errors': {
    action:
      'Las alertas sobre elementos no conocidos ahora son registradas como errores. Esto no quebrará su aplicación, pero puede terminar en herramientas que esperar no registrar nada atreves de `console.error`.',
  },
  'router-resolver-empty': {
    action:
      'Cualquier resolver que retorne `EMPTY` cancelería la navegación. Si quiere permitir que continúe, necesitara actualizar el resolver para que emita algún tipo de valor (ejemplo. `defaultIfEmpty(...)`, `of(...)`, etc).',
  },
  'sw-vary-headers': {
    action:
      'Si utiliza el service worker de Angular y utiliza el header [Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary), ahora será ignorado para evitar comportamientos inesperados atreves de navegadores. Para evitar esto [configure](https://angular.io/guide/service-worker-config) su service worker para evitar cachear estos recursos.',
  },
  'expression-changed-after-checked-new': {
    action:
      'Tal vez ha visto errores de `ExpressionChangedAfterItHasBeenChecked` que no fueron detectados antes usando el `async` pipe. El error pudo no haberse encontrado previamente porque dos `WrappedValues` son consideradoras "iguales" en todos los casos propuestos al chequeo, inclusive si los respectivos valores "unwrapped" no lo son. En la versión 10, `WrappedValue` han sido eliminados.',
  },
  'property-binding-change-detection': {
    action:
      'Si tiene una vinculación de propiedad como `[val]=(observable | async).someProperty`, esto, ya no lanzara un cambio en el change detection si el valor de `someProperty` es idéntico al anterior emitido. Si confía en estos, puede subscrirse y llamar a `markForCheck cuando lo necesite o quiera actualizar la vinculación para asegurar los cambios de referencia.',
  },
  'day-periods-crossing-midnight': {
    action:
      'Si utiliza `formatDate()` or `DatePipe` y cualquiera de los códigos de formato `b` o `B`, la lógica ha sido actualizada para que concuerde el tiempo de un día que abarca media noche, así hará render de la salida correcta, como es noche en el caso de ingles.',
  },
  'urlmatcher-null': {
    action: 'Si utilza `UrlMatcher`, ahora el tipo muestra que puede que siempre retorne `null`.',
  },
  'v10-more-details': {
    action:
      'Para más detalles sobre bajas, migraciones automáticas, y cambios, visite la [guía de angular.io](https://angular.io/guide/updating-to-version-10)',
  },
};
// @TODO This console log is required or the locale won't be registered
console.log(`es-CR registered`);
registerLocalization('es-CR', steps, uiLabels);
