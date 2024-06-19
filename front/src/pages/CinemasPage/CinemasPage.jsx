import { useEffect, useState } from 'react';
import { getCinemas } from '../../api/api';
import { Link, useNavigate } from 'react-router-dom';
import styles from './CinemasPage.module.css';
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';

const CinemasPage = () => {
    const [cinemas, setCinemas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getCinemas()
            .then((res) => setCinemas(res))
            .catch((err) => {
                console.error(err.message);

                if (err.response.status === 401) {
                    navigate('/login');
                }
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <HeaderLogo />
            <ul className={styles['cinema-list']}>
                {cinemas.map((cinema) => (
                    <Link
                        key={cinema.id}
                        className={styles['cinema-link']}
                        to={`./${cinema.id}`}
                    >
                        {cinema.name}
                    </Link>
                ))}
            </ul>
        </>
    );
};

export default CinemasPage;
