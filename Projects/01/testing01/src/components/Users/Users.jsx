import s from "./Users.module.css";
import noUserImg from "../../assets/images/no-user.png"
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";
import loadingImg from "../../assets/images/loading.gif"

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
            {props.isFetching
                ? <img src={loadingImg} alt="loading" />
                : props.users.map((u) => <div key={u.id}>
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
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowing(u.id);
                                usersAPI.unfollow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowing(u.id);
                                    }
                                    )

                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowing(u.id);
                                usersAPI.follow(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowing(u.id);
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