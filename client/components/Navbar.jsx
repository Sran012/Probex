// export function Navbar(){
//     return (
//         <div className='h-25 border-b-blue-800 bg-blue-950'>
//             <div className="flex justify-center gap-[50vw] pt-4">
//                 <div className="flex justify-start gap-6">
//                     <h1>hello</h1>
//                     <h1>hello</h1>
//                 </div>
//                 <div className="flex justify-end gap-6">
//                     <button>login</button>
//                     <button>signup</button>
//                 </div>
//             </div>

//             <div className="flex justify-center gap-[38vw]">
//                 <div className="flex justify-start gap-4">
//                     <p>hello</p>
//                     <p>hello</p>
//                     <p>hello</p>
//                     <p>hello</p>
//                     <p>hello</p>
//                 </div>
//                 <div className="flex justify-end">
//                     <p>more {">"}</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

export function Navbar(){
    return (
        <div className='flex-col lg:mx-40 pt-2 space-y-4 mx-4 sm:mx-6 md:mx-16'>
            <div className='flex justify-between'>
                <div className="flex gap-4">
                    <button className="sm:pl-2 text-3xl font-sp">Probex</button>
                    <button></button>
                </div>

                <input placeholder="search" className="border-1 rounded-3xl text-center w-[30vw]"></input>

                <div className="flex gap-4 sm:pr-2">
                    <button>login</button>
                    <button>signup</button>
                </div>
            </div>


            <div className="flex justify-start gap-4 sm:pl-2">
                <p>sports</p>
                <p>entertainment</p>
                <p>news</p>
                <p>industry</p>
                <p>overseas</p>
            </div>
        </div>
    )
}