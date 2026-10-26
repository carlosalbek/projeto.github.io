import { Link } from "react-router-dom"
import './Home.css'

function Home() {
    return(
       <div className="home-container">
            <span className="top-inicio"></span>

        <h1 className="titulo">
            Portfólio Digital
        <br />
            do Estudante
        </h1>

        <p className="descricao">O registro oficial da sua trajetória no Ensino Médio :
         aprendizados acadêmicos,
        <br /> práticas profissionais, 
               projetos, evidências e reflexões tudo em um só lugar,
        <br /> sempre editável por você.</p>

        <br />
        <div className="cards-wrapper" >
            <div className="portfolio-card card-sesi">
                <div className="card-icon icon-sesi">🎓 </div>
            <h3> Portfólio SESi</h3>
            <p>
                 Formação geral em 7 seções: quem sou eu, fundamentos teóricos, participação em sala ,
                 projetos, reflexão crítica, conexões 
                 interdisciplinares e aprendizados para a vida.
            </p>
            <Link to="/sesi" className="card-link-sesi">
            Acessar portfólio SESI</Link>
            </div>
        
            <div className="portfolio-card card-senai">
                <div className="card-icon icon-senai">🎓</div>
            <h3>Portfólio SENAI</h3>
                <p>Formação geral em 8 seções: projetos desenvolvidos, códigos produzidos, registros fotográficos, vídeos,
                relatórios técnicos, aprendizagens construídas, competências desenvolvidas, autoavaliação.</p>

            <Link to="senai" className="card-link-senai">
            Acessar portfólio SENAI</Link>
            </div>
            </div>
       </div>
    )
}
export default Home