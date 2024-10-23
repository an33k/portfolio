'use client'
import React from 'react'
import { Button } from './ui/button'
import { MoveUpRight } from 'lucide-react'


const Contact = () => {
  const handleMailClick = () => {
    window.location.href = 'mailto:aneek.khan@outlook.com?subject=Hello%20there&body=Hey%20Aneek,';
  };
  return (
    <div className='md:pb-16 pb-6'>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl relative z-0 text-center md:text-left'>
          <div className='absolute inset-0 opacity-5 -z-10'style={{
                  backgroundImage: 'url(/grain.jpg)',
                }}>
          </div>
        <div className='flex flex-col gap-8 md:gap-16 items-center md:flex-row'>
        <div>
        <h2 className='font-serif text-2xl md:text-3xl font-semibold'>Let&apos;s create something amazing together</h2>
        <p className='text-sm md:text-base mt-2 '>
          Ready to bring your next project to life? Let&apos;s connect and disscuss how i can help you achive your goals.
        </p>
        </div>
        <Button onClick={handleMailClick} variant='default' className='font-serif font-semibold'>Let&apos;s Connect <MoveUpRight className="ml-2 h-4 w-4" /></Button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact