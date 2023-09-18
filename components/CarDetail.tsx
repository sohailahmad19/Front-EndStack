"use client"
import { CarProps } from '@/types';
import React from 'react'
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import { generateCarImageUrl } from '@/utils';


interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps
}


function CarDetail({ isOpen, closeModal, car }: CarDetailsProps) {

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" onClose={closeModal} className="relative z-10">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>
                    <div className='fixed inset-0  overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center '>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scal-95"
                                enterTo="opacity-100 scal-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scal-100"
                                leaveTo="opacity-0 scal-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transsform rounded-2xl bg-white flex flex-col  ">
                                    <button type='button' onClick={closeModal}>
                                        <Image src="/close.svg" alt="close"
                                            width={20} height={20} className="object-contain absolute top-4 right-4 z-10 w-fit bg-primary-blue-100 p-2 rounded-full " />
                                    </button>
                                    <div className='flex-1 flex flex-col p-2'>
                                        <div className='relative  w-full h-40 bg-pattern bg-cover bg-center rounded-lg px-5'>
                                            <Image src={generateCarImageUrl(car)} fill priority alt="sw" className='object-contain' />

                                        </div>
                                        <div className='flex gap-3'>
                                            <div className='flex-1 relative w-full h-24  bg-primary-blue-100 rounded-lg'>
                                                <Image src={generateCarImageUrl(car,"29")} alt="a" fill priority className='object-contain'/>
                                            </div>

                                            <div className='flex-1 relative w-full h-24  bg-primary-blue-100 rounded-lg'>
                                                <Image src={generateCarImageUrl(car,"33")} alt="a" fill priority className='object-contain'/>
                                            </div>

                                            <div className='flex-1 relative w-full h-24  bg-primary-blue-100 rounded-lg'>
                                                <Image src={generateCarImageUrl(car,"13")} alt="a" fill priority className='object-contain'/>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex-1 flex flex-col gap-2 px-4'>
                                     <h2 className='font-semibold text-xl capitalize'>{car.make} {car.model}</h2>

                                     <div className='mt-3 flex flex-wrap  gap-4 ' >
                                    {Object.entries(car).map(([key,value])=>(
                                     <div className='flex justify-between gap-5 w-full text-right'>
                                        <h4 className=' text-gray-500 capitalize'>{key}</h4>
                                        <p className=' text-black-100 font-semibold' >{value}</p>
                                        </div>
                                    ))}
                                     </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default CarDetail