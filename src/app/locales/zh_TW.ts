import { LocalizedLabels, LocalizedSteps, registerLocalization } from '../localization';
const uiLabels: LocalizedLabels = {
  'Angular Update Guide': 'Angular 升級指南',
  'Select the options that match your update:': '選擇與你的專案符合的選項:',
  'Angular versions': 'Angular 版本',
  'Application complexity': '應用程式複雜度',
  'From': '從',
  'To': '到',
  'Shows information for all Angular developers.': '顯示所有給 Angular 開發者的資訊。',
  'Shows information that\'s of interest to more advanced Angular developers.': '顯示對進階 Angular 開發者有興趣的資訊。',
  'Shows all the information we have about this update.': '顯示所有關於這次升級的資訊。',
  'Warning': '注意',
  'Plans for releases after the current major release are not finalized and may change. These recommendations are based on scheduled deprecations.':
    '目前主要版本後的規劃尚未定案，且可能有所變更。這些建議基於已排定的棄用。',
  'We do not currently support downgrading versions of Angular.':
    '現在並不支援 Angular 版本降級。',
  'We do not recommend moving across multiple major versions.':
    '不建議升級時跨越太多主要版本。',
  'App Complexity': '應用程式複雜度',
  'Basic': '基本',
  'Medium': '中等',
  'Advanced': '進階',
  'Show update information relevant to all Angular developers.':
    '顯示 Angular 開發人員都要知道的更新資訊。',
  'Show more specific update information relevant to around 10% of Angular developers.':
    '顯示約前10% Angular 開發人員詳細更新資訊。',
  'Show all the information we have about the update.': '顯示所有更新資訊。',
  'Other dependencies': '其他相依',
  'I use': '使用',
  'to combine AngularJS & Angular': '結合 AngularJS 和 Angular',
  'Package Manager': '套件管理',
  'Show me how to update!': '顯示如何更新！',
  'Guide to update your Angular application': 'Angular 應用程式升級指南',
  'for': '針對',
  'basic applications': '基本應用程式',
  'medium applications': '中等應用程式',
  'advanced applications': '進階應用程式',
  'Before you update': '在您開始更新前',
  "You don't need to do anything before moving between these versions.": '在這些版本之間不需要做任何事情。',
  'Review these changes and perform the actions to update your application.': '檢視這些變更並執行動作來更新您的應用程式。',
  'Update to the new version': '更新到新版本',
  "There aren't any recommendations for moving between these versions.": '在這些版本之間沒有任何建議。',
  'After you update': '更新後',
  "You don't need to do anything after moving between these versions.": '在這些版本之間不需要做任何事情。'
};

