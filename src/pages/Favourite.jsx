import './Favourite.css'
import '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Cakelogo from '../assets/cakedhome.png'
import SiamBrasserielogo from '../assets/siam.png'

const Favourite = () => {

    const fav_stall = [{img: Cakelogo,stall_name: "Cakes",rate:'4.7'},{img: SiamBrasserielogo,stall_name: "Siam Brasserie",rate:'4.7'},]

    return(
    <div>
        <div className='back-but'>
        <Link to = '/Home'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        </Link>
        </div>
        <div className='Fav-Head'>
            <p>Favorites</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
        </div>

        <div className='stall-shown'>
            {fav_stall.map((stall, index) => (
            <div className='details-shown'>
                {stall.img && <img src={stall.img} alt={stall.stall_name}/>}
                {stall.stall_name && <p key={index} id='name'>{stall.stall_name}</p>}
                {stall.rate && <p key={index} id='rate'>{stall.rate}</p>}
            </div>
            ))}
        </div>
    </div>
    )
}

export default Favourite;