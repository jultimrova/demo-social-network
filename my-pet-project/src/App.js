import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

import Users from "./components/Users/Users";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Sidebar state={props.state.sidebar.friends}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={ () => <Profile
                               state={props.state.profilePage} /> }/>
                    <Route path='/dialogs'
                           render={ () => <Dialogs
                               state={props.state.dialogsPage} /> }/>
                    <Route path='/users'
                           render={ () => <Users/> }/>
                    <Route path='/news'
                           render={ () => <News/> }/>
                    <Route path='/music'
                           render={ () => <Music/> }/>
                    <Route path='/settings'
                           ender={ () => <Settings/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
