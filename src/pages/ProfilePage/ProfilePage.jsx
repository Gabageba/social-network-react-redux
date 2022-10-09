import React from 'react'
import styles from './ProfilePage.module.css'
import MyPosts from './MyPosts/MyPosts'
import NewPostContainer from '../DialogsPage/NewPost/NewPostContainer'
import AvatarBlock from './AvatarBlock/AvatarBlock'

const ProfilePage = ({profile}) => {

  return (
    <div className={styles.profile}>
      <AvatarBlock/>
      <div className={styles.rightBlock}>
        <NewPostContainer/>
        <MyPosts postData={profile.postData}/>
      </div>
    </div>
  )
}

export default ProfilePage