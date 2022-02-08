/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable prettier/prettier */
import styles from './header.module.scss'

export default function Header() {
  return(
  <header className={styles.headerContainer}>
        <img src="/images/Logo.svg" alt="logo" />
  </header>
  )
}
