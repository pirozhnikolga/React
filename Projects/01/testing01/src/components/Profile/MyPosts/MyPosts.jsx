import React from "react"
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.posts.posts.map(p => < Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let updateNewPostMessage = () => {
        let text = newPostElement.current.value;
        props.updateNewPostMessage(text);
    };

    return (
        <div>
            <div>
                <h4>My posts</h4>
            </div>
            <div>
                <textarea ref={newPostElement} onChange={updateNewPostMessage} value={props.newPostText}/>
                <div>
                    <button onClick={props.addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;