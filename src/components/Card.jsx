export default function Card({ img, alt, title, description }) {
    return (
        <div className="w-3/4">
            <img src={img} alt={alt} className="grayscale rounded-t-md"/>
            <div className="border rounded-b-md px-2">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}