import React,{useState} from 'react'
import RnDprojects from "./Assests/data/RnDprojects.json"
import './CSS/about.css'
const Projects = () => {
    const [projectVisibility, setProjectVisibility] = useState({});

    const toggleProjectVisibility = (index) => {
        setProjectVisibility({
        ...projectVisibility,
        [index]: !projectVisibility[index],
        });
    };
    return (
        <section className='about training' style={{marginTop:'80px'}}>
            <h2 className='about-us'>R&D Projects in CRTDH Labs</h2>
            <div className='separator_left'></div>
          
                {     
                    RnDprojects.map((project,index)=>
                        (
                            // CSS under home.css
                            <div className='about-us-text project-div'>
                                <div className='project-info'>
                                    <p style={{fontWeight:"700"}}>{project.Name}</p> 
                                    <p>{projectVisibility[index] ? project.Info : project.Info.slice(0, 400)}</p>
                                    {project.Info.length > 400 && (
                                    <p className="read-more-link" onClick={() => toggleProjectVisibility(index)}>
                                        {projectVisibility[index] ? 'Read Less' : 'Read More'}
                                    </p>
                                    )}
                                </div>
                                {
                                    project.ImageLink?
                                    <img src={require(`${project.ImageLink}`)} className='project-picture'></img>:""
                                }
                                
                            </div>
                            
                        )
                    )
                }
        </section>
    )
}

export default Projects
