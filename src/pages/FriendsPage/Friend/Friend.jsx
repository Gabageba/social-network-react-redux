import React from 'react'
import styles from './Friend.module.css'
import defaultAvatar from '../../../assets/noImageSmall.png'
import { NavLink } from 'react-router-dom'
import { PROFILE_ROUTE } from '../../../utils/const'
import { MoreSvg } from '../../../components/svgFiles/MoreSvg'

const Friend = ({ friend }) => {
  return (
    <div className={styles.friendBlock}>
      <div style={{ display: 'flex' }}>
        <img src={friend.photos.small || defaultAvatar} width={80} height={80} alt='avatar' />
        <div className={styles.infoBlock}>
          <NavLink to={`${PROFILE_ROUTE}/${friend.id}`} className={styles.link}>
            {friend.name}
          </NavLink>
          <p>Написать сообщение</p>
        </div>
      </div>
      <div className={styles.more}>
        <MoreSvg />
      </div>
    </div>
  )
}

export default Friend
