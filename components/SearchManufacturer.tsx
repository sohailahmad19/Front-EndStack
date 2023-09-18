"use client"
import { SearchManufacturerProps } from '@/types'
import React, { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { manufacturers } from '@/constants'

function SearchManufacturer({ manufacturer, setManufacturer }: SearchManufacturerProps) {
    const [query, setQuery] = useState("")

    const filteredManufacturers =
        query === ""
            ? manufacturers
            : manufacturers.filter((item) =>
                item
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            );

    return (
        <div className='search-manufacturer'>
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className='relative w-full max overflow-auto'>
                    <Combobox.Button className="absolute top-[14px]">
                        <Image className='ml-4 ' alt="search" src="/car-logo.svg" width={20} height={20} />
                    </Combobox.Button>

                    <Combobox.Input className="search-manufacturer__input"
                        placeholder='Search a Car'
                        displayValue={(manufacturer) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <Transition
                        as={Fragment}
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                        afterLeave={() => setQuery("")}
                    >

                        <Combobox.Options>
                            {filteredManufacturers.map((item) => (
                                <Combobox.Option
                                    value={item}
                                    className={({ active }) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                                >
                                    {item}
                                </Combobox.Option>

                            )
                            )
                            }
                        </Combobox.Options>
                    </Transition>


                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer