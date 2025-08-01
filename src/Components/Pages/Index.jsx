import {useState} from 'react'
import about_hero from '../../assets/furniforma-about-filler-img3.jpg';
import hero_img from '../../assets/hero.png';
import subBanner1 from '../../assets/sub-banner-1.jpg';
import subBanner2 from '../../assets/sub-banner-2.jpg';
import subBanner3 from '../../assets/sub-banner-3.jpg';
import subBanner4 from '../../assets/sub-banner-4.jpg';
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import blog1 from '../../assets/blog-1.jpeg';
import blog2 from '../../assets/blog-2.jpg';
import blog3 from '../../assets/blog-3.jpg'
import bannerbg from '../../assets/banner-bg.jpg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay, Pagination  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {  FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import products from '../../Product.json'
import { PiShoppingCartSimpleLight } from 'react-icons/pi';
import { TiStarFullOutline } from 'react-icons/ti';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import { addToWishlist } from '../../features/wishlistSlice';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
const bg="#faf7f2";
export const testimonials = [
  {
    id: 1,
    name: "Stefanie Rashford",
    title: "CEO",
    message:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered from randomised words.",
    image:user1,
    bg:blog1
  },
  {
    id: 2,
    name: "David Johnson",
    title: "Marketing Head",
    message:
      "This service changed our company’s direction. It’s trustworthy and looks beautiful too!",
    image:user2,
    bg:blog2
  },
  {
    id: 3,
    name: "Alicia Carter",
    title: "Product Designer",
    message:
      "Absolutely wonderful! The quality and delivery were outstanding.",
    image:user3,
    bg:blog3
  }
];
const Index = () => {
  
  const [selectProduct,setSelectProduct]=useState(null)
  
  const dispatch=useDispatch();
  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
    setSelectProduct(null);
    toast.success(`${product.name} added to cart`, {
    position: 'top-right',
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover:false,
  });
  }
  const handleAddToWishlist = (product) => {
  dispatch(addToWishlist(product));
  setSelectProduct(null);
  toast.success(`${product.name} added to wishlist`, {
    position: 'top-right',
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover:false,
  });
};
  return (
    <>
    {/* hero */}
     <section className='lef w-full min-h-screen py-20 ' style={{backgroundColor:bg}}>
      <div className='max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
        {/* left */}
        <div className='la text-center lg:text-left'>
          <h3 className='le text-[#9e6747]  italic mb-2'>-Stylish Furnitures-</h3>
          <h1 className='le text-4xl sm:text-5xl lg:text-6xl font-semibold mb-2'>Sustainable Chairs <br /> for Every Space</h1>
          <p className='p-le text-gray-600 mb'>Discover premium furniture for every room in our LuxForm store. Browse modern sofas, elegant dining sets, and cozy bedroom collections with high-quality images and detailed descriptions.</p>
          <button className='btn font-medium'><a href="#collection">Our Collection</a></button>
        </div>
        {/* right */}
        <div className='flex justify-center'>
          <img src={hero_img} alt="swing chair" className='w-[380px] sm:w-[450px] md:w-[520px] object-contain' />
        </div>
      </div>
     </section>
    {/* banners */}
     <section className='ban-sec w-full py-10'>
      <div className='max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
        {/* Banner1 */}
        <div className='relative h-[300px] rounded-xl overflow-hidden shadow-md' style={{backgroundImage:`url(${subBanner1})`,backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='absolute text-white inset-0  bg-black/40 bg-opacity-80 flex flex-col justify-center items-center p-6'>
            <p className='text-sm sm:text-base font-medium mb-1'>Style, Savings,</p>
            <h3 className='text-xl sm:text-2xl font-semibold mb-4'>Enjoy 40% best Savings</h3>
            <Link to="/shop"><button className='btn px-4 py-2 font-medium'>Shop Now</button></Link>
          </div>
        </div>
        {/* Banner2 */}
        <div className='relative h-[300px] rounded-xl overflow-hidden shadow-md' style={{backgroundImage:`url(${subBanner2})`,backgroundSize: 'cover', backgroundPosition: 'center' }}>
           <div className='absolute text-white inset-0 bg-black/40 bg-opacity-80 flex flex-col justify-center items-center p-6'>
            <p className='text-sm sm:text-base font-medium mb-1'>Style, Savings,</p>
            <h3 className='text-xl sm:text-2xl font-semibold mb-4'>Enjoy 40% best Savings</h3>
            <Link to="/shop"><button className='btn px-4 py-2 font-medium'>Shop Now</button></Link>
          </div>
        </div>
      </div>
     </section>
     {/* Products */}
     <section id='collection' className='py-20 px-4 max-w-screen-xl mx-auto'>
      <div className='text-center mb-10'>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-[#9e6747] font-semibold'>-New Furniture-</h2>
           {/* navigation */}
           <div className="relative -top-5 ">
          {/* Prev Button */}
          <button className=" product-button-prev absolute  -left-40 transform   z-10 bg-[#9e6747] text-white p-2 rounded-full hover:bg-[#744c31]  ">
            <FiChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button className=" product-button-next absolute  -right-40 transform  z-10 bg-[#9e6747] text-white p-2 rounded-full hover:bg-[#744c31] ">
            <FiChevronRight size={24} />
          </button>
      </div>
          <h1 className='text-3xl sm:text-4xl font-semibold'>LATEST FURNITURE</h1>
        </div>
      </div>
      
      <Swiper
        slidesPerView={4}
        modules={[Navigation]}
        navigation={{
          nextEl:'.product-button-next',
          prevEl:'.product-button-prev',
        }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          540: { slidesPerView: 2 },
          650:{ slidesPerView:2},
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        
      >
        {products.map((item) => (
            <SwiperSlide key={item.id} className='pro'>
              <div className=' grid grid-cols-1 w-[270px]  '>
              <div className=" pd relative group  bg-white rounded-lg p-4 border shadow-md hover:shadow-xl transition duration-300 md:gap-3 ">
                
                {/* Heart Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CiHeart className="text-black hover:bg-[#9e6747] rounded-xl p-3 w-5 h-5 cursor-pointer" onClick={() => handleAddToWishlist(item)}/>
                </div>

                <img src={item.image} alt={item.name} onClick={() => setSelectProduct(item)} className="w-full h-48 object-contain mb-4 "/>

                <h3 className="text-center text-lg font-medium">{item.name}</h3>

                {/* Star Ratings */}
                <div className="flex justify-center text-yellow-500 mt-1">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                </div>

                {/* Price */}
                <div className="flex justify-center gap-2 mt-2 text-sm">
                  <p className="text-green-600 font-semibold">₹{item.offerPrice}</p>
                  <p className="line-through !line-through text-red-500">₹{item.price}</p>
                </div>

                {/* Add to Cart - Hover */}
                <div className='c-btn'>
                <button className="btn opacity-0 group-hover:opacity-100 transition-opacity  mt-4  bg-[#9e6747] hover:bg-[#744c31] text-white py-2 rounded" onClick={() => handleAddToCart(item)}>ADD TO CART</button>
                </div>
              </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      {/* popup modal */}
              <div id='popup-modal'>
                  {
                      selectProduct ?(
                          <div className='popup  bg-transparent bg-opacity-40 inset-0 fixed flex items-center justify-center z-50'>
                              <div className='relative backdrop-blur-sm bg-white/30 border border-black/20  w-full max-w-md  sm:px-8 py-8 sm:py-10 mx-auto rounded-2xl shadow-lg'>
                                  <button onClick={() => setSelectProduct(null)} className="close absolute top-2 right-2 font-xs"><RxCross2 /></button>
                                  
                                  {/* left side */}
                                  <div className="lf flex items-center justify-center">
                                      <img src={selectProduct.image} alt={selectProduct.name} onClick={()=>setSelectProduct(item)} className='w-60 h-60 border rounded  sm:w-72 sm:h-72 object-contain' />
                                  </div>
                                  {/* right side */}
                                  <div className="rig">
                                  <div className='flex flex-col justify-center gap-4 px-1 sm:px-2'>
                                      <h2 className='rih text-lg sm:text-2xl font-semibold text-gray-800 text-center sm:text-left'>{selectProduct.name}</h2>
                                  </div>
                                  <div className=' rih flex items-center justify-center sm:justify-start text-yellow-500 text-base sm:text-lg'>
                                      <TiStarFullOutline />
                                      <TiStarFullOutline />
                                      <TiStarFullOutline />
                                      <FaStarHalfAlt/>
                                  </div>
      
                                      {/* Add to Cart */}
                                      <div className='rih '>
                                      <button className='btn bg-[#9e6747] hover:bg-[#744c31] text-white font-medium px-5 py-2 rounded mt-2 flex items-center justify-center gap-2' onClick={() => handleAddToCart(selectProduct)} >
                                      <PiShoppingCartSimpleLight className='w-6 h-6 text-black'  />Add to Cart
                                      </button>
                                      </div>
      
                                      {/* Description */}
                                          <p className='text-sm text-gray-600 leading-relaxed'>
                                              This high-quality product combines durability. Perfect for daily use, it offers exceptional value and design to enhance your lifestyle with comfort, performance, and modern appeal.
                                          </p>
                                      </div>
                              </div>
                          </div>
                      ):null
                  }
              </div>
     </section>
    {/* Slider */}
     <section className="w-full bg-gray-100 px-4 sm:px-8 py-12">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left: Image */}
        <div className="w-full md:w-xl">
          <img
            src={about_hero} 
            alt="Furniture"
            className="hero w-full h-auto  object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-[#9e6747]  italic mb-2 text-center">-Feel Comfortness-</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-4 !mb-4">
            Bringing YouStyle, Comfort, And<br />Craftsmanship Daily
          </h2>
          <p className="text-gray-600 mb-6 !mb-6 text-sm sm:text-base">
            Experience the perfect blend of style, comfort, and craftsmanship every day with our curated collection. Designed for those who appreciate quality and elegance in every detail.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 !mb-6">
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">1K</h3>
              <p className="text-sm text-gray-600">Offices Worldwide</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">250+</h3>
              <p className="text-sm text-gray-600">Unique Designs</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">2K</h3>
              <p className="text-sm text-gray-600">Product Reviews</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">100K</h3>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>
          </div>

          {/* Quote */}
          <p className="text-sm text-gray-600 italic font-medium mb-4 !mb-4">
            “Style, comfort, and craftsmanship—every day, perfected for you.”
          </p>

          {/* Button */}
          <button className="btn">
            View More
          </button>
        </div>
      </div>
    </section>
    {/* Banner Background */}
    <section className="relative top-[10px] !mb-6 w-full h-[400px] !h-[400px] sm:h-[90vh] bg-black/40">
      {/* Background Image */}
      <img
        src={bannerbg} 
        alt="Sofa Sale"
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
      />

      {/* Overlay */}
      <div className="over flex justify-start items-center h-full w-full px-4 sm:px-12">
        <div className="max-w-xl text-white">
          <p className="text-lg sm:text-xl mb-2 italic font-medium">
            -Hot Sale 30% Discount-
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            The Sofa You!<br /> Love Forever
          </h1>
          <p className="text-sm sm:text-base mb-6 font-light">
           Upgrade your space with timeless comfort. Lorem Ipsum may be placeholder text, but our sofas are the real deal—crafted for style, durability, and unbeatable coziness. Donot miss this deal!
          </p>
          <Link to='/shop'>
          <button className="btn">SHOP NOW</button>
          </Link>
          
        </div>
      </div>
    </section>
     {/* Products */}
     <section className='py-20 px-4 max-w-screen-xl mx-auto'>
      <div className='text-center mb-10'>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-[#9e6747] font-semibold'>-Top Rated Products-</h2>
           {/* navigation */}
           <div className="relative -top-5 ">
          {/* Prev Button */}
          <button className=" product-button-prev absolute  -left-40 transform   z-10 bg-[#9e6747] text-white p-2 rounded-full hover:bg-[#744c31]  ">
            <FiChevronLeft size={24} />
          </button>

          {/* Next Button */}
          <button className=" product-button-next absolute  -right-40 transform  z-10 bg-[#9e6747] text-white p-2 rounded-full hover:bg-[#744c31] ">
            <FiChevronRight size={24} />
          </button>
      </div>
          <h1 className='text-3xl sm:text-4xl font-semibold'>POPULAR PRODUCTS</h1>
         
        </div>
      </div>
      
      <Swiper
        slidesPerView={4}
        modules={[Navigation]}
        navigation={{
          nextEl:'.product-button-next',
          prevEl:'.product-button-prev',
        }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          540: { slidesPerView: 2 },
          650:{ slidesPerView:2},
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        
      >
        {products.map((item) => (
            <SwiperSlide key={item.id} className='pro'>
              <div className=' sm:grid grid-cols-1 w-[270px] mx-auto '>
              <div className=" pd relative group  bg-white rounded-lg p-4 border shadow-md hover:shadow-xl transition duration-300 md:gap-3">
                
                {/* Heart Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CiHeart className="text-black hover:bg-[#9e6747] rounded-xl p-3 w-5 h-5 cursor-pointer" onClick={() => handleAddToWishlist(item)}/>
                </div>

                <img src={item.image} alt={item.name} onClick={() => setSelectProduct(item)} className="w-full h-48 object-contain mb-4 "/>

                <h3 className="text-center text-lg font-medium">{item.name}</h3>

                {/* Star Ratings */}
                <div className="flex justify-center text-yellow-500 mt-1">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                </div>

                {/* Price */}
                <div className="flex justify-center gap-2 mt-2 text-sm">
                  <p className="text-green-600 font-semibold">₹{item.offerPrice}</p>
                  <p className="line-through !line-through text-red-500">₹{item.price}</p>
                </div>

                {/* Add to Cart - Hover */}
                <div className='c-btn'>
                <button className="btn opacity-0 group-hover:opacity-100 transition-opacity  mt-4  bg-[#9e6747] hover:bg-[#744c31] text-white py-2 rounded" onClick={() => handleAddToCart(item)}>ADD TO CART</button>
                </div>
              </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      {/* popup modal */}
              <div id='popup-modal'>
                  {
                      selectProduct ?(
                          <div className='popup  bg-transparent bg-opacity-40 inset-0 fixed flex items-center justify-center z-50'>
                              <div className='relative backdrop-blur-sm bg-white/30 border border-black/20  w-full max-w-md  sm:px-8 py-8 sm:py-10 mx-auto rounded-2xl shadow-lg'>
                                  <button onClick={() => setSelectProduct(null)} className="close absolute top-2 right-2 font-xs"><RxCross2 /></button>
                                  
                                  {/* left side */}
                                  <div className="lf flex items-center justify-center">
                                      <img src={selectProduct.image} alt={selectProduct.name} onClick={()=>setSelectProduct(item)} className='w-60 h-60 border rounded  sm:w-72 sm:h-72 object-contain' />
                                  </div>
                                  {/* right side */}
                                  <div className="rig">
                                  <div className='flex flex-col justify-center gap-4 px-1 sm:px-2'>
                                      <h2 className='rih text-lg sm:text-2xl font-semibold text-gray-800 text-center sm:text-left'>{selectProduct.name}</h2>
                                  </div>
                                  <div className=' rih flex items-center justify-center sm:justify-start text-yellow-500 text-base sm:text-lg'>
                                      <TiStarFullOutline />
                                      <TiStarFullOutline />
                                      <TiStarFullOutline />
                                      <FaStarHalfAlt/>
                                  </div>
      
                                      {/* Add to Cart */}
                                      <div className='rih '>
                                      <button className='btn bg-[#9e6747] hover:bg-[#744c31] text-white font-medium px-5 py-2 rounded mt-2 flex items-center justify-center gap-2' onClick={() => handleAddToCart(selectProduct)} >
                                      <PiShoppingCartSimpleLight className='w-6 h-6 text-black'  />Add to Cart
                                      </button>
                                      </div>
      
                                      {/* Description */}
                                          <p className='text-sm text-gray-600 leading-relaxed'>
                                              This high-quality product combines durability. Perfect for daily use, it offers exceptional value and design to enhance your lifestyle with comfort, performance, and modern appeal.
                                          </p>
                                      </div>
                              </div>
                          </div>
                      ):null
                  }
              </div>
     </section>
      {/* banners */}
     <section className='ban-sec w-full py-10'>
      <div className='max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
        {/* Banner3 */}
        <div className='relative h-[300px] rounded-xl overflow-hidden shadow-md' style={{backgroundImage:`url(${subBanner3})`,backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='absolute text-white inset-0  bg-black/40 bg-opacity-80 flex flex-col justify-center items-center p-6'>
            <p className='text-sm sm:text-base font-medium mb-1'>Style, Savings,</p>
            <h3 className='text-xl sm:text-2xl font-semibold mb-4'>Enjoy 40% best Savings</h3>
            <Link to="/shop"><button className='btn px-4 py-2 font-medium'>Shop Now</button></Link>
          </div>
        </div>
        {/* Banner4 */}
        <div className='relative h-[300px] rounded-xl overflow-hidden shadow-md' style={{backgroundImage:`url(${subBanner4})`,backgroundSize: 'cover', backgroundPosition: 'center' }}>
           <div className='absolute text-white inset-0 bg-black/40 bg-opacity-80 flex flex-col justify-center items-center p-6'>
            <p className='text-sm sm:text-base font-medium mb-1'>Style, Savings,</p>
            <h3 className='text-xl sm:text-2xl font-semibold mb-4'>Enjoy 40% best Savings</h3>
            <Link to="/shop"><button className='btn px-4 py-2 font-medium'>Shop Now</button></Link>
          </div>
        </div>
      </div>
     </section>
     {/* Testimonials */}
     
     <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay:2000 }}
        pagination={{ clickable: true }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div
              className="test min-h-[200px] md:min-h-[300px] flex flex-col items-center justify-center text-center px-4 text-[rgb(0,100,0)] bg-cover bg-center"
               style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${t.bg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
            >
              
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full border-4 border-white mb-3"
              />
              <p className="text-lg max-w-3xl italic mb-6 px-4">{t.message}</p>
              <h3 className="text-xl font-bold">{t.name}</h3>
              <p className="text-sm">{t.title}</p>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  <ToastContainer/>
    </>
  )
}

export default Index
