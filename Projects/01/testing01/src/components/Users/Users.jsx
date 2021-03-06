import s from "./Users.module.css";
import React from "react";

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: "1", name: "Dimych",
                    followed: true,
                    status: "I'm best of the best",
                    location: {
                        country: "Belarus",
                        city: "Minsk"
                    },
                    photo: "https://yt3.ggpht.com/ytc/AAUvwnjIzZ98emcEKxHyXKjG_sexnQcnAxGXQrWG1psE0Q=s900-c-k-c0x00ffffff-no-rj"
                },
                {
                    id: "2", name: "Andrew",
                    followed: true,
                    status: "The prietty one",
                    location: {
                        country: "Belarus",
                        city: "Pinsk"
                    },
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrrX_9iANDm2mE-gZvxVo7xN0-hqwhf-yJmw&usqp=CAU"
                },
                {
                    id: "3", name: "Masha",
                    followed: false,
                    status: "Yo",
                    location: {
                        country: "Ucraine",
                        city: "Kiev"
                    },
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9hdPXLa_w23gMR9zrVwrewSLEGV2xuyNlNw&usqp=CAU"
                },
                {
                    id: "4", name: "Sveta",
                    followed: false,
                    status: "I love everyone",
                    location: {
                        country: "Russia",
                        city: "Moskow"
                    },
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjJBekKMdzDiywHq0HKWbcyCI6m7n31nkG3A&usqp=CAU"
                }
            ]
        );
    }

    return (
        <div>
            {props.users.map((u) => <div key={u.id}>
                    <div>
                        <img src={u.photo} alt="ava" width="100px" height="100px" />
                    </div>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                    <div>
                        {u.location.city}
                    </div>
                    <div>
                        {u.location.country}
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

export default Users;