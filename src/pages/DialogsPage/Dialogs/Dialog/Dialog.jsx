import React from 'react'
import styles from './Dialog.module.css'
import {NavLink} from 'react-router-dom'
import {DIALOGS_ROUTE} from '../../../../utils/const'

const Dialog = ({img, name, userId}) => {

  const SelectedLink = () => {
    return (select => select.isActive ? styles.active : styles.dialog)
  }

  return (
    <NavLink to={`${DIALOGS_ROUTE}/${userId}`} className={SelectedLink()}>
    <div style={{display: 'flex'}}>
      <img src={img} alt="" className={styles.image}/>
      <span>
        <h5 className={styles.name}>{name}</h5>
        <p className={styles.message}>{'Сообщение'}</p>
      </span>
    </div>
  </NavLink>
  )
}

export default Dialog