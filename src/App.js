import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import Messages from './components/Messages'
import Dialog from './components/Dialog'

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="bg-gray-800 font-sans leading-normal tracking-normal">
        <div className="flex flex-col md:flex-row" >
          <Sidebar />
          <Route path='/profile' render={ () => <Profile dispatch={props.dispatch} state={props.state.profilePage} /> } />
          <Route path='/messages' exact render={ () => <Messages state={props.state.messagesPage} /> }  />

          debugger

          {props.state.messagesPage.dialogs.map( dialog => (
            
            <Route path={'/messages/' + dialog.id}
              exact render={ () => <Dialog dispatch={props.dispatch} newMessageText={dialog.newMessageText} chat_id={dialog.id} name={dialog.name} photo={dialog.photo} messages={dialog.messages}/> }
            >
            </Route>

          ) )}
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
