import parse from 'html-react-parser';

export default function ProjectCard({ post }) {
    
    let image = 'https://cederdorff.github.io/img/logo512.webp';

    if (post._embedded && post._embedded['wp:featuredmedia']) {
        image = post._embedded['wp:featuredmedia'][0].source_url;
    }


    let urlArg = post.acf.url;
    // console.log(urlArg);

    let letsGo = () => {
        window.open(urlArg);
    }

    return (
        <div className='w-52 h-[400px] flex flex-col border rounded-md'>
            <img src={image} alt="" className="h-40 w-52 object-cover rounded-t-md grayscale md:hover:grayscale-0" />
            <div className="flex flex-col justify-between flex-1 h-[200px] w-52 border-t px-2 py-1">
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between'>
                        <h1 className=''>{parse(post.title.rendered)}</h1>
                        <div className=''>{parse(post.acf.year)}</div>
                    </div>
                    <div className=''>{parse(post.acf.description)}</div>
                </div>
                <div className='flex justify-center'>
                    <button onClick={letsGo} className='rounded-md text-white bg-teal-700 text-center px-12 py-1 my-2 hover:bg-teal-500 hover:text-black'>Live Project</button>
                </div>
            </div>
        </div>
    )
}
