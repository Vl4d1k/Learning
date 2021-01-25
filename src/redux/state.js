import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";

let store = {

  _state: {
    profilePage: {
      posts: [
        { id: 1, name: "First Post" },
        { id: 2, name: "Second Post" },
      ],
      newPostName: ''
    },
    messagesPage: {
      dialogs: [
        {
          id: 1, time: "11:26", name: "Jessica Koel", photo: "https://i.imgur.com/aq39RMA.jpg",
          newMessageText: "",
          messages: [
            {
              "date": 1610387607,
              "from_id": 214826664,
              "id": 427660,
              "out": 1,
              "text": "Спасибо большое"
            },
            {
              "date": 1610387550,
              "from_id": 1,
              "id": 427659,
              "out": 0,
              "text": "С днём рождения,братушка!всех благ тебе!"
            },
            {
              "date": 1610295934,
              "from_id": 214826664,
              "id": 427501,
              "out": 1,
              "text": "Та не за что, буду стараться"
            },
            {
              "date": 1610295896,
              "from_id": 1,
              "id": 427500,
              "out": 0,
              "text": "Владик,ты молодец!Спасибо за игру!"
            }
          ]
        },
        { id: 2, time: "12:26", name: "Komeial Bolger", photo: "https://i.imgur.com/eMaYwXn.jpg", 
        newMessageText: "",
        messages: [
          {
            "date": 1610387607,
            "from_id": 214826664,
            "id": 427660,
            "out": 1,
            "text": "Привет, все хорошо"
          },
          {
            "date": 1610387550,
            "from_id": 2,
            "id": 427659,
            "out": 0,
            "text": "Ку, как дела?"
          }
          ]
        },
        { id: 3, time: "8:26", name: "Tamaara Suiale", photo: "https://i.imgur.com/zQZSWrt.jpg",
          newMessageText: "",
          messages: [
            {
              "date": 1610387607,
              "from_id": 214826664,
              "id": 427660,
              "out": 1,
              "text": "Просто супер"
            },
            {
              "date": 1610387550,
              "from_id": 3,
              "id": 427659,
              "out": 0,
              "text": "Как тебе эта песня?"
            }
          ] 
        },
      ],
    },
  },

  _renderEntityTree() {
    console.log("No subscribers")
  },

  subscribe(observer) {
    this._renderEntityTree = observer
  },

  getState() {
    return this._state
  },


  dispatch(action) {
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
  }

}

export const sendMessageActionCreator = (chat_id) => {
  return { type: 'SEND-MESSAGE', chat_id: chat_id }
}

export const updateNewMessageTextActionCreator = (chat_id, text ) => {
  return { type: 'UPDATE-NEW-MESSAGE-TEXT', chat_id: chat_id, text: text }
}

export const addPostActionCreator = () => {
  return { type: 'ADD-POST' }
}

export const changePostNameActionCreator = (text) => {
  return { type: 'UPDATE-NAME', name: text }
}

export default store;