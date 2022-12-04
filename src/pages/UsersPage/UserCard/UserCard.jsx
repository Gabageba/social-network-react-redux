import React from 'react'
import AddFriendSvg from '../../../components/svgFiles/AddFriendSvg'
import styles from './UserCard.module.css'
import DeleteFriendSvg from '../../../components/svgFiles/deleteFriendSvg'
import noImage from '../../../assets/noImageLarge.png'
import {NavLink} from 'react-router-dom'
import {PROFILE_ROUTE} from '../../../utils/const'
import axios from 'axios'

const UserCard = ({user, unfollow, follow}) => {
  return (
    <div className={styles.userCard}>
      <img width={160} height={160} style={{borderRadius: '3px'}}
           src={user.photos.large !== null ? user.photos.large : noImage} alt="Avatar"/>
      <div className={styles.infoBlock}>
        <NavLink to={`${PROFILE_ROUTE}/${user.id}`} style={{textDecoration: 'none'}}>
          <p className={styles.name}>{user.name}</p>
        </NavLink>
        {
          user.followed
            ? <div className={styles.button} onClick={() => {

              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                withCredentials: true,
                headers: {
                  'API-KEY': '47419082-eeaf-434c-9e6d-50aac0813eae'
                }
              })
                .then(response => {
                  if (response.data.resultCode === 0) {
                    unfollow(user.id)
                  }
                })

            }}>
              <DeleteFriendSvg/>
            </div>
            : <div className={styles.button} onClick={() => {

              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                withCredentials: true,
                headers: {
                  'API-KEY': '47419082-eeaf-434c-9e6d-50aac0813eae'
                }
              })
                .then(response => {
                  if (response.data.resultCode === 0) {
                    follow(user.id)
                  }
                })
            }
            }>
              <AddFriendSvg/>
            </div>

        }
      </div>
    </div>
  )
}

export default UserCard