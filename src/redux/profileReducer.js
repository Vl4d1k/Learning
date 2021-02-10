const ADD_POST = 'ADD-POST'
const UPDATE_NAME = 'UPDATE-NAME'

let initialState = {
  posts: [
    { id: 1, name: "First Post" },
    { id: 2, name: "Second Post" },
  ],
  newPostName: ""
}

const profileReducer = (state = initialState, action) => {
  let stateCopy = {...state, posts: [...state.posts]}
  
  switch (action.type) {

    case ADD_POST:
      let newPost = {
        id: Math.floor(Math.random() * 100 + 1),
        name: state.newPostName
      }
      stateCopy.posts.push(newPost)
      stateCopy.newPostName = ""
      //debugger
      return stateCopy
    case UPDATE_NAME:
      stateCopy.newPostName = action.name
      return stateCopy 
    default:
      return stateCopy
  }
}

export const addPostActionCreator = () => {
  return { type: 'ADD-POST' }
}

export const changePostNameActionCreator = (text) => {
  return { type: 'UPDATE-NAME', name: text }
}

export default profileReducer;