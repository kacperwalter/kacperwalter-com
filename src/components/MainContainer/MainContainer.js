import React from 'react';
import styles from './MainContainer.module.scss';
import { textContent } from 'data/texts';
import { links } from 'data/button-links';
import Header from 'components/Header/Header';
import Description from 'components/Description/Description';
import LinkButton from 'components/LinkButton/LinkButton';

const MainContainer = () => (
  <section className={`${styles.Background}`}>
    <main className={`${styles.MainContainer}`}>
      <Header text={textContent.headerText} />
      <div className={`${styles.DescriptionContainer}`}>
        <Description text={textContent.mainParagraph} />
        {links.map((linksData) => (
          <LinkButton linksData={linksData} />
        ))}
      </div>
    </main>
  </section>
);

export default MainContainer;
