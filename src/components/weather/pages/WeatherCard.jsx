import React from 'react';
import './WeatherCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud,faDroplet,faTemperatureThreeQuarters} from '@fortawesome/free-solid-svg-icons';


export const WeatherCard = ({data}) => {
    const { city, temperature, description, humidity,icon,country } = data;

    return (
        <>

            <div className=' mx-auto'>

                    <div className="row">
                        <div className='col-md-6'>
                            <div className="row mt-5">
                                <h5 className="text-center">{city},{country}</h5>

                            </div>
                            <div className="row">
                                <img src={icon} className="img-fluid rounded-start mx-auto weather-img" alt="weather condtion"  />

                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="row">
                                <p className="text-center">
                                    <FontAwesomeIcon icon={faTemperatureThreeQuarters} className="mx-auto icon"/>
                                </p>
                                <h5 className="text-center">{temperature}°C</h5>

                            </div>
                            <div className="row">
                                <p className="text-center">
                                    <FontAwesomeIcon icon={faCloud} className="mx-auto icon"/>
                                </p>
                                <h5 className='text-center'>{description}</h5>

                            </div>
                            <div className="row mt-4">
                                <p className="text-center">
                                    <FontAwesomeIcon icon={faDroplet} className="icon"/>
                                </p>
                                <h5 className="text-center">{humidity}%</h5>

                            </div>

                        </div>
                    </div>


            </div>

        </>



    );
}