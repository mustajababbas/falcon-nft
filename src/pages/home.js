import { Col,Row,Container } from "react-bootstrap";
import { useEffect } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Backtotop from '../components/backtotop';
import Faq from '../components/faq';
import { Link } from "react-router-dom";
import nft1 from "../assets/images/nft1.png";
import team1 from "../assets/images/Team1.jpg";
import Aos from "aos";
import "aos/dist/aos.css"




function Home(props){


    useEffect(()=>{

        Aos.init({duration:1500});


    }, [])


    return(


    <>
        
        <Header/>

        <Backtotop/>

        <section className="main-section" >

        <div className="main-title">
            <h1>THE GYRFALCONS</h1>

            <p className="f-bold">
            5,555 unique NFTs with proof of ownership living on the Ethereum blockchain.

            Each Falcon is a one of a kind 3D piece that grants you access to the GyrFalcon Community. 

            Pick your falcon before it’s too late.
            </p>

            <Link to={'/mint'} className="custom-btn primary-btn">MINT</Link>

        </div>

        </section>


        <section className="section-two" id="story">

        

            <Container className="position-relative">

            <div className="back-text">

                <h2>FALCON <br/> NFT</h2>

            </div>

                <Row data-aos="fade-up">

               
                    <Col lg={6}>

                        <img src={nft1}/>

                    </Col>
                

              
                    <Col lg={6}>

                        <div className="dual-title">

                            
                           
                            <h3>Our Story</h3>

                        </div>

                        <div className="content-p">
                            
                
                                <p className="spacing">
                                It all started with “SARMAD( insert NFT NICKANME”, a visionary emirati that was fascinated by the GyrFalcon. 
                                ‘“SARMAD (insert NFT name)” was impressed by its unlimited speed, endurance, vision and ability to hunt; he believed 
                                that leaders in todays’ society should have these attributes. 

                                <br/>
                                <br/>

                                Just like “SARMAD “, our team is committed to creating a community of visionary leaders 
                                that speed to reach their goals with endurance, clearly envision the future and constantly 
                                hunt for the best opportunities.


                                <br/>
                                <br/>

                               
                                That’s the main inspiration behind our GyrFalcon NFTs. We want you to belong to our community of like-minded 
                                leaders that are shaping the future with courage, strength, speed and vision. Vision is the art of seeing what 
                                is invisible to others.

                                <br/>
                                <br/>

                                Do you have what it takes to see the unseen?

                                </p>

                              

                        </div>

                    </Col>
            

                </Row>

            </Container>


        </section>

        
        <section id="community">

        <Container className="position-relative">
        
                <div className="back-text">

                    <h2>FALCON <br/> NFT</h2>

                </div>

                <div className="dual-title text-center my-5" data-aos="fade-up">
                        
                    
                    <h3>WHY WE ARE 
                        <br/>
                        DIFFERENT</h3>


                </div>

        </Container>

            <Container fluid className="position-relative section-dark">

              

                <Row > 

                    

                <Col lg={6} className="community-section order-xs-2" data-aos="fade-up">

                 

                    <div className="content-p mb-5">
                        
                        <div className="dual-title">
                            <h3>OUR COMMUNITY </h3>
                        </div>

                        <p className="spacing">
                        Do you want to belong to a community of visionary leaders around the world?
            
                        The GyrFalcon community openly welcomes you. With every milestone achieved, amazing benefits will be unlocked 
                        as mentioned in our roadmap. Our community will get the chance to party together, travel & gain more money. Members will participate in shaping the community’s future and actively help in decision making.                        

                        </p>

                    </div>


                    <div className="content-p mb-5">
                        
                        <div className="dual-title">
                            <h3>OUR VALUE PROPOSITION</h3>
                        </div>

                        <p className="spacing">
                        
                        The GyrFalcon Society is a collection of 5,555 unique and collectible Falcon-Humanoid NFTs 
                        residing on the Ethereum blockchain. Falcon-holders are provided exclusive access to the Society's 
                        benefits which will be unlocked progressively through Roadmap activation post-launch. Each NFT comes 
                        with a full membership to an ever-growing community and awesome utilities.

                        </p>

                    </div>

                    <Link to={'/'} className="custom-btn primary-btn">Join Discord</Link>

                </Col>

                <Col lg={6} className="col-background order-xs-1">
 
                        

                </Col>

                   

                </Row>

            </Container>


        </section>
       

        <section className="section-two" id="roadmap">

        

            <Container className="position-relative">

            <div className="back-text">

                <h2>FALCON <br/> NFT</h2>

            </div>

                    <div className="dual-title text-center my-5" data-aos="fade-up">
                        
                      
                        <h3>Falcon NFT
                            <br/>
                            Roadmap</h3>
    
    
                    </div>

            

                <Row>

                  

                    <Col lg={12}>

                        

                        <div className="roadmap" data-aos="fade-up">

                            <div className="line" data-aos="fade-up">
                                <div class="progression"></div>
                            </div>

                            <div class="step done">

                                <div class="dot">
                                    <div class="shape">
                                    </div>
                                </div>

                            <div className="details">

                                <div className="roadmap-title">

                                    
                                    <h3>Phase : </h3>
                                    <p className="roadmap-number">01</p>

                                </div>

                                <ul>

                                    <li>Generation of 5,555 unique GyrFalcon NFTs </li>
                                    <li>Pre sale for VIPs and WhiteSale</li>
                                    <li>Public sale on OpenSea </li>
                                

                                </ul>

                            </div>

                            </div>

                            <div class="step done">

                                <div class="dot">
                                    <div class="shape">
                                    </div>
                                </div>

                            <div className="details">

                                <div className="roadmap-title">

                                    <h3>Phase : </h3>
                                    <p className="roadmap-number">02</p>


                                </div>

                                <ul>

                                    <li>Investing in real estate to generate income to the community (75%) sold</li>
                                    <li>Collaborating with Celebrities for special Giveaways, Events and Meetups</li>
                                    <li>Organizing weekly trips to the community to unique destinations around the world</li>
                                   

                                </ul>

                            </div>

                            </div>

                           
                            
                        </div>

                    </Col>

                </Row>

                <div className="dual-title text-start my-5" data-aos="fade-up">
                        
                    <h3>UNLOCKING THE COMMUNITY BENEFITS </h3>

                </div>

                <div className="roadmap2" data-aos="fade-up">
                    
                    <p><i class="fa-solid fa-diamond"></i> 
                    16% sold <i class="fa-solid fa-arrow-right"></i> we will celebrate by hosting an island party in Dubai. The GyrFalcon Owners will be invited to 
                    meet the team,the influencers and the rest of the like minded community 
                    </p>

                    <p><i class="fa-solid fa-diamond"></i>
                    40% sold <i class="fa-solid fa-arrow-right"></i> we will invest in Real Estate to generate income to the community
                    </p>

                    <p><i class="fa-solid fa-diamond"></i>
                    90% sold <i class="fa-solid fa-arrow-right"></i> we will gather funds to support our community of visionary leaders in their own businesses
                    </p>

                    <p><i class="fa-solid fa-diamond"></i>
                    100% sold <i class="fa-solid fa-arrow-right"></i> we will enter the Metaverse through a GyrFalcon race competition in a gaming context that benefits the owners of the NFTs
                    </p>
                

                   
                </div>

            </Container>


        </section>




        <section className="section-two" id="team">

          
       

            <Container className="position-relative">

            <div className="back-text">

                <h2>FALCON <br/> NFT</h2>

            </div>

            <div className="dual-title text-center my-5" data-aos="fade-up">
                    
               
                    <h3>OUR TEAM</h3>
                    <h6 className="mt-3 h6">MEET THE GYRFALCON TEAM </h6>
                
    
            </div>

            <Row className="no-gutter">

                <Col lg={3} md={6} data-aos="fade-up">
        
                    <div className="image-box">
                        <img src={team1} alt="Avatar" className="image" />
                        <div className="overlay">

                        <div>
                            <h3>Brad Stein</h3>
                            <p>The Architect</p>
                        </div>

                        <Link to={'/'}><i class="fa-brands fa-instagram"></i></Link>
                        </div>
                    </div>

                </Col>

                <Col lg={3} md={6} data-aos="fade-up">
        
                    <div className="image-box">
                        <img src={team1} alt="Avatar" className="image" />
                        <div className="overlay">

                        <div>
                            <h3>Brad Stein</h3>
                            <p>The Architect</p>
                        </div>

                        <Link to={'/'}><i class="fa-brands fa-instagram"></i></Link>
                        </div>
                    </div>

                </Col>

                <Col lg={3} md={6} data-aos="fade-up">
                        
                        <div className="image-box">
                            <img src={team1} alt="Avatar" className="image" />
                            <div className="overlay">

                            <div>
                                <h3>Brad Stein</h3>
                                <p>The Architect</p>
                            </div>

                            <Link to={'/'}><i class="fa-brands fa-instagram"></i></Link>
                            </div>
                        </div>

                </Col>

                <Col lg={3} md={6} data-aos="fade-up">
                        
                        <div className="image-box">
                            <img src={team1} alt="Avatar" className="image" />
                            <div className="overlay">

                            <div>
                                <h3>Brad Stein</h3>
                                <p>The Architect</p>
                            </div>

                            <Link to={'/'}><i class="fa-brands fa-instagram"></i></Link>
                            </div>
                        </div>

                </Col>

            </Row>


    




            </Container>


        </section>

        <section className="section-two section-dark" id="faq">


            <Container>


            <Row>
                


                <Col lg={6}>

                    
            <div className="dual-title mb-5" data-aos="fade-up">
                    
                   
                    <h3>FREQUENTLY ASKED  
                        <br/>
                        QUESTIONS</h3>
    
                </div>

                <img src={nft1} data-aos="fade-up"/>

                </Col>

                <Col lg={6} data-aos="fade-up">

                    <Faq/>

                </Col>
            </Row>

            </Container>


        </section>

        <section className="subscribe">

                    
            

                <Container>

                <div className="dual-title text-center my-5 " data-aos="fade-up">
                        
                
                    <h3>I GUESS WHAT WE ARE TRYING TO SAY IS THAT YOU SHOULD JOIN OUR DISCORD.</h3>

                    <Link to={'/'} className="custom-btn primary-btn mt-5">Join Discord</Link>
                        
                </div>

                


                




                </Container>


        </section>

        <Footer/>

    </>

    )

}

export default Home;