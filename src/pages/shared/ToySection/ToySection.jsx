import React, { useEffect, useState } from 'react';
import ToyCard from './ToyCard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ToySection = () => {

  const [toys, setToys] = useState([])
  // const [mathToys, setMathToys] = useState([])
  // const [languageToys, setLanguageToys] = useState([])
  // const [scienceToys, setScienceToys] = useState([])

  useEffect( () => {
    fetch('toys.json')
      .then(res => res.json())
      .then(data => setToys(data))
  } , [])

  // const filterMathToys = () => {
  //   const filteredToys = toys.filter(toy => toy.subCategory == 'math')
  //   setMathToys(filteredToys)
  //   console.log(filteredToys)
  // }
  // const filterLanguageToys = () => {
  //   const filteredToys = toys.filter(toy => toy.subCategory == 'language')
  //   setLanguageToys(filteredToys)
  //   console.log(filteredToys)
  // }
  // const filterScienceToys = () => {
  //   const filteredToys = toys.filter(toy => toy.subCategory == 'science')
  //   setScienceToys(filteredToys)
  //   console.log(filteredToys)
  // }
  
  return (
    <div className='mx-auto max-w-screen-xl'>
      <div className="">
        <h4 className='text-xl font-semibold text-bg bg-primary py-2 px-3 my-2'>Shop By Category</h4>
      </div>

      <Tabs>
        <TabList>
          <Tab>All Toys</Tab>
          <Tab >Language Toy</Tab>
          <Tab >Science Toy</Tab>
          <Tab >Math Toy</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {
              toys.slice(0, 20).map(toy => <ToyCard toy={toy}></ToyCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {
              toys.filter(toy => toy.subCategory == 'math').map(toy => < ToyCard toy={toy} ></ToyCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {
              toys.filter(toy => toy.subCategory == 'language').map(toy => < ToyCard toy={toy} ></ToyCard>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {
              toys.filter(toy => toy.subCategory == 'science').map(toy => < ToyCard toy={toy} ></ToyCard>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ToySection;