import React from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import perfilFoto from "../assets/perfilFoto.jpg"
import { habilidades,perfil } from '../components/Habilidades';

function Header() {
  return (
    <section id='Inicio' className='flex justify-center items-center max-w-7xl mx-auto md:px-5 mt-7'>
    <div className='w-full border md:flex rounded-lg overflow-hidden'>
        <div className='w-full border-r mb-2 md:mr-auto'>
            <div className='bg-white h-5 pt-0.5'>
                <div className='bg-black w-20 h-full ml-1 rounded-t-lg '>
                    <p className='text-sm pl-1 pr-1 text-white'>Perfil</p>
                </div>
            </div>
            <div className='p-4'>
                <div className='flex items-center gap-4'>
                    <img className='w-24 h-24 rounded-full border-2 border-gray-300' src={perfilFoto} alt="foto de perfil" />
                    <div>
                        <h1 className="text-xl font-semibold">Ingeniero de Sistemas</h1>
                        <h2 className="text-lg">Jhonatan Reyes</h2>
                        <ul className='flex gap-2'>
                            <li><a target="_blank" rel="noopener noreferrer" className="top-2 right-2 text-gray-100 hover:text-[#5BD1D7] cursor-pointer" href="https://www.linkedin.com/in/jhonatan-reyes-316a80271/"><AiFillLinkedin  className="w-6 h-6"/></a></li>
                            <li ><a target="_blank" rel="noopener noreferrer"  className="top-2 right-2 text-gray-100 hover:text-[#5BD1D7] cursor-pointer" href='https://github.com/JHRL777?tab=repositories' ><FaGithubSquare className="w-6 h-6" /></a></li>
                        </ul>
                    </div>
                </div>
                <h5 className="text-lg font-semibold mt-4">Sobre mi</h5>
                <p className="text-gray-300">{perfil.descripcion}</p>
            </div>
        </div>
        <div className='w-full  border-r mb-2 md:mr-auto'>
            <div className='bg-white h-5 pt-0.5'>
                <div className='bg-black w-20 h-full ml-1 rounded-t-lg '>
                    <p className='text-sm pl-1 pr-1 text-white'>Habilidades</p>
                </div>
            </div>
            <div className='p-4 grid grid-cols-2 md:grid-cols-3 gap-4'>
                {habilidades.map(habilidad => (
                    <div className="flex items-center gap-2 bg-[#5BD1D7] bg-opacity-10 border border-[#5BD1D7] rounded-lg p-2 hover:bg-opacity-100 transition duration-300 ease-in-out" key={habilidad.id}>
                        <div className="w-16 h-16 overflow-hidden rounded-full">
                            <img className="object-cover w-full h-full" src={habilidad.img} alt={habilidad.nombre} />
                        </div>
                        <p className="text-[#5BD1D7] font-semibold text-lg">{habilidad.nombre}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
</section>
)
}

export default Header
