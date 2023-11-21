import HobbyCard from "./HobbyCard";
import { hobbies } from "../assets/storage.js";

export default function AboutMe() {
    
    
    return (
        <div className="flex flex-col gap-5 mx-12 pt-14" id='about'>
            <h2 className="text-2xl mb-1">About Me</h2>
            <p className="text-[15px]">As a person I am down-to-earth and open-minded. I appreciate opportunities to learn from people smarter than myself.<br/><br/>Prior to starting this journey to become a developer, I studied Marketing Management where I took a liking to SEO.<br/>I would not be against updating what little SEO knowledge that persisted since then.<br/><br/>In my spare time some of the things I enjoy the most are:</p>
            <div className="flex items-center gap-6 py-4 px-2 overflow-x-scroll md:justify-center">
                {hobbies.map(hobby => (
                    <HobbyCard key={hobby.id} hobby={hobby} />
                ))}
            </div>
        </div>
    )
}