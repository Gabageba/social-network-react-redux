import {connect} from 'react-redux'
import {sendMessage} from '../../redux/dialogsReducer'
import DialogsPage from './DialogsPage'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'


const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogs.dialogsData,
    messagesData: state.dialogs.messagesData
  }
}

export default compose(
  connect(mapStateToProps, {sendMessage}),
  withAuthRedirect
)(DialogsPage)