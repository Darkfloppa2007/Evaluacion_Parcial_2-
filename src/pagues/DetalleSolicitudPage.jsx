import {useParams} from "react-router";

function DetalleSolicitudPage({solicitudes}){

    const {id} = useParams();

    const solicitud = solicitudes.find((item) => item.id === Number(id));

    if(!solicitud) {
        return <div className="container py-4">Solicitud no encontrada</div>
    }

    return(
        <main className="container py-4">
            <h1 className="h3">Detalle de la solicitud</h1>

            <div className="card mt-3">
                <div className="card-body">
                    <p><strong>Candidato: </strong> {solicitud.candidato}</p>
                    <p><strong>Cargo: </strong> {solicitud.cargo}</p>
                    <p><strong>Estado: </strong> {solicitud.estado}</p>

                </div>
            </div>
            
        </main>
    )

}

export default DetalleSolicitudPage;