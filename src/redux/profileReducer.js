const ADD_POST = 'ADD-POST'
const UPDATE_NAME = 'UPDATE-NAME'

const profileReducer = (state, action) => {
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

export default profileReducer;