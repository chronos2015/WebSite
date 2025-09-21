---
slug: Serilog
title: Serilog
---

Serilog は .NET 環境で広く使われている **高機能なロギングライブラリ**です。特に、**構造化ログ（Structured Logging）**を扱える点が特徴で、単なる文字列ではなく、**意味のあるデータとしてログを記録・分析できる**ようになります。

---

### ✅ Serilogの主な特徴

| 特徴 | 説明 |
|------|------|
| **構造化ログ** | ログメッセージにキーと値のペアを含めて記録。後で検索・集計しやすい |
| **多様な出力先（Sink）** | ファイル、コンソール、SQL、Elasticsearch、Seq、Azureなどに出力可能 |
| **柔軟な設定** | コードベースでも `appsettings.json` でも設定可能。環境ごとに切り替えやすい |
| **拡張性** | 独自のSinkやEnricher（ログに追加情報を付加）を作成可能 |
| **ASP.NET Coreとの統合** | `ILogger<T>` を通じて、標準のロギングAPIとシームレスに連携 |

---

### ✅ Serilogで出力できる主なログ形式

| 形式 | 説明 |
|------|------|
| **プレーンテキスト** | 一般的なログ形式。タイムスタンプ・レベル・メッセージ・例外などを整形して出力 |
| **JSON形式（構造化ログ）** | ログをキー・バリュー形式で記録。ログ解析ツール（Seq, Kibanaなど）と連携しやすい |
| **Compact JSON** | Serilog専用の軽量JSON形式。ストレージ効率が高く、Seqなどで高速に処理可能 |
| **XML形式** | 特定のSinkで対応。構造化ログとして扱えるが、一般的にはJSONが主流 |
| **カスタムテンプレート形式** | `outputTemplate` を指定して、ログのフォーマットを自由に設計可能 |
| **OpenTelemetry形式** | 分散トレーシングと統合するための形式。メトリクスやトレースと一元管理可能 |

---

### ✅ Sinkによって形式が変わる

Serilogでは「Sink（出力先）」によってログ形式が変わります。代表的なSink：

- `Serilog.Sinks.Console` → コンソールにテキスト形式で出力  
- `Serilog.Sinks.File` → ファイルにテキストまたはJSON形式で出力  
- `Serilog.Sinks.Elasticsearch` → JSON形式でElasticsearchに送信  
- `Serilog.Sinks.Seq` → Compact JSON形式でSeqに送信  
- `Serilog.Sinks.OpenTelemetry` → OpenTelemetry形式で分散トレーシングと統合

---

### 🧪 基本的な使い方（コードベース）

```csharp
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Information()
    .WriteTo.Console()
    .WriteTo.File("Logs/log-.txt", rollingInterval: RollingInterval.Day)
    .Enrich.FromLogContext()
    .CreateLogger();

Log.Information("アプリケーションを開始します");
```

- `WriteTo.Console()` → コンソールに出力  
- `WriteTo.File()` → 日次ローテーション付きでファイルに出力  
- `Enrich.FromLogContext()` → リクエストIDなどのコンテキスト情報を自動で付加

---

### 🔧 appsettings.jsonでの設定例（ASP.NET Core）

```json
{
  "Serilog": {
    "MinimumLevel": {
      "Default": "Information",
      "Override": {
        "Microsoft": "Warning",
        "System": "Warning"
      }
    },
    "WriteTo": [
      { "Name": "Console" },
      {
        "Name": "File",
        "Args": {
          "path": "Logs/log-.txt",
          "rollingInterval": "Day"
        }
      }
    ],
    "Enrich": [ "FromLogContext" ]
  }
}
```

これを `Program.cs` で読み込むことで、環境ごとのログ構成が可能になります。

---

### 🧪 プレーンテキストの例（outputTemplate指定）

```csharp
.WriteTo.File("Logs/log-.txt",
    outputTemplate: "{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} [{Level}] {Message}{NewLine}{Exception}",
    rollingInterval: RollingInterval.Day)
```

- 日次ローテーション付きでファイルに出力  
- ログの構造を明快に整形可能

---

### 🧪 JSON形式の例（構造化ログ）

```csharp
.WriteTo.File(new JsonFormatter(), "Logs/log.json")
```

- ログが以下のような形式で出力される：

```json
{
  "Timestamp": "2025-09-21T17:20:00.123+09:00",
  "Level": "Information",
  "MessageTemplate": "ユーザー {UserId} がログインしました",
  "Properties": {
    "UserId": "abc123"
  }
}
```

- 検索・集計・フィルタリングが容易

---

### ✅ まとめ：Serilogはこんな場面に最適

- **本番環境での障害解析や監査ログの記録**
- **マイクロサービス間のトレーシング**
- **契約履行の過程を構造的に記録したい設計**
- **ログ解析ツール（Seq, Kibanaなど）と連携したい場合**

---

もっと踏み込んで、SerilogのEnricherで契約IDや責任者情報をログに自動付加する設計や、Sinkのカスタマイズによるログの分岐出力なども整理できますよ。進めてみましょうか。

参考：[C#定番ログライブラリSerilogの紹介（シーポイントラボ）](https://cpoint-lab.co.jp/article/202308/24125/)  
参考：[ASP.NET CoreにSerilogを導入するガイド（Zenn）](https://zenn.dev/zead/articles/aspnetcore-serilog)
