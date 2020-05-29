import React from 'react';
import s from './../Profile/Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    let posts = [
        {id: 1, likes: 10, message: 'Hi'},
        {id: 2, likes: 30, message: 'My first post'},
        {id: 3, likes: 20, message: 'What are you doing now?'},
        {id: 4, likes: 100, message: 'Hi again'}
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}

export default Profile;