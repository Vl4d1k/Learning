import { getAuthData, login, logout } from "../api/api"
import { stopSubmit } from "redux-form"

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
      let isAuth = action.data.id ? true : false
      return {
        ...state,
        ...action.data,
        isAuth
      };
    default:
      return state
  }
}

export const setAuthUserData = (data) => { return { type: 'SET_USER_DATA', data } }

export const loginThunkCreator = (formData) => {
  return async (dispatch) => {
    let data = await login(formData)
    console.log("loginThunkCreator: ", data)
    if (data.resultCode === 0)
      dispatch(setAuthUserDataThunk())
    else dispatch(stopSubmit("login", { _error: <span className="text-red-500 italic text-sm font-bold mb-2">Email OR Password is wrong.</span> }))
  }
}

export const logoutThunkCreator = () => {
  return async (dispatch) => {
    let data = await logout()

    console.log("logoutThunkCreator: ", data)
    if (data.resultCode === 0)
      dispatch(setAuthUserData({ id: null, email: null, login: null }))

  }
}

export const setAuthUserDataThunk = () => async (dispatch) => {
  let data = await getAuthData()

  if (data.resultCode === 0)
    dispatch(setAuthUserData(data.data))
  console.log("AuthData: ", data)
}


export default authReducer;