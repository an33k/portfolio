'use client'
import React from 'react'
import { Button } from './ui/button'
import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'


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
        <div className='flex flex-col gap-8'>
        <Link className='font-serif font-semibold inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'  href={'/cv/MdKhalidHossainKhanAneekResume.pdf'}  target="_blank"  rel="noopener noreferrer" locale={false} download>My CV<MoveUpRight className="ml-2 h-4 w-4" /></Link>
        <Button onClick={handleMailClick} variant='default' className='font-serif font-semibold'>Let&apos;s Connect <MoveUpRight className="ml-2 h-4 w-4" /></Button>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact