import { connect } from "react-redux";
import {
    followAC, setUsersAC, unfollowAC,
    setCurrentPageAC, setTotalUsersCountAC,
    toggleFollowingAC, toggleFetchingAC
} from "../../redux/usersReducer";
import Users from "./Users";
import React from "react";
import { usersAPI } from "../../api/api";

class UsersComponent extends React.Component {

    componentDidMount() {

        this.props.toggleFetching();

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);

                this.props.toggleFetching();
        })
    }

    onPageChanged = (pageNumber) => {

        this.props.setCurrentPage(pageNumber);

        this.props.toggleFetching();

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
            this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);

                this.props.toggleFetching();
        })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
            isFetching={this.props.isFetching}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
            toggleFollowing={this.props.toggleFollowing} />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        followingInProgress: state.usersPage.followingInProgress,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        toggleFollowing: (userId) => {
            dispatch(toggleFollowingAC(userId))
        },
        toggleFetching: () => {
            dispatch(toggleFetchingAC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);