import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div>
            <img className={s.post_img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQ179Ewtp_zAcSw2HGEZm9cPcy_T2Td-Rtw&usqp=CAU' alt='post' />
            <span>{props.message}</span>
            <div>
                <span>Like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;