import globalStyles from '../../App.module.css';

const HeaderLogo = () => {
    return (
        <>
            <div className={globalStyles['logo']}>
                <p className={globalStyles['logo__main']}>Couple Movie</p>
                <p className={globalStyles['logo__beta']}>alpha</p>
            </div>
        </>
    );
};

export default HeaderLogo;
