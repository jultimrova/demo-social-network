import React from 'react';
import s from './../MyPosts/MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = ({posts}) => {

    let postsElements = posts
        .map(post => <Post message={post.message} likes={post.likes}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return (
        <div className={s.postsContainer}>
            <h3>My Posts</h3>
            <div>
                <textarea ref={newPostElement}>Enter post</textarea>
                <div>
                    <button onClick={addPost}>Add Post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;