import { LocalizedSteps, registerLocalization, LocalizedLabels } from '../localization';

const uiLabels: LocalizedLabels = {
  'Angular Update Guide': 'Руководство по обновлению Angular',
  'Select the options matching your project:': 'Выберите варианты, соответствующие вашему проекту:',
  'Angular Versions': 'Версии Angular',
  From: 'С',
  To: 'По',
  Warning: 'Внимание',
  'Plans for releases after the current major release are not finalized and may change. These recommendations are based on scheduled deprecations.':
    'Планы выпусков после текущего основного выпуска еще не согласованы и могут измениться. Эти рекомендации основаны на запланированных прекращениях поддержки.',
  'We do not currently support downgrading versions of Angular.':
    'В настоящее время мы не поддерживаем переход на более ранние версии Angular.',
  'We do not recommend moving across multiple major versions.': 'Мы не рекомендуем двигаться через несколько версий.',
  'App Complexity': 'Сложность приложения',
  Basic: 'Простое',
  Medium: 'Среднее',
  Advanced: 'Продвинутое',
  'Show update information relevant to all Angular developers.':
    'Показывать информацию об обновлении, актуальную для всех разработчиков Angular.',
  'Show more specific update information relevant to around 10% of Angular developers.':
    'Показывать более конкретную информацию об обновлении, актуальную примерно для 10% разработчиков Angular.',
  'Show all the information we have about the update.': 'Показывать всю имеющуюся у нас информацию об обновлении.',
  'Other Dependencies': 'Прочие зависимости',
  'I use': 'Я использую',
  'Package Manager': 'Менеджер пакетов',
  npm: 'npm',
  yarn: 'yarn',
  'Show me how to update!': 'Покажите мне как обновиться!',
  'Before Updating': 'Подготовка к обновлению',
  // tslint:disable-next-line: quotemark
  "There aren't currently any changes needed before moving between these versions.":
    'В настоящее время нет необходимости вносить какие-либо изменения перед переходом между этими версиями.',
  'During the Update': 'Во время обновления',
  // tslint:disable-next-line: quotemark
  "There aren't currently any recommendations for moving between these versions.":
    'В настоящее время нет рекомендаций по переходу между этими версиями.',
  'After the Update': 'После обновления',
  // tslint:disable-next-line: quotemark
  "There aren't currently any changes needed after moving between these versions.":
    'В настоящее время после перехода между этими версиями никаких изменений не требуется.',
  'to combine AngularJS & Angular': 'объединить AngularJS и Angular',
  for: 'для',
  'Basic Apps': 'простых приложений',
  'Medium Apps': 'приложений средней сложности',
  'Advanced Apps': 'продвинутых приложений',
};

