import React, { useState } from "react";
import Classes from './Categories.module.css';
import ProductItems from '../Layouts/ProductItems';

const Categories = () => {
    const [isProduct, setIsProduct] = useState(false);
    const ProductEvenCallHandler = () => {
        setIsProduct(true);
    }
    const ProductEvenRemoveHandler = () => {
        setIsProduct(false);
    }
    const p1 = [
        {
            name: 'Fiber Laser Cutting Machine'
        },
        {
            name: 'Plasma cutting machine'
        },
        {
            name: 'Laser Marking Machine'
        },
        {
            name: 'Shearing Machine'
        },
        {
            name: 'Lathe Machine'
        },
        {
            name: 'CNC Milling Machine'
        },
        {
            name: 'CNC Drilling machine'
        },

    ]
    const p2 = [
        {
            name: 'Footwear Machinery'
        },
        {
            name: 'Agarbatti making machine'
        },
        {
            name: 'Nail Making machine'
        },
        {
            name: 'Napking making machine'
        },
        {
            name: 'Paper bag Machine'
        },
        {
            name: 'Industrial Washer & Dryer'
        },
        {
            name: 'Industrial Washer & Dryer'
        },

    ]
    const p3 = [
        {
            name: 'Test Chambers'
        },
        {
            name: 'Laminar Air Flow'
        },
        {
            name: 'Clean Room Equipment'
        },
        {
            name: 'Autoclaves, Sterilizers & Incubators'
        },
        {
            name: 'Testing & Measuring Equipment'
        },
        {
            name: 'Tablet and granulator machine'
        },
        {
            name: 'Sticker Labeling machine'
        },

    ]
    const p4 = [
        {
            name: 'Industrial Furnaces & Ovens'
        },
        {
            name: 'Construction Machinery'
        },
        {
            name: 'Agricultural Equipments'
        },
        {
            name: 'Chemical Reactors And Process Tanks'
        },
        {
            name: 'Diary Equipment & Plants'
        },
        {
            name: 'Sewage Treatment Plant'
        },
        {
            name: 'Textile Machinery & Parts'
        },

    ]
    return (
        <div className="border-bottom">
            <ul className="container p-2 d-flex flex-row list-group list-unstyled text-secondary p-3">
                <li>
                    <span className={Classes.label}><button className="btn btn-warning" type="button" onMouseOver={ProductEvenCallHandler} onMouseLeave={ProductEvenRemoveHandler}>
                        <i className="fa fa-product-hunt" aria-hidden="true"></i> PRODUCT </button></span>
                </li>
                <li >
                    <div className={Classes.vl}></div>
                </li>
                <li>
                    <span className={Classes.label}><button className="btn btn-warning" type="button" >
                        <i className="fa fa-video-camera" aria-hidden="true"></i> VIDEO </button></span>
                </li>
            </ul>
            {isProduct &&
                <ul className="d-flex flex-row list-group list-unstyled bg-light border-warning border-top border-bottom justify-content-center">
                    <ProductItems title="CNC Machines, Lathes &amp; Tools" data={p1} />
                    <ProductItems title="Machines &amp; Equipments" data={p2} />
                    <ProductItems title="Pharma, Lab Machines" data={p3} />
                    <ProductItems title="Industrial Plant &amp; Machinery" data={p4} />
                </ul>
            }
        </div>
    )
}


export default Categories;