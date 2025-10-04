---
slug: Gantt
title: ガントチャート
---

## 全体の設定

### プロジェクト開始日

プロジェクトの開示日を指定できます。

```
project starts 2025/1/1
```

### 表示言語

ガントチャートの表示言語を指定できます。

| 和名   | 英名 |
|--------|----|
| 英語   | en |
| 日本語 | ja |
| 中国語 | zh |
| 韓国語 | ko |

```
language ja
```

### 表示単位とズーム

表示単位とズームを設定できます。

| 和名   | 英名 |
|--------|----|
| 日 | daily |
| 週 | weekly |
| 月 | monthly |
| 四半期 | quarterly |
| 年 | yearly |

```
projectscale daily zoom 2
```

```pumld
@startgantt
project starts 2025/1/1
projectscale daily zoom 2
language ja
[taskA] starts at 2025/1/2
[taskA] lasts 14 days
@endgant
```

### タイトル

タイトルを定義できます。

```
title 新基盤構築計画
```

```pumld
@startgantt
project starts 2025/1/1
language ja
title 新基盤構築計画
[taskA] starts at 2025/1/2
[taskA] lasts 30 days
@endgant
```

### ヘッダ

ヘッダを定義できます。

```
header 新基盤構築計画
```

```pumld
@startgantt
project starts 2025/1/1
language ja
header 新基盤構築計画
[taskA] starts at 2025/1/2
[taskA] lasts 30 days
@endgant
```

### フッタ

フッタを定義できます。

```
footer フッタ
```

```pumld
@startgantt
project starts 2025/1/1
language ja
footer フッタ
[taskA] starts at 2025/1/2
[taskA] lasts 30 days
@endgant
```

### キャプション

キャプションを定義できます。

```
caption キャプション
```

```pumld
@startgantt
project starts 2025/1/1
language ja
caption キャプション
[taskA] starts at 2025/1/2
[taskA] lasts 30 days
@endgant
```

### 凡例

凡例を定義できます。

```
legend
凡例
end legend
```

```pumld
@startgantt
project starts 2025/1/1
language ja
legend
凡例
end legend
[taskA] starts at 2025/1/2
[taskA] lasts 30 days
@endgant
```

#### すべて組み合わせると...

```pumld
@startgantt
project starts 2025/1/1
language ja
projectscale daily zoom 2
header 新基盤構築計画
title 新基盤構築計画
legend
凡例
end legend
caption キャプション
footer フッタ
[taskA] starts at 2025/1/2
[taskA] lasts 14 days
@endgant
```

## セクション

セクションを作成できます。
セクションはタスクをグループ化するのに役立ちます。

```
-- 設計フェーズ --
```

```pumld
@startgantt
project starts 2025/1/1
language ja
-- 設計フェーズ --
[taskA] starts at 2025/1/2
[taskA] lasts 30 days
@endgant
```

## タスク

タスクは、タスク名、開始日または依存関係、期間の順に記述します。

### 日付を指定して開始する場合
```
[taskA] starts at 2025/1/2
```

```pumld
@startgantt
project starts 2025/1/1
language ja
[taskA] starts at 2025/1/2
[taskA] lasts 30 days
@endgant
```
### 日数を指定して期間を記載する場合

```
[taskA] lasts 15 days
```

```pumld
@startgantt
project starts 2025/1/1
language ja
[taskA] starts at 2025/1/17
[taskA] lasts 15 days
@endgant
```

### 別のタスクの完了をまって開始する場合
```
[taskB] starts at [taskA]'s end
-- ※下記の様な記載も可能です。
-- [taskA] -> [taskB]
```

```pumld
@startgantt
project starts 2025/1/1
language ja
[taskA] starts at 2025/1/2
[taskA] lasts 15 days
[taskB] starts at [taskA]'s end
[taskB] lasts 15 days
@endgant
```

### 先行するタスクの完了後、指定日数待って開始する場合
```
[taskB] starts 2 days after [taskA]'s end
```

