import React from 'react'
import styles from './UsersPage.module.css'
import UserCard from './UserCard/UserCard'
import Page from '../../components/Page/Page'
import FriendsSwitcher from '../../components/FriendsSwitcher/FriendsSwitcher'

const UsersPage = ({totalCount, currentPage, pageSize, usersData, onPageChanged, follow, unfollow}) => {
  const pagesCount = Math.ceil(totalCount / pageSize)
  const pages = []
  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1)
  }

  const sliceStart = currentPage < 4 ? 0 : currentPage - 4
  const slicedPages = [...pages.slice(sliceStart, sliceStart + 7)]

  return (
    <div className={styles.findFriendPage}>
      <div className={`contentBlock ${styles.users}`}>
        <div className={styles.header}>
          <h4>Поиск друзей</h4>
        </div>
        <input type="text" placeholder={'Введите запрос'} className={styles.input}/>
        <div className={styles.cards}>
          {
            usersData.map(user => {
              return <UserCard key={user.id} user={user} follow={follow} unfollow={unfollow}/>
            })
          }
        </div>
        <div className={styles.pages}>
          {
            currentPage > 4 &&
            <span className={styles.startFinishPage}>
                <Page name={1}
                      currentPage={currentPage}
                      onPageChanged={onPageChanged}/>
                <span>...</span>
              </span>
          }
          {
            slicedPages.map(page => <Page name={page}
                                          currentPage={currentPage}
                                          key={page}
                                          onPageChanged={onPageChanged}/>)
          }
          {
            sliceStart + 7 < pages[pages.length - 1] &&
            <div className={styles.startFinishPage}>
              <span>...</span>
              <Page name={pages.length}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}/>
            </div>
          }
        </div>
      </div>

      <FriendsSwitcher/>
    </div>
  )
}

export default UsersPage