import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { actionTypes } from "../utils/Contants";
import "../styles/Playlist.scss"

export default function Playlist() {

  const [{ token, playlists }, dispatch] = useStateProvider();

  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }                            
      );

      const { items } = response.data;

      const playlists = items.map((name, id) => {
        return { name, id };
      });

      dispatch({ type: actionTypes.GET_PLAYLIST, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);

  return (
    <div className="playlist_container">
      <ul>
        {playlists.map(({name, id}) => {
          return <li key={id}>{name.name}</li>
        })}
        {playlists.map(({name, id}) => {
          return <li key={id}>{name.name}</li>
        })}
        {playlists.map(({name, id}) => {
          return <li key={id}>{name.name}</li>
        })}
        {playlists.map(({name, id}) => {
          return <li key={id}>{name.name}</li>
        })}
        {playlists.map(({name, id}) => {
          return <li key={id}>{name.name}</li>
        })}
      </ul>
    </div>
  );
}
