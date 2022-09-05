import React from 'react'
import styles from './Post.module.css'

const Post = ({name, avatar, message}) => {
  return (
    <div className={`contentBlock ${styles.postBlock}`}>
      <div className={styles.user}>
        <img className={styles.avatar} src={avatar} alt=""/>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.content}>{message}</div>
    </div>
  )
}

export default Post