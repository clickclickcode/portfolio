import parse from 'html-react-parser';

export default function ProjectCard({ post }) {
    
    let image = 'https://cederdorff.github.io/img/logo512.webp';

    if (post._embedded && post._embedded['wp:featuredmedia']) {
        image = post._embedded['wp:featuredmedia'][0].source_url;
    }

    return (
        <div className='flex flex-col gap-5 my-5 mx-20'>
            <img src={image} alt="" />
            <h1 className='text-2xl'>{parse(post.title.rendered)}</h1>
            <div className='text-md'>{parse(post.content.rendered)}</div>
        </div>
    )
}
