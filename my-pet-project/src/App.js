import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <ProfileContainer/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
                <Route path='/news'
                       render={() => <News/>}/>
                <Route path='/music'
                       render={() => <Music/>}/>
                <Route path='/settings'
                       ender={() => <Settings/>}/>
            </div>
        </div>
    );
}


export default App;
