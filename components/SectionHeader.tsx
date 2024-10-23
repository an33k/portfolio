import React from 'react'

const SectionHeader = ({
  title,
  description,
  secondaryTitle,
}:{
  title: string;
  description: string;
  secondaryTitle: string;
}
) => {
  return (
    <div>
      <div className='flex justify-center'>
        <p className='font-semibold font-serif bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text uppercase md:text-3xl text-xl'>{title}</p>
      </div>
        <h2 className='font-serif text-3xl text-center mt-6 md:text-5xl'>{secondaryTitle}</h2>
        <p className='text-center mt-4 text-white/60 md:text-lg lg:text-xl max-w-lg mx-auto'>{description}</p>
    </div>
  )
}

export default SectionHeader