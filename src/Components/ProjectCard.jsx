import React from 'react'
import '../Css/ProjectCard.css'
function ProjectCard({slice}) {
  return (
    <>
    {slice.map((value,index)=>(
        <>
        <div className='project-main-card shadow bg-body ' key={value.id}>
        <a href={value.url} className="project-card">
            <img src={value.image} alt="" />
            <div className="card-content">
                <h3 className='card-title'>{value.title}</h3>
                <div className="publish-date">{value.date}</div>
            </div>
        </a>
        
    </div>
        </>
    ))}
    </>
  )
}

export default ProjectCard