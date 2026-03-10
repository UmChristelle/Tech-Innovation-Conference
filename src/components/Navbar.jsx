import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>TECH<span>CONF</span></Link>
      <span className={styles.tag}>2025</span>
    </nav>
  )
}