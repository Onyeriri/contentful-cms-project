import React from 'react';
import { useData } from '../../hooks/data';

const Project = () => {
  const { data, isLoading } = useData();

 const displayContent =  data?.map((item) => {
    const { fields } = item;
    const { title, url, image } = fields;
    const { fields: details } = image;
    
   return (
    <a href={url} key={title} target='_blank' rel='noreferrer'>
      <div className="project">
        <img className='img' src={details.file.url} alt={details.description} />
        <h5>{title}</h5>
      </div>
    </a>
    )
  })


  if (isLoading) {
    return <div className="loading"></div>
  }
    
  return (
    <section className='projects'>
      <div className='title'>
        <h2>projects</h2>
        <div className='title-underline'></div>
      </div>
    <div className='projects-center'>
        {displayContent}
    </div>
    </section>
  )
}

export default Project