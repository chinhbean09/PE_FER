import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';

const URL = 'https://65389475a543859d1bb198c6.mockapi.io/pe/Product';

const DashBoard = () => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const res = await axios.get(`${URL}`);
        setProducts(res.data)
    }

// /localStorage để kiểm tra xem một giá trị có tên "isLogin"
// có được lưu trữ trong lưu trữ cục bộ (localStorage) 
    const isLogin = localStorage.getItem("isLogin");

    useEffect(() => {
        getProducts();
    }, [isLogin]);

    const handleDelete = async (id) => {
        if (window.confirm(`Are you sure that you want to delete Product with ID: ${id}`)) {
            const res = await axios.delete(`${URL}/${id}`);
            if (res.status === 200) {
                //re-render Data
                getProducts();
                toast.success("Deleted Successfully ~");
            } else {
                toast.error("Delete: Error!");
            }
        }
    }

    return (
        <div className="staff-table">
            <div className="btn-add">
                <Link to={'/add/'}>
                    <button className='add-staff-btn'>ADD NEW PRODUCT</button>
                </Link>
            </div>
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
                    {products && products.map((product) => {
                        // if (product.bestseller === true)
                        return (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td><img src={product.image} /></td>
                                <td>{product.price}</td>
                                <td>{product.rating}</td>
                                <td>{product.category}</td>
                                {isLogin && 
                                (
                                <td>
                                    <Link to={`/update/${product.id}`}><button>Update</button></Link>
                                    <button onClick={() => handleDelete(product.id)}>Delete</button>
                                </td>
                                )}
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DashBoard;