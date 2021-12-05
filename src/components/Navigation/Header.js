import React from 'react'
import Categories from './Categories';
import Navigation from './Navigation';

const Header = () => {
    return(
        <React.Fragment>
            <Navigation />
            <Categories />
        </React.Fragment>
    )
}


export default Header;