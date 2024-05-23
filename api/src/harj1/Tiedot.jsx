import { useState, useEffect } from 'react'


function Tietoja() {
    const [henkilo, setHenkilo] = useState(null);

    useEffect(() => {
        fetch("https://randomuser.me/api/?nat=fi")
            .then((response) => response.json())
            .then((data) => {
                setHenkilo(data.results[0]);
            })
            .catch((error) => console.error("Error fetching data: ", error));
    }, []);

    if (!henkilo) {
        return <div>Ladataan...</div>;
    }

    return (
        <div>
            <h1>{`${henkilo.name.first} ${henkilo.name.last}`}</h1>
            {henkilo && (
                <div>
                    <img 
                        src= {henkilo.picture.large} 
                        alt={`${henkilo.name.first} ${henkilo.name.last}`} 
                    />
                    <h2>{`${henkilo.name.title} ${henkilo.name.first} ${henkilo.name.last}`}</h2>
                    <p>{`${henkilo.location.street.name} ${henkilo.location.street.number}, ${henkilo.location.city}`}</p>
                    <p>{`${henkilo.location.state}, ${henkilo.location.country}`}</p>
                </div>
            )}
        </div>
    )
}

export default Tietoja;