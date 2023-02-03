import React,{useState,useEffect} from 'react'
  function OneUser ({estado}) {
    const [id,setId] = useState(0)
    const [users,setUsers] = useState([])
    const [max,setMax] = useState(1)
    useEffect(()=>{
      fetch(`http://localhost:3000/api/allUsers`)
      .then(res => res.json())
      .then(data => {
        setMax(data.count)
        setUsers(data.users)})
    },[])

    useEffect(()=>{
      fetch(`http://localhost:3000/api/allUsers`)
      .then(res => res.json()).then(data => {setUsers(data.users[id])})
    },[id])
    var numero = id+1;
    if(estado === 2){
      return (
        <div className='active'>
          <h2>Usuario: {numero} de {max}</h2>
                  <div>
                    <p>ID: {users.id}</p>
                      <p>{users.username}</p>
                      <p>{users.email}</p>
                    </div>
                    <button onClick={()=> setId(numero < max ? id+1 :0)}className='next-button'>Siguiente usuario</button>
        </div>
        )
    } else {
      return (
        <div className='hidden'>
          <h2>Usuario: {numero} de {max}</h2>
                  <div>
                    <p>ID: {users.id}</p>
                      <p>{users.username}</p>
                      <p>{users.email}</p>
                    </div>
                    <button onClick={()=> setId(numero < max ? id+1 :0)}className='next-button'>Siguiente usuario</button>
        </div>
        )
    }
  }

export default OneUser;
