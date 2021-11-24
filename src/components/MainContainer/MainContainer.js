import React from 'react';
import styles from './MainContainer.module.scss';
import { textContent } from 'data/texts';
import Header from 'components/Header/Header';
import Description from 'components/Description/Description';

const MainContainer = () => (
  <section className={`${styles.background}`}>
    <main className={`${styles.MainContainer}`}>
      <Header text={textContent.headerText} />
      <Description text={textContent.mainParagraph} />
    </main>
  </section>
);

export default MainContainer;
