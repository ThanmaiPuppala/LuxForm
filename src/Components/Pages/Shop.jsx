import  { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../features/cartSlice'
import { addToWishlist } from '../../features/wishlistSlice'
import products from '../../Product.json'
import { TiStarFullOutline } from 'react-icons/ti'
import { PiShoppingCartSimpleLight } from 'react-icons/pi'
import { RxCross2 } from 'react-icons/rx'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const Shop = () => {
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
    <div className='ab flex items-center justify-center bg-[#faf7f2]'>
      <h1 className='font-semibold text-2xl'>Shop</h1>
    </div>

    <section>
      <div className="shop grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="relative group bg-white rounded-lg p-4 border shadow-md hover:shadow-xl "
          >
            {/* Wishlist */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CiHeart className="text-black hover:bg-[#9e6747] rounded-xl p-3 w-5 h-5 cursor-pointer" onClick={() => handleAddToWishlist(item)}/>
            </div>

            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              onClick={() => setSelectProduct(item)}
              className="w-full h-48 object-contain mb-4 cursor-pointer"
            />

            {/* Name */}
            <h3 className="text-center text-lg font-medium">{item.name}</h3>

            {/* Ratings */}
            <div className="flex justify-center text-yellow-500 mt-1">
              <FaStar/>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>

            {/* Price */}
            <div className="flex justify-center gap-2 mt-2 text-sm">
              <p className="text-green-600 font-semibold">₹{item.offerPrice}</p>
              <p className="line-through text-red-500">₹{item.price}</p>
            </div>

            {/* Add to Cart */}
           <div className='c-btn'>
                <button className="btn opacity-0 group-hover:opacity-100 transition-opacity  mt-4  bg-[#9e6747] hover:bg-[#744c31] text-white py-2 rounded" onClick={() => handleAddToCart(item)}>ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
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
    <ToastContainer/>
  </>
  )
}
export default Shop