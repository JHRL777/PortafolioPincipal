import React from 'react';
import DatosNavbar from '../components/DatosNavbar';
import logoprincipal from '../assets/logoprincipal.png'; 

function Navbar() {
    const menuItems = ['Inicio', 'Proyectos', 'Contacto']; 
    const usuario = 'JRL';
    const estado = 'Conectado'; 
    const logo = logoprincipal; 

    return (
        <nav className=' sticky top-0 z-50 bg-black shadow-lg flex justify-between max-w-7xl mx-auto md:px-5 mt-7 sty'>
            <DatosNavbar 
                logo={logo}
                menus={menuItems}
                usuario={usuario}
                estado={estado}
            />
        </nav>
    );
}

export default Navbar;
