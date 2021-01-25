const UPDETE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

const messagesReducer = (state, action) => {
  switch (action.type) {

    case UPDETE_NEW_MESSAGE_TEXT:

      state.dialogs.forEach(element => element.id === action.chat_id ? element.newMessageText = action.text : console.log(action.chat_id) )
      break;
    
    case SEND_MESSAGE:
      let text = ""

      state.dialogs.forEach(element => element.id === action.chat_id ? text = element.newMessageText : console.log("") )

      let newMessage = {
        "date": Date.now(),
        "from_id": 214826664,
        "id": Math.floor(Math.random() * 100000 + 1),
        "out": 1,
        "text": text
      }

      state.dialogs.forEach(element => element.id === action.chat_id ? element.messages.push(newMessage) : console.log("") )
      state.dialogs.forEach(element => element.id === action.chat_id ? element.newMessageText = '' : console.log("") )
      break;

    default:
      return state
  }
  return state;
}

export default messagesReducer;