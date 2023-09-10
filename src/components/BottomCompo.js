import React from 'react'
import './Bottom.css'

const BottomCompo = () => {
    return (
        <div className="bottom-container">
            <a href="/"
                className="create-post"
                style={{ color: 'white', alignItems: 'center' }}>
                <div className="bottom-plus">
                    +
                </div>
                <div className="bottom-text">
                    Create Post
                </div>
            </a>
            <div className="my-teams" >
                <div className="bottom-text">
                    My teams
                </div>
            </div>
            <a className="create-team" href="/"
                style={{ color: 'white', alignItems: 'center' }}>

                <div className="bottom-plus">
                    +
                </div>
                <div className="bottom-text">
                    Create Team </div>
            </a>
        </div>
    )
}

export default BottomCompo