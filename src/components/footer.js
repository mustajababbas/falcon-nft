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
                               GYRFALCONS 2022 - ALL RIGHTS RESERVED
                            </li> 

                            <li>
                                <Link to={'/'}>Terms</Link>
                            </li> 

                            <li>
                                <a href="https://pluton.ltd" target='_blank'>Design By Pluton</a>
                            </li> 
                        

                    </ul>

                    <ul className="footer-social">

                        
                    <li>
                      <a href="https://twitter.com/gyrfalconNft" target='_blank'><i class="fa-brands fa-twitter"></i></a>
                    </li>

                    <li>
                      <a href="https://www.instagram.com/gyrfalcon.nft" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                    </li>

                    <li>
                      <a href="https://discord.gg/vnPEQtzSkE" target='_blank'><i class="fa-brands fa-discord"></i></a>
                    </li>
                        

                    </ul>

                </div>

           </Container>

        </footer>

        </>
        
    )

}

export default Footer;