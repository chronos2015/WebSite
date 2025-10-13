---
id: PlantUML
title: PlantUMLで描ける図表の種類とサンプル
---

PlantUMLでは、テキスト形式でさまざまな種類のUML図や、UML以外のダイアグラムを描くことができます。

## ＵＭＬ

UMLに定義されている図表を纏めています。

### アクティビティ図 (Activity Diagram)

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

[詳細](/docs/text/diagram/PlantUML/Uml/Activity)

---

### クラス図 (Class Diagram)

クラス、インターフェース、属性、操作、そしてそれらの関係を静的に表現する図です。

```pumld
@startuml
class A
class B
class C
A -r-> B : extends
A -l-> C : associates
@enduml
```

[詳細](/docs/text/diagram/PlantUML/Uml/Class)

---

### コンポーネント図 (Component Diagram)

システムのコンポーネントとその依存関係を表現する図です。

```pumld
@startuml
[データベース] as DB
[バックエンド] as BE
[フロントエンド] as FE
FE -l-> BE : HTTPリクエスト
BE -l-> DB : SQLクエリ
@enduml
```

[詳細](/docs/text/diagram/PlantUML/Uml/Component)

---

### 配備図 (Deployment Diagram)

システムのハードウェアとソフトウェアの物理的な配置（デプロイメント）を表現する図です。サーバー、ネットワーク、データベースなどの関係を示します。

```pumld
@startuml
node "Web Server" {
    artifact "Frontend App" as FE
}
node "Application Server" {
    artifact "Backend App" as BE
}
database "Database Server" {
    database "MySQL"
}

FE -r-> BE : HTTPS
BE -r-> "MySQL" : JDBC
@enduml
```

[詳細](/docs/text/diagram/PlantUML/Uml/Deployment)

---

### オブジェクト図 (Object Diagram)

特定の時点でのシステム内のオブジェクトとその関係を表現する図です。クラス図とは異なり、具体的なインスタンスと値を記述します。

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

car -r- house : is owned by
@enduml
```

[詳細](/docs/text/diagram/PlantUML/Uml/Object)

---

### シーケンス図 (Sequence Diagram)

オブジェクト間のメッセージのやり取りを時系列で表現する図です。

```pumld
@startuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response
Alice -> Bob: Another Request
Alice <-- Bob: Another Response
@enduml
```

[詳細](/docs/text/diagram/PlantUML/Uml/Sequence)

---

### 状態遷移図 (State Diagram)

オブジェクトが時間経過やイベントに応じて状態を変化させる様子を表現する図です。システムの挙動を詳細に分析する際に役立ちます。

```pumld
@startuml
[*] -r-> Idle
Idle -r-> Active : start / do action()
Active --> Sleeping : sleep / finish action()
Sleeping --> Idle : wake up
@enduml
```

[詳細](/docs/text/diagram/PlantUML/Uml/State)

---

### ユースケース図 (Use Case Diagram)

システムの機能を**ユースケース**として表現し、それに関わる**アクター**（利用者や外部システム）との関係を示す図です。

```pumld
@startuml
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

[詳細](/docs/text/diagram/PlantUML/Uml/UseCase)

---

## アーキテクチャ図  (Architecture Diagram)

アーキテクチャー図とは、システム全体の構成要素とその関係性を一目で把握できる設計図です。

```pumld
@startuml
package "ユーザー側" {
  [Webブラウザ]
}
database データベース
cloud 外部API
package "サーバー側" {
  [Webブラウザ] -r-> [Webサーバー]
  [Webサーバー] -r-> [アプリケーションサーバー]
  [アプリケーションサーバー] --> データベース
  [アプリケーションサーバー] --> 外部API
}
@enduml
```

[詳細](/docs/text/diagram/PlantUML/Architecture)

---

## 作業分解図(Work Breakdown Structure)

作業分解図は、プロジェクトの作業を階層的に表現するための図です。

