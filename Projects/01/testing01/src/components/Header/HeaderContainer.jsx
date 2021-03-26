import { connect } from "react-redux";
import { logIn } from "../../redux/authReducer";
import React from "react";
import Header from "./Header";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.logIn();
    }

    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { logIn })(HeaderContainer);