import React from 'react';
import s from './../MyPosts/MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsContainer}>
            <h3>My Posts</h3>
            <div className={s.postsContainer}>
                <div>
                    <textarea>Enter post body</textarea>
                    <div>
                        <button>Add Post</button>
                        <button>Remove</button>
                    </div>
                    <div className={s.posts}>
                        <Post message='Hi' likes='10'/>
                        <Post message='My first post' likes='30'/>
                        <Post message='What are you doing now?' likes='20'/>
                        <Post message='Hi again' likes='100'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;