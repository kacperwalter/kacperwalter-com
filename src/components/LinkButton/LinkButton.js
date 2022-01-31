import styles from './LinkButton.module.scss';

const LinkButton = ({ linksData: { site, url = 'testowyurl' } }) => (
  <a className={`${styles.LinkButton}`} href={url}>
    {site}
  </a>
);

export default LinkButton;
