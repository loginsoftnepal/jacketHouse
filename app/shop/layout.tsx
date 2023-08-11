import OfferBar from "@/section/OfferBar/OfferBar";
import RightSidebar from "@/section/RightSidebar/RightSidebar";
import Sidebar from "@/section/Sidebar/Sidebar";
import Testimonial from "@/section/Testimonial/Testimonial";

export default function ShopLayout({children,}: {children: React.ReactNode}) {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <div className="flex w-full">
              <Sidebar />
              <div className="w-full flex flex-col">
                <OfferBar />
             <div className="w-full flex">

                <div className="basis-[65%]">{children}</div>
                 <RightSidebar />
            </div>
         </div>
          </div>
             <Testimonial />
        </div>
    )
}