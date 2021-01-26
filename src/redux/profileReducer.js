const ADD_POST = 'ADD-POST'
const UPDATE_NAME = 'UPDATE-NAME'

let initialState = {
  posts: [
    { id: 1, name: "First Post" },
    { id: 2, name: "Second Post" },
  ],
  newPostName: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: Math.floor(Math.random() * 100 + 1),
        name: state.newPostName
      }
      state.posts.push(newPost)
      break;

    case UPDATE_NAME:
      state.newPostName = action.name
      break;

    default:
      return state
  }
  return state
}

export const addPostActionCreator = () => {
  return { type: 'ADD-POST' }
}

export const changePostNameActionCreator = (text) => {
  return { type: 'UPDATE-NAME', name: text }
}

export default profileReducer;