```pumld
@startgantt
project starts 2025/1/1
language ja
[taskA] starts at 2025/1/2
[taskA] lasts 15 days
[taskB] starts 2 days after [taskA]'s end
[taskB] lasts 13 days
@endgant
```

### 先行するタスクの開始を待って開始する場合
```
[taskB] starts at [taskA]'s start
```

```pumld
@startgantt
project starts 2025/1/1
language ja
[taskA] starts at 2025/1/2
[taskA] lasts 30 days
[taskB] starts at [taskA]'s start
[taskB] lasts 30 days
@endgant
```

### 別のタスクの終了を待って終了とする場合
```
[taskB] ends at [taskA]'s end
```

```pumld
@startgantt
project starts 2025/1/1
language ja
[taskA] starts at 2025/1/2
[taskA] lasts 30 days
[taskB] ends at [taskA]'s end
[taskB] lasts 10 days
@endgant
```

### 別のタスクの開始を待って終了とする場合

```
[taskB] ends at [taskA]'s start
```

```pumld
@startgantt
project starts 2025/1/1
language ja
[taskA] starts at 2025/1/10
[taskA] lasts 22 days
[taskB] starts at 2025/1/2
[taskB] ends at [taskA]'s start
@endgant
```

### 別のタスクの終了に１日先だって終了する場合

```
[taskB] ends 1 day before [taskA]'s end
```

```pumld
@startgantt
project starts 2025/1/1
language ja
[taskA] starts at 2025/1/10
[taskA] lasts 22 days
[taskB] starts at 2025/1/2
[taskB] ends 1 day before [taskA]'s end
@endgant
```

### 二つのマイルストーン間のタスクの場合
```
[taskA] occurs from [MilestoneA] to [MilestoneB]
-- ※下記の様な記載も可能です。
-- [taskA] starts at [MilestoneA]'s start
-- [taskA] ends at [MilestoneB]'s end
```

```pumld
@startgantt
project starts 2025/1/1
language ja
[MilestoneA] happens 2025/1/2
[taskA] starts at [MilestoneA]'s start
[MilestoneB] happens 2025/1/31
[taskA] ends at [MilestoneB]'s end
@endgant
```

### タスクの短縮名称と期間を指定する場合
```
[taskA] as [A] lasts 30 days
```

```pumld
@startgantt
project starts 2025/1/1
language ja
[taskA] as [A] lasts 30 days
[A] starts at 2025/1/2
@endgant
```

### 進捗状況を表示する場合

```
[taskA] is 50% completed
```
```pumld
@startgantt
project starts 2025/1/1
language ja
[taskA] starts at 2025/1/2
[taskA] lasts 30 days
[taskA] is 50% completed
@endgant
```

### 複数のタスクを一列に並べる場合

```
[taskB] displays on same row as [taskA]
```

```pumld
@startgantt
project starts 2025/1/1
language ja
[taskA] starts at 2025/1/2
[taskA] lasts 15 days
[taskB] starts at 2025/1/18
[taskB] lasts 14 days
[taskB] displays on same row as [taskA]
@endgant
```

### タスクを削除する場合

この機能…進捗状況の0%と区別できないかも…。

```
[taskA] is deleted
```

```pumld
@startgantt
project starts 2025/1/1
language ja
[taskA] starts at 2025/1/2
[taskA] lasts 30 days
[taskA] is deleted
@endgant
```

## リソース

タスクにリソースを割り当てることができます。

```
[taskA] on {person1} lasts 14 days
```

```pumld
@startgantt
project starts 2025/1/1
projectscale daily zoom 2
language ja
[taskA] starts at 2025/1/2
[taskA] on {person1} lasts 14 days
@endgant
```

### 何%割り当てるか指定する場合

```
[taskA] on {person1:50%} lasts 7 days
```

```pumld
@startgantt
project starts 2025/1/1
projectscale daily zoom 2
language ja
[taskA] starts at 2025/1/2
[taskA] on {person1:50%} lasts 7 days
@endgant
```

### 複数のリソースを割り当てる場合
```
[taskA] on {person1} {person2} lasts 28 days
```

