import {Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/gyrfalconcolored.png";
import whitelogo from "../assets/images/gyrfalconWhite.png";
import { useState,useEffect } from "react";



function Footer(){


  

     // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

    return(

        <>
      
        <footer>

        {showButton && (
        <div className="to-top">
            <button onClick={scrollToTop}><i class="fa-solid fa-up-long"></i></button>
        </div>
        )}

        

        

           <Container>

                <div className="footer">

                    <Link to={'/'}> <img src={whitelogo} className="footer-logo"/></Link>

                    <ul className="footer-menu">

                        
                            <li>
                                <Link to={'/'}>GYRFALCONS 2022 - ALL RIGHTS RESERVED</Link>
                            </li> 

                            <li>
                                <Link to={'/'}>Terms</Link>
                            </li> 

                            <li>
                                <Link to={'/'}>Design By Pluton</Link>
                            </li> 
                        

                    </ul>

                    <ul className="footer-social">

                        
                            <li>
                                <Link to={'/'}><i class="fa-brands fa-telegram"></i></Link>
                            </li> 

                            <li>
                                <Link to={'/'}><i class="fa-brands fa-instagram"></i></Link>
                            </li> 

                            <li>
                                <Link to={'/'}><i class="fa-brands fa-twitter"></i></Link>
                            </li> 
                        

                    </ul>

                </div>

           </Container>

        </footer>

        </>
        
    )

}

export default Footer;