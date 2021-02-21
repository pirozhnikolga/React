import React from "react"
import { updateNewPostMessageActionCreator, addPostActionCreator } from "./../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let updateNewPostMessage = (text) => {
        props.store.dispatch(updateNewPostMessageActionCreator(text));
    };

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    return (
        <MyPosts addPost={addPost} updateNewPostMessage={updateNewPostMessage} posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;