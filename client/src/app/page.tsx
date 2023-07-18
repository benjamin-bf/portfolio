"use client"
import { Typography } from '@material-tailwind/react'
import React from 'react'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

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




  const itemsHeader = ["Home", "About","Skills", "Projects", "contact"]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

    <div className='flex flex-col w-full'>
      <div className='h-[56px] flex justify-between w-full items-center px-6'>
          <h1 className=' text-2xl font-bold'>Benjamin BF</h1>
          <div>
            <ul>
              {itemsHeader.map((item, index) => (
                <li key={index} className='inline-block m-5'><a href='#'>{item}</a></li>
              ))}
            </ul>
          </div>
      </div>
      <div className='mx-auto my-80'>
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
        <div className={`text-`+`${iconColor}`}><KeyboardDoubleArrowDownIcon/></div>
      </div>
      
    </div>  
   </main>
  )
}
