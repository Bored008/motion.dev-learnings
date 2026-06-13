import React from 'react'
import AnimatedText from './components/animated-text'
import AnimationSequence from './components/animation-sequence'

const page = () => {
  return (
    <div> 
        <div className='hidden'>
            <AnimatedText />
        </div>
        <AnimationSequence />
    </div>
  )
}

export default page