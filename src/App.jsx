import NavBar from "./components/NavBar"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Destination from "./pages/Destination"
import Crew from "./pages/Crew"
import Technology from "./pages/Technology"

function App() {

  return (
    <div>
      <div>
      <BrowserRouter>
       <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route index element={<Destination />}></Route>
        <Route path="/destination" element={<Destination />}></Route>
        <Route index element={<Crew />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route index element={<Technology />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
       </Routes>
      </BrowserRouter>
      </div>
    </div>
  )
}

export default App
