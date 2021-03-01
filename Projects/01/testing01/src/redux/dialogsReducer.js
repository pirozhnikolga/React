const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    dialogs: [
        { id: "1", name: "Dimych", photo: "data:image/png;base64,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" },
        { id: "2", name: "Andrew", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrrX_9iANDm2mE-gZvxVo7xN0-hqwhf-yJmw&usqp=CAU" },
        { id: "3", name: "Masha", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9hdPXLa_w23gMR9zrVwrewSLEGV2xuyNlNw&usqp=CAU" },
        { id: "4", name: "Sveta", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJBekKMdzDiywHq0HKWbcyCI6m7n31nkG3A&usqp=CAU" }
    ],
    messages: [
        { text: "Hi" },
        { text: "How are you?" },
        { text: "Yo" },
        { text: "Yo" }
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {

            let stateCopy = { ...state };
            stateCopy.newMessageText = action.text;

            return stateCopy;
        }
        case ADD_MESSAGE: {

            if (state.newMessageText === "") {
                alert("There is no anything to add.");
                return state;
            }

            let newMessage = {
                text: state.newMessageText
            };

            let stateCopy = { ...state };
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = "";

            return stateCopy;
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