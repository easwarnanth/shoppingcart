import React,{useState} from 'react';
import Header from './components/Header.jsx';
import CardGrid from './components/CardGrid.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './App.css'


const App = () => {
  const [cartValue, setCartValue] = useState(0);
  

  return (
    <>
     <Navbar />
     <Header/>
     <section>
      <div className="container">
        <div className="row">
          <CardGrid setCartValue={setCartValue}></CardGrid>
        </div>
      </div>
    <Footer />
    </section>
      
    </>
  )
}

export default App
