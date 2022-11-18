import React, { useState } from 'react';
import MaterialUISwitch from './Switch';
import '../styles/home.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../slices/themeSlice';
import { changeText } from '../slices/usernameSlice';
export default function Home() {
  const theme = useSelector((state) => state.color.theme);
  const text = useSelector((state) => state.user.text);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  return (
    <div className={theme === 'light' ? 'container-change' : 'container'}>
      <div className="inner-container">
        <div className="compartment1">
          <MaterialUISwitch
            onClick={() => {
              dispatch(changeTheme());
            }}
            checked={theme === 'light' ? false : true}
          />
        </div>
        <form
          className="compartment2"
          onSubmit={(e) => {
            e.preventDefault();
            Home();
          }}
        >
          <input
            type="text"
            className="input-text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className={theme === 'light' ? 'addbtn' : 'addbtn-change'}
            onClick={() => dispatch(changeText(value))}
          >
            Add
          </button>
        </form>
        <div className="compartment3">
          <span className={theme === 'light' ? 'username' : 'username-change'}>
            Username: &nbsp;
            <span
              className={
                theme === 'light' ? 'displayname' : 'displayname-change'
              }
            >
              {text}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
