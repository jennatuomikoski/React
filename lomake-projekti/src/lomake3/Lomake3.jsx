import React from "react";

function Lomake3() {
    const [formData, setFormData] = React.useState(
        {nimi: "", sahkoposti: "", rooli: ""}
    );

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault();
        alert("Nimi: " + formData.nimi + ", Sähköposti: " + formData.sahkoposti + ", Rooli: " + formData.rooli);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={formData.nimi}
                    placeholder="Nimi"
                    onChange={handleChange}
                    name="nimi"
                />
                <input 
                    type="email" 
                    value={formData.sahkoposti}
                    placeholder="Sähköposti"
                    onChange={handleChange}
                    name="sahkoposti"
                    required
                /> 
                <select 
                    value={formData.rooli}
                    onChange={handleChange}
                    name="rooli"
                >
                    <option value="">Valitse rooli</option>
                    <option value="opiskelija">Opiskelija</option>
                    <option value="opettaja">Opettaja</option>
                    <option value="muu">Muu henkilö</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Lomake3;