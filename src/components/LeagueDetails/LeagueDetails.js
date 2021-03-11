import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import imageUrlMale from '../../image/male.png';
import imageUrlFemale from '../../image/female.png';
import './LeagueDetails.css'
import iconFacebook from '../../icon/Facebook.png';
import iconTwitter from '../../icon/Twitter.png';
import iconYoutube from '../../icon/YouTube.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag} from '@fortawesome/free-solid-svg-icons'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { faMars } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const LeagueDetails = () => {
    const { id } = useParams();
    const [league, SetLeague] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;

        fetch(url)
            .then(response => response.json())
            .then(data => SetLeague(data.leagues[0]));
    }, [id])

    const { strSport, strLeagueAlternate, strBadge, intFormedYear, strCountry, strGender, strDescriptionEN, strFacebook, strTwitter, strYoutube } = league;

    const imageUrl = strGender === "Female" ? imageUrlFemale : imageUrlMale;

    return (
        <div className="body-bg-color">
            <div className="league-details-background">
                <img className="badgeImage text-center" src={strBadge} alt="" />
            </div>
            <div>
                <div className="card mb-3 bg-color-card detail-card">
                    <div className="row g-0 bg-color-card">
                        <div className="col-md-8 card-body league-details-about bg-color-card">
                            <h3 className="card-title">{strLeagueAlternate}</h3>
                            <br/>
                            <h5> <FontAwesomeIcon icon={faMapMarkerAlt} />    Founded: {intFormedYear}</h5>
                            <br/>
                            <h5> <FontAwesomeIcon icon={faFlag} />   Country: {strCountry}</h5>
                            <br/>
                            <h5> <FontAwesomeIcon icon={faFutbol} />   Sport Type: {strSport}</h5>
                            <br/>
                            <h5> <FontAwesomeIcon icon={faMars} />   Gender: {strGender}</h5>
                        </div>
                        <div className="col-md-4">
                            <img className="male-female-img" src={imageUrl} alt="Image has not loaded yet!"></img>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <p>{strDescriptionEN}</p>
                </div>
                <div className="footer-img">
                    <a href={`https://${strFacebook}` } target="_blank"><img src={ iconFacebook } alt=""/></a>
                    <a href={`https://${strTwitter}`} target="_blank"><img src={ iconTwitter } alt=""/></a>
                    <a href={`https://${strYoutube}`} target="_blank"><img src={ iconYoutube } alt=""/></a>
                </div>
            </div>
        </div>
    );
};

export default LeagueDetails;
