import s from "./Dialogs.module.css";
import React from "react";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {

    let newMessage = React.createRef();

    let sendMessage = () => {
        let msg = newMessage.current.value;
        alert(msg);
    }

    let messagesElement = props.dialogs.messages.map(m => < Message text={m.text}/>);
    let dialogsElement = props.dialogs.dialogs.map(d => < Dialog id={d.id} name={d.name} photo={d.photo}/>);

    return (
        <div className={s.dialogs}>
            <div>
                <div>
                    <h3>Dialogs</h3>
                </div>
                <div>
                    {dialogsElement}
                </div>
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div>
                    <textarea ref={newMessage}/>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;