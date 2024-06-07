import React from 'react';
import styles from './Roulette.module.css';

const Roulette = (props) => {
    const { movies } = props;

    return (
        <div className={styles['roulette']}>
            <h2 className={styles['winner__header']}>Мстители</h2>
            <div className={styles['wheel']}>
                <div className={styles['wheel__triangle']}>
                    <svg
                        width="26"
                        height="21"
                        viewBox="0 0 26 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13 21L0.875645 0L25.1244 0L13 21Z"
                            fill="#333333"
                        />
                    </svg>
                </div>
                <div className={styles['wheel__circle']}>
                    <svg width="350" height="350">
                        \
                        <path
                            d="M349.798 183.414C351.246 153.329 344.904 123.38 331.387 96.4634C317.87 69.5473 297.635 46.5755 272.639 29.7706C247.643 12.9657 218.734 2.89664 188.706 0.53759C158.679 -1.82146 128.552 3.60937 101.238 16.3046C73.925 28.9999 50.3505 48.5298 32.796 73.0049C15.2414 97.4799 4.30089 126.071 1.03304 156.013C-2.23481 185.955 2.2806 216.233 14.1424 243.919C26.0042 271.605 44.8108 295.76 68.7426 314.048L175 175L349.798 183.414Z"
                            fill="#D9D9D9"
                        />
                    </svg>
                </div>
            </div>
            <div className={styles['btns']}>
                <button className={styles['spin-btn']}>Крутить</button>
            </div>
        </div>
    );
};

export default Roulette;
