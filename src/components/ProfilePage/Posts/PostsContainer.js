import Posts from "./Posts"
import {changePostNameActionCreator, addPostActionCreator} from '../../../redux/profileReducer'
import {connect} from "react-redux"

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

let mapStateToProps =  (state) => {
  return {
    posts: state.profilePage.posts, 
    newPostName: state.newPostName
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(changePostNameActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

let SuperPostsComponent = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default SuperPostsComponent;