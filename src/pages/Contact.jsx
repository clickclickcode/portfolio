export default function Contact() {
    
    const contacts = [
        {
            id: 1,
            title: 'Email',
            url: '',
            icon: '',
            description: 'Email description',
        },
        {
            id: 2,
            title: 'Github',
            url: '',
            icon: '',
            description: 'Github description',
        },
        {
            id: 3,
            title: 'LinkedIn',
            url: '',
            icon: '',
            description: 'LinkedIn description',
        }
    ];
    
    return (
        <div>
            <h1>Contact</h1>
            <p>Should any of this have caught your eye, you are more than welcome to reach out, be it for a friendly chat, potential collaborations or anything inbetween. You can catch me via the contacts below.</p>
            {contacts.map(contact => (
                <div key={contact.id} className="">
                    <h2>{contact.title}</h2>
                    <p>{contact.description}</p>
                </div>
            ))}
        </div>
    )
}