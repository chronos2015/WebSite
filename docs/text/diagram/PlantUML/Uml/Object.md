---
slug: Object
title: オブジェクト図
---

(Object Diagram)

## サンプル

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

## 全体の設定

### タイトル

タイトルを定義できます。

```
title 新基盤構築計画
```

```pumld
@startuml
title 新基盤構築計画
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

### ヘッダ

ヘッダを定義できます。

```
header 新基盤構築計画
```

```pumld
@startuml
header 新基盤構築計画
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

### フッタ

フッタを定義できます。

```
footer フッタ
```

```pumld
@startuml
footer フッタ
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

### キャプション

キャプションを定義できます。

```
caption キャプション
```

```pumld
@startuml
caption キャプション
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

#### すべて組み合わせると...

```pumld
@startuml
header 新基盤構築計画
title 新基盤構築計画
caption キャプション
footer フッタ
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

## オブジェクト

オブジェクトを定義できます。

```
object myCar
```

```pumld
@startuml
object myCar
@enduml
```

### オブジェクトのクラス

`:`の後に続けて記載する事でオブジェクトのクラスを指定できます。

```
object "myCar: Car"
```

```pumld
@startuml
object "myCar: Car"
@enduml
```

### オブジェクトの別名

`as`の後に続けて記載する事でオブジェクトの別名を指定できます。<br />
別目は、後でオブジェクトの関係などを定義する際などに使用できます。<br />
見た目上の変化はありません。

```
object "myCar" as car
```

## オブジェクトのメンバ

オブジェクトのメンバを定義できます。

```
car : brand = "Toyota"
```

```pumld
@startuml
object "myCar" as car
car : brand = "Toyota"
@enduml
```

## 関連線

関連線を定義できます。

```
car -- house
```

```pumld
@startuml
object "myCar" as car
object "myHouse" as house
car -- house
@enduml
```

## 位置調整

### 上

```
object1 -u- objectUp
```

```pumld
@startuml
object "object1"
object "objectUp"
object1 -u- objectUp
@enduml
```

### 下

```
object1 -d- objectDown
```

```pumld
object "object1"
object "objectDown"
object1 -d- objectDown
@enduml
```
### 左

```
object1 -l- objectLeft
```

```pumld
@startuml
object "object1"
object "objectLeft"
object1 -l- objectLeft
@enduml
```

### 右

```
object1 -r- objectRight
```

```pumld
@startuml
object "object1"
object "objectRight"
object1 -r- objectRight
@enduml
```
