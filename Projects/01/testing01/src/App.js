import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const App = (props) => {

    let state = props.store.getState();

    return (
        <BrowserRouter >
            <div className='app-wrapper' >
                <Header />
                <Navbar />
                <div className='app-wrapper-content' >
                    <Route path='/dialogs' render={() => < Dialogs dialogs={state.dialogsPage} />} />
                    <Route path='/profile' render={() => < Profile posts={state.profilePage} addPost={props.store.addPost.bind(props.store)} updateNewPostMessage={props.store.updateNewPostMessage.bind(props.store)} />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;