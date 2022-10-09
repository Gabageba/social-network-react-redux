import React from 'react'
import styles from './Header.module.css'
import LogoSvg from '../svgFiles/LogoSvg'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="contentCenter">
        <LogoSvg/>
      </div>
    </header>
  )
}

export default Header