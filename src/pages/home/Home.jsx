import React from "react";
import Faq from "../../components/faq/Faq";
import Feature2 from "../../components/feature2/Feature2";
import Feature3 from "../../components/feature3/Feature3";
import Feature4 from "../../components/feature4/Feature4";
import Feature from "../../components/features/Feature";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Feature />
      <Feature2 />
      <Feature3 />
      <Feature4 />
      <Faq />
    </div>
  );
};

export default Home;
