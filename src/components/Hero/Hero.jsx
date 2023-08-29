import styles from './Hero.module.scss'
import kwLogo from '../../assets/kacperwalter-logo.svg'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

const Hero = () => {
  return (
    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
      <section className={styles.hero}>
      <MouseParallaxChild factorX={0.3} factorY={0.5}>
        <header className={styles.header}>
          <img className={styles.logo} src={kwLogo} />
          <h1 className={styles.heading}>Frontend software developer</h1>
        </header>
      </MouseParallaxChild>

      <MouseParallaxChild factorX={0.6} factorY={0.2}>
        <article className={styles.description}>
          <h2 className={styles.caption}>
            Hi there 👋 I'm Kacper and I am front-ending for a living. Let's get in touch!
          </h2>
          <a className={styles.link} href="https://github.com/kacperwalter">GitHub</a>
          <a className={styles.link} href="https://www.linkedin.com/in/kacper-walter/">Linkedin</a>
          <a className={styles.link} href="https://instagram.com/wacperkalter?igshid=OGQ5ZDc2ODk2ZA==">Instagram</a>
        </article>
      </MouseParallaxChild>
      </section>
    </MouseParallaxContainer>
  )
}

export default Hero