import React from 'react';
import { proyectos } from '../components/DatosProyecto';
import { habilidades } from '../components/Habilidades';
import { FaGithub } from "react-icons/fa";

function Proyectos() {
  return (
    <div id='Proyectos' className='max-w-7xl mx-auto md:px-5 mt-7'>
      <h2 className="text-2xl font-semibold mb-4">Proyectos</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="border rounded-xl p-4 relative">
            <h3 className="text-lg font-semibold mb-2">{proyecto.nombre}</h3>
            <p className="text-gray-400 mb-4">{proyecto.descripcion}</p>
            <a href={proyecto.git} className="absolute top-2 right-2 text-gray-100 hover:text-gray-800" target="_blank" rel="noopener noreferrer"><FaGithub className="w-6 h-6" /></a>
            <div className='flex flex-wrap gap-2'>
              {proyecto.habilidades.map((habilidadProyecto) => {
                const habilidad = habilidades.find((habilidad) => habilidad.nombre.toLowerCase() === habilidadProyecto.toLowerCase());
                if (habilidad) {
                  return (
                    <div key={habilidad.id} className="flex items-center bg-blue-200 text-blue-800 px-2 py-1 rounded-md">
                      <img src={habilidad.img} alt={habilidad.nombre} className="w-4 h-4 mr-1" />
                      <p className="text-xs">{habilidad.nombre}</p>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proyectos;
