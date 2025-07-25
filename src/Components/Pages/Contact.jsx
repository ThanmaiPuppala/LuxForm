import { useState } from "react";
import banner from "../../assets/about-parallax.jpg"
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    message:''
  })
  const handleChange = (e) => {
  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
};

  const handleSubmit=(e)=>{
    e.preventDefault();
    const { name, email } = formData; 

    if (!name.trim() || !email.trim()) {
    toast.error('Please fill out all required fields!', {
      position: 'top-right',
      autoClose: 3000,
    });
    return;
  }
    toast.success('Your form has been submitted!', {
    position: 'top-right',
    autoClose: 3000,
  });
  
  setFormData({ name: '', email: '', message: '' });
  }
  return (
    <>
    <div className='ab flex items-center justify-center bg-[#faf7f2]'>
      <h1 className='font-semibold text-2xl'>Contact</h1>
    </div>
    {/* Banner Background */}
        <section className="relative top-[10px] !mb-6 w-full h-[400px] !h-[400px] sm:h-[90vh] bg-black/40">
          {/* Background Image */}
          <img
            src={banner} 
            alt="Sofa Sale"
            className="w-full h-full object-cover absolute top-0 left-0 -z-10"
          />
    
          {/* Overlay */}
          <div className="over flex justify-start items-center h-full w-full px-4 sm:px-12">
            <div className="max-w-xl text-white">
              <p className="text-lg sm:text-xl mb-2 italic font-medium">
                -Let’s Talk Comfort!-
              </p>
              <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight">
                Get in Touch
              </h1>
              <p className="text-sm sm:text-base mb-6 font-light">
                Contact us today and let’s bring your vision to life.
              </p>
              <Link to="/shop"><button className="btn">SHOP NOW</button></Link>
            </div>
          </div>
        </section>
     {/* contact form */}
     <section className="bg-gray-300 py-10 px-4 !mb-4">
      <div className="fo flex items-center justify-center">
      <h1 className="text-2xl font-bold">We’re Here to Help!</h1>
      </div>
     <form onSubmit={handleSubmit} className="form">
      <div className="!mb-2">
        <label htmlFor="name" className="block font-semibold text-gray-700 mb-2">Your Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9e6747]" />
      </div>
      <div className="!mb-2">
        <label htmlFor="email" className="block font-semibold text-gray-700 mb-2">Your Name</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email Id" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9e6747]" />
      </div>
       <div className="!mb-2"> 
        <label htmlFor="message" className="block font-semibold text-gray-700 mb-2">Your Name</label>
        <textarea type="text" name="message" value={formData.message} onChange={handleChange} placeholder="Enter Your Message" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9e6747]" />
      </div>
      <div className="c-btn">
       <button type="submit" className="btn">SUBMIT</button>
      </div>
     </form>
      <ToastContainer />
     </section>
     {/* contact box*/}
      <div className="bg-[#f7f7f7] py-6 px-4">
      <div className="co grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        
        {/* Address */}
        <div className="flex flex-col items-center gap-2">
          <div className="border border-[#9e6747] rounded-full !p-2">
            <FiMapPin className="text-green-700 text-xl" />
          </div>
           <p className="text-sm font-semibold">Address:</p>
          <p className="text-gray-600 text-sm">60 29th San Francisco, 507 - Union Center</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center gap-2">
          <div className="border border-[#9e6747] rounded-full !p-2">
            <FiPhone className="text-green-700 text-xl" />
          </div>
          <p className="text-sm font-semibold">Call us:</p>
          <p className="text-gray-600 text-sm">(+01) 987-654-3210</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center gap-2">
          <div className="border border-[#9e6747] rounded-full !p-2">
            <FiMail className="text-green-700 text-xl" />
          </div>
          <p className="text-sm font-semibold">Mail us:</p>
          <p className="text-gray-600 text-sm">luxform@gmail.com</p>
        </div>

        {/* Open Time */}
        <div className="flex flex-col items-center gap-2">
          <div className="border border-[#9e6747] rounded-full !p-2">
            <FiClock className="text-green-700 text-xl" />
          </div>
          <p className="text-sm font-semibold">Open Time:</p>
          <p className="text-gray-600 text-sm">10:00AM - 6:00PM</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default Contact