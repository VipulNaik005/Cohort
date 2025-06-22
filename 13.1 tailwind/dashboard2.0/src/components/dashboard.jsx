import { useEffect, useState } from "react"

export const Dashboard = () => {
    const [open, setOpen] = useState(true)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    useEffect(() => {
        if(isDesktop == false){
            setOpen(false)
        }else{
            setOpen(true)        
        }
    },[isDesktop])

    return (
        <div className="flex">
            <SideBar sideBarOpen={open} setSideBarOpen={setOpen} />
            <MainContenet />
        </div>
    )
}

const useMediaQuery = (query)=>{
    const [matches,setMatches] = useState(false)
    useEffect(()=>{
        const media = window.matchMedia(query);
        if(media.matches !== matches){
            setMatches(media.matches)
        }
        const listener = () => setMatches(media.matches)
        media.addListener(listener)
        return ()=> media.removeListener(listener)
    },[matches,query])

    return matches;
}

function SideBar({ sideBarOpen, setSideBarOpen }) {
    return (
        <div>
            <div className={`${sideBarOpen ? "w-68" : "w-12"} h-screen bg-red-100 transition-all ease-in-out fixed md:relative `}>
                <button className=" " onClick={() => setSideBarOpen(sideBarOpen => !sideBarOpen)}>X</button>
            </div>
        </div>
    )
}
function MainContenet() {
    return (
        <div className="flex-1">
            <div className="h-48 bg-black hidden md:block"></div>
            <div className="grid grid-cols-11 gap-8 p-8 translate-x-14 md:translate-x-0 ">
                <div className="h-96 rounded-2xl shadow-lg bg-red-200  md:col-span-2 -translate-y-24 col-span-10 hidden md:block"></div>
                <div className="h-96 rounded-2xl shadow-lg bg-green-200  md:col-span-6 col-span-10"></div>
                <div className="h-96 rounded-2xl shadow-lg bg-yellow-200  md:col-span-3 col-span-10"></div>
            </div>
        </div>
    )
}