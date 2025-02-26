'use client';
import { useState } from 'react';
import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaCreditCard } from 'react-icons/fa';

const CoursesPayment = () => {
  const [activeTab, setActiveTab] = useState('credit-card');
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  })
  const [debitCardDetails, setDebitCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  })

  const tabs = [
    { id: 'credit-card', label: 'Credit Card' },
    { id: 'debit-card', label: 'Debit Card' },
    { id: 'emi', label: 'EMI' },
    { id: 'banking', label: 'Banking' },
    { id: 'address', label: 'Address' },
  ];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, isDebit = false) => {
    const { name, value } = e.target
    if (isDebit) {
      setDebitCardDetails((prev) => ({
        ...prev,
        [name]: value,
      }))
    } else {
      setCardDetails((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const formatCardNumber = (number: string) => {
    return number ? number.match(/.{1,4}/g)?.join(" ") || "" : "**** **** **** ****"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(cardDetails)
  }

  return (
    <div className="mx-auto space-y-6">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='bg-white px-4 py-3'>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-lg'>**** **** **** 1234</p>
                <FaCcPaypal size={48} style={{color: "#006DF0"}}/>
            </div>
            <div className='flex justify-between items-center mt-2'>
                <div className='text-sm'>
                    <p className='font-semibold'>Expiry Date :</p>
                    <p>20/09/17</p>
                </div>
                <div className='text-sm'>
                    <p><strong>Name :</strong>Selim sha</p>
                    <p><strong>CSV :</strong>2345</p>
                </div>
            </div>
        </div>
        <div className='bg-white px-4 py-3'>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-lg'>**** **** **** 2133</p>
                <FaCcMastercard size={48} style={{color: "#006DF0"}}/>
            </div>
            <div className='flex justify-between items-center mt-2'>
                <div className='text-sm'>
                    <p className='font-semibold'>Expiry Date :</p>
                    <p>21/09/2020</p>
                </div>
                <div className='text-sm'>
                    <p><strong>Name :</strong>John Plam</p>
                    <p><strong>CSV :</strong>3243</p>
                </div>
            </div>
        </div>
        <div className='bg-white px-4 py-3'>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-lg'>**** **** **** 3454</p>
                <FaCreditCard size={48} style={{color: "#006DF0"}}/>
            </div>
            <div className='flex justify-between items-center mt-2'>
                <div className='text-sm'>
                    <p className='font-semibold'>Expiry Date :</p>
                    <p>23/09/2020</p>
                </div>
                <div className='text-sm'>
                    <p><strong>Name :</strong>Kabir Khan</p>
                    <p><strong>CSV :</strong>4565</p>
                </div>
            </div>
        </div>
      </div>
      <div className="w-full mx-auto mt-10 p-6 bg-white shadow">
      {/* tabs */}
      <div className="flex flex-col sm:flex-row border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 py-2 text-center font-bold ${
              activeTab === tab.id
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-500 hover:text-blue-500'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* content */}
      <div className="p-4">
        {activeTab === 'credit-card' && (
          <div className="space-y-6">
            {/* card  */}
            <div className="flex justify-center mb-10 sm:mb-6 perspective-1000">
                <div className={`relative w-full mb-6 sm:mb-0 max-w-sm transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}>
                  {/* Front of card */}
                  <div className="absolute w-full h-52 backface-hidden z-10">
                    <div className="w-full bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg shadow p-4 text-white">
                      <div className="flex justify-between items-center mb-8">
                        <div className="w-12 h-8 bg-gray-200 rounded"></div>
                        <FaCreditCard className="text-2xl" />
                      </div>
                      <p className="text-xl font-mono mb-6">{formatCardNumber(cardDetails.number)}</p>
                      <div className="flex justify-between items-end gap-2">
                        <div>
                          <p className="text-xs opacity-80 mb-1">FULL NAME</p>
                          <p className="font-medium">{cardDetails.name || "FULL NAME"}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs opacity-80 mb-1">EXPIRES</p>
                          <p className="font-medium">{cardDetails.expiry || "MM/YY"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Back of card */}
                  <div className="relative w-full h-52 backface-hidden rotate-y-180">
                    <div className={`w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg shadow p-6 text-white`}>
                      <div className="w-full h-12 bg-gray-800 my-4"></div>
                      <div className="flex justify-end mt-8">
                        <div className="bg-white text-gray-800 px-6 py-2 rounded">
                          <p className="font-mono">{cardDetails.cvc || "****"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name='number' value={cardDetails.number} onChange={(e) => {
                  const re = /^[0-9\b]+$/
                  if (e.target.value === "" || re.test(e.target.value)) {
                    handleInputChange(e)
                  }
                }} maxLength={16} className="w-full border border-gray-300 px-4 py-2 outline-blue-500" placeholder="Card Number"/>
                <input type="text" name='name' value={cardDetails.name} onChange={handleInputChange} maxLength={25} className="w-full border border-gray-300 px-4 py-2 outline-blue-500" placeholder="Full Name"/>
                <input type="date" name='expiry' value={cardDetails.expiry} onChange={handleInputChange} className="w-full border border-gray-300 px-4 py-2 outline-blue-500" placeholder="MM/YYYY"/>
                <input type="text" name='cvc' value={cardDetails.cvc} onChange={(e) => {
                  const re = /^[0-9\b]+$/
                  if (e.target.value === "" || re.test(e.target.value)) {
                    handleInputChange(e)
                  }
                }} onFocus={() => setIsFlipped(true)} onBlur={() => setIsFlipped(false)} maxLength={4} className="w-full border border-gray-300 px-4 py-2 outline-blue-500" placeholder="CVC"/>
                <div className="text-center">
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded ">
                        Submit
                    </button>
                </div>
            </form>
          </div>
        )}

        {activeTab === 'debit-card' && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="name"
                value={debitCardDetails.name}
                onChange={(e) => handleInputChange(e, true)}
                className="w-full border border-gray-300 px-4 py-2 outline-blue-500"
                placeholder="Type Your Full Name"
              />
            <input type="text" name="cvc" value={debitCardDetails.cvc}
                onChange={(e) => {
                  const re = /^[0-9\b]+$/
                  if (e.target.value === "" || re.test(e.target.value)) {
                    handleInputChange(e, true)
                  }
                }}
                className="w-full border border-gray-300 px-4 py-2 outline-blue-500"
                placeholder="CVC"
                maxLength={4}
              />
              <input type="text" name="number" value={debitCardDetails.number}
                onChange={(e) => {
                  const re = /^[0-9\b]+$/
                  if (e.target.value === "" || re.test(e.target.value)) {
                    handleInputChange(e, true)
                  }
                }}
                className="w-full border border-gray-300 px-4 py-2 outline-blue-500"
                placeholder="Card Number"
                maxLength={16}
              />
            <select className="w-full border border-gray-300 px-4 py-2 outline-blue-500">
              <option value="">Select Month</option>
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="seb">September</option>
              <option value="oct">October</option>
              <option value="nov">November</option>
              <option value="dec">December</option>
            </select>
            <select className="w-full border border-gray-300 px-4 py-2 outline-blue-500">
              <option value="">Select Year</option>
              <option value="1">2016</option>
              <option value="2">2017</option>
              <option value="3">2018</option>
              <option value="4">2019</option>
              <option value="5">2020</option>
              <option value="6">2021</option>
            </select>
            <div className='flex gap-4'>
              <FaCcPaypal size={60}/>
              <FaCcVisa size={60}/>
              <FaCreditCard size={60}/>
              <FaCcMastercard size={60}/>
            </div>
            <div className="text-left">
                <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">
                    Submit
                </button>
            </div>
          </form>
        )}
        {activeTab === 'emi' && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <select className="w-full border border-gray-300 px-4 py-2 outline-blue-500">
              <option value="">Select Card</option>
              <option value="icici credit">ICICI Credit Card</option>
              <option value="axis">AXIS Credit Card</option>
              <option value="hsbc">HSBC Credit Card</option>
              <option value="kotak">KOTAK Credit Card</option>
              <option value="indusind">INDUSIND Credit Card</option>
              <option value="hdfc">HDFC Credit Card</option>
              <option value="icici debit">ICICI Debit Card</option>
              <option value="sbi">SBI Credit Card</option>
              <option value="citibank">CITIBANK Credit Card</option>
              <option value="axic">AXIS Credit Card</option>
            </select>
            <select className="w-full border border-gray-300 px-4 py-2 outline-blue-500">
              <option value="">Select Duration</option>
              <option value="1">1 month</option>
              <option value="2">2 year</option>
              <option value="3">5 month</option>
              <option value="4">3 week</option>
              <option value="5">5 year</option>
              <option value="6">7 month</option>
            </select>
            <div className="text-left">
                <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">
                    Submit
                </button>
            </div>
          </form>
        )}
        {activeTab === 'banking' && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <select className="w-full border border-gray-300 px-4 py-2 outline-blue-500">
              <option value="">Select Bank</option>
              <option value="">State bank of india</option>
              <option value="">Bank of baroda</option>
              <option value="">Central bank of india</option>
              <option value="">Punjab national bank</option>
              <option value="">Yes bank</option>
              <option value="">Kotak mahindra bank</option>
            </select>
            <div className="text-left">
                <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">
                    Submit
                </button>
            </div>
          </form>
        )}
        {activeTab === 'address' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4">
              <input type="text" placeholder="First Name" className="w-full text-sm p-2 border outline-blue-500"/>
              <input type="text" placeholder="Last Name" className="w-full text-sm p-2 border outline-blue-500"/>
              <input type="text" placeholder="Address" className="w-full text-sm p-2 border outline-blue-500"/>
              <input type="number" placeholder="Pincode" className="w-full text-sm p-2 border outline-blue-500"/>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <select className="w-full text-sm p-2 border outline-blue-500">
                <option value="">Select country</option>
                <option value="in">India</option>
                <option value="pa">Pakistan</option>
                <option value="am">Amerika</option>
                <option value="ch">China</option>
                <option value="du">Dubai</option>
                <option value="ne">Nepal</option>
              </select>
              <select className="w-full text-sm p-2 border outline-blue-500">
                <option value="">Select state</option>
                <option value="gu">Gujarat</option>
                <option value="ma">Maharastra</option>
                <option value="ra">Rajastan</option>
                <option value="ma">Maharastra</option>
                <option value="ra">Rajastan</option>
                <option value="gu">Gujarat</option>
              </select>
              <select className="w-full text-sm p-2 border outline-blue-500">
                <option value="">Select city</option>
                <option value="su">Surat</option>
                <option value="ba">Baroda</option>
                <option value="na">Navsari</option>
                <option value="ba">Baroda</option>
                <option value="su">Surat</option>
              </select>
              <input type="number" placeholder="Mobile no." className="w-full text-sm p-2 border outline-blue-500"/>
            </form>
            <div className="text-left">
              <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">
                  Submit
              </button>
            </div>
        </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default CoursesPayment;