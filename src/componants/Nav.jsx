import "./cssfils/hero.css"
export default function Nav(){
    return(
        <>
        <div className="hero w-full align-center p-6  "> 
            <nav className="flex justify-evenly gap-10 p-4  w-5xl">
                <div className="items-start">
                <a href="/" className="text-3xl font-bold text-amber-50 mr-4">COFFEE</a>
                </div>

                <div className="">
                <ul className=" text-amber-50 gap-9 flex justify-between items-center font-bold">
                    <li><a href="/" className="hover:text-amber-400 transition ease-in duration-100">HOME</a></li>
                    <li><a href="/" className="hover:text-amber-400 ease-in duration-100">COFFEE</a></li>
                    <li><a href="/" className="hover:text-amber-400 ease-in duration-100">PAKERY</a></li>
                    <li><a href="/" className="hover:text-amber-400 ease-in duration-100">SHOP</a></li>
                </ul>

                </div>
            </nav>
            <div className="  h-full flex flex-col justify-center text-start    p-6  gap-6">
                <span className="text-amber-50 text-xl font-bold text-left">WELCOME</span>
                <p className="text-amber-50 text-6xl font-bold">We serve the <br/> richest coffee in <br/> the city!</p>
                <p className="text-amber-50  font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing<br/> elit, sed do eiusmod tempor</p>
                <button className="bg-amber-50 hover:bg-amber-400 ease-in duration-100  hover:scale-105  text-black  py-2 px-4  rounded-xl w-fit shadow-2xl">order now</button>
            </div>
        </div>
        </>
    )
}