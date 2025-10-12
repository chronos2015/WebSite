---
slug: Component
title: コンポーネント図
---

(Component Diagram)

## サンプル

```
@startuml
[データベース] as DB
[バックエンド] as BE
[フロントエンド] as FE

FE --> BE : HTTPリクエスト
BE --> DB : SQLクエリ
@enduml
```

```pumld
@startuml
[データベース] as DB
[バックエンド] as BE
[フロントエンド] as FE

FE --> BE : HTTPリクエスト
BE --> DB : SQLクエリ
@enduml
```

## 全体の設定

### タイトル

タイトルを定義できます。

```
title 新基盤構築計画
```

```pumld
@startuml
title 新基盤構築計画
[データベース] as DB
[バックエンド] as BE
[フロントエンド] as FE

FE --> BE : HTTPリクエスト
BE --> DB : SQLクエリ
@enduml
```

### ヘッダ

ヘッダを定義できます。

```
header 新基盤構築計画
```

```pumld
@startuml
header 新基盤構築計画
[データベース] as DB
[バックエンド] as BE
[フロントエンド] as FE

FE --> BE : HTTPリクエスト
BE --> DB : SQLクエリ
@enduml
```

### フッタ

フッタを定義できます。

```
footer フッタ
```

```pumld
@startuml
footer フッタ
[データベース] as DB
[バックエンド] as BE
[フロントエンド] as FE

FE --> BE : HTTPリクエスト
BE --> DB : SQLクエリ
@enduml
```

### キャプション

キャプションを定義できます。

```
caption キャプション
```

```pumld
@startuml
caption キャプション
[データベース] as DB
[バックエンド] as BE
[フロントエンド] as FE

FE --> BE : HTTPリクエスト
BE --> DB : SQLクエリ
@enduml
```

## コンポーネント

`[]`で囲むか、`component`に続けてコンポーネント名を記載する事でコンポーネントを定義できます。

```
[コンポーネント名]
```

```pumld
@startuml
[コンポーネント名]
@enduml
```

```
component コンポーネント名
```

```pumld
@startuml
component コンポーネント名
@enduml
```

## インターフェース

```
(インターフェース名)
```

```pumld
@startuml
(インターフェース名)
@enduml
```

## パッケージ

これはクラス図のパッケージと同じ記載になっていますね・・・。

```
package "パッケージ名"
```

```pumld
@startuml
package "パッケージ名"
@enduml
```

### パッケージにコンポーネント又はインターフェースを定義する場合

```
package "パッケージ名" {
    [コンポーネント名]
    (インターフェース名)
}
```

```pumld
@startuml
package "パッケージ名" {
    [コンポーネント名]
    (インターフェース名)
}
@enduml
```

## コンポーネント間の関係

```
[コンポーネントＡ] --> [コンポーネントＢ]
```

```pumld
@startuml
[コンポーネントＡ]
[コンポーネントＢ]
[コンポーネントＡ] --> [コンポーネントＢ]
@enduml
```

```
[コンポーネントＡ] ..> [コンポーネントＢ]
```

```pumld
@startuml
[コンポーネントＡ]
[コンポーネントＢ]
[コンポーネントＡ] ..> [コンポーネントＢ]
@enduml
```

## コンポーネントとインターフェイスの関係

```
[コンポーネントＡ] -- (インターフェイスＡ)
```

```pumld
@startuml
[コンポーネントＡ]
(インターフェイスＡ)
[コンポーネントＡ] -- (インターフェイスＡ)
@enduml
```

## ノート

### 左側

```
note left : ノート
```

```pumld
@startuml
[コンポーネントＡ]
note left : ノート
@enduml
```

### 右側

```
note right : ノート
```

```pumld
@startuml
[コンポーネントＡ]
note right : ノート
@enduml
```

### 上側

```
note top : ノート
```

```pumld
@startuml
[コンポーネントＡ]
note top : ノート
@enduml
```

### 下側

```
note bottom : ノート
```

```pumld
@startuml
[コンポーネントＡ]
note bottom : ノート
@enduml
```

### 複数行の場合

この機能は、ノートを右側に配置する場合、左側に配置する場合、上側に配置する場合、下側に配置する場合でも使用できます。<br />
尚、このサイトでは右側のみ紹介しています。

```
note right
クラスの右側に注釈１
クラスの右側に注釈２
end note
```

```pumld
@startuml
[コンポーネントＡ]
note right
クラスの右側に注釈１
クラスの右側に注釈２
end note
@enduml
```

## 行コメント

`'`から始まる行は行コメントとして扱われます。

## ブロックコメント

`/*`から`*/`まではブロックコメントとして扱われます。
:::warning
注意: ただし、行頭以外に`/*`を置いた場合にブロックコメントとして認識されないようです。<br />
また行の途中で`*/`を記載してもその行の最後までブロックコメントとして処理されるようです。
:::

## 参照

(https://niyanmemo.com/5186/)[https://niyanmemo.com/5186/]

(http://yohshiy.blog.fc2.com/blog-entry-158.html)[http://yohshiy.blog.fc2.com/blog-entry-158.html]
