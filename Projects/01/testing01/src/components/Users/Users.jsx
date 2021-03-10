import s from "./Users.module.css";
import noUserImg from "../../assets/images/no-user.png"

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
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                    }
                </div>
            </div>
            )}
        </div>
    )
}

export default Users;