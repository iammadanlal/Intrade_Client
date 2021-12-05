import React from 'react'

const ProductItems = ({title,data}) => {
    return (
        <li className="border-end border-warning p-3">
            <label className="text-uppercase pb-2 fw-bold">{title}</label>
            <div>
                <ul className="list-unstyled">
                    {data.map((product) => (
                        <li key={Math.random().toString()} className="d-flex justify-content-start">{product.name}</li>
                    ))}
                </ul>
            </div>
        </li>
    )
} 


export default ProductItems;