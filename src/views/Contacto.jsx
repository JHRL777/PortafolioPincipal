import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Contacto() {
  return (
    <div id='Contacto' className="max-w-4xl mx-auto px-4 mt-10 mb-10">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contacto</h2>
      <div className="flex justify-center items-center gap-10">
        <a href="https://api.whatsapp.com/send?phone=3219759241" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white hover:bg-green-600 transition duration-300 ease-in-out">
          <FaWhatsapp className="w-8 h-8" />
        </a>
        <a href="mailto:jhonatan.reyesleon07@gmail.com" className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out">
          <FaEnvelope className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
}

export default Contacto;
