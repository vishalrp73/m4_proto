import car_db from '../../docs/cars.json';

export const CarSort = () => {

    let sedanArray = [];
    let utilityArray = [];
    let SUVArray = [];
    let vanArray = [];

    car_db.forEach(car => {
        if (car.body_type === 'Sedan') {
            sedanArray.push(car)
        }
        else if (car.body_type === 'Utility') {
            utilityArray.push(car)
        }
        else if (car.body_type === 'SUV') {
            SUVArray.push(car)
        }
        else if (car.body_type === 'Van') {
            vanArray.push(car)
        }
    });


    return {
        sedans: sedanArray,
        utils: utilityArray,
        suvs: SUVArray,
        vans: vanArray,
    }
}