import s from "./Users.module.css";
import noUserImg from "../../assets/images/no-user.png"
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                        onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
                })}
            </div>
            {props.users.map((u) => <div key={u.id}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small || noUserImg} className={s.ava} alt="ava" />
                    </NavLink>
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
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "a299b21e-d867-4770-87ca-9130dbbe7a0c"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    }
                                    )

                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "a299b21e-d867-4770-87ca-9130dbbe7a0c"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    }
                                    )

                            }}>Follow</button>
                    }
                </div>
            </div>
            )}
        </div>
    )
}

export default Users;