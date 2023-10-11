import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import "../styles/Spotify.scss"
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { actionTypes } from "../utils/Contants";

function Spotify() {

  const [{token}, dispatch] = useStateProvider()

  const bodyRef = useRef()

  const [navBackground, setNavbackground] = useState(false)
  const [headerBackground, setHeaderBackground] = useState(false)

  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30 ? setNavbackground(true) : setNavbackground(false)
    bodyRef.current.scrollTop >= 268 ? setHeaderBackground(true) : setHeaderBackground(false)
  }

  useEffect(() => {
    const getUserInfo = async () => {         
      const {data} = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      const userInfo = {
        userId: data.id,
        userName: data.display_name
      }
      dispatch({type: actionTypes.SET_USER, userInfo})  
    }
       
    getUserInfo()
  }, [dispatch, token])

  useEffect(() => {
    const getPlaybackState = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me/player", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      dispatch({
        type: actionTypes.SET_PLAYER_STATE,
        playerState: data.is_playing,
      });
    };
    getPlaybackState();
  }, [dispatch, token]);


  return (
    <div className="main">
      <div className="spotify_container">
        <Sidebar />
        <div className="body" ref={bodyRef} onScroll={bodyScrolled}>
          <Navbar navBackground={navBackground} />
          <div className="content">
            <Body headerBackground={headerBackground} />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Spotify;
