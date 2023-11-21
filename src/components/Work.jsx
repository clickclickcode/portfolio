import { useEffect, useState } from 'react';
import parse from 'html-react-parser'
import ProjectCard from './ProjectCard';



export default function Work() {
  
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
        <div className='flex flex-col gap-5 mx-12 pt-14' id='work'>
            <div className=''>
                <h2 className='text-2xl mb-1'>Projects</h2>
                <p className='text-base'>
                    Here you can have a look around to see what projects I have been working on up until this moment. Hopefully, this will give you an idea of who I am as a developer. Happy browsing!
                </p>
            </div>
            {/* These are the WP projects */}
            {/* removed md:flex-row */}
            <div className='flex items-center gap-6 py-4 px-2 overflow-scroll md:justify-center'>
                {posts.map(post => (
                    <ProjectCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}