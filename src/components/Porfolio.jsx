import React from 'react'

import PokemonGame from '../assets/PokemonGame.png'
import CodeWithMe from '../assets/CodeWithMe.png'
import LogitechGProUI from '../assets/LogitechGProUI.png'




const Porfolio = () => {

  const portfolios = [
    {
      id: 1,
      name: <p className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>Pokemon Game</p>,
      src: PokemonGame
      
    },
    {
      id: 2,
      name: <p className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>Code with Me</p>,
      src: CodeWithMe
      
    },
    {
      id: 3,
      name: <p className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>Logitech G Pro UI</p>,
      src: LogitechGProUI
      
    },
    
  
  ]
  return (
    <div
    name='portfolio'
    className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
        Portifolio
        </p >
        <p className='py-6'>
        Confira um pouco do meu trabalho aqui
        </p>
      </div>

      
    <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
    {portfolios.map(({id, src, name}) => (
          <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            {name}
          <img src={src} alt='Pokedex' className='rounded-md duration-200 hover:scale-105  ' />
          <div className='flex items-center justify-center'>
            
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demonstração</button>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Código</button>
          </div>
        </div>
        ))
      }

          
        </div>
     </div>
    </div>
  )
}

export default Porfolio;