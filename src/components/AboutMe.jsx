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
            title: 'Gaming',
            description: 'Gaming description',
        },
    ];
    
    return (
        <div className="flex flex-col my-5 mx-20" id='about'>
            <h2 className="text-xl">Get to know me</h2>
            <p>Here are a few of the things that I enjoy spending time on.</p>
            <div className="flex flex-col self-center gap-5 my-5 md:flex-row">
                {hobbies.map(hobby => (
                    <div key={hobby.id} className="">
                        <h2>{hobby.title}</h2>
                        <p>{hobby.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}