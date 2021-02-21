const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

const dialogsReducer = (state, action) => {
    debugger;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.text;
            return state;
        }
        case ADD_MESSAGE: {
            if (state.newMessageText === "") {
                alert("There is no anything to add.");
                return state;
            }

            let newMessage = {
                text: state.newMessageText
            };

            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        }
        default: return state;
    }
}

export const addMessageActionCreator = () => {
    return { type: ADD_MESSAGE };
}

export const updateNewMessageTextActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, text: text };
}

export default dialogsReducer;