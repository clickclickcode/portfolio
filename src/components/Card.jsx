export default function Card() {
    return (
        <div>
            <img src={img} alt={alt} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}