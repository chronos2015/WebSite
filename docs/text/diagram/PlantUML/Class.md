---
slug: Class
title: クラス図
---

(Class Diagram)

## サンプル

```
@startuml
class A
class B
class C

A --|> B : extends
A --> C : associates
@enduml
```

```pumld
@startuml
class A
class B
class C

A --|> B : extends
A --> C : associates
@enduml
```

## クラス

クラスを定義できます。

```
class Sample
```

```pumld
@startuml
class Sample
@enduml
```

## インターフェイス

```
interface Sample
```

```pumld
@startuml
interface Sample
@enduml
```

## 抽象クラス

```
abstract class Sample
```

```pumld
@startuml
abstract class Sample
@enduml
```

## パッケージ
```
package Sample
```

```pumld
@startuml
package Sample
@enduml
```

### パッケージの中にクラス、インターフェース、抽象クラスを定義
```
package Sample {
    class ClassA
    interface InterfacA
    abstract class ClassB
}
```

```pumld
@startuml
package Sample {
    class ClassA
    interface InterfacA
    abstract class ClassB
}
@enduml
```

## フィールド
```
fieldA : int
```

```pumld
@startuml
class Sample {
    fieldA : int
}
@enduml
```

## メソッド

```
methodA() : void
```

```pumld
@startuml
class Sample {
    methodA() : void
}
@enduml
```

## 可視性

これはjavaの可視性を強く感じる要素かもしれません...。

### private

```
-fieldA : int
-methodA() : void
```

```pumld
@startuml
class Sample {
    -fieldA : int
    -methodA() : void
}
@enduml
```

### protected

```
#fieldA : int
#methodA() : void
```

```pumld
@startuml
class Sample {
    #fieldA : int
    #methodA() : void
}
@enduml
```

### package private

```
~fieldA : int
~methodA() : void
```

```pumld
@startuml
class Sample {
    ~fieldA : int
    ~methodA() : void
}
@enduml
```

### public

```
+fieldA : int
+methodA() : void
```

```pumld
@startuml
class Sample {
    +fieldA : int
    +methodA() : void
}
@enduml
```

## static

```
{static} fieldA : int
{static} methodA() : void
```

```pumld
@startuml
class Sample {
    {static} fieldA : int
    {static} methodA() : void
}
@enduml
```

## abstract

```
{abstract} methodA() : void
```

```pumld
@startuml
class Sample {
    {abstract} methodA() : void
}
@enduml
```

## ステレオタイプ

```
class Sample <<ステレオタイプ>>
```

```pumld
@startuml
class Sample <<ステレオタイプ>>
@enduml
```

## クラス間などの関係

### 継承

```
ClassA <|-- ClassB
```

```pumld
@startuml
class ClassA
class ClassB
ClassA <|-- ClassB
@enduml
```

### 実装

```
InterfaceA <.. ClassA
```

```pumld
@startuml
interface InterfaceA
class ClassA
InterfaceA <.. ClassA
@enduml
```

### 内部クラス

```
ClassA +-- ClassB
```

```pumld
@startuml
class ClassA
class ClassB
ClassA +-- ClassB
@enduml
```

### 依存

```
ClassA <|-- ClassB
```

```pumld
@startuml
class ClassA
class ClassB
ClassA <|-- ClassB
@enduml
```

### 集約

子が親から独立して存在できる関係を表しそうですが…。<br />
あまり使わない要素かもしれませんｗ

```
ClassA *-- ClassB
```

```pumld
@startuml
class ClassA
class ClassB
ClassA *-- ClassB
@enduml
```

### 構成

子が親から独立して存在できない関係を表すそうですが…。<br />
あまり使わない要素かもしれませんｗ

```
ClassA o-- ClassB
```

```pumld
@startuml
class ClassA
class ClassB
ClassA o-- ClassB
@enduml
```

### リンク(実線)

```
ClassA -- ClassB
```

```pumld
@startuml
class ClassA
class ClassB
ClassA -- ClassB 
@enduml
```

### リンク(点線)

```
ClassA .. ClassB
```

```pumld
@startuml
class ClassA
class ClassB
ClassA .. ClassB
@enduml
```

### ラベル

ラベルはリンク（実践）以外でも定義できますが、ここでは代表としてリンクにラベルを付ける形で記載しています。

```
ClassA -- ClassB : ラベル
```

```pumld
@startuml
class ClassA
class ClassB
ClassA -- ClassB : ラベル
@enduml
```

#### ラベルに矢印の追加

```
ClassA -- ClassB : ラベル >
```

```pumld
@startuml
class ClassA
class ClassB
ClassA -- ClassB : ラベル >
@enduml
```

```
ClassA -- ClassB : ラベル <
```

```pumld
@startuml
class ClassA
class ClassB
ClassA -- ClassB : ラベル <
@enduml
```

### 多重度

多重度はリンク（実践）以外でも定義できますが、ここでは代表としてリンクにラベルを付ける形で記載しています。

```
ClassA "1..*" -- "*" ClassB
```

```pumld
@startuml
class ClassA
class ClassB
ClassA "1..*" -- "*" ClassB
@enduml
```

## ノート

ノートを定義できます。

### 左側
```
note left of ClassA : クラスの左側に注釈
```

```pumld
@startuml
class ClassA
note left of ClassA : クラスの左側に注釈
@enduml
```

### 右側

```
note right of ClassA : クラスの右側に注釈
```

```pumld
@startuml
class ClassA
note right of ClassA : クラスの右側に注釈
@enduml
```

### 複数行の場合

この機能は、ノートを右側に配置する場合、左側に配置する場合でも使用できます。<br />
尚、このサイトでは右側のみ紹介しています。

```
note right of ClassA
クラスの右側に注釈１
クラスの右側に注釈２
end note
```

```pumld
@startuml
class ClassA
note right of ClassA
クラスの右側に注釈１
クラスの右側に注釈２
end note
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
class A
class B
class C

A --|> B : extends
A --> C : associates
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
class A
class B
class C

A --|> B : extends
A --> C : associates
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
class A
class B
class C

A --|> B : extends
A --> C : associates
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
class A
class B
class C

A --|> B : extends
A --> C : associates
@enduml
```

### 空のフィールド／メソッドを省略

```
hide empty members
```

```pumld
@startuml
hide empty members
class A {
    fieldA : int
}
class B {
    methodA() : void
}
class C

A --|> B : extends
A --> C : associates
@enduml
```

### 可視性の記号化をしない

```
skinparam classAttributeIconSize 0
```

```pumld
@startuml
skinparam classAttributeIconSize 0
class Sample {
    -fieldA : int
    #fieldB : int
    ~fieldC : int
    +fieldD : int
    -methodA() : void
    #methodB() : void
    ~methodC() : void
    +methodD() : void
}
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

[https://qiita.com/kyonc5/items/4d536cb59fd7c41debc1](https://qiita.com/kyonc5/items/4d536cb59fd7c41debc1)

[https://niyanmemo.com/4576/#toc18](https://niyanmemo.com/4576/#toc18)

[https://help.docbase.io/posts/3720083](https://help.docbase.io/posts/3720083)
