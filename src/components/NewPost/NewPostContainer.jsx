import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profileReducer'
import NewPost from './NewPost'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    newPostText: state.profile.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text))
  }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)


export default NewPostContainer