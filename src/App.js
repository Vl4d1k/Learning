// import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Profile from './components/ProfilePage/Profile'
import Messages from './components/MessagesPage/Messages'
import Users from './components/UsersPage/Users'
import DialogContainer from './components/MessagesPage/Dialog/DialogContainer';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="bg-gray-800 font-sans leading-normal tracking-normal">

        <div className="flex flex-col md:flex-row" >
          
          <Sidebar />
          
          <Route path='/profile' render={ () => <Profile /> } />
          <Route path='/messages' exact render={ () => <Messages /> }  />
          <Route path='/users' render={ () => <Users /> } />

          <Route path={'/messages/:id'} exact render={ () => <DialogContainer /> }/>
          
        </div>

      </div>
    </BrowserRouter>
    
  );
}

export default App;
