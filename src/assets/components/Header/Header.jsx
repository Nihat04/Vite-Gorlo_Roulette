import React from 'react';
import styles from './Header.module.css';
import classNames from 'classnames';

const Header = () => {
  return (
    <header className={styles['header']}>
      <button className={styles['burger']}>
        <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.75 1.5H24.25M1.75 9H24.25M1.75 16.5H24.25" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={styles['logo']}>Gorlo Roulette</div>
      <div className={styles['beta-logo']}>beta</div>
    </header>
  )
}

export default Header