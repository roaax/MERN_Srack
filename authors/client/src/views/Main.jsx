import React, { useEffect, useState } from 'react'
import axios from 'axios';
import List from '../components/List';

/*-------------------------------------------------------------
                            ( Main Page )
--------------------------------------------------------------*/
const Main = (props) => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [author]);

    return (
        <div className='container shadow-lg text-center p-4 mt-4'>
            <h1>Favorite Author</h1>
            {loaded && <List author={author} />}
        </div>
    )
}

export default Main;

