import Card from "./Card";
import Me from '../images/me.png';

export default function CardContainer() {
    return (
        <>
            <div className="flex flex-col gap-5 mx-20 my-10">
                <h2>Projects</h2>
                <div className="flex flex-col items-center gap-5">
                    <Card
                        img={Me}
                        alt='artwork'
                        title='Artwork'
                        description='Artwork description'
                    />
                    <Card
                        img={Me}
                        alt='artwork'
                        title='Artwork'
                        description='Artwork description'
                    />
                    <Card
                        img={Me}
                        alt='artwork'
                        title='Artwork'
                        description='Artwork description'
                    />
                </div>
            </div>
        </>
    )
}