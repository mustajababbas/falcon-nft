import {Navbar,Container,Nav,NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/gyrfalconcolored.png";
import whitelogo from "../assets/images/gyrfalconWhite.png";
import { useWeb3React } from "@web3-react/core";
import { connectWallet } from "../utils/connectWallet";
import React,{useEffect, useState} from "react"
import {injectedConnector} from "../../src/utils/connectors"




function Header(props){

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
    // const { activateBrowserWallet, deactivate } = useEthers();
    // console.log("account", account)

    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
      injectedConnector
        .isAuthorized()
        .then((isAuthorized) => {
          setLoaded(true)
          if (isAuthorized && !networkActive && !networkError) {
            activateNetwork(injectedConnector)
          }
        })
        .catch(() => {
          setLoaded(true)
        })
    }, [activateNetwork, networkActive, networkError])

  
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";


      // if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      //    document.getElementById("mySidenav").style.width = "250px";
      // }

  }

  function closeNav() {
      document.getElementById("mySidenav").style.width = "0";




 }

    return(

        <>


       <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onClick={(e)=>closeNav()}>&times;</a>

        <ul class="menu-list">
           
         <li>
            <a href="#story" class="menu-link">
               Our Story           
            </a>
         </li>

         <li>

            <a href="#community" class="menu-link">
               Our Community
            </a>

         </li>

         <li>

            <a href="#roadmap" class="menu-link">
               Roadmap
            </a>

         </li>

         <li>

            <a href="#team" class="menu-link">
               Team
            </a>

         </li>

         <li>

            <a href="#faq" class="menu-link">
               FAQ
            </a>

         </li>




        </ul>


        </div>

        <div class="open-btn">

          
            <div className="ms-4 connect-wallet">

            {
           networkError?<button type="button" className="custom-btn primary-btn">Connect Wallet</button>:
           active 
            ? (<div>
              
              <button type="button" className="custom-btn primary-btn">CONNECTED</button>
              </div>)
             : (<div><button onClick={() => {
              connectWallet(activate, props.setErrorMessage);
            }} type="button" className="custom-btn primary-btn">Connect Wallet</button>
             
            </div>) 
         }

              

            </div>


            <div className="logo-top">

              <Link to={'/'}>
                  <img src={whitelogo} alt="LOGO" className="logo"/>
              </Link>

            </div>


            <div className="d-flex align-items-center me-4">

               <ul className="header-social">
                  <li>
                     <a href="#"><i class="fa-brands fa-twitter"></i></a>
                  </li>

                  <li>
                     <a href="#"><i class="fa-brands fa-discord"></i></a>
                  </li>

               </ul>

           

            <span onClick={(e)=>openNav()} id="open-btn-hide">
              <i class="fa fa-bars"></i>
            </span>

            </div>


        </div>

        </>
        
    )

}

export default Header;