import './recModule.css';
import { useState, useEffect } from 'react';
import Vehicles from '../vehicle/vehicles';

import { CarSort } from '../../functions/carSort/carSort';

const RecModule = (props) => {

    const db = CarSort();
    const sedanArr = db.sedans;
    const utilityArr = db.utils;
    const suvArr = db.suvs;
    const vanArr = db.vans;

    const [sedanD, setSedanD] = useState(false);
    const [utilityD, setUtilityD] = useState(false);
    const [vanD, setVanD] = useState(false);

    useEffect(() => {
        const propD = props.display;

        /*  Receives display prop for category from displayModels and sorts
            between three categories to turn on/off the relevant hook
            - to display the relevant array of vehicles on the page
         */
            if (propD === 'sedan') {
                console.log('displaying sedans')
                setUtilityD(false);
                setVanD(false);
                setSedanD(true)
            } else if (propD === 'utility') {
                console.log('displaying utility vehicles')
                setSedanD(false)
                setVanD(false)
                setUtilityD(true);
            } else if (propD === 'van') {
                console.log('displaying vans')
                setSedanD(false);
                setUtilityD(false);
                setVanD(true);
            }

    }, [props]);

    return (
        <div className = 'rec-module-container'>
            {
                sedanD ? <Vehicles array = { sedanArr } />
                : utilityD ?
                    <>
                        <Vehicles array = { utilityArr } />
                        <Vehicles array = { suvArr } />
                    </>
                : vanD ? <Vehicles array = { vanArr } />
                : <></>
            }
        </div>
    )
}

export default RecModule;