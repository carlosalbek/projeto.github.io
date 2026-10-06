    import { Link, useLocation } from "react-router-dom";
    import './NavBar.css'
    

    function NavBar () {
        const location = useLocation();
        return(

         //<nav style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
            <nav className="navbar-container">

                {location.pathname !== "/" &&(
                    <Link to='/'className="nav-link btn-back" >Voltar</Link>
                )}
                
                <Link to ="/aprendizagem" className="nav-link">Aprendizagem</Link>
                <Link to ="/autoavaliacao" className="nav-link" >Autoavaliação</Link>
                <Link to ="/codigo" className="nav-link">Codigos </Link>
                <Link to ="/competencias" className="nav-link">Competencias </Link>
                <Link to ="/projeto" className="nav-link">Projetos </Link>
                <Link to ="/fotos"className="nav-link">Registros </Link>
                <Link to ="/relatorios" className="nav-link">Relatorios </Link>
                <Link to ="/videos" className="nav-link">Videos</Link>

            </nav>
        )
    }
    export default NavBar