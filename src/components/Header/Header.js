import styles from './Header.module.css';

function Header(props) {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Snackalytics</h1>
        </header>
    );
    
}

export default Header;