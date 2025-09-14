---
slug: JpPint
title: JP PINT
---

## JP PINTの概要について教えて

JP PINTは、日本国内でデジタルインボイスを標準化するための規格です。日本の消費税のインボイス制度や商慣習に対応するため、国際規格である**Peppol（ペポル）**をベースに、デジタル庁が中心となって策定しました。

---

### 目的とメリット

JP PINTの主な目的は、請求書や領収書などのやり取りをデジタル化し、企業間の取引を効率化することです。これにより、以下のメリットがあります。

* **業務の自動化**: デジタルインボイスをシステム間で直接やり取りできるため、手作業によるデータ入力が不要になり、経理業務の効率が大幅に向上します。
* **コスト削減**: 紙の印刷、郵送、保管にかかるコストを削減し、ペーパーレス化を促進します。
* **セキュリティ向上**: Peppolネットワークは、データの改ざん防止や発行元の確認機能を備えているため、取引の信頼性が高まります。
* **国際取引の円滑化**: Peppolは国際的に利用されている規格であるため、JP PINTに準拠することで海外企業とのデジタル取引もスムーズに行えます。

---

### Peppolとの関係

JP PINTは、Peppolネットワーク上で運用される**ローカルルール**です。Peppol自体は、デジタル文書を安全に交換するための**ネットワークの仕組み**を提供します。JP PINTは、そのネットワーク上でやり取りされる**文書の形式（XML形式）**を日本向けにカスタマイズしたものです。



Peppolネットワークは「4コーナーモデル」と呼ばれる仕組みで成り立っています。
* **コーナー1（C1）**: 送信者（売り手）のシステム
* **コーナー2（C2）**: 送信者のアクセスポイント
* **コーナー3（C3）**: 受信者のアクセスポイント
* **コーナー4（C4）**: 受信者（買い手）のシステム

C1からC2、そしてC3を経由してC4へと、JP PINTに準拠したデジタルインボイスが自動的にやり取りされます。この仕組みにより、異なるシステムを使っている企業間でも、共通の規格で安全にデータの交換が可能です。


