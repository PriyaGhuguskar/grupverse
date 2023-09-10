import React from 'react'
import { Data } from './DataCompo'
import PostFeed from './PostFeed'

const MidCompo = () => {
    return (
        <div id='mid-container'>
            <div style={{
                display: 'flex',
                flexDirection: 'column', gap: '1rem'
            }}>
                <h1 style={{ textAlign: 'center', margin: '0px auto' }}>Recommended Team</h1>
                <div className='recommendedDive'>
                    {Data.map((team) => {
                        return (
                            <div key={team?.name} className='mid-card-cont'>
                                <div className='mid-card-div'>
                                    <a href='/' className='nameCard'>
                                        {team?.name}</a>
                                    <center className='mid-card-img'>
                                        <img src={team?.image} alt='card' />

                                    </center>
                                    <button className='join-btn'>Join</button>
                                </div>
                            </div>
                        )
                    })}



                </div>
            </div>
            <section className='post-sec'>
                <h2 style={{ marginLeft: '0px' }}>Feed Posts</h2>
                <div style={{ margin: '5px aut0', height: 'auto', overflow: 'auto', width: '100%' }}>
                    <PostFeed />
                </div>
            </section>
        </div>
    )
}

export default MidCompo