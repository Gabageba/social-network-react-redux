import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <a href="">Мой профиль</a>
      </div>
      <div>
        <a href="">Новости</a>
      </div>
      <div>
        <a href="">Музыка</a>
      </div>
      <div>
        <a href="">Настройки</a>
      </div>
    </nav>
  )
}

export default Navbar