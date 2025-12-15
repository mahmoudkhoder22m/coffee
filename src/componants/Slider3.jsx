import i5 from"../../pic/i5.png"
import i6 from"../../pic/i6.png"
import i7 from"../../pic/i7.png"
import i8 from"../../pic/i8.png"
export default function Slider3(){
    const logos=[i5,i6,i7,i8];
    return(
        <>
            <div className="p-5 col-span-full justify-center flex ">
                <h1 className="text-3xl font-bold text-black ">our special dessert</h1>
            </div>

            <div className=" gap- grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center p-6 object-contain">
            { logos.map((logo,i)=>
                        <div key={i} className="flex flex-col h-90 w-65 pl-2 pt-2 border border-[#E2D9C833] shadow-2xl opject-contain rounded-xl gap-3 key={i}   ">
                        <div className="">
                            <div className="w-60 h-50 object-contain items-center ">

                        <img  src={logo} alt=""className=" w-full h-full  rounded-xl" />
                            </div>
        
                        <h4>Cold Coffee</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
        
                    <div className="flex justify-between items-center p-1.5">
                        <button className="bg-blue-600 object-contain p-1 rounded text-white font-serif" >order now</button>
                        <span>$10</span>
                    </div>
                    </div>

                

            )}
            </div>  
        </>



    )
}