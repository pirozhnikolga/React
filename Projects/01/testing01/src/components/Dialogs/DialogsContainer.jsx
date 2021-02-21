import React from "react";
import { updateNewMessageTextActionCreator, addMessageActionCreator } from "./../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let updateMessageText = (msg) => {
        props.store.dispatch(updateNewMessageTextActionCreator(msg));
    }

    return (
        <Dialogs newMessageText={state.dialogsPage.newMessageText} messages={state.dialogsPage.messages} dialogs={state.dialogsPage.dialogs} updateMessageText={updateMessageText} sendMessage={sendMessage}/>
    )
}

export default DialogsContainer;