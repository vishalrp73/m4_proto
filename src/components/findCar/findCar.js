import './findCar.css';
import RecModule from '../recModule/recModule';

import { useState, useEffect } from 'react';

import { ProcessImage } from '../../functions/aws/processImage';
import { handleCleanse } from '../../functions/stringCleanse/handleCleanse';
import { RetrieveRes } from '../../functions/aws/retrieveRes';
import { ModelDisplay } from '../../functions/modelDisplay/modelDisplay';

import { LUIS } from '../../functions/azure/luis';

const FindCar = () => {

    const [textInput, setTextInput] = useState('');
    const [rekRes, setRekRes] = useState();
    const [azRes, setAzRes] = useState();
    
    const [displayParam, setDisplayParam] = useState('');
    const [display, setDisplay] = useState(false);

    const [rek, setRek] = useState(false);
    const [az, setAz] = useState(false);

    // Rekognition Functions
    useEffect(() => {
        const result = ModelDisplay(rekRes, null);
        setDisplayParam(result);
    }, [rekRes]);

    const postImage = (e) => {
        ProcessImage(e);
        setRek(true);
        setAz(false);
    }

    // Azure Functions    
    useEffect(() => {
        const result = ModelDisplay(null, azRes);
        setDisplayParam(result);
    }, [azRes]);

    const cleanString = (e) => {
        const sanitized = handleCleanse(e);
        setTextInput(sanitized);
        setAz(true);
        setRek(false);
    }

    // General Submit Function
    const handleSubmit = () => {
        if (rek) {
            const response = RetrieveRes();
            setRekRes(response);
            localStorage.removeItem('rek_resp');
        } else if (az) {
            LUIS(textInput).then(res => {
                setAzRes(res);
            })
        }

        setDisplay(true);
        setTextInput("");
        document.getElementById('user-txt').value = '';
    }

    return (
        <div className = 'find_car-container'>
            
            <div className = 'input-module'>
                
                <h1 className = 'find_car-title'>FIND A CAR!</h1>

                <div className = 'input-container'>
                    
                    <div className = 'img_upload-wrapper' id = 'img_upload-wrapper' >
                        <h2 className = 'instr-text'>Upload an image</h2>
                        <p className = 'instr-caption'>
                            * JPEG / PNG only<br />
                            ^ Requires starting the Amazon Rekognition model ^
                        </p>
                    
                        <div className = 'img-container'>
                            <input type = 'file' className = 'img_upload-input'
                                        accept = 'image/jpeg, image/png'
                                        name = 'image' id = 'fileToUpload' onChange = { (e) => postImage(e) } />
                            <img className = 'image-output' id = 'output' alt = ''/>
                        </div>
                        
                    </div>

                    <h3 className = 'or_text' id = 'or_text'>OR</h3>

                    <div className = 'text_input-wrapper' id = 'text_input-wrapper' >
                        <h2 className = 'instr-text'>Describe your ideal vehicle</h2>
                        <textarea id = 'user-txt'
                            className = 'user-text-input' onChange = { (e) => cleanString(e.target.value)} />
                    </div>

                </div>

                <input type = 'button' value = 'SUBMIT' 
                        className = 'submit-btn' onClick = { () => handleSubmit() } />

            </div>

            {
                display ? 
                    <div className = 'output-module'>
                        <h2 className = 'rec-text'>Our Recommendations</h2>
                        <RecModule
                            display = { displayParam }
                        />
                    </div> : <></>
            }

            


        </div>
    )


}

export default FindCar;