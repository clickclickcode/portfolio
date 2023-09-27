import CardContainer from '../components/CardContainer'


export default function Work() {

    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'Project 1 description',
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'Project 2 description',
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'Project 3 description',
        },
    ];
    
    const tools = [
        {
            id: 1,
            img: '',
            alt: '',
        },
        {
            id: 2,
            img: '',
            alt: '',
        },
        {
            id: 3,
            img: '',
            alt: '',
        },
    ];
    
    return (
        <div className=''>
            <div className='flex flex-col gap-5 my-5 mx-20'>
                <h1 className='text-2xl'>Personal & School Projects</h1>
                <p className='text-md'>Here you can have a look around to see what projects I have been working on up until this moment. Hopefully, this will give you an idea of who I am as a developer. Happy browsing!</p>
            </div>
            <div>
                <h2 className='text-2xl my-5 mx-20'>Tools</h2>
                <div className='flex overflow-scroll'>
                    {tools.map(tool => (
                        <div key={tool.id} className='flex flex-col gap-5 mx-20 my-10'>
                            <img src={`../images/${tool.img}`} alt={tool.alt} />
                        </div>
                    ))}
                </div>
                <h2 className='text-2xl my-5 mx-20'>School Projects</h2>
                <div className='flex overflow-scroll'>
                    {projects.map(project => (
                        <div key={project.id} className='flex flex-col gap-5 mx-20 my-10'>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
                <h2 className='text-2xl my-5 mx-20'>Personal Projects</h2>
                <div className='flex overflow-scroll'>
                    {projects.map(project => (
                        <div key={project.id} className='flex flex-col gap-5 mx-20 my-10'>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
                <h2 className='text-2xl my-5 mx-20'>Tutorials</h2>
                <div className='flex overflow-scroll'>
                    {projects.map(project => (
                        <div key={project.id} className='flex flex-col gap-5 mx-20 my-10'>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <CardContainer />
        </div>
    )
}