import React from 'react'
import styles from './NewPost.module.css'

const NewPost = ({updateNewPostText, addPost, newPostText}) => {
  return (
    <div className={`${styles.newPost} contentBlock`}>
      <div style={{display: 'flex'}}>
        <img className={styles.avatar} src='https://i.pinimg.com/736x/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg' alt="Avatar"/>
        <textarea  placeholder={'Что нового чел?'}
                   className={styles.input}
                   value={newPostText}
                   onChange={e => updateNewPostText(e.target.value)}/>
      </div>
      <div style={{textAlign: 'right'}}>
        <button className={styles.postButton} onClick={addPost}>Опубликовать</button>
      </div>

    </div>
  )
}

export default NewPost