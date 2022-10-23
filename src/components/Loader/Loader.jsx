import React from 'react'
import styles from './Loader.module.css'

const Loader = ({size, border}) => {
  return (
    <div style={ {display: 'flex', justifyContent: 'center', marginTop: '30px'} }>
      <div className={styles.loader} style={{ width: `${size}px`, height: `${size}px`, borderWidth: `${border}px` }}></div>
    </div>

  )
}

export default Loader