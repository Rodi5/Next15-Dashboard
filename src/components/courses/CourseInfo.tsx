import Image from "next/image";
import { FaComments, FaHeart, FaUser } from "react-icons/fa";

const img = [
    {image: '/img/contact/1.jpg'},
    {image: '/img/contact/2.jpg'},
    {image: '/img/contact/3.jpg'}
]

export default function CourseInfo() {
    return (
      <article className="w-full mx-auto bg-white overflow-hidden shadow-lg p-4">
        <div className="relative">
          <Image
            src="/img/blog-details/1.jpg"
            width={1000}
            height={1000}
            alt="Students studying together"
            className="w-full sm:h-[450px] cursor-pointer"
            priority
          />
          <div className="hidden lg:block absolute -bottom-6 left-0 bg-blue-600 text-white rounded-full border-4 py-2 px-4 text-center min-w-[60px]">
            <span className="block text-sm">20</span>
            <span className="block text-md">May</span>
          </div>
        </div>
        <div className=" space-y-6">
          <div className="hidden md:flex flex-col sm:flex-row gap-4 text-sm justify-evenly pt-3" style={{color: '#999999'}}>
            <div className="flex items-center gap-1">
              <FaUser />
              <span className="font-semibold">Course Name:</span>
              <span>Web Development</span>
            </div>
            <div className="flex items-center gap-1">
              <FaHeart />
              <span className="font-semibold">Course Price:</span>
              <span>$3000</span>
            </div>
            <div className="flex items-center gap-1">
              <FaComments />
              <span className="font-semibold">Professor Name:</span>
              <span>Alva Adition</span>
            </div>
          </div>
          <div className="space-y-4 text-gray-800">
            <h1 className="text-xl font-bold ">Courses Info Dummy Title</h1>
            <p className=" text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className=" text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <p className=" text-sm leading-relaxed">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <p className=" text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad im veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
          </div>
          <section className="w-full mx-auto mt-8 bg-white p-6 rounded-lg">
            <div className="flex items-center justify-center gap-6 sm:gap-24">
                <div className="flex-1 h-[1px] bg-gray-300"></div>
                <h2 className="text-md text-gray-800 text-center">COMMENTS</h2>
                <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>
            <div className="space-y-6 mt-4">
                {img.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-4 first-of-type:border-b first-of-type:pb-4 last-of-type:pt-4 last-of-type:border-t sm:even:ml-10">
                    <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt="Profile"
                    className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1" style={{color: '#303030'}}>
                        <div className="flex justify-between items-center mb-2">
                            <div>
                                <span className="text-md">Jonathan Doe</span>
                                <span className="ml-2">2015 15 July</span>
                            </div>
                            <button className="text-blue-600 text-sm hidden sm:block">REPLAY</button>
                        </div>
                        <p className="text-sm ">
                            Shabby chic selfies pickled Tumblr letterpress iPhone. Wolf vegan retro selvage literally Wes Anderson
                            ethical four loko. Meggings blog chambray tofu pour-over. Pour-over Tumblr keffiyeh, cornhole whatever
                            cardigan Tonx lomo.Shabby.
                        </p>
                    </div>
                </div>
                ))}
            </div>

            {/* Comment Form */}
            <div className="mt-8">
              <div className="flex items-center justify-center gap-6 sm:gap-24">
                  <div className="flex-1 h-[1px] bg-gray-300"></div>
                  <h2 className="text-md text-gray-800 text-center">LEAVE A COMMENT</h2>
                  <div className="flex-1 h-[1px] bg-gray-300"></div>
              </div>
                <form className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input type="text" placeholder="Name" className="w-full text-sm px-4 py-2 border outline-blue-500"/>
                      <input type="email" placeholder="Email" className="w-full text-sm px-4 py-2 border outline-blue-500"/>
                  </div>
                  <textarea name="message" placeholder="Message" className="w-full text-sm h-32 px-4 py-2 border outline-blue-500"></textarea>
                  <button type="submit" className="bg-blue-600 text-white px-3 py-2 text-sm rounded-md">Send</button>
                </form>
            </div>
            </section>
        </div>
      </article>
    )
  }
