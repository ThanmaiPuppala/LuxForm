
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import { FaRegPaperPlane } from 'react-icons/fa6';
import payment from "../../assets/payment.png"
import footerbg from "../../assets/blog-10.jpeg";
import { Link } from 'react-router-dom';
const Footer = () => {
  const footer={footerbg}
  return (
    <>
    <footer className=" foot min-h-[150px] py-10 px-5 text-sm text-gray-700" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)) ,url(${footerbg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-200">
        
        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
          <p className="flex items-start gap-2 mb-2">
            <HiOutlineLocationMarker className="text-[#9e6747] mt-1" />
            <span>
              60 29th Street San Francisco, 94110 507-Union,<br />
              Trade Center, United States America
            </span>
          </p>
          <p className="flex items-center gap-2 mb-2">
            <HiOutlinePhone className="text-[#9e6747]" />
            (+91) 9876-543-210
          </p>
          <p className="flex items-center gap-2">
            <HiOutlineMail className="text-[#9e6747]" />
            luxform@gmail.com
          </p>
        </div>

        {/* Center Branding & Links */}
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2 text-[#9e6747]">LUXFORM</h1>
          <p className="text-gray-200 !mb-2">
            Luxform crafts premium, customizable luxury sofas with elegant designs.
          </p>
          <div className="flex justify-center gap-4 !mb-2 text-[#9e6747] text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaPinterestP />
            <FaYoutube />
          </div>
          <div className="flex justify-center gap-5 font-medium">
            <a href="#">Information</a>
            <Link to="/contact">Contact</Link>
            <a href="#">Privacy Policy</a>
            <Link to="/about">About</Link>
            <a href="#">FAQs</a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">OUR NEWSLETTER</h3>
          <p className="text-gray-200 mb-3">Subscribe to our latest newsletter to get news about special discounts.</p>
          <form className="flex items-center bg-white border rounded px-2 py-1 shadow-sm">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-2 !py-2 outline-none text-black"
            />
            <button type="submit">
              <FaRegPaperPlane className="text-[#9e6747]" />
            </button>
          </form>
          <div className="flex gap-2 !mt-2">
            <img src={payment} alt="Amex" className="h-6" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm mt-10 border-t pt-4 text-gray-200">
        © copyright 2025, All Rights Reserved
      </div>
    </footer>
    </>
  )
}

export default Footer