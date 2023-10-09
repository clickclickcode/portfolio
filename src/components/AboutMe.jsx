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
        <div className="flex flex-col gap-5 my-5 mx-20">
            <h1>About Me</h1>
            <h2>Get to know me a bit better</h2>
            <div className="flex self-center gap-5">
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