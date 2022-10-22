import React from 'react'
import styles from './Page.module.css'

const Page = ({name, currentPage, onPageChanged}) => {
  return (
    <div className={`${styles.pageButton} ${currentPage === name && styles.pageButtonActive}`}
         onClick={() => onPageChanged(name)} >
      <p>{name}</p>
    </div>
  )
}

export default Page