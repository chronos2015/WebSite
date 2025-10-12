---
slug: Entity
title: ER図
---

(Entity-Relationship Diagram)

## サンプル

```
@startuml
entity customer
entity order
entity product
entity order_item
customer ||--o{ order : places
order ||--o{ order_item : contains
product ||--o{ order_item : lists
@enduml
```

```pumld
@startuml
entity customer
entity order
entity product
entity order_item
customer ||--o{ order : places
order ||--o{ order_item : contains
product ||--o{ order_item : lists
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
entity customer
entity order
entity product
entity order_item
customer ||--o{ order : places
order ||--o{ order_item : contains
product ||--o{ order_item : lists
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
entity customer
entity order
entity product
entity order_item
customer ||--o{ order : places
order ||--o{ order_item : contains
product ||--o{ order_item : lists
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
entity customer
entity order
entity product
entity order_item
customer ||--o{ order : places
order ||--o{ order_item : contains
product ||--o{ order_item : lists
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
entity customer
entity order
entity product
entity order_item
customer ||--o{ order : places
order ||--o{ order_item : contains
product ||--o{ order_item : lists
@enduml
```

## エンティティ

エンティティを定義できます。

```
entity customer {}
```

```pumld
@startuml
entity customer {}
@enduml
```


## カラム

entity要素の中にカラムを定義できます。

```
entity customer {
    column1
}
```

```pumld
@startuml
entity customer {
    column1
}
@enduml
```

### プライマリキー

```
+ column1 [PK]
```

```pumld
@startuml
entity customer {
    + column1
}
@enduml
```

### フォーリンキー

```
# column2
```

```pumld
@startuml
entity customer {
    + column1
    __
    # column2
}
@enduml
```

### ユニークインデックス

```
* column2
```

```pumld
@startuml
entity customer {
    + column1
    __
    * column2
}
@enduml
```

### その他

それ以外に下記の記号を使用する事も可能です。

```
- column2
~ column3
```

```pumld
@startuml
entity customer {
    + column1
    __
    - column2
    ~ column3
}
@enduml
```

## リレーション

### 1 -- (0.1)

```
entity1 ||--o| entity2
```

```pumld
@startuml
entity entity1 {}
entity entity2 {}
entity1 ||--o| entity2
@enduml
```

### 1 - 1

```
entity1 ||--|| entity2
```

```pumld
@startuml
entity entity1 {}
entity entity2 {}
entity1 ||--|| entity2
@enduml
```

### 1 -- (0.n)

```
entity1 ||--o{ entity2
```

```pumld
@startuml
entity entity1 {}
entity entity2 {}
entity1 ||--o{ entity2
@enduml
```

### 1 -- (1.n)

```
entity1 ||--|{ entity2
```

```pumld
@startuml
entity entity1 {}
entity entity2 {}
entity1 ||--|{ entity2
@enduml
```

### (0.1) -- 1

```
entity1 |o--|| entity2
```

```pumld
@startuml
entity entity1 {}
entity entity2 {}
entity1 |o--|| entity2
@enduml
```

### (0.n) -- 1

```
entity1 }o--|| entity2
```

```pumld
@startuml
entity entity1 {}
entity entity2 {}
entity1 |o--|| entity2
@enduml
```

### (1.n) -- 1

```
entity1 }|--|| entity2
```

```pumld
@startuml
entity entity1 {}
entity entity2 {}
entity1 }|--|| entity2
@enduml
```

## 位置調整

### 上

```
entity1 ||-u-|| entityUp
```

```pumld
@startuml
entity entity1 {}
entity entityUp {}
entity1 ||-u-|| entityUp
@enduml
```

### 下

```
entity1 ||-d-|| entityDown
```

```pumld
@startuml
entity entity1 {}
entity entityDown {}
entity1 ||-d-|| entityDown
@enduml
```
### 左

```
entity1 ||-l-|| entityLeft
```

```pumld
@startuml
entity entity1 {}
entity entityLeft {}
entity1 ||-l-|| entityLeft
@enduml
```

### 右

```
entity1 ||-r-|| entityRight
```

```pumld
@startuml
entity entity1 {}
entity entityRight {}
entity1 ||-r-|| entityRight
@enduml
```

## 罫線

カラムの間を罫線で区切る事ができます。

### 実線

```
--
```

```pumld
@startuml
entity customer {
    id
    --
    text
}
@enduml
```

```
__
```

```pumld
@startuml
entity customer {
    id
    __
    text
}
@enduml
```

### 点線

```
..
```

```pumld
@startuml
entity customer {
    id
    ..
    text
}
@enduml
```

## ノート

### 左側

```
note left : ノート
```

```pumld
@startuml
entity customer {
    id
    __
    text
}
note left : ノート
@enduml
```

### 右側

```
note right : ノート
```

```pumld
@startuml
entity customer {
    id
    __
    text
}
note right : ノート
@enduml
```

### 上側

```
note top : ノート
```

```pumld
@startuml
entity customer {
    id
    __
    text
}
note top : ノート
@enduml
```

### 下側

```
note bottom : ノート
```

```pumld
@startuml
entity customer {
    id
    __
    text
}
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
entity customer {
    id
    __
    text
}
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

(https://www.wakuwakubank.com/posts/805-design-uml-er/)[https://www.wakuwakubank.com/posts/805-design-uml-er/]

(https://qiita.com/2ndponpu/items/23210cd080d358780d79)[https://qiita.com/2ndponpu/items/23210cd080d358780d79]
