import img from "../../assets/homepage.png"

const skills=["React","javaScript","CSS"]

interface ProjectProps{
    url:string,
    image:string,
    title:string,
    description:string,
    github:string
    skills:string[]
}

const Project:React.FC<ProjectProps>=({url,image,title,description,skills,github})=>{
    return (
        <div className="bg-dark-50 rounded-xl shadow-md shadow-gray-950 md:flex">
            <div className="flex justify-center items-center w-full p-8 lg:p-12 h-auto bg-dark-20 rounded-t-xl md:rounded-r-none md:rounded-l-xl md:w-1/2">
                <img src={image} loading="lazy" className="rounded-xl w-[100%] h-auto shadow-lg transition-transform duration-500 hover:scale-105"/>
            </div>
            <div className="flex flex-col gap-6 p-8 lg:p-12 md:w-1/2">
                <div>
                    <h1 className="text-white text-lg font-semibold md:text-xl">{title}</h1>
                </div>
                <div>
                    <p className="text-light-50 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus maxime, illo magni consequuntur fuga ipsum laboriosam asperiores, deleniti sunt vero in enim eligendi cum nulla?</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill,index)=>{
                        return <div key={index}  className="bg-dark-20 w-fit px-5 py-1 rounded-xl"><p className="text-light-50 font-medium text-sm">{skill}</p></div>
                    })}
                </div>
                <div className="flex">
                    <div>
                        <button className='p-1 hover:bg-dark-20 rounded-lg active:bg-dark-20 transition-colors duration-200'>
                        <a href={url} target="_blank">
                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 19V25C24 25.5304 23.7893 26.0391 23.4142 26.4142C23.0391 26.7893 22.5304 27 22 27H11C10.4696 27 9.96086 26.7893 9.58579 26.4142C9.21071 26.0391 9 25.5304 9 25V14C9 13.4696 9.21071 12.9609 9.58579 12.5858C9.96086 12.2107 10.4696 12 11 12H17" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M21 9H27V15" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 20L27 9" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        </button>
                    </div>
                    <div>
                        <button className='p-1 hover:bg-dark-20 rounded-lg active:bg-dark-20 transition-colors duration-200'>
                            <a href={github} target="_blank">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.9998 28V24C21.1389 22.7473 20.7797 21.4901 19.9998 20.5C22.9998 20.5 25.9998 18.5 25.9998 15C26.0798 13.75 25.7298 12.52 24.9998 11.5C25.2798 10.35 25.2798 9.15 24.9998 8C24.9998 8 23.9998 8 21.9998 9.5C19.3598 9 16.6398 9 13.9998 9.5C11.9998 8 10.9998 8 10.9998 8C10.6998 9.15 10.6998 10.35 10.9998 11.5C10.2717 12.5159 9.91827 13.7528 9.99979 15C9.99979 18.5 12.9998 20.5 15.9998 20.5C15.6098 20.99 15.3198 21.55 15.1498 22.15C14.9798 22.75 14.9298 23.38 14.9998 24V28" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 24C10.49 26 10 22 8 22" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project