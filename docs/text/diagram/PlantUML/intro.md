---
id: PlantUML
title: PlantUMLで描ける図表の種類とサンプル
---

PlantUMLでは、テキスト形式でさまざまな種類のUML図や、UML以外のダイアグラムを描くことができます。<br />
以下に主要な図表の種類と、それぞれの簡単なサンプルコードを一覧でご紹介します。

---

## アクティビティ図 (Activity Diagram)

処理の流れやワークフローを表現する図です。フローチャートに近い感覚で使えます。

```pumld
@startuml
start
:Webサイトへアクセス;
if (ログイン済みか？) then (yes)
    :商品ページへ移動;
else (no)
    :ログインページへ;
    :ログイン;
endif
:商品をカートに入れる;
stop
@enduml
```

[詳細](/docs/text/diagram/PlantUML/Activity)

-----

## クラス図 (Class Diagram)

クラス、インターフェース、属性、操作、そしてそれらの関係を静的に表現する図です。

```pumld
@startuml
class A
class B
class C

A --|> B : extends
A --> C : associates
@enduml
```

[詳細](/docs/text/diagram/PlantUML/Class)

-----

## コンポーネント図 (Component Diagram)

システムのコンポーネントとその依存関係を表現する図です。

```pumld
@startuml
[データベース] as DB
[バックエンド] as BE
[フロントエンド] as FE

FE --> BE : HTTPリクエスト
BE --> DB : SQLクエリ
@enduml
```

[詳細](/docs/text/diagram/PlantUML/Component)

-----
 
## ER図 (Entity-Relationship Diagram)

データベースのエンティティ（実体）と、それらの間の関係を表現する図です。

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

[詳細](/docs/text/diagram/PlantUML/Entity)

-----

## ガントチャート (Gantt Chart)

プロジェクトのスケジュール管理などに用いられる、タスクの期間と依存関係を視覚的に表現する図です。

```pumld
@startgantt
[タスク1] lasts 10 days
[タスク2] lasts 5 days
[タスク3] lasts 3 days

[タスク2] starts at [タスク1]'s end
[タスク3] starts at [タスク2]'s end
@endgantt
```

[詳細](/docs/text/diagram/PlantUML/Gantt)

-----

## マインドマップ (MindMap)

アイデアを整理したり、思考を視覚化したりするのに役立つ図です。

```pumld
@startmindmap
* ルートノード
** 子ノード1
*** さらに下のノード
** 子ノード2
*** 別のノード
@endmindmap
```

[詳細](/docs/text/diagram/PlantUML/MindMap)

-----

## シーケンス図 (Sequence Diagram)

オブジェクト間のメッセージのやり取りを時系列で表現する図です。

```pumld
@startuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response
Alice -> Bob: Another Request
Alice <-- Bob: Another Response
@enduml
```

[詳細](/docs/text/diagram/PlantUML/Sequence)

## ユースケース図 (Use Case Diagram)

システムの機能を**ユースケース**として表現し、それに関わる**アクター**（利用者や外部システム）との関係を示す図です。

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

[詳細](/docs/text/diagram/PlantUML/UseCase)

-----

## 状態遷移図 (State Diagram)

オブジェクトが時間経過やイベントに応じて状態を変化させる様子を表現する図です。システムの挙動を詳細に分析する際に役立ちます。

**説明:**

  - `state "状態名"` で状態を定義します。
  - `-->` で状態間の遷移を表現します。
  - 遷移の矢印の横に `イベント名 / 処理内容` の形式で、どのようなイベントで遷移が起こり、その際に何が行われるかを記述できます。

**サンプルコード:**

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

-----

## オブジェクト図 (Object Diagram)

特定の時点でのシステム内のオブジェクトとその関係を表現する図です。クラス図とは異なり、具体的なインスタンスと値を記述します。

