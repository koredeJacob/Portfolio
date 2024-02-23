import { useEffect, useState } from "react"
import Nav from "./components/nav/navbar"
import Main from "./components/main/main"

const App=()=>{
    const [Show,setShow]=useState<boolean>(false)

	const handleToggle=()=>{
		setShow(!Show)
	}

    useEffect(()=>{
        if(Show){
            document.body.style.overflow='hidden'
        }
        else{
            document.body.style.overflow='visible'
        }
    },[Show])

    return (
        <div className={`w-full relative bg-dark-200 overflow-hidden`}>
            <Nav show={Show} handleToggle={handleToggle}/>
            <Main/>
        </div>
    )
}

export default App