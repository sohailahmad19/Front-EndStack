"use client"
import { ShowMoreProps } from '@/types'
import { updateSearchParams } from '@/utils'
import { useRouter } from 'next/navigation'
import React from 'react'
import { CustomButton } from '.'

function ShowMore({pageNumber,isNext}:ShowMoreProps) {
    console.log(isNext,"isnext")
    const router=useRouter()
    const handleNavigation=()=>{
        const newLimit=(pageNumber +1)*10
const newPathname=updateSearchParams("limit",newLimit.toString())
router.push(newPathname)
    }
  return (
    <div className='w-full flex-center gap-5 flex mt-10'>
{!isNext && (
    <CustomButton
    title='Show More'
    btnType='button'
    containerStyles='bg-primary-blue rounded-full text-white'
    handleClick={handleNavigation}
    
    />

)}
    </div>
  )
}

export default ShowMore