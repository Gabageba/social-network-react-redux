import React from 'react'
import styles from './ProfilePage.module.css'
import Avatar from './Avatar/Avatar'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import NewPost from '../../components/NewPost/NewPost'

const ProfilePage = ({profile, addPost, updateNewPostText}) => {

  return (
    <div className={styles.profile}>
      <Avatar/>
      <div className={styles.rightBlock}>
        <ProfileInfo/>
        <NewPost addPost={addPost} updateNewPostText={updateNewPostText} newPostText={profile.newPostText}/>
        <MyPosts postData={profile.postData}/>
      </div>
    </div>
  )
}

export default ProfilePage