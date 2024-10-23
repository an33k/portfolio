import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const footerLinks = [
  {
    title: "Github",
    href: "https://github.com/an33k"
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/aneek-khan/"
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/KhAneek/"
  }
]

const Footer = () => {
  return (
    <footer className='relative z-10 overflow-x-clip'> {/* changed z-index to 10 */}
      <div className='absolute h-[200px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] z-0'></div> {/* adjusted z-index */}
      <div className='container'>
        <div className='border-t border-white/30 py-6 text-sm flex md:flex-row md:justify-between flex-col items-center gap-8'>
          <div className='text-white/40'>
            &copy; All rights reserved.
          </div>
          <div className='z-20'>
            <nav className='flex flex-col md:flex-row items-center gap-8'>
              {
                footerLinks.map((links, index) => (
                  <Link key={index} className='inline-flex items-center gap-1.5' href={links.href} target='_blank' rel='noopener noreferrer'>
                    <span className='font-semibold font-serif'>
                      {links.title}
                    </span>
                    <ArrowUpRight className='h-4 w-4' /> {/* fixed size */}
                  </Link>
                ))
              }
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
