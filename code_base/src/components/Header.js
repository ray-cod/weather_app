import React from 'react'
import AppLogo from './header_components/AppLogo';
import Search from './header_components/Search';
import Settings from './header_components/Settings';
import '../styles/header.css';

const Header = () => {
  return (
    <header className='Header'>
        <AppLogo />
        <Search />
        <Settings />
    </header>
  )
}

export default Header
