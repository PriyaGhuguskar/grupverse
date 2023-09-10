import React from 'react'
import { FaUser } from 'react-icons/fa';
import { MdSignpost } from 'react-icons/md';
import { BsMicrosoftTeams } from 'react-icons/bs';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaShareAlt } from 'react-icons/fa';
import cardpng from '../Assets/card.png'
import insta from '../Assets/insta.png'
import fbpng from '../Assets/fb.png'
import twpng from '../Assets/tw.png'
import lnpng from '../Assets/ln.png'

const RightCompo = () => {
    return (
        <div id='right-side-container'>

            <div className='sidebar-container'>
                <ul>
                    <li className='active'>
                        <div className='firstList'>
                            <span style={{ margin: '10px' }}>
                                <FaUser /></span>
                            My Feed
                        </div>
                    </li>
                    <li className='unactive'>
                        <div className='firstList'>
                            <span style={{ margin: '10px' }}>
                                <MdSignpost /></span>
                            My Post
                        </div>
                    </li>
                    <li className='unactive'>
                        <div className='firstList'>
                            <span style={{ margin: '10px' }}>
                                <BsMicrosoftTeams /></span>
                            My Team Posts
                        </div>
                    </li>
                    <li className='unactive'>
                        <div className='firstList'>
                            <span style={{ margin: '10px' }}>
                                <BsFillPeopleFill /></span>
                            My Following Post
                        </div>
                    </li>
                    <li className='unactive'>
                        <div className='firstList'>
                            <span style={{ margin: '10px' }}>
                                <FaShareAlt /></span>
                            Shared Post
                        </div>
                    </li>
                </ul>
            </div>
            <h4 className='sidebar-heading'>Trending Topics of the Week</h4>
            <div className='card-container'>
                <div className='card-div'>
                    <img src={cardpng} alt='card' />
                    {/* <p>Top Software for designers
                        </p> */}
                </div>
            </div>
            <div className='social-links'>
                <img src={fbpng} alt=' fb' />
                <img src={insta} alt='insta' />
                <img src={twpng} alt='tw' />
                <img src={lnpng} alt='ln' />

            </div>



        </div>
    )
}

export default RightCompo