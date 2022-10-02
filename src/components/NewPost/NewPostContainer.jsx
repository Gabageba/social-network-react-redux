import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profileReducer'
import NewPost from './NewPost'

const NewPostContainer = ({store}) => {
  const state = store.getState()

  const onPostChange = (text) => {
    store.dispatch(updateNewPostTextActionCreator(text))
  }
  const addPost = () => {
    store.dispatch(addPostActionCreator())
  }

  return <NewPost updateNewPostText={onPostChange}
            addPost={addPost}
            newPostText={state.profile.newPostText}/>
}

export default NewPostContainer