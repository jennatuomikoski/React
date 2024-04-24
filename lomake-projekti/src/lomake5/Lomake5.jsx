import React from "react";

function Lomake5() {
    const [hobbies, setHobbies] = React.useState([]);

    function handleAddHobby() {
        setHobbies([...hobbies, ""])
    }
    function handleHobbyChange(index, event) {
        const newHobbies = hobbies.map((hobby, i) => {
            if (i === index) {
                return event.target.value;
            }
            return hobby;
        });
        setHobbies(newHobbies);
    };
    function handleSubmit(event) {
        event.preventDefault();
        alert("Harrastukset: " + hobbies.join(", "));
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {hobbies.map((hobby, index) => (
                    <input 
                        key={index}
                        type="text" 
                        value={hobby}
                        placeholder="Harrastus"
                        onChange={(event) => handleHobbyChange(index, event)}
                    />
                ))}
                <button type="button" onClick={handleAddHobby}>Lisää harrastus</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Lomake5;