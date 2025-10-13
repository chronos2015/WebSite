---
slug: Activity
title: アクティビティ図
---

(Activity Diagram)

## サンプル

```
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

## 全体の設定

### タイトル

タイトルを定義できます。

```
title 新基盤構築計画
```

```pumld
@startuml
title 新基盤構築計画
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

### ヘッダ

ヘッダを定義できます。

```
header 新基盤構築計画
```

```pumld
@startuml
header 新基盤構築計画
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

### フッタ

フッタを定義できます。

```
footer フッタ
```

```pumld
@startuml
footer フッタ
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

### キャプション

キャプションを定義できます。

```
caption キャプション
```

```pumld
@startuml
caption キャプション
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

#### すべて組み合わせると...

```pumld
title 新基盤構築計画
header 新基盤構築計画
footer フッタ
caption キャプション
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

## 開始点

```
start
```

```pumld
@startuml
start
@enduml
```

## 終了点

```
stop
```

```pumld
@startuml
stop
@enduml
```

## 分岐

分岐を定義できます。<br />
`elseif`や`else`は、不要な場合には省略できます。

```
if (分岐条件１) then
    :分岐フローＡ;
elseif (分岐条件２)
    :分岐フローＢ;
else
    :分岐フローＣ;
endif
```

```pumld
@startuml
start
if (分岐条件１) then
    :分岐フローＡ;
elseif (分岐条件２)
    :分岐フローＢ;
else
    :分岐フローＣ;
endif
stop
@enduml
```

## 繰り返し

### 前判定ループ

```
while (実行条件) is (継続)
    :分岐フロー;
endwhile (終了)
```

```pumld
@startuml
start
while (実行条件) is (継続)
    :分岐フロー;
endwhile (終了)
stop
@enduml
```

### 後判定ループ

図を見るとなんか無理やり感があるけど仕方ないのかな・・・。

```
repeat
    :処理フロー;
repeat while (実行条件)
```

```pumld
@startuml
start
repeat
    :処理フロー;
repeat while (実行条件)
stop
@enduml
```

## 並列処理

```
fork
    :処理フローＡ;
fork again
    :処理フローＢ;
end fork
```

```pumld
@startuml
start
fork
    :処理フローＡ;
fork again
    :処理フローＢ;
end fork
stop
@enduml
```

## パーティション

うーん、いろいろ考慮が不足しているのか・・・<br />
こんな書き方をしないといけないのは少し受け入れにくい面もあるかな・・・。

```
|パーティション１|
start
:処理フローＡ;
|パーティション２|
:処理フローＢ;
stop
```

```pumld
@startuml
|パーティション１|
start
:処理フローＡ;
|パーティション２|
:処理フローＢ;
stop
@enduml
```

## ノート

ノートを定義できます。

### 左側

```
note left : ノート
```

```pumld
@startuml
start
:Webサイトへアクセス;
note left : ノート
stop
@enduml
```

:::danger
注意: 他の機能では、top　bottomも指定できますがアクティビティ図に限っては不可の様です。
:::

### 右側

```
note right : ノート
```

```pumld
start
:Webサイトへアクセス;
note right : ノート
stop
```

:::danger
注意: 他の機能では、top　bottomも指定できますがアクティビティ図に限っては不可の様です。
:::

### 複数行の場合

この機能は、ノートを右側に配置する場合、左側に配置する場合でも使用できます。<br />
尚、このサイトでは右側のみ紹介しています。

```
note right
クラスの右側に注釈１
クラスの右側に注釈２
end note
```

```pumld
@startuml
start
:Webサイトへアクセス;
note right
クラスの右側に注釈１
クラスの右側に注釈２
end note
stop
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

[https://niyanmemo.com/5176/#toc7](https://niyanmemo.com/5176/#toc7)

[https://www.wakuwakubank.com/posts/564-design-uml-activity/](https://www.wakuwakubank.com/posts/564-design-uml-activity/)
