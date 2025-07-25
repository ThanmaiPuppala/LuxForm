
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../../features/wishlistSlice';
import { addToCart } from '../../features/cartSlice';
import { PiShoppingCartSimpleLight } from 'react-icons/pi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const Wishlist = () => {
  const WishlistItems=useSelector(state => state.wishlist.items)
  const dispatch=useDispatch();
  const handleRemove=(id)=>{
    const product = WishlistItems.find(item => item.id === id); 
    dispatch(removeFromWishlist(id))
    toast.error(`${product.name} removed from wishlist`, {
    position: 'top-right',
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover:false,
  });
  }
  const handleCart=(item)=>{
    dispatch(addToCart(item))
    toast.success(`${item.name} added to cart`, {
    position: 'top-right',
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover:false,
  });
  }
  return (
    <>
     <div className="ab flex justify-center items-center bg-[#faf7f2]">
      <h1 className='text-3xl font-bold'>WishList</h1>
     </div>
    <div className=' w-full min-h-screen  flex justify-center items-center '>
          <div className='w-full max-w-6xl overflow-hidden min-h-[50vh]'>
            <div>
            <table className='w-full h-full table-auto border-collapse text-sm sm:text-base'>
              <thead className=' bg-gray-300'>
                <tr className='font-bold text-center'>
                  <th className="py-2 px-1 sm:px-4">Product</th>
                  <th className="py-2 px-1 sm:px-4">Price</th>
                  <th className="py-2 px-1 sm:px-4">Action</th>                
                  <th className="py-2 px-1 sm:px-4">Remove</th>
                </tr>    
              </thead>
              <tbody>
                {WishlistItems.map(item=>(
                  <tr key={item.id} className='border-t text-center'>
                      <td className="py-2 px-1 sm:px-4 text-left align-middle">
                        <div className="flex items-center gap-2 sm:gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 object-contain sm:w-12 sm:h-12"
                          />
                          <span className="text-xs sm:text-sm">{item.name}</span>
                        </div>
                      </td>
                    
                    <td className="py-2 px-1 sm:px-4 align-middle text-xs sm:text-sm">{item.price}</td>
                    
                    <td className='py-2 px-1 sm:px-4 align-middle text-xs sm:text-sm'>
                      <button className='btn' onClick={()=>handleCart(item)}><PiShoppingCartSimpleLight/></button>
                    </td>
                   
                    <td className='py-2 px-1 sm:px-4 align-middle text-xs sm:text-sm'>
                      <button className='btn' onClick={()=>handleRemove(item.id)}><RxCross2/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
        </div>   
        </div>
    <ToastContainer/>
  </>
  )
}

export default Wishlist