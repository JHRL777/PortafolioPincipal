import React from 'react';

function DatosNavbar(props) {
  return (
    <>
      <div className='flex items-center gap-4 py-3'>
        <div className='relative'>
          <img src={props.logo} alt="logo" className="w-12 h-12 rounded-full shadow-md" />
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
        </div>
        <div className='flex flex-col'>
          <h2 className='text-lg font-bold'>{props.usuario}</h2>
          <span className='text-xs text-gray-400'>{props.estado}</span>
        </div>
      </div>
      <div className='md:block'>
        <ul className='flex rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-zinc-800 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
          {props.menus.map((menu, i) => (
            <li key={i}>
              <a href={`#${menu}`}  className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" >{menu}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default DatosNavbar;
