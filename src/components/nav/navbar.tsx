import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import './navbar.css'

interface showProps{
    show:boolean
    handleToggle:()=>void
}

const Nav:React.FC<showProps>=({show,handleToggle})=>{
   

    return (
    <header className='fixed w-full z-30 py-1 bg-dark-200'>
        <div className='container relative flex w-[92%] max-w-[1220px] lg:w-[94%] h-[50px] lg:h-[60px] mx-auto justify-between items-center'>
            <div className='flex flex-col items-center'>
                <h1 className='text-white font-semibold text-2xl tracking-normal'>&lt;KJ /&gt;</h1>
            </div>
            <button className={`hamburger block relative w-[26px] md:w-8 h-8 md:h-9 lg:hidden rounded focus:outline-none ${show?'open':''}`} onClick={handleToggle}>
                <span className='hamburger-top w-full h-0.5 md:h-1 bg-gray-100 rounded-sm'></span>
				<span className='hamburger-middle w-full h-0.5 md:h-1 bg-gray-100 rounded-sm'></span>
				<span className='hamburger-bottom w-full h-0.5 md:h-1 bg-gray-100 rounded-sm'></span>
            </button>
            <div className='hidden lg:flex gap-x-16 items-center'>
                <div className='hidden lg:flex'>
                    <ul className='flex gap-x-10'>
                        <li>
                            <Link to='/experience' className='text-gray-100 text-xl font-nunito font-normal'>Experience</Link>
                        </li>
                        <li>
                            <Link to='/projects' className='text-gray-100 text-xl font-nunito font-normal'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='text-gray-100 text-xl font-nunito font-normal'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to="#">
                        <button className='flex gap-x-1 items-center bg-gray-100 px-4 py-1.5 w-fit rounded-[20px] 
                        transition ease-in-out hover:scale-105 duration-300' >
                            <p className='text-bgblue text-lg font-nunito font-medium'>Download CV</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <nav className={`menu w-full h-screen absolute bg-dark-200 px-6 py-10  md:px-8 lg:hidden rounded-b-xl ${show?'open':'close'}`}>
            <ul className='flex flex-col gap-y-6 md:gap-y-7 tracking-wide'>
                <li>
                    <Link to='/vehicles' className='text-gray-100 text-2xl md:text-2xl font-nunito font-medium'>Experience</Link>
                </li>
                <li>
                    <Link to='/#' className='text-gray-100 text-2xl md:text-2xl font-nunito font-medium'>Projects</Link>
                </li>
                <li>
                    <Link to='/#' className='text-gray-100 text-2xl md:text-2xl font-nunito font-medium'>Contact</Link>
                </li>
                <li>
                    <Link to="#">
                        <button className='flex items-center mt-5 bg-gray-100 px-4 py-1.5 w-fit rounded-[20px] 
                        transition ease-in-out hover:scale-105 duration-300' >
                            <p className='text-dark-200 text-lg font-nunito font-medium'>Download CV</p>
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>

    </header>)
}

export default Nav