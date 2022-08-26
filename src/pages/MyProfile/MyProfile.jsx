import React from 'react'
import styles from './MyProfile.module.css'
import Avatar from './Avatar/Avatar'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import NewPost from '../../components/NewPost/NewPost'

const MyProfile = () => {
  return (
    <div className={styles.profile}>
      {/*<div>*/}
      {/*  <img className={styles.banner} src="https://wallpaperaccess.com/full/1329171.jpg" alt=""/>*/}
      {/*</div>*/}
      <Avatar/>
      <div className={styles.rightBlock}>
        <ProfileInfo/>
        <NewPost/>
        <MyPosts/>
      </div>
    </div>
  )
}

export default MyProfile