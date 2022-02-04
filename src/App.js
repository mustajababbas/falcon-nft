// import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/fontawesome/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { useWeb3React } from "@web3-react/core";
import React,{useEffect} from "react"
import Home from './pages/home';
import Mint from './pages/Mint';
import {injectedConnector} from "./utils/connectors"






function App() {

  const {
    connector,
    library,
    account,
    chainId,
    activate,
    deactivate,
    active,
    errorWeb3Modal,
    active: networkActive, error: networkError, activate: activateNetwork
  } = useWeb3React();

  useEffect(() => {
    injectedConnector
      .isAuthorized()
      .then((isAuthorized) => {
        if (isAuthorized && !networkActive && !networkError) {
          activateNetwork(injectedConnector)
        }
      })
      .catch(() => {
      })
  }, [activateNetwork, networkActive, networkError])

  
  return (


    <Router>


      <Routes>
   
        
        <Route path="/" element={<Home/>} />
        <Route path="/mint" element={<Mint/>} />
       
  
    
      </Routes>
  </Router>


  );
}

export default App;
