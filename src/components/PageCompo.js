import React from 'react'
import './PageCompo.css'
import RightCompo from './RightCompo'
import './MidCompo.css'
import MidCompo from './MidCompo'
import LeftCompo from './LeftCompo'


// FaUser BsFillPeopleFill FaShareAlt
// FaSignsPost BsMicrosoftTeams

const PageCompo = () => {


    return (
        <div className='gridComtainer'>
            <RightCompo />

            <MidCompo />

            <LeftCompo />


        </div>
    )
}

export default PageCompo