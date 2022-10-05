import * as React from 'react';
import Layout from '../components/layout';

function IndexPage() {
  return (
    <Layout>
    <div className="logoText">
    GeoPass
    </div>
    <h1 className="elevator">
    GeoPass is a platform for increased citizen engagement. It rewards community engagement while preserving privacy.
    </h1>
    <div className="container mx-auto px-4">
      <h2>
        GeoPass is made up of several elements
      </h2>
      <div className="grid grid-cols-2 gap-4">
          <div className="element bg-TTBlue">Token Tower Airdrop Devices</div>  
          <div className="element bg-ZKOrng text-RBlack">ZKLocale Privacy Library</div>  
          <div className="element bg-VPurp ">Stateless Validator Network</div>  
          <div className="element bg-EthFrost text-RBlack">Smart Contract Templates</div> 
      </div>
      <h2>
        The elements work together to create a neutral collectively owned platform for location based applications, games, and economies. 
      </h2> 
      <p> 
        The GeoPass platform will allow anyone to build novel consumer applications on top of location information, without having to collect and store a precise and continuous stream of GPS data.
      </p>
    </div>
    </Layout>
  );
}

export default IndexPage;
