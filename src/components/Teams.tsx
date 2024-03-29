import TeamMember from "./TeamMember";

export default function Teams () {
    return (
        <section className='my-4 md:my-8 text-gray-300'>
        <h2 className='font-akkurat text-black font-medium text-2xl md:text-4xl mb-4 md:mb-16 text-center md:text-left md:ml-36 2xl:mx-72'>
            Meet the team
        </h2>
        <div className='min-[768px]:mx-8 min-[1152px]:mx-32 2xl:mx-72'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12'>
            {[
                {
                name: 'Navdeep Simmak',
                role: 'Software Engineer',
                img: '/assets/Navdeep.jpeg',
                github: 'https://github.com/NaviSimmak',
                linkedin: 'https://www.linkedin.com/in/navdeep-simmak/',
                },
                {
                name: 'Wai San Gu',
                role: 'Software Engineer',
                img: '/assets/Waisan.jpeg',
                github: 'https://github.com/waisangu',
                linkedin: 'https://www.linkedin.com/in/waisangu/',
                },
                {
                name: 'Felix Chen',
                role: 'Software Engineer',
                img: '/assets/Felix.jpeg',
                github: 'https://github.com/flexzchen',
                linkedin: 'https://www.linkedin.com/in/felixzchen/',
                },
                {
                name: 'Alston Nguyen',
                role: 'Software Engineer',
                img: '/assets/Alston.jpeg',
                github: 'https://github.com/alstonnguyen',
                linkedin: 'https://www.linkedin.com/in/alston-s-nguyen/',
                },
            ].map((member, index) => (
                <TeamMember key={index} {...member} />
            ))}
            </div>
        </div>
        </section>

    )
};