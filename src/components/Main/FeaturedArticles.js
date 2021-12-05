import { PinDropSharp } from "@material-ui/icons";
import React, { useState } from "react";
import classes from './Main.module.css'

const FeaturedArticles = ({ArticlesData, title}) => {
    return(
        <React.Fragment>
            <div className={classes.mainContentCons} id="articles">
                    <label className={classes.contentLabel}>{title}</label>
                    <div className={classes.contentCons}>
                        {ArticlesData.map(data=>(
                            <div className={classes.itemWrapper} key = {title}>
                                <div className={classes.imgContent}>
                                    <img src={data.image} alt="thumb" />
                                </div>
                                <div className={classes.articleText}>{data.text}</div>
                                <div className={classes.imgpara}>
                                    {data.para} <p>READ MORE </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </React.Fragment>
    )
}


export default FeaturedArticles;