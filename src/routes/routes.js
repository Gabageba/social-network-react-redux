import {DIALOGS_ROUTE, MY_PROFILE_ROUTE} from '../utils/const'
import MyProfile from '../pages/MyProfile/MyProfile'
import DialogsPage from '../pages/DialogsPage/DialogsPage'


export const publicRoutes = [
  {
    path: MY_PROFILE_ROUTE,
    element: <MyProfile/>
  },
  {
    path: DIALOGS_ROUTE,
    element: <DialogsPage/>
  }
]