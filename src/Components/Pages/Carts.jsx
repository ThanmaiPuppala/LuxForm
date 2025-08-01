
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../features/cartSlice'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Carts = () => {
  const cartItems=useSelector(state => state.cart.items)
  const dispatch=useDispatch();
 const handleRemove = (id) => {
  const product = cartItems.find(item => item.id === id);
  dispatch(removeFromCart(id));

  if (product) {
    toast.error(`${product.name} removed from cart`, {
      position: 'top-right',
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: false,
    });
  }
};
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <>
      <div className="ab flex justify-center items-center bg-[#faf7f2]">
      <h1 className='text-3xl font-bold'>Cart</h1>
      </div>
    <div className='flex flex-col overflow-x-auto sm:overflow-visible'>
    <div className='ca w-full min-h-screen  flex justify-center items-center '>
      <div className='w-full max-w-6xl overflow-hidden min-h-[50vh]'>
        <div>
        <table className='w-full h-full table-auto border-collapse text-sm sm:text-base'>
          <thead className=' bg-gray-300'>
            <tr className='font-bold text-center'>
              <th className="py-2 px-1 sm:px-4">Product</th>
              <th className="py-2 px-1 sm:px-4">Price</th>
              <th className="py-2 px-1 sm:px-4">Quantity</th>
              <th className="py-2 px-1 sm:px-4">Subtotal</th>
              <th className="py-2 px-1 sm:px-4">Remove</th>
            </tr>    
          </thead>
          <tbody>
            {cartItems.map(item=>(
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
                <td className="py-2 px-1 sm:px-4 align-middle text-xs sm:text-sm"><button onClick={()=>dispatch(decreaseQuantity(item.id))}>-</button> {item.quantity} <button onClick={()=>dispatch(increaseQuantity(item.id))}>+</button></td>
                <td className="py-2 px-1 sm:px-4 align-middle text-xs sm:text-sm">{(item.price * item.quantity).toFixed(2)}</td>
                
                <td>
                  <button className='btn' onClick={()=>handleRemove(item.id)}><RxCross2/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
       
    </div>
    {/* cart totals */}
    <div className="ct bg-gray-50 px-4 py-6">
          <h3 className="text-xl font-semibold mt-2 text-center">Cart Totals</h3>
          <div className="flex justify-between mb-2">
            <span>Cart Subtotal</span>
            <span>₹ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2 border-t">
            <span>Shipping</span>
            <span className="text-green-600 font-medium">Free</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mb-4 border-t">
            <span>Total</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          
          <button className="btn">Proceed To Checkout</button>
          
    </div>
    </div>
    <ToastContainer/>
  </>
  )
}

export default Carts






