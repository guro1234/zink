import { Route,Routes } from 'react-router-dom';
import '/App.css';
import React from 'react';
import HomePage from './Pages/Home';
import { SocketProvider } from './providers/Socket';
import RoomPage from './Pages/Room';
import {PeerProvider} from '../providers/Peer'
function App() {
  return (
    <div className="App">
       <SocketProvider>
        <PeerProvider>
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:roomId" element={<RoomPage/>} />
        

      </Routes>
      </PeerProvider>
      </SocketProvider>
      
    </div>
  );
}

export default App;
