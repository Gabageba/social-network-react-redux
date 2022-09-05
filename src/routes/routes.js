import {DIALOGS_ROUTE, MY_PROFILE_ROUTE} from '../utils/const'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import DialogsPage from '../pages/DialogsPage/DialogsPage'


export const publicRoutes = [
  {
    path: MY_PROFILE_ROUTE,
    element: <ProfilePage/>
  },
  {
    path: DIALOGS_ROUTE,
    element: <DialogsPage/>
  }
]