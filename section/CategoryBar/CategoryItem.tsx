import Image, { StaticImageData } from "next/image"

interface CategoryItemProps {
    img: StaticImageData,
    name: string
}
export default function CategoryItem({img, name}: CategoryItemProps) {

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-[80px] bg-search rounded-xl">
                <Image className="w-full h-full object-cover object-center" src={img} alt="" />
            </div>
            <div>
                <span>{name}</span>
            </div>
        </div>
    )
}