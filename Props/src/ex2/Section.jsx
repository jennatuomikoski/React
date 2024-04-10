import Button from "./Button";
import Header from "./Header";
function Section() {
    function handleClick() {
        console.log("Boo!");
    }
    return (
        <>
            <Header text="Exercise 2" />
            <Button text="Click me!" handleClick={handleClick}/>
        </>
    )
}

export default Section;