---
slug: Architecture
title: アーキテクチャ図
---

(Architecture Diagram)

## サンプル

```
@startuml
package "ユーザー側" {
  [Webブラウザ]
}
database データベース
cloud 外部API
package "サーバー側" {
  [Webブラウザ] --> [Webサーバー]
  [Webサーバー] --> [アプリケーションサーバー]
  [アプリケーションサーバー] --> データベース
  [アプリケーションサーバー] --> 外部API
}
@enduml
```

```pumld
@startuml
package "ユーザー側" {
  [Webブラウザ]
}
database データベース
cloud 外部API
package "サーバー側" {
  [Webブラウザ] --> [Webサーバー]
  [Webサーバー] --> [アプリケーションサーバー]
  [アプリケーションサーバー] --> データベース
  [アプリケーションサーバー] --> 外部API
}
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
package "ユーザー側" {
  [Webブラウザ]
}
database データベース
cloud 外部API
package "サーバー側" {
  [Webブラウザ] --> [Webサーバー]
  [Webサーバー] --> [アプリケーションサーバー]
  [アプリケーションサーバー] --> データベース
  [アプリケーションサーバー] --> 外部API
}
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
package "ユーザー側" {
  [Webブラウザ]
}
database データベース
cloud 外部API
package "サーバー側" {
  [Webブラウザ] --> [Webサーバー]
  [Webサーバー] --> [アプリケーションサーバー]
  [アプリケーションサーバー] --> データベース
  [アプリケーションサーバー] --> 外部API
}
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
package "ユーザー側" {
  [Webブラウザ]
}
database データベース
cloud 外部API
package "サーバー側" {
  [Webブラウザ] --> [Webサーバー]
  [Webサーバー] --> [アプリケーションサーバー]
  [アプリケーションサーバー] --> データベース
  [アプリケーションサーバー] --> 外部API
}
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
package "ユーザー側" {
  [Webブラウザ]
}
database データベース
cloud 外部API
package "サーバー側" {
  [Webブラウザ] --> [Webサーバー]
  [Webサーバー] --> [アプリケーションサーバー]
  [アプリケーションサーバー] --> データベース
  [アプリケーションサーバー] --> 外部API
}
@enduml
```

#### すべて組み合わせると...

```pumld
@startuml
header 新基盤構築計画
title 新基盤構築計画
caption キャプション
footer フッタ
package "ユーザー側" {
  [Webブラウザ]
}
database データベース
cloud 外部API
package "サーバー側" {
  [Webブラウザ] --> [Webサーバー]
  [Webサーバー] --> [アプリケーションサーバー]
  [アプリケーションサーバー] --> データベース
  [アプリケーションサーバー] --> 外部API
}
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

## パッケージ

アーキテクチャ図では、関連する要素の論理的なグループとしてパッケージを使うようです。

```
package Sample {
  component コンポーネント名
}
```

```pumld
@startuml
package Sample {
  component コンポーネント名
}
@enduml
```

## ノード

物理的または論理的な実行環境を表します。

```
node ノード名
```

```pumld
@startuml
node ノード名
@enduml
```

## データストア

```
database データストア
```

```pumld
@startuml
database データストア
package Sample {
  component コンポーネント名
}
@enduml
```

## クラウド

```
cloud "クラウド"
```

```pumld
@startuml
cloud "クラウド"
@enduml
```

## 単方向の関連

```
[ブラウザ] --> [サーバ]
```

```pumld
@startuml
[ブラウザ] --> [サーバ]
@enduml
```

## 双方向の関連	

```
[ブラウザ] <-> [サーバ]
```

```pumld
@startuml
[ブラウザ] <-> [サーバ]
@enduml
```

## 抽象的な依存

```
[ブラウザ] ..> [サーバ]
```

```pumld
@startuml
[ブラウザ] ..> [サーバ]
@enduml
```

## ラベル

```
[ブラウザ] --> [サーバ] : HTTP通信
```

```pumld
@startuml
[ブラウザ] --> [サーバ] : HTTP通信
@enduml
```

## 太線

```
[ブラウザ] == [サーバ]
```

```pumld
@startuml
[ブラウザ] == [サーバ]
@enduml
```
