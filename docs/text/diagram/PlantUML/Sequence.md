---
slug: Sequence
title: シーケンス図
---

## サンプル

```
@startuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response
Alice -> Bob: Another Request
Alice <-- Bob: Another Response
@enduml
```

```pumld
@startuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response
Alice -> Bob: Another Request
Alice <-- Bob: Another Response
@enduml
```

## 全体の設定

### タイトル

```
title タイトル
```

```pumld
@startuml
title タイトル
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response
Alice -> Bob: Another Request
Alice <-- Bob: Another Response
@enduml
```

### 下部エリア非表示

```
hide footbox
```

```pumld
@startuml
hide footbox
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response
Alice -> Bob: Another Request
Alice <-- Bob: Another Response
@enduml
```

## 参加者

下記の様な参加者を指定できます。

### アクター

```
actor ユーザー
```

```pumld
@startuml
hide footbox
actor ユーザー
@enduml
```

### バウンダリ

```
boundary バウンダリ
```

```pumld
@startuml
hide footbox
boundary バウンダリ
@enduml
```

### コントロール

```
control コントロール
```

```pumld
@startuml
hide footbox
control コントロール
@enduml
```

### エンティティ

```
entity エンティティ
```

```pumld
@startuml
hide footbox
entity エンティティ
@enduml
```

### データベース

```
database データベース
```

```pumld
@startuml
hide footbox
database データベース
@enduml
```

### コレクション

```
collections コレクション
```

```pumld
@startuml
hide footbox
collections コレクション
@enduml
```

### 参加者

```
participant 参加者
```

```pumld
@startuml
hide footbox
participant 参加者
@enduml
```

## メッセージ

### 同期メッセージ

```
ユーザー -> コントロール : 同期メッセージ
```

```pumld
actor ユーザー
control コントロール
ユーザー -> コントロール : 同期メッセージ
@enduml
```

### 非同期メッセージ

```
ユーザー ->> コントロール : 非同期メッセージ
```

```pumld
actor ユーザー
control コントロール
ユーザー ->> コントロール : 非同期メッセージ
@enduml
```

### リプライメッセージ

```
ユーザー -->> コントロール : リプライメッセージ
```

```pumld
actor ユーザー
control コントロール
ユーザー -->> コントロール : リプライメッセージ
@enduml
```

### 自分自身へメッセージ

```
ユーザー -> ユーザー : 自分自身へメッセージ
```

```pumld
actor ユーザー
control コントロール
ユーザー -> ユーザー
@enduml
```

### 外部の要素へメッセージ

```
コントロール ->] : 外部へのメッセージ
```

```pumld
control コントロール
コントロール ->] : 外部へのメッセージ
@enduml
```

### 外部の要素からメッセージ

```
[-> コントロール : 外部からのメッセージ
```

```pumld
control コントロール
[-> コントロール : 外部からのメッセージ
@enduml
```

## 生成と破棄

### 生成

```
create コントロール
ユーザー -> 生成メッセージ
```

```pumld
actor ユーザー
control コントロール
create コントロール
ユーザー -> コントロール : 生成メッセージ
@enduml
```

### 破棄

```
ユーザー -> コントロール : 破棄メッセージ
destroy コントロール
```

```pumld
actor ユーザー
control コントロール
ユーザー -> コントロール : 破棄メッセージ
destroy コントロール
@enduml
```

## ノート

ノートを定義できます。

### 左側

```
note left
ノート
end note
```

```pumld
actor ユーザー
control コントロール
ユーザー -> コントロール : 同期メッセージ
note left
ノート
end note
@enduml
```

### 右側

```
note right
ノート
end note
```

```pumld
actor ユーザー
control コントロール
ユーザー -> コントロール : 同期メッセージ
note right
ノート
end note
@enduml
```

### 上側

:::warning
一応定義出来るものの無視されてるみたいだ。
:::

```
note top
ノート
end note
```

```pumld
actor ユーザー
control コントロール
ユーザー -> コントロール : 同期メッセージ
note top
ノート
end note
@enduml
```

