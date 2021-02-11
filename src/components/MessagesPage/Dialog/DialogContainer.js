import Dialogs from "./Dialogs"
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from '../../../redux/messagesReducer'
import { connect } from "react-redux"


// let DialogContainer = (props) => {

//   let onMessageChange = (text) => {
//     props.dispatch(updateNewMessageTextActionCreator(props.dialog.id, text))
//   }

//   let onSendMessageClick = () => {
//     props.dispatch(sendMessageActionCreator(props.dialog.id))
//   }

//   return <Dialogs dialog={props.dialog} updateNewMessageTextActionCreator={onMessageChange} sendMessageActionCreator={onSendMessageClick}/>
// }

const mapStateToProps = state => {
  return {
    messagesPage: state.messagesPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: (chat_id) => {
      dispatch(sendMessageActionCreator(chat_id))
    },
    updateNewMessageText: (chat_id, text) => {
      dispatch(updateNewMessageTextActionCreator(chat_id, text))
    }
  }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogContainer