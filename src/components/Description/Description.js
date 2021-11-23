import React from 'react';
import styles from './Description.module.scss';

const Description = (props) => (
  <div className={`${styles.description}`}>
    <p>{props.text}</p>
  </div>
);

export default Description;
