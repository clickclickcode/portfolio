export default function AboutMe() {
    
    const hobbies = [
        {
            id: 1,
            title: 'Coding',
            description: 'Coding description',
        },
        {
            id: 2,
            title: 'Bouldering',
            description: 'Bouldering description',
        },
        {
            id: 3,
            title: 'Reading',
            description: 'Reading description',
        },
    ];
    
    return (
        <div className="flex flex-col mx-12 pt-14" id='about'>
            <h2 className="text-2xl mb-1">Get to know me</h2>
            <p>Here are a few of the things that I enjoy.</p>
            <div className="flex flex-col self-center gap-5 mt-5 md:flex-row">
                {hobbies.map(({ id, title, description }) => (
                    <div key={id} className="">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}