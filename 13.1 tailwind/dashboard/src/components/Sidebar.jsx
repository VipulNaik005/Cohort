import { FaHome } from "react-icons/fa";

export function Sidebar() {
    const sidebarItems = ["Home", "Home", "Home", "Home"]
    return (
        <div className="flex flex-col hidden sm:block border-r-gray-100 border-r-2 bg-gray-50">
            <div className="text-2xl flex items-center m-2 ml-0">
            <span className="mr-2.5 "><FaHome />
            </span><span> Webinars</span>
            </div>
            {sidebarItems.map((item, index) => (
                <Items name={item} key={index} />
            ))}
        </div>
    )
}

function Items({ name }) {
    return (
        <div className="text-gray-500 hover:text-gray-900 flex items-center hover:bg-gray-200 rounded-2xl p-2 w-56">
            <span className="mr-2.5 "><FaHome />
            </span><span>{name}</span>
        </div>
    )
}