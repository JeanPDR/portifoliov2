import React from 'react'

const About = () => {
  return (
    <div
    nome="about"
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 borgray500'>
                Sobre</p>
        </div>

        <p className='text-xl mt-20'>
        A minha paixão me levou a criar alguns projetos e layouts, de alguns sites e aplicativos, no qual tenho buscado mais conhecimento a cada dia, descobrindo novas linguagens de desenvolvimento web e mobile e suas ferramentas como Javascript que é minha linguagem favorita.
        </p>

        <br/>

        <p className='text-xl'>
        O meu sonho e poder trabalhar com Desenvolvimento e UX UI, pois estas profissões me da oportunidade e liberdade tirar algumas ideais da cabeça da e coloca-las em prática, com objetivo de o próximo com alguma solução tecnológica e liberdade tirar algumas ideais de cebeças da e coloca-las em pratica, com objetivo de o proximo com alguma solução tecnologica.
        </p>
        </div>
    </div>
  )
}

export default About