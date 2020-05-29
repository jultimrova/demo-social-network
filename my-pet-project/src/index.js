import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: 'NiKo'},
    {id: 2, name: 'Dasha'},
    {id: 3, name: 'Julia'},
    {id: 4, name: 'Mark'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hi, how are you?'},
    {id: 3, message: 'What is your status?'},
    {id: 4, message: 'Hey'}
]

let posts = [
    {id: 1, likes: 10, message: 'Hi'},
    {id: 2, likes: 30, message: 'My first post'},
    {id: 3, likes: 20, message: 'What are you doing now?'},
    {id: 4, likes: 100, message: 'Hi again'}
]

ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts} />
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
