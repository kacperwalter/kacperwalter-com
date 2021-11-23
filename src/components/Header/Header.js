import React from 'react';
import PropTypes from 'prop-types';
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

Header.propTypes = {
  props: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }),
};

export default Header;
