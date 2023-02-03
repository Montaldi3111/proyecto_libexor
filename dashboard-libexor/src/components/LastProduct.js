import React,{useState,useEffect} from 'react'
  function App ({estado}) {
    const [product,setProduct] = useState([])
    const [color,setColor] = useState(null)
    useEffect(()=>{
      fetch(`http://localhost:3000/api/lastProduct`)
      .then(res => res.json())
      .then(data => {
        setProduct(data.data)
        setColor(data.data.color_id.color)
        })
    },[])
    if(estado === 1){
      return (
        <div className='active'>
          <h2>Ultimo Producto agregado:</h2>
          <ul>
            <li>ID: {product.id}</li>
            <li>Nombre: {product.name}</li>
            <li>Color: {color}</li>
          </ul>
        </div>
        )
    } else {
      return (
        <div className='hidden'>
          <h2>Ultimo Producto agregado:</h2>
          <ul>
            <li>ID: {product.id}</li>
            <li>Nombre: {product.name}</li>
            <li>Color: {color}</li>
          </ul>
        </div>
        )
    }
    
  }

export default App;
