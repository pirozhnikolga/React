import s from "./Users.module.css";
import React from "react";
import * as axios from "axios";
import noUserImg from "../../assets/images/no-user.png"

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        })
    }

    render() {
        return (
            <div>
                {this.props.users.map((u) => <div key={u.id}>
                    <div>
                        <img src={u.photos.small || noUserImg} className={s.ava} alt="ava" />
                    </div>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                    <div>
                        {"u.location.city"}
                    </div>
                    <div>
                        {"u.location.country"}
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                </div>
                )}
            </div>
        )
    }
}

export default Users;