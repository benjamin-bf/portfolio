"use client"
import { Typography } from '@material-tailwind/react'
import React from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import ProjectCard from '@/components/projectCard';

export default function Home() {
  const [iconColor, setIconColor] = React.useState('white')

  const colorZap = (color: string) => {
    if (color === 'white') {
      setIconColor('black')
    } else {
      setIconColor('white')
    }
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      colorZap(iconColor)
    }, 1000);
    return () => clearInterval(interval);
  }, [iconColor]);


  const itemsHeader = [{name:"Home", id:"home"}, {name:"About", id:"aboutMe"},{name:"Skills", id:"skills"}, {name:"Projects", id:"projects"}, {name:"contact", id:"contact"}]
  return (
    <main>
      <div className="flex h-screen flex-col items-center justify-between" id="home">
      <div className='flex flex-col w-full h-full justify-between'>
        <div className='fixed h-[56px] flex justify-between w-full items-center px-6'>
            <h1 className=' text-2xl font-bold'>Benjamin BF</h1>
            <div>
              <ul>
                {itemsHeader.map((item, index) => (
                  <li key={index} className='inline-block m-5'><a href={`#`+`${item.id}`}>{item.name}</a></li>
                ))}
              </ul>
            </div>
        </div>
        <div className='mx-auto my-60'>
          <div className='text-red-400 font-semibold'>HELLO THERE</div>
          <div className='flex items-end'>
            <h1 className='font-bold text-2xl w-20'>I am </h1>
            <h1 className='font-bold text-4xl'>Benjamin Boule</h1>
          </div>
          <div className='flex  items-end'>
            <h1 className='font-bold text-2xl w-20'>I am a </h1>
            <h1 className='font-bold text-4xl'>Full Stack Developper</h1>
          </div>
        </div>
        <div className='mx-auto text-center'>
          <div>SCROLL DOWN</div>
          <div className={`text-${iconColor}`}><KeyboardDoubleArrowDownIcon/></div>
        </div>
        
      </div>  
   </div>
   <div className='flex flex-col w-full h-screen justify-between bg-slate-500' id="aboutMe">
      <div className='w-1/3 h-2/3 m-auto'>
        <div className='p-10'>
          <p>ABOUT</p>
          <p>Personnal Info</p>
          <p>Get to know more about me</p>
        </div>
        <div className='p-10'>
          <p className='py-4'>Hello</p>
          <p className='text-xl'>
            I&apos;m Benjamin Boule Fogang, a passionate computer coder specializing in full-stack application development. 
            I leverage modern API technology to build innovative solutions that solve industry-specific challenges.
            
          </p>
          <p className='py-4'>
            Let&apos;s collaborate on future projects!
          </p>
        </div>

      </div>
    </div>
    <div className='flex flex-col w-full h-screen justify-between bg-slate-200' id="skills">

    </div>
    <div className='flex flex-col w-full h-screen justify-between bg-red-100' id="projects">
      <div className='grid grid-cols-3 grid-rows-2 w-3/5 h-full mt-40 mb-20 mx-auto gap-4 '>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        
      </div>
    </div>
    <div className='flex flex-col w-full h-screen justify-between bg-slate-200' id="contact">

    </div>


    </main>
    
  )
}
