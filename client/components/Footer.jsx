export const Footer = () =>{
    // return (
    //     <div className="w-full h-32 bg-slate-800 border-t border-t-gray-600">
    //         <div className="flex w-full h-full">
    //             <div className="basis-1/3 bg-blue-500">
    //                 <div className="flex flex-col">
    //                     <h1 className="text-white font-semibold text-2xl">Probex</h1>
    //                     <p>Probex is a prediction marketplace platform where users can explore trending events and place predictions. Unlike traditional betting, Probex focuses on collective forecasting — each question becomes a market, and users participate by sharing their opinions.</p>
    //                 </div>
    //             </div>
    //             <div className="basis-2/3 bg-red-500"></div>
    //         </div>
    //     </div>
    // )


    return (
        <div className="fixed inset-x-0 bottom-0">
            <div className="md:px-44 px-8">
                <div className="h-12 bg-slate-800 border-t border-t-gray-600 text-white text-sm flex items-center justify-between">
                    <span className="font-italic">Probex</span>
                    <span>© {new Date().getFullYear()}</span>
                </div>
            </div>
        </div>
    )
}