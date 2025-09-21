---
slug: DependencyInjection
title: DependencyInjection
---

Microsoft.Extensions.DependencyInjection は、.NET における **公式の依存性注入（DI）コンテナの基盤ライブラリ**です。ASP.NET Core をはじめ、.NET の多くのアプリケーションで使われており、**サービスの登録・解決・ライフサイクル管理を行うための仕組み**を提供します。

---

### ✅ 目的と役割

| 機能 | 説明 |
|------|------|
| **依存性の注入** | クラスが必要とする依存（サービス、リポジトリなど）を外部から提供する |
| **ライフサイクル管理** | Singleton / Scoped / Transient のスコープを制御できる |
| **疎結合化** | 実装と使用側を分離し、テストや保守性を向上させる |
| **構成の一元化** | `Program.cs` や `Startup.cs` でサービス構成を集中管理できる |

---

### 🧪 基本的な使い方

#### 1. サービスの登録

```csharp
services.AddTransient<IUserService, UserService>();     // 毎回新しいインスタンス
services.AddScoped<IOrderService, OrderService>();       // リクエストごとに1インスタンス
services.AddSingleton<ILogger, ConsoleLogger>();         // アプリケーション全体で1インスタンス
```

#### 2. コンストラクタインジェクション

```csharp
public class HomeController
{
    private readonly IUserService _userService;

    public HomeController(IUserService userService)
    {
        _userService = userService;
    }
}
```

#### 3. サービスの解決（手動）

```csharp
var serviceProvider = services.BuildServiceProvider();
var userService = serviceProvider.GetRequiredService<IUserService>();
```

---

### ✅ よく使われる拡張ライブラリ

| ライブラリ | 用途 |
|------------|------|
| `Microsoft.Extensions.Logging` | ログ機能のDI統合 |
| `Microsoft.Extensions.Configuration` | 設定ファイルの読み込みと注入 |
| `Microsoft.Extensions.Options` | オプションパターンによる設定の型安全な注入 |
| `Microsoft.Extensions.Http` | `HttpClientFactory` のDI統合と回復性（Pollyとの連携） |

---

### ✅ 有効な使用箇所（代表例）

#### 1. **アプリケーション層のサービス**
- ビジネスロジックを担う `IUserService`, `IOrderService` など
- UIやAPI層から注入されることで、**責務の分離とテスト容易性**が向上

#### 2. **リポジトリ層（データアクセス）**
- `IUserRepository`, `IProductRepository` など
- 実装を切り替えやすく、モック化も容易

#### 3. **ロギング・監査・認可などの横断的関心事**
- `ILogger`, `IAuditLogger`, `IAuthorizationService` など
- SerilogやPollyなどと連携し、**制度的責任を注入可能**

#### 4. **設定情報（Optionsパターン）**
- `IOptions<AppSettings>` などで、構成ファイルの値を型安全に注入
- 環境ごとの切り替えが容易

#### 5. **MediatRのハンドラー**
- `IRequestHandler<TRequest, TResponse>` をDIで注入
- CQRS構成で、**処理のルーティングと責務分離**を実現

#### 6. **HttpClientFactoryによる外部通信**
- `IHttpClientFactory` を使って、再試行やタイムアウトを構成可能
- Pollyとの統合で、**回復性のある設計**が可能

#### 7. **ViewModel（MVVM構成）**
- WPFやBlazorなどで、`MainViewModel` に `IService` を注入
- Viewとの分離が促進され、**テスト可能なUI設計**が実現

---

### ✅ DIの設計で意識すべきこと

- **インターフェースと実装の分離**
- **ライフサイクルの適切な選択**
- **サービスの粒度と責務の明快さ**
- **テスト可能性（モック化しやすい構造）**

---

### ✅ 実例と参考資料

- [.NET公式のDI使用例（コンソールアプリ）](https://learn.microsoft.com/ja-jp/dotnet/core/extensions/dependency-injection-usage)  
- [MVVM構成におけるDI活用例（Zenn）](https://zenn.dev/acntechjp/articles/42c5fdf8f14cf0)  
- [基本的なDI構成のQiita記事](https://qiita.com/YoshijiGates/items/047eb34bfa1eaa0b3032)

---

Microsoft.Extensions.DependencyInjection は、単なる技術ではなく、**制度設計の基盤としての構造的役割を持つ**ライブラリです。  
次は、DIコンテナの拡張（条件付き登録、タグ付き解決）、または MediatR や Serilog との統合設計に進めても面白いですよ。どうしましょう。
