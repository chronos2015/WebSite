---
slug: Jackson Databind
title: Jackson Databind
---

**Jackson Databind**は、JavaオブジェクトとJSONデータのシリアライズ・デシリアライズを可能にする、Jacksonライブラリの中核となるモジュールです。一方、**Jackson Dataformat YAML**は、Jackson Databindの機能を拡張し、JSONではなくYAML形式のデータを扱うための追加モジュールです。

***

### Jackson Databind

Jackson Databindは、Jacksonの主要な機能を提供します。

* **機能**: JavaのPOJO（Plain Old Java Object）をJSONに変換（シリアライズ）したり、JSONをJavaオブジェクトに変換（デシリアライズ）したりする役割を担います。
* **使い方**: `com.fasterxml.jackson.databind.ObjectMapper` クラスが中心となり、JSONとJavaオブジェクト間の変換を管理します。アノテーション（例：`@JsonProperty`, `@JsonIgnore`）を使って、マッピングを柔軟にカスタマイズできます。

### Jackson Dataformat YAML

Jackson Dataformat YAMLは、YAML形式のデータを扱うためのJacksonの拡張機能です。

* **機能**: YAMLデータをJavaオブジェクトに変換したり、その逆の変換を行ったりします。Jackson DatabindがJSONを扱うのと同様のAPIを提供するため、開発者はJSONとYAMLの扱い方を統一できます。
* **使い方**: `com.fasterxml.jackson.dataformat.yaml.YAMLMapper` クラスを使用します。このクラスは`ObjectMapper`を継承しており、YAML固有の設定も可能です。

***

### 両者の関係性

Jacksonは、これらのモジュールを組み合わせることで、**プラグイン可能なアーキテクチャ**を実現しています。

* **Jackson Core**: 低レベルのJSONストリーミングAPIを提供します。
* **Jackson Databind**: Coreをベースに、高レベルなオブジェクトマッピング機能を提供します。
* **Jackson Dataformat YAML**: Databindの上に構築され、YAML形式のサポートを追加します。

この設計により、開発者は必要なフォーマット（JSON, YAML, XML, CSVなど）のモジュールだけを追加することで、ライブラリのフットプリントを小さく保つことができます。これにより、JSONとYAMLの両方を扱う必要がある場合でも、異なるライブラリを学ぶ必要がなく、統一されたAPIで開発を進められるという大きなメリットがあります。

## Json schemaには対応している？

はい、**JacksonはJSON Schemaに対応しています**。JSON Schemaは、JSONデータの構造を記述するための規格であり、データのバリデーション（検証）やドキュメント生成に利用されます。

-----

### JacksonでのJSON Schemaの利用

Jacksonの`jackson-module-json-schema`というモジュールを利用することで、JavaのクラスからJSON Schemaを生成できます。この機能は主に以下の目的で使われます。

1.  **JSON Schemaの自動生成**: JavaのPOJO（Plain Old Java Object）に付与されたアノテーション（例：`@JsonProperty`, `@JsonInclude`）や、フィールドのデータ型から、そのPOJOが満たすべきJSONの構造を記述したJSON Schemaを自動的に生成します。
2.  **APIドキュメントの生成**: 生成されたJSON Schemaは、REST APIのリクエストやレスポンスのデータ構造を明確に定義するため、APIドキュメントの自動生成に役立ちます。

ただし、**注意点として、Jackson自体には生成されたJSON Schemaを使ってデータを検証する機能は組み込まれていません。** バリデーションを行いたい場合は、別途JSON Schemaのバリデーションライブラリ（例：`everit-json-schema`, `json-schema-validator`など）を組み合わせる必要があります。

### Jackson JSON Schemaモジュールの使い方

以下の簡単な例で、JavaクラスからJSON Schemaを生成する方法を示します。

```java
// User.java (POJO)
public class User {
    private String name;
    private int age;
    // ... constructors, getters, setters
}
```

