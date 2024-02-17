import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './View.css'

const ViewProduct = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchData = async () => { 
            try {
                const response = await axios.get(`http://127.0.0.1:3000/allproduct`);
                setProduct(response.data);
            } catch (err) {
                console.log('Hubo un error en la petición: ', err);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='container-view'>
            {product.map((data, index) => (
                <Link to={`/detail/${data._id}`} key={index} style={{ textDecoration: 'none', color: 'black' }}>
                    <div className='product'>
                        <img src={data.url_image} alt="Product" className='product-image' />
                        <p className='product-name'>{data.name_product}</p>
                        <p className='product-price'>{data.price}</p>
                        <button>Comprar</button>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ViewProduct