import Dialog from "./Dialog"
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from '../../../redux/messagesReducer'


let DialogContainer = (props) => {

  let onMessageChange = (text) => {
    props.dispatch(updateNewMessageTextActionCreator(props.dialog.id, text))
  }

  let onSendMessageClick = () => {
    props.dispatch(sendMessageActionCreator(props.dialog.id))
  }

  function compare( a, b ) {
    if ( a.date < b.date ){
      return -1;
    }
    else if ( a.date > b.date ){
      return 1;
    }
    return 0;
  }

  let messages = props.dialog.messages.sort( compare )

  

  return <Dialog messages={messages} dialog={props.dialog} updateNewMessageTextActionCreator={onMessageChange} sendMessageActionCreator={onSendMessageClick}/>
}

export default DialogContainer