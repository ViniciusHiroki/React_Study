import { FooterLink } from 'react-router-dom';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Escreva o que está pensando!</h3>
      <p>Mini Blog 2023</p>
    </footer>
  )
}

export default Footer