**説明:**

  - `object "オブジェクト名"` または `オブジェクト名 : クラス名` でオブジェクトを定義します。
  - オブジェクト内の属性と値を記述します。
  - オブジェクト間のリンクを `-->` や `--` で表現します。

**サンプルコード:**

```
@startuml
object "myCar" as car
car : brand = "Toyota"
car : model = "Prius"
car : color = "Red"
car : owner = "John"

object "myHouse" as house
house : address = "123 Main St"
house : owner = "John"

car -- house : is owned by
@enduml
```

```pumld
@startuml
object "myCar" as car
car : brand = "Toyota"
car : model = "Prius"
car : color = "Red"
car : owner = "John"

object "myHouse" as house
house : address = "123 Main St"
house : owner = "John"

car -- house : is owned by
@enduml
```

-----

## 配備図 (Deployment Diagram)

システムのハードウェアとソフトウェアの物理的な配置（デプロイメント）を表現する図です。サーバー、ネットワーク、データベースなどの関係を示します。

**説明:**

  - `node "ノード名"` で物理的なノード（サーバーなど）を定義します。
  - `component "コンポーネント名"` でソフトウェアのコンポーネントを定義します。
  - `database "データベース名"` でデータベースを定義します。
  - ノードやコンポーネントの間に `-->` で通信や依存関係を表現します。

**サンプルコード:**

```
@startuml
node "Web Server" {
    component "Frontend App" as FE
}
node "Application Server" {
    component "Backend App" as BE
}
database "Database Server" {
    database "MySQL"
}

FE --> BE : HTTPS
BE --> "MySQL" : JDBC
@enduml
```

```pumld
@startuml
node "Web Server" {
    component "Frontend App" as FE
}
node "Application Server" {
    component "Backend App" as BE
}
database "Database Server" {
    database "MySQL"
}

FE --> BE : HTTPS
BE --> "MySQL" : JDBC
@enduml
```

-----

## ワイヤーフレーム (Wireframe)

Webページやアプリケーションの画面レイアウトを簡易的に表現する図です。UIの骨組みや配置を素早く共有するのに適しています。

**説明:**

  - `box "画面名"` で画面全体を囲むことができます。
  - `[要素名]` や `()要素名()` でボタンや入力フィールドなどの要素を表現します。
  - `header` や `footer`、`sidebar` などのキーワードを使ってレイアウトを定義できます。

**サンプルコード:**

```
@startwbs
* ログイン画面
** ヘッダー
** フォーム
*** 入力欄（メールアドレス）
*** 入力欄（パスワード）
*** [ログインボタン]
** フッター
@endwbs
```

```pumld
@startwbs
* ログイン画面
** ヘッダー
** フォーム
*** 入力欄（メールアドレス）
*** 入力欄（パスワード）
*** [ログインボタン]
** フッター
@endwbs
```

## タイミング図 (Timing Diagram)

時間軸に沿ったイベントの発生タイミングを表現する図です。

**サンプルコード:**


```
@startuml
Title タイミングチャート例
robust "スイッチ" as Switch
robust "ランプ" as Lamp
robust "モーター" as Motor
Switch is OFF
Lamp is OFF
Motor is STOPPED

@0
Switch -> Lamp : ON信号
Lamp is ON

@10
Lamp -> Motor : START信号
Motor is RUNNING

@20
Motor -> Lamp : STOP信号
Lamp is OFF
@enduml
```

```pumld
@startuml
Title タイミングチャート例
robust "スイッチ" as Switch
robust "ランプ" as Lamp
robust "モーター" as Motor
Switch is OFF
Lamp is OFF
Motor is STOPPED

@0
Switch -> Lamp : ON信号
Lamp is ON

@10
Lamp -> Motor : START信号
Motor is RUNNING

@20
Motor -> Lamp : STOP信号
Lamp is OFF
@enduml
```

これら以外にも、PlantUMLは様々な図表をサポートしています。PlantUMLの公式ドキュメントで、より詳細な情報や豊富なサンプルを確認できます。
