interface ExperienceProps{
    company:string,
    date:string,
    role:string,
    bullet:string[]
}

const Experience:React.FC<ExperienceProps>=({company,date,role,bullet})=>{
    return (
        <div className="flex flex-col md:flex-row md:justify-between gap-4 bg-dark-50 p-8 rounded-xl shadow-md shadow-gray-950">
            <div className="order-1 md:w-1/4">
                <h2 className="text-white text-2xl font-semibold">{company}</h2>
            </div>
            <div className="text-light-50 order-2 md:order-3 md:w-1/4 md:text-right">{date}</div>
            <div className="space-y-4 order-3 md:order-2 md:w-2/4">
                <h3 className="text-white text-xl font-semibold">{role}</h3>
                <div className="text-light-50">
                    <ul className="list-disc space-y-2">
                        {bullet.map((point,index)=><li key={index}>{point}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience