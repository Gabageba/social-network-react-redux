import React from 'react'
import AddFriendSvg from '../../../components/svgFiles/AddFriendSvg'
import styles from './UserCard.module.css'
import DeleteFriendSvg from '../../../components/svgFiles/deleteFriendSvg'
import noImage from '../../../assets/noImageLarge.png'

const UserCard = ({user, unfollow, follow}) => {
  return (
    <div className={styles.userCard}>
      <img width={160} height={160} style={{borderRadius: '3px'}}
           src={user.photos.large !== null ? user.photos.large : noImage} alt="Avatar"/>
      <div className={styles.infoBlock}>
        <p className={styles.name}>{user.name}</p>
        {
          user.followed
            ? <div className={styles.button} onClick={() => unfollow(user.id)}>
              <DeleteFriendSvg/>
            </div>
            : <div className={styles.button} onClick={() => follow(user.id)}>
              <AddFriendSvg/>
            </div>

        }
      </div>
    </div>
  )
}

export default UserCard