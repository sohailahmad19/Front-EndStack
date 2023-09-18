"use client"
import { CustomFilterProps } from '@/types'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { Fragment, useState } from 'react'

function CustomFilter({title,options}:CustomFilterProps) {
  const router=useRouter()
  const [selected,setSelected]=useState(options[0])
  console.log(selected,"selected")

  const handleUpdateParams=(e:{title:string,value:string})=>{
console.log(e,"eee")

    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set(title,e.value.toLowerCase())
    const newPathname=`${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathname)
  }
  return (
    <div className='w-fit'>
      <Listbox value={selected} onChange={(e)=>{setSelected;handleUpdateParams(e)}}>
      <div className='relative w-fit z-10'>
        <Listbox.Button className="custom-filter__btn">
        <span className='block truncate'>{selected.title}</span>
        <Image 
          src="/chevron-up-down.svg"
          width={20}
          height={20}
          className="ml-4 object-contain"
          alt='a'
          />
        </Listbox.Button>

        <Transition
        as="div"
        leave="transition ease-in duration-100"
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        />
        <Listbox.Options className="custom-filter__options">
          {options.map((option)=>(
            <Listbox.Option 
            value={option}
            className={({active})=>`relative cursor-default select-none py-2 px-4 ${active ? "bg-primary-blue text-white" :"text-gray-900"}`}
            >
           {({selected})=>(
            <span className='block'>
              {option.title}
            </span>
           )}
            </Listbox.Option>
))}
        </Listbox.Options>
      
        </div>
        </Listbox> 
    </div>
  )
}

export default CustomFilter