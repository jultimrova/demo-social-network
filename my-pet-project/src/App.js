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

const App = ({dialogs, messages, posts}) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile posts={posts}/> }/>
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={dialogs} messages={messages}/> }/>
                    <Route path='/users' render={ () => <Users/> }/>
                    <Route path='/news' render={ () => <News/> }/>
                    <Route path='/music' render={ () => <Music/> }/>
                    <Route path='/settings' render={ () => <Settings/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
