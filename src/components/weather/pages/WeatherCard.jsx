import React from 'react';
import './WeatherCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud,faDroplet} from '@fortawesome/free-solid-svg-icons';


export const WeatherCard = ({data}) => {
    const { city, temperature, description, humidity,icon,country } = data;

    return (
        <>

            <div className=" mt-5  " >
                <div className="row g-0">
                    <div className="col-md-6 align-content-center border-1 ">
                        <h5 className="city-country">{city},{country}</h5>
                        <img src={icon} className="img-fluid rounded-start mb-2 mt-2 text-center" alt="..."/>
                        <h5 className="temperature">{temperature}°C</h5>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">

                            <div className="card-text text-center description mb-5">
                                <FontAwesomeIcon icon={faCloud} className="icon "/>
                                <h5>{description}</h5></div>

                        </div>
                        <div className="card-text text-center description mt-5">
                            <FontAwesomeIcon icon={faDroplet} className="icon "/>
                            <h5>{humidity}%</h5>
                        </div>
                    </div>
                </div>
            </div>

        </>



    );
}