import React from 'react';
import Banner from '../../shared/Banner/Banner';
import ToySection from '../../shared/ToySection/ToySection';
import Service from '../../shared/Service/Service';
import ReactTab from '../../shared/Tab/ReactTab';

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <ToySection></ToySection>
      {/* <Service></Service> */}
      <ReactTab></ReactTab>
    </div>
  );
};

export default Home;