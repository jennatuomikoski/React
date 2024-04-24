import React from "react";

function Lomake() {
    const [formData, setFormData] = React.useState("");

    function handleChange(event) {
        setFormData(event.target.value)
    };
    function handleSubmit(event) {
        event.preventDefault();
        alert("Kirjoitit: " + formData);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={formData}
                    placeholder="Kirjoita jotain"
                    onChange={handleChange}
                    name="teksti"
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Lomake;