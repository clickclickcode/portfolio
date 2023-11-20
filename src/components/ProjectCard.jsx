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
        <div className='w-[200px] h-[300px] flex flex-col mx-1'>
            <img src={image} alt="" className="h-[150px] w-[200px] object-cover rounded-t-md md:grayscale md:hover:grayscale-0" />
            <div className="flex flex-col justify-between flex-1 h-[50%] border rounded-b-md px-2 py-1">
                <div>
                    <h1 className=''>{parse(post.title.rendered)}</h1>
                    <div className='truncate'>{parse(post.acf.description)}</div>
                    <div className=''>{parse(post.acf.year)}</div>
                </div>
                <div className='flex justify-center'>
                    <button onClick={letsGo} className='rounded-md text-white bg-teal-700 text-center px-3 my-3 hover:bg-teal-500 hover:text-black'>Live Project</button>
                </div>
            </div>
        </div>
    )
}
