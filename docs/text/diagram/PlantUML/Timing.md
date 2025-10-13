---
slug: Timing
title: タイミング図
---

(Timing Diagram)

## サンプル

```
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

## 全体の設定

### タイトル

```
title タイトル
```

```pumld
@startuml
title タイトル
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

### ヘッダ

ヘッダを定義できます。

```
header 新基盤構築計画
```

```pumld
@startuml
header 新基盤構築計画
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

### フッタ

フッタを定義できます。

```
footer フッタ
```

```pumld
@startuml
footer フッタ
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

### キャプション

キャプションを定義できます。

```
caption キャプション
```

```pumld
@startuml
caption キャプション
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

#### すべて組み合わせると...

```pumld
title タイトル
header 新基盤構築計画
footer フッタ
caption キャプション
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

## オブジェクト

`robust オブジェクト名`の書式で書くことでオブジェクトを定義できます。

```
robust オブジェクト名
```

```pumld
@startuml
robust オブジェクト名
@0
@10
@20
@enduml
```

## 時間

`@時間`で状態が変化するタイミングを定義できます。
なお、時間の箇所には数値のみ定義できるようです。

```
@0
@10
@20
```

```pumld
@startuml
robust オブジェクト名
@0
@10
@20
@enduml
```

## 状態

`@時間`の後に`オブジェクト名 is 状態名`という記載を加えることで、オブジェクトの状態を定義できます。

```
@0
オブジェクト名 is ON
```
```pumld
@startuml
robust オブジェクト名
オブジェクト名 is OFF
@0
オブジェクト名 is ON
@10
オブジェクト名 is OFF
@enduml
```

## トリガー

同様に`@時間`の後に`オブジェクト１ -> オブジェクト２`という記載を加えることで、トリガーの定義ができます。

```
@20
オブジェクト１ -> オブジェクト２
```
```pumld
@startuml
robust オブジェクト１
robust オブジェクト２
@0
@10
オブジェクト１ is OFF
オブジェクト２ is OFF
@20
オブジェクト１ is ON
オブジェクト１ -> オブジェクト２
@30
オブジェクト２ is ON
@30
@enduml
```

### ラベル

トリガーの後に`: ラベル`を記載する事でラベルを定義できます。

```
@20
オブジェクト１ -> オブジェクト２ : ラベル
```
```pumld
@startuml
robust オブジェクト１
robust オブジェクト２
@0
@10
オブジェクト１ is OFF
オブジェクト２ is OFF
@20
オブジェクト１ is ON
オブジェクト１ -> オブジェクト２ : ラベル
@30
オブジェクト２ is ON
@30
@enduml
```
