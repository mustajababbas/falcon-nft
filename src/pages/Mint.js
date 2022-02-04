import Header from '../components/header';
import Footer from '../components/footer';
import whitelogo from "../assets/images/gyrfalconWhite.png";




function Mint(props){

    return(


    <>
        
        <Header/>

        <section class="py-5" id="nft-single">


            <div class="container">

                <div class="row">
                    <div class="col-lg-6">


                        <div class="single-nft">

                            <img src={whitelogo}  />

                        </div>


                    </div>


                    <div class="col-lg-6">


                        <div class="single-nft-des">

                            <h1>Poker Card #</h1>
                            <p class="p-bold">You cannot mint our NFT cards at this time. Very soon this chance will be yours!</p>

                            <h3>0.35 BNB</h3>

                            <div class="nft-place-order">


                                <a href="javascript::void();" class="custom-btn primary-btn" onclick="preBuy()">BUY NFT</a>

                            </div>


                        </div>


                    </div>
                </div>

            </div>

            </section>

        <Footer/>

    </>

    )

}

export default Mint;