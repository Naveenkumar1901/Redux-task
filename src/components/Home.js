import React, { useState } from 'react';
import MaterialUISwitch from './Switch';
import Switch from 'react-switch';
import useLocalStorage from 'use-local-storage';
import '../styles/home.css';
const Home = () => {
  //   const defaultLight = window.matchMedia(
  //     '(prefers-color-scheme: dark)'
  //   ).matches;
  //   const [theme, setTheme] = useLocalStorage(
  //     'theme',
  //     defaultLight ? 'dark' : 'light'
  //   );
  const [checked, setChecked] = useState(false);
  const [theme, setTheme] = useState(true);
  const switchTheme = () => {
    setChecked(!checked);
    setTheme(!theme);
  };

  return (
    <>
      <div className={theme ? 'container-change' : 'container'}>
        <div className="inner-container">
          <div className="compartment1">
            {/* <MaterialUISwitch onClick={switchTheme} />
          Switch to {theme === 'light' ? 'dark' : 'light'} Theme
          {''} */}
            <MaterialUISwitch onChange={switchTheme} checked={checked} />
          </div>
          <div className="compartment2">
            <input type="text" className="input-text" />
            <button className={theme ? 'addbtn' : 'addbtn-change'}>Add</button>
          </div>
          <div className="compartment3">
            <p className={theme ? 'username' : 'username-change'}>Username</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
