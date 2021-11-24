import React from 'react';
import styles from './Description.module.scss';

const Description = (props) => (
  <div className={`${styles.Description}`}>
    <p className={`${styles.Paragraph}`}>{props.text}</p>
  </div>
);

export default Description;
