import React from 'react';
import faceCard from '../images/image 12.png';
import star from '../images/Star 1.png';

export default function Card(){
    return (
        <div className='card'>
            <div className="photo-status">
                <p className='status'>sold out</p>
                <img src={faceCard} alt="" className='faceCard'/>
            </div>
            <div className='description-card'>
                <div className="rate-div">
                    <img src={star} alt="" className='star'/>
                    <p className='rate'>5.0<span className='span-rate'>(6) USA</span></p>
                </div>
                <p className='motto'>Life lessons with Katie Zaferes</p>
                <p className='price'> <span className='span-price'>From $136</span>/person</p>
            </div>
        </div>
    )
}