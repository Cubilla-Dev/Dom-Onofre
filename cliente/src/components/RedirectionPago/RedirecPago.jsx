import {useState, useEffect} from 'react'
import { useLocation} from 'react-router-dom';
import axios from 'axios'
import { PATH_API_SHOW_SALE } from '../../routers/routerApi'
import './stylePago.css'

const RedirecPago = () => {
    const location = useLocation();
    const [saleData, setSaleData] = useState(null)

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const doc_id = searchParams.get('doc_id');
        const verifiPago = async () => { 
            try {
                const response = await axios.get(PATH_API_SHOW_SALE + doc_id);
                setSaleData(response.data);
            } catch (err) {
                console.log('Hubo un error en la petición: ', err);
            }
        };
        verifiPago();
    }, [location.search]);

    return (
        <div className="container-redirec">
            {saleData && saleData.map((data, index) => (
                <div key={index} className="status-container">
                    <h2>Su producto está</h2>
                    <h1 className={data.status === 'paid' ? 'paid' : 'pending'}>
                        Pagado
                    </h1>
                </div>
            ))}
        </div>
    )
}

export default RedirecPago