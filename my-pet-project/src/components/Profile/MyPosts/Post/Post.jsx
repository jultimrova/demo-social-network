import React from 'react';
import s from './../Post/Post.module.css';

const Post = ({message, likes}) => {
    return (
        <div className={s.item}>
            <img
                src="https://pbs.twimg.com/profile_images/1258893227945590785/thQllzB0_400x400.jpg"
                alt=""/>
            {message}
            <div>
                <span>Likes: {likes}</span>
            </div>
        </div>
    )
}

export default Post;