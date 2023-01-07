import React from 'react'
import styles from './ProfilePage.module.css'
import MyPosts from './MyPosts/MyPosts'
import AvatarBlock from './AvatarBlock/AvatarBlock'
import NewPost from './NewPost/NewPost'
import Loader from '../../components/Loader/Loader'
import {Navigate} from 'react-router-dom'
import {LOGIN_ROUTE} from '../../utils/const'

const ProfilePage = ({postData, updateNewPostText, addPost, newPostText, userProfile, isFetching, coverColor, isAuth}) => {

  if (!isAuth) return <Navigate to={LOGIN_ROUTE}/>

  return (
    <div className={styles.profile}>
      {
        isFetching || !userProfile
          ? <Loader size={100} border={10}/>
          : <div>
            <AvatarBlock userProfile={userProfile} coverColor={coverColor}/>
            <div className={styles.rightBlock}>
              <NewPost newPostText={newPostText} addPost={addPost} updateNewPostText={updateNewPostText}/>
              <MyPosts postData={postData}/>
            </div>
          </div>
      }
    </div>
  )
}

export default ProfilePage