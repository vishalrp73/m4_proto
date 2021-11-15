import './page.css';
import search_icon from '../../img/search-icon.png';
import { useState } from 'react';

import Header from '../header/header';
import FindCar from '../findCar/findCar';

import FaqSearch from '../faqSearch/faqSearch';


const Page = () => {

    const [open, setOpen] = useState(false);

    const handleFaq = () => {
        console.log('clicked')
        if (open) {
            setOpen(false);
        } else if (!open) {
            setOpen(true);
        }
    }
    
    return (
        <div className = 'page-wrapper'>

            <div className = 'left-module' style = {{width: open ? '60%' : '95%'}} >
                <Header
                    status = { open }
                    />
                <FindCar />
            </div>

            <div className = 'right-module' 
                    style = {{width: open ? '40%' : '5%'}} >

                        <div className = 'toggleBar' onClick = { handleFaq } >
                            { open ?  
                                <>
                                    <p className = 'toggle-text'>x ----- CLOSE FAQ ----- x</p>
                                </>
                            : 
                                <>
                                    <img className = 'search-icon' src = { search_icon }
                                        alt = 'search-icon' />
                                </>
                            }
                        </div>
                        
                        <FaqSearch 
                            status = { open } />

                        <div className = 'toggleBar' id = 'bot_toggle' onClick = { handleFaq } >
                            { open ?  
                                <>
                                    <p className = 'toggle-text'>x ----- CLOSE FAQ ----- x</p>
                                </>
                            : 
                                <>
                                    <img className = 'search-icon' src = { search_icon }
                                        alt = 'search-icon' />
                                </>
                            }
                        </div>
            </div>
            
        </div>
    )
}

export default Page;