---
slug: MindMap
title: マインドマップ
---

(MindMap)

## サンプル

```
@startmindmap
* ルートノード
** 子ノード1
*** さらに下のノード
** 子ノード2
*** 別のノード
@endmindmap
```

```pumld
@startmindmap
* ルートノード
** 子ノード1
*** さらに下のノード
** 子ノード2
*** 別のノード
@endmindmap
```

## 全体の設定

### タイトル

タイトルを定義できます。

```
title 新基盤構築計画
```

```pumld
@startmindmap
title 新基盤構築計画
* ルートノード
** 子ノード1
*** さらに下のノード
** 子ノード2
*** 別のノード
@endmindmap
```

### ヘッダ

ヘッダを定義できます。

```
header 新基盤構築計画
```

```pumld
@startmindmap
header 新基盤構築計画
* ルートノード
** 子ノード1
*** さらに下のノード
** 子ノード2
*** 別のノード
@endmindmap
```

### フッタ

フッタを定義できます。

```
footer フッタ
```

```pumld
@startmindmap
footer フッタ
* ルートノード
** 子ノード1
*** さらに下のノード
** 子ノード2
*** 別のノード
@endmindmap
```

### キャプション

キャプションを定義できます。

```
caption キャプション
```

```pumld
@startmindmap
caption キャプション
* ルートノード
** 子ノード1
*** さらに下のノード
** 子ノード2
*** 別のノード
@endmindmap
```

## ルートノード

ルートノードを定義できます。

```
* ルートノード
```

```pumld
@startmindmap
* ルートノード
@endmindmap
```

```
+ ルートノード
```

```pumld
@startmindmap
+ ルートノード
@endmindmap
```

## サブノード

どうやら、`*`と`+`で左右を切り替える機能は廃止されてしまったみたいですね。

```
** サブノード１
```

```pumld
@startmindmap
* ルートノード
** サブノード１
@endmindmap
```

```
++ サブノード１
```

```pumld
@startmindmap
+ ルートノード
++ サブノード１
@endmindmap
```

## 左側のサブノード

`left side`で方向を切り替える機能は健在の様です。

```
left side
```

```pumld
@startmindmap
* ルートノード
** サブノード１
** サブノード３
left side
** サブノード２
** サブノード４
@endmindmap
```

## Markdown記法

下記の記載方法は有効のようです。

```
* ルートノード
    * サブノード
```

```pumld
@startmindmap
* ルートノード
    * サブノード
@endmindmap
```

## ノート

:::danger
現在、マインドマップではノートはサポートされていない模様です。
:::

## 行コメント

`'`から始まる行は行コメントとして扱われます。

## ブロックコメント

`/*`から`*/`まではブロックコメントとして扱われます。
:::warning
注意: ただし、行頭以外に`/*`を置いた場合にブロックコメントとして認識されないようです。<br />
また行の途中で`*/`を記載してもその行の最後までブロックコメントとして処理されるようです。
:::

## 参照

(https://qiita.com/dbgso/items/736eb791149dbb0c3cf3)[https://qiita.com/dbgso/items/736eb791149dbb0c3cf3]

(https://overworker.hatenablog.jp/entry/2024/02/23/105758#google_vignette)[https://overworker.hatenablog.jp/entry/2024/02/23/105758#google_vignette]
