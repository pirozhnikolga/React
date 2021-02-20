import React from "react"
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { updateNewPostMessageActionCreator, addPostActionCreator } from "./../../../redux/store";

const MyPosts = (props) => {

    let postsElement = props.posts.posts.map(p => < Post message={p.message} likesCount={p.likesCount} />);

    let updateNewPostMessage = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostMessageActionCreator(text));
    };

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    return (
        <div>
            <div>
                <h4>My posts</h4>
            </div>
            <div>
                <textarea onChange={updateNewPostMessage} value={props.newPostText}/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;