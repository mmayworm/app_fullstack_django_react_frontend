// Use o hook useState para gerenciar o valor do campo de input e também o estado para armazenar 
// os dados do usuário que serão buscados.
// Crie um elemento input com o tipo "text" e vincule seu value a uma variável de estado.
// Use o evento onChange no input para disparar uma função que irá atualizar o valor do input no estado.
//const apiUrl = import.meta.env.VITE_API_URL;
import { useState, useEffect } from 'react'

const Home = () => {
const [search, setSearch] = useState('')
const [profissional, setProfissional] = useState([])
const [getDados, setGetDados] = useState([])

const handleSearch = (event)=> {
  event.preventDefault()
  setSearch(event.target.value)
  console.log(search)
}

const get_dados = async () => {
        const response = await fetch('https://mmayworm.pythonanywhere.com/person/')
        const responsePersonList = await response.json()
        const dados = responsePersonList.map(person=>person.profissao)
        const dadosSet = new Set(dados);
        const dadosTratados = [...dadosSet]
        setGetDados(dadosTratados)
        console.log('dados: ', dadosTratados)
        // setStart('True')
}        

const fetchHome = async () => {
        const response = await fetch('https://mmayworm.pythonanywhere.com/person/')
        const responsePersonList = await response.json()
        const pesquisa = responsePersonList.filter((person=>person.profissao.includes(search)))
        setProfissional(pesquisa)
        console.log('pesquisa'+ pesquisa)
        console.log('profissonal'+ profissional.localizacao)
        console.log(Object.values(profissional))
        // setStart('True')
}        

useEffect(()=>{
        get_dados()
    },[])

  return (
    <div>
        <div>
        <h1 style={{color: 'black'}}>
          Encontre um Profissional
        </h1>
        <select onChange={handleSearch} className ="block  w-sm bg-white border border-gray-300
         hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none 
         focus:ring-2 focus:ring-indigo-500 focus:border-transparent cursor-pointer" style={{margin: 'auto'}}>
          {            
            getDados.map(option=>(
              <option>{option}</option>
            ))
          }
        </select>
        <button className='m-3' onClick={fetchHome}>Procurar</button>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px'}}>
          {
                profissional.map(person=>(
                    <div>
                        
                          <div className ="w-48 md:w-64 lg:w-64  rounded overflow-hidden shadow-lg">
                          <img  src={`${person.localizacao}.png`}  alt="Sunset in the mountains" className=' w-64 h-64  object-cover rounded-t-lg'/>
                          <div className ="px-6 py-4">
                            <div className ="font-bold text-xl mb-2">{person.name}</div> 
                            <p className ="text-gray-700 text-base">
                              {person.atuacao_especialidade}
                            </p>
                          </div>
                          <div className ="px-6 pt-4 pb-2">
                            <button>Entrar</button>
                          </div>
                        </div>
                        
                    </div>
                    
                ))
                
            }
            
        </div> 

        

    
        
    
                   
         
      
        
        
        
        

    </div>
  )
}

export default Home
