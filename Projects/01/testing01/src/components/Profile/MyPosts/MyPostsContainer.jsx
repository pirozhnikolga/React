import { connect } from "react-redux";
import { updateNewPostMessageActionCreator, addPostActionCreator } from "./../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostMessage: (text) => {
            dispatch(updateNewPostMessageActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;