import { useEffect, useState } from 'react';
import CardContainer from './CardContainer'
import parse from 'html-react-parser'
import ProjectCard from './ProjectCard';
import CourseCard from './CourseCard';


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
            // console.log(data);
            setPosts(data);
        }
        getPosts();
    }, []);
    
    return (
        <div className='flex flex-col gap-5 mx-10 pt-14' id='work'>
            <div className=''>
                <h2 className='text-2xl mb-1'>Projects</h2>
                <p className='text-base'>
                    Here you can have a look around to see what projects I have been working on up until this moment. Hopefully, this will give you an idea of who I am as a developer. Happy browsing!
                </p>
            </div>
            {/* These are the WP projects */}
            {/* removed md:flex-row */}
            <div className='flex items-center gap-6 py-4 px-2 overflow-scroll md:flex-col'>
                {posts.map(post => (
                    <ProjectCard key={post.id} post={post} />
                ))}
            </div>
            {/* This is the end of the WP projects */}
            <div className='flex items-center gap-6 py-4 px-2 overflow-scroll md:flex-col'>
                {/* {createRoutesFromElements.map(course => {
                    <CourseCard key={course.id} course={course} />
                })} */}
            </div>
            {/* <CardContainer /> */}
        </div>
    )
}