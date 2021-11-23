import React from 'react';
import styles from './Header.module.scss';
import logo from 'assets/kacperwalter-logo.svg';
import { headerText } from 'data/texts';

const Header = () => (
  <header className={`layer`}>
    <section>
      <img src={logo} alt="Logo" />
      <h1 className={`${styles.headerText} layer`}>{headerText}</h1>
    </section>
  </header>
);

export default Header;
