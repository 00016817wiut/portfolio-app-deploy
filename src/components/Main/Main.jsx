import './Main.css'
import '../../assets/styles/root.css'

import Projects from './Projects/Projects'

const Main = ({repos}) => {
  return(
      <main className="main">
        <Projects repos={repos}/>
      </main>
  )

}
export default Main;