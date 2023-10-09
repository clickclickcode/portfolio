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
        <div className='min-w-[200px] min-h-full flex flex-col mx-1'>
            <img src={image} alt="" className="object-cover rounded-t-md md:grayscale md:hover:grayscale-0" />
            <div className="flex flex-col flex-1 border rounded-b-md px-2">
                <h1 className=''>{parse(post.title.rendered)}</h1>
                <div className='truncate'>{parse(post.acf.description)}</div>
                <div className=''>{parse(post.acf.year)}</div>
                <div className='flex justify-center'>
                    <button onClick={letsGo} className='rounded-md bg-white text-center px-3 my-3'>Live Project</button>
                </div>
            </div>
        </div>
    )
}
