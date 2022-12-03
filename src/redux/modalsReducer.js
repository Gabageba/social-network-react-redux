const SET_NAVBAR_PROFILE_MENU_VISIBLE = 'SET_NAVBAR_PROFILE_MENU_VISIBLE'

const initialState = {
  navbarProfileMenuVisible: false
}


export const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAVBAR_PROFILE_MENU_VISIBLE:
      return {
        ...state,
        navbarProfileMenuVisible: action.visible
      }
    default: return state
  }
}

export const setNavbarProfileMenuVisible = (visible) => ({type: SET_NAVBAR_PROFILE_MENU_VISIBLE, visible})
