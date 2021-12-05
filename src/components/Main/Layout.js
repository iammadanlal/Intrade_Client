import React from "react";
import classes from './Main.module.css'

const Layout = ({layoutData, title}) => {
    
    return(
        <React.Fragment>
            <div className={classes.mainContentCons} >
                    <label className={classes.contentLabel}>{title}</label>
                    <div className={classes.contentCons}>
                        {layoutData.map(data=>(
                            <div className={classes.itemWrapper}>
                                <div className={classes.imgContent}>
                                    <img src={data.image} alt="thumb" />
                                </div>
                                <div className={classes.imgText}>{data.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
        </React.Fragment>
    )
}


export default Layout;