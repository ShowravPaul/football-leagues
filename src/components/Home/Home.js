import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Home.css';

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(response => response.json())
            .then(data => setLeagues(data.leagues.slice(0, 12)))
    }, [])


    return (
        <div className="background-color">
            <div className="header-img img-fluid">
                <h1 className="web-name">Football Leagues</h1>
            </div>
            <div className="container">
                <div className="row">
                    {
                        leagues.map(element => <Card league={element}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;