import s from "./List.module.css";

const List = () => {
    return (
           <ul>
                <li><label>Name:</label> <input name='fn'/></li>
                <li><label>Address:</label> <input name='address'/></li>
                <li><label>Phone:</label> <input name='phone'/></li>
            </ul>
    )
}

export default List;