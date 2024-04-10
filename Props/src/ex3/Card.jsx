import Button from "./Button"
function Card({cardText, buttonText, handleClick}) {
    return (
        <>
            <h2>{cardText}</h2>
            <Button handleClick={handleClick} text={buttonText}/>
        </>
    )
}

export default Card;