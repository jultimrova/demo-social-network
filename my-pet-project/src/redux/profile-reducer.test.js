import profileReducer, {addPostCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi', likes: 10},
        {id: 2, message: 'My first post', likes: 30},
        {id: 3, message: 'What are you doing now?', likes: 20},
        {id: 4, message: 'Hi again', likes: 100}
    ]
};

it('length of posts should be incremented', () => {
    //test data
    let action = addPostCreator('Hey :)');

    // action
    let newState = profileReducer(state, action);

    //expectations
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
    let action = addPostCreator('Hey :)');

    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe('Hey :)');
});

it('after deleting length of message should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is wrong`, () => {
    let action = deletePost(100);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});


