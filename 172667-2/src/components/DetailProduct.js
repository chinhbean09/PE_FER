import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function DetailNew() {
    const { id } = useParams();
    
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://65389475a543859d1bb198c6.mockapi.io/pe/Product/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.log(error));
    }, [id]);
    
    if (!product) {
        return <div>Loading...</div>;
    }
    
    return (
        <div>
            <h1>Name : {product.name}</h1>
            <p>Description : {product.description}</p>
            <img width={40} src={product.image} alt={product.name} />
            <p>Price : {product.price}</p>
            <p>Rating : {product.rating}</p>
            <p>Category : {product.category}</p>
            <p>Bestseller : {String(product.bestseller)}</p>
        </div>
    );
}
