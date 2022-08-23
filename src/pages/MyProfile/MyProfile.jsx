import React from 'react'
import styles from './MyProfile.module.css'

const MyProfile = () => {
  return (
    <div className={styles.profile}>
      <div>
        <img className={styles.banner} src="https://wallpaperaccess.com/full/1329171.jpg" alt=""/>
      </div>
      <div>ava + description</div>
      <div>
        My post
        <div>new post</div>
        <div>post 1</div>
        <div>post 2</div>
      </div>
    </div>
  )
}

export default MyProfile