import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavigationBar from '../NavigationBar';

function Dashboard() {
    const [products, setProducts] = useState([]); 
    const [error, setError] = useState(''); 
    const navigate = useNavigate(); 
    const [names, setNames] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/project/')
            .then((res) => {
                console.log(res.data); 
                setProducts(res.data); 
                const uniqueNames = [...new Set(res.data.map(item => item.projectName))];
                setNames(uniqueNames); 
            })
            .catch((err) => {
                console.log(err); 
                setError(err); 
            });
    }, []); 

    const view = (productid) => {
        navigate(`/details/${productid}`); 
    };

    const displayByNames = (name) => {
        navigate(`/displaybynames/${name}`); 
    };

    return (
        <div className='bg fullscreen'>
            <NavigationBar />
           
            <div className='d-flex mt-3 marginl'>
                {names.map((name, index) => (
                    <div key={index} className='marginl'>
                        <button onClick={() => displayByNames(name)} className='btn btn-success marginl'>{name}</button>
                    </div>
                ))}
            </div>
           
            <div className="product-container mt-3">
                {products.map((product, index) => (
                    <div className="product-item border bg-white p-3" key={product._id}>
                        <h3>{product.projectName}</h3>
                        <h5>{product.title.slice(0, 32)}</h5>
                        <p>{product.description.slice(0, 100)}...</p>
                        <p><b>{product.price}$</b></p>
                        {/* Button to view product details */}
                        <button onClick={() => view(product._id)} className='btn btn-success ml-5'>View</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
