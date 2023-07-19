import React from 'react'

type Props = {}

const ProjectCard = (props: Props) => {
  return (
    <div className='flex flex-col w-full h-full justify-between bg-slate-500'>
        <div>
            <div>image</div>
        </div>
        <div>
            <div>title</div>
            <div>description</div>
        </div>
        <div>button</div>
    </div>
  )
}

export default ProjectCard