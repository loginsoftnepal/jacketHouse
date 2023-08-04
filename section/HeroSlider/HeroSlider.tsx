import Carousel from "../Carousel/Carousel";

export default function HeroSlider() {

    return (
      <div className="w-[95%] mx-auto my-2">
         <Carousel loop>
            
           <div className="relative h-64 flex-[0_0_100%]">
             <span>Slide 1</span>
           </div>

         <div className="relative h-64 flex-[0_0_100%]">
             <span>Slide 1</span>
           </div>

         <div className="relative h-64 flex-[0_0_100%]">
             <span>Slide 1</span>
           </div>
         </Carousel>
      </div>
          
    )
}