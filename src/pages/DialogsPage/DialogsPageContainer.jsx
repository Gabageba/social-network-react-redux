import {connect} from 'react-redux'
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogsReducer'
import DialogsPage from './DialogsPage'


const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogs.dialogsData,
    messagesData: state.dialogs.messagesData,
    newMessageText: state.dialogs.newMessageText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(sendMessageActionCreator()),
    updateNewMessageText: (text) => dispatch(updateNewMessageTextActionCreator(text))
  }
}

const DialogsPageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsPage)

export default DialogsPageContainer