---
slug: FluentValidation
title: FluentValidation
---

**FluentValidation** は、.NET向けの入力検証ライブラリで、**強く型付けされた検証ルールをコードで宣言的に記述できる**のが特徴です。特に、業務ロジックや契約前の責任分離を明快にしたい設計者にとって、非常に有用なツールです。

---

### 📌 基本概要

- **対象**：C#/.NET（ASP.NET Coreなど）
- **入手方法**：NuGetで `FluentValidation` パッケージを追加
- **主な用途**：モデルのプロパティに対する検証ルールの定義と実行
- **設計思想**：検証ロジックをモデルから分離し、再利用性と可読性を高める

---

### 🧠 使い方の基本構造

1. **モデルクラスを定義**  
   例：`Customer` クラスに `Name` や `Email` プロパティを持たせる

2. **バリデータークラスを作成**  
   `AbstractValidator<T>` を継承し、`RuleFor()` メソッドで検証ルールを記述

   ```csharp
   public class CustomerValidator : AbstractValidator<Customer>
   {
       public CustomerValidator()
       {
           RuleFor(x => x.Name).NotEmpty().WithMessage("名前は必須です");
           RuleFor(x => x.Email).EmailAddress().WithMessage("有効なメールアドレスを入力してください");
       }
   }
   ```

3. **検証の実行**

   ```csharp
   var validator = new CustomerValidator();
   var result = validator.Validate(customer);

   if (!result.IsValid)
   {
       foreach (var error in result.Errors)
       {
           Console.WriteLine($"{error.PropertyName}: {error.ErrorMessage}");
       }
   }
   ```

---

### 🧩 設計的な利点

- **責任の分離**：モデルと検証ロジックを分離できるため、契約前の検証責任を明確にできる
- **再利用性**：バリデータークラスを複数箇所で使い回せる
- **カスタム検証**：`Must()` や拡張メソッドで複雑な検証も柔軟に記述可能
- **エラーメッセージの制御**：テンプレートやコードベースで整形・国際化が可能

---

### ✅ 主なビルトイン検証メソッド

| メソッド | 検証内容 | 例 |
|----------|----------|----|
| `NotNull()` / `NotEmpty()` | nullや空文字の禁止 | `RuleFor(x => x.Name).NotEmpty()` |
| `Length(min, max)` | 文字列の長さ制限 | `Length(5, 100)` |
| `EmailAddress()` | メール形式の検証 | `RuleFor(x => x.Email).EmailAddress()` |
| `Matches(regex)` | 正規表現による検証 | `Matches(@"^\d{3}-\d{4}$")` |
| `InclusiveBetween(min, max)` | 範囲内の数値 | `InclusiveBetween(1, 100)` |
| `CreditCard()` | クレジットカード番号の形式 | `RuleFor(x => x.CardNumber).CreditCard()` |
| `Must(predicate)` | カスタム条件 | `Must(x => x.StartsWith("A"))` |
| `SetValidator()` | ネストされたモデルの検証 | `RuleFor(x => x.Address).SetValidator(new AddressValidator())` |
| `RuleForEach()` | 配列やリストの各要素に対する検証 | `RuleForEach(x => x.Products).SetValidator(new ProductValidator())` |

---

### 🧠 高度な検証機能

- **条件付き検証**  
  `When()` や `Unless()` を使って、特定条件下のみ検証を実行できます。

  ```csharp
  RuleFor(x => x.PhoneNumber)
      .NotEmpty()
      .When(x => x.ContactMethod == "Phone");
  ```

- **エラーメッセージのテンプレート化**  
  `{PropertyName}` や `{MinLength}` などのプレースホルダーを使って、動的なメッセージ生成が可能。

- **Severity（重大度）や ErrorCode の指定**  
  `WithSeverity(Severity.Warning)` や `WithErrorCode("E001")` で、検証結果の分類ができます。

- **非同期検証**  
  `ValidateAsync()` により、DB照会などを含む非同期検証も可能。

---

### ✅ クライアントで使える可能性があるケース

#### 1. **Blazor WebAssembly**
- .NETランタイムがブラウザ上で動作するため、FluentValidationのアセンブリをクライアントにロードして使うことが可能。
- ただし、**パフォーマンスやサイズの制約**があるため、慎重な設計が必要。

#### 2. **Electron.NETやUno Platform**
- クライアントアプリとして.NETを動かす環境なら、FluentValidationを組み込むことが可能。
- ただし、これは「Webクライアント」ではなく「デスクトップアプリ」に近い。


---

### 🧪 応用例

- **ネストされたモデルの検証**（例：`Order` → `Product[]`）も可能
- **Severity（重大度）や ErrorCode の指定**で、検証結果の分類もできる
- **ASP.NET Coreとの統合**もスムーズで、`Startup.cs` で簡単に組み込める
- **契約前の責任チェック**：ユーザー入力の妥当性を契約成立前に明確化
- **制度設計の検証ロジック**：条件付き必須項目や相互依存の検証
- **ネストされた構造の検証**：注文→商品→オプションのような階層構造にも対応

---

### 🔗 詳細な実装例や応用技術

- [Qiitaの記事：FluentValidationの基本と応用](https://qiita.com/jun1s/items/e291fd7a1f3b991eaf48)
- [ネストされたモデルの検証方法（AADOJO）](https://aadojo.alterbooth.com/entry/2023/06/02/143816)
- [公式ドキュメント（英語）](https://docs.fluentvalidation.net/)

FluentValidationでは、非常に多様な検証が可能です。基本的なものから複雑な条件付き、ネストされたモデルの検証まで、**責任の所在を明快に分離する設計**に向いています。
