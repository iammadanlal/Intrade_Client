import React from 'react';
import Classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <header>
            <div className="shadow-sm p-3 bg-warning">
                <ul className="p-2 d-flex flex-row list-group list-unstyled ">
                    <li className="list-group-item  border-top-0">
                        <span className="cursor-pointer"><i className="fa fa-phone" aria-hidden="true"></i> +91 079 40099886 </span>
                    </li>
                    <li >
                        <div className={Classes.vl}></div>
                    </li>
                    <li className="list-group-item border-top-0">
                        <select name="country" className="border-0">
                            <option value="IND">IND</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                        </select>
                    </li>
                    <li >
                        <div className={Classes.vl}></div>
                    </li>
                    <li className="list-group-item border-top-0">
                        <select name="language" className="border-0">
                            <option value="ENG">ENG</option>
                            <option value="FRH">FRH</option>
                        </select>
                    </li>
                    <li className={Classes.logo}>
                        <img src="https://www.indiantradebird.com/Content/L2022/assets/images/icon/brand-logo/7.png" alt="Logo" />
                    </li>
                    <li className="list-group-item d-flex flex-column align-content-center border-top-0">
                        <span className="justify-content-center">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </span>
                        <span className={Classes.label}>Search</span>
                    </li>
                    <li className="list-group-item d-flex flex-column align-content-center ms-2 ">
                        <span className="justify-content-center">
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </span>
                        <span className={Classes.label}>Account</span>
                    </li>
                    <li className="list-group-item d-flex flex-column align-content-center ms-2 ">
                        <span className="justify-content-center">
                            <i className="fa fa-info" aria-hidden="true"></i>
                        </span>
                        <span className={Classes.label}>help</span>
                    </li>
                    <li className="list-group-item d-flex flex-column align-content-center ms-2 ">
                        <span className="justify-content-center">
                        <i className="fa fa-compress" aria-hidden="true"></i>
                        </span>
                        <span className={Classes.label}>contact</span>
                    </li>
                </ul>
            </div>
        </header>
    )
}


export default Navigation;