```pumld
@startwbs
* 新ウェブサイト開発プロジェクト
** 計画フェーズ
*** 要件定義
** 設計フェーズ
*** UI/UX設計
*** システム設計
** 開発フェーズ
*** フロントエンド開発
*** バックエンド開発
** テストとデプロイフェーズ
*** システムテスト
*** 本番環境へのデプロイ
@endwbs
```

[詳細](/docs/text/diagram/PlantUML/Breakdown)

---

## ER図 (Entity-Relationship Diagram)

データベースのエンティティ（実体）と、それらの間の関係を表現する図です。

```pumld
@startuml
entity customer
entity order
entity product
entity order_item
customer ||-r-o{ order : places
order ||-r-o{ order_item : contains
product ||-l-o{ order_item : lists
@enduml
```

[詳細](/docs/text/diagram/PlantUML/Entity)

---

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

---

## Json

Jsonは最近よく使われるデータフォーマットの一種でplantUMLを用いて可視化する事が可能です。

```pumld
@startjson
{"name":"John Doe","age": 30,"address":{"street": "123 Main St","city": "Anytown"},"hobbies": ["reading", "traveling", "swimming"]}
@endjson
```

[詳細](/docs/text/diagram/PlantUML/Json)

---

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

---

## ネットワーク図  (Network Diagram)

ネットワーク図とは、機器やシステム間の接続関係を視覚的に示す図です。通信経路や構成要素の配置を一目で把握できます。

```pumld
@startuml
cloud "インターネット" {
[外部ユーザー]
}

node "ファイアウォール" {
node "ルーター" {
node "Webサーバー"
node "DBサーバー"
}
}

[外部ユーザー] --> "ファイアウォール"
"ファイアウォール" --> "ルーター"
"ルーター" --> "Webサーバー"
"Webサーバー" -r-> "DBサーバー"

@enduml
```

[詳細](/docs/text/diagram/PlantUML/Network)

---

## タイミング図 (Timing Diagram)

時間軸に沿ったイベントの発生タイミングを表現する図です。

```pumld
@startuml
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

[詳細](/docs/text/diagram/PlantUML/Timing)

---

## ワイヤーフレーム (Wireframe)

Webページやアプリケーションの画面レイアウトを簡易的に表現する図です。UIの骨組みや配置を素早く共有するのに適しています。

```pumld
@startsalt
{+ **ログイン**
  .
  ユーザー名 | "ユーザ名を入力 "
  パスワード | "****      "
  .
  [ ログイン ] | [ キャンセル ]
  .
  <color:blue><u>パスワードを忘れた場合</u></color> | *
  .
}
@endsalt
```

[詳細](/docs/text/diagram/PlantUML/Wireframe)

---

## Yaml

Yamlは最近よく使われるデータフォーマットの一種でplantUMLを用いて可視化する事が可能です。

```pumld
@startyaml
name: John Doe
age: 30
address:
 street: 123 Main St
 city: Springfield
 zip: 12345
@endyaml
```

[詳細](/docs/text/diagram/PlantUML/Yaml)

## ディターア図 (Diagrams that are Assembled Ascii Art)

非常にシンプルで覚えやすい記法で、ボックス、線、矢印、色などを表現できます。

```pumld
@startditaa
+----------+ +----------+ +----------+ *----------* /----------\ +-----+
| Docuemnt | | Database | | I/O      | |          | |          | |     |
| {d}      | | {s}      | | {io}     | |          | |          | ++    |
+----------+ +----------+ +----------+ *----------* \----------/ ++----+
@endditaa
```
![サンプル](https://www.plantuml.com/plantuml/png/SoWkIImgISaiIKpaqjQ50sq5t1mj14TBGH_1YO4gq-QgKN39JovDpSqhKQW1GfV4aiIanE9KCCTJtry11C0S8C33gG4QL9rIYn2iBaRcPERN4ZH8MnjCa-Mr60H77sWGn6iEgNafuD020000)

[詳細](/docs/text/diagram/PlantUML/Diagrams)
