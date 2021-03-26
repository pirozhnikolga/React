import { usersAPI } from "./../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_FOLLOWING = "TOGGLE_FOLLOWING";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";

let initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    followingInProgress: [],
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            };
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            };
        }
        case TOGGLE_FOLLOWING: {
            return {
                ...state,
                followingInProgress: state.followingInProgress.some(id => id === action.userId)
                    ? state.followingInProgress.filter(id => id !== action.userId)
                    : [...state.followingInProgress, action.userId]
            };
        }
        case TOGGLE_FETCHING: {
            return {
                ...state,
                isFetching: !state.isFetching
            };
        }
        default: return state;
    }
}

const followAC = (userId) => ({ type: FOLLOW, userId: userId });
const unfollowAC = (userId) => ({ type: UNFOLLOW, userId: userId });
const setUsersAC = (users) => ({ type: SET_USERS, users: users });
const setTotalUsersCountAC = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
const toggleFollowingAC = (userId) => ({ type: TOGGLE_FOLLOWING, userId });
const toggleFetchingAC = () => ({ type: TOGGLE_FETCHING });

export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {

        dispatch(toggleFetchingAC());

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsersAC(data.items));
                dispatch(setTotalUsersCountAC(data.totalCount));

                dispatch(toggleFetchingAC());
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {

        dispatch(toggleFollowingAC(userId));

        usersAPI.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowAC(userId))
                }
                dispatch(toggleFollowingAC(userId));
            }
            )
    }
}

export const follow = (userId) => {
    return (dispatch) => {

        dispatch(toggleFollowingAC(userId));

        usersAPI.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followAC(userId))
                }
                dispatch(toggleFollowingAC(userId));
            }
            )
    }
}

export default usersReducer;