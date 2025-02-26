"use client"

import { memo } from "react"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa"

const socialData = [
  {
    icon: FaFacebookF,
    color: "#006DF0",
    stat: "50K Likes",
    text: "You main list growing",
  },
  {
    icon: FaTwitter,
    color: "#933EC5",
    stat: "30k followers",
    text: "You main list growing",
  },
  {
    icon: FaLinkedinIn,
    color: "#65b12d",
    stat: "7k Connections",
    text: "You main list growing",
  },
  {
    icon: FaYoutube,
    color: "#D80027",
    stat: "50k Subscribers",
    text: "You main list growing",
  },
]

const SocialStatus = memo(function SocialStatus() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {socialData.map((item, index) => {
        const Icon = item.icon
        return (
          <div key={index} className="bg-white px-4 py-6 flex justify-start items-center">
            <Icon size={32} style={{ color: item.color }} aria-hidden="true" />
            <div className="ml-3">
              <div className="font-bold" style={{ color: item.color }}>
                {item.stat}
              </div>
              <div className="text-sm mt-2">{item.text}</div>
            </div>
          </div>
        )
      })}
    </section>
  )
})

export default SocialStatus