const steps: LocalizedSteps = {
  'Extends OnInit': {
    action:
      '確定你沒有對任何生命週期的事件使用 `extends OnInit` 或 `extends`，而應該使用 `implements <lifecycle event>`'
  },
  'Deep Imports': {
    action:
      '停止使用深度匯入(deep imports)，這些符號現在已經標記為 ɵ，並且不屬於我們的公開API。'
  },
  'invokeElementMethod': {
    action:
      '停止使用 `Renderer.invokeElementMethod`，因為此方法已經移除了，目前沒有替代方法。'
  },
  'Non Animations Module': {
    action:
      '如果你在應用程式中使用動畫，你應該在 `NgModule` 匯入 `@angular/platform-browser/animations` 中的 `BrowserAnimationsModule`。'
  },
  'Native Form Validation': {
    action:
      '當你包含 FormsModule 時，Angular 開始向表單元素新增個 novalidate 屬性. 若要回用原生(Native)表單驗證，請使用 ngNoForm 或新增 ngNativeValidate。'
  },
  'RootRenderer': {
    action:
      '使用 `RendererFactoryV2` 取代 `RootRenderer`。'
  },
  'downgradeInjectable': {
    action:
      '`upgrade/static/downgradeInjectable` 的返回值已更改。'
  },
  'Animations Tests': {
    action:
      '如果使用動畫和測試，將 `mods[1].NoopAnimationsModule` 加入到 `TestBed.initTestEnvironment` 呼叫。'
  },
  'DefaultIterableDiffer': {
    action:
      '停止使用 `DefaultIterableDiffer`， `KeyValueDiffers#factories`，或 `IterableDiffers#factories`'
  },
  'Template Tag': {
    action: '將你的 `template` 標籤重新命名為 `ng-template`'
  },
  'OpaqueToken': {
    action: '使用 `InjectionToken` 取代 `OpaqueToken`。'
  },
  'DifferFactory': {
    action: '如果呼叫 `DifferFactory.create(...)`，移除 `ChangeDetectorRef` 參數。'
  },
  'ErrorHandler Parameter': {
    action: '停止傳遞任何參數給 ErrorHandler 的建構式'
  },
  'ngProbeToken': {
    action: '如果使用 ngProbeToken，請確認從 @angular/core 而不是 @angular/platform-browser 匯入'
  },
  'TrackByFn': {
    action: '如果使用 TrackByFn，請改用 TrackByFunction'
  },
  'i18n Pipe Change': {
    action: '如果相依於日期(date)，貨幣(currency)，十進位(decimal)或百分比(percent)管道，則將在 5 中會看見格式的細微變化。對於使用英語(en-us)以外的應用程式，需要從 `@angular/common/i18n_data/locale_fr` 匯入 `locale` 並使用 `registerLocaleData(local)` 註冊本地語言資料。'
  },
  'gendir': {
    action: '切勿依賴 `gendir`，而考慮使用 `skipTemplateCodeGen`。<a href="https://github.com/angular/angular/issues/19339#issuecomment-332607471" target="_blank">了解詳情</a>'
  },
  'Dynamic ngUpgrade': {
    action: '替換從 @angular/upgrade 匯入的 downgradeComponent、downgradeInjectable、UpgradeComponent 和 UpgradeModule。需要在 `@angular/upgrade/static` 中使用新版本'
  },
  'Animations in Core': {
    action: '如果從 @angular/core 匯入任何動畫服務(animations services)或工具(tools)，則應改從 @angular/animations 匯入。'
  },
  'ngOutletContext': {
    action: '將 `ngOutletContext` 替換為 `ngTemplateOutletContext`.'
  },
  'collectionChangeRecord': {
    action: '將 `CollectionChangeRecord` 替換為 `IterableChangeRecord`'
  },
  'Renderer': {
    action: '不論在哪裡使用 Renderer，現在都使用 Renderer2'
  },
  'Router Query Params': {
    action: '如果使用了 preserveQueryParams，請改用 queryParamsHandling'
  },
  'Http': {
    action: '如果使用舊版的 `HttpModule` 和 `Http` 服務，請切換到 `HttpClientModule` 和 `HttpClient` 服務。HttpClient 簡化預設的 ergonomics(無需再映射(map)到JSON)，而且現在支援有類型的返回值和攔截器。進一步了解 <a href="https://angular.tw/guide/http" target="_blank">https://angular.tw/guide/http</a>'
  },
  'DOCUMENT in @angular/platform-browser': {
    action: '如果從 @angular/platform-browser 使用 DOCUMENT，請改從 @angular/common 匯入'
  },
  'ReflectiveInjector': {
    action: '不論在哪裡使用 ReflectionInjector，現在都使用 StaticInjector'
  },
  'Whitespace': {
    action: '在 `tsconfig.json` 檔案中，將 `angularCompilerOptions` 下的 `preserveWhitespaces` 值設定為 `off`(v6 預設為 off) 用來取得此設定的好處'
  },
  'node 8': {
    action: '請確定使用 <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 8 或之後的版本</a>'
  },
  'Update to CLI v6': {
    action: '在本機更新 Angular CLI，且將設定更新到<a href="https://github.com/angular/angular-cli/wiki/angular-workspace" target="_blank">新的 angular.json 格式</a>執行以下指令:<br/>`${packageManagerInstall} @angular/cli@6`<br/>`ng update @angular/cli@6`<br/>'
  },
  'cli v6 scripts': {
    action: '使用新的 Angular CLI 指令更新 package.json 中的 `scripts`。現在所有 CLI 指令都使用兩個破折號來標示(例如 `ng build --prod --source-map`p)，以便與 POSIX 相容。'
  },
  'Update to Angular v6': {
    action: '更新所有的 Angular 框架套件更新到 v6，且更新到正確的 RxJS 和 TypeScript 版本。<br/>`ng update @angular/core@6`<br/>更新後，TypeScript 和 RxJS 將會做出更精準的型別檢查，這可能會揭露出現有的應用程式的型別錯誤。'
  },
  'forms v6': {
    action: '在Angular 表單中，當呼叫 `AbstractControl#markAsPending` 時，`AbstractControl#statusChanges` 會發出 `PENDING` 事件。如果要過濾或檢查來自 `statusChanges` 的事件，確認在呼叫 `markAsPending` 時考慮新事件。'
  },
  'animations timing': {
    action: '如果在禁用區域(disabled Zone)內從 `AnimationEvent` 使用 totalTime，將不再回報時間為 0。要偵測動畫事件是否報告禁止使用動畫，則可以改用 `event.disabled` 屬性。'
  },
  'ngModel on form control': {
    action: '在響應式表單的指令(reactive form directives) 中使用 ngModel 和 ngModelChange 事件的支援，在 v6 已經棄用，且在 v7 已經刪除了。'
  },
  'ngModelChange order': {
    action: 'ngModelChange 現在會在組件會在數值或有效性發出，而非在之前，讓有更好期望的配對。如果相依於這些事件的順序，則需要在你的元件中追蹤舊值。'
  },
  'Update Dependencies for v6': {
    action: '將 Angular Material 更新到最新版本。<br/>`ng Update@Angular/Material`<br/>同時也會自動搬移廢棄的 API。'
  },
  'strictPropertyInitializer': {
    action: '如果你已經將 TypeScript 設定為嚴格模式(如果在 `tsconfig.json` 檔案中將 `strict` 設定為 `true`)，更新 `tsconfig.json` 停用 `strictPropertyInitialization` 或將屬性初始化從 `ngOnInit` 中搬移到建構式。你可以在<a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization"> TypeScript 2.7 發行說明</a>了解更多相關資訊。'
  },
  'update to RxJS 6': {
    action: '使用 <a href="https://github.com/ReactiveX/rxjs-tslint" target="_blank">rxjs-tslint</a> 會移除 RxJS 5 已棄用的功能且自動更新規則<br/>在大多數的應用程式中，只需要執行下列兩個指令：<br/>`npx rxjs-tslint`<br/>`rxjs-5-to-6-migrate -p src/tsconfig.app.json`'
  },
  'remove rxjs-compat': {
    action: '當所有相依都更新到 RxJS 6，請移除 `rxjs-compat`.'
  },
  'use files instead of versionedFiles': {
    action: '如果使用了 Angular Service worker，使用 `files` 替代 `versionedFiles`'
  },
  'TypeScript 3.1': {
    action: 'Angular 現在使用 TypeScript 3.1，了解更多資訊：<a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html" target="_blank">https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html</a>'
  },
  'Node 10': {
    action: 'Angular 現在新增對 Node 10 的支援: <a href="https://nodejs.org/en/blog/release/v10.0.0/" target="_blank">https://nodejs.org/en/blog/release/v10.0.0/</a>'
  },
  'v7 update': {
    action: '在終端機執行 `ng update @angular/cli@7 @angular/core@7` 更新 CLI 和核心框架到 v7。'
  },
  'v7 material update': {
    action: '在終端機執行 `ng update @angular/material`，更新到 Angular 7、Angular 8、Angular 9、Angular 10，請執行對應的 `ng update @angular/material@7`、`ng update @angular/material@8`、`ng update @angular/material@9`、`ng update @angular/material@10`'
  },
  'v7 material changes': {
    action: '如果是用螢幕截圖作為測試結果，則需要重新產生螢幕截圖檔案，因為進行許多次小的視覺調整。'
  },
  'v7 material deprecations': {
    action: '停止使用 `matRippleSpeedFactor` 和 `baseSpeedFactor` 產生 ripples，取而代之使用動畫設定(Animation config)'
  },
  'v8 update': {
    action: '在終端機執行 `ng update @angular/cli@8 @angular/core@8` 更新 CLI 和核心框架到 v8。'
  },
  'use ::ng-deep instead of /deep/': {
    action: '使用 `::ng-deep` 替代 `/deep/`, <a href="https://angular.tw/guide/component-styles#deprecated-deep--and-ng-deep" target="_blank">了解關於 Angular 元件樣式和 ::ng-deep 的更多資訊</a>。不推薦使用 `/deep/` 和 `::ng-deep` ，在<a href="https://www.chromestatus.com/features/6750456638341120" target="_blank">從瀏覽器和工具(tools)中移除 shadow-piercing descendant 組合器</a>前最好使用 `::ng-deep`。'
  },
  'TypeScript 3.4': {
    action: 'Angular 現在使用 TypeScript 3.4，<a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html" target="_blank">閱讀更多關於改進型別檢查可能產生的錯誤訊息</a>'
  },
  'node 10': {
    action: '請確認使用 <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 10 或之後的版本</a>'
  },
  'Differential Loading': {
    action: 'CLI 的 build 指令現在可以自動建立一個至少 polyfill 的 ES6 建構(build)，和相容於舊版瀏覽器的 ES5 建構，並且根據瀏覽器載入適當的檔案。可以在 `tsconfig.json` 中將 `target` 設定為 `es5` 來取消此更改。<a href="https://angular.tw/guide/deployment#differential-loading" target="_blank">了解詳細資訊</a>'
  },
  'CLI Telemetry': {
    action: '使用新版 CLI時，將會詢問你是否要分享你的 CLI使用資料。你也可以新增自己的 Google Analytics 帳號。這讓我們改進 CLI的功能時，能有所依據，做出更恰當的決定。<a href="https://angular.io/analytics" target="_blank">閱讀更多</a>'
  },
  'static query timing': {
    action: '如果使用 `ViewChild` 或 `ContentChild`，則我們將更新解析這些查詢的方式讓開發人員有更多的控制。現在你必須更改檢測應該在設定結果之前執行。例如：`@ContentChild(\'foo\', {static: false}) foo !: ElementRef;`. `ng update` 會自動更新你的查詢，但會因為你的查詢改為靜態查詢而導致相容性的問題。<a href="https://angular.tw/guide/static-query-migration" target="_blank">了解詳情</a>'
  },
  'v8 material update': {
    action: '在終端機執行 `ng update @angular/material@8` 將 Angular Material 更新到版本 8。'
  },
  'deep imports': {
    action: '與其從 `@angular/material` 中匯入，不如從特定元件中深度匯入。例如： `@angular/material/button`。`ng update` 將自動執行此操作。'
  },
  'new loadChildren': {
    action: '經由路由延遲載入的模組，請確定你<a href="https://angular.tw/guide/deprecations#loadchildren-string-syntax" target="_blank">使用動態匯入</a>。在 v9 中移除通過字串匯入。`ng update` 會自動處理。'
  },
  'platform deprecated': {
    action: '不建議使用 `@angular/platform-webworker`，因為與 CLI 不相容。在 Web Worker 中執行 Angular 的渲染器架構無法滿足開發人員的需求。你仍然可以一起使用Web worker和Angular。經由 <a href="https://angular.tw/guide/web-worker" target="_blank">Web worker 指南</a>了解更多。如果你有需要的案例，請與我們聯絡 devrel@angular.io'
  },
  'node-sass': {
    action: '已經從原生的 Sass 編譯器切換到 JavaScript 編譯器。如果要切換回原生的版本，安裝為devDependency：`npm install node-sass --save-dev`。'
  },
  'schematics async': {
    action: '如果要建構自己的原理圖 (Schematics)，從前*可能*是非同步的，從 8.0 開始所有的原理圖都是非同步的。'
  },
  'node 10.13': {
    action: '請確定使用 <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 10.13 或之後的版本</a>。'
  },
  'cli v8 latest': {
    action: '在工作目錄執行 `ng update @angular/core@8 @angular/cli@8` 更新到最新的 8.x 版本的 `@angular/core` 和 `@angular/cli` 並提交修改。'
  },
  'create commits': {
    action: '你可以選擇 `--create-commits` (或 `-C`)標誌傳送給 <a href="https://angular.tw/cli/update" target="_blank">ng update</a> 指令，用來針對每次搬移時建立 git commit。'
  },
  'ng update v9': {
    action: '執行 `ng update @angular/cli@9 @angular/core@8` 將更新到版本9的 Angular。'
  },
  'typescript 3.8': {
    action: '你的專案已經更新到 TypeScript 3.8，在 <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html" target="_blank">TypeScript 3.7 公告</a> 或 <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html" target="_blank">TypeScript 3.8 公告</a>閱讀關於新的編譯器檢查和錯誤的詳細訊息，這些檢查和錯誤可能你修正程式碼中的問題。'
  },
  'update @angular/material': {
    action: '執行 `ng update @angular/material`，更新到 Angular 7、Angular 8、Angular 9、Angular 10, Angular 11, Angular 12, Angular 13，請執行對應的 `ng update @angular/material@7`、`ng update @angular/material@8`、`ng update @angular/material@9`、`ng update @angular/material@10`、`npx @angular/cli@11 update @angular/material@11`、`npx @angular/cli@12 update @angular/material@12`、`npx @angular/cli@13 update @angular/material@13`。'
  },
  'update @nguniversal/hapi-engine': {
    action: '如果使用 Angular Universal，根據使用的引擎執行 `ng update @nguniversal/hapi-engine` 或 `ng update @nguniversal/express-engine`。如果有第三方相依項目尚未更新其對等相依的 Angular 版本，則此步驟可能需要 `--force` 標誌。'
  },
  'dependencies update': {
    action: '如果相依於其他 Angular 函式庫，我們建議你考慮更新到最新的版本。在某些情況下，可能需要此更新才能解決 API 相容的問題。請參閱 `ng update` 或 `npm outd` 來了解你過期的函示庫。'
  },
  'ivy update': {
    action: '在更新到版本 9 的過程中，需要藉由程式碼搬移對專案進行轉換，以便從程式庫中刪除所有不相容或不建議使用的 API 呼叫。現在可以查看這些修改，並查閱<a href="https://v9.angular.io/guide/updating-to-version-9" target="_blank">更新至版本 9 </a>了解更多修改資訊。'
  },
  'stylesUpdate': {
    action: '綁定的 CSS 樣式和類別先前應用的策略是以「最後修改」的為準，但是現在已經定義了樣式的優先順序。近一步了解<a href="https://angular.tw/guide/style-precedence" target="_blank">樣式的優先順序</a>。'
  },
  'ModuleWithProviders': {
    action: '如果你是函式庫的作者，並且返回 `ModuleWithProviders` 的方法(通常藉由名為 `forRoot()` 的方法)，則需要指定範型。<a href="https://v9.angular.io/guide/deprecations#modulewithproviders-type-without-a-generic" target="_blank">了解更多</a>'
  },
  'wtf': {
    action: '在版本 8 中不再支援 Angular 中的 Web 追蹤框架的支援。應該停止使用任何有 `wtf*` API。如果要追蹤效能，建議使用<a href="https://developers.google.com/web/tools/lighthouse/audits/user-timing" target="_blank">瀏覽器效能工具</a>。'
  },
  'es5browser': {
    action: '刪除 `angular.json` 中的 `es5BrowserSupport`，並且將 `tsconfig.json` 中的 `target` 設定為 `es2015`。Angular 現在使用你的瀏覽器列表來決定是否需要 ES5 構建。ng update 將會自動搬移。'
  },
  'ngForm selector': {
    action: '如果使用 `ngForm` 元素選擇器去建立 Angular 表單，則應該使用 `ng-form`。'
  },
  'typings compilation': {
    action: '我們更新了 `tsconfig.app.json` 用來限制編譯的檔案。如果編譯包含其他的相依檔案，例如 `typings.d.ts` 檔案，則需要手動加入編譯。'
  },
  'debug': {
    action: 'Angular 9 Ivy 現在為預設的渲染引擎，可能會出現相容性的問題，請閱讀 <a href="https://angular.tw/guide/ivy-compatibility" target="_blank">Ivy 相容性指南</a>。'
  },
  'ngcc postinstall': {
    action: '如果你相依於許多 Angular 函式庫，可以考慮<a href="https://v9.angular.io/guide/ivy#speeding-up-ngcc-compilation" target="_blank">通過對 package.json 的小改動</a>呼叫 npm `postinstall` 腳本中的 `ngcc`(Angular Compatibility Compiler)來加快建構速度。'
  },
  'express-universal-server': {
    action: '如果把 Angular Universal 和 `@nguniversal/express-engine` 或 `@nguniversal/hapi-engine` 一起使用時，會建立多個備份檔案則。其中一個用在 `server.ts`。如果此檔案與預設檔案相異，可能需要手動將一些修改從 `server.ts.bak` 複製到 `server.ts`。'
  },
  'ivy i18n': {
    action: '如果相依於Angular 的國際化(i18n)，需要載入 Angular 9 引進了全域的 `$localize()` 方法。執行 `ng add @angular/localize` 加入必要的套件和程式碼修改添加。請參考 <a href="https://angular.tw/guide/migration-localize" target="_blank">$localize 全域性匯入的遷移</a>了解更多詳細資訊。'
  },
  'entryComponents': {
    action: '如果在 NgModules 中指定了 `entryComponents` 或使用了 `ANALYZE_FOR_ENTRY_COMPONENTS`，可以把他們刪除。Ivy 編譯和執行時再也不需要了。'
  },
  'testbed-get': {
    action: '如果你使用 `TestBed.get`，則應改用 `TestBed.inject`。新方法擁有相同的行爲但類別安全。'
  },
  '$localize': {
    action: '如果你使用 Angular 的 i18n 支援，則需要開始使用 `@angular/localize`。請參考 <a href="https://angular.tw/guide/migration-localize" target="_blank">$localize 全域性匯入的遷移</a>了解更多詳細資訊。'
  },

  'ng update v10': {
    action: '執行 `ng update @angular/cli@10 @angular/core@10` 將會帶你到第10版的Angular。'
  },
  'browserlist': {
    action: '新專案使用的檔案名稱 `.browserslistrc` 取代 `browserslist` 。ng update 會自動搬移。'
  },
  'v10-versions': {
    action: 'Angular 現在需要 `tslint` v6，`tslib` v2 和 <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html" target="_blank">TypeScript 3.9</a>。ng update 將自動搬移。'
  },
  'styleext': {
    action: '在 Angular 原理圖(schematics)中停止使用 `styleext` 或 `spec`。ng update 會自動搬移。'
  },
  'classes-without-decorators': {
    action: '在版本10中，不再支援使用 Angular 但沒有 Angular 裝飾器的類別。<a href="https://angular.tw/guide/migration-undecorated-classes" target="_blank">了解更多</a>。ng update 將自動搬移。'
  },
  'injectable-definitions': {
    action: '從 Angular 9 開始，對 DI 的 @Injectable 裝飾器執行更加嚴格，不完整的提供者程序定義的行為也有所不同。<a href="https://angular.tw/guide/migration-injectable" target="_blank">了解更多</a>。ng update 將自動搬移。'
  },
  'closure-jsdoc-comments': {
    action: 'Angular 的 NPM 套件不再包含 jsdoc 註解，這是與閉包編譯器一起使用所必須的(非常罕見)。此支援是實驗性的，且只在某些使用案例中有效。不久後將會宣布一條替代的推薦路線。'
  },
  'forms-number-input': {
    action: '如果你使用 Angular 表單，則 `number` 型別的輸入將不再監聽<a href="https://developer.mozilla.org/en-us/docs/Web/API/HTMLElement/change_event" target="_blank">更改事件</a>(此事件不必為每個更改觸發該值)，而監聽<a href="https://developer.mozilla.org/en-us/docs/Web/API/HTMLElement/input_event" target="_blank">輸入事件</a>。'
  },
  'forms-length-input': {
    action: '對於 Angular 表單驗證，表單控制組件的值的長度 (length) 屬性是數字類別時，minLength 和 maxLength 驗證器才會對此控件做長度驗證。'
  },
  'esm5-bundles': {
    action: '<a href="https://g.co/ng/apf" target="_blank">Angular 套件格式</a>已更新，已刪除 `esm5` 和 `fesm5` 格式。這些不再分發到 npm 套件中。如果你不使用 CLI，則可能需要自己將 Angular 程式碼降版至 ES5。'
  },
  'console-errors': {
    action: '關於未知元素的警告現在會記錄為錯誤。這不會破壞你的應用程式，但可能會使一些工具無法通過 `console.error` 記錄任何東西。'
  },
  'router-resolver-empty': {
    action: '所有返回 `EMPTY` 的解析器(resolver)都將取消導航(navigation)。如果要允許導航繼續，則需要更新解析器去發出一些值(例如，`defaultIfEmpty(...)`，`of(...)`等)。'
  },
  'sw-vary-headers': {
    action: '如果使用 Angular Service Worker 並且藉由 <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary" target="_blank">Vary Headers</a> 相依資源，現在將會忽略這些標頭用來避免跨瀏覽器發生不可預測的行為。為了避免這種情況，請<a href="https://angular.io/guide/service-worker-config" target="_blank">設定 service worker</a> 用來避免快取這些資源。'
  },
  'expression-changed-after-checked-new': {
    action: '你可能會看到在使用 `async` 管道之前未檢測到的 `ExpressionChangedAfterItHaHasBeenChecked` 錯誤。此錯誤以前可能沒有被檢測到，因為兩個 `WrappedValues` 在任何情況下都會被認為「相等」，即使檢查時未將各自的未包裝的值也是為「相等」。在版本 10 中，`WrappedValue` 已被刪除。'
  },
  'property-binding-change-detection': {
    action: '如果有屬性綁定，例如 `[val]=(observable | async).someProperty`，如果 `someProperty` 的值與之前發射(emit)的值相同，將不再觸發變更檢測。如果相依於此方法，請根據需求手動訂閱並呼叫 `markForCheck` 或更新綁定用來確定參考(reference)發生更改。'
  },
  'day-periods-crossing-midnight': {
    action: '如果使用 `formatDate()` 或 `DatePipe` 以及 `b` 或 `B` 格式的程式碼，則邏輯已經更新，如此一來與跨夜的時間相符，因此現在將會正確顯示輸出，例如在英文中為 “night”。'
  },
  'urlmatcher-null': {
    action: '如果使用 `UrlMatcher`，現在型別反映出始終返回`null`。'
  },
  'v10-more-details': {
    action: '關於棄用、自動搬移和變更的詳細資訊，請參訪 <a href="https://angular.tw/guide/updating-to-version-10" target="_blank">Angular 更新到版本 10</a>'
  },
  'universal-baseurl': {
    action: '關於 Angular Universal 的使用者，如果使用 `useAbsoluteUrl` 去設定 `platform-server`，現在還需指定 `baseUrl`。'
  },
  'v11 ng update': {
    action: '執行 `ng update @angular/core@11 @angular/cli@11`， 更新 CLI 和核心框架到 v11。'
  },
  'v11 versions': {
    action: 'Angular 現在需要 <a href="https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/" target="_blank">TypeScript 4.0</a>。ng update 將自動搬移。'
  },
  'v11 browser support': {
    action: '不再支援 IE9，IE10 和 IE mobile。這在 <a href="http://blog.angular.io/version-10-of-angular-now-available-78960babd41#c357" target="_blank">Angular 版本 10 更新</a> 中宣布的。'
  },
  'webpack5 optin': {
    action: '現在可以藉由使用 Yarn 且在 `package.json` 中新增 `"resolutions": {"webpack": "^5.0.0"}`  來選擇使用 webpack 5。'
  },
  'ng new strict prompt': {
    action: '建立新專案時，將會詢問是否使用嚴格模式。將會設定 TypeScript 和 Angular 編譯器用來進行更嚴格的型別檢查，並預設使用更小的打包預算(bundle budgets)。可以使用 `--strict=true` 或 `--strict=false` 略過提示。'
  },
  'v11 router relativeLinkResolution': {
    action: '如果你使用路由(Router)，則 `relativeLinkResolution` 的預設值已從 `legacy` 改為 `corrected`。如果你的應用程式以前未在 ExtraOptions 中指定值而使用了預設值，並且從空路徑路由導航子導航時使用相對連結在(relative links)，則需要更新 `RouterModule` 的設定，專門為 `relativeLinkResolution` 指定 `legacy`。相關更多資訊，請參閱<a href="https://angular.tw/api/router/ExtraOptions#relativeLinkResolution" target="_blank">文件</a>。'
  },
  'router initialNavigation': {
    action: '在 Angular 路由(Router)中，v4 中為棄用的選項 `initialNavigation` 已被刪除。如果你以前使用過 `enabled` 或 `true`，則現在選擇 `enabledNonBlocking` 或 `enabledBlocking`。如果以前使用過 `false` 或 `legacy_disabled`，現在使用 `disabled`。'
  },
  'routerlink preserveQueryParams': {
    action: '在 Angular 路由(Router)的 `routerLink` 中，`preserveQueryParams` 已被刪除，請改用 `queryParamsHandling="preserve"`。'
  },
  'routerlink queryParams typing': {
    action: '如果存取 `queryParams`、`fragment`或 `queryParamsHandling` 的 `routerLink` 值，則可能需要放寬型別讓他們同時接受 `undefined` 和 `null`。'
  },
  'viewencapsulation native removed': {
    action: '元件的檢視封裝模式選項 `ViewEncapsulation.Native` 已刪除。使用 `ViewEncapsulation.ShadowDom` 代替。ng update 將自動搬移。'
  },
  'ICU expressions typechecked': {
    action: '如果使用 i18n，現在將再次檢查 Unicode 國際元件(ICU)表達事中的表達式。如果在 ICU 中出現的表達式中發現錯誤，可能會導致編譯失敗。'
  },
  'forms validators asyncValidators typing': {
    action: '`@angular/forms` 套件中的指令過去將 `any[]` 作為建構式中預期的 `validators` 和 `asyncValidators` 參數型別。現在這些參數型別以正確輸入，因此，如果程式碼相依於 `@angular/forms` 的指令建構式的型別，則可能需要更新提高型別的安全性。'
  },
  'forms AbstractFormControl': {
    action: '如果使用 Angular 表單，則 `AbstractFormControl.parent` 的型別現在包含 null。ng update 將自動搬移。但是再不太可能的情況下，你的程式碼是針對 undefined 和 strict equality 來測試父對象的，因此需要改為 `=== null`，因為現在已經明確初始化父對象設定為 `null`，而不是保持 undefined。'
  },
  'platform-webworker': {
    action: '在 v8 中已棄用很少使用的 `@angular/platform-webworker` 和 `@angular/platform-webworker-dynamic`，並且刪除。在 Web worker 中執行 Angular 的部分內容是一項實驗，在常見的使用實例中效果不佳。Angular 仍然對 <a href="https://angular.tw/guide/web-worker" target="_blank">Web Workers</a> 有很好的支援。'
  },
  'v11 slice pipe typing': {
    action: '`slice` 管道現在與大多數的管道行為一致，未定義的輸入值將返回 null。'
  },
  'v11 keyvalue typing': {
    action: '`keyvalue` 管道已經修正，可以報告具有數字作為 key 的輸入物件，結果的型別將包含鍵的字串表示形式。現在已經是這樣，並且僅對程式碼進行更新來反映這點。如果相依於不正確的型別，請更新管道輸出的使用者。請注意，這不會影響輸入值為 `Map` 的使用案例，因此，如果需要保留 `number`，這是一個有效的方法。'
  },
  'v11 number pipe typing': {
    action: '數字管道(`decimal`， `percent`， `currency`等)管道現在明確宣告接受哪些類別。'
  },
  'v11 date pipe typing': {
    action: '`date` 管道現在明確宣告接受哪些類別。'
  },
  'v11 datetime rounding': {
    action: '當將時間日期包含毫秒的字串的格式傳送給 `DatePipe` 時，現在毫秒將會四捨五入，而非取最接近的毫秒。大多數的應用程式將會不受此更改影響。如果這不是你預期的行為，那麼考慮對字串先行處理四捨五入至毫秒再傳送給 `DatePipe`。'
  },
  'v11 async pipe typing': {
    action: '`async` 管道不再要求輸入為 undefined 的輸入返回 undefined。要注意的是，程式碼實際上在未定義的輸入返回 null。'
  },
  'v11 case pipe update': {
    action: '`uppercase` 和 `lowercase` 管道不再讓假值通過。現在將會將 `null` 和 `undefined` 都映射到 `null`，並且在無效的輸入(`0`， `false`， `NaN`)上引發例外錯誤。和其他 Angular 管道一致。'
  },
  'v11 router NavigationExtras typing': {
    action: '如果將路由(Router)與 `NavigationExtras` 一起使用，則新的型別允許傳入型別為 `NavigationExtras` 的變數，但不允許實字物件(object literals)，因為可能僅指定已知屬性。同時也不接受那些與 `Pick` 中的屬性沒有共同屬性的型別。如果受到此更改的影響，請僅從 NavigationExtras 中指定實際在各個函式呼叫中使用的屬性，或在物件或變數上使用型別聲明：`as NavigationExtras`。'
  },
  'v11 TestBed.overrideProvider': {
    action: '在測試中，如果在 TestBed 初始化之後呼叫 TestBed.overrideProvider，意欲取代 Provider 的作用不會有效。此行為與其他 取代方法函式(例如 TestBed.overrideDirective 等)一致，但它們會拋出錯誤來表明這一點。該檢查以前在 TestBed.overrideProvider 函數中錯失。如果看到此錯誤，則應移動TestBed.overrideProvider 呼叫到完成 TestBed 初始化之前的地方。'
  },
  'v11 router RouteReuseStrategy': {
    action: '如果使用路由(Router)的 RouteReuseStrategy，參數順序已經更改。先前在評估子路由呼叫 `RouteReuseStrategy#shouldReuseRoute` 時，將使用被交換的 `future` 和 `current` 參數來呼叫。如果 `RouteReuseStrategy` 僅相依於將來或當前的快照狀態，可能需要更新 `future` 和 `current`、`ActivateRouteSnapshots` 的 `shouldReuseRoute` 實作。'
  },
  'v11 locale data readonly': {
    action: '如果使用本地語言資料陣列(locale data arrays)，則此 API 現在只返回唯讀的陣列。如果要對他們操作(例如，調用 `sort()`，`push()`，`splice()`等)，則程式碼將不再編譯。如果需要對陣列進行操作，則應該取得副本(例如呼叫 `slice()`)並且修改副本。'
  },
  'v11 CollectionChangeRecord': {
    action: '在變更檢測中，`CollectionChangeRecord` 已經移除，請改用 `IterableChangeRecord`。'
  },
  'v11 forms async validators': {
    action: '如果在初始化時 `FormControl`、`FormGroup` 或 `FormArray` 類別實例上使用定義的非同步驗證器使用 Angular 表單，則在非同步的驗證器完成之後，之前不會發出狀態變更的事件。這已修改以便狀態變更事件被發送到可被觀察的 `statusChanges` 中。如果程式碼相依於舊的行為，可以過濾或忽略其他狀態的變更事件。'
  },

  'v12 ng update': {
    action: '執行 `npx @angular/cli@12 update @angular/core@12 @angular/cli@12`， 更新 CLI 和核心框架到 v12。'
  },
  'v12 versions': {
    action: 'Angular 現在需要 <a href="https://devblogs.microsoft.com/typescript/announcing-typescript-4-2/" target="_blank">TypeScript 4.2</a>。ng update 將自動搬移。'
  },
  'v12 browser support': {
    action: '已停止支援IE11。在 <a href="https://github.com/angular/angular/issues/41840" target="_blank">RFC for IE11 removal</a> 了解更多詳細資訊。'
  },
  'v12 minimum  Node.js version': {
    action: '你不能使用 Nodejs 版本 10 或更早的版本執行 Angular。'
  },
  'v12 `XhrFactory` relocation': {
    action: '將 `XhrFactory` 的匯入從 `@angular/common/http` 改變為 `@angular/common`.'
  },
  'v12 i18n message ids': {
    action: '如果您相依舊版 i18n 訊息 ID， 使用 `localize-migrate` 工具來 <a href="https://angular.tw/guide/migration-legacy-message-id" target="_blank">遷移它們</a>。'
  },
  'v12 deprecates `emitDistinctChangesOnly`': {
    action: '如果您使用  `emitDistinctChangesOnly` 設定來查詢 `@ContentChildren` 和 `@ViewChildren`， 您可能需要將其值更新為 `false` 以與其先前的行為保持一致。 在 v12 中， `emitDistinctChangesOnly` 的預設值為 `true`， 在未來的版本中， 我們將刪除此設定選項以防止觸發不必要的變更。'
  },
  'v12 prod by default': {
    action: '您可以選擇性地執行 `npx @angular/cli@12 update @angular/cli@12 --migrate-only production-by-default` 使能夠生產專業構建。'
  },
  'v12 min and max form attributes': {
    action: '如果您使用 Angular 表單， `<input type="number">` 的 `min` 和 `max` 屬性現在將觸發驗證邏輯。'
  },
  'v12 `emitEvent` in `FormArray` and `FormGroup`': {
    action: '如果您的應用程式有延續 `FormArray` 或 `FormGroup` 類別的自訂類別， 還有取代上述的方法函式， 您可能需要更新您的實行。'
  },
  'v12 zone.js minimum version': {
    action: '將 zone.js 的版本更新到 0.11.4。 `ng update` 將會更新自動這個依賴。'
  },
  'v12 `HttpParams` method params update': {
    action: '如果您延續 `HttpParams` 類別， 您可能需要更新方法函式的簽名以反映參數類型的變化。'
  },
  'v12 `routerLinkActiveOptions`': {
    action: '`RouterLinkActive` 的 `routerLinkActiveOptions` 屬性現在有更具體的類型。 您可能需要更新存取這個屬性的程式以確保與這個變更保持一致。'
  },
  'v12 `APP_INITIALIZER` callback types': {
    action: 'The initializer callbacks 現在有更具體的返回類型， 如果您透過 `Injector.get` 或 `TestBed.inject` 獲得 `APP_INITIALIZER` 實例， 可能需要更新您的程式。'
  },
  'v12 fragment typings': {
    action: 'The router fragments 現在可以是 `null`。 增加 `null` 檢查以避免 TypeScript 發生類型錯誤。'
  },
  'v12 `ng.getDirectives`': {
    action: '如果 `ng.getDirectives` 找不到跟特定 DOM node 相關的指令 (directives)， 請肯定您沒有依賴 `ng.getDirectives` 來發出錯誤。'
  },
  'v12 `optimization.styles.inlineCritical`': {
    action: '查閱 angular.json 文件中的 `optimization.styles.inlineCritical` 選項。 它現在設定值為 `true`。 請記住整個 `optimization` 選項可以設定為 boolean， 這將會成為所有子選項的設定值。'
  },

  'v13 ng update': {
    action: '執行 `npx @angular/cli@13 update @angular/core@13 @angular/cli@13`， 更新 CLI 和核心框架到 v13。'
  },
  'TypeScript 4.4': {
    action: 'Angular 現在使用 TypeScript 4.4， 閱讀任何有關的潛在重大改變: <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html" target="_blank">https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html</a>。'
  },
  'v13 node': {
    action: '請確定使用 <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 12.20.0 或更新的版本</a>。'
  },
  'v13 routerLink': {
    action: '你現在可以透過傳遞 `undefined` 和 `null` 來取消 `routerLink` 的導覽。這兩個資料再過去相當於在 `routerLink` 使用空字串'
  },
  'v13 router loadChildren': {
    action: '你不能再透過設定 `loadChildren` 為空字串來進行延遲載入。確認你使用動態的 ESM import 語句。'
  },
  'v13 service worker activated': {
    action: '`SwUpdate` 的 `activated` observable 已經被棄用。要確認 service worker 的啟動狀態請改用 `activatedUpdate`。'
  },
  'v13 service worker available': {
    action: '`SwUpdate` 的 `available` observable 已經被棄用。要得到一樣的資訊可以使用 `versionUpdates` 並過濾 `VersionReadyEvent` 事件。'
  },
  'v13 renderModuleFactory': {
    action: 'Ivy 不再需要 `@angular/platform-server` 的 `renderModuleFactory`。使用 `renderModule` 取代。'
  },
  'v13 forms status': {
    action: '我們將 `AbstractControl.status` 縮短為 `FormControlStatus` 以及將 AbstractControl.statusChange 縮短為 `Observable<FormControlStatus>`。`FormControlStatus` 是表單控制項所有可能狀態字串的集合。'
  },
  'v13 router serializer': {
    action: '為了對齊 URL 規範，現在 URL 序列化程式能正確解析查詢字串中的問號。例如 `/path?q=hello?&q2=2` 將會被解析成 `{ q: `hello?`, q2: 2 }`'
  },
  'v13 host binding': {
    action: '`href` 現在是屬性(attribute）繫結。這代表 `DebugElement.properties[\'href\']` 現在會回傳原生元素的 `href` 資料，而不是 `routerLink` 內部的 `href` 屬性（property）'
  },
  'v13 spy location': {
    action: '當 `location.go` 被呼叫時，`SpyLocation` 不再發送 `popstate` 事件 when `location.go`；`simulateHashChange` 現在會同時觸發 `haschange` and `popstate`。依賴 `location.go` 的測試現在最有可能需要使用 `simulateHashChange` 來擷取 `popstate`。'
  },
  'v13 router URL replacement': {
    action: '當新的導覽行為取消一個進行中的導覽時，路由將不再取代瀏覽器的網址。由 Angular 處理且在初始導覽時依賴 `navigationId` 混合形應用程式應該訂閱 `NavigationCancel` 事件並執行 `location.replaceState` 以將 `navigationId` 添加到 `Router` 狀態。此外，在 `SpyLocation` 上斷言 `urlChanges` 的測試可能需要針對 `replaceState` 不再觸發而調整。'
  },
  'v13 removed symbols': {
    action: '路由套件不再匯出 `SpyNgModuleFactoryLoader` 和 `DeprecatedLoadChildren`。如果你有使用，請確定有移除相關的 import 語句。'
  },

  'v14 ng update': {
     action: '執行 `ng update @angular/core@14 @angular/cli@14` 更新到 Angular 14'
  },
  'TypeScript 4.6': {
     action: 'Angular 現在使用 TypeScript 4.6，關於可能的破壞更新: https://devblogs.microsoft.com/typescript/announcing-typescript-4-6/',
  },
  'v14 node': {
     action: '確認你使用 <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 14.15.0 以上版本</a>',
  },
  'v14 strict forms': {
     action: '表單模型現在需要一個范型型別。為了逐步更新，你可以先使用未定義型別的模型類別版本'
  },
  'v14 aotSummaries': {
     action: '移除 `TestBed` 的 `aotSummaries`，因為 Angular Ivy 不再需要他們了。'
  },
  'v14 MatVertical and Horizontal Stepper': {
     action: '如果你有使用 `MatVerticalStepper` 或 `MatHorizontalStepper` 請改用 `MatStepper`。'
  },
  'v14 JSONP': {
     action: 'JSONP 的請求移除標頭。JSONP 不支援標頭，而且如果指定 HTTP 模組將拋出錯誤而不是忽略他們。'
  },
  'v14 resolvers': {
     action: 'Resolvers 現在將會取得 observable 第一個發送的資料之後進行導覽，而不是最後一個。以更好的對齊其他 guards。'
  },
  'v14 deprecate protractor entry': {
     action: '棄用的 `angular/cdk/testing/protractor` 進入點現在已移除。'
  },
  'v14 chipInput': {
     action: '確保你指定 `MatChipInputEvent` 的 `chipInput`，因為它現在是必需的。'
  },
  'v14 mixinErrorState': {
     action: '使用 `mixinErrorState` 時你需要時做 `stateChanges` 類別成員因為 mixin 不再提供了。'
  },
  'v14 CdkStepper orientation': {
     action: '使用 `CdkStepper.orientation` 取代 `CdkStepper._orientation`。'
  },
  'v14 CdkStepper and MatStepper': {
     action: '如果你在建構式中擴充或使用 `CdkStepper` 或 `MatStepper` 你不應該再傳入 `_document` 參數，因為它現在被移除了。'
  },
  'v14 mat-list-item-avatar': {
     action: '將 `mat-list-item-avatar` CSS 類別重新並名為 `mat-list-item-with-avatar`。'
  },
  'v14 MatSelectionListChange.option': {
     action: '使用 `MatSelectionListChange.options` 而非 `MatSelectionListChange.option`。'
  },
  'v14 getHarnessLoaderForContent': {
     action: '使用 `getChildLoader(MatListItemSection.CONTENT)` 而非 `getHarnessLoaderForContent`.'
  },
  'v14 MatSelectionList': {
     action: '如果你使用 `MatSelectionList` 請確認你有將 `_focusMonitor` 傳到建構式內因為它現在是必須的。另外，這個類別不再包含 `tabIndex` 屬性，也不會在建構式的參數內。'
  },
  'v14 initialNavigation': {
     action: '將 `initialNavigation: \'enabled\'` 更新為 `initialNavigation: \'enabledBlocking\'`。'
  },
  'v14 Route.pathMatch': {
     action: ' `Route` or `Routes` 需要明確指定 `Route.pathMatch` 以避免 TypeScript 將 `pathMatch` 推斷為 `string`。'
  },
  'v14 stricter LoadChildrenCallback': {
     action: '`LoadChildrenCallback` 回傳的 promise 現在有更嚴格的型別參數 `Type<any>|NgModuleFactory<any>` 而不再是 `any`。'
  },
  'v14 router scheduling': {
     action: '路由不再使用 `setTimeout` 來安排 redirect 導覽。請確定你的測試程式沒有依賴此行為。'
  },
  'v14 LocationStrategy': {
     action: '`LocationStrategy` 介面現在需要實作 `getState()` 定義。'
  },
  'v14 http queries': {
     action: '發送 `+` 作為查詢的一部分不再需要解決方法，因為 `+` 不再發送空格。'
  },
  'v14 AnimationDriver.getParentElement': {
     action: '實作 `AnimationDriver` 現在需要 `getParentElement` 方法。'
  },
  'v14 invalid config': {
     action: '無效的延遲載入路由設定將拋出錯無而不是被忽略。'
  },
  'v14 router resolver': {
     action: '移除 `RouterOutletContract.activateWith` 的 `resolver` 以及 `OutletContext` 類別的 `resolver` 因為不再需要 resolver 工廠。'
  },
  'v14 initialUrl': {
     action: '`Router.initialUrl` 只接受 `UrlTree` 以避免指派字串遭到誤用。'
  },
  'v15 node support': {
    action: '在升級應用程式之前確認你正在使用支援的 node.js 版本。Angular v15 支援 node.js 版本：14.20.x、16.13.x 和 18.10.x。<a href="https://angular.io/guide/update-to-version-15#v15-bc-01" alt="關於這項變更的更多資訊">閱讀更多</a>'
  },
  'v15 ts support': {
    action: '在升級應用程式之前確認你正在使用支援的 TypeScript 版本。Angular v15 支援 TypeScript 版本 4.8 或更高版本。<a href="https://angular.io/guide/update-to-version-15#v15-bc-02" alt="關於這項變更的更多資訊">閱讀更多</a>'
  },
  'v15 ng update': {
    action: '在應用程式的專案目錄中，執行 `ng update @angular/core@15 @angular/cli@15` 以將你的應用程式升級到 Angular v15。'
  },
  'V15 update @angular/material': {
    action: '執行 `ng update @angular/material@15` 以更新 Material 元件。'
  },
  'v15 keyframe': {
    action: '在 v15 中，Angular 編譯器會將 CSS 中的 `@keyframes` 加上元件的範圍前綴。這意味著任何依賴 `keyframes` 名稱的 TypeScript 程式碼在 v15 中都不再運作。請更新任何此類實例：以程式碼方式定義 keyframes、使用全域樣式表或更改元件的檢視封裝。<a href="https://angular.io/guide/update-to-version-15#v15-bc-03" alt="關於這項變更的更多資訊">閱讀更多</a>'
  },
  'v15 no-ivy': {
    action: '在應用程式的 `tsconfig.json` 檔案中，移除 `enableIvy`。在 v15 中，Ivy 是唯一的渲染引擎，因此不再需要 `enableIvy`。'
  },
  'v15 base-decorators': {
    action: '確保在有繼承關係且使用建構子和相依注入的基礎類別中使用裝飾器。這樣的基礎類別應該使用 `@Injectable` 或 `@Directive` 來裝飾，否則編譯器會回傳錯誤。<a href="https://angular.io/guide/update-to-version-15#v15-bc-05" alt="關於這項變更的更多資訊">閱讀更多</a>'
  },
  'v15 setDisabledState': {
    action: '在 v15 中，當 `ControlValueAccessor` 附加時，`setDisabledState` 始終會被呼叫。若要選擇性地取消此行為，請使用 `FormsModule.withConfig` 或 `ReactiveFormsModule.withConfig`。<a href="https://angular.io/guide/update-to-version-15#v15-bc-06" alt="關於這項變更的更多資訊">閱讀更多</a>'
  },
  'v15 canParse': {
    action: '使用 `@angular/localize/tools` 中的 `analyze` 來取代使用 `canParse` 的應用程式。在 v15 中，`@angular/localize/tools` 中的所有翻譯解析器都已從 `canParse` 方法中移除。<a href="https://angular.io/guide/update-to-version-15#v15-bc-07" alt="關於這項變更的更多資訊">閱讀更多</a>'
  },
  'v15 ActivatedRoutSnapshot': {
    action: '確保所有 `ActivatedRouteSnapshot` 物件都有 `title` 屬性。在 v15 中，`title` 屬性是 `ActivatedRouteSnapshot` 的必要屬性。<a href="https://angular.io/guide/update-to-version-15#v15-bc-08" alt="關於這項變更的更多資訊">閱讀更多</a>'
  },
  'v15 RouterOutlet': {
    action: '如果你的 `RouterOutlet` 測試失敗，請確保它們不依賴於相對於變更偵測的相對應元件的實例化順序。在 v15 中，`RouterOutlet` 在變更偵測之後實例化元件。<a href="https://angular.io/guide/update-to-version-15#v15-bc-09" alt="關於這項變更的更多資訊">閱讀更多</a>'
  },
  'v15 relativeLinkResolution': {
    action: '在 v15 中，`relativeLinkResolution` 在路由器中無法設定。它用來退出現在已經是標準的早期 bug 修正。 <a href="https://angular.io/guide/update-to-version-15#v15-bc-10" alt="關於這項變更的更多資訊">閱讀更多</a>'
  },
  'v15 DATE_PIPE_DEFAULT_OPTIONS': {
    action: '將 `DATE_PIPE_DEFAULT_TIMEZONE` token 的實例更改為使用 `DATE_PIPE_DEFAULT_OPTIONS` 來配置時區。在 v15 中，`DATE_PIPE_DEFAULT_TIMEZONE` token 已棄用。<a href="https://angular.io/guide/update-to-version-15#v15-dp-01" alt="關於這項變更的更多資訊">閱讀更多</a>'
  },
  'v15 Injector.get': {
    action: '更新使用 `InjectFlags` 參數的 `Injector.get()` 實例，以使用 `InjectOptions` 參數。v15 中棄用 `Injector.get()` 的 `InjectFlags` 參數。<a href="https://angular.io/guide/update-to-version-15#v15-dp-02" alt="關於這項變更的更多資訊">閱讀更多</a>'
  },
  'v15 TestBed.inject': {
    action: '更新使用 `InjectFlags` 參數的 `TestBed.inject()` 實例，以使用 `InjectOptions` 參數。v15 中棄用 `TestBed.inject()` 的 `InjectFlags` 參數。<a href="https://angular.io/guide/update-to-version-15#v15-dp-01" alt="關於這項變更的更多資訊">閱讀更多</a>'
  },
  'v15 ngModule in providedIn': {
    action: '在 v15 中，對 `@Injectable` 和 `InjectionToken` 使用 `providedIn: ngModule` 已棄用。<a href="https://angular.io/guide/update-to-version-15#v15-dp-04" alt="關於這項變更的更多資訊">閱讀更多</a>'
  },
  'v15 providedIn any': {
    action: '在 v15 中，對 `@Injectable` 和 `InjectionToken` 使用 `providedIn: \'any\'` 已棄用。<a href="https://angular.io/guide/update-to-version-15#v15-dp-05" alt="關於這項變更的更多資訊">閱讀更多</a>'
  },
  'v15 RouterLinkWithHref': {
    action: '更新 `RouterLinkWithHref` directive 的實例，以使用 `RouterLink` directive。v15 中棄用 `RouterLinkWithHref` 指令。<a href="https://angular.io/guide/update-to-version-15#v15-dp-06" alt="關於這項變更的更多資訊">閱讀更多</a>'
  },
  'v15 mat refactor': {
    action: '在 Angular Material v15 中，許多元件已基於官方 Material Design Components (MDC) for Web 重構。這個變更影響了許多元件的 DOM 和 CSS 類別。<a href="https://rc.material.angular.io/guide/mdc-migration" alt="關於這項變更的更多資訊">閱讀更多</a>'
  },
  'v15 visual review': {
    action: '在將應用程式更新到 v15 後，用肉眼檢查一下您的應用程式及其互動，以確保一切都正常運作。'
  },
};
console.log(`zh-TW registered`);
registerLocalization('zh-TW', steps, uiLabels);
