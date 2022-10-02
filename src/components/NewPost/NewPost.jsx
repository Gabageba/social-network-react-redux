import React from 'react'
import styles from './NewPost.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profileReducer'

const NewPost = ({dispatch, newPostText}) => {



  return (
    <div className={`${styles.newPost} contentBlock`}>
      <div style={{display: 'flex'}}>
        <img className={styles.avatar} src='https://i.pinimg.com/736x/18/ca/6f/18ca6f28ec97d6afb3117d4b6aece2e6.jpg' alt="Avatar"/>
        <textarea  placeholder={'Что нового чел?'}
                   className={styles.input}
                   value={newPostText}
                   onChange={e => dispatch(updateNewPostTextActionCreator(e.target.value))}/>
      </div>
      <div style={{textAlign: 'right'}}>
        <button className={styles.postButton} onClick={() => dispatch(addPostActionCreator())}>Опубликовать</button>
      </div>

    </div>
  )
}

export default NewPost