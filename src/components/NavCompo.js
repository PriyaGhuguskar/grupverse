import React from 'react'
import logoPng from '../Assets/logo.png'
import './NavCompo.css'
import { FiSearch } from 'react-icons/fi';
import { BsMicFill } from 'react-icons/bs';
import { FaBell } from 'react-icons/fa';
import userpng from '../Assets/profile.png'

// FaBell
// BsMicFill
// FiSearch

const NavCompo = () => {
    return (
        <div className='NavDiv'>

            <div className='Navlogo'
                style={{
                    marginLeft: '20px', display: 'flex',
                    alignItems: 'center'
                }}>
                <img src={logoPng} alt='brandlogo' style={{

                    marginRight: '10px', position: 'relative', width: '40px'
                }} />
                <h3 className='logoName'> Grupverse</h3>
                <h4 style={{ padding: '0px 5px' }}>❤️ 0</h4>
                <h4 style={{ padding: '0px 5px' }}> Hello PriyaSG</h4>
            </div>

            <div className='NavList'>
                <ul>
                    <li> <a href='/feed'> Home</a> </li>
                    <li> <a href='/feed'> About Us</a> </li>
                    <li> <a href='/feed'> Contact Us</a> </li>
                    <li> <a href='/feed'> Help</a> </li>

                </ul>
            </div>
            <div className='NavSearch'>
                <input autoComplete='off'
                    type='text' id='search-input'
                    placeholder='Search...' />
                <div className='search-btn'><FiSearch /></div>
                <div className='mic-btn'><BsMicFill /></div>

            </div>
            <div className=''><FaBell /></div>
            <div className='NavUser'>
                <img src={userpng} alt='user' />
            </div>

        </div>
    )
}

export default NavCompo