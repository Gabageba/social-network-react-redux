import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '47419082-eeaf-434c-9e6d-50aac0813eae',
  },
})

export const usersAPI = {
  getUsers(pageSize = 9, currentPage = 1) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => response.data)
  },

  getFriends(pageSize = 12, currentPage = 1) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}&friend=true`)
      .then((response) => response.data)
  },

  followUser(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data)
  },

  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then((response) => response.data)
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => response.data)
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },

  updateStatus(status) {
    return instance.put('profile/status', {status})
  }
}

export const authAPI = {
  auth() {
    return instance.get(`auth/me`).then((response) => response.data)
  },
}
