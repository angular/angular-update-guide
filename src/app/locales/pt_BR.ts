import { LocalizedSteps, registerLocalization, LocalizedLabels } from '../localization';

const uiLabels: LocalizedLabels = {
  'Angular Update Guide': 'Guia de Atualização do Angular',
  'Select the options matching your project:': 'Selecione as opções que correspondem ao seu projeto:',
  'Angular Versions': 'Versões do Angular',
  From: 'De',
  To: 'Para',
  Warning: 'Atenção',
  'Plans for releases after the current major release are not finalized and may change. These recommendations are based on scheduled deprecations.':
    'Os planos de lançamento posteriores a versão atual não foram finalizados e podem mudar. Essas recomendações são baseadas nos cronogramas de depreciação.',
  'We do not currently support downgrading versions of Angular.':
    'Atualmente, não oferecemos suporte para retorno de versões do Angular.',
  'We do not recommend moving across multiple major versions.':
    'Não recomendamos migrar entre várias versões principais.',
  'App Complexity': 'Complexidade da Aplicação',
  Basic: 'Básica',
  Medium: 'Média',
  Advanced: 'Avançada',
  'Show update information relevant to all Angular developers.':
    'Mostre informações de atualização relevantes para todos os desenvolvedores Angular.',
  'Show more specific update information relevant to around 10% of Angular developers.':
    'Mostre informações de atualização mais específicas, relevantes para cerca de 10% dos desenvolvedores Angular.',
  'Show all the information we have about the update.': 'Mostre todas as informações que temos sobre a atualização.',
  'Other Dependencies': 'Outras dependências',
  'I use': 'Eu uso',
  'Package Manager': 'Gerenciador de Pacotes',
  npm: 'npm',
  yarn: 'yarn',
  'Show me how to update!': 'Mostre como atualizar!',
  'Before Updating': 'Antes de atualizar',
  // tslint:disable-next-line: quotemark
  "There aren't currently any changes needed before moving between these versions.":
    'No momento, não há nenhuma alteração necessária antes de migrar entre essas versões.',
  'During the Update': 'Durante a atualização',
  // tslint:disable-next-line: quotemark
  "There aren't currently any recommendations for moving between these versions.":
    'Atualmente, não há recomendações para migrar entre essas versões.',
  'After the Update': 'Depois da atualização',
  // tslint:disable-next-line: quotemark
  "There aren't currently any changes needed after moving between these versions.":
    'Não é necessária nenhuma alteração após a migração dessas versões',
};

