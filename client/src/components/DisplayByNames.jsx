import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import NavigationBar from '../NavigationBar';

function DisplayByNames() {
    const [solarPanelProducts, setSolarPanelProducts] = useState([]);
    const [error, setError] = useState('');
    const { name } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/project/')
            .then((res) => {
                const filteredProducts = res.data.filter(product => product.projectName === name);
                setSolarPanelProducts(filteredProducts);
                console.log(solarPanelProducts)
            })
            .catch((err) => {
                console.log(err);
                setError(err);
            });
    }, [name]); // Make sure to include 'name' as a dependency
    const View = (productid) => {
        navigate(`/details/${productid}`)
    }
    return (
        <div className='bg fullscreen'>
            <NavigationBar/>
            <h1 className='center mt-3'>{name}</h1>
            <div className="product-container">
                {solarPanelProducts.map((product, index) => (
                    <div className="product-item border bg-white p-3" key={product._id}>
                        <h3>{product.projectName}</h3>
                        <h5>{product.title}</h5>
                        <p>{product.description}</p>
                        <p><b>{product.price}$</b></p>
                        <button onClick={() => View(product._id)} className='btn btn-success'>View</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayByNames;