### サンプル
```xml
<?xml version="1.0" encoding="UTF-8"?>
<ubl:Invoice xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
             xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"
             xmlns:ubl="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2">
    <!-- バージョン -->
    <cbc:UBLVersionID>2.1</cbc:UBLVersionID>
    <!--
    請求書 CustomizationID : urn:peppol:bis:billing
           ProfileID : urn:peppol:pint:billing-1@jp-1
    見積書 CustomizationID : urn:peppol:bis:quotation
           ProfileID : urn:peppol:pint:quotation-1@jp-1
    注文書 CustomizationID : urn:peppol:bis:order
           ProfileID : urn:peppol:pint:order-1@jp-1
    受領書 CustomizationID : urn:peppol:bis:receivingadvice
           ProfileID : uurn:peppol:pint:receivingadvice-1@jp-1
    -->
    <cbc:CustomizationID>urn:peppol:pint:billing-1@jp-1</cbc:CustomizationID>
    <cbc:ProfileID>urn:peppol:bis:billing</cbc:ProfileID>
    <!-- 請求書番号 (1..1) -->
    <cbc:ID>JP-2023-001</cbc:ID>
    <!-- 請求書発行日 (1..1) -->
    <cbc:IssueDate>2023-10-01</cbc:IssueDate>
    <!-- cbc:IssueTime：請求書発行時刻 (0..1) -->
    <!-- cbc:DueDate：支払期日 (0..1) -->
    <!-- 請求書タイプコード (1..1)
      380:商用請求書（標準的な請求書）
      381:クレジットメモ（減額請求）
      384:デビットメモ（追加請求）
      386:前払請求書（仮請求）
      387:自己請求書（買い手が発行）
      388:税請求書（税務目的）
      389:複数取引をまとめた請求書
      390:売掛債権譲渡済みの請求書
      393:リース契約に基づく請求書
      394:委託販売に関する請求書
      395:修正済み請求書（再発行）
      396:輸送費請求書
      397:通関用請求書
      398:輸送サービス請求書
      399:手数料請求書
      400:保険料請求書
      401:貨物輸送請求書
      402:設置作業請求書
      403:トレーニング費用請求書
      405:最終請求書（確定版）
      481:輸送指示に基づく請求書
      575:部分請求書
      623:使用量ベースの請求書（電気・水道など）
      780:サービス提供に対する請求書
      875:商品販売に対する請求書
    -->
    <cbc:InvoiceTypeCode>380</cbc:InvoiceTypeCode>
    <!-- cbc:Note：請求書メモ (0..1) -->
    <!-- cbc:TaxPointDate：課税ポイント日 (0..1) -->
    <!-- 請求書通貨コード (1..1)
      JPY:日本円-日本
      USD:米ドル-アメリカ合衆国
      EUR:ユーロ-ユーロ圏
      GBP:イギリスポンド-イギリス
      CNY:中国人民元-中国
      AUD:オーストラリアドル-オーストラリア
      CAD:カナダドル-カナダ
      CHF:スイスフラン-スイス
      KRW:韓国ウォン-韓国
      RUB:ロシアルーブル-ロシア
      INR:インドルピー-インド
      BRL:ブラジルレアル-ブラジル
      MXN:メキシコペソ-メキシコ
      SGD:シンガポールドル-シンガポール
      HKD:香港ドル-香港
    -->
    <cbc:DocumentCurrencyCode>JPY</cbc:DocumentCurrencyCode>
    <!-- cbc:TaxCurrencyCode：税務会計通貨 (0..1) -->
    <!-- cbc:AccountingCost：購入者の会計参照 (0..1) -->
    <!-- cbc:BuyerReference：購入者参照 (0..1) -->
    <!-- cac:InvoicePeriod：請求期間 (0..1) -->
      <!-- cbc:StartDate：請求期間の開始日 (0..1) -->
      <!-- cbc:EndDate：請求期間の終了日 (0..1) -->
      <!-- cbc:DescriptionCode：課税ポイント日付コード (0..1) -->
    <!-- /cac:InvoicePeriod -->
    <!-- cac:OrderReference：注文と販売注文参照 (0..1) -->
      <!-- cbc:ID：注文書参照 (1..1) -->
      <!-- cbc:SalesOrderID：販売注文参照 (0..1) -->
    <!-- /cac:OrderReference -->
    <!-- cac:BillingReference：先行請求書参照 (0..n) -->
      <!-- 	cac:InvoiceDocumentReference：請求書文書参照 (1..1) -->
        <!-- cbc:ID：前回の請求書参照 (1..1) -->
        <!-- cbc:IssueDate：前回の請求書発行日 (0..1) -->
      <!-- /cac:InvoiceDocumentReference -->
    <!-- /cac:BillingReference -->
    <!-- cac:DespatchDocumentReference：発送通知参照 (0..1) -->
      <!-- 	cbc:ID：発送通知参照 (1..1) -->
    <!-- /cac:DespatchDocumentReference -->
    <!-- cac:ReceiptDocumentReference：領収書アドバイス参照 (0..1) -->
      <!-- 	cbc:ID：受領通知参照 (1..1) -->
    <!-- /cac:ReceiptDocumentReference -->
    <!-- cac:OriginatorDocumentReference：入札またはロット参照 (0..1) -->
      <!-- 	cbc:ID：入札またはロット参照 (1..1) -->
    <!-- /cac:OriginatorDocumentReference -->
    <!-- cac:ContractDocumentReference：契約参照 (0..1) -->
      <!-- 	cbc:ID：契約参照 (1..1) -->
    <!-- /cac:ContractDocumentReference -->
    <!-- cac:AdditionalDocumentReference：追加のドキュメント参照 (0..1) -->
      <!-- cbc:ID：請求対象オブジェクト識別子 (1..1) -->
      <!-- cbc:DocumentTypeCode：構文バインディングの修飾子 (1..1) -->
    <!-- /cac:AdditionalDocumentReference -->
    <!-- cac:AdditionalDocumentReference：追加のサポート参照 (0..n) -->
      <!-- cbc:ID：サポート ドキュメント参照 (1..1) -->
      <!-- cbc:DocumentDescription：サポート ドキュメントの説明 (0..1) -->
      <!-- cac:Attachment：添付ファイル (0..1) -->
    <!-- /cac:AdditionalDocumentReference -->
    <!-- cac:ProjectReference：プロジェクト参照 (0..1) -->
      <!-- 	cbc:ID：プロジェクト参照 (1..1) -->
    <!-- /cac:ProjectReference -->
    <!-- 販売者 (1..1) -->
    <cac:AccountingSupplierParty>
        <!-- パーティー (1..1) -->
        <cac:Party>
            <!-- cbc:EndpointID：電子アドレス (1..1) -->
            <!-- cac:PartyIdentification：識別子(0..n) -->
              <!-- 	cbc:ID：識別子 (1..1) -->
            <!-- /cac:PartyIdentification -->
            <!-- 名称 (0..1) -->
            <cac:PartyName>
                <!-- 商号 (1..1) -->
                <cbc:Name>売り手株式会社</cbc:Name>
            </cac:PartyName>
            <!-- 郵便住所 (1..1) -->
            <cac:PostalAddress>
                <!-- 住所行1 (0..1) -->
                <cbc:StreetName>東京都港区新橋1-1-1</cbc:StreetName>
                <!-- cbc:AdditionalStreetName：住所行 2 (0..1) -->
                <!-- 市町村名 (0..1) -->
                <cbc:CityName>港区</cbc:CityName>
                <!-- 郵便番号 (0..1) -->
                <cbc:PostalZone>105-0004</cbc:PostalZone>
                <!-- cbc:CountrySubentity：国区分 (0..1)-->
                <!-- cac:AddressLine：住所欄 (0..1) -->
                <!-- 国 (1..1) -->
                <cac:Country>
                    <!-- 国コード (1..1)
                      JP:日本
                      US:アメリカ合衆国
                      GB:イギリス
                      FR:フランス
                      DE:ドイツ
                      CN:中国
                      AU:オーストラリア
                      CA:カナダ
                      CH:スイス
                      KR:韓国
                      RU:ロシア
                      IN:インド
                      BR:ブラジル
                      MX:メキシコ
                      SG:シンガポール
                      HK:香港
                      IT:イタリア
                      ES:スペイン
                      SE:スウェーデン
                    -->
                    <cbc:IdentificationCode>JP</cbc:IdentificationCode>
                </cac:Country>
            </cac:PostalAddress>
            <!-- 税関連 (1..1) -->
            <cac:PartyTaxScheme>
                <!-- TAX 識別子 (1..1) -->
                <cbc:CompanyID>1234567890123</cbc:CompanyID>
                <!-- 税関連 (1..1) -->
                <cac:TaxScheme>
                    <!-- 税制スキームコード (1..1)
                      VAT:付加価値税全般を示す国際的なコードです。ヨーロッパ諸国や日本を含む多くの国で使われています。
                      GST:物品・サービス税。オーストラリア、カナダ、シンガポール、インドなどで採用されています。
                      SAL:売上税。主にアメリカ合衆国で採用されています。州ごとに税率が異なります。
                      PST:州税。カナダの一部の州で適用される税金です。
                      JPE:日本の消費税を指すための独自のコードとして使われることがあります。
                      OAD:その他の関税・税金。特定の税制に当てはまらない、その他の税金を包括的に示します。
                    -->
                    <cbc:ID>JPN</cbc:ID>
                </cac:TaxScheme>
            </cac:PartyTaxScheme>
            <!-- cac:PartyLegalEntity：当事者の法人 (1..1) -->
              <!-- cbc:RegistrationName：販売者名 (1..1) -->
              <!-- cbc:CompanyID：販売者の法的登録識別子 (0..1) -->
              <!-- cbc:CompanyLegalForm：販売者の追加の法的情報 (0..1) -->
            <!-- /cac:PartyLegalEntity -->
            <!-- cac:Contact：販売者の連絡先 (0..1) -->
              <!-- cbc:Name：販売者の連絡先 (0..1) -->
              <!-- cbc:Telephone：販売者連絡先電話番号 (0..1) -->
              <!-- cbc:ElectronicMail：販売者の連絡先メールアドレス (0..1) -->
            <!-- /cac:Contact -->
        </cac:Party>
    </cac:AccountingSupplierParty>
    <!-- 購入者 (1..1) -->
    <cac:AccountingCustomerParty>
        <!-- パーティー (1..1) -->
        <cac:Party>
            <!-- cbc:EndpointID：購入者の電子アドレス (1..1) -->
            <!-- cac:PartyIdentification：購入者識別子(0..n) -->
              <!-- 	cbc:ID：購入者識別子 (1..1) -->
            <!-- /cac:PartyIdentification -->
            <!-- 名称 (0..1) -->
            <cac:PartyName>
                <!-- 購入者の商号 (1..1) -->
                <cbc:Name>買い手株式会社</cbc:Name>
            </cac:PartyName>
            <!-- 購入者の郵便住所 (1..1) -->
            <cac:PostalAddress>
                <!-- 購入者の住所行1 (0..1) -->
                <cbc:StreetName>大阪府中央区本町2-2-2</cbc:StreetName>
                <!-- cbc:AdditionalStreetName：購入者の住所行 2 (0..1) -->
                <!-- 市町村名 (0..1) -->
                <cbc:CityName>中央区</cbc:CityName>
                <!-- 販売者の郵便番号 (0..1) -->
                <cbc:PostalZone>541-0053</cbc:PostalZone>
                <!-- 国 (1..1) -->
                <cac:Country>
                    <!-- 販売者の国コード (1..1) -->
                    <cbc:IdentificationCode>JP</cbc:IdentificationCode>
                </cac:Country>
            </cac:PostalAddress>
            <!-- cac:PartyTaxScheme：税関連 (0..1) -->
              <!-- 	cbc:CompanyID：購入者の TAX 識別子 (1..1) -->
              <!-- cac:TaxScheme：税関連 (1..1) -->
                <!-- cbc:ID：税制スキームコード (1..1) -->
            <!-- /cac:PartyTaxScheme -->
            <!-- cac:PartyLegalEntity：当事者の法人 (1..1) -->
              <!-- cbc:RegistrationName：販売者名 (1..1) -->
              <!-- cbc:CompanyID：販売者の法的登録識別子 (0..1) -->
              <!-- cbc:CompanyLegalForm：販売者の追加の法的情報 (0..1) -->
            <!-- /cac:PartyLegalEntity -->
            <!-- cac:Contact：販売者の連絡先 (0..1) -->
              <!-- 販売者の連絡先 -->
              <!-- 販売者連絡先電話番号 -->
              <!-- 販売者の連絡先メールアドレス -->
            <!-- /cac:Contact -->
        </cac:Party>
    </cac:AccountingCustomerParty>
    <!-- cac:PayeeParty：受取人 (0..1) -->
      <!-- cac:PartyIdentification：識別子 (0..1) -->
        <!-- cbc:ID：受取人識別子 (1..1) -->
      <!-- cac:PartyName：名称 (1..1) -->
        <!-- cbc:Name：受取人名 (1..1) -->
      <!-- /cac:PartyName -->
      <!-- 	cac:PartyLegalEntity：法人 (0..1) -->
        <!-- cbc:CompanyID：受取人の法的登録識別子 (1..1) -->
      <!-- /cac:PartyLegalEntity -->
    <!-- /cac:PayeeParty -->
    <!-- cac:TaxRepresentativeParty：売り手税務代理人 (0..1) -->
      <!-- cac:PartyName：名称 (1..1) -->
        <!-- cbc:Name：販売者の税務代理人名 (1..1) -->
      <!-- /cac:PartyName -->
      <!-- cac:PostalAddress：販売者の税務代理人の郵便住所 (1..1) ※内容省略 -->
      <!-- cac:PartyTaxScheme：税関連 (0..1) -->
        <!-- 	cbc:CompanyID：購入者の TAX 識別子 (1..1) -->
        <!-- cac:TaxScheme：税関連 (1..1) -->
        <!-- cbc:ID：税制スキームコード (1..1) -->
      <!-- /cac:PartyTaxScheme -->
    <!-- cac:Delivery：配送情報 (0..1) -->
    <!-- cac:PaymentMeans：支払方法 (0..1) -->
    <!-- cac:PaymentTerms：請求条件 (0..n) -->
    <!-- cac:PrepaidPayment：支払済金額 (0..n) -->
    <!-- cac:AllowanceCharge：ドキュメント レベルの控除 請求書 (0..n) -->
    <!-- 税金合計 (1..n) -->
    <cac:TaxTotal>
        <!-- 請求書の合計税額 (1..1) -->
        <!-- @currencyID：通貨コード-->
        <cbc:TaxAmount currencyID="JPY">100</cbc:TaxAmount>
        <!-- 税金の内訳 (1..n) -->
        <cac:TaxSubtotal>
            <!-- 税区分課税対象額 (1..1) -->
            <!-- @currencyID：通貨コード-->
            <cbc:TaxableAmount currencyID="JPY">1000</cbc:TaxableAmount>
            <!-- 税カテゴリーの税額 (1..1) -->
            <!-- @currencyID：通貨コード-->
            <cbc:TaxAmount currencyID="JPY">100</cbc:TaxAmount>
            <!-- 税区分 (1..1) -->
            <cac:TaxCategory>
                <!-- 税金カテゴリ (1..1) -->
                <cbc:ID>S</cbc:ID>
                <!-- 税カテゴリの税率 (0..1) -->
                <cbc:Percent>10.0</cbc:Percent>
                <!-- 税制 -->
                <cac:TaxScheme>
                    <!-- 税制コード -->
                    <cbc:ID>VAT</cbc:ID>
                </cac:TaxScheme>
            </cac:TaxCategory>
        </cac:TaxSubtotal>
    </cac:TaxTotal>
    <!-- ドキュメント合計　(1..1) -->
    <cac:LegalMonetaryTotal>
        <!-- 請求書明細の正味金額の合計 (1..1) -->
        <!-- @currencyID：通貨コード-->
        <cbc:LineExtensionAmount currencyID="JPY">1000</cbc:LineExtensionAmount>
        <!-- 税抜き請求書合計金額 (1..1) -->
        <!-- @currencyID：通貨コード-->
        <cbc:TaxExclusiveAmount currencyID="JPY">1000</cbc:TaxExclusiveAmount>
        <!-- 税込請求書合計金額 (1..1) -->
        <!-- @currencyID：通貨コード-->
        <cbc:TaxInclusiveAmount currencyID="JPY">1100</cbc:TaxInclusiveAmount>
        <!-- cbc:AllowanceTotalAmount：ドキュメント レベルの控除の合計 (0..1) -->
        <!-- @currencyID：通貨コード-->
        <!-- cbc:ChargeTotalAmount：ドキュメント レベルの料金の合計 (0..1) -->
        <!-- @currencyID：通貨コード-->
        <!-- cbc:PrepaidAmount：支払済金額 (0..1) -->
        <!-- @currencyID：通貨コード-->
        <!-- cbc:PayableRoundingAmount：端数処理金額 (0..1) -->
        <!-- @currencyID：通貨コード-->
        <!-- 支払予定金額 (1..1) -->
        <!-- @currencyID：通貨コード-->
        <cbc:PayableAmount currencyID="JPY">1100</cbc:PayableAmount>
    </cac:LegalMonetaryTotal>
    <!-- 請求明細 (1..n) -->
    <cac:InvoiceLine>
        <!-- 請求書明細識別子 (1..1) -->
        <cbc:ID>1</cbc:ID>
        <!-- cbc:Note：メモ (1..1) -->
        <!-- 請求数量 (1..1) -->
        <!-- @unitCode：請求数量の測定単位コード
          C62:個-数量を示す最も一般的なコード。「1個」「2個」など。
          H87:時間-サービスの提供時間など。
          KGM:キログラム-重さ、質量を示す。
          LTR:リットル-体積を示す。
          MTK:平方メートル-面積を示す。
          MTR:メートル-長さを示す。
          DAY:日-サービスの日数など。
          EA:個-C62と同様に「個」を意味する。
          BX:箱-梱包単位を示す。
          CS:ケース-梱包単位を示す。
          DZN:ダース-12個をまとめた単位。
          SET:セット-セット単位での販売を示す。
        -->
        <cbc:InvoicedQuantity unitCode="C62">1</cbc:InvoicedQuantity>
        <!-- 請求明細の正味金額 (1..1) -->
        <cbc:LineExtensionAmount currencyID="JPY">1000</cbc:LineExtensionAmount>
        <!-- 品目情報 (1..1) -->
        <cac:Item>
            <!-- cbc:Description：アイテムの説明 (0..1) -->
            <cbc:Name>商品A</cbc:Name>
            <!-- cac:BuyersItemIdentification：購入者の商品識別 (0..1) -->
              <!-- cbc:ID：アイテム識別子 (1..1) -->
            <!-- /cac:BuyersItemIdentification -->
            <!-- cac:SellersItemIdentification：販売者の商品識別 (0..1) -->
              <!-- cbc:ID：アイテム識別子 (1..1) -->
            <!-- /cac:SellersItemIdentification -->
            <!-- cac:StandardItemIdentification：標準アイテム識別 (0..1) -->
              <!-- cbc:ID：アイテム識別子 (1..1) -->
            <!-- /cac:StandardItemIdentification -->
            <!-- cac:OriginCountry：原産国 (0..1) -->
              <!-- cbc:IdentificationCode：商品の原産国 (1..1)-->
            <!-- /cac:OriginCountry -->
            <!-- cac:CommodityClassification：商品分類 (0..n) -->
              <!-- cbc:ItemClassificationCode：アイテム分類識別子 (1..1) -->
            <!-- /cac:CommodityClassification -->
            <!-- cac:ClassifiedTaxCategory：分類税カテゴリー (1..n) -->
              <!-- cbc:ID：請求品目の税カテゴリ (1..1) -->
              <!-- cbc:Percent：請求品目の税率 (0..1) -->
              <!-- cbc:PerUnitAmount：単位税額 (0..1) -->
              <!-- cac:TaxScheme：税制 (0..1) -->
            <!-- /cac:ClassifiedTaxCategory -->
            <!-- cac:AdditionalItemProperty：追加アイテムプロパティ (0..n) -->
              <!-- cbc:Name：アイテム属性名 (1..1) -->
              <!-- cbc:Value：アイテム属性値 (1..1) -->
        </cac:Item>
        <!-- 価格詳細 -->
        <cac:Price>
            <!-- 商品正味価格 (1..1) -->
            <cbc:PriceAmount currencyID="JPY">1000</cbc:PriceAmount>
            <!-- cbc:BaseQuantity：商品価格基準数量 (0..1) -->
            <!-- @unitCode：請求数量の測定単位コード -->
            <!-- cac:AllowanceCharge：手当 (0..1) -->
        </cac:Price>
        <!-- 不明 -->
        <cac:TaxTotal>
            <cbc:TaxAmount currencyID="JPY">100</cbc:TaxAmount>
        </cac:TaxTotal>
        <!-- 不明 -->
        <cac:ClassifiedTaxCategory>
            <cbc:ID>S</cbc:ID>
            <cbc:Percent>10.0</cbc:Percent>
            <cac:TaxScheme>
                <cbc:ID>VAT</cbc:ID>
            </cac:TaxScheme>
        </cac:ClassifiedTaxCategory>
    </cac:InvoiceLine>
</ubl:Invoice>
```

