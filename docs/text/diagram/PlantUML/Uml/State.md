---
slug: State
title: 状態遷移図
---

(State Diagram)

## サンプル

```
@startuml
[*] --> Idle
Idle --> Active : start / do action()
Active --> Sleeping : sleep / finish action()
Sleeping --> Idle : wake up
@enduml
```

```pumld
@startuml
[*] --> Idle
Idle --> Active : start / do action()
Active --> Sleeping : sleep / finish action()
Sleeping --> Idle : wake up
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
[*] --> Idle
Idle --> Active : start / do action()
Active --> Sleeping : sleep / finish action()
Sleeping --> Idle : wake up
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
[*] --> Idle
Idle --> Active : start / do action()
Active --> Sleeping : sleep / finish action()
Sleeping --> Idle : wake up
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
[*] --> Idle
Idle --> Active : start / do action()
Active --> Sleeping : sleep / finish action()
Sleeping --> Idle : wake up
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
[*] --> Idle
Idle --> Active : start / do action()
Active --> Sleeping : sleep / finish action()
Sleeping --> Idle : wake up
@enduml
```

#### すべて組み合わせると...

```pumld
@startuml
header 新基盤構築計画
title 新基盤構築計画
caption キャプション
footer フッタ
[*] --> Idle
Idle --> Active : start / do action()
Active --> Sleeping : sleep / finish action()
Sleeping --> Idle : wake up
```

## 状態

状態を定義できます。

```
state "State1"
```

```pumld
state "State1"
```

## 遷移

状態間の遷移を定義できます。

```
Idle --> Active
```

```pumld
state "Idle"
state "Active"
Idle --> Active
```

## 開始点

開始点及び開始点からの遷移も定義できます。

```
[*] --> Idle
```

```pumld
[*] --> Idle
```

:::warning
開始点を単独で宣言した場合、コンポーネント図のコンポーネントとして描画されます。
:::

## ラベル

遷移の後に`:`を書きそれに続けてラベルを定義できます。<br />
開始点からの遷移でも同様の定義が可能です。

```
Idle --> Active : start / do action()
```

```pumld
state "Idle"
state "Active"
Idle --> Active : start / do action()
```

## 位置調整

### 上

```
State1 -u-> StateUp
```

```pumld
@startuml
state "State1"
state "StateUp"
State1 -u-> StateUp
@enduml
```

### 下

```
State1 -d-> StateDown
```

```pumld
@startuml
state "State1"
state "StateDown"
State1 -d-> StateDown
@enduml
```
### 左

```
State1 -l-> StateLeft
```

```pumld
@startuml
state "State1"
state "StateLeft"
State1 -l-> StateLeft
@enduml
```

### 右

```
State1 -r-> StateRight
```

```pumld
@startuml
state "State1"
state "StateRight"
State1 -r-> StateRight
@enduml
```

## ノート

### 左側

```
note left : ノート
```

```pumld
@startuml
state "Idle"
note left : ノート
@enduml
```

### 右側

```
note right : ノート
```

```pumld
@startuml
state "Idle"
note right : ノート
@enduml
```

### 上側

```
note top : ノート
```

```pumld
@startuml
state "Idle"
note top : ノート
@enduml
```

### 下側

```
note bottom : ノート
```

```pumld
@startuml
state "Idle"
note bottom : ノート
@enduml
```

### 複数行の場合

この機能は、ノートを右側に配置する場合、左側に配置する場合、上側に配置する場合、下側に配置する場合でも使用できます。<br />
尚、このサイトでは右側のみ紹介しています。

```
note right
状態の右側にノート１
状態の右側にノート２
end note
```

```pumld
@startuml
state "Idle"
note right
状態の右側にノート１
状態の右側にノート２
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

[https://www.wakuwakubank.com/posts/290-design-state/](https://www.wakuwakubank.com/posts/290-design-state/)
