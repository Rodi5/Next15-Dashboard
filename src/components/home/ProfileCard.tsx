import Image from "next/image"

export default function ProfileCard() {
  return (
    <div className="max-w-sm md:max-w-lg bg-white shadow-lg overflow-hidden">
        <div className="h-48 relative">
            <Image
                src="/img/product/profile-bg.jpg"
                alt="Profile background"
                fill
                priority
            />
        </div>
        <div className="relative px-6 pb-6">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <Image
                    src="/img/product/pro4.jpg"
                    width={90}
                    height={90}
                    alt="Profile avatar"
                    className="rounded-full border-4 border-white shadow-lg"
                    priority
                />
                </div>
                <div className="text-center pt-16 space-y-2">
                <h3 className="text-lg font-semibold text-gray-700">Angela Dominic</h3>
                <p className="text-sm text-gray-400">Web Designer & Developer</p>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, this is a consectetur adipisicing elit</p>
                <button className="bg-blue-600 rounded-md text-white px-5 py-1 hover:bg-blue-700 transition-colors">
                    Follow
                </button>
            </div>
            <div className="flex justify-around gap-8 mt-4 pt-2">
                <div className="text-center">
                    <span className="block text-lg font-bold text-gray-800">199</span>
                    <p className="text-gray-600 text-sm">Articles</p>
                </div>
                <div className="text-center">
                    <span className="block text-lg font-bold text-gray-800">599</span>
                    <p className="text-gray-600 text-sm">Likes</p>
                </div>
                <div className="text-center">
                    <span className="block text-lg font-bold text-gray-800">399</span>
                    <p className="text-gray-600 text-sm">Comments</p>
                </div>
            </div>
        </div>
    </div>
  )
}

