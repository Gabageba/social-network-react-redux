import React from 'react'
import styles from '../NavbarProfileMenu.module.css'

const NavbarProfileMenuLink = ({icon, text}) => {
  return (
    <div>
      <div className={styles.links}>
        {icon}
        <div>{text}</div>
      </div>
    </div>
  )
}

export default NavbarProfileMenuLink