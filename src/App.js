// import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MyProfile from './components/ProfilePage/MyProfile'
import Messages from './components/MessagesPage/Messages'
import Users from './components/UsersPage/UsersContainer'
import DialogContainer from './components/MessagesPage/Dialog/DialogContainer';
import UsersProfile from "./components/ProfilePage/UserProfileContainer"
import Login from "./components/Login"
import CurrentProfile from "./components/CurrentProfile"
import { initializeApp } from "./redux/appReducer"
import { connect } from "react-redux"
import React, { useEffect } from 'react';
import loader from "./assets/loader.svg"

import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
    useEffect(() => {
        props.initializeApp();
    })
    return (
        props.initialized ? 
        <BrowserRouter >
            <div className="bg-gray-800 font-sans leading-normal tracking-normal" >
                <div className="flex flex-col md:flex-row" >
                    <Sidebar />

                    <Route path='/my_profile' render={() => < MyProfile />} />
                    <Route path='/me' render={() => < CurrentProfile />} />
                    <Route path='/messages' exact render={() => < Messages />} />
                    <Route path='/users' exact component={Users} />
                    <Route path='/login' exact render={() => <Login />} />
                    <Route path='/users/profile/:id' component={UsersProfile} />
                    <Route path='/messages/:id' exact render={() => < DialogContainer />} />

                </div>

            </div>
        </BrowserRouter>
        :
        <img className="mx-auto" src={loader} alt="loader" />

    );
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp} )(App);