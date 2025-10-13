---
slug: Json
title: Json
---

## サンプル

```
@startjson
{
  "name": "John Doe",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "Anytown"
  },
  "hobbies": ["reading", "traveling", "swimming"]
}
@endjson
```

```pumld
@startjson
{
  "name": "John Doe",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "Anytown"
  },
  "hobbies": ["reading", "traveling", "swimming"]
}
@endjson
```

## Json

Jsonの書き方については、[リンク](/docs/text/data/Json)を参照ください。

## 全体の設定

### タイトル

タイトルを定義できます。

```
title 新基盤構築計画
```

```pumld
@startjson
title 新基盤構築計画
{
  "name": "John Doe",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "Anytown"
  },
  "hobbies": ["reading", "traveling", "swimming"]
}
@endjson
```

### ヘッダ

:::danger
現在、Jsonの可視化機能ではヘッダはサポートされていない模様です。
:::

### フッタ

:::danger
現在、Jsonの可視化機能ではフッタはサポートされていない模様です。
:::

### キャプション

:::danger
現在、Jsonの可視化機能ではキャプションはサポートされていない模様です。
:::

## 行コメント

`'`から始まる行は行コメントとして扱われます。

:::warning
恐らくJsonの解析の都合上、Jsonの中に行コメントを記載する事はできません。
:::

## ブロックコメント

`/*`から`*/`まではブロックコメントとして扱われます。
:::warning
恐らくJsonの解析の都合上、Jsonの中に行コメントを記載する事はできません。<br />
注意: ただし、行頭以外に`/*`を置いた場合にブロックコメントとして認識されないようです。<br />
また行の途中で`*/`を記載してもその行の最後までブロックコメントとして処理されるようです。
:::
