import globalStyles from '../../App.module.css';

const HeaderLogo = () => {
    return (
        <>
            <div className={globalStyles['logo']}>
                <p className={globalStyles['logo__main']}>Gorlo Roulette</p>
                <p className={globalStyles['logo__beta']}>beta</p>
            </div>
        </>
    );
};

export default HeaderLogo;
