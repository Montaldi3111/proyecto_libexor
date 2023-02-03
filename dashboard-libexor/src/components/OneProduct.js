import React,{useState,useEffect} from 'react'
  function App ({estado}) {
    const [id,setId] = useState(0)
    const [products,setProducts] = useState([])
    const [max,setMax] = useState(1)
    const [color,setColor] = useState(null)
    useEffect(()=>{
      fetch(`http://localhost:3000/api/allProducts`)
      .then(res => res.json())
      .then(data => {
        setMax(data.count)
        setProducts(data.products)})
    },[])

    useEffect(()=>{
      fetch(`http://localhost:3000/api/allProducts`)
      .then(res => res.json()).then(data => {setProducts(data.products[id])
      setColor(data.products[id].color_id.color)})
    },[id])
    var numero = id+1;
    if(estado === 1){
      return (
        <div className='active'>
          <h2>Producto: {numero} de {max}</h2>
                  <div>
                      <p>ID: {products.id}</p>
                      <p>Nombre: {products.name}</p>
                      <p>Color: {color}</p>
                  </div>
                    <button onClick={()=> setId(numero < max ? id+1 :0)} className='next-button'>Siguiente producto</button>
        </div>
        )
    } else {
      return (
        <div className='hidden'>
          <h2>Producto: {numero} de {max}</h2>
                  <div>
                      <p>{products.id}</p>
                      <p>{products.name}</p>
                      <p>{color}</p>
                  </div>
                    <button onClick={()=> setId(numero < max ? id+1 :0)} className='next-button'>Siguiente producto</button>
        </div>
        )
    }
  }

export default App;
