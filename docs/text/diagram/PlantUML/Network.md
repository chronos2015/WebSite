---
slug: Network
title: ネットワーク図
---

(Network Diagram)

## サンプル

```
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
"Webサーバー" --> "DBサーバー"
@enduml
```

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
"Webサーバー" --> "DBサーバー"
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
"Webサーバー" --> "DBサーバー"
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
"Webサーバー" --> "DBサーバー"
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
"Webサーバー" --> "DBサーバー"
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
"Webサーバー" --> "DBサーバー"
@enduml
```

#### すべて組み合わせると...

```pumld
@startuml
header 新基盤構築計画
title 新基盤構築計画
caption キャプション
footer フッタ
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
"Webサーバー" --> "DBサーバー"
@enduml
```

## コンポーネント

`[]`で囲むか、`component`に続けてコンポーネント名を記載する事でコンポーネントを定義できます。

```
[コンポーネント名]
```

```pumld
@startuml
[コンポーネント名]
@enduml
```

```
component コンポーネント名
```

```pumld
@startuml
component コンポーネント名
@enduml
```

## ノード

物理的または論理的な実行環境を表します。

```
node ノード名
```

```pumld
@startuml
node ノード名
@enduml
```

## データストア

```
database データストア
```

```pumld
@startuml
database データストア
package Sample {
  component コンポーネント名
}
@enduml
```

## クラウド

```
cloud "クラウド"
```

```pumld
@startuml
cloud "クラウド"
@enduml
```

## 有線接続

```
[R1] -- [R2]
```

```pumld
@startuml
[R1] -- [R2]
@enduml
```

## 無線接続

```
[AP] ..> [Client]
```

```pumld
@startuml
[AP] ..> [Client]
@enduml
```

## プロトコル

```
[WS] --> [AS] : TCP/8080
```

```pumld
@startuml
[WS] --> [AS] : TCP/8080
@enduml
```

## 帯域幅

```
[R3] -> [R4] : 10 Gbps
```

```pumld
@startuml
[R3] -> [R4] : 10 Gbps
@enduml
```
