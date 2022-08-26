import React from 'react'
import styles from './Dialog.module.css'

const Dialog = ({img, name}) => {
  return (
    <div className={styles.dialog}>
      <img src={img} alt="" className={styles.image}/>
      <span className={styles.name}>{name}</span>
    </div>
  )
}

export default Dialog