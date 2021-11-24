import React from 'react';
import styles from './LinkButton.module.scss';

const LinkButton = ({ linksData: { site, url } }) => (
  <div>
    <a className={`${styles.LinkButton}`} href={url}>
      {site}
    </a>
  </div>
);

export default LinkButton;
