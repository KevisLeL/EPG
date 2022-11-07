import React from 'react';
import { Link } from 'react-router-dom'
import { FaRegUser, FaSearch } from 'react-icons/fa';
import { TiWorldOutline } from 'react-icons/ti';
import './MainHeader.scss';

const MainHeader = (props) => {
    return (
        <header className="main-header">
            <button className="main-header__menu-btn" onClick={(evt) => props.onToggleSidebar(evt)}>
                <FaRegUser size="2rem" className='user-icon'/>
            </button>
            <Link to='/'>
                <TiWorldOutline size="4.5rem" className='main-header__title'/>
            </Link>
            <Link to='/'>
                <FaSearch size="2rem" className='search-icon'/>
            </Link>

        </header>
    )
};

export default MainHeader;

