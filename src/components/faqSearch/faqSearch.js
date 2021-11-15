import './faqSearch.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { handleCleanse } from '../../functions/stringCleanse/handleCleanse';

import spinner from '../../img/spinner.gif';

const FaqSearch = (props) => {

    const [status, setStatus] = useState(props.status);
    const [faqInput, setFaqInput] = useState('');

    const [ansRes, setAnsRes] = useState();
    const [topAns, setTopAns] = useState([]);

    const [userQuery, setUserQuery] = useState("");

    const [loading, setLoading] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    /* -------------------------------------------------------------
     |   This block of code generates a placeholder item for the   |
     |   FAQ Search input but also compiles the app with a warning |
     ------------------------------------------------------------ */ 

    // const [placeholderText, setPlaceHolderText] = useState('');
    
    /* 
        const placeholderQueries = [
            'How do I bid online?',
            'Can I take a test drive?',
            'How do I know if the car I like has mechanical problems?',
            'How do I know whether the car is safe?',
            `How can I learn more about the car's history?`
        ]

        useEffect(() => {
            const placeNum = Math.floor(Math.random() * 5 - 0);
            setPlaceHolderText(placeholderQueries[placeNum]);
        }, [placeholderQueries]); 
    
    */

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const handleFaqSubmit = () => {
        setAnsRes();
        setTopAns([]);
        setLoading(true);
        setShowLoading(true);
        const cleanStr = handleCleanse(faqInput);
        
        const query = {
            queryText: cleanStr
        }

        axios.post('http://localhost:4000/query', query)
        .then (function (response) {
            const topArr = [];
            setAnsRes(response);
            const discoResponse = response.data.result;
            const ansArray = discoResponse.results;

            ansArray.forEach((res, index) => {
                if (res.result_metadata.confidence >= 0.1) {
                    topArr.push(res.answer);
                }
            })

            setTopAns(topArr);
            console.log(discoResponse)
            console.log(ansArray)

        })
        .catch ( function(error) {
            console.log(error);
        });

        setUserQuery(faqInput);
        setFaqInput("");
        document.getElementById('faq-input_text').value = '';
        console.log(loading);

    }

    return (
        <div className = 'faq_search-wrapper'>
            {
                !status ? '' 
                    : 
                        <>
                            <div className = 'faq-input-wrap'>
                                <textarea className = 'faq-user-input' id = 'faq-input_text'
                                            placeholder = {`Enter a query ...`}
                                            onChange = {(e) => setFaqInput(e.target.value)} />
                                <input 
                                    type = 'button' className = 'faq-submit-btn' value = 'SUBMIT' 
                                    onClick = { () => handleFaqSubmit() } />
                            </div>

                            <div className = 'faq-welcome-box'>
                                <h3 className = 'faq-welcome'>Welcome to Turners FAQ!</h3>
                                <p className = 'faq-welcome-brief'>[ insert introductory ramble ]</p>
                            </div>

                            <div className = 'disco-res-container'>
                                {
                                    ansRes ? <p className = 'user-query-text'>YOU ASKED : "{ userQuery }"</p> 
                                    : showLoading ?
                                    <>
                                        <img src = { spinner } className = 'loading-icon' alt = 'loading-icon' />
                                    </>
                                    : <></>
                                }
                                {
                                    topAns ? topAns.map(answer => (
                                        <>
                                            <p className = 'disco-answer'>{answer}</p>
                                        </>
                                    )) : <></>
                                }
                            </div>
                        </>
            }
        </div>
    )

}

export default FaqSearch;