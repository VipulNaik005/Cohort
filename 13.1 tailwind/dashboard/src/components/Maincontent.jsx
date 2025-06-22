export function Main(){
    return (
        <div className="flex justify-center items-center flex-1 bg-gray-50 p-6 overflow-y-auto">
            <div className="border-gray-100 border-2 w-212 mx-auto h-152 flex flex-col rounded-xl">
                <div className="bg-blue-800 w-full h-24 rounded-t-xl"></div>
                <div className="flex">
                <div className="absolute bg-amber-200 top-38 left-120 rounded-xl w-50 h-76"></div>
                <div className="absolute bg-amber-200 left-180 rounded-xl w-135.5 h-108">
                    <div className="w-full h-24 bg-green-500 "></div>
                    <div className="flex gap-4">
                        <div className="h-76 bg-amber-700 w-80 m-4"></div>
                        <div className="h-max bg-amber-700 w-56 m-4 grid auto-rows-auto grid-cols-2 gap-4">
                            <button>Button</button>
                            <button>Button</button>
                            <button>Button</button>
                            <button>Button</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}