export function formatMessageTime(data){
  return new Data(date).toLocateTimeString("en-US",{
    hours:"2-digit",
    minute:"2-digit",
    hour12:false,
  })
}