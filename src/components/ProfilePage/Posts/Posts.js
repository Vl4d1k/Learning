import OnePost from './OnePost'
import React from "react"
import { Field, reduxForm } from 'redux-form'

const CreatePostForm = (props) => {
  return (
    <form className="w-full flex flex-wrap justify-center" onSubmit={props.handleSubmit}>
      <Field className="w-full px-3 py-2 m-4 text-gray-700 border rounded-lg focus:outline-none" name="postName" placeholder="Enter name of post" component="textarea" type="text" />
      <button className="flex justify-center border-2 border-blue-500 rounded-lg font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white mr-6">
        Create
      </button>
    </form>
  );
}

const CreatePostReduxForm = reduxForm({form: "createPostForm"})(CreatePostForm)

const Posts = (props) => {

  let addPost = (values) => {
    console.log(values)
    props.addPost(values.postName)
  }

  console.log("Render Posts")

  return (
    <div className="w-full flex flex-wrap justify-center" >

      <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
        My Posts:
      </h3>
      
      <CreatePostReduxForm onSubmit={addPost} />

      {props.profileData.posts.map(post => (<OnePost key={post.id} postName={post.name} />))}

    </div>
  )
}

export default Posts;