import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

/*-------------------------------------------------------------
                            ( Main Page )
        has: Form of "Crating Product" &  Get "List of product"
--------------------------------------------------------------*/
const Main = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const trigger = (data) => {
        setProduct(data);
    }
    return (
        <div>
            <ProductForm sendTrigger={trigger}/>
            <hr />
            {loaded && <ProductList product={product} />}
        </div>
    )
}

export default Main;

