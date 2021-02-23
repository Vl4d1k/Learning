const ADD_POST = 'ADD-POST'
const UPDATE_NAME = 'UPDATE-NAME'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  posts: [
    { id: 1, name: "First Post" },
    { id: 2, name: "Second Post" },
  ],
  newPostName: "",
  profile: null
}

const profileReducer = (state = initialState, action) => {
  console.log("action: ", action)
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: Math.floor(Math.random() * 100 + 1),
        name: state.newPostName
      }
      return { ...state, newPostName: "", posts: [...state.posts.concat(newPost)] }

    case UPDATE_NAME:
      return { ...state, newPostName: action.name }

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }

    default:
      return state
  }

}

export const addPostActionCreator = () => {
  return { type: 'ADD-POST' }
}

export const changePostNameActionCreator = (text) => {
  return { type: 'UPDATE-NAME', name: text }
}

export const setUserProfile = (profile) => {
  return { type: "SET_USER_PROFILE", profile }
}

export default profileReducer;