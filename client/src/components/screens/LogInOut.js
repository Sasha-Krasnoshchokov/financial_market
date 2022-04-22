/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import '../../styles/LogInOut.scss';
import Button from '../Button';
import Links from '../Links';
import { switcher } from '../../utils/states/logsState';

export default function LogInOut() {
  const theme = useSelector((state) => state.theme.value);
  const userStatus = useSelector((state) => state.userStatus.value);
  const dispatch = useDispatch();

  const [data, setData] = React.useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const inputInfo = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setData({
      ...data,
      [e.target.type]: e.target.value,
    });
  };

  const hendlerSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (data.email && data.password) {
      navigate('../', { replace: true });
      dispatch(switcher(userStatus));
    }
  };

  return (
    <div className={`LogInOut theme-${theme}`}>

      <div className="LogInOut-info">

        <p className="LogInOut-text">
          Welcome to the our comunity!!!
        </p>

        <form className="form" onSubmit={(e) => e.target.preventDefault()}>
          <input
            className={`form-input theme-${theme}`}
            type="email"
            placeholder="exsemple@**mail.com"
            value={data.email}
            onChange={inputInfo}
          />
          <input
            className={`form-input theme-${theme}`}
            type="password"
            placeholder="symbols + letters + numbers"
            value={data.password}
            onChange={inputInfo}
          />
        </form>

        <div className="form-button">
          <Button callback={hendlerSubmit} text="Submit" />
        </div>

      </div>

      <nav className={`LogInOut-link theme-${theme}`}>
        <Links path="/" text="Home page" />
      </nav>

    </div>
  );
}
