import{ useState } from "react";
import { useNavigate } from "react-router";
import { validarSolicitud } from "../utils/Solicitudes";
function NuevaSolicitudPage({onAgregar}){
    const [candidato, setCandidato] = useState("");
    const [cargo, setCargo] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const guardar = (e) => {
        e.preventDefault();

        if(!validarSolicitud(candidato, cargo)){
            setError("Todos los campos son obligatorios");
            return;
        }

        onAgregar({candidato, cargo, estado: "Pendiente"});

        navigate("/solicitudes");
    };

    return(
        <main className="container py-4">
            <h1 className="h3">Nueva solicitud</h1>
            
            <form onSubmit={guardar} className="mt-4"> 
                <input className="form-control mb-3"
                placeholder="Nombre del candidato"
                value={candidato}
                onChange={(e) => setCandidato(e.target.value)}
                />

                <input className="form-control mb-3"
                placeholder="Cargo solicitado"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                />
                {error && <div className="text-danger">{error}</div>}

                <button type="submit" className="btn btn-primary">
                    Guardar Solicitud
                </button>
            </form>


            
        </main>
        
    );

}

export default NuevaSolicitudPage;