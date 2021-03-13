import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import needJobImg from "./../../assets/images/need-job.jpg"
import hiredImg from "./../../assets/images/hired.jpg"
import noUserImg from "./../../assets/images/no-user.png"

const Profile = (props) => {

    if (!props.profile) {
        return <></>
    }

    return (
        <div>
            <img className={s.content_header_img} alt='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUJD0DgCxdTDAbvk6u3gVm25AqOS6Ksnt9Q&usqp=CAU' />
            <div  className={s.profileDescription}>
                <div>
                    <h3>{props.profile.fullName}</h3>
                    <img className={s.mini_logo} alt='mini-logo' src={props.profile.photos.small || noUserImg} />
                    <div>{props.profile.aboutMe}</div>
                    <img className={s.mini_logo} alt='looking-for-a-job' src={props.profile.lookingForAJob ? needJobImg : hiredImg} />
                </div>
                <MyPostsContainer store={props.store}/>
            </div>
        </div>
    )
}

export default Profile;