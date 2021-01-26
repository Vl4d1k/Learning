import React from "react"
import Posts from "./Posts"
import {changePostNameActionCreator, addPostActionCreator} from '../../../redux/profileReducer'

const PostsContainer = (props) => {

  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  let onDataChange = (text) =>{
    props.store.dispatch(changePostNameActionCreator(text))
  }

  let state = props.store.getState()

  return (<Posts posts={state.profilePage.posts} newPostName={state.newPostName} updateNewPostText={onDataChange} addPost={addPost} />)
}

export default PostsContainer;