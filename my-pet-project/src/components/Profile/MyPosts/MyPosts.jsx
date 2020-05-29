import React from 'react';
import s from './../MyPosts/MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = ({posts}) => {

    let postsElements = posts
        .map(post => <Post message={post.message} likes={post.likes}/>)

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
                        {postsElements}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;