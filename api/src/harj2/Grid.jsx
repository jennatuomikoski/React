import { useState, useEffect } from 'react'
import Henkilot from './Henkilot';

function Grid() {
    const [henkilot, setHenkilot] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=18&nat=fi&gender=male")
            .then((response) => response.json())
            .then((data) => {
                setHenkilot(data.results);
            })
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);

    return (
        <div>
            <h1>Satunnaiset käyttäjät</h1>
            <Henkilot tyypit={henkilot}/>
        </div>
    )
}

export default Grid;