import { useEffect, useState } from 'react';
import CardContainer from './CardContainer'
import parse from 'html-react-parser'
import ProjectCard from './ProjectCard';


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

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const response = await fetch('https://wp.learningthings.dk/wp-json/wp/v2/project?_embed');
            const data = await response.json();
            console.log(data);
            setPosts(data);
        }
        getPosts();
    }, []);
    
    return (
        <div className='flex flex-col gap-5 mx-20 my-5 pt-8' id='work'>
            {/* These are the WP projects */}
            <div className='my-5'>
                <h2 className='text-xl'>Projects</h2>
                <p className='text-md'>
                    Here you can have a look around to see what projects I have been working on up until this moment. Hopefully, this will give you an idea of who I am as a developer. Happy browsing!
                </p>
            </div>
            <div className='flex items-center gap-5 overflow-scroll md:flex-row'>
                {posts.map(post => (
                    <ProjectCard key={post.id} post={post} />
                ))}
                {posts.map(post => (
                    <ProjectCard key={post.id} post={post} />
                ))}
            </div>
            {/* This is the end of the WP projects */}
            <CardContainer />
        </div>
    )
}