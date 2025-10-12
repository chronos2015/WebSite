---
slug: UseCase
title: ユースケース図
---

(Use Case Diagram)

## サンプル

```
@startuml
left to right direction
actor "顧客" as customer
rectangle "ECサイト" {
    usecase "商品を検索する" as search
    usecase "注文する" as order
    usecase "支払いをする" as pay
    usecase "レビューを書く" as review
}
customer --> search
customer --> order
customer --> pay
customer --> review
@enduml
```

```pumld
@startuml
left to right direction
actor "顧客" as customer
rectangle "ECサイト" {
    usecase "商品を検索する" as search
    usecase "注文する" as order
    usecase "支払いをする" as pay
    usecase "レビューを書く" as review
}
customer --> search
customer --> order
customer --> pay
customer --> review
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
actor "顧客" as customer
rectangle "ECサイト" {
    usecase "商品を検索する" as search
    usecase "注文する" as order
    usecase "支払いをする" as pay
    usecase "レビューを書く" as review
}
customer --> search
customer --> order
customer --> pay
customer --> review
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
actor "顧客" as customer
rectangle "ECサイト" {
    usecase "商品を検索する" as search
    usecase "注文する" as order
    usecase "支払いをする" as pay
    usecase "レビューを書く" as review
}
customer --> search
customer --> order
customer --> pay
customer --> review
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
actor "顧客" as customer
rectangle "ECサイト" {
    usecase "商品を検索する" as search
    usecase "注文する" as order
    usecase "支払いをする" as pay
    usecase "レビューを書く" as review
}
customer --> search
customer --> order
customer --> pay
customer --> review
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
actor "顧客" as customer
rectangle "ECサイト" {
    usecase "商品を検索する" as search
    usecase "注文する" as order
    usecase "支払いをする" as pay
    usecase "レビューを書く" as review
}
customer --> search
customer --> order
customer --> pay
customer --> review
@enduml
```

### レイアウト方向の指定

```
left to right direction
```

```pumld
@startuml
caption キャプション
left to right direction
actor "顧客" as customer
rectangle "ECサイト" {
    usecase "商品を検索する" as search
    usecase "注文する" as order
    usecase "支払いをする" as pay
    usecase "レビューを書く" as review
}
customer --> search
customer --> order
customer --> pay
customer --> review
@enduml
```

## アクター

```
:アクター:
```

```pumld
@startuml
:アクター:
@enduml
```

:::warning
actor "アクター"も使用できますが単独で記載した場合、シーケンス図のアクターが描画されてしまうようです。
:::

## ユースケース

```
(ユースケース)
```

```pumld
@startuml
(ユースケース)
@enduml
```

```
usecase ユースケース
```

```pumld
@startuml
usecase ユースケース
@enduml
```

## システム境界

```
rectangle システムＡ {
}
```

```pumld
@startuml
rectangle システムA {
}
@enduml
```

## 汎化

### アクター

```
アクターＡ --|> アクターＢ
```

```pumld
@startuml
left to right direction
:アクターＡ:
:アクターＢ:
アクターＡ --|> アクターＢ
@enduml
```

### ユースケース

```
(ユースケースＡ) --|> (ユースケースＢ)
```

```pumld
@startuml
left to right direction
(ユースケースＡ) --|> (ユースケースＢ)
@enduml
```

## 関係

```
:アクターＡ: -- (ユースケースＢ)
```

```pumld
@startuml
left to right direction
:アクターＡ: -- (ユースケースＢ)
@enduml
```

## 包含

```
(ユースケースＡ) .> (ユースケースＢ) : <<include>>
```

```pumld
@startuml
(ユースケースＡ) .> (ユースケースＢ) : <<include>>
@enduml
```

## 拡張

```
(ユースケースＡ) .> (ユースケースＢ) : <<extend>>
```

```pumld
@startuml
(ユースケースＡ) .> (ユースケースＢ) : <<extend>>
@enduml
```

## ラベル

```
(ユースケースＡ) -- (ユースケースＢ) : ラベル
```

```pumld
@startuml
(ユースケースＡ) -- (ユースケースＢ) : ラベル
@enduml
```

## ノート

### 左側

```
note left : ノート
```

```pumld
@startuml
:アクター:
note left : ノート
@enduml
```

### 右側

```
note right : ノート
```

```pumld
@startuml
:アクター:
note right : ノート
@enduml
```

### 上側

```
note top : ノート
```

```pumld
@startuml
:アクター:
note top : ノート
@enduml
```

### 下側

```
note bottom : ノート
```

```pumld
@startuml
:アクター:
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
:アクター:
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

(https://niyanmemo.com/4536/)[https://niyanmemo.com/4536/]

(https://note.com/kitabatakep/n/n76ede69427d4)[https://note.com/kitabatakep/n/n76ede69427d4]
