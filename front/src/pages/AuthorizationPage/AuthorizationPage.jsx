import React, { useState } from 'react';
import globalStyles from '../../App.module.css';
import styles from './AuthorizationPage.module.css';
import axios from 'axios';
import { login } from '../../api/api';
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';

const AuthorizationPage = () => {
    let username = '';
    let password = '';

    const [errorMsg, setErrorMsg] = useState('');

    const authorize = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setErrorMsg('Поля не могу быть пустыми');
            return;
        }

        login(username, password);
    };

    return (
        <div className={styles['auth-page']}>
            <HeaderLogo />
            <div className={styles['auth-page__error']} hidden={!errorMsg}>
                <p className={styles['auth-page__error_text']}>{errorMsg}</p>
            </div>
            <form className={styles['auth-page__form']} action="#">
                <input
                    className={styles['auth-page__form__inp']}
                    type="text"
                    placeholder="Логин"
                    onChange={(e) => (username = e.target.value)}
                />
                <input
                    className={styles['auth-page__form__inp']}
                    type="password"
                    placeholder="Пароль"
                    onChange={(e) => (password = e.target.value)}
                />
                <button
                    className={styles['auth-page__form__btn']}
                    onClick={authorize}
                >
                    Войти
                </button>
            </form>
        </div>
    );
};

export default AuthorizationPage;
