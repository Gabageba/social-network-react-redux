import React from 'react'
import styles from './ProfilePage.module.css'
import Avatar from './Avatar/Avatar'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import NewPostContainer from '../../components/NewPost/NewPostContainer'

const ProfilePage = ({profile, store}) => {

  return (
    <div className={styles.profile}>
      <Avatar/>
      <div className={styles.rightBlock}>
        <ProfileInfo/>
        <NewPostContainer store={store}/>
        <MyPosts postData={profile.postData}/>
      </div>
    </div>
  )
}

export default ProfilePage