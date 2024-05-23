import React from "react";

const Henkilot = ({tyypit}) => {
    function formatDate(value) {
        let date = new Date(value);
        const day = date.toLocaleString("default", {day: "2-digit"});
        const month = date.toLocaleString("default", {month: "2-digit"});
        const year = date.toLocaleString("default", {year: "numeric"});
        return day + "." + month + "." + year;
    }
    return (
        <div>
            {tyypit.map((henkilo, index) => (
                <div key={index}>
                    <img src={henkilo.picture.large} alt={`${henkilo.name.first} ${henkilo.name.last}`} />
                    <h2>{`${henkilo.name.title} ${henkilo.name.first} ${henkilo.name.last}`}</h2>
                    <p>{`${henkilo.location.street.name} ${henkilo.location.street.number}, ${henkilo.location.city}, ${henkilo.location.state}, ${henkilo.location.country}`}</p>
                    <p>{henkilo.email} <br/> Syntymäaika: {formatDate(henkilo.dob.date)} <br/> Puhelin: {henkilo.cell}</p>
                </div>
            ))} 
        </div>
    )
}
export default Henkilot;