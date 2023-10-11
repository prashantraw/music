import React, { useEffect } from 'react'
import Login from './components/Login'
import { useStateProvider } from './utils/StateProvider';
import { actionTypes } from './utils/Contants';
import Spotify from './components/Spotify';


function App() {

  const[{token}, dispatch] = useStateProvider()

  useEffect(() => {
    const hash = window.location.hash;
    if(hash){
     let token = hash.substring(1).split('&')[0].split('=')[1]
      dispatch({
        type: actionTypes.SET_TOKEN,
        token
      })
    }
    document.title = 'Spotify'
  },[token, dispatch])


  return (
    <div>
      {
        token ? <Spotify /> : <Login />
      }
      
    </div>
  )
}

export default App
