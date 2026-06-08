"use client"
import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { X, MessageSquareText, ClockFading, Rotate3D, Box, Plus } from 'lucide-react'
import Image from 'next/image'

const Card = () => {
  return (
    <div className={cn('w-72 min-h-[26rem] h-[29rem] bg-white rounded-xl text-black font-sans  p-6 flex flex-col',
      'shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]')}>
      <h2 className='font-bold text-[14px] font-sans'>Bored Components</h2>
      <p className='text-neutral-600 mt-2 text-[10px] font-sans'>A collection of beautiful UI components, let's get on with it.</p>
      <div className='flex items-center justify-center'>
        <button className='flex items-center justify-center gap-1 text-[12px] rounded-md px-2 py-1 mt-4
      shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]'>
          Bored
          <X className="h-3 w-3 text-neutral-400" />
        </button>
      </div>

      <div className='bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative'>
        
        {/* motion div */}
        <motion.div 
        initial={{
          opacity:0,
          scale:0.98,
          filter:"blur(10px)"
        }}
        whileHover={{
          opacity:1,
          scale:1.05,
          filter:"blur(0px)",
        }}
        transition={{
          type:"spring",
          stiffness:100,
          damping:15
        }}
        className='absolute inset-0 h-full border border-neutral-200 w-full bg-white rounded-lg divide-y divide-neutral-200'>
          <div className='p-4 flex gap-2'>
            <div className='h-7 w-7 flex-shrink-0 bg-gradient-to-r shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
          bg-white rounded-md flex items-center justify-center'>
              <MessageSquareText className='h-4 w-4 text-neutral-600' />
            </div>
            <div className='flex flex-col'>
              <p className='text-[8px] font-bold text-neutral-600'>Bored UI Components</p>
              <p className='text-neutral-400 text-[8px] mt-1'>A collection of UI components.</p>
            </div>
          </div>
          <div className='p-4 flex gap-2'>
            <div className='h-7 w-7 flex-shrink-0 bg-gradient-to-r shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
          bg-white rounded-md flex items-center justify-center'>
              <ClockFading className='h-4 w-4 text-neutral-600' />
            </div>
            <div className='flex flex-col'>
              <p className='text-[8px] font-bold text-neutral-600'>24 hours turnaround</p>
              <p className='text-neutral-400 text-[8px] mt-1'>Superfast delivery at Warp speed.</p>
            </div>
          </div>
          <div className='p-4 flex gap-2'>
            <div className='h-7 w-7 flex-shrink-0 bg-gradient-to-r shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
          bg-white rounded-md flex items-center justify-center'>
              <Rotate3D className='h-4 w-4 text-neutral-600' />
            </div>
            <div className='flex flex-col'>
              <p className='text-[8px] font-bold text-neutral-600'>360 days all around</p>
              <p className='text-neutral-400 text-[8px] mt-1'>We are here to help you 24/7.</p>
            </div>
          </div>
          <div className='p-4 flex gap-2'>
            <div className='h-7 w-7 flex-shrink-0 bg-gradient-to-r shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
          bg-white rounded-md flex items-center justify-center'>
              <Box className='h-4 w-4 text-neutral-600' />
            </div>
            <div className='flex flex-col'>
              <p className='text-[8px] font-bold text-neutral-600'>Some other components</p>
              <p className='text-neutral-400 text-[8px] mt-1'>Check out other components available.</p>
            </div>
          </div>
          <div className='p-4 flex gap-2 justify-center items-center'>
            <div className='h-6 w-6 flex-shrink-0 bg-gradient-to-r shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
          bg-white rounded-full flex items-center justify-center'>
              <Plus className='h-3 w-3 text-neutral-600' />
            </div>
            <div className='flex flex-col'>
              <p className='text-[8px] font-bold text-neutral-400'>Create Projects</p>
            </div>
          </div>
        </motion.div>
        {/* motion div end here */}
      </div>
    </div>
  )
}

export default Card