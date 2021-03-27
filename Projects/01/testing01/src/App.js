import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
    return (
        <BrowserRouter >
            <div className='app-wrapper' >
                <HeaderContainer store={props.store}/>
                <Navbar />
                <div className='app-wrapper-content' >
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
                    <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store} />} />
                    <Route path='/users' render={() => <UsersContainer store={props.store} />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                    <Route path='/login' component={Login} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;