import { FigmaLogo, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.sectionContainer}>
      <p>BookStore Project</p>
      <div className={styles.iconsContainer}>
        <div className={styles.icon}>
          <LinkedinLogo size={23} />
        </div>
        <div className={styles.icon}>
          <GithubLogo size={23} />
        </div>
        <div className={styles.icon}>
          <FigmaLogo size={23} />
        </div>
      </div>
      <p>By Himanshu Tekade</p>
    </section>
  );
};

export default Footer;
