import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostMessage } from "./redux/state";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode >
            <App data={state} addPost={addPost} updateNewPostMessage={updateNewPostMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
