---
slug: Deployment
title: 配備図
---

(Deployment Diagram)

## サンプル

```
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

FE --> BE : HTTPS
BE --> "MySQL" : JDBC
@enduml
```

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

## 全体の設定

### タイトル

タイトルを定義できます。

```
title 新基盤構築計画
```

```pumld
@startuml
title 新基盤構築計画
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

### ヘッダ

ヘッダを定義できます。

```
header 新基盤構築計画
```

```pumld
@startuml
header 新基盤構築計画
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

### フッタ

フッタを定義できます。

```
footer フッタ
```

```pumld
@startuml
footer フッタ
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

### キャプション

キャプションを定義できます。

```
caption キャプション
```

```pumld
@startuml
caption キャプション
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

#### すべて組み合わせると...

```pumld
@startuml
header 新基盤構築計画
title 新基盤構築計画
caption キャプション
footer フッタ
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

## ノード

物理的な計算資源（サーバー、PC、モバイル端末など）を表します。

```
node ノード名
```

```pumld
@startuml
node ノード名
@enduml
```

## アーティファクト

ノードに配備されるファイルやプログラムを表します。

```
artifact アーティファクト名
```

```pumld
@startuml
artifact アーティファクト名
@enduml
```

## 別名
`as`を用いて別名を定義する事が出来ます。

```
artifact アーティファクト名 as 別名
node ノード名 as 別名
```

## ノード間の通信・依存関係

`-->`を用いてノード間の通信・依存関係を表します。

```
FE --> BE
```

```pumld
@startuml
node "Web Server" {
    artifact "Frontend App" as FE
}
node "Application Server" {
    artifact "Backend App" as BE
}
FE --> BE : HTTPS
@enduml
```


