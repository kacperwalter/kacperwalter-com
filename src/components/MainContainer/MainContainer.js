import React from 'react';
import styles from './MainContainer.module.scss';

const MainContainer = () => (
  <section className={`${styles.background}`}>
    <main className={`${styles.MainContainer}`}>
      <div>Tu jest main container</div>
    </main>
  </section>
);

export default MainContainer;
