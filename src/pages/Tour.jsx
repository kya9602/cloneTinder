import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import TourCard from "../components/TourCard";

function Tour() {
  return (
    <>
    <Layout>
      <Header />  
        <TourCard />
      <Footer />
    </Layout>
    </>
  );
}

export default Tour;
