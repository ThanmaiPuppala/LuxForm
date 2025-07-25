import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import blog1 from '../../assets/blog-1.jpeg';
import blog2 from '../../assets/blog-2.jpg';
import blog3 from '../../assets/blog-3.jpg'
import about_hero from '../../assets/furniforma-about-filler-img3.jpg';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
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
const About = () => {
    const cards = [
    {
      icon: "🛍️", // Replace with icons/images if needed
      title: "Easy Order Process",
      description:
        "Browse, select, and order premium furniture online in just a few clicks—fast, safe, and convenient.",
      color: "bg-green-400",
    },
    {
      icon: "🚚",
      title: "Fast & Safe Delivery",
      description:
        "We deliver your furniture with care, ensuring it arrives in perfect condition and on time.",
      color: "bg-blue-400",
    },
    {
      icon: "🏅",
      title: "Premium Quality",
      description:
        "Our furniture is crafted with top-grade materials and attention to detail for long-lasting elegance.",
      color: "bg-yellow-400",
    },
  ];
  return (
    <>
     <div className="ab flex justify-center items-center bg-[#faf7f2]">
      <h1 className='text-3xl font-bold'>About Us</h1>
     </div>
     {/* slider */}
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
     {/* services */}
     <section className=" ser py-12 px-4  sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-100 shadow-lg rounded-xl !p-6 text-center hover:shadow-xl transition duration-300"
            >
              <div
                className={`ser-im w-14 h-14 mx-auto rounded-full flex items-center justify-center text-white text-xl mb-4 ${card.color}`}
              >
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* testimonials */}
    <div className="ab flex justify-center items-center bg-[#faf7f2]">
      <h1 className='text-3xl font-bold'>What People say about us</h1>
     </div>
      <div className="w-full tes">
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
                   className="test min-h-[200px] md:min-h-[300px] flex flex-col items-center justify-center text-center px-4 text-[rgb(0,100,0)] bg-cover bg-center "
                   style={{ backgroundImage: `url(${t.bg})` }}
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
    {/* get in touch */}
    <section className="w-full py-12 px-4 sm:px-10  lg:px-12 flex justify-center bg-white">
      <div className="to bg-gradient-to-b from-gray-100 to-white rounded-2xl shadow-md max-w-4xl w-full text-center p-6 sm:p-10">
        <h5 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
          Get In Touch
        </h5>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          About Us Info
        </h2>
        <p className="get text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-6">
          We are passionate about crafting high-quality furniture that brings comfort, elegance,
          and timeless beauty into every home. With over <strong>18+ years</strong> of experience,
          we blend craftsmanship and innovation to deliver exceptional products.
        </p>
        <Link to='/contact'><button className="btn">Contact Us Now</button></Link>
      </div>
    </section>
    
    </>
  )
}

export default About