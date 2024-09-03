import styles from "./Book.module.css";
import bookImg from "../../assets/book.jpg";

const Book = () => {
  return <img className={styles.bookImage} src={bookImg} alt="book" />;
};

export default Book;
