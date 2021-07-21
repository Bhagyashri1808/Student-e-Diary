import React from 'react';
import Helmet from 'react-helmet'
import {Header as AppHeader,Icon,Title,IconHolder, Logout,Home} from './Header.Style'
import logo from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom';


const Header = ({titleText}) => {
  return (
    <AppHeader>
      <Helmet> <title>{titleText} Student e-Diary</title></Helmet>
     <Icon src={logo} alt='app logo' />
     <Title>Student e-Diary</Title>
     <IconHolder>
      <Link to='/menu'>
      <Home/>
      </Link>
      <Link to='/'>
     <Logout />
      </Link>
     </IconHolder>
    </AppHeader>
  );
};

export default Header;
