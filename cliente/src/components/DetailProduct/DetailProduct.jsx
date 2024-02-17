import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './styleDetail.css'


const DetailProduct = () => {
    const { id } = useParams();
    //un id unica para cada compra
    const uniqueId = uuidv4();
    const [product, setProduct] = useState({}); 

    useEffect(() => {
        const fetchProduct = async () => { 
            try {
                const response = await axios.get(`http://127.0.0.1:3000/product/${id}`);
                setProduct(response.data); 
            } catch (err) {
                console.log('Hubo un error en la petición: ', err);
            }
        };
        fetchProduct();
    }, [id]);

    console.log(product);

    //compra del producto
    const payProduct = async () => {
        try {
            const response = await axios.post(`http://127.0.0.1:3000/create-debt`, 
            {
                idDeuda: uniqueId,
                valor: product.price,
                label: product.name_product
            });
            //redireccion a la pagina de pago
            window.location.href = response.data.payUrl;
        } catch (err) {
            console.log('Hubo un error en la petición: ', err);
        }
    };

    return (
        <div className='container-detail'>
            <div className='container-product'>
                <img src={product.url_image} alt="Product" />
                <p>{product.description}</p>
                <div className='name-price'>
                    <p>{product.name_product}:</p>
                    <p>{product.price}</p>
                </div>
                <button onClick={payProduct}>Comprar</button>
            </div>
        </div>    
    );
};

export default DetailProduct;
