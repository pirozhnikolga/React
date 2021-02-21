const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_MESSAGE = "UPDATE-NEW-POST-MESSAGE";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.newPostText === "") {
                alert("There is no anything to add.");
                return state;
            }

            let newPost = {
                message: state.newPostText,
                likesCount: 0
            };

            state.posts.push(newPost);
            state.newPostText = "";

            return state;
        }
        case UPDATE_NEW_POST_MESSAGE: {

            state.newPostText = action.text;

            return state;
        }
        default: return state;
    }
}

export const addPostActionCreator = () => {
    return { type: ADD_POST };
}

export const updateNewPostMessageActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_MESSAGE, text: text };
}

export default profileReducer;