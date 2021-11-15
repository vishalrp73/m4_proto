import { useState, useEffect } from 'react';
import './vehicles.css';

const Vehicles = (props) => {

    const [recArr, setRecArr] = useState(props.array);

    useEffect(() => {
        setRecArr(props.array);
    }, [props.array])

    return (
        <>
            {
                recArr.map(car => (
                    <div className = 'car-wrap'>

                        <img className = 'car-image' src = { car.image } alt = 'turners-car' />
                        <h4 className = 'car-title'>{ car.year } { car.brand }</h4>
                        <h5 className = 'car-model'>{ car.model }</h5>
                        <p className = 'car-body'>{ car.body_type }</p>
                        <p className = 'car-colour'>{ car.colour }</p>
                        

                    </div>
                ))
            }

        </>
    )

}

export default Vehicles;