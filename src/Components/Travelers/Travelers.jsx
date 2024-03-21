import React, { useEffect } from 'react'
import paris from "../../assests/paris.jpg"
import traveler from "../../assests/traveler.jpg"
import Dubai from "../../assests/Dubai.jpg"
import traveler02 from "../../assests/traveler02.jpg"
import London from "../../assests/London.jpg"
import traveler03 from "../../assests/traveler03.jpg"
import NewYork from "../../assests/NewYork.jpg"
import traveler04 from "../../assests/traveler04.jpg"
import Aos from "aos"
import 'aos/dist/aos.css'
const travelers = [
    {
        id: 1,
        destinationImage: paris,
        travelerImage: traveler,
        travelerName: 'IsraTech',
        socialLink: '@isratech8'
    },
    {
        id: 2,
        destinationImage: Dubai,
        travelerImage: traveler02,
        travelerName: 'Wilson Lindsey',
        socialLink: '@isratech8'
    },
    {
        id: 3,
        destinationImage: London,
        travelerImage: traveler03,
        travelerName: 'Nicole lindsey',
        socialLink: '@Nicole    lindsey'
    },

    {
        id: 4,
        destinationImage: NewYork,
        travelerImage: traveler04,
        travelerName: 'Naresh Lamer',
        socialLink: '@Nareshlamer'
    }
]

const Travelers = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="travelers container seaction">
            <div className="sectionContainer">
                <h2 data-aos="fade-down" data-aos-duration="2500">
                    Top travelers of This month
                </h2>

                <div className="travelersContainer grid" >
                    {
                        travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink }) => {
                            return (<div key={id} className="singleTraveler">

                                <img src={destinationImage} alt="" data-aos="fade-up" data-aos-duration="2500" className='destinationImage' />

                                <div className="travelerDetails">
                                    <div className="traavelerPicture">
                                        <img src={travelerImage} class="travelerImage" />
                                    </div>
                                </div>
                                <div className="travelerName">
                                    <span>
                                        {travelerName}
                                    </span>

                                    <p>
                                        {socialLink}
                                    </p>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Travelers