import { usersAPI } from "./../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_MESSAGE = "UPDATE-NEW-POST-MESSAGE";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        { message: "Hi, how are you?", likesCount: 5 },
        { message: "It's my first post", likesCount: 25 },
        { message: "I love you all!", likesCount: 10 },
        { message: "Boaring...", likesCount: 2 }
    ],
    newPostText: "",
    profile: null
}

const profileReducer = (state = initialState, action) => {
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

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_MESSAGE: {
            return {
                ...state,
                newPostText: action.text
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        default: return state;
    }
}

const setUserProfileAC = (profile) => {
    return { type: SET_USER_PROFILE, profile };
}

export const addPostActionCreator = () => {
    return { type: ADD_POST };
}

export const updateNewPostMessageActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_MESSAGE, text: text };
}

export const setUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfileAC(data));
            })
    }
}

export default profileReducer;