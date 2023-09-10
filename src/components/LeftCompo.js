import React from 'react'
import './LeftCompo.css'
import { Data } from './DataCompo'

const LeftCompo = () => {
    return (
        <div className='left-side-container'>
            <div className='grid'>
                <h4 className='top-team1'>
                    Top Teams of the week</h4>
                <div className='container1'>
                    {Data.map((team) => {
                        return (
                            <div key={team?.name} className="card1">
                                <div className="wrapper">
                                    <div className="img1">
                                        <img className="square-image"
                                            src={team?.image}
                                            alt="squareimage" />
                                    </div>
                                    {/* style="text-decoration: none;" */}
                                    <div className="text1">
                                        <a href="/"
                                            style={{ textDecoration: "none" }}>
                                            <p className="team-name"
                                                style={{ padding: '0px 10px' }}>
                                                {team?.name}
                                            </p>
                                        </a>
                                    </div>
                                    <div className="joinbtn" style={{ width: "60px" }}>
                                        <div className="button1"
                                            style={{
                                                textDecoration: 'none', padding: '2px',
                                                width: '100%', display: "inline-block", textAlign: 'center'
                                            }} >
                                            join
                                        </div>
                                    </div>
                                </div>


                            </div>
                        )
                    })}
                </div>


                <h4 className="top-team2">Top Global Users of the week</h4>

                <div className='container2'>
                    <div className="globalUsersMyName">
                        PriyaSG: 227
                    </div>
                    {Data.map((team) => {
                        return (
                            <div key={team?.name} className="card2">
                                <div className="round">
                                    <div className="img2">
                                        <a href=" ">
                                            <img className="round-imagee"
                                                src={team?.image}
                                                alt="roundimage" />
                                        </a>
                                    </div>
                                    <div className="text2">
                                        <a href="/"
                                            style={{ textDecoration: 'none' }}>
                                            <p className="username">
                                                {team?.name}</p>
                                        </a>
                                    </div>

                                    <div className="joinbtn"
                                        style={{ width: '100px' }}>
                                        <div className="button1"
                                            style={{
                                                textDecoration: 'none', padding: '2px'
                                                , width: '100%', display: 'inline-block', textAlign: 'center'
                                            }} >
                                            Follow
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="container3"
                    style={{ marginTop: '2rem' }}>
                    <div className="container"
                        style={{ flexDirection: "column" }}>
                        <h4 className="top-team3"
                            style={{ marginTop: '2rem' }}>
                            Top Local Users of the week
                        </h4>
                        <div className="mainContainer">
                            <table>

                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="globalUsersMyName"
                                                style={{ textAlign: "center", width: "100%", margin: "0px auto" }}>
                                                PriyaSG: 227</div>
                                        </td>
                                    </tr>

                                    <tr className="diffTeam">
                                        <td style={{
                                            borderWidth: "2px 2px 0px 0px", borderTopStyle: "solid",
                                            borderBottomStyle: 'initial', borderLeftStyle: 'initial',
                                            borderTopColor: 'rgba(0, 0, 0, 0.5)', borderRightColor: "rgba(0, 0, 0, 0.5)",
                                            borderBottomColor: 'initial',
                                            borderLeftColor: "initial", borderImage: "initial", borderRadius: '12px'
                                        }}>
                                            <div style={{
                                                display: 'flex', width: '100%', flexDirection: 'column',
                                                alignItems: 'center', justifyContent: 'center', gap: '10px'
                                            }}>
                                                <div>
                                                    <img src="" alt="" />
                                                </div>
                                                <h5 style={{ fontWeight: '700', fontSize: '1rem' }} >
                                                    <a href="/">
                                                    </a>
                                                </h5>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftCompo