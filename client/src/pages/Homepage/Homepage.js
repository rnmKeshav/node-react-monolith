import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from "../../store/githubSlice";

import BasicCard from '../../components/Card/BasicCard';
import GithubUser from '../../components/Card/GithubUser';
import './HomePage.css';

const HomePage = () => {
  const cardsData = [
    {
      title: 'Card 1',
      description: 'This is the first card.',
      imageUrl: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
    },
    {
      title: 'Card 2',
      description: 'This is the second card.',
      imageUrl: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
    },
    {
      title: 'Card 3',
      description: 'This is the third card.',
      imageUrl: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
    },
  ];

  let dispatch = useDispatch();
  let {data: user, isLoading} = useSelector(state => {
    // console.log("state", state);
    return state.github
  });

  useEffect(() => {
    console.log("Calling fetchData inside GithubUser.js")
    dispatch(fetchData());

  }, [])

  return (
    <div className="homepage">
      {/* <Navbar /> */}
      <div className="cards-container">
        {cardsData.map((card, index) => (
          // `Hi, This is card ${index}` 
          <BasicCard
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}

        <GithubUser isLoading={isLoading} user={user} />
      </div>
    </div>
  );
};

export default HomePage;
