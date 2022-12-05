const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_FRIENDS = 'SET_FRIENDS'
const DELETE_FRIEND = 'DELETE_FRIEND'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_IS_USER_FETCHING = 'SET_IS_USER_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

const initialState = {
  usersData: [],
  friendsData: [
    {id: 1, name: 'No name', followed: true, img: 'https://a.d-cd.net/1a424f2s-960.jpg'},
    {
      id: 2,
      name: 'Хер с горы',
      followed: true,
      img: 'https://ru-static.z-dn.net/files/d38/45833edf494ba8dc483de2773abc1bf3.png'
    },
    {id: 3, name: 'Конч за 500', followed: true, img: 'https://www.blast.hk/attachments/64805/'},

  ],
  usersPageSize: 9,
  totalCount: 0,
  currentPage: 1,
  isUserFetching: false,
  followingInProgress: [],
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(user =>
          user.id === action.userId
            ? {...user, followed: true}
            : user
        )

      }
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map(user => user.id === action.userId
          ? {...user, followed: false}
          : user
        )
      }
    case DELETE_FRIEND:
      return {
        ...state,
        friendsData: state.friendsData.map(friend => friend.id === action.friendId
          ? {...friend, followed: false}
          : friend
        )
      }
    case SET_FRIENDS:
      return {...state, friendsData: [...state.friendsData, ...action.friends]}
    case SET_USERS:
      return {...state, usersData: action.users}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case SET_TOTAL_COUNT:
      return {...state, totalCount: action.totalCount}
    case SET_IS_USER_FETCHING:
      return {...state, isUserFetching: action.isFetching}
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [...state.followingInProgress
            .filter(id => id !== action.userId)]
      }
    default:
      return state
  }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const deleteFriend = (friendId) => ({type: DELETE_FRIEND, friendId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setFriends = (friends) => ({type: SET_FRIENDS, friends})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const setIsUserFetching = (isFetching) => ({type: SET_IS_USER_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId})
