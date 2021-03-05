import Dialogs from "./Dialogs"
import { sendMessageActionCreator} from '../../../redux/messagesReducer'
import { connect } from "react-redux"

const mapStateToProps = state => {
  return {
    messagesPage: state.messagesPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: (chat_id, message) => {
      dispatch(sendMessageActionCreator(chat_id, message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)