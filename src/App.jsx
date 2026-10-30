import { useState } from 'react';
import {Routes, Route} from 'react-router';
import AppNavbar from './components/AppNavbar';
import DashboardPage from './pagues/DashboardPage';
import CandidatosPage from './pagues/CandidatosPage';
import NuevaSolicitudPage from './pagues/NuevaSolicitudPage';
import SolicitudesPage from './pagues/SolicitudesPage';
import DetalleSolicitudPage from './pagues/DetalleSolicitudPage';

function App() {

    const [solicitudes, setSolicitudes] = useState([
      {id : 1, candidato: 'Ana Torres', cargo: 'Analista', estado: 'Pendiente'},
      {id : 2, candidato: 'Diego Soto', cargo: 'Supervisor', estado: 'En proceso'},


    ]);

    const agregarSolicitud = (nueva) => {
      setSolicitudes([...solicitudes, {id: Date.now(), ...nueva}]);
    };

  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/candidatos" element={<CandidatosPage />} />
        <Route path="/nueva-solicitud" element={<NuevaSolicitudPage onAgregar={agregarSolicitud} />} />
        <Route path="/solicitudes" element={<SolicitudesPage solicitudes={solicitudes} />} />
        <Route path="/solicitudes/:id" element={<DetalleSolicitudPage solicitudes={solicitudes} />} />
      </Routes>
    </>
  );
}

export default App;