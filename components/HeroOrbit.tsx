import React, { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge';

const HeroOrbit = ({children, size, rotation, spinDuration, spin = false, shouldSpinoi = false, spinDurationoi }: PropsWithChildren<{size: number; rotation: number; spinDuration?:string; spin?:boolean; shouldSpinoi?:boolean; spinDurationoi?:string;}>) => {
  return (
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className={twMerge(spin === true && 'animate-spin')} style={
        {
          animationDuration: spinDuration
        }
      }
      >
      <div className='flex items-start justify-start' style={
        {
          width: `${size}px`,
          height: `${size}px`,
          transform: `rotate(${rotation}deg)`,
        }
      }>
        <div className={twMerge(shouldSpinoi === true && 'animate-spin')} style={
        {
          animationDuration: spinDurationoi
        }
      }
      >
        <div className='inline-flex' style={
          {
            transform: `rotate(${rotation * -1}deg)`,
          }
        }>
          {children}
        </div>
        </div>
        </div>
        </div>
      </div>
  )
}

export default HeroOrbit