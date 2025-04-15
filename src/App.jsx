import React, { useState } from "react";
import "./App.css";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Topbar from "./assets/components/Topbar";
import Header from "./assets/components/Header";
import Banner from "./assets/components/Banner";
import HeroSection from "./assets/components/HeroSection";
import LatestProducts from "./assets/components/LatestProducts";
import Categories from "./assets/components/Categories";
import Footer from "./assets/components/Footer";
import ProductsYouMayLIke from "./assets/components/ProductsYouMayLIke";
import ScrollToTop from "./assets/components/ScrollToTop";


function App() {
  return (
    <React.Fragment>
      <Topbar />
      <Header />
      <Banner />
      <HeroSection />
      <LatestProducts />
      <Categories/>
      <ProductsYouMayLIke/>
      <Footer/>
      <ScrollToTop />
    </React.Fragment>
  );
}

export default App;
