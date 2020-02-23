import { LocalizedSteps, registerLocalization } from '../localization';

const steps: LocalizedSteps = {
  'new loadChildren': {
    action:
      'ルーター経由で遅延ロードされたモジュールの場合は[ダイナミックインポートを使用している](https://angular.io/guide/deprecations#loadchildren-string-syntax)ことを確認してください。文字列によるインポートはv9で削除されました。`ng update`はこれを自動的に処理します。 [angular.io](https://angular.io/guide/deprecations#loadchildren-string-syntax) で詳細をご覧ください。',
  },
};

registerLocalization('ja-JP', steps);

