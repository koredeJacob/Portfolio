import Experience from '../Experience/Experience'
import Skills from '../skills/skills'
import './main.css'


const Main =()=>{
    return (
     <main className="mt-[80px]">
        <section className="w-[92%] md:w-[94%] mx-auto py-16">
            <div>

            </div>
            <div>
            <div className="space-y-1.5">
                <h1 className="text-white text-4xl font-semibold">Hi, I'm Korede <span className='wave' role="img" aria-label="wave">👋</span></h1>
                <p className="text-light-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque consectetur optio voluptates voluptatibus ad rem expedita eveniet voluptatum iure id rerum possimus dignissimos, et quae obcaecati, repudiandae corporis cumque nobis molestiae! Reprehenderit animi voluptatibus reiciendis minima rerum, ab maiores!</p>      
            </div>
            </div>
        </section>
        <section className='w-[92%] md:w-[94%] mx-auto pb-16 space-y-6 md:space-y-12'>
            <div className='text-light-50 space-y-3'>
                <div className='bg-dark-20 px-5 py-1 w-fit mx-auto rounded-xl'>
                    <p>Skills</p>
                </div>
                <div>
                    <p className='text-center text-lg md:text-xl'>The skills, tools and technologies i am really good at:</p>
                </div>
            </div>
            <Skills/>
        </section>
        <section className='py-16 bg-dark-10'>
            <div className='text-light-50 space-y-3'>
                <div className='bg-dark-20 px-5 py-1 w-fit mx-auto rounded-xl'>
                    <p >Experience</p>
                </div>
                <div>
                    <p className='text-center text-lg md:text-xl'>Here is a quick summary of my most recent experiences</p>
                </div>
            </div>
            <div>
                <Experience/>
                <Experience/>
            </div>
        </section>
     </main>
    )
}

export default Main