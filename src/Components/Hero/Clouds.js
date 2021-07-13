import React from "react";
import classes from './Clouds.module.css'

const Clouds = () => {
    const x1 = `${classes.cloud} ${classes.x1}`
    const x2 = `${classes.cloud} ${classes.x2}`
    const x3 = `${classes.cloud} ${classes.x3}`

    return (
        <div className={'absolute z-10 overflow-hidden h-screen w-screen'}>
            <div className={x1}></div>
            <div className={x2}></div>
            <div className={x3}></div>
        </div>
    )
}

export default Clouds
