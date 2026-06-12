import React from 'react'
import Card from './components/Card.jsx'
import Link from 'next/link.js'

const page = () => {
  return (
    <div className='bg-white flex justify-center items-center min-h-screen w-full' >
        <Link href={"/"} className="absolute top-10 left-10 text-white bg-black px-4 py-2 rounded-full text-sm hover:bg-black/20 transition-colors backdrop-blur-md">←  Back to Home</Link>
        <Card />
    </div>
  )
}

export default page