```java
// Main.java (Schema生成)
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.module.jsonSchema.JsonSchema;
import com.fasterxml.jackson.module.jsonSchema.JsonSchemaGenerator;

public class Main {
    public static void main(String[] args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        JsonSchemaGenerator schemaGen = new JsonSchemaGenerator(mapper);
        
        JsonSchema schema = schemaGen.generateSchema(User.class);
        
        // 生成されたJSON Schemaを文字列として出力
        System.out.println(mapper.writerWithDefaultPrettyPrinter().writeValueAsString(schema));
    }
}
```

このコードを実行すると、`User`クラスの構造に基づいたJSON Schemaが出力されます。このように、JacksonはJSON Schemaとの連携をモジュールとして提供しており、API開発やデータ構造のドキュメント化を効率的に進めることができます。

## Gsonはどうかな？

はい、**Gson**は、Googleが開発したJavaのJSONライブラリです。Jacksonと同様に広く使われていますが、設計思想や機能の面でいくつかの違いがあります。

***

### Gsonの特徴

Gsonは、そのシンプルさと使いやすさで知られています。

* **POJOとのマッピング**: Javaオブジェクト（POJO）をJSONにシリアライズしたり、JSONをPOJOにデシリアライズしたりする機能が中心です。Jacksonと異なり、外部のライブラリなしでXMLやYAMLなどを扱う機能はありません。
* **シンプルさ**: アノテーションの使用を最小限に抑えており、複雑な設定を必要としないため、簡単に始められます。
* **GsonBuilder**: 柔軟な設定が必要な場合は、`GsonBuilder`クラスを使って、日付フォーマットやフィールド名の変換ルールなどをカスタマイズできます。
* **ジェネリックスのサポート**: Javaのジェネリックス型を適切に処理するため、`List<String>`のような複雑な型も簡単に変換できます。

### GsonとJacksonの比較

| 特徴 | Gson | Jackson |
| :--- | :--- | :--- |
| **設計思想** | シンプル、最小限のカスタマイズ | 高機能、豊富なカスタマイズ |
| **API** | 直感的で簡単に使える | 柔軟だが、学習コストがやや高い |
| **性能** | 高速だが、Jacksonの方がわずかに優れる場合がある | 一般的に最も高速な部類に入る |
| **サポート形式** | JSONのみ | JSON、YAML、XMLなど多数 |
| **アノテーション** | `@SerializedName`など最小限 | `@JsonProperty`、`@JsonIgnore`など多数 |
| **用途** | シンプルなアプリケーション、Android開発 | エンタープライズ、Spring Bootなど |

### まとめ

Gsonは、特に**シンプルさと開発の迅速さ**を重視する場合に非常に適しています。Android開発で広く採用されているのも、軽量で使いやすいという利点があるためです。一方、JSON以外のフォーマットも扱いたい、細かい設定でパフォーマンスを最適化したい、といった要件がある場合は、Jacksonの方が適していることが多いです。

## 外部ライブラリがあればyamlも扱える？

いいえ、**GsonはJSONを扱うことに特化しており、外部ライブラリを追加してもYAMLを直接扱うことはできません**。

Gsonは、JSONとJavaオブジェクト間のシリアライズ・デシリアライズに焦点を当てて設計されています。そのため、YAML、XML、CSVといった他のデータ形式を扱うための拡張モジュールは公式には提供されていません。

もしJSONとYAMLの両方を扱いたい場合は、**Jackson**のような、複数のデータフォーマットに対応できるライブラリを使用するのが一般的です。Jacksonは、コアライブラリに加えて、YAML用の`jackson-dataformat-yaml`のようなモジュールを追加することで、同じAPIで異なる形式を扱うことができます。

まとめると、GsonはJSONに特化しているため、他の形式には対応していません。YAMLを扱うには、**SnakeYAML**のような専用ライブラリか、汎用性の高い**Jackson**ライブラリを使用する必要があります。
