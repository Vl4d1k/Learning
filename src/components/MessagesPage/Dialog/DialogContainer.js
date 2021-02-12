import Dialogs from "./Dialogs"
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from '../../../redux/messagesReducer'
import { connect } from "react-redux"

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

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)