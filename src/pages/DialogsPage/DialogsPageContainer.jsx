import {connect} from 'react-redux'
import {sendMessage, updateNewMessageText} from '../../redux/dialogsReducer'
import DialogsPage from './DialogsPage'


const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogs.dialogsData,
    messagesData: state.dialogs.messagesData,
    newMessageText: state.dialogs.newMessageText
  }
}

const DialogsPageContainer = connect(mapStateToProps, {
  sendMessage, updateNewMessageText
})(DialogsPage)

export default DialogsPageContainer