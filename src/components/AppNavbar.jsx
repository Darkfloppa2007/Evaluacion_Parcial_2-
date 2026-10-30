import { Link } from "react-router";
function AppNavbar() {
  return (

    <nav className= "navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-Brand" to="/">
         Vcm Psicolaboral
        </Link>

        <div className="d-flex gap-3">

          <Link className="nav-link text-white" to="/"> Inicio</Link>
          <Link className="nav-link text-white" to="/candidatos">Candidatos</Link>
          <Link className="nav-link text-white" to="/solicitudes">Solicitudes</Link>

        </div>
      </div>
    </nav>
    
  );
}

export default AppNavbar;