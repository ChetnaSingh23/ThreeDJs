import React from 'react'
import "./About.css";
import Property from '../misc/Property';
import properties from "../../datas/properties"
// import comingSoon from "../../images/coming-soon-p.png"
import { useEffect } from 'react';
import { ThreeDModelHouseScene } from '../misc/ThreeDModel';
import MansionDesign from '../misc/ThreeDModel/mansion';
import "./MarketPlace.css";

const MarketPlace = () => {

  useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <React.Fragment>
            <section className="about">
                <h1 className='page-heading'>MarketPlace</h1>
                <div className="market-contents">
  
                {/* <div className='coming-soon' style={{ backgroundImage: `url(${comingSoon})` }}></div> */}
                  <div className="pr-header">
                    <h3 id="properties">Among our properties already financed</h3>
                    <h3 className="cl-blue">View All</h3>
                  </div>
                  <div className="properties">
                  {properties.map((property) => <Property property={property}/>)}
                  </div>
                </div>
            </section>
            <h3 className="cl-blue">Our 3D Models</h3>
            <div className="model-container">
              <div className="model-card">
                <h4>House 1</h4>
                <div className="model-3d-wrapper">
                  <MansionDesign />
                </div>
              </div>
              <div className="model-card">
                <h4>House 2 </h4>
                <div className="model-3d-wrapper">
                  <ThreeDModelHouseScene />
                </div>
              </div>
            </div>

        </React.Fragment>
    )
}

export default MarketPlace;