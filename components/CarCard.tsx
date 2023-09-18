"use client"
import { CarProps } from '@/types'
import { generateCarImageUrl } from '@/utils'
import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import React, { useState } from 'react'
import { CarDetail, CustomButton } from '.'

interface CarCardProps {
    car: CarProps
}

function CarCard({ car }: CarCardProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isShow, setIsShow] = useState(false)

    const handleOpenImage = () => {
        setIsShow(true)
    }
    const { city_mpg, combination_mpg, highway_mpg, year, make, transmission, drive, model } = car

    const defaultStyles1 = {
        position: "relative",
        objectFit: "contain",
        margin: "12pxx 0 12px 0",
        height: "10rem",
        width: "100%"
    }
    return (
        <div className='car-card group'>
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>{make} {model}</h2>
            </div>

            <p className='flex mt-6'>
                <span>
                    500
                </span>
            </p>

            <Dialog as="div" className="fixed inset-0 flex items-center justify-center" open={isShow} onClose={() => setIsShow(false)}>
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

                <Dialog.Panel className="relative w-3/4 h-3/4 max-w-[90vw] max-h-[90vh] overflow-hidden rounded-2xl bg-white flex flex-col">
                    <button type='button' onClick={() => setIsShow(false)}>
                        <Image src="/close.svg" alt="close"
                            width={20} height={20} className="object-contain absolute top-4 right-4 z-10 w-fit bg-primary-blue-100 p-2 rounded-full " />
                    </button>
                    <Image src={generateCarImageUrl(car)} fill alt="Car" className="object-contain w-full h-full" />

                </Dialog.Panel>
            </Dialog>
            <div style={defaultStyles1} >
                <Image onClick={handleOpenImage} src={generateCarImageUrl(car)} fill priority alt="sw" className='object-contain relative' />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="/steering-wheel.svg" alt='a' width={20} height={20} />
                        <p className=' text-[14px]'>{transmission === "a" ? "Automatic" : "Manual"}</p>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="/tire.svg" alt='a' width={20} height={20} />
                        {drive.toUpperCase()}
                    </div>

                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="/gas.svg" alt='a' width={20} height={20} />
                        {city_mpg} MPG
                    </div>

                </div>

                <div className=' car-card__btn-container '>
                    <CustomButton
                        title='View More'
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                        textStyles='text-white text-[14px] font-bold '
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
            <CarDetail isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />

        </div>
    )
}

export default CarCard