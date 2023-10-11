import React from 'react'
import {FaSearch} from "react-icons/fa"
import {CgProfile} from "react-icons/cg"
import { useStateProvider } from '../utils/StateProvider'
import "../styles/Navbar.scss"

export default function Navbar({navBackground}) {

  const [{userInfo}] = useStateProvider()
  return (
    <div className={`navbar_container ${navBackground ? '' : 'no-background'}`} data-nav-background={navBackground}>
      <div className="search_bar">
        <FaSearch />
        <input type='text' placeholder='Artist, songs' />
      </div>
      <div className="avatar">
        <a href={userInfo?.userUrl}>
          <CgProfile />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </div>
  )
}


