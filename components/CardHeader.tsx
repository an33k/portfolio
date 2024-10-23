import React from 'react'
import Star from '@/public/star.svg'
import { twMerge } from 'tailwind-merge';

type Props = {
  title: string;
  desscription: string;
  className?: string;
}

const CardHeader = (props: Props) => {
  return (
    <div className={twMerge(props.className, 'flex flex-col')}>
      <div className='inline-flex items-center gap-2'>
        <Star className='size-9 text-emerald-300' />
        <h3 className='font-serif text-3xl'>
          {props.title}
        </h3>
      </div>
      <p className='text-sm lg:text-base text-white/60 mt-2'>
        {props.desscription}
      </p>
    </div>
  )
}

export default CardHeader