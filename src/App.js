import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import Messages from './components/Messages'

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-800 font-sans leading-normal tracking-normal mt-12  ">
        <Header />
        <div className="flex flex-col md:flex-row" >
          <Sidebar />
          <Route path='/profile' component={Profile} />
          <Route path='/messages' component={Messages} />
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
