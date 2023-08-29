import Image from "next/image";
import GitHubButton from "./GithubButton";
import LinkedInButton from "./LinkedInButton";

interface TeamMemberProps {
    img: string;
    name: string;
    role: string;
    github: string;
    linkedin: string;
}

export default function TeamMember ({ img, name, role, github, linkedin }: TeamMemberProps) {
    return (
    <div className='group flex flex-col items-center p-6'>
      <h3 className='text-2xl mb-4 font-akkurat text-black font-medium'>{name}</h3>
      <div className='relative w-40 h-40 mb-8 overflow-hidden rounded-full'>
        <Image
          src={img}
          layout='fill'
          alt={`${name}, ${role}`}
          className='w-full h-full object-cover border-4 transition-transform duration-300'
        />
      </div>
      <p className='text-lg font-akkurat text-[#575657] mb-4'>{role}</p>
      <div className='flex items-center'>
        <GitHubButton url={github} />
        <LinkedInButton url={linkedin} />
      </div>
    </div>
    )
}