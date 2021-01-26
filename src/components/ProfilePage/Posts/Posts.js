import OnePost from './OnePost'
import React from "react"
import {changePostNameActionCreator, addPostActionCreator} from '../../../redux/profileReducer'

const Posts = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost()
  }

  let onDataChange = () =>{
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className="flex flex-wrap  justify-center justify-around" >
      
      <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
        My Posts:
      </h3>

      <textarea value={props.newPostName} onChange={onDataChange} ref={newPostElement} className="w-full px-3 py-2 m-4 text-gray-700 border rounded-lg focus:outline-none" rows="3"/>
      
      <button onClick={ addPost } className="flex justify-center border-2 border-blue-500 rounded-lg font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
        Send
      </button>

      {props.posts.map(post => (<OnePost key={post.id} postName={post.name} /> ))}

    </div>
  )
}

export default Posts;