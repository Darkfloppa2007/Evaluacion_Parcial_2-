import { Link } from "react-router";

function SolicitudPage({ solicitudes }){
    return(
        <main className="container py-4">

            <div className="d-flex-justify-content-between mb-3">

                <h1 className="h3">Solicitudes</h1>

                <Link className="btn btn-primary" to="/nueva-solicitud">
                    Nueva solicitud
                </Link>

                <div className="list-grup">

                    {solicitudes.map((solicitud) => (

                        <Link key={solicitud.id} to={`/solicitudes/${solicitud.id}`}
                        className="list-group-item list-group-item-action">
                            <strong>{solicitud.candidato}</strong> 
                            {"."}{solicitud.cargo} 
                            {"."}{solicitud.estado}

                        </Link>

                    ))}

                </div>

            </div>
 
        </main>

    );
}

export default SolicitudPage;