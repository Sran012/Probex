

export function Navbar(){
    return (
        <div className='flex-col lg:mx-40 pt-2 space-y-4 mx-4 sm:mx-6 px-2 md:mx-16 overflow-hidden'>
            <div className='flex justify-between'>
                <div className="flex gap-4">
                    <button className=" text-3xl font-sp text-white">Probex</button>
                </div>

                <input placeholder="search" className="border-1 border-white rounded-3xl text-center text-white w-[30vw] hidden sm:block"></input>

                <div className="flex gap-2 sm:pr-2">
                    <button className="bg-slate-600 rounded-2xl p-1 text-white flex justify-center items-center min-w-[60px] h-8 cursor-pointer ">login</button>
                    <button className="bg-slate-600 rounded-2xl p-1 text-white flex justify-center items-center min-w-[70px] h-8 cursor-pointer">signup</button>
                </div>
            </div>


            <div className="flex justify-start gap-4 text-white whitespace-nowrap overflow-x-auto scrollbar-hide">
                <a href="">Trending 🚀</a>
                <a href="">sports</a>
                <a href="">entertainment</a>
                <a href="">news</a>
                <a href="">industry</a>
                <a href="">overseas</a>
                <a href="">Politics</a>
                <a href="">Automobiles</a>
                <a href="">Stocks</a>
                <a href=""></a>
            </div>
        </div>
    )
}