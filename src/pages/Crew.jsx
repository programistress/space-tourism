import CrewComp from "../components/CrewComp"
import NavBar from "../components/NavBar"
import './Crew.css'


function Crew() {

  return (
    <div className="crew-bg">
      <NavBar />
      <div className="container">
       <CrewComp />
      </div>
    </div>
  )
}

export default Crew