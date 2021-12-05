import React from 'react'
import Classes from './Featured.module.css';

const Featured = () => {
    return (
        <div className="bg-light py-5">
            <div className="justify-content-center">
                <h4>Featured Articles</h4>
                <p>The latest from our award-winning blog - gemstones, jewellery, astrology and more</p>
            </div>
            <div className={` container  d-flex flex-row`}>
                <div className={Classes.ImgFea}>
                    <img src="https://www.indiantradebird.com/Content/images/thumb/637556348726794682_industrial%20HVAC%20chiller.jpeg"  />
                </div>
                <div className="me-4 bg-body">
                    <label>Chillers</label>
                    <p>An Industrial Chiller is a device used for refrigeration, which helps to remove heat from a system and then transfer it to another one</p>
                </div>
                <div className={Classes.ImgFea}>
                    <img src="https://www.indiantradebird.com/Content/images/thumb/637556348726794682_industrial%20HVAC%20chiller.jpeg" />
                </div>
                <div className="me-2 bg-body">
                    <label>Chillers</label>
                    <p>An Industrial Chiller is a device used for refrigeration, which helps to remove heat from a system and then transfer it to another one</p>
                </div>
            </div>
        </div>
    )
}


export default Featured;