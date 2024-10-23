'use client'

import React from 'react'
import SectionHeader from './SectionHeader'
import Card from './Card'
import GoLang from '@/public/golang-brands-solid.svg'
import TypeScript from '@/public/typescript.svg'
import TailwindCSS from '@/public/tailwindcss.svg'
import ReactIcon from '@/public/react.svg'
import NextJS from '@/public/nextdotjs.svg'
import PostgresSQL from '@/public/postgresql.svg'
import Image from 'next/image'
import CardHeader from './CardHeader'
import ToolboxItem from './ToolboxItem'
import {motion} from 'framer-motion'


const toolboxItems = [
  {
    title:'Typescript',
    iconType: TypeScript
  },
  {
    title:'Golang',
    iconType: GoLang
  },
  {
    title:'Tailwind CSS',
    iconType: TailwindCSS
  },
  {
    title:'React',
    iconType: ReactIcon
  },
  {
    title:'NextJS', 
    iconType: NextJS
  },
  {
    title:'PostgreSQL',
    iconType: PostgresSQL
  },
]

const hobbies = [
  {
    title:'Biking',
    emoji: '🏍️',
    left:'50%',
    top:'50%',
    
  },
  {
    title: 'Movies',
    emoji: '🍿',
    left:'5%',
    top:'5%',
  },
  {
    title: 'Music',
    emoji: '🎸',
    left:'50%',
    top:'5%',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
    left:'10%',
    top:'35%',
  },
  {
    title: 'Gaming',
    emoji: '🕹️',
    left:'40%',
    top:'30%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left:'60%',
    top:'65%',
  },
  {
    title: 'Scrolling',
    emoji: '🤣',
    left:'5%',
    top:'65%  ',
  },

]


const About = () => {
  const constraintsRef = React.useRef(null)
  return (
    <div className='py-20 lg:py-28'>
      <div className='container'>
      <SectionHeader
        title='About Me'
        secondaryTitle='A glimpse into my world'
        description='I am a software engineer with a passion for web development and design. A self-taught web developer with a focus on front-end development.' />
        <div className='mt-20 flex flex-col gap-6'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-5'>
          <Card className='h-[320px] p-0 col-span-5'>
            <CardHeader className='px-6 pt-6' title={'My Toolbox'} desscription={'Explore the tools and technologies I use to build websites and web applications.'} />
            <ToolboxItem className='mt-6' itemsWrapperClassName='animate-move-right [animation-duration:40s]' toolboxItems={toolboxItems}/>
            <ToolboxItem className='mt-6' itemsWrapperClassName='-translate-x-1/2 animate-move-left [animation-duration:40s]' toolboxItems={toolboxItems}/>
          </Card>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-5'>
          <Card className='h-[320px] p-0 flex flex-col col-span-3'>
            <CardHeader className='px-6 py-6' title={'Beyond Coding'} desscription={'Explore my interest and hobbies beyond the digital realm.'}/>
            <div className='relative flex-1' ref={constraintsRef}>
              {hobbies.map(hobby => (
                <motion.div className='inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute' style={
                  {
                    left: hobby.left,
                    top: hobby.top
                  }
                } key={hobby.title} drag dragConstraints={constraintsRef}>
                  <span className='font-medium text-gray-950'>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>

          </Card>
          <Card className='h-[320px] p-0 relative md:col-span-2 col-span-3'>
            <Image className='h-full w-full object-cover' src='/khulna.png' alt='location' width={1000} height={1000}></Image>
            <div className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[""] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30'>
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'>
            </div>
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'>
            </div>
              <Image className='size-20' src='/devemoji.png' alt='dev emoji' width={50} height={50}></Image>
            </div>
            
          </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About