import React from 'react';
import s from './../MyPosts/MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {

    const postsElements = props.posts
        .map(post => <Post message={post.message} likes={post.likes}/>);

    const addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsContainer}>
            <h3>My Posts</h3>
            <div>
                <AddPostReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name='newPostText'
                   placeholder='Enter text'
                   validate={[requiredField, maxLength10]}
            />
            <div>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: 'addPostForm'})(AddPostForm);

export default MyPosts;