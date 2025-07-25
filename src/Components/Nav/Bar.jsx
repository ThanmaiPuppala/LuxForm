import  { useState } from 'react'
import { IoHeartOutline, IoPersonOutline} from 'react-icons/io5';
import { PiShoppingCartSimpleLight } from 'react-icons/pi';
import { RiMenuFill } from 'react-icons/ri';
import { TfiSearch } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import products from '../../Product.json'
import { FaStarHalfAlt } from 'react-icons/fa';
import { TiStarFullOutline } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import { Link } from 'react-router-dom';

const Bar = () => {
  const primaryColor='#9e6747'
  const [menuOpen,setMenuOpen]=useState(false)
  const [showLogin,setShowLogin]=useState(false)
  const cartItems=useSelector(state=>state.cart.items)
  const wishlistItems=useSelector(state=>state.wishlist.items)
  const [search,setSearch]=useState(false)
  const [query,setQuery]=useState('')
  const [filtered,setFiltered]=useState([])
  const [selectProduct,setSelectProduct]=useState(null)
  const dispatch = useDispatch();
const handleAddToCart = (product) => {
  dispatch(addToCart(product));
  setSelectProduct(null);
};

  const handleSearch=()=>{
  const result = products.filter(
  product => product.name.toLowerCase().includes(query.toLowerCase())
);
setFiltered(result)
  }
  const toggleMenu=()=>{
    setMenuOpen(!menuOpen)
  }
  return (
<>
    {/* navbar */}
    <div className='fixed top-0 left-0 w-full bg-gray-100 shadow-sm h-16 z-50'>
        <div className='max-w-screen-xl mx-auto flex justify-between items-center h-full px-4 '>
            {/* logo */}
            <a href="#" className='nav-brand text-xl font-semibold '>
                    <h3 style={{color:primaryColor}} className='m-0'>LuxForm</h3>
            </a>
            {/* desktop */}

            {/* main navLinks */}
                    <div className='hidden lg:flex '>
                        <ul className='flex gap-3'>
                            <li className='nav-items'>
                                <Link to="/" className='nav-links'>Home</Link>
                            </li>
                            <li className='nav-items'>
                                <Link to="/about" className='nav-links'>About</Link>
                            </li>
                            <li className='nav-items'>
                                <Link to='/shop' className='nav-links'>Shop</Link>
                            </li>
                            
                            <li className='nav-items'>
                                <Link to="/contact" className='nav-links'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                {/* icons */}
                    <div className='flex items-center gap-4'>
                        <button onClick={()=>setSearch(!search)}><TfiSearch className='w-5 h-5'/></button>
                        <button onClick={() => setShowLogin(!showLogin)}><IoPersonOutline className='w-5 h-5' /></button>
                        <Link to="/wish" className='relative'>
                            <IoHeartOutline className='w-5 h-5'/>
                            <span className=' cart-count absolute -top-2.5 -right-2 rounded-full h-5 w-5 flex items-center justify-center'>{wishlistItems.length}</span>
                        </Link>
                        <Link to="/cart" className='relative'>
                        <PiShoppingCartSimpleLight className='w-6 h-6' />
                        <span className='cart-count absolute -top-2.5 -right-2  rounded-full h-5 w-5 flex items-center justify-center'>{cartItems.length}</span>
                        </Link>               
                    </div>
            {/* mobile */}

                {/* menu bar*/}
                    <div className="flex lg:hidden">
                        <button onClick={toggleMenu} className="btn text-xl">
                            <RiMenuFill />
                        </button>
                    </div>
                    {/* menu icons */}
                {
                    menuOpen?(
                        <div className='lg:hidden bg-transparent backdrop-blur-2xl  shadow-md fixed w-[250px] h-[250px] top-16 right-3 flex items-center justify-center'>
                            <ul className='flex flex-col gap-4'>
                                <li><Link to="/" className='nav-links ' onClick={()=>setMenuOpen(false)}>Home</Link></li>
                                <li><Link to="/about" className='nav-links ' onClick={()=>setMenuOpen(false)}>About</Link></li>
                                <li><Link to='/shop' className='nav-links ' onClick={()=>setMenuOpen(false)}>Shop</Link></li>
                                <li><Link to='/contact' className='nav-links ' onClick={()=>setMenuOpen(false)}>Contact</Link></li>
                            </ul>
                        </div>
                    ):null
                }
        </div>
    </div>

       {/* sign-up Modal */}
            {
                showLogin && 
                <div className="login-popup bg-white bg-opacity-40 inset-0 fixed flex items-center justify-center z-50">
                    <div className='login-container relative bg-white w-full max-w-md  sm:px-8 py-8 sm:py-10 mx-auto rounded-2xl shadow-lg'>         
                    <h2 className='login-title text-[#9e6747]  sm:mt-8 mb-4 text-center text-xl sm:text-2xl font-semibold'>Sign Up</h2>
                    <button onClick={() => setShowLogin(false)} className=" close absolute top-2 right-2 font-xs"><RxCross2 /></button>

                    <form className='form flex flex-col gap-3 text-sm sm:text-base'>
                        <label htmlFor="name" className='form-label'>Name</label>
                        <input type="text" placeholder="Enter Your Name" className=" inp w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9e6747]" />

                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" placeholder="Enter Your Email" className=" inp w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9e6747]" />

                        <label htmlFor="password" className='form-label'>Password</label>
                        <input type="password" placeholder="Enter Your Password" className=" inp w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9e6747]" />

                        <p className="text-[12px] text-center">
                        By SignUp, you agree to our <span className="span">Terms of services</span> & <span className="span">Privacy policy</span>
                        </p>

                        <button type='submit'  className='btn bg-[#9e6747] hover:bg-[#513729] text-[18px] py-2 rounded hover:opacity-90'>
                        SignUp
                        </button>

                        <p className="text-[20px] text-center">
                        Already have an account? <span className=" span text-[#9e6747]  cursor-pointer">Sign In</span>
                        </p>
                    </form> 
                    </div>
                </div>
            }
        
        {/* Search Model */}
        {
            search?(
                <div className='search-popup  bg-transparent bg-opacity-40 inset-0 fixed flex items-center justify-center z-50'>
                    <div className='relative bg-white w-full max-w-md  sm:px-8 py-8 sm:py-10 mx-auto rounded-2xl shadow-lg'>
                        <h2 className='search-title text-[#9e6747] sm:mt-8 mb-4 text-center text-xl sm:text-2xl font-semibold'>Search</h2>
                        <button onClick={() => setSearch(false)} className="close absolute top-2 right-2 font-xs"><RxCross2 /></button>
                        <form className='form flex  text-sm sm:text-base 'onSubmit={(e) => {e.preventDefault();
                                    handleSearch();}}>
                                        <input type="text" placeholder='search for product...' value={query} onChange={e=>setQuery(e.target.value)} className="inp w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9e6747]"/>
                                        <button type="button" onClick={handleSearch} className='text-[#9e6747] px-4 py-2'><TfiSearch className='w-5 h-5' /></button>
                        </form >
                            {
                                filtered.length>0?(
                                    <div className="prod grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 max-h-96 overflow-y-auto pr-2">
                                        {filtered.map(item => (
                                            <div key={item.id} className=" img border rounded p-4 shadow text-center">
                                            <img src={item.image} alt={item.name} onClick={()=>setSelectProduct(item)} className="w-32 h-32 object-contain mx-auto mb-2 " />
                                            <h3 className=" name text-lg font-semibold ">{item.name}</h3>
                                        </div>
                                ))}
                                    </div>
                                ):
                                (query && <p className="text-center text-red-500">No product found</p>)
                            }
                    </div>
                </div>
            ):null
        }
        
        {/* popup modal */}
        <div id='popup-modal'>
            {
                selectProduct ?(
                    <div className='popup  bg-transparent bg-opacity-40 inset-0 fixed flex items-center justify-center z-50'>
                        <div className='relative backdrop-blur-sm bg-white/30 border border-black/20  w-full max-w-md  sm:px-8 py-8 sm:py-10 mx-auto rounded-2xl shadow-lg'>
                            <button onClick={() => setSelectProduct(null)} className="close absolute top-2 right-2 font-xs"><RxCross2 /></button>
                            
                            {/* left side */}
                            <div className="flex items-center justify-center ">
                                <img src={selectProduct.image} alt={selectProduct.name} className='w-60 h-60  sm:w-72 sm:h-72 object-contain' />
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
                                <button className='btn bg-[#9e6747] hover:bg-[#744c31] text-white font-medium px-5 py-2 rounded mt-2 flex items-center justify-center gap-2' onClick={() => handleAddToCart(selectProduct)}>
                                <PiShoppingCartSimpleLight className='w-6 h-6 text-black' />Add to Cart
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
</>
  )
}

export default Bar