import { LocalizedSteps, registerLocalization, LocalizedLabels } from '../localization';

const uiLabels: LocalizedLabels = {
  'Angular Update Guide': 'Angularアップデートガイド',
  'Select the options that match your update': 'プロジェクトに適したオプションを選択しましょう',
  'Angular versions': 'Angularのバージョン',
  From: 'From',
  To: 'To',
  Warning: '注意',
  'Plans for releases after the current major release are not finalized and may change. These recommendations are based on scheduled deprecations.':
    '現在のメジャーリリースより先のリリース内容は未確定で変更される可能性があります。推奨事項は非推奨化のスケジュールに基づいています。',
  'We do not currently support downgrading versions of Angular.':
    'バージョンのダウングレードは現在サポートしていません。',
  'We do not recommend moving across multiple major versions.':
    '複数のメジャーバージョンをまたぐことはおすすめしません。',
  'Application complexity': 'アプリケーションの複雑度',
  Basic: 'Basic',
  Medium: 'Medium',
  Advanced: 'Advanced',
  'Shows information for all Angular developers.': 'すべてのAngular開発者のための情報を表示します。',
  "Shows information that's of interest to more advanced Angular developers.":
    'より高度なAngular開発者が興味を持つ情報を表示します。',
  'Shows all the information we have about this update.': 'すべての情報を表示します。',
  'Other dependencies': 'その他の依存関係',
  'I use': '',
  'Package Manager': 'パッケージマネージャ',
  npm: 'npm',
  yarn: 'yarn',
  'Show me how to update!': 'アップデート手順を表示！',
  'Before you update': 'アップデートの前に',
  // tslint:disable-next-line: quotemark
  "You don't need to do anything before moving between these versions.": 'バージョン移行前に必要な手順はありません。',
  'Update to the new version': '新バージョンへのアップデート',
  // tslint:disable-next-line: quotemark
  'Review these changes and perform the actions to update your application.':
    'これらの変更点を確認し、アプリケーションをアップデートするためのアクションを実行してください。',
  'After you update': 'アップデートの後に',
  // tslint:disable-next-line: quotemark
  "You don't need to do anything after moving between these versions.": 'バージョン移行後に必要な手順はありません。',
};

