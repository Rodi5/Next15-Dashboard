import { FaStar, FaStarHalf, FaHeart, FaShare } from "react-icons/fa"
import Image from "next/image"

export default function ProductCard() {
  return (
    <div className="bg-white relative max-w-sm md:hidden xl:block">
      <div className="relative w-full h-[300px]">
        <Image
          src="/img/product/book-4.jpg"
          width={350}
          height={100}
          alt="Product"
          className="w-full h-full px-4 pt-4"
          priority
        />
      </div>
      <div className="mx-6 mt-4 space-y-1">
        <h3 className="font-bold text-lg mt-2" style={{ color: "#444" }}>
          Title Demo Here
        </h3>
        <p className="text-sm" style={{ color: "#444" }}>
          Lorem ipsum dolor sit amet, this is a consec tetur adipisicing elit
        </p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-2xl" style={{ color: "#333" }}>
            $45
          </span>
          <div className="flex space-x-1">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} size={14} color="#ffb463" />
            ))}
            <FaStarHalf size={14} color="#ffb463" />
          </div>
        </div>
      </div>
      <div className="flex mx-6 mt-1 mb-3">
        <button className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md">Read More</button>
        <div className="bg-blue-500 px-2 py-1 rounded-md mx-2">
          <FaHeart color="white" size={16} />
        </div>
        <div className="bg-blue-500 px-2 py-1 rounded-md">
          <FaShare color="white" size={16} />
        </div>
      </div>
    </div>
  )
}

