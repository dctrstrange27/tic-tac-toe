import { useEffect } from 'react'
import { socket } from '../socket/socket'


const useSocket = () => {
     useEffect(()=>{
     socket.connect()
  })
}

export default useSocket