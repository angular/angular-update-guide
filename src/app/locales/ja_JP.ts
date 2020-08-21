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
    action: '`ng update @angular/core @angular/cli` を実行し、Angularのバージョン10を導入します。',
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
};

registerLocalization('ja-JP', steps, uiLabels);
