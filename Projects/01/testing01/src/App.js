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
    return (
        <BrowserRouter >
            <div className='app-wrapper' >
                <Header />
                <Navbar />
                <div className='app-wrapper-content' >
                    <Route path='/dialogs' render={() => < Dialogs dialogs={props.data.dialogsPage} />} />
                    <Route path='/profile' render={() => < Profile posts={props.data.profilePage} addPost={props.addPost} />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;