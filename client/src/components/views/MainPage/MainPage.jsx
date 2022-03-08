import React from 'react';
import { v1 as uuid } from 'uuid';
import styles from './MainPage.module.css';
import Auth from '../../../hoc/auth';
import { useNavigate } from 'react-router-dom';
import Header from '../../header/Header';

const MainPage = (props) => {
  const navigate = useNavigate();

  const navigateDressroom = () => {
    const id = uuid();
    navigate(`/dressroom/${id}`);
  };

  const navigatePrivateBascket = () => {
    navigate('/privateBasket');
  };

  const navigateVoteResult = () => {
    navigate(`/voteresult`);
  };

  const navigateCollection = () => {
    navigate('/collection');
  };

  const navigateShopTogether = () => {
    const id = uuid();
    const shopWidth = window.screen.width * 0.85;
    const userWidth = window.screen.width * 0.15;

    window.open(
      './chooseshop',
      'shops',
      `width=${shopWidth}, left=${userWidth}, top=0, height=10000, scrollbars=yes, resizable, status=yes, menubar=yes, titlebar=yes`
    );
    window.open(`/room/${id}`, `videochat`, `width=${userWidth}, top=0, left=0, height=10000, scrollbars=yes, resizable=no`, 'target');
  };

  return (
    <>
      <Header />
      <div className={styles.mainPage}>
        <img src='./images/mainpage.jpg' className={styles.img}></img>
        <div className={styles.titles}>
          <div className={styles.title}>
            <div className={styles.main}>
              <p onClick={navigateDressroom}>코디</p>
            </div>
            <div className={styles.main}>
              <p onClick={navigatePrivateBascket}>장바구니/투표</p>
            </div>
            <div className={styles.main}>
              <p onClick={navigateVoteResult}>투표결과</p>
            </div>
            <div className={styles.main}>
              <p onClick={navigateCollection}>마이 컬렉션</p>
            </div>
            <div style={{ display: 'none' }} className={styles.main}>
              <p onClick={navigateShopTogether}>쇼핑시작</p>
            </div>
          </div>
          {/* <div className={styles.subtitle}></div> */}
        </div>
      </div>
    </>
  );
};

export default Auth(MainPage, true);
