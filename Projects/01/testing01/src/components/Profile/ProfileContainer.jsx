import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "./../../redux/profileReducer"
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class ProfileComponent extends React.Component {

    componentDidMount() {
        
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 15693;
        }

        this.props.setUserProfile(userId);
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithRouterProfileComponent = withRouter(ProfileComponent);

export default withAuthRedirect(connect(mapStateToProps, { setUserProfile })(WithRouterProfileComponent));