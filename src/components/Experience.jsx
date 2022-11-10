import React from 'react'
import Html from "../assets/html.png"
import Css from "../assets/css.png"
import Javascript from "../assets/js.png"
import ReactJS from "../assets/react.png"
import Tailwild from "../assets/tailwild.png"
import NextJs from "../assets/next.png"
import NodeJs from "../assets/node.png"
import Github from "../assets/github.png"
import MySql from "../assets/mysql.png"
import Scrum from "../assets/scrum.png"
import UI from "../assets/ui.png"
import UX from "../assets/ux.png"



const Experience = () => {

 const techs = [
  {
    id: 1,
    src: Html,
    title: 'HTML',
    style: 'shadow-orange-500'
  },
  {
    id: 2,
    src: Css,
    title: 'CSS',
    style: 'shadow-blue-500'
  },
  {
    id:3,
    src: Javascript,
    title: 'Javascript',
    style: 'shadow-yellow-500'
  },
  {
    id:4,
    src: ReactJS,
    title: 'React',
    style: 'shadow-blue-500'
  },
  {
    id:5,
    src: NextJs,
    title: 'Next',
    style: 'shadow-white'
  },
  {
    id:6,
    src: Tailwild,
    title: 'Tailwild',
    style: 'shadow-sky-500'
  },
  {
    id:7,
    src: NodeJs,
    title: 'NodeJs',
    style: 'shadow-green-500'
  },
  {
    id:8,
    src: Github,
    title: 'Github',
    style: 'shadow-gray-400'
  },
  {
    id:9,
    src: MySql,
    title: 'MySql',
    style: 'shadow-blue-300'
  },
  {
    id:10,
    src: UI,
    title: 'User Interface',
    style: 'shadow-gray-300'
  },
  {
    id:11,
    src: UX,
    title: 'User Experience',
    style: 'shadow-gray-300'
  },
  {
    id:12,
    src: Scrum,
    title: 'Scrum - Metodogia Ágil',
    style: 'shadow-gray-300'
  },


 ]

  return (
    
    <div
    name='experience'
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
        Experiências
        </p>
        <p className='py-6'>
        Confira as tecnologicas que ja trabalhei
        </p>
      </div>

        

        <div className='w-full h-screen grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {
            techs.map(({id, src, title, style}) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="Liguaguem de Programação" className='w-20 mx-auto' />
            <p className='mt-4'>{title}</p>
          </div>
             ))
          }
        </div>
        <div className='w-full h-screen grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
         
        </div>
      </div>
    </div>
  )
};

export default Experience