import React from 'react'
import drp from '@/public/drp.png'
import graphlogic from '@/public/graphlogic.png'
import graphsynergy from '@/public/graphsynergy.png'
import Link from 'next/link';
import Image from 'next/image'
import { ArrowUpRight, CircleCheck } from 'lucide-react';
import { Button } from './ui/button';
import SectionHeader from './SectionHeader';

const portfolioProjects = [
  {
    company: "Brankas",
    year: "2022",
    title: "Digital Remmitance Platform",
    results: [
      { title: "Developed UI" },
      { title: "Golang, postgres, gRPC, tailwind" },
      { title: "Integrated Remmitance Partners" },
    ],
    link: "https://www.perahub.com.ph/remittance",
    image: drp,
  },

  {
    company: "Graphlogic",
    year: "2023",
    title: "Low-Code Platform",
    results: [
      { title: "Developed UI" },
      { title: "Golang, postgres, react, tailwind" },
      { title: "Worked on a drag and drop UI builder, graphview" },
    ],
    link: "https://graphlogic.com/",
    image: graphlogic,
  },
  {
    company: "Graphlogic",
    year: "2024",
    title: "Graph Synergy",
    results: [
      { title: "Developed UI" },
      { title: "Nestjs, neo4j, nextjs, react" },
      { title: "Worked on formBuilder, taskManger, BMC" },
    ],
    link: "https://graphsynergy.graphlogic.xyz/",
    image: graphsynergy,
  },
];


const Projects = () => {
  return (
    <div className='pb-16 lg:py-24'>
      <div className='container'>
        <SectionHeader title='Real World Projects' secondaryTitle='Feautured Prjects' description='Worked on these real world project to transform concepts into engaging digital experiences.'  />
          <div className='flex flex-col mt-10 md:mt-20 gap-20'>
            {portfolioProjects.map((project, index) => (
              <div key={project.title} className='bg-gray-800 z-10 rounded-3xl relative after:content-[""] after:absolute after:inset-0 after:z-10 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 overflow-hidden px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-12 lg:px-14 sticky' style={
                {
                  top: `calc(64px + ${index * 40}px)`
                }
              }>
                <div className='absolute inset-0 -z-10 opacity-20' style={{
                  backgroundImage: 'url(/grain.jpg)',
                }}></div>
                <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                  <div className='lg:pb-12'>
                  <div className='flex flex-col'>
                    <div className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 text-transparent bg-clip-text font-bold uppercase font-serif text-sm'>
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className='font-serif text-2xl mt-4 md:text-4xl'>{project.title}</h3>
                    <hr className='border-t-2 border-white/15 mt-4 md:mt-5' />
                    <ul className='flex flex-col gap-4 mt-4'>
                      {project.results.map((result) => (
                        <li className='flex gap-2 text-sm md:text-base text-white/50' key={result.title}> 
                          <CircleCheck className='size-5 inline-block' />
                          <span className=''>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant={'secondary'} className='mt-8 md:w-fit px-8'>
                      <Link className='inline-flex justify-center items-center gap-2 font-semibold font-serif' href={project.link}>Visit Site <ArrowUpRight/></Link>
                    </Button>
                    </div>
                    </div>
                    <div className='relative'>
                      <Image className='lg:rounded-tl-lg rounded-t mt-8 -mb-4 md:-mb-1 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none' src={project.image} alt={project.title} />
                    </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Projects