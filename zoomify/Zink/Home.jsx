import React ,{useState ,useCallback, useEffect} from 'react'
import {useSocket} from '../providers/Socket'
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const {socket} = useSocket();
  const navigate = useNavigate()
  const [email , setEmail] = useState();
  const [roomId , setRoomId] = useState();
  const handleRoomJoined = useCallback(({roomId})=>{
navigate(`/room/${roomId}`)
  }
),[navigate]);
  useEffect(()=>{
socket.on('joined-room',handleRoomJoined)
 return ()=>{
  socket.off('joined-room', handleRoomJoined)
 }
  },[socket])
  // socket.emit('join-room',{roomId :'1',emailId: 'any@ex.com'})
  const handleJoinRoom = ()=>{
socket.emit('join-room',{emailId: email , roomId})
  }
  return (
    <div className='homepage-container'>
      <div className="input-container">
        <input value={email} onChange={e=>setEmail(e.target.value)} type='email'  placeholder='Enter Your Email here'/>
        <input value={roomId} onChange={e=>setRoomId(e.target.value)} type='text' placeholder='Enter Room Code'/>
        <button onClick={handleJoinRoom}>
          Enter Home
        </button>

      </div>

    </div>
  )
}

export default HomePage