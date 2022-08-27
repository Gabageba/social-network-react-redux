import React from 'react'
import styles from './Dialog.module.css'
import {NavLink} from 'react-router-dom'
import {DIALOGS_ROUTE} from '../../../../utils/const'

const Dialog = ({img, name, userId}) => {

  const SelectedLink = () => {
    return (
      select => select.isActive ? styles.active : styles.dialog
    )
  }

  return (
    <NavLink to={`${DIALOGS_ROUTE}/${userId}`} className={SelectedLink()}>
      <img src={img} alt="" className={styles.image}/>
      <span className={styles.name}>{name}</span>
    </NavLink>
  )
}

export default Dialog