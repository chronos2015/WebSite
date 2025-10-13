---
slug: Yaml
title: Yaml
---

## サンプル

```
@startyaml
name: John Doe
age: 30
address:
 street: 123 Main St
 city: Springfield
 zip: 12345
@endyaml
```

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

## Yaml

Yamlの書き方については、[リンク](/docs/text/data/Yaml)を参照ください。

## 全体の設定

### タイトル

タイトルを定義できます。

```
title 新基盤構築計画
```

```pumld
@startyaml
title 新基盤構築計画
name: John Doe
age: 30
address:
 street: 123 Main St
 city: Springfield
 zip: 12345
@endyaml
```

### ヘッダ

:::danger
現在、Yamlの可視化機能ではヘッダはサポートされていない模様です。
:::

### フッタ

:::danger
現在、Yamlの可視化機能ではフッタはサポートされていない模様です。
:::

### キャプション

:::danger
現在、Yamlの可視化機能ではキャプションはサポートされていない模様です。
:::

## 行コメント

`'`から始まる行は行コメントとして扱われます。

:::warning
恐らくYamlの解析の都合上、Yamlの中に行コメントを記載する事はできません。
:::

## ブロックコメント

:::danger
恐らくYamlの解析の都合上、ブロックコメントを使用する事はできません。
:::
