import React, { useEffect } from 'react'
import Video from "../../assests/video.mp4"
import aeroplane from "../../assests/aeroplane.jpg"
import Aos from "aos"
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className='home flex container'>
            <div className="mainText mt-5" >
                <h1 data-aos="fade-up" data-aos-duration="2500">Create Ever-lasting Memories with us</h1>
            </div>
            <div data-aos="fade-down" data-aos-duration="2500" className="homeImages flex">
                <div className="videoDiv">
                    <video className='video' src={Video} autoPlay muted loop></video>
                </div>
                {/* <img src={aeroplane} className='plane' /> */}
            </div>
        </div>
    )
}

export default Home