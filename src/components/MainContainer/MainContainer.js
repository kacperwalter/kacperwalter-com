import React from 'react';
import styles from './MainContainer.module.scss';
import Header from 'components/Header/Header';

const MainContainer = () => (
  <section className={`${styles.background}`}>
    <main className={`${styles.MainContainer}`}>
      <Header />
    </main>
  </section>
);

export default MainContainer;
