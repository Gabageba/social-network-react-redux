import React from 'react'
import styles from './Dialog.module.css'
import {NavLink} from 'react-router-dom'
import {DIALOGS_ROUTE} from '../../../../utils/const'

const Dialog = ({img, name, userId}) => {
  return (
    <NavLink to={`${DIALOGS_ROUTE}/${userId}`} className={styles.dialog}>
      <img src={img} alt="" className={styles.image}/>
      <span className={styles.name}>{name}</span>
    </NavLink>
  )
}

export default Dialog