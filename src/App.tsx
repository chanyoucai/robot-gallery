import React from 'react';
import logo from './assets/images/logo.svg';
import styles from './App.module.css';
import robots from './mockdata/robots.json';
import Robot from './components/Robot';
import ShoppingCart from './components/ShoppingCart';


function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h1>罗伯特机器人</h1>
      </div>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robots.map( r => <Robot id={r.id} email={r.email} name={r.name} />)}
      </div>
    </div>
  );
}

export default App;