### 下側

:::warning
一応定義出来るものの無視されてるみたいだ。
:::

```
note bottom
ノート
end note
```

```pumld
actor ユーザー
control コントロール
ユーザー -> コントロール : 同期メッセージ
note bottom
ノート
end note
@enduml
```

## アクティベーション

### 開始

```
activate コントロール
```

```pumld
actor ユーザー
control コントロール
ユーザー -> コントロール
activate コントロール
ユーザー -> コントロール
@enduml
```

### 終了

```
deactivate  コントロール
```

```pumld
actor ユーザー
control コントロール
ユーザー -> コントロール
activate コントロール
ユーザー -> コントロール
deactivate  コントロール
@enduml
```

## フラグメント

### 条件分岐

#### どれか一つを必須で実行するような場合

```
alt x > 0
    ユーザー -> コントロール : メッセージ１
else
    ユーザー -> コントロール : メッセージ２
end
```

```pumld
actor ユーザー
control コントロール
alt x > 0
    ユーザー -> コントロール : メッセージ１
else
    ユーザー -> コントロール : メッセージ２
end
@enduml
```

#### オプショナルなものの場合

```
opt x > 0
    ユーザー -> コントロール : メッセージ１
end
```

```pumld
actor ユーザー
control コントロール
opt x > 0
    ユーザー -> コントロール : メッセージ１
end
@enduml
```

### 繰り返し

#### 繰り返し数を指定する場合

```
loop 記事数
    ユーザー -> コントロール : メッセージ１
end
```

```pumld
actor ユーザー
control コントロール
loop 記事数
    ユーザー -> コントロール : メッセージ１
end
@enduml
```

#### 最小値、最大値を指定する場合

```
loop 1, 10
    ユーザー -> コントロール : メッセージ１
end
```

```pumld
actor ユーザー
control コントロール
loop 1, 10
    ユーザー -> コントロール : メッセージ１
end
@enduml
```

#### 無限ループの場合

```
loop
    ユーザー -> コントロール : メッセージ１
end
```

```pumld
actor ユーザー
control コントロール
loop
    ユーザー -> コントロール : メッセージ１
end
@enduml
```

### 処理中断

```
break 条件
    ユーザー -> コントロール : メッセージ１
end
```

```pumld
actor ユーザー
control コントロール
break 条件
    ユーザー -> コントロール : メッセージ１
end
@enduml
```

### 並列処理

```
par
    ユーザー -> コントロール : メッセージ１
end
```

```pumld
actor ユーザー
control コントロール
par
    ユーザー -> コントロール : メッセージ１
end
@enduml
```

### クリティカル

```
critical
    ユーザー -> コントロール : メッセージ１
end
```

```pumld
actor ユーザー
control コントロール
critical
    ユーザー -> コントロール : メッセージ１
end
@enduml
```

### シーケンス図の参照
```
ref over コントロール,エンティティ : 〇〇シーケンス図参照
```

```pumld
actor ユーザー
control コントロール
entity エンティティ
ユーザー -> コントロール
ref over コントロール,エンティティ : 〇〇シーケンス図参照
@enduml
```


### 遅延

```
...
```

```pumld
actor ユーザー
control コントロール
ユーザー -> コントロール : メッセージ１
...
ユーザー -> コントロール : メッセージ１
@enduml
```

```
... 10分 ...
```

```pumld
actor ユーザー
control コントロール
ユーザー -> コントロール : メッセージ１
... 10分 ...
ユーザー -> コントロール : メッセージ１
@enduml
```

### インターバル
:::warning
一応定義出来るものの機能してないみたいだ。
:::

```
|||
```

```pumld
actor ユーザー
control コントロール
ユーザー -> コントロール : メッセージ１
|||
ユーザー -> コントロール : メッセージ１
@enduml
```

:::warning
一応定義出来るものの機能してないみたいだ。
:::

```
||50||
```

```pumld
actor ユーザー
control コントロール
ユーザー -> コントロール : メッセージ１
||50||
ユーザー -> コントロール : メッセージ１
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
