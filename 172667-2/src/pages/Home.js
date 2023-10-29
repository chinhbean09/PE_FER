import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';

const URL = 'https://65389475a543859d1bb198c6.mockapi.io/pe/Product';


const Home = () => {
    
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchData();
    }, []); 

    const fetchData = async () => {
        try {
            const response = await axios.get(`${URL}`);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    };

    return (
        <>
           
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Category</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => {
                    if (product.bestseller === true) 
                    return (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td><img src={product.image} alt={product.id} width={40}/></td>
                            <td>{product.price}</td>
                            <td>{product.rating}</td>
                            <td>{product.category}</td>
                            <td>
                                <Link to={`/detail/${product.id}`}><button>Detail</button></Link>
                            </td>
                        </tr>)
                })}
            </tbody>
        </table>
        </>
    );
};

export default Home;