import {LocalizedLabels, LocalizedSteps, registerLocalization} from '../localization';

const uiLabels: LocalizedLabels = {
  'Angular Update Guide': 'Hướng dẫn Update Angular',
  'Select the options matching your project:': 'Tuỳ chỉnh những lựa chọn cho phù hợp với dự án của bạn:',
  'Angular Versions': 'Phiên bản Angular',
  From: 'Từ',
  To: 'Đến',
  Warning: 'Chú ý',
  'Plans for releases after the current major release are not finalized and may change. These recommendations are based on scheduled deprecations.':
    'Đối với những phiên bản Angular được phát hành sau phiên bản chính thức hiện tại, kế hoạch và dự định cho những phiên bản này chưa được thông qua chính thức và có thể sẽ thay đổi. Những gợi ý sau dựa trên những tính năng không còn được hỗ trợ đã thống nhất.',
  'We do not currently support downgrading versions of Angular.':
    'Chúng tôi hiện tại không hỗ trợ downgrade phiên bản Angular',
  'We do not recommend moving across multiple major versions.':
    'Chúng tôi không khuyến khích update Angular theo kiểu "nhảy cóc" phiên bản.',
  'App Complexity': 'Độ phức tạp của ứng dụng',
  Basic: 'Cơ bản',
  Medium: 'Vừa',
  Advanced: 'Nâng cao',
  'Show update information relevant to all Angular developers.':
    'Hiển thị thông tin update dành cho tất cả lập trình viên Angular ở mọi cấp độ.',
  'Show more specific update information relevant to around 10% of Angular developers.':
    'Hiển thị thông tin update chi tiết hơn dành cho khoảng 10% lập trình viên Angular. ',
  'Show all the information we have about the update.': 'Hiển thị tất cả thông tin về việc update mà chúng tôi biết được.',
  'Other Dependencies': 'Những yêu cầu liên quan khác',
  'I use': 'Tôi sử dụng',
  'Package Manager': 'Package Manager',
  npm: 'npm',
  yarn: 'yarn',
  'Show me how to update!': 'Hướng dẫn tôi update!',
  'Before Updating': 'Trước khi update',
  'There aren\'t currently any changes needed before moving between these versions.':
    'Hiện tại thì bạn không cần phải chuẩn bị gì trước khi update giữa những phiên bản này.',
  'During the Update': 'Trong khi Update',
  'There aren\'t currently any recommendations for moving between these versions.':
    'Hiện tại thì chúng tôi không có những gợi ý gì cho việc update giữa những phiên bản này.',
  'After the Update': 'Sau khi Update',
  'There aren\'t currently any changes needed after moving between these versions.':
    'Hiện tại thì bạn không cần phải làm thêm gì sau khi update giữa những phiên bản này.',
};

