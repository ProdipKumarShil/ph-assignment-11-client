
import Lottie from "lottie-react";
import React from 'react';
import about from '../../assets/lottie/about-us.json'

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-screen-xl items-center">
      <Lottie animationData={about}/>
      <div className="p-4">
        <h1 className="text-4xl font-semibold mt-5 mb-4">Who we are??</h1>
        <p className="mb-4 text-gray-500">
          Welcome to Candy Land Toys, your ultimate destination for delightful toys and sweet adventures! As an e-commerce website, we offer a wide range of enchanting toys and games that will ignite the imaginations of children and bring joy to the young at heart.
        </p>
        <p className="mb-4 text-gray-500">
          At Candy Land Toys, we understand the importance of play in a child's development. That's why we carefully curate our collection to provide a delightful selection of toys that inspire creativity, foster learning, and encourage endless hours of fun. From classic favorites to the latest trends, we have something for every age and interest.
        </p>
        <p className="mb-4 text-gray-500">
          Our commitment to quality ensures that all the toys we offer are safe, durable, and built to withstand the excitement of playtime. We work closely with trusted manufacturers and suppliers to bring you products that meet the highest standards of craftsmanship and safety regulations.
        </p>
        <p className="mb-4 text-gray-500">
          Join us on this whimsical journey through Candy Land, where dreams come to life and happiness is just a click away. Start exploring our magical world of toys today and create cherished memories that will last a lifetime. Let your imagination soar with Candy Land Toys!
        </p>
      </div>
    </div>
  );
};

export default About;