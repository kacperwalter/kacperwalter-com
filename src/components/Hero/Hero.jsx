import styles from './Hero.module.scss'
import kwLogo from '../../../public/kacperwalter-logo.svg'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <header className={styles.header}>
        <img className={styles.logo} src={kwLogo} />
        <h1 className={styles.heading}>Frontend software developer</h1>
      </header>

      <article className={styles.description}>
        <h2 className={styles.caption}>
          Hi there 👋 I'm Kacper and I am front-ending for a living. Let's get in touch!
        </h2>
        <a className={styles.link} href="#">GitHub</a>
        <a className={styles.link} href="#">GitHub</a>
        <a className={styles.link} href="#">GitHub</a>
      </article>
    </section>
  )
}

export default Hero