import { usersAPI } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_FRIENDS = 'SET_FRIENDS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_IS_USER_FETCHING = 'SET_IS_USER_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

const initialState = {
  usersData: [],
  friendsData: [],
  usersPageSize: 9,
  friendsPageSize: 12,
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
        usersData: state.usersData.map((user) =>
          user.id === action.userId ? { ...user, followed: true } : user,
        ),
      }
    case UNFOLLOW:
      return {
        ...state,
        usersData: state.usersData.map((user) =>
          user.id === action.userId ? { ...user, followed: false } : user,
        ),
      }
    case SET_FRIENDS:
      return { ...state, friendsData: action.friends }
    case SET_USERS:
      return { ...state, usersData: action.users }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    case SET_IS_USER_FETCHING:
      return { ...state, isUserFetching: action.isFetching }
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [...state.followingInProgress.filter((id) => id !== action.userId)],
      }
    default:
      return state
  }
}

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setIsUserFetching(true))
    dispatch(setCurrentPage(currentPage))
    usersAPI.getUsers(pageSize, currentPage).then((users) => {
      dispatch(setUsers(users.items))
      dispatch(setTotalCount(users.totalCount))
      dispatch(setIsUserFetching(false))
    })
  }
}

export const getFriends = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setIsUserFetching(true))
    dispatch(setCurrentPage(currentPage))
    usersAPI.getFriends(pageSize, currentPage).then((friends) => {
      dispatch(setFriends(friends.items))
      dispatch(setTotalCount(friends.totalCount))
      dispatch(setIsUserFetching(false))
    })
  }
}

export const followUser = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    !initialState.followingInProgress.some((id) => id === userId) &&
      usersAPI
        .followUser(userId)
        .then((response) => {
          if (response.resultCode === 0) {
            dispatch(follow(userId))
          }
        })
        .finally(() => dispatch(toggleFollowingProgress(false, userId)))
  }
}

export const unfollowUser = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    !initialState.followingInProgress.some((id) => id === userId) &&
      usersAPI
        .unfollowUser(userId)
        .then((response) => {
          if (response.resultCode === 0) {
            dispatch(unfollow(userId))
          }
        })
        .finally(() => dispatch(toggleFollowingProgress(false, userId)))
  }
}

const setIsUserFetching = (isFetching) => ({ type: SET_IS_USER_FETCHING, isFetching })
const setUsers = (users) => ({ type: SET_USERS, users })
const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setFriends = (friends) => ({ type: SET_FRIENDS, friends })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  isFetching,
  userId,
})
