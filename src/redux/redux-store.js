import {createStore, combineReducers} from "redux"
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
  })

let store = createStore(reducers);

export default store;