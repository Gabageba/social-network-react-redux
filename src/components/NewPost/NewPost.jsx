import React from 'react'
import styles from './NewPost.module.css'

const NewPost = () => {
  return (
    <div className={`${styles.newPost} contentBlock`}>
      {/*<div contentEditable className={styles.input} ></div>*/}
      <input placeholder={'Что нового чел?'} className={styles.input}/>
    </div>
  )
}

export default NewPost