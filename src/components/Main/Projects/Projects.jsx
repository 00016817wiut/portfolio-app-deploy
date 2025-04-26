import thumbnail2 from '../../../assets/images/12.jpg'

const Projects = ({repos}) => {




  return (
    <section className="projects" id='projects'>
          <div className="projects__container content">
            <h1 className="projects__title">Проекты</h1>
            <div className="projects__list">
              {repos.map((repo) => {
                  const user = "00016817wiut";
                  const proj_URL = `https://${user}.github.io/${repo.name}`;
              return (
                  <div key={repo.id} className="projects__list-item">
                  <a href={proj_URL} target='_blank'>
                  <img src={thumbnail2} className="project-image" />
                  </a>
                  <h1 className='projects__list-item-title'>{repo.name}</h1>
                  <p className='projects__list-item-descr'>{repo.description || 'No description available.'}</p>
                  </div>
              )})}
            </div>
          </div>
        </section>
  )
}
export default Projects;