const steps: LocalizedSteps = {
  // v10.0
  debug: {
    action:
      'Angular 9では、Ivyがデフォルトのレンダリングエンジンになりました。互換性の問題が発生する可能性がある場合は、[Ivy互換性ガイド](https://angular.io/guide/ivy-compatibility) をご覧ください。',
  },
  'ngcc postinstall': {
    action:
      '多くのAngularライブラリに依存している場合は、[package.jsonを少し変更する]((https://v9.angular.io/guide/ivy#speeding-up-ngcc-compilation))だけで、npm `postinstall` スクリプトで `ngcc`（Angular Compatibility Compiler）を呼び出すことで、ビルドの高速化を検討できます。',
  },
  'ivy i18n': {
    action:
      'Angular 9では、Angularの国際化（i18n）に依存している場合にロードする必要があるグローバルな `$localize()`関数が導入されました。 `ng add @angular/localize`を実行して、必要なパッケージとコードの変更を追加します。変更の詳細については、[$localizeグローバルインポート移行ガイド](https://v9.angular.io/guide/migration-localize) をご覧ください。',
  },
  entryComponents: {
    action:
      'NgModuleで `entryComponents` を指定している場合、または `ANALYZE_FOR_ENTRY_COMPONENTS` を使用している場合は、それらを削除できます。これらは、Ivyコンパイラーおよびランタイムでは必要ありません。',
  },
  'testbed-get': {
    action:
      '`TestBed.get`は、代わりに `TestBed.inject` を使用する必要があります。この新しいメソッドの動作は同じですが、タイプセーフです。',
  },
  $localize: {
    action:
      '[Angularのi18nサポート](http://angular.io/guide/i18n) を使用する場合は、 `@angular/localize`の使用を開始する必要があります。 [$localizeグローバルインポート移行ガイド](https://v9.angular.io/guide/migration-localize)の詳細をご覧ください。',
  },
  'ng update v10': {
    action: '`ng update @angular/core@10 @angular/cli@10` を実行し、Angularのバージョン10を導入します。',
  },
  'update @angular/material': { action: '`ng update @angular/material`を実行します。' },
  browserlist: {
    action:
      '新しいプロジェクトではファイル名に `browserslist`ではなく、 `.browserslistrc`を使用します。`ng update` が自動的に移行します。',
  },
  'v10-versions': {
    action:
      'Angularには、 `tslint` v6、`tslib` v2、および[TypeScript 3.9](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html) が必要になりました。 `ng update`が自動的に移行します。',
  },
  styleext: {
    action: 'Angular Schematicsでの `styleext` と `spec`の使用をやめてください。`ng update`が自動的に移行します。',
  },
  'tsconfig-layout': {
    action:
      'Angularは `tsconfig.base.json`の使用を推奨し、さまざまな型付けコンテキスト（shared、ユニットテスト、e2eテスト、アプリケーションなど）を整理するのに役立ちます。 `ng update`が自動的に移行します。',
  },
  'classes-without-decorators': {
    action:
      'バージョン10では、Angularデコレーターを持たずにAngularの機能を使用するクラスはサポートされなくなりました。 [詳細はこちら](https://v10.angular.io/guide/migration-undecorated-classes)。`ng update`が自動的に移行します。',
  },
  'injectable-definitions': {
    action:
      'Angular 9以降、DIに対する@Injectableデコレーターの適用はより厳格になり、不完全なプロバイダー定義の動作は異なります。 [詳細はこちら](https://v9.angular.io/guide/migration-injectable)。`ng update`が自動的に移行します。',
  },
  'closure-jsdoc-comments': {
    action:
      'AngularのNPMパッケージには、Closure Compilerで使用するために必要なjsdocコメントが含まれなくなりました（非常に一般的ではありません）。このサポートは実験的なものであり、一部のユースケースでのみ機能しました。代替推奨パスが間もなく発表されます。',
  },
  'forms-number-input': {
    action:
      'Angularフォームを使用する場合、`number`型のinputは[change イベント](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)をリッスンしなくなりました（このイベントは変更ごとに必ず発生するとは限りません）、代わりに[input イベント](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)をリッスンします。',
  },
  'forms-length-input': {
    action:
      'Angularフォームバリデーションでは、 `minLength`および`maxLength`バリデーターはフォームコントロールの値にnumber型のlengthプロパティがあることを検証し、そうである場合のみ長さを検証します。',
  },
  'esm5-bundles': {
    action:
      '[Angular Package Format](https://g.co/ng/apf)が更新され、 `esm5`および`fesm5`形式が削除されました。これらはnpmパッケージで配布されなくなりました。 CLIを使用しない場合は、Angularのコードを自分でES5にダウンレベルする必要がある場合があります。',
  },
  'console-errors': {
    action:
      '未知の要素に関する警告がエラーとして記録されるようになりました。 これによってアプリが壊れることはありませんが、 `console.error`を介したログが記録されないことを期待するツールが誤作動させる可能性があります。',
  },
  'router-resolver-empty': {
    action:
      '`EMPTY`を返すリゾルバーがナビゲーションをキャンセルします。 ナビゲーションを続行したい場合は、リゾルバーを更新して値を生成する必要があります（つまり、 `defaultIfEmpty(...)`、 `of(...)`など）。',
  },
  'sw-vary-headers': {
    action:
      'Angular Service Workerを使用していて、[Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary)ヘッダーを持つリソースに依存している場合、これらのヘッダーはブラウザー間での予測不能な振る舞いを避けるために無視されます。これを回避するには、Service Workerを[構成](https://angular.io/guide/service-worker-config)して、これらのリソースのキャッシュを回避します。',
  },
  'expression-changed-after-checked-new': {
    action:
      '`async`パイプを使用する際にこれまで検出されなかった`ExpressionChangedAfterItHasBeenChecked`エラーが表示される場合があります。2つの`WrappedValues`は、それぞれのラップされていない値が異なる場合でも、チェックの目的ですべての場合に「等しい」と見なされるため、以前はエラーが検出されなかった可能性があります。 バージョン10では`WrappedValue`が削除されました。',
  },
  'property-binding-change-detection': {
    action:
      '`[val]=(observable | async).someProperty`のようなプロパティバインディングがある場合、`someProperty`の値が前の出力と同じである場合、変更検出はトリガーされなくなります。これに依存している場合は、手動でサブスクライブして必要に応じて `markForCheck`を呼び出すか、バインディングを更新して参照が確実に変更されるようにします。',
  },
  'day-periods-crossing-midnight': {
    action:
      '`formatDate()`または `DatePipe`とともに、`b`または `B`形式コードのいずれかを使用する場合、ロジックは更新されて真夜中をまたがる期間の時間に一致するようになりました。英語の場合は`night`などの正しい出力をレンダリングするようになりました。',
  },
  'urlmatcher-null': {
    action: '`UrlMatcher`を使用する場合、型は常に`null`を返すことができることを反映しました。',
  },
  'v10-more-details': {
    action:
      'サポート終了、自動マイグレーション、変更の詳細については、[angular.ioのガイド](https://angular.jp/guide/updating-to-version-10)にアクセスしてください。',
  },
  // v10.2
  'universal-baseurl': {
    action:
      'Angular Universalユーザーの場合、 `useAbsoluteUrl`を使用して`platform-server`をセットアップする場合は、 `baseUrl`も指定する必要があります。',
  },
  // v11.0
  'v11 ng update': {
    action: '`ng update @angular/core @angular/cli`を実行すると、Angularのバージョンが11になります。',
  },
  'v11 versions': {
    action:
      'Angularは [TypeScript 4.0](https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/)が必要になりました。ng updateで自動的に移行します。',
  },
  'v11 browser support': {
    action:
      'IE9、IE10、IE mobileのサポートが終了しました。これは[v10 update](https://blog.angular.io/version-10-of-angular-now-available-78960babd41#c357)で発表されました。',
  },
  'webpack5 optin': {
    action:
      'Yarnを使って`"resolutions": {"webpack". "^5.0.0"}` を `package.json` に追加することで、webpack 5を使用するようにオプトインすることができます。',
  },
  'ng new strict prompt': {
    action:
      '新しいプロジェクトを生成するときに、厳密モードを有効にするかどうかを尋ねられます。これにより、TypeScript と Angular コンパイラがより厳密な型チェックを行うように設定され、デフォルトではより小さなバンドル予算が適用されます。プロンプトをスキップするには、`--strict=true` または `--strict=false` を使うことができます。',
  },
  'v11 router relativeLinkResolution': {
    action:
      'Routerを使用している場合、`relativeLinkResolution` のデフォルト値が `legacy` から `corrected` に変更されています。アプリケーションがExtraOptionsで値を指定せずにデフォルトを使用していて、空のパスルートの子からナビゲートする際に相対リンクを使用している場合は、`RouterModule`の設定を更新して `legacy` を `relativeLinkResolution` に明示的に指定する必要があります。詳細は [ドキュメント](https://v11.angular.io/api/router/ExtraOptions#relativeLinkResolution) を参照してください。',
  },
  'router initialNavigation': {
    action:
      'Angular Router では、v4 で非推奨とされていた `initialNavigation` のオプションが削除されました。以前に `enabled` または `true` を使用していた場合は、`enabledNonBlocking` または `enabledBlocking` を選択してください。以前に `false` または `legacy_disabled` を使用していた場合は、`disabled` を使用してください。',
  },
  'routerlink preserveQueryParams': {
    action:
      'Angular Routerの`routerLink`では、`preserveQueryParams`が削除されているので、代わりに`queryParamsHandling="preserve"`を使用してください。',
  },
  'routerlink queryParams typing': {
    action:
      '`queryParams`, `fragment` や `queryParamsHandling` の `routerLink` の値にアクセスしている場合、`undefined` や `null` も受け付けるように型付けを緩和する必要があるかもしれません。',
  },
  'viewencapsulation native removed': {
    action:
      'コンポーネントビューのカプセル化オプション `ViewEncapsulation.Native` は削除されました。代わりに `ViewEncapsulation.ShadowDom` を使ってください。`ng update` が自動的に移行します。',
  },
  'ICU expressions typechecked': {
    action:
      'i18n を使用している場合、International Components for Unicode (ICU) 式内の式が再び型チェックされるようになりました。これにより、ICU内に現れる式にエラーが見つかった場合、コンパイルに失敗する可能性があります。',
  },
  'forms validators asyncValidators typing': {
    action:
      '以前は `@angular/forms` パッケージのディレクティブは、コンストラクタで期待される `validators` と `asyncValidators` の引数の型として `any[]` を持っていました。現在ではこれらの引数は適切に型付けされているので、もしあなたのコードがフォームのディレクティブのコンストラクタの型に依存しているのであれば、型の安全性を向上させるためにいくつかの更新が必要になるかもしれません。',
  },
  'forms AbstractFormControl': {
    action:
      'Angular Forms を使っている場合、`AbstractFormControl.parent` の型に null が含まれるようになりました。 `ng update`で自動的に移行されますが、もしコードがundefinedに対して厳密等価性をテストしていた場合は、これを `=== null` に変更する必要があります。',
  },
  'platform-webworker': {
    action:
      'あまり使われていなかった `@angular/platform-webworker` と `@angular/platform-webworker-dynamic` は v8 で非推奨となり削除されました。Angularの一部をWebWorkerで実行することは、一般的なユースケースでは決してうまくいかない実験でした。Angularは依然として[Web Worker](https://angular.io/guide/web-worker)をしっかりサポートしています。',
  },
  'v11 slice pipe typing': {
    action: '`slice` パイプはunefinedの入力値に対して null を返すようになりました。',
  },
  'v11 keyvalue typing': {
    action:
      '`keyvalue` パイプが修正され、数値キーを持つオブジェクトの入力に対し、結果の型にはキーの文字列表現が含まれるようになりました。これはすでに適用されていたもので、コードは単純にこれを反映するように更新されました。パイプ出力の利用者が不正な型に依存していた場合は更新してください。これは入力値が `Map` である場合には影響しませんので、`number` を保持する必要がある場合には有効な方法です。',
  },
  'v11 number pipe typing': {
    action:
      '数値パイプ (`decimal`, `percent`, `currency` など) では、どの型が受け入れられるかが明示的に記述するようになりました。',
  },
  'v11 date pipe typing': { action: '`date` パイプは、どの型が受け入れられるかを明示的に記述するようになりました。' },
  'v11 datetime rounding': {
    action:
      'ミリ秒単位の端数を含むフォーマットで日付時刻フォーマットの文字列を `DatePipe` に渡した場合、ミリ秒は常に直近のミリ秒ではなく切り捨てられるようになりました。ほとんどのアプリケーションでは、この変更の影響を受けることはありません。これが望ましい動作ではない場合は、文字列を `DatePipe` に渡す前にミリ秒の部分を丸めるように文字列を前処理することを検討してください。',
  },
  'v11 async pipe typing': {
    action:
      '`async`パイプは、undefined型の入力に対してundefinedを返さない型定義になりました。コードは実際にはundefinedの入力に対してnullを返していたことに注意してください。',
  },
  'v11 case pipe update': {
    action:
      '`uppercase`パイプと`lowercase`パイプは、falsyな値を通さないようになりました。これらのパイプは `null` と `undefined` の両方を `null` にマップし、無効な入力 (`0`, `false`, `NaN`) に対して例外を発生させるようになりました。これは他の Angular パイプと一致しています。',
  },
  'v11 router NavigationExtras typing': {
    action:
      'Routerの `NavigationExtras` を使う場合、新しい型付けでは `NavigationExtras` 型の変数を渡すことができますが、既知のプロパティしか指定できないため、オブジェクトリテラルを渡すことはできません。また、`Pick` のプロパティと共通のプロパティを持たない型も受け付けません。この変更の影響を受ける場合は、それぞれの関数呼び出しで実際に使用されるNavigationExtrasのプロパティのみを指定するか、次のようにオブジェクトや変数の型アサーションを使用してください: `as NavigationExtras`',
  },
  'v11 TestBed.overrideProvider': {
    action:
      'テストでTestBedの初期化後に `TestBed.overrideProvider` を呼び出すと、プロバイダのオーバーライドは適用されなくなります。この動作は他のオーバーライドメソッド(`TestBed.overrideDirective` など)と一致していますが、そのことを示すエラーをスローします。このチェックは以前はTestBed.overrideProvider関数にはありませんでした。このエラーが出た場合は、TestBedの初期化が完了する前に `TestBed.overrideProvider` の呼び出しを移動する必要があります。',
  },
  'v11 router RouteReuseStrategy': {
    action:
      'Routerの RouteReuseStrategy を使用している場合、引数の順序が変更されています。以前、子ルートを評価する際に `RouteReuseStrategy#shouldReuseRoute` を呼び出した場合、`future` と `current` の引数を入れ替えて呼び出されていました。`RouteReuseStrategy`が特に未来または現在のスナップショットの状態のみに依存している場合は、`shouldReuseRoute` の実装で使用する `future` と `current` の `ActivateRouteSnapshots` を更新する必要があるかもしれません。',
  },
  'v11 locale data readonly': {
    action:
      'ロケールデータの配列を使用している場合、このAPIはReadonlyな配列を返すようになりました。配列を改変していた場合 (例: `sort()`, `push()`, `splice()` など)、そのコードはコンパイルできなくなります。配列を改変する必要がある場合は、コピーして(例: `slice()`を呼び出して)、そのコピーを改変する必要があります。',
  },
  'v11 CollectionChangeRecord': {
    action:
      '変更検知では、`CollectionChangeRecord` が削除されたので、代わりに `IterableChangeRecord` を使用してください。',
  },
  'v11 forms async validators': {
    action:
      'Angular Formsで初期化時に非同期バリデータが定義されている `FormControl`, `FormGroup`, `FormArray` のクラスインスタンスを使用している場合、以前は非同期バリデータが完了してもステータス変更イベントは発生しませんでした。これが変更され、ステータスイベントが `statusChanges` Observableに出力されるようになりました。以前の振る舞いに依存している場合は、この追加のステータス変更イベントをフィルタリングしたり無視したりすることができます。',
  },
  // v12.0
  'v12 ng update': {
    action: '`ng update @angular/core@12 @angular/cli@12`を実行すると、Angularのバージョン12になります。',
  },
  'v12 versions': {
    action:
      'Angularには[TypeScript 4.2](https://devblogs.microsoft.com/typescript/announcing-typescript-4-2/)が必要になりました。`ng update`で自動的にアップデートされます。',
  },
  'v12 browser support': {
    action:
      'IE11のサポートは非推奨になりました。詳細は、[RFC for IE11 removal](https://github.com/angular/angular/issues/41840)をご覧ください。',
  },
  'v12 minimum  Node.js version': { action: 'Node.jsのバージョン10以下では、Angularを使用できなくなりました。' },
  'v12 `XhrFactory` relocation': {
    action: '`XhrFactory`のインポート先を`@angular/common/http`から`@angular/common`に変更しました。',
  },
  'v12 removal of UMD bundles': {
    action: 'v12にはUMD形式のバンドルが含まれなくなるため、ビルドパイプラインから依存しないようにしてください。',
  },
  'v12 i18n message ids': {
    action:
      'レガシーなi18nメッセージID に依存している場合は、`localize-migrate` ツールを使用して [移行してください](https://angular.io/guide/migration-legacy-message-id)。',
  },
  'v12 deprecates `emitDistinctChangesOnly`': {
    action:
      '`emitDistinctChangesOnly` を使用して `@ContentChildren` や `@ViewChildren` クエリを構成していた場合は、これまでの振る舞いに合わせて値を `false` に更新する必要があります。v12では、`emitDistinctChangesOnly`のデフォルト値は`true`となっていますが、今後のリリースでは、不要な変更が発生しないように、この設定オプションを削除する予定です。',
  },
  'v12 prod by default': {
    action:
      '任意でマイグレーションを実行することで、プロダクションビルドをデフォルトで有効にすることができます。`ng update @angular/cli@12 --migrate-only production-by-default`.',
  },
  'v12 min and max form attributes': {
    action:
      'Angular フォームを使用している場合、`<input type="number">` の `min` および `max` 属性がバリデーション処理をトリガーするようになりました。',
  },
  'v12 `emitEvent` in `FormArray` and `FormGroup`': {
    action:
      'アプリケーションが `FormArray` や `FormGroup` クラスを拡張し、メソッドをオーバーライドするカスタムクラスを持っている場合は、実装を更新する必要があります。',
  },
  'v12 zone.js minimum version': {
    action: 'zone.jsをバージョン0.11.4に更新します。`ng update`でこの依存関係が自動的に更新されます。',
  },
  'v12 `HttpParams` method params update': {
    action:
      '`HttpParams`クラスを拡張した場合、パラメータの型の変更を反映させるために、そのメソッドのシグネチャの更新が必要かもしれません。',
  },
  'v12 `routerLinkActiveOptions`': {
    action:
      '`RouterLinkActive` の `routerLinkActiveOptions` プロパティがより具体的な型になりました。このプロパティにアクセスするコードの更新が必要かもしれません。',
  },
  'v12 `APP_INITIALIZER` callback types': {
    action:
      'イニシャライザのコールバックの戻り値の型がより具体的になりました。これにより、`Injector.get`または` TestBed.inject`を介して `APP_INITIALIZER`インスタンスを取得する場合、コードの更新が必要かもしれません。',
  },
  'v12 fragment typings': {
    action:
      'ルーターのフラグメントは `null` になる可能性がありました。TypeScriptの型チェックが失敗しないように、`null`チェックを追加してください。',
  },
  'v12 `ng.getDirectives`': {
    action:
      '特定のDOMノードに関連付けられたディレクティブが見つからない場合に`ng.getDirectives`エラーを投げる振る舞いに頼らないようにしてください。',
  },
  // v13.0
  'v13 ng update': {
    action:
      '`npx @angular/cli@13 update @angular/core@13 @angular/cli@13` を実行すると、Angularのバージョンが13になります。',
  },
  'TypeScript 4.4': {
    action:
      'AngularはTypeScript 4.4を使用するようになりました。壊れる可能性のある変更点についてはこちらをご覧ください： https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-4.html',
  },
  'v13 node': {
    action:
      '<a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 12.20.0以降</a>を使用していることを確認してください。',
  },
  'v13 routerLink': {
    action:
      '`undefined` と `null` を渡すことで、`routerLink` のナビゲーションを無効にすることができるようになりました。以前の `routerLink` ディレクティブでは、この2つの値を空の文字列と同等のものとして受け入れていました。',
  },
  'v13 router loadChildren': {
    action:
      '`loadChildren`に文字列の値を設定して、遅延ロードのルートを指定することができなくなりました。必ずESMの動的インポート文に移行してください。',
  },
  'v13 service worker activated': {
    action:
      '`SwUpdate` の `activated` observable は、現在では非推奨となっています。サービスワーカーのアクティベーションステータスを確認するには、代わりに `activatedUpdate` メソッドを使用してください。',
  },
  'v13 service worker available': {
    action:
      '`SwUpdate`の`available` observableは、現在では非推奨となっています。同じ情報を取得するには、`versionUpdates` を使用し、`VersionReadyEvent` イベントのみをフィルタリングしてください。',
  },
  'v13 renderModuleFactory': {
    action:
      'Ivyでは、`@angular/platform-server`の`renderModuleFactory`はもう必要ありません。代わりに `renderModule` を使用してください。',
  },
  'v13 forms status': {
    action:
      '`AbstractControl.status` の型を `FormControlStatus` に、`AbstractControl.statusChanges` を `Observable<FormControlStatus>` に絞りました。`FormControlStatus` は、フォームコントロールで可能なすべてのステータス文字列の組合わせです。',
  },
  'v13 router serializer': {
    action:
      "URI仕様に合わせて、URLシリアライザがクエリパラメータのクエスチョンマークを尊重するようになりました。例えば、`/path?q=hello?&q2=2`は、`{ q: 'hello?', q2: 2 }`と解析されるようになりました。",
  },
  'v13 host binding': {
    action:
      "`href` が属性バインディングになりました。これは、`DebugElement.properties['href']`が、`routerLink`の`href`プロパティの内部値ではなく、ネイティブ要素が返す`href`の値を返すようになったことを意味しています。",
  },
  'v13 spy location': {
    action:
      '`SpyLocation` は、`location.go` が呼ばれたときに、`popstate` イベントを出さなくなりました。加えて、`simulateHashChange` は `haschange` と `popstate` の両方をトリガーするようになりました。`location.go` に依存しているテストでは、おそらく `simulateHashChange` を使用して `popstate` を捕捉する必要があります。',
  },
  'v13 router URL replacement': {
    action:
      '新しいナビゲーションが進行中のナビゲーションをキャンセルした場合、ルーターはブラウザのURLを置き換えなくなります。Angular ルーターによって処理された最初のナビゲーションで `navigationId` が存在することに依存しているハイブリッドアプリケーションは、`NavigationCancel` イベントをサブスクライブし、`location.replaceState` を実行して `navigationId` を `Router` の状態に追加する必要があります。さらに、`SpyLocation`で`urlChanges`をアサートするテストは、トリガーされなくなった`replaceState`を考慮して調整する必要があるかもしれません。',
  },
  'v13 removed symbols': {
    action:
      'Routerパッケージは、`SpyNgModuleFactoryLoader`と`DeprecatedLoadChildren`をエクスポートしなくなりました。これらを使用している場合は、対応するimport文を削除してください。',
  },
  // v14.0
  'v14 ng update': {
    action: '`ng update @angular/core@14 @angular/cli@14` を実行すると、Angularのバージョンが14になります。',
  },
  'TypeScript 4.6': {
    action:
      'AngularがTypeScript 4.6を使用するようになりました。潜在的な破壊的変更についての詳細をご覧ください。: https://devblogs.microsoft.com/typescript/announcing-typescript-4-6/',
  },
  'v14 node': {
    action:
      '<a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 14.15.0 以上</a>を使用していることを確認してください。',
  },
  'v14 strict forms': {
    action:
      'フォームモデルは一般的な型パラメータを必要とするようになりました。徐々に移行するために、フォームモデルクラスの非型化バージョンを使用することを選択することができます。',
  },
  'v14 aotSummaries': { action: 'Ivy で必要としなくなったため、`TestBed` から `aotSummaries` を削除しました。' },
  'v14 MatVertical and Horizontal Stepper': {
    action:
      'もし、 `MatVerticalStepper` や `MatHorizontalStepper` を使用している場合は、必ず `MatStepper` に切り替えてください。',
  },
  'v14 JSONP': {
    action:
      'JSONP リクエストからヘッダーを削除しました。JSONP はヘッダをサポートしておらず、もし指定された場合、HTTP モジュールはヘッダを無視するのではなく、エラーを投げるようになりました。',
  },
  'v14 resolvers': {
    action:
      'リゾルバは、最後に放出された値を取るのではなく、他のガードとより良く整合するために、Observableの最初の値を取り、その後にナビゲーションに進むようになりました。',
  },
  'v14 deprecate protractor entry': {
    action: '非推奨の `angular/cdk/testing/protractor` エントリーポイントは削除されました。',
  },
  'v14 chipInput': {
    action: '`MatChipInputEvent` の `chipInput` は必須となったので、必ず指定してください。',
  },
  'v14 mixinErrorState': {
    action:
      'mixinが提供しなくなったので、`mixinErrorState` を使って `stateChanges` クラスメンバーを実装する必要があります。',
  },
  'v14 CdkStepper orientation': {
    action: '`CdkStepper._orientation`の代わりに、`CdkStepper.orientation`を使用します。',
  },
  'v14 CdkStepper and MatStepper': {
    action:
      '`CdkStepper` や `MatStepper` を拡張したり、コンストラクタで使用している場合、 `_document` パラメータは削除されたので、今後は渡す必要はありません。',
  },
  'v14 mat-list-item-avatar': {
    action: '`mat-list-item-avatar` の CSS クラスを `mat-list-item-with-avatar` にリネームします。',
  },
  'v14 MatSelectionListChange.option': {
    action: '`MatSelectionListChange.option` ではなく、`MatSelectionListChange.options` を使ってください。',
  },
  'v14 getHarnessLoaderForContent': {
    action: '`getHarnessLoaderForContent` ではなく、 `getChildLoader(MatListItemSection.CONTENT)` を使用します。',
  },
  'v14 MatSelectionList': {
    action:
      '`MatSelectionList` を使用している場合は、コンストラクタで `_focusMonitor` を渡す必要があります。さらに、このクラスは `tabIndex` プロパティと `tabIndex` コンストラクタのパラメータを持たなくなりました。',
  },
  'v14 initialNavigation': {
    action: "`initialNavigation: 'enabled'` を `initialNavigation: 'enabledBlocking'` に更新しました。",
  },
  'v14 Route.pathMatch': {
    action:
      '`pathMatch` を使ってルートを定義している場合は、明示的に `Route` または `Routes` にキャストする必要があるかもしれません。`Route.pathMatch` は `string` 型との互換性がなくなりました。',
  },
  'v14 stricter LoadChildrenCallback': {
    action:
      '`LoadChildrenCallback` が返すプロミスは、 `any` ではなく、より厳しい型パラメータ `Type<any>|NgModuleFactory<any>` を持つようになりました。',
  },
  'v14 router scheduling': {
    action:
      'ルーターは `setTimeout` 内でリダイレクトナビゲーションをスケジュールしないようになりました。テストがこの動作に依存しないことを確認してください。',
  },
  'v14 LocationStrategy': {
    action: '`LocationStrategy` インターフェースの実装には、 `getState()` の定義が必要になりました。',
  },
  'v14 http queries': {
    action: 'クエリ文字列の一部として `+` を送信しても、スペースを送信しなくなったので、回避策が不要になりました。',
  },
  'v14 AnimationDriver.getParentElement': {
    action: '`AnimationDriver` を実装するには、`getParentElement` メソッドが必要になりました。',
  },
  'v14 invalid config': {
    action: '遅延ロードされたモジュールの無効なルート構成は、無視されるのではなく、エラーを投げるようになりました。',
  },
  'v14 router resolver': {
    action:
      'ファクトリーリゾルバが不要になったため、 `RouterOutletContract.activateWith` 関数と `OutletContext` クラスから `resolver` を削除します。',
  },
  'v14 initialUrl': {
    action:
      '`Router.initialUrl` は `UrlTree` のみを受け付けます。これは `string` 値を代入して API を誤用することを防ぐためです。',
  },
  // v15
  'v15 node support': {
    action:
      'アプリケーションのアップグレードを行う前に、サポートされているバージョンの Node.js を使用していることを確認してください。 Angular v15 は次の Node.js バージョンをサポートしています： 14.20.x, 16.13.x, 18.10.x. <a href="https://angular.io/guide/update-to-version-15#v15-bc-01" alt="この変更に関する詳細情報へのリンク">さらに読む</a>',
  },
  'v15 ts support': {
    action:
      'アプリケーションをアップグレードする前に、サポートされているバージョンのTypeScriptを使用していることを確認してください。 Angular v15 は TypeScript バージョン 4.8 以降をサポートしています。  <a href="https://angular.io/guide/update-to-version-15#v15-bc-02" alt="この変更に関する詳細情報へのリンク">さらに読む</a>',
  },
  'v15 ng update': {
    action:
      'アプリケーションのプロジェクトディレクトリで、`ng update @angular/core@15 @angular/cli@15` を実行し、アプリケーションを Angular v15 にアップデートします。',
  },
  'V15 update @angular/material': {
    action: '`ng update @angular/material@15` を実行し、Materialコンポーネントを更新します。',
  },
  'v15 keyframe': {
    action:
      'v15 では、Angular コンパイラが CSS 内の `@keyframes` をコンポーネントのスコープでプレフィックスするようになりました。 これにより、`keyframes`の名前に依存するTypeScriptコードはv15で動作しなくなりました。 そのような場合は、キーフレームをプログラムで定義するか、グローバルなスタイルシートを使用するか、コンポーネントのビュー・カプセル化を変更するように更新してください。 <a href="https://angular.io/guide/update-to-version-15#v15-bc-03" alt="Link to more information about this change">さらに読む</a>',
  },
  'v15 no-ivy': {
    action:
      'アプリケーションの `tsconfig.json` ファイルで、`enableIvy` を削除してください。v15では、レンダリングエンジンはIvyだけなので、`enableIvy`は必要ありません。',
  },
  'v15 base-decorators': {
    action:
      'コンストラクターを継承し、依存性の注入を使用する子クラスを持つ基底クラスでは、必ずデコレーターを使用するようにしてください。 このような基底クラスは `@Injectable` または `@Directive` で装飾する必要があり、そうでなければコンパイラーはエラーを返します。 <a href="https://angular.io/guide/update-to-version-15#v15-bc-05" alt="Link to more information about this change">さらに読む</a>',
  },
  'v15 setDisabledState': {
    action:
      'v15 では、`ControlValueAccessor` がアタッチされると、常に `setDisabledState` が呼び出されます。 この動作を無効にするには、`FormsModule.withConfig` または `ReactiveFormsModule.withConfig` を使用します。 <a href="https://angular.io/guide/update-to-version-15#v15-bc-06" alt="Link to more information about this change">さらに読む</a>',
  },
  'v15 canParse': {
    action:
      '`canParse` を使用するアプリケーションは、代わりに `@angular/localize/tools` の `analyze` を使用してください。 v15 では、`canParse` メソッドは `@angular/localize/tools` にあるすべての翻訳パーサーから削除されました。  <a href="https://angular.io/guide/update-to-version-15#v15-bc-07" alt="Link to more information about this change">さらに読む</a>',
  },
  'v15 ActivatedRoutSnapshot': {
    action:
      '`ActivatedRouteSnapshot` オブジェクトがすべて `title` プロパティを持っていることを確認してください。 v15 では、`title` プロパティは `ActivatedRouteSnapshot` の必須プロパティとなります。 <a href="https://angular.io/guide/update-to-version-15#v15-bc-08" alt="Link to more information about this change">さらに読む</a>',
  },
  'v15 RouterOutlet': {
    action:
      'もし `RouterOutlet` を使ったテストが壊れるなら、それが変更検出に対する対応するコンポーネントのインスタンス化順序に依存していないことを確かめてください。 v15 では、`RouterOutlet` は変更検出の後にコンポーネントをインスタンス化します。 <a href="https://angular.io/guide/update-to-version-15#v15-bc-09" alt="Link to more information about this change">さらに読む</a>',
  },
  'v15 relativeLinkResolution': {
    action:
      'v15 では、`relativeLinkResolution`はルーターで設定できなくなりました。 これは、現在標準となっている以前のバグフィックスをオプトアウトするために使用されていました。  <a href="https://angular.io/guide/update-to-version-15#v15-bc-10" alt="Link to more information about this change">さらに読む</a>',
  },
  'v15 DATE_PIPE_DEFAULT_OPTIONS': {
    action:
      '`DATE_PIPE_DEFAULT_TIMEZONE` トークンを使用している場合は、`DATE_PIPE_DEFAULT_OPTIONS` を使用してタイムゾーンを設定するように変更します。  v15 では、`DATE_PIPE_DEFAULT_TIMEZONE` トークンは非推奨です。 <a href="https://angular.io/guide/update-to-version-15#v15-dp-01" alt="Link to more information about this change">さらに読む</a>',
  },
  'v15 iframe': {
    action:
      '既存の `<iframe>` インスタンスには、属性やプロパティのバインディングとして、セキュリティに影響を与える属性が適用されている場合があります。これらのセキュリティに影響する属性は、テンプレートやディレクティブのホストバインディングに存在する可能性があります。このような場合、`<iframe>`バインディングに関する新しくより厳しい規則に準拠するために、更新が必要です。詳しくは、[エラーページ](https://angular.io/errors/NG0910) を参照してください。',
  },
  'v15 Injector.get': {
    action:
      '`InjectFlags` パラメータを使用している `Injector.get()` を更新し、`InjectOptions` パラメータを使用するようにしてください。 `Injector.get()` の `InjectFlags` パラメータは v15 で非推奨になりました。 <a href="https://angular.io/guide/update-to-version-15#v15-dp-02" alt="Link to more information about this change">さらに読む</a>',
  },
  'v15 TestBed.inject': {
    action:
      '`InjectFlags` パラメータを使用している `TestBed.inject()` を更新し、`InjectOptions` パラメータを使用するようにしてください。 `TestBed.inject()` の `InjectFlags` パラメータは v15 で非推奨になりました。 <a href="https://angular.io/guide/update-to-version-15#v15-dp-01" alt="Link to more information about this change">さらに読む</a>',
  },
  'v15 ngModule in providedIn': {
    action:
      '`providedIn: ngModule` を `@Injectable` と `InjectionToken` に使用することは、v15 では非推奨です。 <a href="https://angular.io/guide/update-to-version-15#v15-dp-04" alt="Link to more information about this change">さらに読む</a>',
  },
  'v15 providedIn any': {
    action:
      '`providedIn: \'any\'` を `@Injectable` と `InjectionToken` に使用することは、v15 では非推奨です。 <a href="https://angular.io/guide/update-to-version-15#v15-dp-05" alt="Link to more information about this change">さらに読む</a>',
  },
  'v15 RouterLinkWithHref': {
    action:
      '`RouteLinkWithHref` ディレクティブのインスタンスを更新し、`RouterLink` ディレクティブを使用するようにします。 `RouterLinkWithHref` ディレクティブは v15 で非推奨になりました。 <a href="https://angular.io/guide/update-to-version-15#v15-dp-06" alt="Link to more information about this change">さらに読む</a>',
  },
  'v15 mat refactor': {
    action:
      'Angular Material v15では、多くのコンポーネントが公式のMaterial Design Components for Web（MDC）をベースとするようにリファクタリングされました。 この変更により、多くのコンポーネントの DOM と CSS クラスに影響があります。 <a href="https://rc.material.angular.io/guide/mdc-migration" alt="Link to more information about this change">さらに読む</a>',
  },
  'v15 visual review': {
    action:
      'アプリケーションをv15にアップデートした後、アプリケーションとそのインタラクションを目視で確認し、すべてが正常に動作していることを確認してください。',
  },
  // v16
  'v16 node support': {
    action:
      'アプリケーションをアップグレードする前に、サポートされているNode.jsのバージョンを使用していることを確認してください。Angular v16は、次のNode.jsのバージョンをサポートしています: v16 および v18',
  },
  'v16 ts support': {
    action:
      'アプリケーションをアップグレードする前に、サポートされているバージョンのTypeScriptを使用していることを確認してください。Angular v16はTypeScriptバージョン4.9.3以降をサポートしています。',
  },
  'v16 zone.js support': {
    action:
      'アプリケーションをアップグレードする前に、Zone.jsのサポートされているバージョンを使用していることを確認してください。Angular v16はZone.jsのバージョン0.13.x以降をサポートしています。',
  },
  'v16 RouterEvent': {
    action:
      'Event ユニオン型はもはや `RouterEvent` を含んでいません。つまり、Event型を使用する場合、型定義を `(e: Event)` から `(e: Event|RouterEvent)` に変更しなければならない場合があります。',
  },
  'v16 routerEvent prop type': {
    action: '`NavigationEnd` に加えて、`routerEvent` は `NavigationSkipped` 型を受け付けるようになりました。',
  },
  'v16 RendererType2': {
    action: '`RendererType2.styles`はネストした配列を受け付けなくなり、フラットな配列のみを渡すようになりました。',
  },
  'v16 BrowserPlatformLocation': {
    action:
      '`MockPlatformLocation`がデフォルトでテストに提供されるようになったため、`BrowserPlatformLocation`を使用しているテストを更新する必要があるかもしれません。[さらに読む](https://github.com/angular/angular/blob/main/CHANGELOG.md#common-9)',
  },
  'v16 ngcc': {
    action:
      'v16でAngular Compatibility Compiler（ngcc）が削除されたため、v16以降のプロジェクトではView Engineライブラリがサポートされなくなりました。',
  },
  'v16 createUrlTree': {
    action:
      '`Router.createUrlTree`のバグフィックス後、`ActivatedRoute`をモックしたテストを再調整することが必要な場合があります。[さらに読む](https://github.com/angular/angular/blob/main/CHANGELOG.md#1600-next1-2023-03-01)',
  },
  'v16 ApplicationConfig imports': {
    action: '`ApplicationConfig` のインポート元を `@angular/core` に変更してください。',
  },
  'v16 renderModule': {
    action: '`renderModuleFactoryは削除されたため、`renderModule`を使用するようにコードを修正してください。',
  },
  'v16 XhrFactory': {
    action:
      '`@angular/common/http` からエクスポートされた`XhrFactory`の代わりに、`@angular/common` から `XhrFactory` を使用するようにコードを修正してください。',
  },
  'v16 withServerTransition': {
    action:
      "同じページで複数のAngularアプリを動作させていて、`BrowserModule.withServerTransition({ appId: 'serverApp' })` を使用している場合、`withServerTransition` が非推奨になったため、代わりに `APP_ID` を設定することを確認して下さい。[さらに読む](https://github.com/angular/angular/blob/main/CHANGELOG.md#platform-browser-4)",
  },
  'v16 EnvironmentInjector': {
    action:
      '`EnvironmentInjector.runInContext` を `runInInjectionContext` に変更し、第一引数として環境インジェクターを渡してください。',
  },
  'v16 ViewContainerRef.createComponent': {
    action:
      'ファクトリーリゾルバーを使用せずに `ViewContainerRef.createComponent` を使用するようにコードを更新してください。`ComponentFactoryResolver` は Router API から削除されました。',
  },
  'v16 APP_ID': {
    action: '複数のアプリを同じページでブートストラップする場合は、一意の `APP_ID` を設定してください。',
  },
  'v16 server renderApplication': {
    action:
      '`renderApplication`メソッドは、第一引数としてルートコンポーネントを受け取らず、代わりにアプリを起動するコールバックを受け取るように、コードを更新してください。[さらに読む](https://github.com/angular/angular/blob/main/CHANGELOG.md#platform-server-3)',
  },
  'v16 PlatformConfig.baseUrl': {
    action:
      '`PlatformConfig.baseUrl`と`PlatformConfig.useAbsoluteUrl`のplatform-serverの設定オプションは非推奨となったため、コードを更新して参照しているものを削除してください。',
  },
  'v16 moduleid': {
    action:
      'このプロパティは何の効果もなく、v17で削除される予定ですので、コードを更新して `@Directive`/`@Component` の `moduleId` プロパティへの参照を削除してください。',
  },
  'v16 transfer state imports': {
    action:
      "`import {makeStateKey、StateKey、TransferState} from '@angular/platform-browser'` から `import {makeStateKey、StateKey、TransferState} from '@angular/core'` にインポートを更新してください。",
  },
  'v16 ComponentRef': {
    action:
      'もし、`ComponentRef.setInput`によって、`Object.is`の等価検査で同じであってもコンポーネントの入力を設定する場合は、その値を必ずコピーするようにしてください。',
  },
  'v16 ANALYZE_FOR_ENTRY_COMPONENTS': {
    action:
      '`ANALYZE_FOR_ENTRY_COMPONENTS` インジェクショントークンは削除されたため、コードを更新して参照しているものを削除してください。',
  },
  'v16 entry components': {
    action:
      '`entryComponents`はもう利用できないため、`@NgModule`と`@Component`のパブリックAPIからその参照をすべて削除できます。',
  },
  'v16 ngTemplateOutletContext': {
    action:
      'ngTemplateOutletContextは型チェックが厳密になり、対応するオブジェクトですべてのプロパティを宣言しなければなりません。[さらに読む](https://github.com/angular/angular/blob/main/CHANGELOG.md#common-1)',
  },
  'v16 APF': {
    action: 'AngularのパッケージにはFESM2015が含まれなくなり、配布されているECMAScriptは2020から2022に更新されました。',
  },
  'v16 EventManager': {
    action: '非推奨の `EventManager` のメソッド `addGlobalEventListener` は、Ivy で使用されないため削除されました。',
  },
  'v16 BrowserTransferStateModule': {
    action:
      '`BrowserTransferStateModule`は使用できなくなりましたので、アプリケーションからその参照を削除してください。',
  },
  'v16 ReflectiveInjector': {
    action: '`ReflectiveInjector` は削除されたため、 `Injector.create` を使用するようにコードを更新してください。',
  },
  'v16 QueryList': {
    action:
      '`QueryList.filter` がタイプガード関数をサポートするようになりました。型が絞られるため、古い動作に依存しているアプリケーションコードを更新する必要があるかもしれません。',
  },
};
// @TODO This console log is required or the locale won't be registered
console.log(`ja-JP registered`);
registerLocalization('ja-JP', steps, uiLabels);
