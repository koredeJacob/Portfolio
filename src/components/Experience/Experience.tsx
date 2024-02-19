
const Experience=()=>{
    return (
        <div className="flex flex-col md:flex-row md:justify-between gap-4 bg-dark-50 p-8 rounded-xl shadow-md shadow-gray-950">
            <div className="order-1 md:w-1/4">
                <h2 className="text-white text-2xl font-semibold">Edgi Design</h2>
            </div>
            <div className="text-light-50 order-2 md:order-3 md:w-1/4 md:text-right"> Aug 2022 - Nov 2022 </div>
            <div className="space-y-4 order-3 md:order-2 md:w-2/4">
                <h3 className="text-white text-xl font-semibold">Backend Engineering Intern</h3>
                <div className="text-light-50">
                    <ul className="list-disc space-y-2">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur eum esse voluptatibus et velit, nostrum maxime optio!
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, molestias non. Temporibus porro assumenda dolorum vel magnam facere labore ad.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore dolorum perspiciatis! Omnis doloribus ab nostrum a.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience