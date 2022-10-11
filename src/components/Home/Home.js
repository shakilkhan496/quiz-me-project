import React from 'react';
import Header from '../Header/Header';
import Topics from '../Topics/Topics';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Topics data-aos="zoom-in"></Topics>

        </div>
    );
};

export default Home;