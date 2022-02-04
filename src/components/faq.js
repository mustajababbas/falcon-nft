import { Accordion } from "react-bootstrap";

function Faq(){

return(

<>

  <Accordion defaultActiveKey={['0']} alwaysOpen className="faq-list">

    <Accordion.Item eventKey="0">

      <Accordion.Header>
      How can I join the GyrFalcon?
      </Accordion.Header>

      <Accordion.Body>
        You will be able to mint a Falcon on our website.
        Join our discord to be the first to find out.
      </Accordion.Body>

    </Accordion.Item>

    <Accordion.Item eventKey="1">

      <Accordion.Header>
        When will I be able to mint my Falcon?
      </Accordion.Header>
      <Accordion.Body>
        You will be able to mint your Falcon early March 2022 Official dates TBA
      </Accordion.Body>
      
    </Accordion.Item>


    <Accordion.Item eventKey="2">

      <Accordion.Header>How do Falcons differ, and do they have varying rarity?</Accordion.Header>
      <Accordion.Body>
        Each Falcon is unique, and is programmatically generated from a set of traits, hand-drawn in 3D  by our Geara Falcon
        Each unique Falcon will be classified based on its skin type.
      </Accordion.Body>
      
    </Accordion.Item>


    <Accordion.Item eventKey="3">

      <Accordion.Header>When will my Falcon be revealed?</Accordion.Header>
      <Accordion.Body>
        48 – 72 hours after the end of the Public Auction.
      </Accordion.Body>
      
    </Accordion.Item>

    <Accordion.Item eventKey="4">

      <Accordion.Header>How many Falcons will be available?</Accordion.Header>
      <Accordion.Body>
        5,555
      </Accordion.Body>
      
    </Accordion.Item>

    <Accordion.Item eventKey="5">

      <Accordion.Header>What blockchain will you be using?</Accordion.Header>
      <Accordion.Body>
      The Ethereum Blockchain.
      </Accordion.Body>
      
    </Accordion.Item>

    <Accordion.Item eventKey="6">

      <Accordion.Header>Will there be a pre-sale?</Accordion.Header>
      <Accordion.Body>
        Yes, 1000 members will get a spot on the pre-sale. 
        Join our discord to find out how you can get a spot.
      </Accordion.Body>
      
    </Accordion.Item>

    <Accordion.Item eventKey="7">

      <Accordion.Header>Where will I be able to view my NFTs?</Accordion.Header>
      <Accordion.Body>
        Once you mint your Falcon, all you will need is to log into your OpenSea account to view your collection.
      </Accordion.Body>
      
    </Accordion.Item>

    <Accordion.Item eventKey="8">

      <Accordion.Header>What are your secondary royalty fees?</Accordion.Header>
      <Accordion.Body>
        2%
      </Accordion.Body>
      
    </Accordion.Item>

    <Accordion.Item eventKey="9">

      <Accordion.Header>Will you do giveaways and Events?</Accordion.Header>
      <Accordion.Body>
      Of course! Check out the giveaways channel in our discord for more information.
      </Accordion.Body>

    </Accordion.Item>


  </Accordion>

</>

)

}

export default Faq;