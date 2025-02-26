"use client"

import { FaAngleRight } from "react-icons/fa"

interface SkillData {
  name: string
  progress: number
  color: string
}

const skills: SkillData[] = [
  { name: "Java", progress: 85, color: "#933EC5" },
  { name: "Php", progress: 75, color: "#006DF0" },
  { name: "Apps", progress: 65, color: "#65b12d" },
  { name: "C#", progress: 55, color: "#D80027" },
]

export default function ProfileBiography() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
        <div>
          <h3 className="font-semibold">Full Name</h3>
          <p>Fly Zend</p>
        </div>
        <div>
          <h3 className="font-semibold">Mobile</h3>
          <p>01962067309</p>
        </div>
        <div>
          <h3 className="font-semibold">Email</h3>
          <p>fly@gmail.com</p>
        </div>
        <div>
          <h3 className="font-semibold">Location</h3>
          <p>UK</p>
        </div>
      </div>

      <div className="space-y-4 text-sm leading-5" style={{color: '#303030'}}>
        <p>
        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
        <p>
        Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Skill Set</h2>
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-1">
              <div className="flex justify-between">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div className='h-1 rounded-full' style={{ width: `${skill.progress}%`, backgroundColor: `${skill.color}`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold border-b pb-2">Education</h2>
        <ul className="space-y-3 text-sm pt-4">
            <li className="flex justify-start items-center"><FaAngleRight size={12}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className="flex justify-start items-center"><FaAngleRight size={12}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className="flex justify-start items-center"><FaAngleRight size={12}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className="flex justify-start items-center"><FaAngleRight size={12}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className="flex justify-start items-center"><FaAngleRight size={12}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold border-b pb-2">Experience</h2>
        <ul className="space-y-3 text-sm pt-4">
            <li className="flex justify-start items-center"><FaAngleRight size={12}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className="flex justify-start items-center"><FaAngleRight size={12}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className="flex justify-start items-center"><FaAngleRight size={12}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className="flex justify-start items-center"><FaAngleRight size={12}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className="flex justify-start items-center"><FaAngleRight size={12}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold border-b pb-2">Subjects</h2>
        <ul className="space-y-3 text-sm pt-4">
            <li className="flex justify-start items-center"><FaAngleRight size={12}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className="flex justify-start items-center"><FaAngleRight size={12}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className="flex justify-start items-center"><FaAngleRight size={12}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className="flex justify-start items-center"><FaAngleRight size={12}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li className="flex justify-start items-center"><FaAngleRight size={12}/> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
    </div>
  )
}