import './index.css';
import { data } from "./redux/state";
import reportWebVitals from './reportWebVitals';
import { renderEntireTree } from "./render";


renderEntireTree(data);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();