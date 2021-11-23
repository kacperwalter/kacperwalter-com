import React from 'react';
import styles from './MainContainer.module.scss';
import Header from 'components/Header/Header';
import { textContent } from 'data/texts';

const MainContainer = () => (
  <section className={`${styles.background}`}>
    <main className={`${styles.MainContainer}`}>
      <Header text={textContent.headerText} />
    </main>
  </section>
);

export default MainContainer;
