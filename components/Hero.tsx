"use client"
import React from 'react'
import { CustomButton } from '.'
import Image from 'next/image'

function Hero() {

    const handleScroll=()=>{

    }
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Find, book, or rent a car _ quickly and easily!
                </h1>

                <p className='hero__subtitle'>
                    Streamline your car rental experience with our effortless booking process.
                </p>
                <CustomButton isDisabled={false} btnType="submit" title="Explore Cars" containerStyles='bg-primary-blue text-white rounded-full mt-10'  handleClick={handleScroll}/>
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image  alt='hero' src="/hero.png" fill className='object-contain' />
                </div>
                <div className='hero__image-overlay' style={{overflow:"hidden"}}/>

            </div>
        </div>
    )
}

export default Hero