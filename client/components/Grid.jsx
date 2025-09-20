import {array} from "../data/index.js";
export function Grid(){
    return (
        <div className="md:px-40 bg-slate-800 ">

            <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:p-4 md:pb-4 p-8 md:pb-18 pb-18">
                {array.map((item, index) => (
                    <div key={index} className="w-full h-[180px] rounded-2xl flex flex-col hover:scale-102 transition-transform duration-200 shadow-xl backdrop-blur-md bg-white/6">
                        <a href="">
                        <header className="pl-4 pt-2 pb-2 bg-white/10 text-white rounded-t-2xl font-bold flex-shrink-0 hover:underline">{item.header}</header>
                        </a>

                        <div className="h-full bg-white/3 rounded-b-xl text-white">
                            <div className="h-8"></div>
                            
                            <div className="h-18 overflow-y-auto scrollbar-hide ">
                            <div className="flex justify-between pt-2">
                                <div className="pl-4 text-sm">{item.question1}</div>
                                <div className="flex space-x-2 pr-4 text-black">
                                    <button className="bg-green-300 rounded-2xl w-12 h-6 hover:bg-green-500">buy</button>
                                    <button className="bg-red-300 rounded-2xl w-12 h-6 hover:bg-red-500">sell</button>
                                </div>
                            </div>


                            <div className="flex justify-between pt-2">
                                <div className="pl-4 text-sm">{item.question2}</div>
                                <div className="flex space-x-2 pr-4 text-black">
                                    <button className="bg-green-300 rounded-2xl w-12 h-6 hover:bg-green-500">buy</button>
                                    <button className="bg-red-300 rounded-2xl w-12 h-6 hover:bg-red-500">sell</button>
                                </div>
                            </div>


                            <div className="flex justify-between pt-2">
                                <div className="pl-4 text-sm">{item.question3}</div>
                                <div className="flex space-x-2 pr-4 text-black">
                                    <button className="bg-green-300 rounded-2xl w-12 h-6 hover:bg-green-500">buy</button>
                                    <button className="bg-red-300 rounded-2xl w-12 h-6 hover:bg-red-500">sell</button>
                                </div>
                            </div>
                            <div className="h-6"></div>
                            </div>

                            

                        </div>
                        
                    </div>
                ))}
            </div>

        </div>
    )
} 