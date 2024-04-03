export default function Ytiedot(props) {
    return (
        <div className="kortti">
            <h2>{props.name}</h2>
            <h3>{props.email}</h3>
            <p>{props.address}</p>
            <p>{props.phone}</p>
            <p className="bold">{props.website}</p>
        </div>
    )
}