import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { updateNewMessageTextActionCreator, addMessageActionCreator } from "./../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (msg) => {
            dispatch(updateNewMessageTextActionCreator(msg));
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);