import React from "react";
import classes from './Main.module.css'

const Sellers = ({sellerData, title}) => {
    
    return(
        <React.Fragment>
            <div className={classes.mainContentCons} >
                    <label className={classes.contentLabel}>{title}</label>
                    <div className={classes.contentCons}>
                        {sellerData.map(data=>(
                            <div className={classes.itemWrapper} style={{padding : 0}} key={data.id}>
                                <div className={classes.imgContent}>
                                <div className={classes.absNew}>New</div>
                                    <img src={data.image} alt="thumb" />
                                </div>
                                <div className={classes.imgText}>
                                    {data.company}<br/>
                                    <span style={{color: '#777'}}>{data.title}</span><br/>
                                    <span style={{color: 'red'}}>₹ {data.price}</span>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
        </React.Fragment>
    )
}


export default Sellers;