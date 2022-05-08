import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <div>
        <h1 className={styles.title}>
          Simple is <span>Next</span>
        </h1>
        <p className={styles.description}>Keep it simple, super simple</p>
      </div>
    </>
  );
};

export default Header;
