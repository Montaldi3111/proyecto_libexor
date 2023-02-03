import React,{useState} from 'react'
import './App.css';
import logo from './Icon.png'
import AllProducts from './components/AllProducts'
import LastProduct from './components/LastProduct'
import OneProduct from './components/OneProduct'
import AllUsers from './components/AllUsers'
import LastUser from './components/LastUser'
import OneUser from './components/OneUser'
function App () {
  const [toggleState,SetToggleState] = useState(0);
  const toggleTab = (index) => SetToggleState(index)
    return (
      <div className="App">
        <img src={logo} className='logo' alt=''/>
        <h1>Libexor Back Office</h1>
        <section>
        <button
            className={toggleState === 1 ? 'active product': 'tab product'}
            onClick={()=>toggleTab(1)}>Productos</button>
            <button className={toggleState === 2 ? 'active user': 'tab user'} onClick={() => toggleTab(2)}>Usuarios</button>
        <div className='products active'>
              <AllProducts estado={toggleState}/>
              <LastProduct estado={toggleState}/>
              <OneProduct estado={toggleState}/>
        </div>
        <div className='users'>
        <AllUsers estado={toggleState}/>
        <LastUser estado={toggleState}/>
        <OneUser estado={toggleState}/>
        </div>
        </section>
      </div>
    );
  }

export default App;
