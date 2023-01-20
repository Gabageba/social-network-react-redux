import React from 'react'
import styles from './ProfilePage.module.css'
import MyPosts from './MyPosts/MyPosts'
import AvatarBlock from './AvatarBlock/AvatarBlock'
import NewPost from './NewPost/NewPost'
import Loader from '../../components/Loader/Loader'

const ProfilePage = ({postData, addPost, userProfile, isFetching, coverColor, postWriting, setPostWriting, updateStatus, status}) => {



  return (
    <div className={styles.profile}>
      {
        isFetching || !userProfile
          ? <Loader size={100} border={10}/>
          : <div>
            <AvatarBlock userProfile={userProfile}
                         coverColor={coverColor}
                         updateStatus={updateStatus}
                         status={status}
            />
            <div className={styles.rightBlock}>
              <NewPost addPost={addPost}
                       postWriting={postWriting}
                       setPostWriting={setPostWriting}
              />
              <MyPosts postData={postData}/>
            </div>
          </div>
      }
    </div>
  )
}

export default ProfilePage