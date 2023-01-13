import React from 'react'
import styles from './NewPost.module.css'

const NewPost = ({updateNewPostText, addPost, newPostText, postWriting, setPostWriting}) => {
  return (
    <div className={`${styles.newPost} contentBlock`}>
      {
        postWriting
          ?
          <div>
            <div style={{display: 'flex'}}>
              <img className={styles.avatar}
                   src="https://i.pinimg.com/736x/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg"
                   alt="Avatar"/>
              <textarea placeholder={'Что нового чел?'}
                        autoFocus={true}
                        className={`${styles.input} ${styles.newPostText}`}
                        value={newPostText}
                        onChange={e => updateNewPostText(e.target.value)}/>
            </div>
            <div style={{textAlign: 'right'}}>
              <button className={styles.postButton} onClick={() => {
                addPost()
                setPostWriting()
              }}>Опубликовать</button>
            </div>
          </div>

          :
          <div style={{display: 'flex'}} onClick={setPostWriting}>
            <img className={styles.avatar} src="https://i.pinimg.com/736x/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg"
                 alt="Avatar"/>
            <p className={styles.newPostText}>Что нового чел?</p>
          </div>
      }
    </div>
  )
}

export default NewPost