import Hero from "../components/Hero"
import NavBar from "../components/NavBar"


function Home() {

  return (
    <div className="App">
      <NavBar />
      <div className="container">
      <Hero />
      </div>
    </div>
  )
}

export default Home