const steps: LocalizedSteps = {
  'Extends OnInit': {
    action:
      'Bảo đảm là bạn không dùng `extends OnInit`, hoặc dùng `extends` đối với bất kỳ LifeCycle nào. Thay vào đó, dùng `implements <LifeCycle>',
  },
  'Deep Imports': {
    action:
      'Đừng sử dụng Deep Imports nữa, những biểu tượng này đều được đánh dấu với ký tự `ɵ` và không nằm trong public API (API của Angular được export ra cho lập trình viên sử dụng).',
  },
  invokeElementMethod: {
    action:
      'Đừng sử dụng hàm `Renderer.invokeElementMethod` nữa vì hàm này đã bị gỡ bỏ. Hiện tại thì không có sự thay thế nào.'
  },
  'Non Animations Module': {
    action:
      'Nếu bạn dùng Animations trong ứng dụng của bạn, bạn nên import `BrowserAnimationsModule` từ `@angular/platform-browser/animations` trong `NgModule` đầu vào của ứng dụng của bạn. (`AppModule`)'
  },
  'Native Form Validation': {
    action:
      'Angular đã bắt đầu thêm vào thuộc tính `novalidate` cho các thành phần liên quan đến Form khi bạn thêm `FormsModule` vào ứng dụng. Để sử dụng những hành vi có sẵn của Forms từ HTML, dùng `ngNoForm` hoặc thêm `ngNativeValidate`.'
  },
  RootRenderer: {
    action: 'Thay thế `RootRenderer` bằng `RenderFactoryV2`.'
  },
  downgradeInjectable: {
    action: 'Giá trị trả về của `upgrade/static/downgradeInjectable` đã thay đổi.',
  },
  'Animations Tests': {
    action:
      'Nếu bạn dùng Animations và có tests trong ứng dụng, thêm `mods[1].NoopAnimationsModule` vào `TestBed.initTestEnvironment` khi gọi hàm này.',
  },
  DefaultIterableDiffer: {
    action: 'Đừng sử dụng `DefaultIterableDiffer`, `KeyValueDiffers#factories`, hoặc `IterableDiffers#factories` nữa.',
  },
  'Template Tag': {
    action: 'Đổi tên các thẻ `template` thành `ng-template`',
  },
  OpaqueToken: {
    action: 'Thay thế `OpaqueToken` bằng `InjectionToken`.',
  },
  DifferFactory: {
    action: 'Nếu bạn có gọi hàm `DifferFactory.create(...)`, hãy gỡ bỏ tham số `ChangeDetectorRef`.',
  },
  'ErrorHandler Parameter': {
    action: 'Đừng truyền tham số vào cho hàm khởi tạo của `ErrorHandler` nữa',
  },
  ngProbeToken: {
    action: 'Nếu bạn sử dụng `ngProbeToken`, bảo đảm rằng bạn import nó từ `@angular/core` thay vì `@angular/platform-browser`',
  },
  TrackByFn: {
    action: 'Nếu bạn có dùng `TrackByFn`, hãy chuyển sang `TrackByFunction`',
  },
  'i18n Pipe Change': {
    action:
      'Nếu ứng dụng của bạn có sử dụng `date`, `currency`, `decimal`, hoặc `percent` Pipes, trong phiên bản 5 bạn sẽ thấy một số thay đổi nhỏ. Đối với những ứng dụng sử dụng địa phương (locales) khác `en-us`, bạn cần phải import địa phương này từ `@angular/common/i18n_data/<mã_địa_phương>` và gọi hàm `registerLocaleData(địa_phương_được_import)`',
  },
  gendir: {
    action:
      'Đừng phụ thuộc vào `gendir`, thay vào đó bạn nên tìm hiểu cách sử dụng `skipTemplateCodeGen`, <a href=https://github.com/angular/angular/issues/19339#issuecomment-332607471" target="_blank">Đọc thêm</a>'
  },
  'Dynamic ngUpgrade': {
    action:
      'Thay thế `downgradeComponent`, `downgradeInjectable`, `UpgradeComponent`, và `UpgradeModule` được import từ `@angular/upgrade` bằng những biểu tượng tương đương được import từ `@angular/upgrade/static`',
  },
  'Animations in Core': {
    action:
      'Nếu bạn import bất kỳ công cụ Animations nào từ `@angular/core`, bạn nên thay thế bằng import từ `@angular/animations`',
  },
  ngOutletContext: {
    action: 'Thay thế `ngOutletContext` bằng `ngTemplateOutletContext`.',
  },
  collectionChangeRecord: {
    action: 'Thay thế `CollectionChangeRecord` bằng `IterableChangeRecord`',
  },
  Renderer: {
    action: 'Bất cứ chỗ nào bạn sử dụng `Renderer`, thay thế bằng `Renderer2`',
  },
  'Router Query Params': {
    action: 'Nếu bạn sử dụng `preserveQueryParams`, thay thế bằng `queryParamsHandling`',
  },
  Http: {
    action:
      'Nếu bạn sử dụng `HttpModule` và `Http` cũ, bạn cần chuyển qua sử dụng `HttpClientModule` và `HttpClient`. `HttpClient` đơn giản hoá một số hành vi mặc định (ví dụ: bạn không cần phải chuyển đổi sang kiểu JSON nữa), hỗ trợ khai báo kiểu dữ liệu trả về, và hỗ trợ `Interceptors`. Đọc thêm tại [angular.io](https://angular.io/guide/http).',
  },
  'DOCUMENT in @angular/platform-browser': {
    action: 'Nếu bạn sử dụng `DOCUMENT` từ `@angular/platform-browser`, bạn nên chuyển sang import từ `@angular/common`',
  },
  ReflectiveInjector: {
    action: 'Bất cứ chỗ nào bạn sử dụng `ReflectiveInjector`, thay thế bằng `StaticInjector`',
  },
  Whitespace: {
    action:
      'Đặt giá trị `"off"` cho `preserveWhitespaces` trong `tsconfig.json` bên trong `angularCompilerOptions` để nhận được lợi ích từ tuỳ chỉnh này. Tuỳ chỉnh này được đặt giá trị `"off"` mặc định trong phiên bản 6',
  },
  'node 8': {
    action:
      'Bảo đảm bạn sử dụng <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 8 hoặc mới hơn</a>',
  },
  'Update to CLI v6': {
    action:
      'Update Angular CLI nội bộ trong dự án của bạn, sau đó update cấu hình sang <a href="https://github.com/angular/angular-cli/wiki/angular-workspace" target="_blank">định dạng angular.json mới</a> bằng việc chạy câu lệnh sau: <br/><br/>`${packageManagerInstall} @angular/cli@6`<br/>`ng update @angular/cli@6`<br/>'
  },
  'cli v6 scripts': {
    action:
      'Update bất kỳ `scripts` nào mà bạn có trong `package.json` sang sử dụng những lệnh mới nhất của Angular CLI. Tất cả các lệnh của Angular CLI sẽ sử dụng hai gạch ngang (ví dụ: `ng build --prod --source-map`) để tương thích với POSIX.'
  },
  'Update to Angular v6': {
    action:
      'Update tất cả các gói thư viện liên quan thuộc Angular lên phiên bản 6, và update RxJS cùng với TypeScript lên phiên bản phù hợp. <br/><br/>`ng update @angular/core@6`<br/><br/>. Sau khi update, TypeScript và RxJS sẽ cung cấp kiểu dữ liệu chính xác hơn xuyên suốt ứng dụng của bạn, mà việc này có thể dẫn đến những lỗi tìm ẩn về kiểu dữ liệu trong ứng dụng.'
  },
  'forms v6': {
    action:
      'Trong Angular Forms, `AbstractControl#statusChanges` bây giờ sẽ sinh ra sự kiện `PENDING` khi bạn gọi `AbstractControl#markAsPending`. Bảo đảm rằng nếu như bạn đang lọc hoặc kiểm tra các sự kiện của Form từ `statusChanges`, bạn phải tính đến sự kiện mới này khi gọi `markAsPending`.'
  },
  'animations timing': {
    action:
      'Nếu bạn sử dụng `totalTime` từ `AnimationEvent` ở bên trong 1 Zone bị vô hiệu hoá, nó sẽ không mang giá trị `0` nữa. Để kiểm tra xem nếu như 1 sự kiện Animation đang báo cáo 1 animation bị vô hiêu hoá thì `event.disabled` có thể được sử dụng để thay thế.'
  },
  'ngModel on form control': {
    action:
      'Việc sử dụng `ngModel` và `ngModelChange` cùng lúc với các Directives của `Reactive Form` đã không còn được hỗ trợ trong phiên bản 6 và sẽ bị gỡ bỏ trong phiên bản 7.'
  },
  'ngModelChange order': {
    action:
      '`ngModelChange` bây giờ sẽ được phát ra <b>sau</b> khi giá trị/tính hợp lệ (validity) được update trên Form Control thay vì <b>trước</b> để phù hợp với mong đợi của lập trình viên hơn. Nếu như bạn phụ thuộc vào thứ tự của các sự kiện này, bạn cần phải kiểm tra giá trị cũ trong Component của bạn.'
  },
  'Update Dependencies for v6': {
    action:
      'Update Angular Material lên phiên bản mới nhất.<br/><br/>`ng update @angular/material`<br/><br/>Việc làm này cũng sẽ tự động update những APIs đã không còn được hỗ trợ.'
  },
  strictPropertyInitializer: {
    action:
      'Nếu như bạn có cấu hình nghiêm ngặt (strict) cho TypeScript (nếu như bạn đặt giá trị `true` cho `strict` bên trong `tsconfig.js`), update `tsconfig.json` của bạn để vô hiệu hoá `strictPropertyInitialization` hoặc chuyển việc khai báo giá trị ban đầu cho các thuộc tính từ `ngOnInit` sang `constructor`. Bạn có thể đọc thêm về tuỳ chỉnh này ở <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization">TypeScript 2.7 release notes</a>'
  },
  'update to RxJS 6': {
    action:
      'Gỡ bỏ các chức năng không còn được hỗ trợ của RxJS 5 bằng <a href="https://github.com/ReactiveX/rxjs-tslint" target="_blank">rxjs-tslint auto update rules</a><br/><br/>Đối với phần lớn các ứng dụng, việc này đồng nghĩa với việc 2 câu lệnh sau được thực thi: <br/><br/>`npx rxjs-tslint`<br/>`rxjs-5-to-6-migrate -p src/tsconfig.app.json`'
  },
  'remove rxjs-compat': {
    action: 'Một khi ứng dụng và các thư viện liên quan đến ứng dụng của bạn đã được update lên RxJS 6, gỡ bỏ `rxjs-compat`.',
  },
  'use files instead of versionedFiles': {
    action:
      'Nếu bạn sử dụng Service Worker trong Angular, update bất cứ `versionedFiles` nào sang `files`. Kết quả sẽ là như nhau.'
  },
  'TypeScript 3.1': {
    action:
      'Angular giờ đã sử dụng TypeScript 3.1, đọc thêm về bất cứ thay đổi quan trọng tại: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html'
  },
  'Node 10': {
    action: 'Angular giờ đã thêm hỗ trợ cho Node 10: https://nodejs.org/en/blog/release/v10.0.0/',
  },
  'v7 update': {
    action:
      'Update lên phiên bản 7 cho core và cli bằng việc thực thi lệnh `ng update @angular/cli@7 @angular/core@7` trên terminal của bạn.'
  },
  'v7 material update': {
    action:
      'Update Angular Material lên phiên bản 7 bằng việc thực thi lệnh `ng update @angular/material@7` trên terminal của bạn. Bạn nên kiểm tra lại ứng dụng xem có sự thay đổi nào về Sizing và Layout hay không.'
  },
  'v7 material changes': {
    action:
      'Nếu bạn sử dụng tests bằng Screenshot, bạn sẽ cần phải tái khởi tạo lại các Screenshot Golden Files vì khá nhiều những thay đổi nhỏ về trực quan đã được update.'
  },
  'v7 material deprecations': {
    action: 'Đừng sử dụng `matRippleSpeedFactor` và `baseSpeedFactor` cho hiệu ứng Ripples nữa, thay vào đó hãy dùng cấu hình Animation.',
  },
  'v8 update': {
    action:
      'Update lên phiên bản 8 cho core và cli bằng việc thực thi lệnh `ng update @angular/cli@8 @angular/core@8` trên terminal của bạn, kiểm tra lại, và commit các sự thay đổi.'
  },
  'use ::ng-deep instead of /deep/': {
    action:
      'Thay thế `/deep/` bằng `::ng-deep` trong các file Styles của bạn, [đọc thêm về angular component styles và ::ng-deep](https://angular.io/guide/component-styles#deprecated-deep--and-ng-deep). `/deep/` và `::ng-deep` đều là những API không còn được hỗ trợ nhưng việc dùng `::ng-deep` được khuyến khích hơn cho đến khi "shadow-piercing descendant" bị [gỡ bỏ khỏi các trình duyện và công cụ liên quan](https://www.chromestatus.com/features/6750456638341120) hoàn toàn.'
  },
  'TypeScript 3.4': {
    action:
      'Angular giờ đã sử dụng TypeScript 3.4, [đọc thêm về các lỗi có thể xảy ra từ việc kiểm tra kiểu dữ liệu đã được cải thiện](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html).'
  },
  'node 10': {
    action:
      'Bảo đảm rằng bạn đang sử dụng <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 10 hoặc mới hơn</a>'
  },
  'Differential Loading': {
    action:
      'Lệnh "build" của Angular CLI giờ sẽ tự động khởi tạo một bản ES2015 đời mới với các Polyfills tối thiểu và một bản ES5 đời cũ hơn để tương thích với các trình duyệt cũ, cùng với việc sẽ tải đúng phiên bản (ES2015 hoặc ES5) tuỳ thuộc vào trình duyệt. Bạn có thể rút ra khỏi việc thay đổi này bằng cách cấu hình `target` sang `es5` trong `tsconfig.json` của bạn. Đọc thêm tại [angular.io](https://angular.io/guide/deployment#differential-loading).'
  },
  'CLI Telemetry': {
    action:
      'Khi sử dụng các phiên bản mới của Angular CLI, bạn sẽ được hỏi là nếu bạn có muốn chia sẻ dữ liệu sử dụng CLI cho Angular hay không. Bạn cũng có thể thêm vào tài khoản Google Analytics của bản thân. Việc này sẽ giúp cho chúng tôi có được những quyết định đúng đắn hơn về tính năng nào của Angular CLI cần được ưu tiên, và sẽ giúp chúng tôi đo đạc được sức ảnh hưởng của chúng tôi lên cộng đồng. Đọc thêm tại [angular.io](https://angular.io/analytics).'
  },
  'static query timing': {
    action:
      'Nếu bạn sử dụng `ViewChild` hoặc `ContentChild`, chúng tôi thay đổi cách mà những phép truy vấn này được xử lý để mang đến cho lập trình viên nhiều quyền kiểm soát hơn. Bạn phải tự xác định xem Change Detection nên thực thi trước khi kết quả được trả về. Ví dụ:  `@ContentChild(\'foo\', {static: false}) foo !: ElementRef;`. `ng update` sẽ tự động update các phép truy vấn này cho các bạn. Đọc thêm tại [angular.io](https://angular.io/guide/static-query-migration).'
  },
  'v8 material update': {
    action: 'Update Angular Material lên phiên bản 8 bằng việc thực thi lệnh `ng update @angular/material@8` trên terminal của bạn.',
  },
  'deep imports': {
    action:
      'Thay vì import từ `@angular/material`, bạn nên import chính xác Component nào bạn muốn sử dụng. Ví dụ: `@angular/material/button`. `ng update` sẽ xử lý việc này cho bạn.'
  },
  'new loadChildren': {
    action:
      'Đối với các modules được lazy-loaded bằng Router, bảo đảm rằng bạn [sử dụng cú pháp Dynamic Imports](https://angular.io/guide/deprecations#loadchildren-string-syntax). Import bằng chuỗi sẽ bị gỡ bỏ trong phiên bản 9. `ng update` sẽ xử lý việc này cho bạn. Đọc thêm tại [angular.io](https://angular.io/guide/deprecations#loadchildren-string-syntax).'
  },
  'platform deprecated': {
    action:
      'Chúng tôi không hỗ trợ `@angular/platform-webworker` nữa, vì nó không tương thích với Angular CLI. Thực thi cấu trúc Render của `Angular` bên trong môi trường của một Web Worker không đáp ứng được nhu cầu của lập trình viên. Bạn vẫn có thể sử dụng Web Workers với Angular. Đọc thêm về [web worker guide](https://v9.angular.io/guide/web-worker).Nếu bạn có nghiệp vụ mà cần đến tính năng này, hãy cho chúng tôi biết bằng cách email đến devrel@angular.io!'
  },
  'node-sass': {
    action:
      'Chúng tôi đã thay đổi trình biên dịch Sass có sẵn sang trình biên dịch Sass trong JavaScript. Để quay trở lại phiên bản có sẵn, cài đặt trình biên dịch này dưới dạng `devDependency`: `npm install node-sass --save-dev`'
  },
  'schematics async': {
    action:
      'Nếu bạn có xây dựng Schematics riêng, các Schematics đều có *thể* là bất đồng bộ. Ở phiên bản 8.0, tất cả Schematics đều sẽ phải là bất đồng bộ.'
  },
  'node 10.13': {
    action:
      'Bảo đảm rằng bạn đang sử dụng <a href="http://www.hostingadvice.com/how-to/update-node-js-latest-version/" target="_blank">Node 10.13 hoặc mới hơn</a>.',
  },
  'cli v8 latest': {
    action:
      'Thực thi lệnh `ng update @angular/core@8 @angular/cli@8` tại thư mục của workspace của bạn để update lên phiên bản 8.x mới nhất của `@angular/core` và `@angular/cli` rồi commit những sự thay đổi này.',
  },
  'create commits': {
    action:
      'Bạn có thể truyền vào tuỳ chọn `--create-commits` (hoặc là `-C`) cho lệnh [ng update](https://angular.io/cli/update) để khởi tạo 1 Git Commit cho mỗi thay đổi riêng lẻ.'
  },
  'ng update v9': {
    action: 'Thực thi lệnh `ng update @angular/core@9 @angular/cli@9` sẽ Angular lên phiên bản 9.',
  },
  'typescript 3.8': {
    action:
      'Dự án của bạn đã được update lên TypeScript 3.8, đọc thêm về các tính năng kiểm tra và các lỗi mới của trình biên dịch tại [TypeScript 3.7](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html) hoặc [TypeScript 3.8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html). Những tính năng mới này có thể sẽ phải cần bạn thay đổi code của dự án để phù hợp.'
  },
  'update @angular/material@9': {
    action: 'Thực thi lệnh `ng update @angular/material@9`.',
  },
  'update @nguniversal/hapi-engine': {
    action:
      'Nếu bạn sử dụng Angular Universal, thực thi lệnh `ng update @nguniversal/hapi-engine` hoặc `ng update @nguniversal/express-engine` phụ thuộc vào engine mà bạn đang sử dụng. Bước này có thể sẽ yêu cầu bạn phải truyền vào tuỳ chọn `--force` nếu như bất kỳ một thư viện bên ngoài nào chưa update phiên bản Angular.'
  },
  'dependencies update': {
    action:
      'Nếu như dự án của bạn phụ thuộc vào các thư viện Angular khác, chúng tôi khuyến cáo bạn nên update lên phiên bản mới nhất của những thư viện này. Ở một số trường hợp, việc update phiên bản cho các thư viện bên thứ 3 là cần thiết để có thể giải quyết các vấn đề không tương thích về APIs. Tham khảo `ng update` hoặc `npm outdated` để biết thêm về những thư viện nào cần được update.'
  },
  'ivy update': {
    action:
      'Trong quá trình update lên phiên bản 9, dự án của bạn đã được chuyển hoá (khi cần) thông qua việc thay đổi code tự động (migrate). Việc này dùng để gỡ bỏ những API không còn tương thích hoặc không còn đươc hỗ trợ ra khỏi code của bạn. Bạn có thể duyệt lại các thay đổi này, và tham khảo [Hướng dẫn update lên phiên bản 9](https://v9.angular.io/guide/updating-to-version-9) để nắm rõ hơn về những sự thay đổi này.'
  },
  stylesUpdate: {
    action:
      'Những CSS styles hoặc classes ở những phiên bản trước được áp dụng với hình thức là "cái cuối cùng sẽ thắng", nhưng bây giờ các CSS styles và classes này sẽ được áp dụng với một thứ tự ưu tiên đã được định sẵn. Đọc thêm tại [Styling Precedence](https://angular.io/guide/template-syntax#styling-precedence).'
  },
  ModuleWithProviders: {
    action:
      'Nếu bạn là tác giả của một thư viện dành cho Angular và bạn có viết hàm mà trả về `ModuleWithProviders` (ví dụ điển hình là hàm `forRoot()` thường gặp), bạn cần phải khai báo kiểu Generics cho `ModuleWithProviders`. Đọc thêm tại [angular.io](https://v9.angular.io/guide/deprecations#modulewithproviders-type-without-a-generic)'
  },
  wtf: {
    action:
      'Hỗ trợ cho Web Tracing Framework trong Angular đã không còn được hỗ trợ ở phiên bản 8. Bạn nên dừng việc sử dụng bất cứ APIs nào của `wtf*`. Để kiểm tra hiệu năng, chúng tôi khuyến cáo bạn sử dụng [các công cụ đo đạc hiệu năng trình duyệt](https://developers.google.com/web/tools/lighthouse/audits/user-timing).'
  },
  es5browser: {
    action:
      'Gỡ bỏ bất cứ `es5BrowserSupport` nào có trong `angular.json` của bạn và đặt giá trị cho `target` là `es2015` trong `tsconfig.json`. Angular từ giờ sẽ sử dụng `browserlist` để xác định xem build ES5 có cần thiết hay không. `ng update` sẽ thực hiện việc thay đổi này tự động.'
  },
  'ngForm selector': {
    action: 'Nếu bạn sử dụng `ngForm` để tạo Angular Forms, bạn nên thay thế bằng `ng-form`.',
  },
  'typings compilation': {
    action:
      'Chúng tôi đã update `tsconfig.app.json` để giới hạn những Files sẽ được biên dịch. Nếu bạn phụ thuộc vào việc có những Files khác cần được thêm vào trong quá trình biên dịch, ví dụ như `typings.d.ts`, bạn cần phải thêm File này vào quá trình biên dịch bằng tay.'
  },
  debug: {
    action:
      'Với việc Ivy giờ là Rendering Engine mặc định trong Angular 9, đối với bất cứ vấn đề nào về việc tương thích, mời bạn đọc qua [hướng dẫn về tương thích với Ivy](https://angular.io/guide/ivy-compatibility).'
  },
  'ngcc postinstall': {
    action:
      'Nếu bạn phụ thuộc vào nhiều thư viện thứ 3 khác nhau, bạn nên xem xét việc thực thi lệnh `ngcc` (Angular Compatibility Compiler) để tăng tốc build cho dự án. Bạn có thể thực thi `ngcc` dưới dạng `postinstall` trong `package.json` bằng [1 sự thay đổi nhỏ](https://v9.angular.io/guide/ivy#speeding-up-ngcc-compilation).'
  },
  'express-universal-server': {
    action:
      'Nếu bạn sử dụng Angular Universal với `@nguniversal/express-engine` hoặc `@nguniversal/hapi-engine`, một số backup files sẽ được khởi tạo. Một trong số đó là `server.ts`. Nếu như file của bạn khác với file được khởi tạo mặc định, có thể bạn sẽ phải sao chép một số thay đổi từ `server.ts.bak` vào trong file `server.ts` bằng tay.'
  },
  'ivy i18n': {
    action:
      'Angular 9 giới thiệu hàm toàn cục (global) `$localize()` và hàm này cần phải được load nếu như ứng dụng của bạn phụ thuộc vào bộ Toàn cầu hoá (i18n) của Angular. Thực thi lệnh `ng add @angular/localize` để thêm vào các thư viện cũng như các thay đổi về code cần thiết. Tham khảo [hướng dẫn cập nhật thay đổi về $localize](https://v9.angular.io/guide/migration-localize) để nắm thêm thông tin chi tiết về sự thay đổi này.'
  },
  entryComponents: {
    action:
      'Nếu như bạn có khai báo bất kỳ 1 `entryComponents` nào trong bất kỳ 1 `NgModules` nào của bạn, hoặc bạn có bất kỳ chỗ nào sử dụng `ANALYZE_FOR_ENTRY_COMPONENTS`, bạn có thể gỡ bỏ chúng đi. `entryComponents` không cần thiết nữa với trình biên dịch và môi trường chạy code Ivy mới'
  },
  'testbed-get': {
    action:
      'Nếu bạn sử dụng `TestBed.get`, bạn nên chuyển sang dùng `TestBed.inject`. Hàm mới này vẫn giữ hành vi như cũ, nhưng sẽ an toàn về kiểu dữ liệu hơn.'
  },
  $localize: {
    action:
      'Nếu như bạn sử dụng [Angular\'s i18n](http://angular.io/guide/i18n), bạn sẽ cần phải sử dụng `@angular/localize`. Đọc thêm về [hướng dẫn cập nhật thay đổi về $localize](https://v9.angular.io/guide/migration-localize).'
  },
  'ng update v10': {
    action:
      'Thực thi lệnh `ng update @angular/core@10 @angular/cli@10` để update Angular lên phiên bản 10.'
  },
  'update @angular/material': {
    action:
      'Thực thi lệnh `ng update @angular/material@10`.'
  },
  browserlist: {
    action:
      'Dự án mới được khởi tạo bằng Angular CLI sử dụng file tên là `.browserlistrc` thay vì `browserlist`. `ng update` sẽ thực hiện việc thay đổi này cho bạn.'
  },
  'v10-versions': {
    action:
      'Angular từ giờ sẽ yêu cầu cần có `tslint` phiên bản 6, `tslib` phiên bản 2, và [TypeScript 3.9](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html). `ng update` sẽ thực hiện việc thay đổi này cho bạn.'
  },
  styleext: {
    action: 'Đừng sử dụng `styleext` hoặc `spec` bên trong Angular schematics của bạn nữa. `ng update` sẽ thực hiện việc thay đổi này cho bạn.',
  },
  // 'tsconfig-layout': {
  //   action:
  //     'Angular recomienda utilizar `tsconfig.base.json` para ayudar a organizar el tipado en diferentes contextos(en común, pruebas unitarias, pruebas end to end, aplicación, etc) `ng update` lo migrara automáticamente.',
  // },
  'classes-without-decorators': {
    action:
      'Ở phiên bản 10, các classes mà dùng đến các tính năng của Angular mà không có đi kèm 1 Angular Decorator nào sẽ không còn được hỗ trợ nữa. [Đọc thêm](https://v10.angular.io/guide/migration-undecorated-classes). `ng update` sẽ thực hiện việc thay đổi này cho bạn.'
  },
  'injectable-definitions': {
    action:
      'Từ phiên bản 9, việc sử dụng `@Injectable` cho hệ thống Dependency Injection đã trở nên nghiêm ngặt hơn và nếu như không khai báo hoàn chỉnh, sẽ xảy ra những hành vi không mong muốn. [Đọc thêm](https://v9.angular.io/guide/migration-injectable). `ng update` sẽ thực hiện việc thay đổi này cho bạn.'
  },
  'closure-jsdoc-comments': {
    action:
      'Các thư viện của Angular không còn chứa những bình luận (comments) JSDOC nữa, mà những bình luận này cần thiết cho Closure Compiler (rất hiếm). Việc hỗ trợ này chỉ mang tính chất thử nghiệm và chỉ hoạt động trong một số trường hợp nhất định mà thôi. Chúng tôi sẽ thông báo về một cách khác được khuyến khích hơn trong thời gian ngắn sắp tới.'
  },
  'forms-number-input': {
    action:
      'Nếu bạn dùng Angular Forms, những trường nhập liệu (inputs) có kiểu là `number` sẽ không còn lắng nghe đến [các sự kiện thay đổi](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) nữa (những sự kiện này không nhất thiết sẽ phải sinh ra cho mỗi thay đổi của giá trị đầu vào), thay vào đó bạn nên lắng nghe [các sự kiện đầu vào (input events)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).'
  },
  'forms-length-input': {
    action:
      'Đối với việc kiểm tra sự hợp lệ của Angular Forms, các phép kiểm tra `minLength` và `maxLength` từ giờ sẽ kiểm tra và sẽ chỉ kiểm tra độ dài (length) của giá trị của Form Control nếu như giá trị đó có thuộc tính `length`.'
  },
  'esm5-bundles': {
    action:
      '[Angular Package Format](https://g.co/ng/apf) đã được update để gỡ bỏ định dạng `esm5` và `fesm5`. Những định dạng này sẽ không được phân phối ở bên trong những thư viện NPM của chúng tôi nữa. Nếu như bạn không dùng Angular CLI, có thể bạn sẽ cần phải tự mình xuống cấp (downlevel) Angular code xuống ES5.'
  },
  'console-errors': {
    action:
      'Những cảnh báo về các thành phần không rõ nguồn gốc (Unknown Elements) từ giờ sẽ được ghi ra Console dưới dạng Lỗi (`console.error`). Điều này sẽ không làm hỏng ứng dụng của bạn, nhưng có thể sẽ làm ảnh hưởng đến một số công cụ mà những công cụ này sẽ không hoạt động nếu như có thông tin được ghi ra Console dưới dạng Lỗi (`console.error`)'
  },
  'router-resolver-empty': {
    action:
      'Bất cứ Resolver nào mà trả về `EMPTY` sẽ huỷ bỏ phiên chuyển trang hiện tại. Nếu như bạn muốn cho phép phiên chuyển trang được tiếp tục bình thường, bạn cần phải update các Resolvers để sinh ra giá trị gì đó. Ví dụ: `defaultIfEmpty(...)`, `of(...)`, v.v...'
  },
  'sw-vary-headers': {
    action:
      'Nếu bạn sử dụng Service Worker của Angular và phụ thuộc vào các tài nguyên với tiêu đề (Header) [Vary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary), những tiêu đề này từ giờ sẽ bị bỏ qua để tránh những hành vi khó đoán trước được giữa các trình duyệt khác nhau. Để tránh chuyện này, [cấu hình](https://angular.io/guide/service-worker-config) Service Worker của bạn tránh lưu các tài nguyên này.'
  },
  'expression-changed-after-checked-new': {
    action:
      'Có thể bạn đã thấy qua lỗi `ExpressionChangedAfterItHasBeenChecked` mà lúc trước không xảy ra khi sử dụng `async` Pipe. Lỗi này trước đây không được phát hiện là vì hai `WrappedValues` được cho là "bằng nhau" trong mọi trường hợp. Trong phiên bản 10, `WrappedValues` đã được gỡ bỏ.'
  },
  'property-binding-change-detection': {
    action:
      'Nếu như bạn có 1 Property Binding như sau `[val]="(observable | async).someProperty"`, việc này sẽ không kích hoạt Change Detection nữa nếu như giá trị của `someProperty` không thay đổi. Nếu như bạn đang phụ thuộc vào hành vi cũ, thử `subscribe` bằng tay hoặc gọi hàm `markForCheck` khi cần thiết để update giá trị binding để bảo đảm rằng tham chiếu đến giá trị này thay đổi.'
  },
  'day-periods-crossing-midnight': {
    action:
      'Nếu như bạn sử dụng `formatDate()` hoặc `DatePipe` hoặc bất cứ mã định dạng `b` hoặc `B` nào, logic đã được update cho việc giá trị phụ hợp với các khoản thời gian mà xảy ra xuyên suốt đêm, và nó từ giờ sẽ hiển thị giá trị đúng, ví dụ như là `night` trong tiếng Anh.'
  },
  'urlmatcher-null': {
    action: 'Nếu bạn sử dụng `UrlMatcher`, kiểu dữ liệu đã được update để có thể luôn luôn trả về `null`.',
  },
  'v10-more-details': {
    action:
      'Để nắm thêm thông tin chi tiết về các thành phần không còn được hỗ trợ, các thay đổi code tự động, và các thay đổi khác, tham khảo [hướng dẫn update phiên bản 10](https://angular.io/guide/updating-to-version-10)'
  },
  'universal-baseurl': {
    action: 'Đối với những người sử dụng Angular Universal, nếu bạn sử dụng `useAbsoluteUrl` để thiết lập `platform-server`, từ bây giờ bạn cần phải xác định thêm cả `baseUrl`.',
  },
  'v11 ng update': {
    action: 'Thực thi lệnh `ng update @angular/core @angular/cli` để update lên phiên bản 11 cho Angular.'
  },
  'v11 versions': {
    action: 'Angular từ giờ cần phải có [TypeScript 4.0](https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/). `ng update` sẽ thực hiện thay đổi này cho bạn.'
  },
  'v11 browser support': {
    action: 'Hỗ trợ cho trình duyệt IE9, IE10, và IE Mobile đã được gỡ bỏ. Điều này đã được thông báo ở [update lên phiên bản 10](http://blog.angular.io/version-10-of-angular-now-available-78960babd41#c357).'
  },
  'webpack5 optin': {
    action: 'Bạn có thể sử dụng Webpack 5 bằng cách sử dụng Yarn (thay vì NPM) và thêm thuộc tính  `"resolutions": {"webpack": "^5.0.0"}` vào `package.json` của bạn.'
  },
  'ng new strict prompt': {
    action: 'Khi khởi tạo dự án mới bằng Angular CLI, bạn sẽ được hỏi là có muốn bật kiểu nghiêm ngặt (strict mode) hay không. Việc này sẽ cấu hình TypeScript và trình biên dịch Angular cho việc kiểm tra kiểu dữ liệu nghiêm ngặt hơn, và sẽ áp dụng ngân sách cho độ lớn của các gói tài nguyên nhỏ hơn. Bạn có thể dùng tuỳ chọn `--strict=true` hoặc `--strict-false` để bỏ qua câu hỏi này từ Angular CLI.'
  },
  'v11 router relativeLinkResolution': {
    action: 'Nếu bạn sử dụng Router, giá trị mặc định của `relativeLinkResolution` từ giờ đã được thay đổi từ `legacy` sang `corrected`. Nếu như ứng dụng của bạn sử dụng giá trị mặc định bằng việc không chỉ định giá trị trong `ExtraOptions` và kích hoạt phiên chuyển trang bằng Relative Links từ những Component con của các Route được khai báo bằng path trống (`path: ""`), bạn cần phải update cấu hình của `RouterModule` để chỉ định giá trị `legacy` cho `relativeLinkResolution`. Xem [docs](https://v11.angular.io/api/router/ExtraOptions#relativeLinkResolution) để biết thêm chi tiết.'
  },
  'router initialNavigation': {
    action: 'Trong Angular Router, những tuỳ chọn không còn được hỗ trợ từ phiên bản 4 dành cho `initialNavigation` đã được gỡ bỏ hoàn toàn ở phiên bản này. Nếu như ứng dụng của bạn có dùng `enabled` hoặc `true` trước đây, bây giờ hãy dùng `enabledNonBlocking` hoặc `enabledBlocking`. Nếu như ứng dụng của bạn có dùng `false` hoặc `legacy_disabled`, giờ hãy sử dụng `disabled`.'
  },
  'routerlink preserveQueryParams': {
    action: 'Ở trên thuộc tính `routerLink` của Angular Router, `preserveQueryParams` đã được gỡ bỏ, dùng `queryParamsHandling="preserve"`.'
  },
  'routerlink queryParams typing': {
    action: 'Nếu như bạn đang truy xuất đến giá trị `queryParams`, `fragment`, hoặc `queryParamsHandling` trên `routerLink`, có thể bạn sẽ cần phải thả lỏng kiểu giá trị một chút để có thể chấp nhận cả `undefined` và `null`.'
  },
  'viewencapsulation native removed': {
    action: 'Tuỳ chỉnh View Encapsulation trên Component `ViewEncapsulation.Native` đã được gỡ bỏ. Dùng `ViewEncapsulation.ShadowDom`. `ng update` sẽ thực hiện việc thay đổi này cho bạn.'
  },
  'ICU expressions typechecked': {
    action: 'Nếu bạn sử dụng i18n, những biểu thức bên trong Internaltional Components for Unicode (ICUs) biểu thức sẽ được kiểm tra kiểu dữ liệu. Điều này có thể dẫn đến lỗi khi biên dịch code.'
  },
  'forms validators asyncValidators typing': {
    action: 'Directives ở trong `@angular/forms` từng có kiểu dữ liệu là `any[]` cho `validators` và `asyncValidators`. Các tham số này từ bây giờ đã được cung cấp kiểu dữ liệu phù hợp, nếu như code của bạn phụ thuộc vào kiểu dữ liệu `any[]` cho các tham số này, có thể bạn sẽ cần phải update lại code để cải thiện kiểu dữ liệu.'
  },
  'forms AbstractFormControl': {
    action: 'Nếu bạn sử dụng Angular Forms, kiểu dữ liệu của `AbstractFormControl.parent` bây giờ bao gồm cả `null`. `ng update` sẽ thực hiện việc thay đổi này cho bạn, nhưng trong trường hợp hiếm, code của bạn kiểm tra xem `AbstractFormControl.parent` có `undefined` hay không bằng `===`, bạn cần phải dùng `=== null` vì `parent` bây giờ sẽ được khởi tạo bằng giá trị `null` thay vì là được để `undefined` như trước.'
  },
  'platform-webworker': {
    action: 'Thư viện hiếm khi được sử dụng, `@angular/platform-webworker` và `@angular/platform-webworker-dynamic` đã không còn được hỗ trợ từ phiên bản 8, và giờ đã được gỡ bỏ hoàn toàn. Thực thi một số thành phần của Angular bên trong môi trường của một Web Worker là một thí nghiệm mà không bao giờ hoạt động chính xác trong nhiều trường hợp thông dụng. Angular vẫn có hỗ trợ cho [Web Workers](https://angular.io/guide/web-worker).'
  },
  'v11 slice pipe typing': {
    action: '`slice` Pipe giờ sẽ trả về `null` nếu như giá trị đầu vào là `undefined`. Điều này giúp cho `slice` Pipe thống nhất với phần lớn các Pipes hiện tại.'
  },
  'v11 keyvalue typing': {
    action: '`keyvalue` Pipe đã được chỉnh sửa cho trường hợp nếu như đối tượng (object) đầu vào có keys là kiểu dữ liệu số (number), kiểu dữ liệu của giá trị trả về từ Pipe sẽ là giá trị chuỗi của những keys này (string representation). Từ trước đến giờ nó đã hoạt động như vậy, nhung code của keyvalue Pipe được cập nhật để phản ánh đúng mà thôi. Hãy update những nơi sử dụng pipe này nếu như những nơi này đang phụ thuộc vào kiểu dữ liệu không đúng trước đó. Chú ý là điều này không ảnh hưởng đến những trường hơp mà giá trị đầu vào là `Map`.'
  },
  'v11 number pipe typing': {
    action: 'Các Pipes về số (`decimal`, `percent`, `currency`, v.v...) từ giờ sẽ chỉ ra rõ ràng kiểu dữ liệu nào được chấp nhận cho từng loại pipe.'
  },
  'v11 date pipe typing': {
    action: '`date` Pipe từ giờ sẽ chỉ ra rõ ràng những kiểu dữ liệu nào được chấp nhận.'
  },
  'v11 datetime rounding': {
    action: 'Khi truyền vào 1 chuỗi có định dạng ngày-giờ (date-time) vào cho `DatePipe` trong định dạng có chứa milli giây (millisecond), phần milli giây này sẽ luôn được làm tròn xuống thay vì làm tròn đến milli giây gần nhất. Đa số các ứng dụng sẽ không bị ảnh hưởng bởi thay đổi này. Nếu như đây không phải là hành vi mà bạn mong muốn ở `DatePipe`, bạn nên cân nhắc làm tròn phần milli giây ở chuối ngày-giờ của bạn trước khi truyền nó vào cho `DatePipe`.'
  },
  'v11 async pipe typing': {
    action: '`async` Pipe sẽ không tự động trả về giá trị `undefined` nữa nếu như giá trị đầu vào có kiểu dữ liệu là `undefined` nữa. Thực tế, nếu giá trị đầu vào là `undefined`, `async` pipe sẽ trả về `null`.'
  },
  'v11 case pipe update': {
    action: '`uppercase` và `lowercase` Pipes từ giờ sẽ không để cho giá trị sai (falsy) đi qua nữa. Nếu giá trị đầu vào là `null` và `undefined`, hai pipes này sẽ chuyển đổi giá trị sang `null` và sẽ sinh ra lỗi với giá trị đầu vào không hợp lệ. Điều này giúp cho hai pipes này thống nhất với các pipes còn lại của Angular.'
  },
  'v11 router NavigationExtras typing': {
    action: 'Nếu bạn sử dụng Router với `NavigationExtras`, kiểu dữ liệu mới sẽ cho phép truyền vào một biến có kiểu dữ liệu là `NavigationExtras`, nhưng nó sẽ không cho phép truyền vào một đối tượng bất kỳ nào, vì bạn cần phải khai báo chính xác các thuộc tính trong `NavigationExtras` mà thôi. Nếu như bạn bị ảnh hưởng bởi điều này, bạn chỉ nên khai báo các thuộc tính từ `NavigationExtras` mà bạn thực sự sử dụng hoặc dùng Type Assertion lên trên đối tượng hoặc biến đang truyền vào bằng `as NavigationExtras`/'
  },
  'v11 TestBed.overrideProvider': {
    action: 'Trong các tests của bạn, nếu bạn gọi `TestBed.overrideProvider` sau khi sự khởi tạo của TestBed, việc điều khiển Provider này sẽ không có hiệu lực nữa. Hành vi này là nhất quán với các hàm Điều khiển khác (override methods, ví dụ như `TestBed.overrideDirective`, v.v...) nhưng TestBed sẽ sinh ra lỗi để báo cho bạn biết. Nếu như bạn thấy lỗi này, bạn nên di chuyển `TestBed.overrideProvider` trước khi Testbed được khởi tạo xong.'
  },
  'v11 router RouteReuseStrategy': {
    action: 'Nếu bạn sử dụng `RouteReuseStrategy` của Router, thứ tự các tham số đã thay đổi. Khi gọi `RouteReuseStrategy#shouldReuseRoute` khi bạn đang kiểm tra các routes con, hàm này sẽ được gọi với các tham số `future` và `current` bị đảo ngược. Nếu `RouteReuseStrategy` của bạn phụ thuộc vào mỗi `future` HOẶC `current`, có thể bạn sẽ cần phải update lại code của `shouldReuseRoute` để phản ảnh đúng thứ tự của tham số `future` và `current`.'
  },
  'v11 locale data readonly': {
    action: 'Nếu như bạn sử dụng mảng dữ liệu về địa phương (locale data), API này sẽ trả về 1 mảng Readonly. Nếu như bạn biến đổi mảng (ví dụ: gọi `sort()`, `push()`, hoặc `splice()` v.v...) thì code của các bạn sẽ không đươc biên dịch thành công nữa. Nếu như bạn cần biến đổi mảng này, bạn nên tạo ra một bản sao (ví dụ: gọi hàm `slice()`) rồi áp dụng các biến đổi lên bản sao.'
  },
  'v11 CollectionChangeRecord': {
    action: 'Trong Change Detection, `CollectionChangeRecord` đã được gỡ bỏ hoàn toàn, dùng `IterableChangeRecord`'
  },
  'v11 forms async validators': {
    action: 'Nếu bạn dùng Angular Forms và Async Validators được khai báo tại thời điểm các class `FormControl`, `FormGroup`, và `FormArray` được khởi tạo, sự kiện `statusChange` trước đây không được sinh ra sau khi Async Validator hoàn thành. Điều này đã được thay đổi. Nếu như code của bạn phụ thuộc vào hành vi cũ, bạn nên lọc/bỏ qua sự kiện `statusChange` ban đầu.'
  },
};
// @TODO This console log is required or the locale won't be registered
console.log(`vi-VN registered`);
registerLocalization('vi-VN', steps, uiLabels);
