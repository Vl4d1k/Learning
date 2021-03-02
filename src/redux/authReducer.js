import {getAuthData} from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      };
    default:
      return state
  }
}

export const setAuthUserData = (data) => { return { type: 'SET_USER_DATA', data } }

export const setAuthUserDataThunk = () => {
  return (dispatch) => {
    getAuthData()
      .then(data => {
        if (data.resultCode === 0)
          dispatch(setAuthUserData(data.data))
        console.log("AuthData: ", data)
      }
    )
  }
}


export default authReducer;