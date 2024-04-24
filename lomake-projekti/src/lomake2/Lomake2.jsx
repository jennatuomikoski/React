import React from "react";

function Lomake2() {
    const [formData, setFormData] = React.useState(
        {nimi: "", sahkoposti: ""}
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
        alert("Nimi: " + formData.nimi + ", Sähköposti: " + formData.sahkoposti);
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
                    type="text" 
                    value={formData.sahkoposti}
                    placeholder="Sähköposti"
                    onChange={handleChange}
                    name="sahkoposti"
                /> 
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Lomake2;