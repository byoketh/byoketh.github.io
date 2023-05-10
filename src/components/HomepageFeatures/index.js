import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'easy to use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        navigate effortlessly and find the exact information you need with 
        an intuitive search function. links within the documents allow you 
        to jump directly to the relevant sections within each doc.
      </>
    ),
  },
  {
    title: 'focus on information',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        richDocs makes it simple for you focus on information. search, link sections, and read up!
      </>
    ),
  },
  {
    title: 'no ads',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        no intrusive pop-up ads, or videos that start playing without permission. 
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
