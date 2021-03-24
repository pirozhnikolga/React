import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a299b21e-d867-4770-87ca-9130dbbe7a0c"
    }
});

export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => { return response.data });
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => { return response.data });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => { return response.data });
    }
}

export const authAPI = {

    logIn() {
        return instance.get(`auth/me`)
            .then(response => { return response.data });
    }
}