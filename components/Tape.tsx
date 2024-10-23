import React, { Fragment } from 'react'
import Star from '@/public/star.svg'

const words = [
  "Performant",
  "Accessible",
  "Responsive",
  "Secure",
  "Scalable",
  "Maintainable",
  "Modern",
  "Optimized",
  "Dynamic",
  "Interactive",
  "Search Optimized",
  "Usable"
]
const Tape = () => {
  return (
    <div className='py-16 lg:py-24 overflow-x-clip'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1'>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
        <div className='flex flex-none gap-4 py-3 animate-move-left pr-4 [animation-duration:40s]'>
          {[...new Array(2).fill(0).map((_,idx) => (
            <Fragment key={idx}>
            {words.map((word) => (
              <div key={word} className='items-center text-sm text-gray-900 uppercase font-extrabold inline-flex gap-4'>
                <span>{word}</span>
                <Star className='inline-block size-6 text-gray-900 -rotate-12'/>
              </div>
            ))}
            </Fragment>
          ))]}
        
        </div>
        </div>
      </div>
    </div>
  )
}

export default Tape