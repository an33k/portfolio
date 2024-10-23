import React from 'react'
import { twMerge } from 'tailwind-merge'


const Card = ({className, children}: React.PropsWithChildren<{className?: string;}>) =>{
  return (
      <div className={twMerge('bg-gray-80 z-10 rounded-3xl relative after:content-[""] after:absolute after:inset-0 after:z-10 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 overflow-hidden after:pointer-events-none p-6', className)}>
          <div className='absolute inset-0 -z-10 opacity-20' style={{
            backgroundImage: 'url(/grain.jpg)',
          }}></div>
          {children}
      </div>
  )
}

export default Card