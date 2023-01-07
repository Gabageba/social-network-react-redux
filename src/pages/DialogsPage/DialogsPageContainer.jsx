import {connect} from 'react-redux'
import {sendMessage, updateNewMessageText} from '../../redux/dialogsReducer'
import DialogsPage from './DialogsPage'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'


const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogs.dialogsData,
    messagesData: state.dialogs.messagesData,
    newMessageText: state.dialogs.newMessageText,
  }
}

const AuthRedirectComponent = withAuthRedirect(DialogsPage)



const DialogsPageContainer = connect(mapStateToProps, {
  sendMessage, updateNewMessageText
})(AuthRedirectComponent)

export default DialogsPageContainer