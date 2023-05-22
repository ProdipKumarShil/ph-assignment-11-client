import React from 'react';
import Banner from '../../shared/Banner/Banner';
import ToySection from '../../shared/ToySection/ToySection';
import Service from '../../shared/Service/Service';
import ReactTab from '../../shared/Tab/ReactTab';
import Gallery from '../../shared/Gallery/Gallery';
import NewsSletter from '../../shared/NewsSletter/NewsSletter';

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Gallery></Gallery>
      <ToySection></ToySection>
      {/* <Service></Service> */}
      <NewsSletter></NewsSletter>
      <ReactTab></ReactTab>
    </div>
  );
};

export default Home;