// import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MyProfile from './components/ProfilePage/MyProfile'
import Messages from './components/MessagesPage/Messages'
import Users from './components/UsersPage/UsersContainer'
import DialogContainer from './components/MessagesPage/Dialog/DialogContainer';
import UsersProfile from "./components/ProfilePage/UserProfileContainer"
import Login from "./components/Login"

import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {

    return (
        <BrowserRouter >
            <div className="bg-gray-800 font-sans leading-normal tracking-normal" >
                <div className="flex flex-col md:flex-row" >
                    <Sidebar />

                    <Route path='/profile' render={() => < MyProfile />} />
                    <Route path='/messages' exact render={() => < Messages />} />
                    <Route path='/users' exact component={Users} />
                    <Route path='/login' exact render={() => <Login />} />
                    <Route path='/users/profile/:id' component={UsersProfile} />
                    <Route path={'/messages/:id'} exact render={() => < DialogContainer />} />

                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;