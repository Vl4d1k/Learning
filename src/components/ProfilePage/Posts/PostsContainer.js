import Posts from "./Posts"
import {addPostActionCreator} from '../../../redux/profileReducer'
import {connect} from "react-redux"

let mapStateToProps =  (state) => {
  return {
    profileData: state.profilePage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postName) => {
      dispatch(addPostActionCreator(postName))
    }
  }
}

let SuperPostsComponent = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default SuperPostsComponent;


// const PostsContainer = (props) => {

//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator())
//   }

//   let onDataChange = (text) =>{
//     props.store.dispatch(changePostNameActionCreator(text))
//   }

//   let state = props.store.getState()

//   return (<Posts posts={state.profilePage.posts} newPostName={state.newPostName} updateNewPostText={onDataChange} addPost={addPost} />)

// }