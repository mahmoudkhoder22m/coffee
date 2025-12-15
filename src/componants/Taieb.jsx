import p1 from "../../pic/p1.png"
import p2 from "../../pic/p2.png"
export default function Taieb(){
    return(
        <div className="grid grid-cols-1 place-items-center w-[80%] h-fit sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto bg-amber-200">
            <div className="  ">
                <img src={p1} alt="" className="w-full h-[80%] object-contain" />
            </div>
            <div className=" font-bold text-3xl p-5   "> we will give you the best service</div>
            <div className="  ">
                <img src={p2} alt="" className="w-full h-[80%] object-contain       " />
            </div>
                
        </div>
    )
}