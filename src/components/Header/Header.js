import React from 'react';
import styles from './Header.module.scss';
import logo from 'assets/kacperwalter-logo.svg';

const Header = (props) => (
  <header className={`layer`}>
    <section>
      <img src={logo} alt="Logo" />
      <h1 className={`${styles.headerText} layer`}>{props.text}</h1>
    </section>
  </header>
);

export default Header;
