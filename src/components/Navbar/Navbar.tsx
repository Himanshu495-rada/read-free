import {
  BookmarkSimple,
  BookOpen,
  ShoppingCartSimple,
} from "@phosphor-icons/react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer} onClick={() => nav("/")}>
        <BookOpen size={25} />
        <p className={styles.logoName}>ReadFree</p>
      </div>
      <div className={styles.leftContainer}>
        <BookmarkSimple size={25} />
        <ShoppingCartSimple size={25} />
      </div>
    </div>
  );
};

export default Navbar;
