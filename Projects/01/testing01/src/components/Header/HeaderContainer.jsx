import { authAPI } from "../../api/api";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";
import React from "react";
import Header from "./Header";

class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.logIn()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data.id, data.data.email, data.data.login)
                }
            })
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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);