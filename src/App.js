import './App.css';
import Header from './comonents/Header/Header';
import Navbar from './comonents/Navbar/Navbar';
import Profile from './comonents/Profile/Profile';
import Dialogs from './comonents/Dialogs/Dialogs';
import News from './comonents/News/News';
import Music from './comonents/Music/Music';
import Settings from './comonents/Settings/Settings';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs/*' element={<Dialogs />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
