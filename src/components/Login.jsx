import React from "react";
import "../styles/Login.scss";

function Login() {
  const handleClick = () => {
    const clientId = "e8321963509b49c894bee7afdc17352d";
    const redirectUrl = "http://localhost:3000";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="login-container">
      <img
        className="image-container"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="spotify-logo"
      />
      <button className="button" onClick={handleClick}>
        Connect Your Spotify
      </button>
    </div>
  );
}

export default Login;
