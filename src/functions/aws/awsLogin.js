import AWS from 'aws-sdk';
const dotenv = require('dotenv').config();

export const AWSLogin = () => {

    console.log('ignore this warning', dotenv);

    return AWS.config.update({
        accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
        region: 'ap-southeast-2'
    });

}