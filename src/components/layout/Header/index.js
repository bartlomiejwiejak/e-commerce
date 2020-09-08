import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../../assets/crown.svg';
import './styles.scss';
import { auth } from '../../../firebase/firebaseUtils';
import CartIcon from '../../shared/CartIcon';
import CartDropdown from '../../shared/CartDropdown';

const Header = ({ currentUser, toggleCartHidden, hidden }) => (
  <header className='header' >
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
          <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
          :
          <Link className='option' to='/auth'>SIGN IN</Link>
      }
      <CartIcon onClick={toggleCartHidden} />
    </div>
    {hidden ? null : <CartDropdown />}
  </header>
);

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
  }
}



export default connect(mapStateToProps)(Header);