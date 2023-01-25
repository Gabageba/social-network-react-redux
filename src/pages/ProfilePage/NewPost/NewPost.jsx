import React from 'react'
import styles from './NewPost.module.css'
import {NewPostReduxForm} from './NewPostReduxForm'
import ClickAwayListener from 'react-click-away-listener'

const NewPost = ({addPost, postWriting, setPostWriting}) => {
  const onSubmit = (formData) => {
    addPost(formData.newPostText)
    setPostWriting(false)
  }
  return (
    <>
      {
        postWriting
          ?
          <ClickAwayListener onClickAway={() => setPostWriting(false)} >
            <div style={{marginBottom: '20px'}}>
              <NewPostReduxForm onSubmit={onSubmit}/>
            </div>
          </ClickAwayListener>
          :
          <div className={`${styles.newPost} contentBlock`} onClick={() => setPostWriting(true)}>
            <img className={styles.avatar} src="https://i.pinimg.com/736x/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg"
                 alt="Avatar"/>
            <p className={styles.newPostText}>Что нового чел?</p>
          </div>
      }
    </>
  )
}

export default NewPost