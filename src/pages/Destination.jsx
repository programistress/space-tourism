import NavBar from "../components/NavBar"
import Planets from "../components/Planets"
import './Destination.css'


function Destination() {

  return (
    <div className="dest-bg">
      <NavBar />
      <div className="container">
        <Planets />
      </div>
    </div>
  )
}

export default Destination