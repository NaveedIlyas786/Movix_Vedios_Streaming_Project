import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

import ContentWrapper from '../contentWrapper/ContentWrapper'

import './footerstyle.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <ContentWrapper>
        <ul className='menuItems'>
          <li className='menuItem'>Terms Of Use</li>
          <li className='menuItem'>Privacy-Policy</li>
          <li className='menuItem'>About</li>
          <li className='menuItem'>Blog</li>
          <li className='menuItem'>FAQ</li>
        </ul>
        <div style={{ margin: 'auto' }} className='infoText'>
          Movix is your destination for discovering trending movies, standout TV
          shows, and stream-ready entertainment. Explore handpicked picks,
          detailed movie info, and a cinematic catalog built for fans who love
          great stories.
        </div>
        <div className='socialIcons'>
          <span className='icon'>
            <FaFacebookF />
          </span>
          <span className='icon'>
            <FaInstagram />
          </span>

          <span className='icon'>
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  )
}

export default Footer
