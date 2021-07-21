import React, { useEffect, useState } from 'react';
import Header from '../../../features/events/structure/Header';
import Footer from '../../../features/events/structure/Footer';
import { getMenuList } from '../../../firestore/FireStoreService';
import { Card, CardDeck,Img,ModuleLink } from './Menu.Style';
import Image from '../../../assets/img/pexels-photo.jpg' 

const Menu = ({ history }) => {
  const [menuList, setMenuList] = useState([]);
  useEffect(() => {
    const ref = getMenuList();
    ref.on('value', (snapshot) => {
      setMenuList(snapshot.val());
      ref.off();
    });
  }, []);

  const onClickHandler = () => {
    history.push('/');
  };

  const onLinkClickHandler = (e) => {
    //This is done to avoid the click handler of the <section>
    // firing and placing two browse entries in browser history
    e.stopPropagation();
  };

  return (
    <>
      <Header titleText=''/>
      <CardDeck>
      {menuList.map((item, index) => {
        return (
          <Card key={index}>
            <div><Img src={Image} alt=''/></div>
            <ModuleLink to={`/${item.url}`}>
              {`${item.title}`}
              </ModuleLink>
          </Card>
        );
      })}
      </CardDeck>
      <Footer />
    </>
  );
};

export default Menu;
