import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'サービス',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        複雑な仕組みやルールを、専門的な視点からわかりやすく解説します。国際的なスタンダードや業界の
        慣習も、実務に落とし込める形で整理しています。初めての方でも、必要な情報に迷わずアクセスでき
        ます。
      </>
    ),
  },
  {
    title: 'ブログ',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        日々の気づきや、現場での実践から得た知見を記録しています。単なる読みものではなく、情報の背
        景や文脈を掘り下げることで、理解の補助線として機能します。更新は不定期ですが、内容は濃密で
        す。
      </>
    ),
  },
  {
    title: 'ドキュメント',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        FAQではなく、必要な情報を簡潔にまとめた実用的な資料群です。操作方法や考え方の整理、よくあ
        る質問への対応など、使う人の視点に立った構成を心がけています。随時更新・追加予定です。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
