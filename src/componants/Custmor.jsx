import avatar from"../../pic/avatar.png"
import reat from"../../pic/reat.png"
export default function Custmor() {
    return (<>
    
        <div className="flex flex-col justify-center items-center  p-5 ">

            <h1 className="text-3xl font-bold">  Come and Join</h1>
            <h1 className="text-2xl font-bold">  our happy customers</h1>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4    w-[400px] h-[400px] p-6 border border-[#E2D9C8] shadow-2xl rounded-xl">

        
        <div className="flex    ">
            <div className="flex  gap-4">

            <img src={avatar} alt=""  className="w-[50px] h-[50px] object-cover "/>
            <span>James Smith Entrepreneur</span>
            </div>
            <div className="w-20 h-20 object-contain">
                <img src={reat} alt="" className="w-full h-full object-contain" />
            </div>
            
        </div>
    
        </div>        
    </>
    )
}