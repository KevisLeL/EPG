import React from 'react';
import { Link } from 'react-router-dom';
import { FaThList, FaBookOpen } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { SlControlPlay } from 'react-icons/sl';
import { MdReplay } from 'react-icons/md';

import './Footer.scss';

const Footer = () => {
    return <footer className="main-footer">
        <Link to='/'>
            <FiHome size='1.5rem' className='main-footer__icon' />
        </Link>
        <Link to='/'>
            <SlControlPlay size='1.5rem' className='main-footer__icon' />
        </Link>
        <Link to='/'>
            <FaThList size='1.5rem' className='main-footer__icon' />
        </Link>
        <Link to='/'>
            <MdReplay size='1.5rem' className='main-footer__icon' />
        </Link>
        <Link to='/'>
            <FaBookOpen size='1.5rem' className='main-footer__icon'/>
        </Link>
    </footer>;
}; 

export default Footer;