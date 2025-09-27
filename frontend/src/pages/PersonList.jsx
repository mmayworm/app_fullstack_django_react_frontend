const apiUrl = import.meta.env.VITE_API_URL;
import {useEffect, useState} from 'react'
// import users from './assets/users.png'

const PersonList = () => {
    const [personList, setPersonList] = useState([])
    // const imagePath = './assets/users.png'

    const fetchPersonList = async () => {
        const response = await fetch(`${apiUrl}/person/`)
        const responsePersonList = await response.json()        
        setPersonList(responsePersonList)
        console.log(personList)
    }

    useEffect(()=>{
        fetchPersonList()
    },[])

  return (
    <>
        <div>
            <img src={`./public/${personList.map(person=>(person.profissao))}.png`} className='citizen person' alt='Person' height="80"/>
        </div>
        <div>PersonList</div>
        
        <div>
            {
                personList.map(person=>(
                    <>
                        <p>{person.name}</p>
                        <p>{person.profissao}</p>
                    </>
                    
                ))
            }
        </div>
    </>
  )
}

export default PersonList