import i1 from "../../pic/i1.png"
import i2 from "../../pic/i2.png"
import i3 from "../../pic/i3.png"
import i4 from "../../pic/i4.png"
export default function Slider2(){
    const logos=[i1,i2,i3,i4];
    
    return(
        <div className="p-6 w-full h-fit  gap-2 grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center  ">
            { logos.map((logo,i)=>
                        <div key={i} className="flex flex-col h-95 w-60 p-3  border border-[#E2D9C833] shadow-2xl opject-contain rounded-xl  ">
                        <div >
        
                        <img  src={logo} alt=""className="w-70 h-60 object-contain p-2 " />
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
    )
}