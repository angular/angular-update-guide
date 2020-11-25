import { LocalizedSteps, registerLocalization, LocalizedLabels } from '../localization';

const uiLabels: LocalizedLabels = {
  'Angular Update Guide': 'Angular 更新指南',
  'Select the options matching your project:': '选择与您的项目匹配的选项:',
  'Angular Versions': 'Angular 版本',
  'From': '从',
  'To': '到',
  'Warning': '警告',
  'Plans for releases after the current major release are not finalized and may change. These recommendations are based on scheduled deprecations.':
    '当前主要版本之后的发布计划尚未最终确定，并且可能会更改。这些建议是基于计划中的弃用的。',
  'We do not currently support downgrading versions of Angular.':
    '我们目前不支持降级 Angular 版本。',
  'We do not recommend moving across multiple major versions.':
    '我们不建议跨多个主要版本进行迁移。',
  'App Complexity': '应用程序复杂度',
  'Basic': '基本',
  'Medium': '中等',
  'Advanced': '高级',
  'Show update information relevant to all Angular developers.':
    '显示与所有 Angular 开发人员相关的更新信息。',
  'Show more specific update information relevant to around 10% of Angular developers.':
    '显示与大约 10％ 的 Angular 开发人员相关的更具体的更新信息。',
  'Show all the information we have about the update.': '显示我们拥有的有关更新的所有信息。',
  'Other Dependencies': '其他依赖',
  'I use': '使用了',
  'to combine AngularJS & Angular': '兼容 AngularJS 和 Angular',
  'Package Manager': '包管理器',
  'Show me how to update!': '告诉我如何更新',
  'Before Updating': '更新前',
  // tslint:disable-next-line: quotemark
  "There aren't currently any changes needed before moving between these versions.":
    '目前在这两个版本间变化无需任何改变。',
  'During the Update': '更新期间',
  // tslint:disable-next-line: quotemark
  "There aren't currently any recommendations for moving between these versions.":
    '目前在这两个版本间变化没有任何建议。',
  'After the Update': '更新后',
  // tslint:disable-next-line: quotemark
  "There aren't currently any changes needed after moving between these versions.":
    '目前在这两个版本间变化后没有任何改变。',
  'for': '对于',
  'Basic Apps': '基本应用程序',
  'Medium Apps': '中等应用程序',
  'Advanced Apps': '高级应用程序',
};

