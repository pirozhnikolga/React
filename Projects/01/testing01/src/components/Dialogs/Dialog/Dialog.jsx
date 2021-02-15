import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <img className={s.ava} alt="ava" src={props.photo}/>
            <NavLink activeClassName={s.active} to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;