const steps: LocalizedSteps = {
  'Extends OnInit': {
    action:
      'Certifique-se de não usar `extends OnInit` ou com qualquer evento de ciclo de vida do Angular. Use `implements` para adicionar os métodos de ciclo de vida.',
  },
  'Deep Imports': {
    action: 'Não use deep imports, esses símbolos agora estão marcados com ɵ e não fazem parte da API pública',
  },
  invokeElementMethod: {
    action: 'Não use `Renderer.invokeElementMethod`, pois este método foi removido e não há substituição',
  },
  'Non Animations Module': {
    action:
      'Se você usar animações em seu aplicativo, deve importar `BrowserAnimationsModule` de `@angular/platform-browser/animations` para o aplicativo `NgModule`.',
  },
  'Native Form Validation': {
    action:
      'O Angular começou a adicionar o atributo `novalidate` aos elementos do formulário ao incluir o `FormsModule`. Para habilitar comportamentos nativos, use `ngNoForm` ou adicione` ngNativeValidate`.',
  },
  RootRenderer: {
    action: 'Substitua `RootRenderer` por `RendererFactoryV2`.',
  },
  downgradeInjectable: {
    action: 'O valor de retorno de `upgrade/static/downgradeInjectable` mudou.',
  },
  'Animations Tests': {
    action:
      'Se você usar animações e testes de unidade, adicione `mods[1].NoopAnimationsModule` à chamada de` TestBed.initTestEnvironment`.',
  },
  DefaultIterableDiffer: {
    action: 'Não use `DefaultIterableDiffer`, `KeyValueDiffers#factories` ou `IterableDiffers#factories.`',
  },
  'Template Tag': {
    action: 'Renomeie as tags `template` para `ng-template`.',
  },

  OpaqueToken: {
    action: 'Substitua `OpaqueToken` por `InjectionToken`.',
  },
  DifferFactory: {
    action: 'Se você usar `DifferFactory.create (...)` remova `ChangeDetectorRef` como argumento.',
  },
  'ErrorHandler Parameter': {
    action: 'Não passe nenhum argumento para o construtor `ErrorHandler`',
  },
  ngProbeToken: {
    action:
      'Se você usar o `ngProbeToken`, certifique-se de importá-lo de `@angular/core` em vez de `@angular/platform-browser`',
  },
  TrackByFn: {
    action: 'Use `TrackByFunction` em vez de `TrackByFn`',
  },
  'i18n Pipe Change': {
    action:
      'Se você usar os pipes `date`, `currency`, `decimal` ou `percentage`, na v5 você verá algumas pequenas mudanças no formato. Para aplicativos que usam `locales` diferentes de en-us, você precisará importá-lo e, opcionalmente, `locale_extended_fr` de `@angular/common/i18n_data/locale_fr` e registerLocaleData(local).',
  },
  gendir: {
    action:
      'Não confie no uso de `gendir`, em vez disso use `skipTemplateCodeGen`. <a href=https://github.com/angular/angular/issues/19339#issuecomment-332607471" target="_blank"> Leia mais </a>',
  },
  'Dynamic ngUpgrade': {
    action:
      'Substitua `downgradeComponent`, `downgradeInjectable`, `UpgradeComponent` e `UpgradeModule` importados de `@angular/upgrade`. Use a nova versão em `@angular/upgrade/static`',
  },
  'Animations in Core': {
    action:
      'Se você usar serviços para animações ou ferramentas de `@angular/core`, você deve importá-los de `@angular/animations`',
  },
  ngOutletContext: {
    action: 'Substitua `ngOutletContext` por `ngTemplateOutletContext`.',
  },
  collectionChangeRecord: {
    action: 'Substitua `CollectionChangeRecord` por `IterableChangeRecord`',
  },
  Renderer: {
    action: 'Em todos os lugares que você estiver usando o `Renderer`, substitua-o por `Renderer2`',
  },
  'Router Query Params': {
    action: 'Se você utiliza `preserveQueryParams`, substitua por `queryParamsHandling` .',
  },
  Http: {
    action:
      'Se você usa o antigo módulo `HttpModule` e o serviço `Http`, substitua-o pelo serviço `HttpClientModule` e `HttpClient`. `HttpClient` melhora a ergonomia por padrão (você não precisa mais usar um `map` para converter a resposta para JSON) e agora suporta tipos de retorno e interceptores. Você pode ler mais em [angular.io](https://angular.io/guide/http).',
  },
  'DOCUMENT in @angular/platform-browser': {
    action: 'Se você usa `DOCUMENT` de `@angular/platform-browser`, deve começar a importá-lo de `@angular/common`',
  },
  ReflectiveInjector: {
    action: 'Substitua o `ReflectiveInjector` por `StaticInjector`',
  },
  Whitespace: {
    action:
      'Aproveite o uso de `preserveWhitespaces` com o valor de `off` na propriedade`angularCompilerOptions` do `tsconfig.json` do seu projeto. Na versão 6, ele é inicializado por padrão com `off`.',
  },
  'node 8': {
    action: 'Certifique-se de usar o <a href="https://nodejs.org/en/" target="_blank"> Node 8 ou posterior. </a>',
  },
  'Update to CLI v6': {
    action:
      'Atualize a versão local do Angular CLI e migre a configuração para <a href="https://github.com/angular/angular-cli/wiki/angular-workspace" target="_blank"> para o novo formato angular.json </a>, executando o seguinte comando: <br/> <br/> `${packageManagerInstall}@angular/cli@6` <br/> `ng update @angular/cli@6` <br/>',
  },
  'cli v6 scripts': {
    action:
      'Atualize qualquer script que você tenha em seu `package.json` para a versão mais recente para poder usar o comando CLI Angular. Agora todos os comandos usam hífens para sinalizadores (exemplo: `ng build --prod --source-map`) para serem compatíveis com POSIX.',
  },
  'Update to Angular v6': {
    action:
      'Atualize todos os seus pacotes de estrutura Angular para v6 e a versão correta de RxJS e TypeScript. <br/> <br/> `ng update @angular/core@6` <br/> <br/> Após a atualização, TypeScript e RxJS irão inferir com mais precisão os tipos em seu aplicativo, o que pode expor os erros existentes nas atribuições de tipos de seu aplicativo',
  },
  'forms v6': {
    action:
      'Em formulários Angular, `AbstractControl#statusChanges` agora emite um evento de `PENDING` quando você chama `AbstractControl#markAsPending`. Certifique-se de que, se estiver filtrando ou verificando eventos de `statusChanges`, você contabilize o novo evento ao chamar `markAsPending`.',
  },
  'animations timing': {
    action:
      'Se você usar `totalTime` de um `AnimationEvent` dentro de uma zona desabilitada, ele não reportará mais um tempo de 0. Para detectar se um evento de animação está reportando uma animação desabilitada, você pode usar a propriedade `event.disabled`.',
  },
  'ngModel on form control': {
    action:
      'O suporte para usar a propriedade de entrada `ngModel` e o evento `ngModelChange` com diretivas de formulário reativas foi descontinuado na v6 e removido na v7.',
  },
  'ngModelChange order': {
    action:
      '`ngModelChange` agora é emitido depois que o valor/validade é atualizado em seu controle, diferente de como era antes, para corresponder melhor às expectativas. Se você confiar na ordem desses eventos, precisará começar a rastrear o valor antigo em seu componente.',
  },
  'Update Dependencies for v6': {
    action:
      'Atualize o Angular Material para a versão mais recente. <br/><br/> `ng update @angular/material` <br/><br/> Isso irá migrar automaticamente as APIs obsoletas.',
  },
  strictPropertyInitializer: {
    action:
      'Se você tiver o Typescript definido para o modo estrito (a propriedade `strict` para `true` em seu `tsconfig.json`), atualize o `tsconfig.json` para desabilitar `strictPropertyInitialization` ou mova a inicialização para o construtor `ngOnInit`. Você pode ler mais sobre essa opção em <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization"> notas de versão do TypeScript 2.7 </a>.',
  },
  'update to RxJS 6': {
    action:
      'Remova as funções obsoletas do RxJS 5 usando <a href="https://github.com/ReactiveX/rxjs-tslint" target="_blank"> regras de atualização automática rxjs-tslint </a> <br/> <br/> Para a maioria dos aplicativos, você deve executar estes dois comandos <br/> <br/> `npx rxjs-tslint` <br/> `rxjs-5-to-6-migrate -p src/tsconfig.app.json`',
  },
  'remove rxjs-compat': {
    action: 'Uma vez que todas as dependências tenham sido atualizadas para RxJS 6, remova `rxjs-compat`.',
  },
  'use files instead of versionedFiles': {
    action:
      'Se você estiver usando o Service Worker do Angular, migre qualquer `versionedFiles` para o array `files`. O comportamento não será afetado.',
  },
  'TypeScript 3.1': {
    action:
      'O Angular agora usa TypeScript 3.1. Você pode ler mais sobre as possíveis mudanças que podem afetar seu aplicativo em https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html',
  },
  'Node 10': {
    action: 'O Angular agora oferece suporte ao Node 10: https://nodejs.org/en/blog/release/v10.0.0/',
  },
  'v7 update': {
    action:
      'Atualize o framework e CLI para a versão 7 executando `ng update @angular/cli@7 @angular/core@7` no terminal.',
  },
  'v7 material update': {
    action:
      'Atualize o Angular Material para a versão 7 executando `ng update @angular/material@7` no terminal. Teste seu aplicativo para alterações de tamanho e design.',
  },
  'v7 material changes': {
    action:
      'Se você fizer testes visuais, deverá gerar novamente as "golden screenshots", pois algumas pequenas alterações foram implementadas.',
  },
  'v7 material deprecations': {
    action:
      'Não use `matRippleSpeedFactor` ou `baseSpeedFactor` para o efeito `ripples`, use as configurações de animação',
  },
  'v8 update': {
    action:
      'Atualize o framework e os pacotes CLI para a versão 8 executando `ng update @angular/cli@8 @angular/core@8` no terminal, verifique as mudanças e realize o commit.',
  },
  'use ::ng-deep instead of /deep/': {
    action:
      'Substitua `/deep/` por `::ng-deep` no CSS. [Leia mais sobre estilos em componentes e ::ng-deep](https://angular.io/guide/component-styles#deprecated-deep--and-ng-deep). `/deep/` e `::ng-deep` estão obsoletos, mas usar `::ng-deep` é preferível até que o shadow-piercing descendant combinator seja [removido dos navegadores e ferramentas](https://www.chromestatus.com/features/6750456638341120) completamente.',
  },
  'TypeScript 3.4': {
    action:
      'O Angular agora usa Typescript 3.4, [leia mais sobre possíveis erros que podem aparecer nas melhorias na verificação de tipo](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html)',
  },
  'node 10': {
    action:
      'Certifique-se de <a href="https://nodejs.org/en/" target="_blank"> usar o Node versão 10 ou mais recente </a>.',
  },
  'Differential Loading': {
    action:
      'Agora, o comando build do CLI cria um build que suporta ES2015 e apenas com os polyfills necessários e outro compatível com ES5 para navegadores antigos, e carrega corretamente de acordo com o navegador. Você não pode usar isso alterando o `target` para `es5` no `tsconfig.json`. Leia mais sobre isso em [angular.io](https://angular.io/guide/deployment#differential-loading).',
  },
  'CLI Telemetry': {
    action:
      'Nas novas versões, o Angular CLI perguntará se você deseja escolher compartilhar as informações de uso do CLI. Você também pode adicionar sua conta do Google Analytics. Isso nos permite tomar melhores decisões sobre quais funções devem ser priorizadas e medir o impacto das melhorias. Leia mais sobre isso em [angular.io](https://angular.io/analytics).',
  },
  'static query timing': {
    action:
      'Se você usar `ViewChild` ou `ContentChild`, estaremos atualizando a maneira como resolvemos essas consultas para dar aos desenvolvedores mais controle. Agora você deve especificar que a detecção de alterações deve ser executada antes que os resultados sejam definidos. Exemplo: `@ContentChild (`foo`, {static: false}) foo!: ElementRef;`. `ng update` irá atualizar suas consultas automaticamente, mas irá errar ao fazer suas consultas` estáticas` para compatibilidade. Saiba mais em [angular.io](https://angular.io/guide/static-query-migration).',
  },
  'v8 material update': {
    action: 'Atualize o Angular Material para a versão 8 executando `ng update @angular/material@8` no terminal.',
  },
  'deep imports': {
    action:
      'Em vez de importar de `@angular/material`, você deve importar o componente específico. Por exemplo. `@angular/material/button`. `ng update` fará isso automaticamente para você.',
  },
  'new loadChildren': {
    action:
      'Módulos que fazem `lazy loading`, devem usar [importações dinâmicas](https://angular.io/guide/deprecations#loadchildren-string-syntax). O módulo de importação usando strings será removido na versão 9. `ng update` irá modificar os imports automaticamente. Leia mais sobre isso em [angular.io](https://angular.io/guide/deprecations#loadchildren-string-syntax).',
  },
  'platform deprecated': {
    action:
      'Estamos descontinuando o suporte para `@angular/platform-webworker`, pois é incompatível com a CLI. A execução da arquitetura de renderização do Angular em um web worker não atendeu às necessidades do desenvolvedor. Você ainda pode usar web workers com Angular. Saiba mais em nosso [guia do web worker](https://v9.angular.io/guide/web-worker). Se você tiver casos de uso em que precisa disso, informe-nos em devrel@angular.io!',
  },
  'node-sass': {
    action:
      'Mudamos do compilador Sass nativo para o compilador Javascript. Para reverter para a versão nativa, instale o pacote como `devDependecy`: `npm install node-sass --save-dev`.',
  },
  'schematics async': {
    action:
      'Se você estiver construindo seus próprios `Schematics`, eles foram anteriormente *potencialmente* assíncronos. A partir de 8.0, todos os `Schematics` serão assíncronos.',
  },
  'node 10.13': {
    action:
      'Certifique-se de <a href="https://nodejs.org/en/" target="_blank"> usar o Node versão 10.13 ou mais recente </a>.',
  },
  'cli v8 latest': {
    action:
      'Execute `ng update @angular/core@8 @angular/cli@8` em seu diretório de trabalho para atualizar para a versão 8.x mais recente do `@angular/core` e `@angular/cli` e efetue o commit com as alterações.',
  },
  'create commits': {
    action:
      'Você pode opcionalmente passar o sinalizador `--create-commits` (ou `-C`) para o comando [ng update](https://angular.io/cli/update) para criar um git commit por migração individual.',
  },
  'ng update v9': {
    action: 'Execute `ng update @angular/core@9 @angular/cli@9` para atualizar para a versão 9 do Angular.',
  },
  'typescript 3.8': {
    action:
      'O projeto foi atualizado para a versão Typescript 3.8, leia mais sobre as novas opções do compilador e erros que você pode precisar corrigir no código na versão [Typescript 3.7](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html) ou [TypeScript 3.8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html).',
  },
  'update @angular/material@9': {
    action: 'Execute `ng update @angular/material@9`.',
  },
  'update @nguniversal/hapi-engine': {
    action:
      'Se você estiver usando o Angular Universal, execute `ng update @nguniversal/hapi-engine` ou `ng update @nguniversal/express-engine` dependendo do mecanismo que você está usando. Se as dependências Angular de terceiros não foram atualizadas, você pode ter que executar o comando com a opção `--force`.',
  },
  'dependencies update': {
    action:
      'Se depender de outras bibliotecas é Angular, é aconselhável atualizá-las para a versão mais recente. Em alguns casos, será necessário devido a incompatibilidades na API. Você pode usar `ng update` ou `npm outdated` para descobrir quais bibliotecas estão desatualizadas.',
  },
  'ivy update': {
    action:
      'Durante a atualização para a versão 9, o projeto foi transformado por meio de migrações de código para remover APIs desatualizadas ou sem suporte. Você pode ver e ler mais sobre as mudanças no [guia de atualização para a versão 9](https://v9.angular.io/guide/updating-to-version-9).',
  },
  stylesUpdate: {
    action:
      'Anteriormente, estilos e classes eram aplicados com a estratégia "a última mudança vence", mas agora ela define de uma forma anterior. Para saber mais sobre [estilos em precedência](https://angular.io/guide/template-syntax#styling-precedence).',
  },
  ModuleWithProviders: {
    action:
      'Se você é o autor de uma biblioteca e usa um método que retorna um valor do tipo `ModuleWithProviders` (comumente a função `forRoot()`), você precisará especificar o tipo genérico. Para saber mais [angular.io](https://v9.angular.io/guide/deprecations#modulewithproviders-type-without-a-generic)',
  },
  wtf: {
    action:
      'O suporte para rastreamento da web na versão 8 foi eliminado. Não use nenhum dos `wtf *`. Para testes de desempenho, recomendamos o uso de [ferramentas do navegador](https://developers.google.com/web/tools/lighthouse/audits/user-timing).',
  },
  es5browser: {
    action:
      'Remova todas as opções `es5BrowserSupport` do `angular.json` e defina o `target` para `es2015` em seu `tsconfig.json`. Agora o Angular usa a lista de navegadores para determinar se uma construção é necessária para o ES5. O comando `ng update` irá migrar tudo automaticamente.',
  },
  'ngForm selector': {
    action: 'Se você usar o seletor `ngForm` para criar formulários em Angular, substitua-o por `ng-form`.',
  },
  'typings compilation': {
    action:
      'Atualizamos e limitamos o `tsconfig.app.json` aos arquivos necessários para a compilação. Se você precisar adicionar outros, como `typings.d.ts`, terá que fazer isso manualmente.',
  },
  debug: {
    action:
      'Ivy é o mecanismo de renderização padrão no Angular 9. Em caso de problemas, leia o [guia de compatibilidade do Ivy](https://angular.io/guide/ivy-compatibility).',
  },
  'ngcc postinstall': {
    action:
      'Caso você dependa de muitas bibliotecas Angular, considere o uso de `ngcc` (Angular Compatibility Compiler) em um script npm `postinstall` no [package.json](https://v9.angular.io/guide/ivy#speeding-up-ngcc-compilation).',
  },
  'express-universal-server': {
    action:
      'Se você usar o Angular Universal com `@nguniversal/express-engine` ou `@nguniversal/hapi-engine`, vários arquivos de backup serão criados. Um deles para `server.ts`. Se este arquivo for diferente do padrão, você pode precisar copiar algumas mudanças do `server.ts.bak` para o `server.ts` manualmente.',
  },
  'ivy i18n': {
    action:
      'A função global `$localize ()` foi adicionada no Angular 9, ela deve ser carregada se você usar a internacionalização Angular (i18n). Execute `ng add @angular/localize` para adicionar os pacotes necessários e fazer modificações no código. Consulte o [$localize guia de migração](https://v9.angular.io/guide/migration-localize) para saber mais sobre as mudanças.',
  },
  entryComponents: {
    action:
      'Se você tiver algum `entryComponents` listado em seus NgModules ou `ANALYZE_FOR_ENTRY_COMPONENTS`, remova-os. Eles não são mais necessários no compilador ivy ou no tempo de execução.',
  },
  'testbed-get': {
    action:
      'Se você usar `TestBed.get`, deverá usar `TestBed.inject`. O novo método tem o mesmo comportamento, mas fortemente tipado.',
  },
  $localize: {
    action:
      'Se você usar o [Angular i18n](http://angular.io/guide/i18n), você precisa utilizar `@angular/localize`. Saiba mais em [$ localize global import migration](https://v9.angular.io/guide/migration-localize).',
  },
  'ng update v10': {
    action:
      'Execute `ng update @angular/core@10 @angular/cli@10` para atualizar seu projeto para a versão 10 do Angular.',
  },
  browserlist: {
    action:
      'Novos projetos usam `.browserslistrc` ao invés de` browserslist`. `ng update` irá migrá-lo automaticamente.',
  },
  'v10-versions': {
    action:
      'O Angular agora usa `tslint` v6, `tslib` v2 e [TypeScript 3.9](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html). `ng update` irá migrá-lo automaticamente.',
  },
  styleext: {
    action:
      'Não use mais `styleext` ou `spec` em seus `Angular Schematics`.O comando `ng update` irá migrá-lo automaticamente.',
  },
  'tsconfig-layout': {
    action:
      'O Angular recomenda o uso de `tsconfig.base.json` para ajudar a organizar os diversos contextos de tipagem (`shared`, testes de unidade, testes ponta a ponta, aplicativo, etc) O comando `ng update` irá migrá-lo automaticamente.',
  },
  'classes-without-decorators': {
    action:
      'Na versão 10, as classes que usam Angular e não têm o respectivo decorator não são mais suportadas. [Leia mais](https://v10.angular.io/guide/migration-undecorated-classes). O `ng update` irá migrá-lo automaticamente.',
  },
  'injectable-definitions': {
    action:
      'A partir do Angular 9, o uso de decorators `@Injectable` em DI é mais rígida e as definições de provedor(`provideIn`) incompletas se comportam de maneira diferente. [Leia mais](https://v9.angular.io/guide/migration-injectable). O `ng update` irá migrá-lo automaticamente.',
  },
  'closure-jsdoc-comments': {
    action:
      'O pacote NPM do Angular não contém mais comentários em jsdoc, que eram necessários para usar o compilador de closures (extremamente raro). O suporte era experimental e só funcionou em alguns casos. Uma maneira alternativa existirá em breve.',
  },
  'forms-number-input': {
    action:
      'Se você usar formulários Angular, o campo do tipo `number` não ouvirá mais nenhum [evento de mudança](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) (esses eventos não são necessariamente lançados para cada alteração no valor), em vez disso, ouça [eventos de entrada](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)',
  },
  'forms-length-input': {
    action:
      'Para validação do formulário Angular, os validadores `minLength` e `maxLength` agora verificam se o valor do controle do formulário tem uma propriedade de comprimento numérico e só validam o comprimento se houver a propriedade.',
  },
  'esm5-bundles': {
    action:
      'O [formato de distribuição de pacotes no Angular](https://g.co/ng/apf) foi atualizado para remover o `esm5` e o `fesm5`. Esses pacotes NPM não serão mais distribuídos. Se você não estiver usando a CLI, pode ser necessário fazer o downgrade de seu código Angular para ES5.',
  },
  'console-errors': {
    action:
      'Os alertas sobre itens desconhecidos agora são registrados como erros. Isso não travará seu aplicativo, mas pode gerar conflito com ferramentas que não esperam registrar nada por meio de `console.error`.',
  },
  'router-resolver-empty': {
    action:
      'Qualquer `resolver` que retornar `EMPTY` cancelará a navegação. Se você quiser permitir que continue, você precisará atualizar o `resolver` para gerar algum tipo de valor (por exemplo, `defaultIfEmpty (...)`, `of (...)`, etc).',
  },
  'sw-vary-headers': {
    action:
      'Se você usar o Angular Service Worker e usar o cabeçalho [Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary), agora ele será ignorado para evitar comportamento inesperado entre navegadores. Para evitar isso, [configure](https://angular.io/guide/service-worker-config) seu service worker para evitar o armazenamento em cache desses recursos.',
  },
  'expression-changed-after-checked-new': {
    action:
      'Você pode ver erros `ExpressionChangedAfterItHasBeenChecked` que não foram detectados antes ao usar o pipe `async`. O erro poderia não ter sido detectado anteriormente porque dois `WrappedValues` são considerados "iguais" em todos os casos para fins de verificação, mesmo se seus respectivos valores não embalados não forem. Na versão 10, `WrappedValue` foi removido.',
  },
  'property-binding-change-detection': {
    action:
      'Se você tiver uma associação de propriedade como `[val]=(observable | async).someProperty`, isso não irá mais acionar o mecanismo de Change Detection se o valor de `someProperty` for idêntico ao emitido anteriormente. Se você confia neles, você pode se inscrever e chamar `markForCheck` quando precisar ou quiser atualizar a ligação para garantir as alterações de referência.',
  },
  'day-periods-crossing-midnight': {
    action:
      'Se você usar `formatDate()` ou `DatePipe` e qualquer um dos códigos de formato `b` ou `B`, a lógica foi atualizada para coincidir com a hora de um dia abrangendo meia-noite, renderizando assim a saída correta, pois é noite no caso do Inglês.',
  },
  'urlmatcher-null': {
    action: 'Se você usar `UrlMatcher`, agora o tipo mostra que sempre pode retornar `null`.',
  },
  'v10-more-details': {
    action:
      'Para obter mais detalhes sobre depreciações, migrações automatizadas e alterações, visite o [guia angular.io](https://angular.io/guide/updating-to-version-10)',
  },
  'universal-baseurl': {
    action:
      'Para usuários do Angular Universal, se você usar `useAbsoluteUrl` para configurar `platform-server`, agora você precisa especificar também `baseUrl`.',
  },
  'v11 ng update': {
    action: 'Execute `ng update @angular/core @angular/cli` que irá atualizar seu projeto para a versão 11 do Angular.',
  },
  'update @angular/material': {
    action: 'Execute `ng update @angular/material`.',
  },
  'v11 versions': {
    action:
      'O Angular agora requer [TypeScript 4.0](https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/). `ng update` irá migrar seu projeto automaticamente.',
  },
  'v11 browser support': {
    action:
      'O suporte para IE9, IE10 e IE mobile foi removido. Isso foi anunciado na [atualização da v10](http://blog.angular.io/version-10-of-angular-now-available-78960babd41#c357).',
  },
  'webpack5 optin': {
    action:
      'Agora você pode optar por usar o webpack 5 usando Yarn e adicionando `"resolutions":{"webpack":"^5.0.0"}` ao seu `package.json`.',
  },
  'ng new strict prompt': {
    action:
      'Ao gerar novos projetos, será perguntado se deseja ativar o modo estrito. Isso configurará o TypeScript e o compilador Angular para uma verificação de tipo mais rigorosa e aplicará orçamentos de pacote menores por padrão. Você pode usar `--strict=true` ou `--strict=false` para pular o prompt.',
  },
  'v11 router relativeLinkResolution': {
    action:
      'Se você usar o router, o valor padrão de `relativeLinkResolution` mudou de `legacy` para `corrected`. Se seu aplicativo usou anteriormente o padrão ao não especificar um valor em `ExtraOptions` e usa links relativos ao navegar de filhos de rotas de caminho vazio, você precisará atualizar a configuração de seu `RouterModule` para especificar de `legacy` para `relativeLinkResolution`. Veja [a documentação](https://v11.angular.io/api/router/ExtraOptions#relativeLinkResolution) para mais detalhes.',
  },
  'router initialNavigation': {
    action:
      'No Roteador Angular, as opções obsoletas na v4 para `initialNavigation` foram removidas. Se você usou `enabled` ou `true` anteriormente, agora escolha `enabledNonBlocking` ou `enabledBlocking`. Se você já usou `false` ou `legacy_disabled`, agora use `disabled`.',
  },
  'routerlink preserveQueryParams': {
    action:
      'No `routerLink` do Angular Router, `preserveQueryParams` foi removido, use `queryParamsHandling="preserve"`.',
  },
  'routerlink queryParams typing': {
    action:
      'Se você estava acessando os valores `routerLink` de `queryParams`, `fragment` ou `queryParamsHandling`, você pode precisar relaxar a tipagem para aceitar também `undefined` e `null`.',
  },
  'viewencapsulation native removed': {
    action:
      'A opção de encapsulamento de visualização de componente `ViewEncapsulation.Native` foi removida. Use `ViewEncapsulation.ShadowDom` em vez disso. `ng update` irá migrar você automaticamente.',
  },
  'ICU expressions typechecked': {
    action:
      'Se você usar i18n, as expressões dentro das expressões de Componentes Internacionais para Unicode (ICUs) agora serão verificadas novamente. Isso pode causar falhas de compilação se forem encontrados erros nas expressões que aparecem em uma ICU.',
  },
  'forms validators asyncValidators typing': {
    action:
      'As diretivas no pacote `@angular/forms` costumavam ter `any[]` como o tipo dos argumentos `validators` e `asyncValidators` esperados nos construtores. Agora, esses argumentos são tipados corretamente, portanto, se seu código se baseia nos tipos de construtor de diretiva de formulário, pode ser necessário fazer algumas atualizações para melhorar a segurança de tipo.',
  },
  'forms AbstractFormControl': {
    action:
      'Se você usar Angular Forms, o tipo de `AbstractFormControl.parent` agora inclui `null`. `ng update` irá migrar você automaticamente, mas em um caso improvável de seu código estava testando o pai contra `undefined` com igualdade estrita, você precisará alterar isso para `=== null` em vez disso, já que o pai agora está explicitamente inicializado com `null` em vez de ser deixado `undefined`.',
  },
  'platform-webworker': {
    action:
      'Os raramente usados `@angular/platform-webworker` e `@angular/platform-webworker-dynamic` foram preteridos na v8 e foram removidos. Executar partes do Angular em um web worker foi um experimento que nunca funcionou bem para casos de uso comuns. O Angular ainda tem um ótimo suporte para [Web Workers](https://angular.io/guide/web-worker).',
  },
  'v11 slice pipe typing': {
    action:
      'O pipe `slice` agora retorna nulo para o valor de entrada `undfined`, o que é consistente com o comportamento da maioria dos pipes.',
  },
  'v11 keyvalue typing': {
    action:
      'O pipe `keyvalue` foi corrigido para relatar que, para objetos de entrada que possuem chaves numéricas, o tipo de resultado conterá a representação em `string` das chaves. Este já era o caso e o código simplesmente foi atualizado para refletir isso. Por favor, atualize os consumidores da saída do pipe se eles estavam contando com os tipos incorretos. Observe que isso não afeta os casos de uso em que os valores de entrada são `Maps`, então se você precisa preservar os números, esta é uma maneira eficaz.',
  },
  'v11 number pipe typing': {
    action:
      'Os pipes numéricos (`decimal`, `percent`, `currency`, etc) agora declaram explicitamente quais tipos são aceitos.',
  },
  'v11 date pipe typing': {
    action: 'O pipe `date` agora informa explicitamente quais tipos são aceitos.',
  },
  'v11 datetime rounding': {
    action:
      'Ao passar uma `string` formatada de data e hora para o `DatePipe` em um formato que contém frações de um milissegundo, os milissegundos agora serão arredondados para baixo em vez de para o milissegundo mais próximo. A maioria dos aplicativos não será afetada por esta mudança. Se este não for o comportamento desejado, considere pré-processar a `string` para arredondar a parte do milissegundo antes de passá-la para o `DatePipe`.',
  },
  'v11 async pipe typing': {
    action:
      'O pipe `async` não afirma mais retornar `undefined` para uma entrada que foi tipada como `undefined`. Observe que o código na verdade retornou `null` em entradas `undefined`.',
  },
  'v11 case pipe update': {
    action:
      'Os pipes `uppercase` e `lowercase` não permitem mais a passagem de valores falsy. Eles agora mapeiam `null` e `undefined` para `null` e levantam uma exceção na entrada inválida (`0`, `false`, `NaN`). Isso corresponde a outros Pipes Angular.',
  },
  'v11 router NavigationExtras typing': {
    action:
      'Se você usar o router com `NavigationExtras`, novas tipagens permitem que uma variável do tipo `NavigationExtras` seja passada, mas eles não permitirão literais de objeto, pois eles podem especificar apenas propriedades conhecidas. Eles também não aceitarão tipos que não tenham propriedades em comum com os do `Pick`. Se você for afetado por essa mudança, especifique apenas as propriedades de `NavigationExtras` que são realmente usadas nas respectivas chamadas de função ou use uma declaração de tipo no objeto ou variável: `as NavigationExtras`.',
  },
  'v11 TestBed.overrideProvider': {
    action:
      'Em seus testes, se você chamar `TestBed.overrideProvider` após a inicialização do TestBed, as substituições do provedor não serão mais aplicadas. Este comportamento é consistente com outros métodos de substituição (como `TestBed.overrideDirective`, etc), mas eles geram um erro para indicar isso. A verificação estava faltando anteriormente na função TestBed.overrideProvider. Se você encontrar esse erro, deve mover as chamadas `TestBed.overrideProvider` antes que a inicialização do TestBed seja concluída.',
  },
  'v11 router RouteReuseStrategy': {
    action:
      'Se você usar RouteReuseStrategy do router, a ordem dos argumentos mudou. Ao chamar `RouteReuseStrategy#shouldReuseRoute` anteriormente ao avaliar as rotas secundárias, eles seriam chamados com os argumentos `future` e `current` trocados. Se o seu `RouteReuseStrategy` depende especificamente apenas do estado futuro ou atual do snapshot, você pode precisar atualizar o uso da implementação `shouldReuseRoute` de `future` e `current` `ActivateRouteSnapshots`.',
  },
  'v11 locale data readonly': {
    action:
      'Se você usa locale data arrays, esta API agora retornará arrays somente leitura. Se você os estava alterando (por exemplo, chamando `sort()`, `push()`, `splice()`, etc), seu código não será mais compilado. Se você precisar alterar o array, deve agora fazer uma cópia (por exemplo, chamando `slice()`) e alterar a cópia.',
  },
  'v11 CollectionChangeRecord': {
    action:
      'Na detecção de mudanças, `CollectionChangeRecord` foi removido, use `IterableChangeRecord` em seu lugar.',
  },
  'v11 forms async validators': {
    action:
      'Se você usar Angular Forms com validadores assíncronos definidos no momento da inicialização das instâncias de classe de `FormControl`, `FormGroup` ou `FormArray`, o evento de mudança de status não era emitido anteriormente uma vez que o validador assíncrono foi concluído. Isso foi alterado para que o evento de status seja emitido no observable `statusChanges`. Se o seu código depende do comportamento antigo, você pode filtrar/ignorar este evento de mudança de status adicional.',
  },
  'v12 ng update': {
    action:
      'Execute `ng update @angular/core@12 @angular/cli@12`, que irá migrar para a versão 12 do Angular.',
  },
  'v12 versions': {
    action:
      'O Angular agora requer [TypeScript 4.2](https://devblogs.microsoft.com/typescript/announcing-typescript-4-2/). `ng update` irá atualizá-lo automaticamente.',
  },
  'v12 browser support': {
    action:
      'O suporte ao IE11 foi descontinuado. Encontre detalhes no [RFC para remoção do IE11](https://github.com/angular/angular/issues/41840).',
  },
  'v12 minimum  Node.js version': {
    action:
      'Você não pode mais usar Angular com Node.js versão 10 ou anterior',
  },
  'v12 `XhrFactory` relocation': {
    action:
      'Altere a importação de `XhrFactory` de` @angular/common/http` para `@angular/common`.',
  },
  'v12 removal of UMD bundles': {
    action:
      'Certifique-se de não confiar nos pacotes UMD do Angular em seu pipeline de construção, porque eles não farão mais parte da distribuição v12.',
  },
  'v12 i18n message ids': {
    action:
      'Se você depende de IDs de mensagem i18n legados, use a ferramenta `localize-migrate` para [trocá-los](https://angular.io/guide/migration-legacy-message-id).',
  },
  'v12 deprecates `emitDistinctChangesOnly': {
    action:
      'Se você estiver usando `emitDistinctChangesOnly` para configurar as consultas`@ContentChildren` e `@ViewChildren`, pode ser necessário atualizar seu valor para` false` para continuar com seu comportamento anterior. Na v12, `emitDistinctChangesOnly` tem o valor padrão` true`, e em versões futuras removeremos esta opção de configuração para evitar o acionamento de mudanças desnecessárias.',
  },
  'v12 prod by default': {
    action:
      'Você pode executar a migração opcional para habilitar compilações de produção por padrão `ng update @angular/cli@12 --migrate-only production-by-default`.',
  },
  'v12 min and max form attributes': {
    action:
      'Se você usar formulários Angular, os atributos `min` e` max` em `<input type="number">` irão agora acionar a lógica de validação.',
  },
  'v12 `emitEvent` in `FormArray` and `FormGroup`': {
    action:
      'Se o seu aplicativo tem classes personalizadas que estendem as classes `FormArray` ou` FormGroup` e sobrescrevem os métodos mencionados acima, você pode precisar atualizar sua implementação',
  },
  'v12 zone.js minimum version': {
    action:
      'Atualize o zone.js para a versão 0.11.4. `ng update` irá atualizar esta dependência automaticamente.',
  },
  'v12 `HttpParams` method params update': {
    action:
      'Se você estender a classe `HttpParams`, poderá ter que atualizar a assinatura de seu método para refletir as mudanças nos tipos de parâmetro.',
  },
  'v12 `routerLinkActiveOptions`': {
    action:
      'A propriedade `routerLinkActiveOptions` de` RouterLinkActive` agora tem um tipo mais específico. Pode ser necessário atualizar o código de acesso a esta propriedade para alinhar com as alterações.',
  },
  'v12 `APP_INITIALIZER` callback types': {
    action:
      'Os retornos de chamada do inicializador agora têm tipos de retorno mais específicos, que podem exigir a atualização do seu código se você estiver obtendo uma instância de `APP_INITIALIZER` via` Injector.get` ou `TestBed.inject`.',
  },
  'v12 fragment typings': {
    action:
      'Os fragmentos do roteador agora podem ser `nulos`. Adicione verificações `null` para evitar que o TypeScript falhe com erros de tipo.',
  },
  'v12 `ng.getDirectives`': {
    action:
      'Certifique-se de não confiar que `ng.getDirectives` emita um erro se não puder encontrar uma diretiva associada a um nó DOM particular.',
  },
};
// @TODO This console log is required or the locale won't be registered
console.log(`pt-BR registered`);
registerLocalization('pt-BR', steps, uiLabels);
