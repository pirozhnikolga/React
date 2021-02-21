import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <img className={s.content_header_img} alt='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUJD0DgCxdTDAbvk6u3gVm25AqOS6Ksnt9Q&usqp=CAU' />
            <div  className={s.profileDescription}>
                <div>
                    <img className={s.mini_logo} alt='mini-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQ179Ewtp_zAcSw2HGEZm9cPcy_T2Td-Rtw&usqp=CAU' />
                    <div>Description</div>
                </div>
                <MyPostsContainer store={props.store}/>
            </div>
        </div>
    )
}

export default Profile;