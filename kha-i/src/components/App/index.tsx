import Login from '../Login'
import TrackInfo from '../Trackinfo';
import {useState} from 'react';
import { getAccessToken } from '../../auth'
import { useEffect } from 'react'
import axios from 'axios'
import Nav from '../Nav'
import { GlobalStyle } from '../../styles';
import { Container, TrackViewer, Side } from './styles'




function App() {
  const [token, setToken] = useState<string | null>(null)
  const [profile, setProfile] = useState<string | null>(null)
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const GlobalStyleProxy: any = GlobalStyle;
  
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
          <GlobalStyleProxy/>
          <Login/>
        </>
      )
  } else {
    return (
    <>
        <GlobalStyleProxy />
        
      <Nav
        profile={profile}></Nav>
        <Container>
      <TrackViewer>
      <TrackInfo/>
          </TrackViewer>
      <Side/>
        </Container>
    </>
    )}

  
}

export default App
