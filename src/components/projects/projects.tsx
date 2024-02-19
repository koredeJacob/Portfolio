import img from "../../assets/homepage.png"

const skills=["React","javaScript","CSS"]

const Project=()=>{
    return (
        <div className="bg-dark-50 rounded-xl">
            <div className="w-full p-8 h-auto bg-dark-20 rounded-t-xl">
                <img src={img} loading="lazy" className="rounded-xl"/>
            </div>
            <div className="flex flex-col gap-6 p-8">
                <div>
                    <h1 className="text-white text-lg font-semibold">Digital Marketing website</h1>
                </div>
                <div>
                    <p className="text-light-50 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minus maxime, illo magni consequuntur fuga ipsum laboriosam asperiores, deleniti sunt vero in enim eligendi cum nulla?</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill,index)=>{
                        return <div key={index}  className="bg-dark-20 w-fit px-5 py-1 rounded-xl"><p className="text-light-50 font-medium text-sm">{skill}</p></div>
                    })}
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Project