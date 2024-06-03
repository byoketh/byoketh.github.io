import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Read',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Thanks to <a href='https://docusaurus.io/' target='_blank' rel='noopener noreferrer'>Docusaurus</a>; Navigate effortlessly and find the exact information you need with 
        an intuitive search function. Links within the documents allow you 
        to jump directly to the relevant sections within each doc.
      </>
    ),
  },
  {
    title: 'Focus on Information',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The richDocs project focuses on offering rich documentation. The best docs are right here. Search, link specific sections, and read up!
      </>
    ),
  },
  {
    title: 'No ads',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        No intrusive pop-up ads, or videos that start playing without your permission. 
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
        <h3>{title}</h3>
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