const steps: LocalizedSteps = {
  'Extends OnInit': {
    action:
      'Убедитесь, что вы не используете `extends OnInit` и не используете `extends` с каким-либо событием жизненного цикла. Вместо этого используйте `implements <событие жизненного цикла>`.',
  },
  'Deep Imports': {
    action:
      'Перестаньте использовать глубокие импорты (deep imports), эти ссылки теперь отмечены знаком "ɵ" и не являются частью нашего публичного API.',
  },
  invokeElementMethod: {
    action:
      'Перестаньте использовать `Renderer.invokeElementMethod`, поскольку этот метод был удален. В настоящее время замены нет.',
  },
  'Non Animations Module': {
    action:
      'Если вы используете анимацию, вы должны импортировать `BrowserAnimationsModule` из `@angular/platform-browser/animations` в ваш App `NgModule`.',
  },
  'Native Form Validation': {
    action:
      'Angular начал добавлять атрибут `novalidate` для элементов формы, когда вы включаете `FormsModule`. Чтобы повторно включить поведение собственных форм, используйте `ngNoForm` или добавьте `ngNativeValidate`.',
  },
  RootRenderer: {
    action: 'Замените `RootRenderer` на `RendererFactoryV2`.',
  },
  downgradeInjectable: {
    action: 'Возвращаемое значение `upgrade/static/downgradeInjectable` изменилось.',
  },
  'Animations Tests': {
    action:
      'Если вы используете анимацию и тесты, добавьте `mods[1].NoopAnimationsModule` к вашему вызову `TestBed.initTestEnvironment`.',
  },
  DefaultIterableDiffer: {
    action:
      'Перестаньте использовать `DefaultIterableDiffer`, `KeyValueDiffers#factories`, или `IterableDiffers#factories.`',
  },
  'Template Tag': {
    action: 'Переименуйте теги `template` в `ng-template`.',
  },

  OpaqueToken: {
    action: 'Замените все `OpaqueToken` на `InjectionToken`.',
  },
  DifferFactory: {
    action: 'Если вы используете `DifferFactory.create(...)`, удалите аргумент `ChangeDetectorRef`.',
  },
  'ErrorHandler Parameter': {
    action: 'Перестаньте передавать какие-либо аргументы конструктору `ErrorHandler`',
  },
  ngProbeToken: {
    action:
      'If you use `ngProbeToken`, make sure you import it from `@angular/core` instead of `@angular/platform-browser`',
  },
  TrackByFn: {
    action: 'Используйте `TrackByFunction` вместо `TrackByFn`',
  },
  'i18n Pipe Change': {
    action:
      'Если вы полагаетесь на дату, валюту, десятичную дробь или процентные знаки, в v5 вы увидите незначительные изменения форматов. Для приложений, использующих локали, отличные от en-us, вам нужно будет импортировать их и, при необходимости, зарегистрировать. `locale_extended_fr` из `@angular/common/i18n_data/locale_fr` и `registerLocaleData(local)`.',
  },
  gendir: {
    action:
      'Не полагайтесь на `gendir`, вместо этого рассмотрите использование` skipTemplateCodeGen`. <a href="https://github.com/angular/angular/issues/19339#issuecomment-332607471" target="_blank">Подробнее</a>.',
  },
  'Dynamic ngUpgrade': {
    action:
      'Замените `downgradeComponent`, `downgradeInjectable`, `UpgradeComponent`, и `UpgradeModule`, импортируемые из `@angular/upgrade`. Вместо этого используйте новую версию из `@angular/upgrade/static`',
  },
  'Animations in Core': {
    action:
      'Если вы импортируете какие-либо службы или инструменты анимации из `@angular/core`, вы должны импортировать их из `@angular/animations`.',
  },
  ngOutletContext: {
    action: 'Замените `ngOutletContext` на `ngTemplateOutletContext`.',
  },
  collectionChangeRecord: {
    action: 'Замените `CollectionChangeRecord` на `IterableChangeRecord`',
  },
  Renderer: {
    action: 'Где бы вы ни использовали `Renderer`, теперь используйте `Renderer2`',
  },
  'Router Query Params': {
    action: 'Если вы использовали `preserveQueryParams`, теперь используйте `queryParamsHandling`',
  },
  Http: {
    action:
      'Если вы используете устаревшие службы `HttpModule` и `Http`, переключитесь на `HttpClientModule` и `HttpClient`. `HttpClient` упрощает эргономику по умолчанию (вам больше не нужно сопоставлять JSON) и теперь поддерживает типизированные возвращаемые значения и перехватчики. Подробнее на [angular.io](https://angular.io/guide/http).',
  },
  'DOCUMENT in @angular/platform-browser': {
    action:
      'Если вы используете `DOCUMENT` из `@angular/platform-browser`, вы должны начать импортировать это из `@angular/common`',
  },
  ReflectiveInjector: {
    action: 'Замените `ReflectiveInjector` на `StaticInjector`',
  },
  Whitespace: {
    action:
      'Выберите значение `off` для `preserveWhitespaces` в вашем `tsconfig.json` под ключом `angularCompilerOptions`, чтобы воспользоваться преимуществами этого параметра, который в v6 по умолчанию был отключен.',
  },
  'node 8': {
    action:
      'Убедитесь, что вы используете <a href="https://nodejs.org/dist/latest-v8.x/" target="_blank">Node 8 или более позднюю версию.</a>',
  },
  'Update to CLI v6': {
    action:
      'Обновите интерфейс командной строки Angular и перенесите конфигурацию в <a href="https://github.com/angular/angular-cli/wiki/angular-workspace" target="_blank">новый angular.json</a>, запустив: <br/><br/>`npx @angular/cli@6 update @angular/cli@6`<br/>',
  },
  'cli v6 scripts': {
    action:
      'Обновите любые `scripts`, которые могут быть в вашем `package.json`, чтобы использовать новейшие команды Angular CLI. Все команды CLI теперь используют два дефиса для флагов (например, `ng build --prod --source-map`), чтобы быть совместимыми с POSIX.',
  },
  'Update to Angular v6': {
    action:
      'Обновите все пакеты фреймворка Angular до v6 и до правильной версии RxJS и TypeScript. <br/><br/>`npx @angular/cli@6 update @angular/core@6`<br/><br/>После обновления TypeScript и RxJS будут более точно передавать типы вашего приложения, что может выявить существующие ошибки в типизации вашего приложения.',
  },
  'forms v6': {
    action:
      'В Angular Forms `AbstractControl#statusChanges` теперь генерирует событие `PENDING`, когда вы вызываете `AbstractControl#markAsPending`. Убедитесь, что если вы фильтруете или проверяете события из `statusChanges` и учитываете новое событие при вызове `markAsPending`.',
  },
  'animations timing': {
    action:
      'Если вы используете `totalTime` из `AnimationEvent` в отключенной `Zone`, он больше не будет сообщать время `0`. Чтобы определить, сообщает ли событие об отключенной анимации, вместо этого можно использовать свойство `event.disabled`.',
  },
  'ngModel on form control': {
    action:
      'Поддержка использования свойства ввода `ngModel` и события `ngModelChange` с директивами реактивной формы устарела в версии v6 и удалена в версии v7.',
  },
  'ngModelChange order': {
    action:
      '`ngModelChange` теперь выдается после обновления значения/достоверности в его элементе управления, а не до, чтобы лучше соответствовать ожиданиям. Если вы полагаетесь на порядок этих событий, вам нужно будет начать отслеживать старое значение в вашем компоненте.',
  },
  'Update Dependencies for v6': {
    action:
      'Обновите Angular Material до последней версии.<br/><br/>`npx @angular/cli@6 update @angular/material@6`<br/><br/>Это также автоматически перенесет устаревшие API.',
  },
  strictPropertyInitializer: {
    action:
      'Если вы настроили TypeScript как строгий (если вы установили для параметра `strict` значение `true` в файле tsconfig.json), обновите файл tsconfig.json, чтобы отключить `strictPropertyInitialization`, или переместите инициализацию свойства из `ngOnInit` в конструктор. Вы можете узнать больше об этом флаге в <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization" target="_blank">примечаниях к релизу TypeScript 2.7</a>.',
  },
  'update to RxJS 6': {
    action:
      'Удалите устаревшие функции RxJS 5 с помощью <a href="https://github.com/ReactiveX/rxjs-tslint" target="_blank">правил автоматического обновления rxjs-tslint</a>.<br/>Для для большинства приложений это будет означать выполнение следующих двух команд:<br/><br/>`npx rxjs-tslint`<br/>`npx rxjs-5-to-6-migrate -p src/tsconfig.app.json`',
  },
  'remove rxjs-compat': {
    action: 'Как только вы и все ваши зависимости обновитесь до RxJS v6, удалите `rxjs-compat`.',
  },
  'use files instead of versionedFiles': {
    action:
      'Если вы используете Angular Service worker, перенесите любые файлы `versionedFiles` в массив `files`. Поведение такое же.',
  },
  'TypeScript 3.1': {
    action:
      'Angular теперь использует TypeScript 3.1, узнайте больше о возможных критических изменениях <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html" target="_blank">TypeScript 3.1 примечания к релизу</a>.',
  },
  'Node 10': {
    action:
      'В Angular теперь добавлена поддержка <a href="https://nodejs.org/en/blog/release/v10.0.0/" target="_blank">Node 10</a>.',
  },
  'v7 update': {
    action:
      'Обновите до v7 базовую структуру и интерфейс командной строки, запустив в терминале `npx @angular/cli@7 update @angular/cli@7 @angular/core@7`.',
  },
  'v7 material update': {
    action:
      'Обновите Angular Material до версии 7, запустив `npx @angular/cli@7 update @angular/material@7` в вашем терминале. Вы должны протестировать свое приложение на предмет изменений размеров и макета.',
  },
  'v7 material changes': {
    action:
      'Если вы используете тесты скриншотов, вам нужно будет перегенерировать ваши эталонные файлы скриншотов, так как было внесено множество незначительных визуальных изменений.',
  },
  'v7 material deprecations': {
    action:
      'Прекратите использовать `matRippleSpeedFactor` и `baseSpeedFactor` для ряби, вместо этого используйте конфигурацию анимации.',
  },
  'v8 update': {
    action:
      'Обновите базовую среду и интерфейс командной строки до версии 8, запустив в терминале `npx @angular/cli@8 update @angular/cli@8 @angular/core@8`, просмотрите и зафиксируйте изменения.',
  },
  'use ::ng-deep instead of /deep/': {
    action:
      'Замените `/deep/` на `::ng-deep` в своих стилях, [подробнее о стилях компонентов angular и ::ng-deep](https://angular.io/guide/component-styles#deprecated-deep--and-ng-deep). `/deep/` и `::ng-deep` устарели, но использование `::ng-deep` предпочтительнее до тех пор, пока не будет [удален из браузеров и инструментов](https://www.chromestatus.com/features/6750456638341120) полностью.',
  },
  'TypeScript 3.4': {
    action:
      'Angular теперь использует TypeScript 3.4, [подробнее об ошибках, которые могут возникнуть в результате улучшенной проверки типов](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html).',
  },
  'node 10': {
    action:
      'Убедитесь, что вы используете <a href="https://nodejs.org/dist/latest-v10.x/" target="_blank">Node 10 или более позднюю версию</a>.',
  },
  'Differential Loading': {
    action:
      'Команда сборки интерфейса командной строки теперь автоматически создает современную сборку ES2015 с минимальными полифилами и совместимую сборку ES5 для старых браузеров и загружает соответствующий файл на основе браузера. Вы можете отказаться от этого изменения, вернув для параметра `target` значение `es5` в файле tsconfig.json. Узнайте больше на [angular.io](https://angular.io/guide/deployment#differential-loading).',
  },
  'CLI Telemetry': {
    action:
      'При использовании новых версий интерфейса командной строки вас спросят, хотите ли вы разрешить обмен данными об использовании интерфейса командной строки. Вы также можете добавить свою учетную запись Google Analytics. Это позволяет нам принимать более обоснованные решения о том, каким функциям интерфейса командной строки уделять приоритетное внимание, и измерять влияние наших улучшений. Узнайте больше на [angular.io](https://angular.io/analytics).',
  },
  'static query timing': {
    action:
      "Если вы используете `ViewChild` или `ContentChild`, мы обновляем способ решения этих запросов, чтобы дать разработчикам больше контроля. Теперь вы должны указать, что обнаружение изменений должно запускаться до того, как будут установлены результаты. Пример: `@ContentChild('foo', {static: false}) foo!: ElementRef;`. `ng update` обновит ваши запросы автоматически, но сделает ваши запросы статичными для совместимости. Узнайте больше на [angular.io](https://angular.io/guide/static-query-migration).",
  },
  'v8 material update': {
    action:
      'Обновите Angular Material до версии 8, запустив `npx @angular/cli@8 update @angular/material@8` в вашем терминале.',
  },
  'deep imports': {
    action:
      'Вместо импорта из `@angular/material` вы должны делать глубокий импорт (deep imports) из конкретного компонента. Например. `@angular/material/button`. `ng update` сделает это автоматически.',
  },
  'new loadChildren': {
    action:
      'Для ленивых модулей, загружаемых через маршрутизатор, убедитесь, что вы [используете динамический импорт](https://angular.io/guide/deprecations#loadchildren-string-syntax). Импорт через строку удален в v9. `ng update` позаботится об этом автоматически. Узнайте больше на [angular.io](https://angular.io/guide/deprecations#loadchildren-string-syntax).',
  },
  'platform deprecated': {
    action:
      'Мы прекращаем поддержку `@angular/platform-webworker`, поскольку он несовместим с CLI. Запуск архитектуры рендеринга Angular в web worker не отвечал потребностям разработчика. Вы по-прежнему можете использовать веб-воркеров с Angular. Узнайте больше в нашем [руководстве web workers](https://v9.angular.io/guide/web-worker). Если у вас есть варианты использования, в которых вам это нужно, сообщите нам об этом по адресу devrel@angular.io!',
  },
  'node-sass': {
    action:
      'Мы перешли с собственного компилятора Sass на компилятор JavaScript. Чтобы вернуться к собственной версии, установите ее как `devDependency`: `npm install node-sass --save-dev`.',
  },
  'schematics async': {
    action:
      'Если вы создаете свои собственные схемы, они ранее были *потенциально* асинхронными. Начиная с версии 8.0 все схемы будут асинхронными.',
  },
  'node 10.13': {
    action:
      'Убедитесь, что вы используете <a href="https://nodejs.org/dist/latest-v10.x/" target="_blank">Node 10.13 или более позднюю версию</a>.',
  },
  'cli v8 latest': {
    action:
      'Запустите `npx @angular/cli@8 update @angular/core@8 @angular/cli@8` в каталоге вашей рабочей области, чтобы обновить до последней версии 8.x для `@angular/core` и `@angular/cli` и зафиксируйте эти изменения.',
  },
  'create commits': {
    action:
      'Вы можете дополнительно передать флаг `--create-commits` (или `-C`) командам [ng update](https://angular.io/cli/update), чтобы создать фиксацию git для каждой отдельной миграции.',
  },
  'ng update v9': {
    action:
      'Запустите `npx @angular/cli@9 update @angular/core@9 @angular/cli@9`, что приведет вас к версии 9 Angular.',
  },
  'typescript 3.8': {
    action:
      'Теперь ваш проект обновлен до TypeScript 3.8. Узнайте больше о новых проверках компилятора и ошибках, которые могут потребовать исправления проблем в вашем коде, в [TypeScript 3.7](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html) или [TypeScript 3.8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html).',
  },
  'update @angular/material': {
    action: 'Запустите `ng update @angular/material@9`.',
  },
  'update @nguniversal/hapi-engine': {
    action:
      'Если вы используете Angular Universal, запустите `npx @angular/cli@9 update @nguniversal/hapi-engine@9` или `npx @angular/cli@9 update @nguniversal/express-engine@9` в зависимости от используемого движка. Этот шаг может потребовать флаг `--force`, если какая-либо из ваших сторонних зависимостей не обновила Angular версию в своих зависимостях.',
  },
  'dependencies update': {
    action:
      'Если ваш проект зависит от других библиотек Angular, мы рекомендуем вам подумать об обновлении их до последней версии. В некоторых случаях это обновление может потребоваться для устранения несовместимости API. Проконсультируйтесь с `ng update` или `npm outdated`, чтобы узнать о ваших устаревших библиотеках.',
  },
  'ivy update': {
    action:
      'Во время обновления до версии 9 ваш проект был преобразован по мере необходимости с помощью миграции кода, чтобы удалить любые несовместимые или устаревшие вызовы API из вашей базы кода. Теперь вы можете просмотреть эти изменения и ознакомиться с [руководством по обновлению до версии 9](https://v9.angular.io/guide/updating-to-version-9), чтобы узнать больше об изменениях.',
  },
  stylesUpdate: {
    action:
      'Связанные стили и классы CSS ранее применялись со стратегией "последнее изменение побеждает", но теперь следуют определенному приоритету. Подробнее о [приоритетах стилей](https://angular.io/guide/attribute-binding#styling-precedence).',
  },
  ModuleWithProviders: {
    action:
      'Если вы являетесь автором библиотеки и у вас есть метод, возвращающий `ModuleWithProviders` (обычно через метод с именем `forRoot()`), вам необходимо указать универсальный тип. Подробнее [angular.io](https://v9.angular.io/guide/deprecations#modulewithproviders-type-without-a-generic).',
  },
  wtf: {
    action:
      'Поддержка инфраструктуры веб-трассировки в Angular устарела в версии 8. Вам следует прекратить использование каких-либо API-интерфейсов `wtf*`. Для отслеживания производительности мы рекомендуем использовать [инструменты оценки производительности браузера](https://developers.google.com/web/tools/lighthouse/audits/user-timing).',
  },
  es5browser: {
    action:
      'Удалите все флаги `es5BrowserSupport` в angular.json и установите `target` в `es2015` в tsconfig.json. Angular теперь использует ваш список браузеров, чтобы определить, нужна ли сборка ES5. `ng update` произведет миграцию автоматически.',
  },
  'ngForm selector': {
    action:
      'Если вы используете селектор элементов `ngForm` для создания Angular Forms, вы должны вместо этого использовать `ng-form`.',
  },
  'typings compilation': {
    action:
      'Мы обновили tsconfig.app.json, чтобы ограничить количество скомпилированных файлов. Если вы полагаетесь на то, что в компиляцию включаются другие файлы, такие как файл `typings.d.ts`, вам необходимо вручную добавить его в компиляцию.',
  },
  debug: {
    action:
      'В Angular 9 Ivy теперь является механизмом рендеринга по умолчанию. При возникновении любых проблем с совместимостью прочтите [Руководство по совместимости Ivy](https://angular.io/guide/ivy-compatibility).',
  },
  'express-universal-server': {
    action:
      'Если вы используете Angular Universal с `@nguniversal/express-engine` или `@nguniversal/hapi-engine`, будет создано несколько файлов резервных копий. Один из них для `server.ts`. Если этот файл отличается от файла по умолчанию, вам может потребоваться вручную скопировать некоторые изменения из `server.ts.bak` в `server.ts`.',
  },
  'ivy i18n': {
    action:
      'В Angular 9 появилась глобальная функция `$localize()`, которую необходимо загрузить, если вы зависите от интернационализации Angular (i18n). Запустите `ng add @angular/localize`, чтобы добавить необходимые пакеты и изменения кода. Обратитесь к [руководству по глобальной миграции импорта $localize](https://v9.angular.io/guide/migration-localize), чтобы узнать больше об изменениях.',
  },
  entryComponents: {
    action:
      'В своих проектах приложений вы можете удалить `entryComponents` NgModules и любое использование `ANALYZE_FOR_ENTRY_COMPONENTS`. Они больше не требуются для компилятора и среды выполнения Ivy. Вам может потребоваться сохранить их, если вы создаете библиотеку, которая будет использоваться приложением View Engine.',
  },
  'testbed-get': {
    action:
      'Если вы используете `TestBed.get`, вы должны вместо этого использовать `TestBed.inject`. Этот новый метод имеет такое же поведение, но безопасен по типу.',
  },
  $localize: {
    action:
      'Если вы используете [поддержку Angular i18n](http://angular.io/guide/i18n), вам нужно будет начать использовать `@angular/localize`. Узнайте больше о [$localize Global Import Migration](https://v9.angular.io/guide/migration-localize).',
  },
  'v10 NodeJS 12': {
    action:
      'Убедитесь, что вы используете <a href="https://nodejs.org/dist/latest-v12.x/" target="_blank">Node 12 или новее </a>.',
  },
  'ng update v10': {
    action:
      'Запустите `npx @angular/cli@10 update @angular/core@10 @angular/cli@10`, что приведет вас к версии 10 Angular.',
  },
  // 'update @angular/material': {
  //   action: 'Запустите `ng update @angular/material@10`.',
  // },
  browserlist: {
    action:
      'В новых проектах используйте имя файла `.browserslistrc` вместо `Browserslist`. `ng update` произведет миграцию автоматически.',
  },
  'v10-versions': {
    action:
      'Angular теперь требует tslint v6, tslib v2 и [TypeScript 3.9] (https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html). `ng update` произведет миграцию автоматически.',
  },
  styleext: {
    action:
      'Перестаньте использовать `styleext` или `spec` в ваших семантиках Angular. `ng update` произведет миграцию автоматически.',
  },
  'classes-without-decorators': {
    action:
      'В версии 10 классы, использующие функции Angular и не имеющие декоратора Angular, больше не поддерживаются. [Подробнее](https://v10.angular.io/guide/migration-undecorated-classes). `ng update` произведет миграцию автоматически.',
  },
  'injectable-definitions': {
    action:
      'Начиная с Angular 9, применение декораторов @Injectable для DI стало более строгим, а неполные определения поставщиков ведут себя по-другому. [Подробнее](https://v9.angular.io/guide/migration-injectable). `ng update` произведет миграцию автоматически.',
  },
  'closure-jsdoc-comments': {
    action:
      'Пакеты NPM Angular больше не содержат комментариев jsdoc, которые необходимы для использования с closure compiler (крайне редко). Эта поддержка была экспериментальной и работала только в некоторых случаях использования. Вскоре будет объявлен альтернативный рекомендуемый путь.',
  },
  'forms-number-input': {
    action:
      'Если вы используете формы Angular, поля типа `number` больше не прослушивают [события изменения](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) (эти события не обязательно запускается для каждого изменения значения), вместо этого прослушивайте [input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).',
  },
  'forms-length-input': {
    action:
      'Для проверки форм Angular валидаторы `minLength` и `maxLength` теперь проверяют, что значение элемента управления формой имеет числовое свойство длины, и проверяют длину только в том случае, если это так.',
  },
  'esm5-bundles': {
    action:
      '[Формат пакета Angular](https://g.co/ng/apf) был обновлен, чтобы удалить форматы `esm5` и `fesm5`. Они больше не распространяются в наших пакетах npm. Если вы не используете CLI, возможно, вам придется самостоятельно понизить уровень кода Angular до ES5.',
  },
  'console-errors': {
    action:
      'Предупреждения о неизвестных элементах теперь регистрируются как ошибки. Это не сломает ваше приложение, но может вызвать сбой в работе инструментов, которые не ожидают, что ничего не будет записано через `console.error`.',
  },
  'router-resolver-empty': {
    action:
      'Любой преобразователь, который возвращает `EMPTY`, отменяет навигацию. Если вы хотите, чтобы навигация продолжалась, вам нужно будет обновить преобразователи, чтобы они выдавали какое-то значение (например, `defaultIfEmpty(...)`, `of(...)`, и т.д.).',
  },
  'sw-vary-headers': {
    action:
      'Если вы используете сервисный воркер Angular и полагаетесь на ресурсы с заголовками [Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary), эти заголовки теперь игнорируются, чтобы избежать непредсказуемого поведения в браузерах. Чтобы избежать этого, [сконфигурируйте](https://angular.io/guide/service-worker-config) вашего сервис-воркера, чтобы избежать кэширования этих ресурсов.',
  },
  'expression-changed-after-checked-new': {
    action:
      'Вы можете увидеть ошибки `ExpressionChangedAfterItHasBeenChecked`, которые не были обнаружены ранее при использовании `async`. Ошибка могла раньше остаться незамеченной, потому что два `WrappedValue` считаются "равными" во всех случаях для целей проверки, даже если их соответствующие развернутые значения не равны. В версии 10 был удален `WrappedValue`.',
  },
  'property-binding-change-detection': {
    action:
      'Если у вас есть привязка свойства, такая как `[val]=(observable | async).someProperty`, это больше не будет запускать обнаружение изменений, если значение `someProperty` идентично предыдущему. Если вы полагаетесь на это, либо вручную подпишитесь и вызовите `markForCheck` по мере необходимости, либо обновите привязку, чтобы гарантировать изменение ссылки.',
  },
  'day-periods-crossing-midnight': {
    action:
      'Если вы используете `formatDate()` или `DatePipe` и любой из кодов формата `b` или `B`, логика была обновлена так, чтобы она соответствовала времени в пределах дневного периода, охватывающего полночь, поэтому она будет теперь рендерить правильный вывод, например, `night` в случае с английским языком.',
  },
  'urlmatcher-null': {
    action: 'Если вы используете `UrlMatcher`, тип теперь отражает, что он всегда может возвращать `null`.',
  },
  'v10-more-details': {
    action:
      'Для получения дополнительных сведений об устаревании, автоматической миграции и изменениях посетите [руководство angular.io](https://v10.angular.io/guide/updating-to-version-10)',
  },
  'universal-baseurl': {
    action:
      'Для пользователей Angular Universal, если вы используете `useAbsoluteUrl` для настройки `platform-server`, теперь вам также нужно указать `baseUrl`.',
  },

  'v11 ng update': {
    action:
      'Запустите `npx @angular/cli@11 update @angular/core@11 @angular/cli@11`, что приведет вас к версии 11 Angular.',
  },
  // 'update @ angular / material': { action: 'Run `npx @ angular / cli @ 11 update @ angular / material @ 11`.' },
  'v11 versions': {
    action:
      'Angular теперь требует [TypeScript 4.0](https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/). `ng update` произведет миграцию автоматически.',
  },
  'v11 browser support': {
    action:
      'Была удалена поддержка IE9, IE10 и IE mobile. Об этом было объявлено в [обновлении v10](http://blog.angular.io/version-10-of-angular-now-available-78960babd41#c357).',
  },
  'webpack5 optin': {
    action:
      'Теперь вы можете отказаться от использования webpack 5, используя Yarn и добавив `"resolutions": {"webpack": "^5.0.0"}` в свой `package.json`.',
  },
  'ng new strict prompt': {
    action:
      'При создании новых проектов вас спросят, хотите ли вы включить строгий режим. Это настроит TypeScript и компилятор Angular для более строгой проверки типов и по умолчанию применит меньшие размеры пакетов сборок. Вы можете использовать `--strict=true` или `--strict=false`, чтобы пропустить подсказку.',
  },
  'v11 router relativeLinkResolution': {
    action:
      'Если вы используете маршрутизатор, значение по умолчанию `relativeLinkResolution` изменилось с `legacy` на `corrected`. Если ваше приложение ранее использовало значение по умолчанию, не указывая значение в `ExtraOptions`, и использует относительные ссылки при переходе от дочерних элементов маршрутов с пустыми путями, вам нужно будет обновить конфигурацию вашего `RouterModule`, чтобы специально указать `legacy` для `relativeLinkResolution`. См. [Документацию](https://v11.angular.io/api/router/ExtraOptions#relativeLinkResolution) для получения дополнительных сведений.',
  },
  'router initialNavigation': {
    action:
      'В Angular Router параметры, устаревшие в v4 для `initialNavigation`, были удалены. Если вы ранее использовали `enabled` или `true`, теперь выберите `enabledNonBlocking` или `enabledBlocking`. Если раньше вы использовали `false` или `legacy_disabled`, теперь используйте `disabled`.',
  },
  'routerlink preserveQueryParams': {
    action:
      'В маршрутизаторе Angular `routerLink` параметр `preserveQueryParams` был удален, используйте вместо него `queryParamsHandling="preserve"`.',
  },
  'routerlink queryParams typing': {
    action:
      'Если вы обращались к значениям `routerLink` для `queryParams`, `fragment` или `queryParamsHandling`, вам может потребоваться ослабить ввод, чтобы также принять `undefined` и `null`.',
  },
  'viewencapsulation native removed': {
    action:
      'Параметр инкапсуляции представления компонента `ViewEncapsulation.Native` был удален. Вместо этого используйте `ViewEncapsulation.ShadowDom`. `ng update` произведет миграцию автоматически.',
  },
  'ICU expressions typechecked': {
    action:
      'Если вы используете i18n, выражения в выражениях международных компонентов для Unicode (ICU) теперь снова проверяются по типу. Это может вызвать сбои компиляции, если ошибки обнаружены в выражениях, которые появляются в ICU.',
  },
  'forms validators asyncValidators typing': {
    action:
      'Директивы в пакете `@angular/forms` использовали для использования `any[]` в качестве типа ожидаемых аргументов `validators` и ​​`asyncValidators` в конструкторах. Теперь эти аргументы правильно типизированы, поэтому, если ваш код полагается на типы конструкторов директивы формы, он может потребовать некоторых обновлений для повышения безопасности типов.',
  },
  'forms AbstractFormControl': {
    action:
      'Если вы используете Angular Forms, тип `AbstractFormControl.parent` теперь включает `null`. `ng update` произведет миграцию автоматически, но в маловероятном случае, когда ваш код тестировал родительский элемент на `undefined` со строгим равенством, вам нужно вместо этого изменить это на `===null`, поскольку родительский элемент теперь явно инициализируется с помощью `null` вместо того, чтобы оставаться неопределенным.',
  },
  'platform-webworker': {
    action:
      'Редко используемые `@angular/platform-webworker` и `@angular/platform-webworker-dynamic` устарели в версии 8 и были удалены. Запуск частей Angular в веб-воркере был экспериментом, который никогда не работал хорошо для обычных случаев использования. Angular по-прежнему отлично поддерживает [Web Workers](https://angular.io/guide/web-worker).',
  },
  'v11 slice pipe typing': {
    action:
      'канал `slice` теперь возвращает `null` для неопределенного входного значения, что согласуется с поведением большинства каналов.',
  },
  'v11 keyvalue typing': {
    action:
      'Конвейер `keyvalue` был исправлен, чтобы сообщать, что для входных объектов, имеющих цифровые клавиши, тип результата будет содержать строковое представление ключей. Это уже было так, и код просто был обновлен, чтобы отразить это. Пожалуйста, обновите потребителей вывода, если они полагались на неправильные типы. Обратите внимание, что это не влияет на случаи использования, когда входными значениями являются `Map`, поэтому, если вам нужно сохранить `number`, это эффективный способ.',
  },
  'v11 number pipe typing': {
    action: 'Числовые фильтры (`decimal`, `percent`, `currency` и т.д.) теперь явно указывают, какие типы принимаются.',
  },
  'v11 date pipe typing': { action: 'Фильтр `date` теперь явно указывает, какие типы принимаются.' },
  'v11 datetime rounding': {
    action:
      'При передаче строки в формате даты и времени в DatePipe в формате, который содержит доли миллисекунды, миллисекунды теперь всегда будут округляться в меньшую сторону, а не до ближайшей миллисекунды. Это изменение не коснется большинства приложений. Если это нежелательное поведение, рассмотрите возможность предварительной обработки строки для округления миллисекундной части перед ее передачей в `DatePipe`.',
  },
  'v11 async pipe typing': {
    action:
      'Фильтр `async` больше не утверждает, что возвращает `undefined` для ввода, который был набран как `undefined`. Обратите внимание, что код фактически возвращал `null` для неопределенных входов.',
  },
  'v11 case pipe update': {
    action:
      'Фильтры `uppercase` и `lowercase` больше не пропускают ложные значения. Теперь они сопоставляют `null` и `undefined` с `null` и вызывают исключение при недопустимом вводе (`0`, `false`, `NaN`). Это соответствует другим каналам Angular.',
  },
  'v11 router NavigationExtras typing': {
    action:
      'Если вы используете маршрутизатор с `NavigationExtras`, новые типы позволяют передавать переменную типа `NavigationExtras`, но они не разрешают объектные литералы, поскольку они могут указывать только известные характеристики. Они также не будут принимать типы, не имеющие общих свойств с теми, что указаны в `Pick`. Если это изменение затронуло вас, указывайте только те свойства из `NavigationExtras`, которые фактически используются в соответствующих вызовах функций, или используйте утверждение типа для объекта или переменной: `as NavigationExtras`.',
  },
  'v11 TestBed.overrideProvider': {
    action:
      'В ваших тестах, если вы вызываете `TestBed.overrideProvider` после инициализации `TestBed`, переопределения поставщика больше не применяются. Такое поведение согласуется с другими методами переопределения (такими как `TestBed.overrideDirective` и т.д.). Но они выдают ошибку, чтобы указать на это. Ранее проверка отсутствовала в функции `TestBed.overrideProvider`. Если вы видите эту ошибку, вам следует переместить вызовы `TestBed.overrideProvider` до завершения инициализации `TestBed`.',
  },
  'v11 router RouteReuseStrategy': {
    action:
      'Если вы используете `RouteReuseStrategy` маршрутизатора, порядок аргументов изменился. При вызове `RouteReuseStrategy#shouldReuseRoute` ранее при оценке дочерних маршрутов они будут вызываться с заменой аргументов `future` и `current`. Если ваш `RouteReuseStrategy` конкретно полагается только на будущее или текущее состояние моментального снимка, вам может потребоваться обновить использование реализации `shouldReuseRoute` для `future` и `current` `ActivateRouteSnapshots`',
  },
  'v11 locale data readonly': {
    action:
      'Если вы используете массивы локальных данных, этот API теперь будет возвращать массивы только для чтения. Если вы их изменяли (например, вызывали `sort()`, `push()`, `splice()` и т.д.). Ваш код больше не будет компилироваться. Если вам нужно изменить массив, теперь вы должны взять копию (например, вызвав `slice()`) и изменить копию.',
  },
  'v11 CollectionChangeRecord': {
    action:
      'При обнаружении изменений был удален `CollectionChangeRecord`, используйте вместо него `IterableChangeRecord`.',
  },
  'v11 forms async validators': {
    action:
      'Если вы используете Angular Forms с асинхронными валидаторами, определенными во время инициализации для экземпляров класса `FormControl`, `FormGroup` или `FormArray`, событие изменения статуса ранее не генерировалось после асинхронного валидатора. Это было изменено, так что событие состояния отправляется в наблюдаемый объект `statusChanges`. Если ваш код основан на старом поведении, вы можете отфильтровать/игнорировать это дополнительное событие изменения статуса.',
  },

  'v12 ng update': {
    action:
      'Запустите `npx @angular/cli@12 update @angular/core@ @angular/cli@12`, что должно привести вас к версии 12 Angular.',
  },
  // 'update @ angular / material': { action: 'Run `npx @ angular / cli @ 12 update @ angular / material @ 12`.' },
  'v12 versions': {
    action:
      'Angular теперь требует [TypeScript 4.2](https://devblogs.microsoft.com/typescript/announcing-typescript-4-2/). `ng update` произведет миграцию автоматически.',
  },
  'v12 browser support': {
    action:
      'Поддержка IE11 устарела. Подробности см. В [RFC для удаления IE11](https://github.com/angular/angular/issues/41840).',
  },
  'v12 minimum  Node.js version': {
    action: 'Вы больше не можете использовать Angular с Node.js версии 10 или более ранней',
  },
  'v12 `XhrFactory` relocation': {
    action: 'Измените импорт `XhrFactory` с `@angular/common/http` на `@angular/common`.',
  },
  'v12 i18n message ids': {
    action:
      'Если вы полагаетесь на устаревшие идентификаторы сообщений `i18n`, используйте инструмент `localize-migrate`, чтобы [отойти от них](https://angular.io/guide/migration-legacy-message-id).',
  },
  'v12 deprecates `emitDistinctChangesOnly': {
    action:
      'Если вы используете` emitDistinctChangesOnly` для настройки запросов `@ContentChildren` и `@ViewChildren`, вам может потребоваться обновить его значение до `false`, чтобы привести его в соответствие с его предыдущим поведением. В v12 `emitDistinctChangesOnly` имеет значение по умолчанию `true`, и в будущих выпусках мы удалим этот параметр конфигурации, чтобы предотвратить запуск ненужных изменений.',
  },
  'v12 prod by default': {
    action:
      'Вы можете запустить необязательную миграцию для включения производственных сборок по умолчанию `npx @ angular / cli @ 12 update @ angular / cli @ 12 --migrate-only production-by-default`.',
  },
  'v12 min and max form attributes': {
    action:
      'Если вы используете Angular Forms, атрибуты `min` и `max` в `<input type="number">` теперь будут запускать логику проверки.',
  },
  'v12 `emitEvent` in `FormArray` and `FormGroup`': {
    action:
      'Если в вашем приложении есть настраиваемые классы, которые расширяют классы `FormArray` или `FormGroup` и переопределяют вышеупомянутые методы, вам может потребоваться обновить вашу реализацию.',
  },
  'v12 zone.js minimum version': {
    action: 'Обновить zone.js до версии 0.11.4. `ng update` обновит эту зависимость автоматически.',
  },
  'v12 `HttpParams` method params update': {
    action:
      'Если вы расширите класс `HttpParams`, вам, возможно, придется обновить подпись его метода, чтобы отразить изменения в типах параметров.',
  },
  'v12 `routerLinkActiveOptions`': {
    action:
      '`routerLinkActiveOptions` объекта `RouterLinkActive` теперь имеет более конкретный тип. Вам может потребоваться обновить код доступа к этому свойству, чтобы он соответствовал изменениям.',
  },
  'v12 `APP_INITIALIZER`': {
    action:
      'Обратные вызовы инициализатора теперь имеют более конкретные типы возврата, что может потребовать обновления вашего кода, если вы получаете экземпляр `APP_INITIALIZER` через `Injector.get` или `TestBed.inject`.',
  },
  'v12 fragment typings': {
    action:
      'Теперь фрагменты маршрутизатора могут быть нулевыми. Добавьте проверки `null`, чтобы избежать сбоя TypeScript с ошибками типа.',
  },
  'v12 `ng.getDirectives`': {
    action:
      'Убедитесь, что вы не полагаетесь на то, что `ng.getDirectives` выдает ошибку, если он не может найти директиву, связанную с конкретным узлом DOM.',
  },
  'v12 `optimization.styles.inlineCritical`': {
    action:
      'Проверьте параметр `optimisation.styles.inlineCritical` в вашем файле angular.json. Теперь по умолчанию он имеет значение `true`. Помните, что вся опция `optimisation` может быть установлена ​​как логическая, которая установит для всех подопций значения по умолчанию.',
  },
};
// @TODO This console log is required or the locale won't be registered
console.log(`ru-RU registered`);
registerLocalization('ru-RU', steps, uiLabels);
