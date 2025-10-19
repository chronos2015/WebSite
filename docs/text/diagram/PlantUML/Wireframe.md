---
slug: Wireframe
title: ワイヤーフレーム
---

(Wireframe)

## サンプル

```
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

## 全体の設定

### タイトル

タイトルを定義できます。

```
title 新基盤構築計画
```

```pumld
@startsalt
title 新基盤構築計画
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

### ヘッダ

ヘッダを定義できます。

```
header 新基盤構築計画
```

```pumld
@startsalt
header 新基盤構築計画
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

### フッタ

フッタを定義できます。

```
footer フッタ
```

```pumld
@startsalt
footer フッタ
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

### キャプション

キャプションを定義できます。

```
caption キャプション
```

```pumld
@startsalt
caption キャプション
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

#### すべて組み合わせると...

```pumld
@startsalt
header 新基盤構築計画
title 新基盤構築計画
caption キャプション
footer フッタ
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

## ボタン

```
[ボタン]
```

```pumld
@startsalt
{
  [ボタン]
}
@endsalt
```

## ラベル

```
ラベル:
```

```pumld
@startsalt
{
ラベル:
}
@endsalt
```

## テキストボックス

```
"テキスト"
```

```pumld
@startsalt
{
  "テキスト"
}
@endsalt
```

## ラジオボタン

### チェックなし

```
() ラジオボタン
```

```pumld
@startsalt
{
  () ラジオボタン
}
@endsalt
```

### チェックあり

```
(X) ラジオボタン
```

```pumld
@startsalt
{
  (X) ラジオボタン
}
@endsalt
```

## チェックボックス

### チェックなし

```
[] チェックボックス
```

```pumld
@startsalt
{
  [] チェックボックス
}
@endsalt
```

### チェックあり

```
[X] チェックボックス
```

```pumld
@startsalt
{
  [X] チェックボックス
}
@endsalt
```

## ドロップダウン

### 閉じた状態

```
  ^閉じた状態^ |
```

```pumld
@startsalt
{
  ^閉じた状態^ |
}
@endsalt
```

### 開いた状態

```
  ^開いた状態　　　　　^^ item 1^^ item 2^ item 3^  |
```

```pumld
@startsalt
{
  ^開いた状態　　　　　^^ item 1^^ item 2^ item 3^  |
}
@endsalt
```

## ツリー構造

```
{T
 + ルートノード
 ++ サブノード1
 ++ サブノード2
 +++ サブノード2-1
 ++++ サブノード2-1-1
 ++ サブノード3
}
```

```pumld
@startsalt
{
{T
 + ルートノード
 ++ サブノード1
 ++ サブノード2
 +++ サブノード2-1
 ++++ サブノード2-1-1
 ++ サブノード3
}
}
@endsalt
```

## スクロール

### 両方

```
{S
ノート1
.
some long text or somethings
}
```

```pumld
@startsalt
{
{S
ノート1
.
some long text or somethings
}
}
@endsalt
```

### 縦方向

```
{SI
ノート1
.
some long text or somethings
}
```

```pumld
@startsalt
{
{SI
ノート1
.
some long text or somethings
}
}
@endsalt
```

### 横方向

```
{S-
ノート1
.
some long text or somethings
}
```

```pumld
@startsalt
{
{S-
ノート1
.
some long text or somethings
}
}
@endsalt
```

## タブ

```
{/ 一般設定 | **セキュリティ** | その他 }
```

```pumld
@startsalt
{
{/ 一般設定 | **セキュリティ** | その他 }
}
@endsalt
```

## ノート

:::danger
現在、ワイヤーフレームではノートはサポートされていない模様です。
:::

## 行コメント

`'`から始まる行は行コメントとして扱われます。

## ブロックコメント

`/*`から`*/`まではブロックコメントとして扱われます。
:::warning
注意: ただし、行頭以外に`/*`を置いた場合にブロックコメントとして認識されないようです。<br />
また行の途中で`*/`を記載してもその行の最後までブロックコメントとして処理されるようです。
:::
