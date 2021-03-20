import * as axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";
import React from "react";
import Header from "./Header";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login)
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