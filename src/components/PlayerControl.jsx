import React from "react";
import "../styles/PlayerControl.scss"
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsShuffle,
} from "react-icons/bs";
import { CgPlayTrackNext, CgPlayTrackPrev } from "react-icons/cg";
import { FiRepeat } from "react-icons/fi";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { actionTypes } from "../utils/Contants";

 function PlayerControl() {
  const [{ token, playerState }, dispatch] = useStateProvider();

  const changeState = async () => {
    const state = playerState ? "pause" : "play";
    await axios.put(
      `https://api.spotify.com/v1/me/player/${state}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({
      type: actionTypes.SET_PLAYER_STATE,
      playerState: !playerState,
    });
  };
  const changeTrack = async (type) => {
    await axios.post(
      `https://api.spotify.com/v1/me/player/${type}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({ type: actionTypes.SET_PLAYER_STATE, playerState: true });
    const response1 = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response1.data !== "") {
      const currentPlaying = {
        id: response1.data.item.id,
        name: response1.data.item.name,
        artists: response1.data.item.artists.map((artist) => artist.name),
        image: response1.data.item.album.images[2].url,
      };
      dispatch({ type: actionTypes.SET_PLAYING, currentPlaying });
    } else {
      dispatch({ type: actionTypes.SET_PLAYING, currentPlaying: null });
    }
  };
  return (
    <div className="player_container">
      <div className="shuffle">
        <BsShuffle />
      </div>
      <div className="previous">
        <CgPlayTrackPrev onClick={() => changeTrack("previous")} />
      </div>
      <div className="state">
        {playerState ? (
          <BsFillPauseCircleFill onClick={changeState} />
        ) : (
          <BsFillPlayCircleFill onClick={changeState} />
        )}
      </div>
      <div className="next">
        <CgPlayTrackNext onClick={() => changeTrack("next")} />
      </div>
      <div className="repeat">
        <FiRepeat />
      </div>
    </div>
  );
}

export default PlayerControl