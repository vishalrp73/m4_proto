import { AWSLogin } from './awsLogin';
import AWS from 'aws-sdk';

export const handleStart = () => {
    // Logging into AWS with credentials
    AWSLogin();

    // Starting Rekognition model
    const rekognition = new AWS.Rekognition();
    // Carrying model ARN and Inference Units from AWS as parameters
    const params = {
        MinInferenceUnits: 1,
        ProjectVersionArn: process.env.REACT_APP_MODELARN
    }
    // Core starting function
    rekognition.startProjectVersion(params, (err, data) => {
        if (err) console.log(err, err.stack);
        else console.log('Starting Rekognition model');
    });
}

export const handleStop = () => {
    // Logging into AWS with credentials
    AWSLogin();

    // Stopping Rekognition model, handled by stop button
    const rekognition = new AWS.Rekognition();
    // Carrying Model ARN from AWS as params
    const params = {
        ProjectVersionArn: process.env.REACT_APP_MODELARN
    }

    // Core stopping function
    rekognition.stopProjectVersion(params, (err, data) => {
        if (err) console.log(err, err.stack);
        else (console.log('Stopping Rekognition model'));
    });
}