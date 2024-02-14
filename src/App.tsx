import { useState } from "react"
import Nav from "./components/nav/navbar"
import Main from "./components/main/main"

const App=()=>{
    const [Show,setShow]=useState<boolean>(false)

	const handleToggle=()=>{
		setShow(!Show)
	}
    return (
        <div className={`w-full relative bg-dark-200 ${Show?'h-dvh':''} overflow-hidden`}>
            <Nav show={Show} handleToggle={handleToggle}/>
            <Main/>
        </div>
    )
}

export default App