import BrandSidebar from '@/section/BrandSidebar/BrandSidebar'
import MobileBrandBar from '@/section/MobileBrandBar/MobileBrandBar'
import Testimonial from '@/section/Testimonial/Testimonial'

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex w-full">
        <BrandSidebar />
        <div className="w-full flex flex-col">
          <MobileBrandBar />
          <div className="w-full flex">
            <div className="basis-[100%] lg:basis-[90%]">{children}</div>
          </div>
        </div>
      </div>
      <Testimonial />
    </div>
  )
}
