import React from 'react'
import "../styles/Footer.scss"
import CurrentTrack from './CurrentTrack'
import Volume from './Volume'
import PlayerControl from './PlayerControl'

export default function Footer() {
  return (
    <div className='footer_container'>
        <CurrentTrack/>
        <PlayerControl/>
        <Volume/>
    </div>
  )
}
