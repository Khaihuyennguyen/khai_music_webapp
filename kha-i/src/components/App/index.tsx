import Login from '../Login'
import TrackInfo from '../Trackinfo';
import {useState} from 'react';
import { getAccessToken } from '../../auth'
import { useEffect } from 'react'


function App() {
  const [token, setToken] = useState<string | null>(null)

  useEffect(  () => {
    getToken()
    
  })

  const getToken = async () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      const accessToken = getAccessToken(clientId, code)
      setToken(accessToken)
    }
  }

  if (!token) {
      return (
        <>
          <Login/>
        </>
      )
  } else {
    <>
      <TrackInfo/>
    </>
  }

  
}

export default App
