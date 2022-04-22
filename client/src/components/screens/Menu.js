/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '../../styles/Menu.scss';
import Links from '../Links';
import ThemeSwitcher from '../ThemeSwitcher';
import OpenerCloser from '../OpenerCloser';
import Button from '../Button';
import { switcher } from '../../utils/states/logsState';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const theme = useSelector((state) => state.theme.value);

  const userStatus = useSelector((state) => state.userStatus.value);
  const userStatusSwitcher = useSelector((state) => state.userStatus.statusSwitcher);
  const displayingUserStatus = userStatusSwitcher[userStatus];
  const dispatch = useDispatch();

  const openMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="Menu">
        <ul className="Menu-list">
          <li className="Menu-item">
            <Links path="news" text="News" />
          </li>
          <ThemeSwitcher />
          <li className="Menu-item">
            {
              userStatus === 'Log out'
                ? <Links path="loginout" text={displayingUserStatus} />
                : (
                  <Button
                    callback={() => dispatch(switcher(userStatus))}
                    text={displayingUserStatus}
                  />
                )
            }
          </li>
        </ul>
      </nav>

      <OpenerCloser
        callback={openMenu}
        icon="opener"
      />

      <div
        className={`
          Drop-menu
          ${isMenuOpen ? 'Drop-menu-open' : 'Drop-menu-hidden'}
          Drop-menu--${theme}
        `}
      >
        <OpenerCloser
          callback={openMenu}
          icon="closer"
        />

        <nav className="Drop-menu-nav">
          <ul className="Drop-menu-list" onClick={openMenu}>
            <li className="Drop-menu-item">
              <Links path="news" text="News" />
            </li>
            <li className="Drop-menu-item">
              {
                userStatus === 'Log out'
                  ? <Links path="loginout" text={displayingUserStatus} />
                  : (
                    <Button
                      callback={() => dispatch(switcher(userStatus))}
                      text={displayingUserStatus}
                    />
                  )
              }
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
