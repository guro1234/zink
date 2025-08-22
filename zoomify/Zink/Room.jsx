import React ,{useEffect , useCallback} from 'react'
import {useSocket} from '../providers/Socket'
import {usePeer} from '../providers/Peer'


const RoomPage = () => {
  const socket = useSocket()
  const {peer , createOffer, createAnswer} = usePeer()
   const handleNewUserJoined =useCallback (async(data)=>{
 const {emailId}= data;
const offer = await createOffer();
socket.emit('call-user',{emailId, offer});

 },
 [createOffer , socket])
 const handleIncommingCall = useCallback(async(data)=>{
const {from, offer} = data
const ans = await createAnswer(offer);
socket.emit('call-accepted',{emailId: from , ans})
 },[createAnswer , socket])
  useEffect(()=>{
   socket.on('user-joined',handleNewUserJoined)  
   socket.on('incomming-call',handleIncommingCall)
   return ()=>{
    socket.off('user-joiner',handleNewUserJoined)
    socket.off('incomming-call',handleIncommingCall)
   }
  },[handleIncommingCall,handleNewUserJoined,socket])
  return (
   <div className='room-page-container'>

   </div>
  )
}

export default RoomPage