import React from 'react';
import './Header.css';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className='header'>
         <img className='header_logo' src='https://img.icons8.com/external-icongeek26-flat-icongeek26/344/external-sunflower-flower-icongeek26-flat-icongeek26.png'/>
         <div className='header_search'> 
             <input type="text" className="header_searchInput" placeholder=" search restaurant equipment..."></input>
             <ManageSearchIcon className="header_searchIcon"/>
         </div>
         <div className="header_nav">
             <div className='header_option'>
                 <span className='header_optionl1'>hello Customer</span>
                 <span className='header_optionl2'>Sign in</span>
             </div>

             <div className='header_option'>
                 <span className='header_optionl1'>Return</span>
                 <span className='header_optionl2'>& Order</span>
             </div>

             <div className='header_option'>
                 <span className='header_optionl1'>Service</span>
                 <span className='header_optionl2'>VIP</span>
             </div>
             
             <div className="header_optionBasket">
                <ShoppingCartIcon />
                <span className="header_optionl2 basketCount">0</span>
             </div>

            
         </div>
    </div>
  )
}

export default Header