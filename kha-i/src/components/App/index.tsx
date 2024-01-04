import Login from '../Login'
import TrackInfo from '../Trackinfo';
import {useState} from 'react';
import { getAccessToken } from '../../auth'
import { useEffect } from 'react'
import axios from 'axios'
import Nav from '../Nav'

function App() {
  const [token, setToken] = useState<string | null>(null)
  const [profile, setProfile] = useState<string | null>(null)
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  
  // Everytime someone login, trigger the functions
  useEffect(  () => {
    if (code  && !token) {
      getToken()
    }
    if (token) {
      getUserInfo()
    }
  },[token])

  const getToken = async () => {

    if (code) {
      const accessToken = await getAccessToken(clientId, code)
      setToken(accessToken)
    }
  }

  const getUserInfo = async () => {
    const { data } = await axios.get("https://api.spotify.com/v1/me", {
      headers : {
        Authorization : `Bearer ${token}`,
        "Content-type": "application/json",
        },
      })

      setProfile(data.images[0].url)
  
    }

  if (!token) {
      return (
        <>
          <Login/>
        </>
      )
  } else {
    return (
    <>
      <Nav
        profile={profile}></Nav>
      <TrackInfo/>
    </>
    )}

  
}

export default App
