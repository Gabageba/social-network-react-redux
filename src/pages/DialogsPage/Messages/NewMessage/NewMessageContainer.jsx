import React from 'react'
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../../../redux/dialogsReducer'
import NewMessage from './NewMessage'
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogs.newMessageText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(sendMessageActionCreator()),
    updateNewMessageText: (text) => dispatch(updateNewMessageTextActionCreator(text))
  }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)

export default NewMessageContainer