```pumld
@startgantt
project starts 2025/1/1
projectscale daily zoom 2
language ja
[taskA] starts at 2025/1/2
[taskA] on {person1} {person2} lasts 28 days
@endgant
```

### リソースの休業日

```
{person1} is off on 2025/1/10 to 2025/1/15
```

```pumld
@startgantt
project starts 2025/1/1
projectscale daily zoom 2
language ja
[taskA] starts at 2025/1/2
[taskA] on {person1} lasts 11 days
{person1} is off on 2025/1/5 to 2025/1/7
@endgant
```

## マイルストーン

マイルストーンを定義できる。

### 先行タスクがある場合
```
[MilestoneA] happens at [taskA]'s end
```

```pumld
@startgantt
project starts 2025/1/1
language ja
[taskA] starts at 2025/1/2
[taskA] lasts 30 days
[MilestoneA] happens at [taskA]'s end
@endgant
```

### 日付指定の場合
```
[MilestoneA] happens 2025/1/8
```

```pumld
@startgantt
project starts 2025/1/1
language ja
[taskA] starts at 2025/1/2
[taskA] lasts 30 days
[MilestoneA] happens 2025/1/8
@endgant
```

### マイルストーンを削除する場合
```
[MilestoneA] is deleted
```
```pumld
@startgantt
project starts 2025/1/1
language ja
[taskA] starts at 2025/1/2
[taskA] lasts 30 days
[MilestoneA] happens 2025/1/8
[MilestoneA] is deleted
@endgant
```

## 休業日

### 曜日指定

曜日を元にプロジェクトの休業日を指定できます。

| 和名   | 英名    |
|--------|----------|
| 日曜日 | sunday    |
| 月曜日 | Monday    |
| 火曜日 | tuesday   |
| 水曜日 | wednesday |
| 木曜日 | thursday  |
| 金曜日 | friday    |
| 土曜日 | saturday  |

```
saturday are closed
sunday are closed
```
```pumld
@startgantt
project starts 2025/1/1
saturday are closed
sunday are closed
[taskA] starts at 2025/1/2
[taskA] lasts 22 days
@endgant
```

### 日付指定

日付を指定してプロジェクトの休業日を指定できます。

```
2025/1/5 is closed
```
```pumld
@startgantt
project starts 2025/1/1
language ja
2025/01/05 is closed
[taskA] starts at 2025/1/2
[taskA] lasts 29 days
@endgant
```

### 休業日の除外

一端、曜日指定で休業日となってしまった日を日付指定で休業日から除外できます。

```
2025/1/4 is open
```
```pumld
@startgantt
project starts 2025/1/1
language ja
saturday are closed
sunday are closed
2025/1/4 is open
[taskA] starts at 2025/1/2
[taskA] lasts 23 days
@endgant
```

## 色
下記の記載で色見本を表示します。

```
@startuml
colors
@enduml
```

```pumld
@startuml
colors
@enduml
```

## ノート

ノートを定義できます。

```
note bottom
ノートの内容
end note
```
```pumld
@startgantt
project starts 2025/1/1
language ja
[taskA] starts at 2025/1/2
[taskA] lasts 30 days
note bottom
ノートの内容
end note
@endgant
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

[https://qiita.com/asobinin_kinsan/items/e8552dcab508b414a19a](https://qiita.com/asobinin_kinsan/items/e8552dcab508b414a19a)

[https://niyanmemo.com/5126/#toc10](https://niyanmemo.com/5126/#toc10)

[https://edraw.wondershare.jp/gantt-chart/create-gantt-chart-by-plantuml.html](https://edraw.wondershare.jp/gantt-chart/create-gantt-chart-by-plantuml.html)

[https://ones.com/ja/blog/knowledge/excel-plantuml-wbs-gantt-chart/](https://ones.com/ja/blog/knowledge/excel-plantuml-wbs-gantt-chart/)

[https://zenn.dev/hokorobi/articles/573541863e7d0d6ac75b](https://zenn.dev/hokorobi/articles/573541863e7d0d6ac75b)

[https://otepipi.hatenablog.com/entry/2018/07/26/205758](https://otepipi.hatenablog.com/entry/2018/07/26/205758)
