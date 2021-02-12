const UNFOLLOW = 'UNFOLLOW'
const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
  users: []
}

const usersReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case FOLLOW:
      return {...state, 
        users: [...state.users.map(element =>
          element.id === action.user_id ?
          { ...element, isFollowed: true } :
          { ...element })]
      };
    case UNFOLLOW:
      return {...state, 
        users: [...state.users.map(element =>
          element.id === action.user_id ?
          { ...element, isFollowed: false } :
          { ...element })]
      };
    case SET_USERS:
      return { ...state, users: [ ...state.users, ...action.users] };
    default:
      return state
  }

}

export const followAC = (user_id) => { return { type: 'FOLLOW', user_id } }

export const unfollowAC = (user_id) => { return { type: 'UNFOLLOW', user_id } }

export const setUsersAC = (users) => { return { type: 'SET-USERS', users } }

export default usersReducer;