import parse from 'html-react-parser';

export default function ProjectCard({ post }) {
    
    let image = 'https://cederdorff.github.io/img/logo512.webp';

    if (post._embedded && post._embedded['wp:featuredmedia']) {
        image = post._embedded['wp:featuredmedia'][0].source_url;
    }


    let urlArg = post.acf.url;
    console.log(urlArg);

    let letsGo = () => {
        window.open(urlArg);
    }

    return (
        <div className='min-w-[150px] flex flex-col mx-1'>
            <img src={image} alt="" className="rounded-t-md md:grayscale md:hover:grayscale-0" />
            <div className="bg-gray-400 rounded-b-md px-2">
                <h1 className='text-2xl'>{parse(post.title.rendered)}</h1>
                <div className='text-md'>{parse(post.acf.description)}</div>
                <div className='text-md'>{parse(post.acf.year)}</div>
                <div className='flex justify-center'>
                    <button onClick={letsGo} className='rounded-md bg-white text-center px-3 my-3'>Live Project</button>
                </div>
            </div>
        </div>
    )
}
