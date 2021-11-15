import './aws_model.css';
import { useState, useEffect } from 'react';
import { handleStart, handleStop } from '../../functions/aws/start__stop';

const AWSModel = (props) => {

    const [width, setWidth] = useState(false);
    const openW = '130px';
    const closeW = '75px';

    useEffect(() => {
        setWidth(props.status);
    }, [props.status]);

    const dummy = () => {
        
        /* 
            Dummy function so no dumbass * me * starts the
            model and AWS starts charging me.

            Remove the // to start the model if you 
            actually need to use it.
        */
        
            console.log('Dummy Start button clicked');
            console.log('Is this the function you want?', handleStart);
        
        // handleStart();
    }

    return (
        <div className = 'aws_model-wrapper'>

            <h5 className = 'model-desc' id = 'model-desc-title'>REKOGNITION MODEL</h5>

            <div className = 'start_stop-wrap'>
                <input 
                    value = 'START' type = 'button' 
                    className = 'model-btn' id = 'start-btn' 
                    style = {{width: !width ? openW : closeW }}
                    onClick = { () => dummy() } />
                <input 
                    value = 'STOP' type = 'button' 
                    className = 'model-btn' id = 'stop-btn' 
                    style = {{width: !width ? openW : closeW }}
                    onClick = { () => handleStop() } />
            </div>

        </div>
    )
}

export default AWSModel;