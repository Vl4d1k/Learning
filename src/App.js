// import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Profile from './components/ProfilePage/Profile'
import Messages from './components/MessagesPage/Messages'
import DialogContainer from './components/MessagesPage/Dialog/DialogContainer';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="bg-gray-800 font-sans leading-normal tracking-normal">
        <div className="flex flex-col md:flex-row" >
          <Sidebar />
          
          <Route path='/profile' render={ () => <Profile store={props.store}/> } />
          <Route path='/messages' exact render={ () => <Messages store={props.store} /> }  />
          
          {props.store.getState().messagesPage.dialogs.map( dialog => (

            <Route path={'/messages/' + dialog.id}
              exact 
              render={ () => <DialogContainer dispatch={props.store.dispatch} dialog={dialog}/> }
            >
            </Route>

          ) )}
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
