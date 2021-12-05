import React from 'react'
import Featured from './Featured';
import Items from './Items';
import Classes from './Main.module.css';

const Main = () => {
    return (
        <main>
            <Items />
            <Featured />
        </main>
    )
}


export default Main;