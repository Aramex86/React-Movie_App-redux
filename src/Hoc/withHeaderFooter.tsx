import React from "react";
import Header from "../components/NaigationBar/NavBar";
import Footer from "../components/Footer/Footer";

const withHeaderFooter = (props: any) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default withHeaderFooter;