const steps: LocalizedSteps = {
  'Extends OnInit': {
    action:
      '确保您不对任何生命周期事件使用 `extends OnInit` 或 `extends`，而应使用 `implements <lifecycle event>`'
  },
  'Deep Imports': {
    action:
      '停止使用深度导入(deep imports)，这些符号现在已标记为 ɵ，并且不属于我们的公共API。'
  },
  'invokeElementMethod': {
    action:
      '停止使用 `Renderer.invokeElementMethod`，因为该方法已被删除，目前没有替代方法。'
  },
  'Non Animations Module': {
    action:
      '如果您在应用程序中使用动画，你应该在 `NgModule` 导入来自 `@angular/platform-browser/animations` 的 `BrowserAnimationsModule`。'
  },
  'Native Form Validation': {
    action:
      '当您包含 `FormsModule` 时，Angular 开始向表单元素添加一个 `novalidate` 属性，重新启用原始(Native)表单验证使用 `ngNoForm` 或添加 `ngNativeValidate`。'
  },
  'RootRenderer': {
    action:
      '用 `RendererFactoryV2` 代替 `RootRenderer`。'
  },
  'downgradeInjectable': {
    action:
      '`upgrade/static/downgradeInjectable` 的返回值已更改。'
  },
  'Animations Tests': {
    action:
      '如果您使用动画和测试，请将 `mods[1].NoopAnimationsModule` 添加到您的 `TestBed.initTestEnvironment` 调用中。'
  },
  'DefaultIterableDiffer': {
    action:
      '停止使用 `DefaultIterableDiffer`， `KeyValueDiffers#factories`，或 `IterableDiffers#factories`'
  },
  'Template Tag': {
    action: '将您的 `template` 标签重命名为 `ng-template`'
  },
  'OpaqueToken': {
    action: '用 `InjectionToken` 替换 `OpaqueToken`。'
  },
  'DifferFactory': {
    action: '如果调用 `DifferFactory.create(...)`，则删除 `ChangeDetectorRef` 参数。'
  },
  'ErrorHandler Parameter': {
    action: '停用所有将参数传递给 ErrorHandler 的构造函数'
  },
  'ngProbeToken': {
    action: '如果使用 ngProbeToken，请确保从 @angular/core 而不是 @angular/platform-browser 导入'
  },
  'TrackByFn': {
    action: '如果您使用 TrackByFn，请改用 TrackByFunction'
  },
  'i18n Pipe Change': {
    action: '如果您依赖日期(date)，货币(currency)，十进制(decimal)或百分比管道(percent pipes)，则在 5 中您会看到格式的细微变化。除了 en-us 语言环境的应用程序，都需要选择从 `@angular/common/i18n_data/locale_fr` 和 registerLocaleData(local) 中导入 `locale_extended_fr`。'
  },
  'gendir': {
    action: '不要依赖 `gendir`，而要使用 `skipTemplateCodeGen`。<a href="https://github.com/angular/angular/issues/19339#issuecomment-332607471" target="_blank">了解详情</a>'
  },
  'Dynamic ngUpgrade': {
    action: '替换从 `@angular/upgrade` 导入的 `downgradeComponent`、`downgradeInjectable`、`UpgradeComponent` 和 `UpgradeModule`。而是在 `@angular/upgrade/static` 中使用新版本'
  },
  'Animations in Core': {
    action: '如果从 @angular/core 导入了任何动画服务(animations services)或工具(tools)，则应从 @angular/animations 导入它们。'
  },
  'ngOutletContext': {
    action: '将 `ngOutletContext` 替换为 `ngTemplateOutletContext`.'
  },
  'collectionChangeRecord': {
    action: '将 `CollectionChangeRecord` 替换为 `IterableChangeRecord`'
  },
  'Renderer': {
    action: '无论在那里使用了 Renderer，现在都使用 Renderer2'
  },
  'Router Query Params': {
    action: '如果使用了 preserveQueryParams，请使用 queryParamsHandling 代替'
  },
  'Http': {
    action: '如果使用了旧版的 `HttpModule` 和 `Http` 服务，请切换到 `HttpClientModule` 和 `HttpClient` 服务。HttpClient 简化了默认的 ergonomics(不再需要映射(map)到JSON)，并且现在支持类型化的返回值和拦截器。进一步了解 <a href="https://angular.io/guide/http" target="_blank">https://angular.io/guide/http</a>'
  },
  'DOCUMENT in @angular/platform-browser': {
    action: '如果使用了 @angular/platform-browser 的 DOCUMENT，要改为从 @angular/common 导入'
  },
  'ReflectiveInjector': {
    action: '无论在那里使用了 ReflectionInjector，现在都使用 StaticInjector'
  },
  'Whitespace': {
    action: '在 `tsconfig.json` 文件中，将 `angularCompilerOptions` 下的 `preserveWhitespaces` 值设置为 `off`(v6 默认为 off) 以获得此设置的好处'
  },
  'node 8': {
    action: '请确保使用的是 <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 8 或更高版本</a>'
  },
  'Update to CLI v6': {
    action: '在本地更新 Angular CLI，并将配置更新到<a href="https://github.com/angular/angular-cli/wiki/angular-workspace" target="_blank">新的 angular.json 格式</a>通过运行以下命令:<br/>`${packageManagerInstall} @angular/cli@6`<br/>`ng update @angular/cli@6`<br/>'
  },
  'cli v6 scripts': {
    action: '使用新的 Angular CLI 命令更新 package.json 中的 `scripts`。现在所有的 CLI 命令都使用两个破折号来表示标志(flags)(例如 `ng build --prod --source-map`p)，以便与 POSIX 兼容。'
  },
  'Update to Angular v6': {
    action: '将所有 Angular 框架软件包更新到 v6，并更新正确版本的 RxJS 和 TypeScript。<br/>`ng update @angular/core@6`<br/>更新后，TypeScript 和 RxJS 将更准确地作出类型检查，这可能会暴露现有程序中的类型错误。'
  },
  'forms v6': {
    action: '现在在 Angular Forms 中，调用 `AbstractControl#markAsPending` 时，`AbstractControl#statusChanges` 将发出一个 `PENDING` 事件。如果要从 `statusChanges` 中筛选或检查事件，请确保在调用 `markAsPending` 时考虑新事件。'
  },
  'animations timing': {
    action: '如果在禁用区域(disabled Zone)内从 `AnimationEvent` 使用 totalTime，它将不再报告时间 0。要检测动画事件是否报告了禁用动画，可以使用 `event.disabled` 属性代替。'
  },
  'ngModel on form control': {
    action: '在 v6 中不推荐使用 ngModel 和 ngModelChange 事件与反应式表单指令(reactive form directives)，而在 v7 中则取消了这个不赞成(deprecated)。'
  },
  'ngModelChange order': {
    action: 'ngModelChange 现在在其控件的 value/validity 更新后发出，而不是在更新之前，以更好地匹配预期。如果依赖于这些事件的顺序，则需要跟踪组件中的旧值。'
  },
  'Update Dependencies for v6': {
    action: '将 Angular Material 更新到最新版本。<br/>`ng Update@Angular/Material`<br/>这也会自动迁移不推荐使用的 API。'
  },
  'strictPropertyInitializer': {
    action: '如果您已将 TypeScript 配置为严格(如果在 `tsconfig.json` 文件中将 `strict` 设置为 `true`)，请更新 `tsconfig.json` 以禁用 `strictPropertyInitialization` 或将属性初始化从 `ngOnInit` 中移到构造函数。您可以在<a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization"> TypeScript 2.7 发行说明</a>了解有关此的更多信息。'
  },
  'update to RxJS 6': {
    action: '移除 RxJS 5 不推荐使用的功能使用 <a href="https://github.com/ReactiveX/rxjs-tslint" target="_blank">rxjs-tslint</a> 自动更新规则<br/>在大多数应用程序中，这需要运行以下两个命令:<br/>`npx rxjs-tslint`<br/>`rxjs-5-to-6-migrate -p src/tsconfig.app.json`'
  },
  'remove rxjs-compat': {
    action: '一旦依赖更新到 RxJS 6，请移除 `rxjs-compat`.'
  },
  'use files instead of versionedFiles': {
    action: '如果使用了 Angular Service worker，使用 `files` 替代 `versionedFiles`'
  },
  'TypeScript 3.1': {
    action: 'Angular 现在使用 TypeScript 3.1，了解更多信息：<a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html" target="_blank">https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html</a>'
  },
  'Node 10': {
    action: 'Angular 现在增加了对 Node 10 的支持: <a href="https://nodejs.org/en/blog/release/v10.0.0/" target="_blank">https://nodejs.org/en/blog/release/v10.0.0/</a>'
  },
  'v7 update': {
    action: '在终端中运行 `ng update @angular/cli@7 @angular/core@7` 更新 CLI 和核心框架到 v7。'
  },
  'v7 material update': {
    action: '执行 `ng update @angular/material`，更新到 Angular 7、Angular 8、Angular 9、Angular 10，请对应执行 `ng update @angular/material@7`、`ng update @angular/material@8`、`ng update @angular/material@9`、`ng update @angular/material@10`'
  },
  'v7 material changes': {
    action: '如果使用屏幕截图作为测试结果，则需要重新生成屏幕截图文件，因为进行了许多次小的视觉调整。'
  },
  'v7 material deprecations': {
    action: '停止使用 `matRippleSpeedFactor` 和 `baseSpeedFactor` 产生 ripples，使用动画配置(Animation config)替代'
  },
  'v8 update': {
    action: '在终端中运行 `ng update @angular/cli@8 @angular/core@8` 更新 CLI 和核心框架到 v8。'
  },
  'use ::ng-deep instead of /deep/': {
    action: '使用 `::ng-deep` 替代 `/deep/`, <a href="https://angular.io/guide/component-styles#deprecated-deep--and-ng-deep" target="_blank">了解有关 Angular 组件样式和 ::ng-deep 的更多信息</a>。`/deep/` 和 `::ng-deep` 都不推荐使用，在<a href="https://www.chromestatus.com/features/6750456638341120" target="_blank">从浏览器和工具(tools)中移除 shadow-piercing descendant 组合器</a>前最好使用 `::ng-deep`。'
  },
  'TypeScript 3.4': {
    action: 'Angular 现在使用 TypeScript 3.4，<a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html" target="_blank">阅读更多关于改进类型检查可能产生的错误的信息</a>'
  },
  'node 10': {
    action: '确保正在使用 <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 10 或更高版本</a>'
  },
  'Differential Loading': {
    action: 'CLI 的 build 命令现在可以自动创建一个具有最少 polyfill 的 ES6 构建(build)，和一个适用于较旧浏览器的兼容 ES5 构建，并根据浏览器加载适当的文件。您可以通过在 `tsconfig.json` 中将 `target` 设置为 `es5` 来取消此更改。<a href="https://angular.io/guide/deployment#differential-loading" target="_blank">了解详细</a>'
  },
  'CLI Telemetry': {
    action: '使用新版本的 CLI 时，将询问您是否要选择共享 CLI 使用数据。您也可以添加自己的 Google Analytics 帐户。这样，我们就可以优先考虑哪些 CLI 功能，从而做出更好的决策，并衡量改进的影响。<a href="https://angular.io/analytics" target="_blank">了解详细</a>'
  },
  'static query timing': {
    action: '如果您使用 `ViewChild` 或 `ContentChild`，则我们将更新解决这些查询的方式，以使开发人员可以更好地控制。现在，您必须指定更改检测应在设置结果之前运行。例如：`@ContentChild(\'foo\', {static: false}) foo !: ElementRef;`. `ng update` 会自动更新您的查询，但会因为使您的查询成为 `static` 而导致兼容性问题。<a href="https://angular.io/guide/static-query-migration" target="_blank">了解详细</a>'
  },
  'v8 material update': {
    action: '执行 `ng update @angular/material`，更新到 Angular 7、Angular 8、Angular 9、Angular 10，请对应执行 `ng update @angular/material@7`、`ng update @angular/material@8`、`ng update @angular/material@9`、`ng update @angular/material@10`'
  },
  'deep imports': {
    action: '与其从 `@angular/material` 中导入，不如从特定组件中深度导入。例如： `@angular/material/button`。`ng update` 将自动为您执行此操作。'
  },
  'new loadChildren': {
    action: '对于通过路由器延迟加载的模块，请确保您正在<a href="https://angular.io/guide/deprecations#loadchildren-string-syntax" target="_blank">使用动态导入</a>。在 v9 中删除了通过字符串导入。`ng update` 会自动处理。'
  },
  'platform deprecated': {
    action: '我们不建议使用 `@angular/platform-webworker`，因为它与 CLI 不兼容。在 Web Worker 中运行 Angular 的渲染架构无法满足开发人员的需求。您仍然可以将Web worker与Angular一起使用。通过 <a href="https://v9.angular.io/guide/web-worker" target="_blank">Web worker 指南</a>了解更多。如果您有需要的用例，请通过 devrel@angular.io 与我们联系！'
  },
  'node-sass': {
    action: '我们已经从本地 Sass 编译器切换到 JavaScript 编译器。要切换回 native 版本，请将其安装为devDependency：`npm install node-sass --save-dev`。'
  },
  'schematics async': {
    action: '如果要构建自己的 Schematics，它们可能(potentially)是异步(asynchronous)的。从 8.0 开始，Schematics 都是异步的。'
  },
  'node 10.13': {
    action: '确保正在使用 <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 10.13 或更高版本</a>。'
  },
  'cli v8 latest': {
    action: '在工作区目录中运行 `ng update @angular/core@8 @angular/cli@8` 以更新到最新的 8.x 版本的 `@angular/core` 和 `@angular/cli` 并提交这些更改。'
  },
  'create commits': {
    action: '您可以选择将 `--create-commits` (或 `-C`)标志传递给 <a href="https://angular.io/cli/update" target="_blank">ng update</a> 命令，以针对每次迁移创建 git commit。'
  },
  'ng update v9': {
    action: '在终端中运行 `ng update @angular/cli@9 @angular/core@8` 更新 CLI 和核心框架到 v9。'
  },
  'typescript 3.8': {
    action: '您的项目现已更新为 TypeScript 3.8，在 <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html" target="_blank">TypeScript 3.7 公告</a> 或 <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html" target="_blank">TypeScript 3.8 公告</a>阅读有关新编译器检查和错误的详细信息，这些检查和错误可能需要您修复代码中的问题。'
  },
  // recommendations.ts 中有多个 'update @angular/material'，这里翻译为通用版本
  'update @angular/material': {
    action: '执行 `ng update @angular/material`，更新到 Angular 7、Angular 8、Angular 9、Angular 10，请对应执行 `ng update @angular/material@7`、`ng update @angular/material@8`、`ng update @angular/material@9`、`ng update @angular/material@10`'
  },
  'update @nguniversal/hapi-engine': {
    action: '如果您使用 Angular Universal，请根据您使用的引擎运行 `ng update @nguniversal/hapi-engine` 或 `ng update @nguniversal/express-engine`。如果您有第三方依赖项尚未更新其对等依赖项的 Angular 版本，则此步骤可能需要 `--force` 标志(flag)。'
  },
  'dependencies update': {
    action: '如果您的项目依赖于其他 Angular 库，我们建议您考虑更新到其最新版本。在某些情况下，可能需要此更新才能解决 API 不兼容的问题。请参考 `ng update` 或 `npm outd` 来了解您过时的库。'
  },
  'ivy update': {
    action: '在更新到版本 9 的过程中，需要通过代码迁移对项目进行转换，以便从代码库中删除所有不兼容或不建议使用的 API 调用。您现在可以查看这些更改，并查阅<a href="https://v9.angular.io/guide/updating-to-version-9" target="_blank">更新至版本 9 </a>以了解有关更改的更多信息。'
  },
  'stylesUpdate': {
    action: '绑定的 CSS 样式和类以前是“以最终修改为准”的策略来应用的，但是现在遵循已定义的优先级。进一步了解<a href="https://angular.io/guide/style-precedence" target="_blank">样式优先</a>。'
  },
  'ModuleWithProviders': {
    action: '如果您是库(library)的作者，并且有返回 `ModuleWithProviders` 的方法(通常通过名为 `forRoot()` 的方法)，则需要指定泛型。<a href="https://v9.angular.io/guide/deprecations#modulewithproviders-type-without-a-generic" target="_blank">了解更多</a>'
  },
  'wtf': {
    action: '在版本 8 中已弃用了对 Angular 中的 Web 跟踪框架的支持。您应该停止使用所有 `wtf*`API。要进行性能跟踪，我们建议使用<a href="https://developers.google.com/web/tools/lighthouse/audits/user-timing" target="_blank">浏览器性能工具</a>。'
  },
  'es5browser': {
    action: '删除 `angular.json` 中的 `es5BrowserSupport`，并在 `tsconfig.json` 中将 `target` 设置为 `es2015`。Angular 现在使用您的浏览器列表来确定是否需要 ES5 构建。ng update 将自动迁移此项。'
  },
  'ngForm selector': {
    action: '如果您使用 `ngForm` 元素选择器来创建 Angular Forms，则应该使用 `ng-form`。'
  },
  'typings compilation': {
    action: '我们更新了 `tsconfig.app.json` 以限制编译的文件。如果您依赖于编译中包含的其他文件，例如 `typings.d.ts` 文件，则需要手动将其添加到编译中。'
  },
  'debug': {
    action: 'Angular 9 Ivy 是现在默认的渲染引擎，可能出现的兼容性问题，请阅读 <a href="https://angular.io/guide/ivy-compatibility" target="_blank">Ivy 兼容性指南</a>。'
  },
  'ngcc postinstall': {
    action: '如果您依赖于许多 Angular 库，则可以考虑<a href="https://v9.angular.io/guide/ivy#speeding-up-ngcc-compilation" target="_blank">通过对 package.json 进行少量更改</a>来调用 npm `postinstall` 脚本中的 `ngcc`(Angular Compatibility Compiler)来加快构建速度。'
  },
  'express-universal-server': {
    action: '如果您将 Angular Universal 与 `@nguniversal/express-engine` 或 `@nguniversal/hapi-engine` 一起使用，则会创建多个备份文件。其中一个用于 `server.ts`。如果此文件与默认文件不符，则可能需要手动将一些更改从 `server.ts.bak` 复制到 `server.ts`。'
  },
  'ivy i18n': {
    action: 'Angular 9 引入了一个全局的 `$localize()` 函数，如果您依赖于 Angular 的国际化(i18n)，则需要加载该函数。运行 `ng add @angular/localize` 添加必要的软件包和代码修改。请参阅 <a href="https://v9.angular.io/guide/migration-localize" target="_blank">$localize 全局导入迁移指南</a>以了解有关更改的更多信息。'
  },
  'entryComponents': {
    action: '如果您在 NgModules 中指定了 `entryComponents` 或使用了 `ANALYZE_FOR_ENTRY_COMPONENTS`，则可以将其删除。Ivy 和运行时不再需要它们。'
  },
  'testbed-get': {
    action: '如果您使用 `TestBed.get`，则应改用 `TestBed.inject`。此新方法具有相同的行为，且类型安全。'
  },
  '$localize': {
    action: '如果您使用 Angular 的 i18n 支持，则需要开始使用 `@angular/localize`。请参阅 <a href="https://v9.angular.io/guide/migration-localize" target="_blank">$localize 全局导入迁移指南</a>以了解有关更改的更多信息。'
  },

  'ng update v10': {
    action: '在终端中运行 `ng update @angular/cli@10 @angular/core@10` 更新 CLI 和核心框架到 v10。'
  },
  'browserlist': {
    action: '新项目使用文件名 `.browserslistrc` 而不是 `browserslist` 。ng update 将自动迁移此项。'
  },
  'v10-versions': {
    action: 'Angular 现在需要 `tslint` v6，`tslib` v2 和 <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html" target="_blank">TypeScript 3.9</a>。ng update 将自动迁移此项。'
  },
  'styleext': {
    action: '在您的 Angular 原理图(schematics)中停止使用 `styleext` 或 `spec`。ng update 将自动迁移此项。'
  },
  'classes-without-decorators': {
    action: '在版本10中，不再支持使用Angular功能且没有Angular装饰器的类。<a href="https://v10.angular.io/guide/migration-undecorated-classes" target="_blank">了解更多</a>。ng update 将自动迁移此项。'
  },
  'injectable-definitions': {
    action: '从 Angular 9 开始，对 DI 的 @Injectable 装饰器的实施更加严格，不完整的提供程序定义的行为也有所不同。<a href="https://v9.angular.io/guide/migration-injectable" target="_blank">了解更多</a>。ng update 将自动迁移此项。'
  },
  'closure-jsdoc-comments': {
    action: 'Angular 的 NPM 软件包不再包含 jsdoc 注释，这是与闭包编译器一起使用所必需的(极为罕见)。这种支持是实验性的，仅在某些用例中有效。不久将宣布一条替代的推荐路线。'
  },
  'forms-number-input': {
    action: '如果您使用 Angular 表单，则 `number` 类型的输入将不再监听<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/change_event" target="_blank">更改事件</a>(此事件不必为每个更改触发该值)，而监听<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/input_event" target="_blank">输入事件</a>。'
  },
  'forms-length-input': {
    action: '对于 Angular 表单验证，`minLength` 和 `maxLength` 验证器将验证表单控件的值的 length 属性。'
  },
  'esm5-bundles': {
    action: '<a href="https://g.co/ng/apf" target="_blank">Angular 包格式</a>已更新，已删除 `esm5` 和 `fesm5` 格式。这些不再分发到 npm 软件包中。如果您不使用 CLI，则可能需要自己将 Angular 代码降级为 ES5。'
  },
  'console-errors': {
    action: '有关未知元素的警告现在记录为错误。这不会破坏您的应用程序，但可能会使一些工具无法通过 `console.error` 记录任何东西。'
  },
  'router-resolver-empty': {
    action: '所有返回 `EMPTY` 的解析器(resolver)都将取消导航(navigation)。如果要允许导航继续进行，则需要更新解析器以发出一些值(例如，`defaultIfEmpty(...)`，`of(...)`等)。'
  },
  'sw-vary-headers': {
    action: '如果您使用 Angular Service Worker 并通过 <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary" target="_blank">Vary Headers</a> 依赖资源，则现在将忽略这些 Headers 以避免跨浏览器的行为出现不可预测的情况。为了避免这种情况，请<a href="https://angular.io/guide/service-worker-config" target="_blank">配置 service worker</a> 以避免缓存这些资源。'
  },
  'expression-changed-after-checked-new': {
    action: '您可能会看到在使用 `async` 管道之前未检测到的 `ExpressionChangedAfterItHaHasBeenChecked` 错误。该错误以前可能没有被检测到，因为两个 `WrappedValues` 在所有情况下都被视为“相等”，即使检查时未将其各自的未包装值。在版本 10 中，`WrappedValue` 已被删除。'
  },
  'property-binding-change-detection': {
    action: '如果您具有属性绑定，例如 `[val]=(observable | async).someProperty`，则如果 `someProperty` 的值与先前的发射(emit)相同，则它将不再触发更改检测。如果您依赖于此，请根据需要手动订阅并调用 `markForCheck` 或更新绑定以确保引用更改。'
  },
  'day-periods-crossing-midnight': {
    action: '如果您使用 `formatDate()` 或 `DatePipe` 以及 `b` 或 `B` 格式的代码，则逻辑已更新，以便与一天中跨越午夜的时间段相匹配，因此它现在将呈现正确的输出，例如在英语中为“night”。'
  },
  'urlmatcher-null': {
    action: '如果您使用 `UrlMatcher`，现在类型反映出它始终可以返回 `null`。'
  },
  'v10-more-details': {
    action: '有关弃用，自动迁移和更改的更多详细信息，请访问 <a href="https://angular.io/guide/updating-to-version-10" target="_blank">Angular 更新到版本 10</a>'
  },
  'universal-baseurl': {
    action: '对于 Angular Universal 用户，如果使用 `useAbsoluteUrl` 设置 `platform-server`，则现在还需要指定 `baseUrl`。'
  },
  'v11 ng update': {
    action: '运行 `ng update @angular/core@11 @angular/cli@11`， 更新 CLI 和核心框架到 v11。'
  },
  'v11 versions': {
    action: 'Angular 现在需要 <a href="https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/" target="_blank">TypeScript 4.0</a>。ng update 将自动迁移此项。'
  },
  'v11 browser support': {
    action: '不再支持 IE9，IE10 和 IE mobile。这是在 <a href="http://blog.angular.io/version-10-of-angular-now-available-78960babd41#c357" target="_blank">Angular 版本 10 更新</a> 中宣布的。'
  },
  'webpack5 optin': {
    action: '现在可以通过使用 Yarn 且在 `package.json` 中添加 `"resolutions": {"webpack": "^5.0.0"}`  来选择使用 webpack 5。'
  },
  'ng new strict prompt': {
    action: '生成新项目时，将询问您是否要启用严格模式。这将配置 TypeScript 和 Angular 编译器以进行更严格的类型检查，并默认应用更小的包预算(bundle budgets)。可以使用 `--strict=true` 或 `--strict=false` 跳过提示。'
  },
  'v11 router relativeLinkResolution': {
    action: '如果您使用路由(Router)，则 `relativeLinkResolution` 的默认值已从 `legacy` 改为 `corrected`。如果您的应用程序以前未在 ExtraOptions 中指定值而使用了默认值，并且在从空路径路由的子级导航时使用相对链接(relative links)，则需要更新 `RouterModule` 的配置，以专门为 `relativeLinkResolution` 指定 `legacy`。有关更多详细信息，请参阅<a href="https://v11.angular.io/api/router/ExtraOptions#relativeLinkResolution" target="_blank">文档</a>。'
  },
  'router initialNavigation': {
    action: '在 Angular 路由(Router)中，v4 中为弃用的选项 `initialNavigation` 已被删除。如果您以前使用过 `enabled` 或 `true`，则现在选择 `enabledNonBlocking` 或 `enabledBlocking`。如果您以前使用过 `false` 或 `legacy_disabled`，现在使用 `disabled`。'
  },
  'routerlink preserveQueryParams': {
    action: '在 Angular 路由(Router)的 `routerLink` 中，`preserveQueryParams` 已被删除，请改用 `queryParamsHandling="preserve"`。'
  },
  'routerlink queryParams typing': {
    action: '如果访问的是 `queryParams`、`fragment`或 `queryParamsHandling` 的 `routerLink` 值，则可能需要放宽类型以同时接受 `undefined` 和 `null`。'
  },
  'viewencapsulation native removed': {
    action: '组件视图封装选项 `ViewEncapsulation.Native` 已被删除。使用 `ViewEncapsulation.ShadowDom` 代替。ng update 将自动迁移此项。'
  },
  'ICU expressions typechecked': {
    action: '如果使用 i18n，现在将再次检查 Unicode 国际组件(ICU)表达式中的表达式。如果在 ICU 中出现的表达式中发现错误，这可能会导致编译失败。'
  },
  'forms validators asyncValidators typing': {
    action: '`@angular/forms` 包中的指令过去将 `any[]` 作为构造函数中预期的 `validators` 和 `asyncValidators` 参数的类型。现在这些参数类型正确，因此，如果代码依赖于 `@angular/forms` 的指令构造函数类型，则可能需要进行一些更新以提高类型安全性。'
  },
  'forms AbstractFormControl': {
    action: '如果您使用 Angular Forms，则 `AbstractFormControl.parent` 的类型现在包含 null。ng update 将自动迁移此项。但是在一个不太可能的情况下，您的代码是针对 undefined 和 strict equality 来测试父对象的，因此需要将其改为 `=== null`，因为父对象现在显式地用 `null` 初始化，而不是保持 undefined。'
  },
  'platform-webworker': {
    action: '在 v8 中已弃用了很少使用的 `@angular/platform-webworker` 和 `@angular/platform-webworker-dynamic`，并已将其删除。在 Web worker 中运行 Angular 的部分内容是一项实验，在常见的用例中效果不佳。Angular 仍然对 <a href="https://angular.io/guide/web-worker" target="_blank">Web Workers</a> 有很好的支持。'
  },
  'v11 slice pipe typing': {
    action: '`slice` 管道现在为未定义的输入值返回 null，这与大多数管道的行为一致。'
  },
  'v11 keyvalue typing': {
    action: '`keyvalue` 管道已修复，可以报告具有数字 key 的输入对象，结果类型将包含键的字符串表示形式。已经是这种情况，并且仅对代码进行了更新以反映这一点。如果他们依赖不正确的类型，请更新管道输出的使用者。请注意，这不会影响输入值为 `Map` 的用例，因此，如果需要保留 `number`，这是一种有效的方法。'
  },
  'v11 number pipe typing': {
    action: '现在，数字管道(`decimal`， `percent`， `currency`等)明确说明了接受哪些类型。'
  },
  'v11 date pipe typing': {
    action: '现在，`date` 管道明确说明了接受哪些类型。'
  },
  'v11 datetime rounding': {
    action: '当将日期时间格式的字符串以包含毫秒部分的格式传递给 `DatePipe` 时，现在毫秒将取整，而不是取最接近的毫秒。大多数应用程序不会受到此更改的影响。如果这不是期望的行为，则在将字符串传递给 `DatePipe` 之前，考虑对其进行预处理以舍入毫秒部分。'
  },
  '11 async pipe typing': {
    action: '`async` 管道不再要求为键入为 undefined 的输入返回 undefined。请注意，代码实际上在未定义的输入上返回 null。'
  },
  'v11 case pipe update': {
    action: '`uppercase` 和 `lowercase` 管道不再让虚假的值通过。现在，它们将 `null` 和 `undefined` 都映射到 `null`，并在无效输入(`0`， `false`， `NaN`)上引发异常。这与其他 Angular 管道匹配。'
  },
  'v11 router NavigationExtras typing': {
    action: '如果您将路由(Router)与 `NavigationExtras` 一起使用，则新的类型允许传入类型为 `NavigationExtras` 的变量，但它们将不允许对象文字(object literals)，因为它们可能仅指定已知属性。他们也将不接受那些与 `Pick` 中的属性没有共同属性的类型。如果您受到此更改的影响，请仅从 NavigationExtras 中指定实际在各个函数调用中使用的属性，或在对象或变量上使用类型声明：`as NavigationExtras`。'
  },
  'v11 TestBed.overrideProvider': {
    action: '在测试中，如果在 TestBed 初始化之后调用 `TestBed.overrideProvider`，则不再应用提供程序替代。此行为与其他替代方法(例如 `TestBed.overrideDirective` 等)一致，但它们会抛出错误来表明这一点。该检查以前在 TestBed.overrideProvider 函数中丢失。如果看到此错误，则应在完成 TestBed 初始化之前移动 `TestBed.overrideProvider` 调用。'
  },
  'v11 router RouteReuseStrategy': {
    action: '如果使用路由(Router)的 RouteReuseStrategy，参数顺序已更改。先前在评估子路由时调用 `RouteReuseStrategy#shouldReuseRoute` 时，它们将使用被交换的 `future` 和 `current` 参数来调用。如果您的 `RouteReuseStrategy` 仅依赖于将来或当前的快照状态，您可能需要更新 `future` 和 `current`、`ActivateRouteSnapshots` 的 `shouldReuseRoute` 实现。'
  },
  'v11 locale data readonly': {
    action: '如果您使用区域设置数据数组(locale data arrays)，则此 API 现在将返回只读数组。如果您要对它们进行突变(例如，调用 `sort()`，`push()`，`splice()`等)，则您的代码将不再编译。如果您需要更改数组，现在应该获取副本(例如，通过调用 `slice()`)并更改副本。'
  },
  'v11 CollectionChangeRecord': {
    action: '在更改检测中，已删除 `CollectionChangeRecord`，而改用 `IterableChangeRecord`。'
  },
  'v11 forms async validators': {
    action: '如果在初始化时对 `FormControl`、`FormGroup` 或 `FormArray` 类实例上定义的异步验证器使用 Angular Forms，则在异步验证器完成后，以前不会发出状态更改事件。这已被更改，因此status事件被发送到 `statusChanges` observable 中。如果代码依赖于旧的行为，则可以忽略此附加的状态更改事件。'
  }
};
// @TODO 此控制台日志是必需的，否则将不会注册区域设置
console.log(`zh-CN registered`);
registerLocalization('zh-CN', steps, uiLabels);
