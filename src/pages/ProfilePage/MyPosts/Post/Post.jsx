import React from 'react'
import styles from './Post.module.css'

const Post = ({name, avatar, message}) => {
  return (
    <div className={`contentBlock ${styles.postBlock}`}>
      <div className={styles.user}>
        <img className={styles.avatar} src={avatar} alt=""/>
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.date}>13 апреля 2022</p>
        </div>
      </div>
      <p className={styles.content}>{message}</p>
    </div>
  )
}

export default Post