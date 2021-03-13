import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "./../../redux/profileReducer"
import * as axios from "axios";
import { withRouter } from "react-router-dom";

class ProfileComponent extends React.Component {

    componentDidMount() {
        
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 15693;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithRouterProfileComponent = withRouter(ProfileComponent);

export default connect(mapStateToProps, { setUserProfile })(WithRouterProfileComponent);