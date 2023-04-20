import NavBar from "../components/NavBar"
import TechnologyComp from "../components/TechnologyComp"
import './Technology.css'


function Technology() {

  return (
    <div className="tech-bg">
      <NavBar />
      <div className="container-tech">
      <TechnologyComp />
      </div>
    </div>
  )
}

export default Technology