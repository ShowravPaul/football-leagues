import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = (props) => {
    const { idLeague, strLeague, strSport } = props.league; //this is an object

    return (
        <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="card card-custom">
                <div className="card-body">
                    <h4 className="card-title">{strLeague}</h4>
                    <p className="card-text">Sports Type: {strSport}</p>
                    <Link to={`/league/${idLeague}`}>
                        <button className="btn btn-primary">Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;