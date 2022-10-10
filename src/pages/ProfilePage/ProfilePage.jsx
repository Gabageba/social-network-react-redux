import React from 'react'
import styles from './ProfilePage.module.css'
import MyPosts from './MyPosts/MyPosts'
import AvatarBlock from './AvatarBlock/AvatarBlock'
import NewPost from './NewPost/NewPost'

const ProfilePage = ({postData, updateNewPostText, addPost, newPostText}) => {

  return (
    <div className={styles.profile}>
      <AvatarBlock/>
      <div className={styles.rightBlock}>
        <NewPost newPostText={newPostText} addPost={addPost} updateNewPostText={updateNewPostText}/>
        <MyPosts postData={postData}/>
      </div>
    </div>
  )
}

export default ProfilePage