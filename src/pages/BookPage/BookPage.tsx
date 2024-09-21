import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const BookPage = () => {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default BookPage;
