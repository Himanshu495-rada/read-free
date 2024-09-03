import styles from "./Home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import bookGif from "../../assets/book-gif.png";
import { Binoculars, Folder, MagnifyingGlass } from "@phosphor-icons/react";
import ReadingImg from "../../assets/reading.jpg";
import Book from "../../components/Book/Book";

const Home = () => {
  const categories = [
    "Adventure",
    "Fantasy",
    "Horror",
    "Scrience fiction",
    "Historical",
    "Mystery",
    "Literary fiction",
  ];

  return (
    <div>
      <Navbar />
      <section className={styles.section_1}>
        <div className={styles.section_1_leftContainer}>
          <p className={styles.section_1_leftContainer_title}>
            What book you <br />
            looking for?
          </p>
          <img src={bookGif} alt="book-gif" />
          <p>Explore our catalog and find your next read</p>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Type the name of book or author..."
            />
            <MagnifyingGlass size={20} color="var(--gray-800)" />
          </div>
          <div className={styles.exploreContainer}>
            <button className={styles.exploreBtn}>
              Explore
              <Binoculars size={25} color="var(--gray-800)" />
            </button>
            <div className={styles.dottedLine} />
          </div>
        </div>

        <img
          className={styles.section_1_right_img}
          src={ReadingImg}
          alt="image"
        />
      </section>
      <section className={styles.section_2}>
        <p className={styles.section_2_title}>Trending books</p>
        <p>Click to explore</p>
        <div className={styles.section_2_booksContainer}>
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      </section>
      <section className={styles.section_3}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Folder size={28} color="var(--gray-800)" />
          <p className={styles.section_3_title}>Categories</p>
        </div>
        <div className={styles.categoryContainer}>
          {categories.map((category) => (
            <div className={styles.categoryCard} key={category}>
              {category}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
