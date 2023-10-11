import React from "react";
import "../styles/Sidebar.scss";
import {IoLibrary} from "react-icons/io5"
import {MdHomeFilled, MdSearch} from "react-icons/md"
import Playlist from "./Playlist";


export default function Sidebar() {
  return (
    <div className="sidebar_container">
      <div className="top_links">
        <div className="logo">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
            alt="spotify-logo"
          />
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibrary />
            <span>Library</span>
          </li>
        </ul>
      </div>
      <Playlist />
    </div>
  );
}
