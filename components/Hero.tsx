'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowDown, HandMetal } from 'lucide-react'
import HeroOrbit from './HeroOrbit'
import Star from '@/public/star.svg'
import Sparkle from '@/public/sparkle.svg'

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleMailClick = () => {
    window.location.href = 'mailto:aneek.khan@outlook.com?subject=Hello%20there&body=Hey%20Aneek,';
  };
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className='inset-0 absolute [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        <div className='absolute inset-0 -z-30 opacity-5' style={{
          backgroundImage: 'url(/grain.jpg)',
        }}></div>
        <div className='size-[720px] hero-ring'></div>
        <div className='size-[920px] hero-ring'></div>
        <div className='size-[1120px] hero-ring'></div>
        <div className='size-[1320px] hero-ring'></div>
        <HeroOrbit spinDuration='30s' spin shouldSpinoi spinDurationoi='6s' size={430} rotation={-14}>
            <Sparkle className='text-emerald-300/20 size-8'/>
        </HeroOrbit>
        <HeroOrbit spinDuration='32s' spin shouldSpinoi spinDurationoi='6s' size={440} rotation={79}>
            <Sparkle className='text-emerald-300/20 size-5'/>
        </HeroOrbit>
        <HeroOrbit spinDuration='34s' spin size={550} rotation={-41}>
            <div className='size-2 bg-emerald-300/20 rounded-full'></div>
        </HeroOrbit>
        <HeroOrbit spinDuration='36s' spin size={590} shouldSpinoi spinDurationoi='8s' rotation={98}>
            <Star className='text-emerald-300 size-8'/>
        </HeroOrbit>
        <HeroOrbit spinDuration='38s' spin shouldSpinoi spinDurationoi='6s' size={590} rotation={178}>
            <Sparkle className='text-emerald-300/20 size-10'/>
        </HeroOrbit>
        <HeroOrbit spin spinDuration='40s' shouldSpinoi spinDurationoi='8s' size={600} rotation={20}>
            <Star className='text-emerald-300 size-12'/>
        </HeroOrbit>
        <HeroOrbit spin spinDuration='42s' size={690} rotation={-5}>
            <div className='size-2 bg-emerald-300/20 rounded-full'></div>
        </HeroOrbit>
        <HeroOrbit spin spinDuration='44s' size={720} rotation={86}>
            <div className='size-3 bg-emerald-300/20 rounded-full'></div>
        </HeroOrbit>
        <HeroOrbit spin spinDuration='46s' shouldSpinoi spinDurationoi='6s' size={750} rotation={144}>
            <Sparkle className='text-emerald-300/20 size-14'/>
        </HeroOrbit>
        <HeroOrbit spin spinDuration='48s' shouldSpinoi spinDurationoi='8s' size={800} rotation={-70}>
            <Star className='text-emerald-300 size-28'/>
        </HeroOrbit>
      </div>
      <div className='container'>
        <div className='flex flex-col items-center'>
          <Image src='/devemoji.png' alt='devemoji' width={100} height={100} />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 flex items-center gap-4 rounded-lg'>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
            <div className='bg-green-500 rounded-full absolute inset-0 animate-ping-large'>
            </div>
            </div>
            <div className='text-sm font-medium text-white font-serif'>
              Available for hire 
            </div>
          </div>
          <div className='max-w-2xl mx-auto'>
            <h1 className='text-2xl md:text-4xl font-serif text-center mt-8 tracking-wide text-white'>Building high performance & robust web applications</h1>
            <p className='mt-4 text-center text-white/60 '>I am a skilled and experienced web developer with four years of expertise in designing accessible, responsive, and interactive webpages using various frontend tools. Additionally, I specialize in constructing eﬃcient and scalable APIs and other backend services
            using Golang. Let&apos;s discuss your next project.</p>
          </div>
          
          <div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-8 z-20'>
            <Button onClick={scrollToProjects} variant='destructive' className='w-full font-serif'>Explore My Work <ArrowDown className="ml-2 h-6 w-6" /></Button>
            <Button onClick={handleMailClick} variant='secondary' className='w-full font-serif'><HandMetal className="mr-2 h-6 w-6" /> Let&apos;s Connect</Button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Hero