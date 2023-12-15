import { Project } from '@/types/project';
import Image from 'next/image';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

export interface ProjectItemProps {

  project: Project
}

const ProjectItem : React.FC<ProjectItemProps> =({project}) => {
  return (

    <div className='border-2 border-stone-900 dark:border-white rounded-md overflow-hidden mb-2'>
    <a href={project.link}>
      <Image
      className='border-black dark:border-slate-500 drop-shadow-xl shadow-black 
      mx-auto mt-6 mb-3 w-full object-cover cursor-pointer'
        src={project.imgUrl ?? ""}
        alt='Project Image'
        width={500}
        height={500}
      />
      <div>
      <p>Title: {project.title}</p>
      <p>Description: {project.description}</p>

     
    </div>
    
  
    <br/>
    </a>

    <a href={project.sourceCodeLink}>
        <p>
          
          <span className='flex items-center'>
            View source code
            <FaGithub className=' ml-2'/>

        </span>
        </p>
    </a>
    </div>
  
  );
}

export default ProjectItem;
