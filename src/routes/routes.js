import {DIALOGS_ROUTE, MY_PROFILE_ROUTE, USERS_ROUTE} from '../utils/const'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import DialogsPage from '../pages/DialogsPage/DialogsPage'
import FriendsPage from '../pages/FriendsPage/FriendsPage'


export const publicRoutes = [
  {
    path: MY_PROFILE_ROUTE,
    element: <ProfilePage/>
  },
  {
    path: DIALOGS_ROUTE,
    element: <DialogsPage/>
  },
  {
    path: USERS_ROUTE,
    element: <FriendsPage/>
  }
]