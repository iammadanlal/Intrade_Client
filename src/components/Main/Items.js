import React from 'react'
import Classes from './Items.module.css';

const Items = () => {
    return (
        <div className="position-relative my-4  py-3 ">
            <div className={`d-flex flex-row p-3 bg-body rounded ${Classes.item1}`}>
                <div className="p-3 mt-5">
                    <span className="fw-bold">MS Porta Cabin <i className="fa fa-arrow-circle-right ms-2" aria-hidden="true"></i></span>
                    <p className="fw-lighter ">PYRAMID ENGINEERING</p>
                </div>
                <div className="border border-success">
                    <img src="https://www.indiantradebird.com/content/images/thumb/636655501154787602_New%20Doc%202018-02-18%20(4)_5(2).jpg" className={`rounded  mx-auto d-block ${Classes.Img}`} alt="one"/>
                </div>
            </div>
            <div className={`d-flex flex-row justify-content-end ${Classes.item2} bg-body rounded`}>
                <div>
                    <img src="https://www.indiantradebird.com/content/images/thumb/637048480169955906_Spot%20welding%20machine.png" className={`rounded mx-auto d-block  ${Classes.Img}`} alt="one"/>
                </div>
                <div className="p-3 mt-5">
                    <span className="fw-bold">MS Porta Cabin <i className="fa fa-arrow-circle-right ms-2" aria-hidden="true"></i></span>
                    <p className="fw-lighter ">PYRAMID ENGINEERING</p>
                </div>
            </div>
            <div className="d-flex flex-row p-3 justify-content-center bg-body rounded ">
                <span className={Classes.title}><h2>Buy Products Online<br />at best prices</h2></span>
            </div>
            <div className={`d-flex flex-row p-3 ${Classes.item3}`}>
                <div className="p-3 pe-5 mt-5">
                    <span className="fw-bold">MS Porta Cabin <i className="fa fa-arrow-circle-right ms-2" aria-hidden="true"></i></span>
                    <p className="fw-lighter ">PYRAMID ENGINEERING</p>
                </div>
                <div>
                    <img src="https://www.indiantradebird.com/itb-admin/members/2629/images/0_46b9aef1.jpg" className={`rounded mx-auto d-block ${Classes.Img}`} alt="one"/>
                </div>
            </div>
            <div className={`d-flex flex-row p-3 justify-content-end ${Classes.item4}`}>
                
                <div>
                    <img src="https://www.indiantradebird.com/content/images/thumb/637064097618882352_250LPH%20Commercial%20RO%20Plant.jpg" className={`rounded mx-auto d-block ${Classes.Img}`} alt="one"/>
                </div>
                <div className="p-3 mt-5">
                    <span className="fw-bold">MS Porta Cabin <i className="fa fa-arrow-circle-right ms-2" aria-hidden="true"></i></span>
                    <p className="fw-lighter ">PYRAMID ENGINEERING</p>
                </div>

            </div>
            <div className={`d-flex flex-row p-3 justify-content-center`}>
            <div className="p-3 mt-5">
                    <span className="fw-bold">MS Porta Cabin <i className="fa fa-arrow-circle-right ms-2" aria-hidden="true"></i></span>
                    <p className="fw-lighter ">PYRAMID ENGINEERING</p>
                </div>
                <div>
                    <img src="https://www.indiantradebird.com/content/images/thumb/637169357980967632_Air%20Shower.jpg" className={`rounded mx-auto d-block ${Classes.Img}`} alt="one"/>
                </div>
                
                
            </div>
            
        </div>

    )
}


export default Items;