const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_FRIENDS = 'SET_FRIENDS'

const initialState = {
  usersData: [
    {id: 1, name: 'Имя фамилия', followed: true, img: 'https://i.pinimg.com/736x/14/df/bf/14dfbf0e75988b5daa3aaccddba0eb6d.jpg'},
    {id: 2, name: 'No name', followed: false, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyT8tA9swj_AdzROoQIfURlAyPIOc3_n5EBQ&usqp=CAU'},
    {id: 3, name: 'Name', followed: false, img: 'https://aniyuki.com/wp-content/uploads/2022/06/aniyuki-profile-picture-3.jpg'}
  ],
  friendsData: [
    {id: 1, name: 'No name', img: 'https://a.d-cd.net/1a424f2s-960.jpg'},
    {id: 2, name: 'Хер с горы', img: 'https://ru-static.z-dn.net/files/d38/45833edf494ba8dc483de2773abc1bf3.png'},
    {id: 3, name: 'Конч за 500', img: 'https://www.blast.hk/attachments/64805/'},

  ]
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(user => user.id === action.userId
          ? {...user, followed: true}
          : null
       )
      }
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(user => user.id === action.userId
          ? {...user, followed: false}
          : null
        )
      }
    case SET_FRIENDS:
      return {...state, friendsData: [...state.friendsData, ...action.friends]}
    case SET_USERS:
      return {...state, usersData: [...state.usersData, ...action.users]}
    default:
      return state
  }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setFriendsAC = (friends) => ({type: SET_FRIENDS, friends})
