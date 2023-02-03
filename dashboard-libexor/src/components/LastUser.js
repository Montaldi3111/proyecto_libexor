import React,{useState,useEffect} from 'react'
  function LastUser ({estado}) {
    const [user,setUser] = useState([])
    useEffect(()=>{
      fetch(`http://localhost:3000/api/lastUser`)
      .then(res => res.json())
      .then(data => {
        setUser(data.data)
        })
    },[])

    if(estado === 2) {
      return (
        <div className='active'>
          <h2>Ultimo usuario registrado:</h2>
          <ul>
            <li>Nombre: {user.username}</li>
            <li>Email: {user.email}</li>
            {user.isAdmin ? <li>Admin</li> : <li>Usuario</li>}
          </ul>
        </div>
        )
    } else {
      return (
        <div className='hidden'>
          <h2>Ultimo usuario registrado:</h2>
          <ul>
            <li>Nombre: {user.username}</li>
            <li>Email: {user.email}</li>
            {user.isAdmin ? <li>Admin</li> : <li>Usuario</li>}
          </ul>
        </div>
        )
    }
  }

export default LastUser;
