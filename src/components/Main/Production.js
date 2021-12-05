import React from "react";
import classes from './Main.module.css'

const Production = ({images}) => {
    return(
        <React.Fragment>
            <div className={classes.mainContentCons} >
                    <div className={classes.contentCons}>
                        {images.map(data=>(
                            <div className={classes.itemWrapper}>
                                <div className={classes.imgContentProduction}>
                                    <img src={data.image} alt="thumb" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </React.Fragment>
    )
}


export default Production;