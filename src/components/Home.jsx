import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import './Home.css'

function Home() {
    return(
       <div className="home-container">
        <h1>Olá, eu sou o Carlos Alberto</h1>
        <p>Lordbola</p>
        <br />
        <div >
            <button className="button-css">SESI</button> 
            <button className="button-css" >SENAI</button>
        </div>
        
       </div>
    )
}
export default Home