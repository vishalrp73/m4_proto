import { handleCleanse } from "../stringCleanse/handleCleanse";

export const ModelDisplay = (rekRes, azRes) => {

    const rekognitionDisplay = () => {
        try {
            const split = rekRes.split('Name')
            let resultArray = [];
            split.forEach(item => {
                let newItem = handleCleanse(item);
                resultArray.push(newItem)
            });
            resultArray.splice(0, 1);
            resultArray.splice(1, 1);
            resultArray.splice(1, 1);
            resultArray.splice(1, 1);
            resultArray.splice(1, 1);
            resultArray.splice(1, 1);
            resultArray.splice(1, 1);
            const topOneMessy = resultArray.toString();
            const convert = topOneMessy.split(' ');
            convert.splice(3, 1);
            convert.forEach((item, index) => {
                if (item === '') {
                    convert.splice(index, 1);
                }
            })
            convert.splice(3, 1);
            const topOneArr = convert;
            return topOneArr;

        } catch {
            console.log('unable to load')
        }
    }

    if (azRes === null) {
        const result = rekognitionDisplay();

        try {
            if (result[0] === 'sedan' || result[0] === 'hatchback' || result[0] === 'coupe') {
                return 'sedan'
            } else if (result[0] === 'utility' || result[0] === 'SUV') {
                return 'utility'
            } else if (result[0] === 'van') {
                return 'van'
            }
        } catch {
            console.log('on hold')
        }

    } else if (rekRes === null) {
        try {
            const userType = azRes.prediction.entities.vehicleType[0];
            console.log(userType[0]);

            if (userType[0] === 'sedan') {
                return 'sedan'
            } else if (userType[0] === 'utility' || userType[0] === 'suv') {
                return 'utility'
            } else if (userType[0] === 'van') {
                return 'van'
            }

        } catch {
            console.log('dont worry about it')
        }
    }

}