import { LocalizedSteps, registerLocalization, LocalizedLabels } from '../localization';

const uiLabels: LocalizedLabels = {
  'Angular Update Guide': 'Angularアップデートガイド',
  'Select the options matching your project:': 'プロジェクトにマッチするオプションを選択',
  'Angular Versions': 'Angularのバージョン',
  From: 'From',
  To: 'To',
  Warning: '注意',
  'Plans for releases after the current major release are not finalized and may change. These recommendations are based on scheduled deprecations.':
    '現在のメジャーリリースより先のリリース内容は未確定で変更される可能性があります。推奨事項は非推奨化のスケジュールに基づいています。',
  'We do not currently support downgrading versions of Angular.':
    'バージョンのダウングレードは現在サポートしていません。',
  'We do not recommend moving across multiple major versions.':
    '複数のメジャーバージョンをまたぐことはおすすめしません。',
  'App Complexity': 'アプリケーションの複雑度',
  Basic: 'Basic',
  Medium: 'Medium',
  Advanced: 'Advanced',
  'Show update information relevant to all Angular developers.': 'すべてのAngular開発者に関連する情報を表示します。',
  'Show more specific update information relevant to around 10% of Angular developers.':
    'およそ10%程度のAngular開発者に関連する具体的な情報を表示します。',
  'Show all the information we have about the update.': 'すべての情報を表示します。',
  'Other Dependencies': 'その他の依存関係',
  'I use': '',
  'Package Manager': 'パッケージマネージャ',
  npm: 'npm',
  yarn: 'yarn',
  'Show me how to update!': 'アップデート手順を表示！',
  'Before Updating': 'アップデートの前に',
  // tslint:disable-next-line: quotemark
  "There aren't currently any changes needed before moving between these versions.":
    'バージョン移行前に必要な手順はありません。',
  'During the Update': 'アップデートの実施',
  // tslint:disable-next-line: quotemark
  "There aren't currently any recommendations for moving between these versions.":
    'バージョン移行のための推奨事項はありません。',
  'After the Update': 'アップデートの後に',
  // tslint:disable-next-line: quotemark
  "There aren't currently any changes needed after moving between these versions.":
    'バージョン移行後に必要な手順はありません。',
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
};
// @TODO This console log is required or the locale won't be registered
console.log(`ja-JP registered`);
registerLocalization('ja-JP', steps, uiLabels);
