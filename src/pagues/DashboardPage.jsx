import IndicadorCard from "../components/IndicadorCard";
import CandidatoCard from "../components/CandidatoCard";
import SolicitudesPanel from "../components/SolicitudesPanel";

function DashboardPage() {

  const indicadores = [
    { id: 1, valor: 12, titulo: "Candidatos" },
    { id: 2, valor: 5, titulo: "Pendientes" },
    { id: 3, valor: 4, titulo: "En proceso" },
    { id: 4, valor: 3, titulo: "Finalizadas" }
  ];

  const candidatos = [
    {
      id: 1,
      nombre: "Ana Torres",
      cargo: "Analista",
      estado: "Pendiente"
    },
    {
      id: 2,
      nombre: "Diego Soto",
      cargo: "Supervisor",
      estado: "En proceso"
    },
    {
      id: 3,
      nombre: "Camila Rojas",
      cargo: "Operador",
      estado: "Finalizada"
    }
  ];

const solicitudes = [
  {
    id: 1,
    candidato: "Ana Torres",
    cargo: "Analista",
    estado: "Pendiente",
    responsable: "Laura Pérez"
  },
  {
    id: 2,
    candidato: "Diego Soto",
    cargo: "Supervisor",
    estado: "En proceso",
    responsable: "Carlos Díaz"
  },
  {
    id: 3,
    candidato: "Camila Rojas",
    cargo: "Operador",
    estado: "Finalizada",
    responsable: "Laura Pérez"
  }
];

  return (
    <main className="container py-4">

      <section className="mb-4">
        <p className="text-secondary mb-1">
          Proyecto VcM · Full Stack II
        </p>
        <h1 className="h3">Dashboard</h1>
      </section>

      <section className="row g-3 mb-5">
        {indicadores.map((indicador) => (
          <IndicadorCard
            key={indicador.id}
            valor={indicador.valor}
            titulo={indicador.titulo}
          />
        ))}
      </section>

      <section>
        <h2 className="h4 mb-3">
          Candidatos recientes
        </h2>

        <div className="row g-3">
          {candidatos.map((candidato) => (
            <CandidatoCard
              key={candidato.id}
              nombre={candidato.nombre}
              cargo={candidato.cargo}
              estado={candidato.estado}
            />
          ))}
        </div>
      </section>
      
      <SolicitudesPanel solicitudes={solicitudes} />



    </main>
  );
}

export default DashboardPage;