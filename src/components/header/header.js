import './header.css';
import { useState, useEffect } from 'react';

import logo from '../../img/turners-logo.png';
import AWSModel from '../aws_model/aws_model';

const Header = (props) => {

    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])


    return (
        <div className = 'header-wrap' style = {{ flexDirection: status ? 'row' : 'column' }}>
            <img src = { logo } className = 'turners-logo' alt = 'turners-logo' />
            <h1>TESTING THAT DEPLOY UPDATES</h1>

            <AWSModel
                status = {props.status} />
        </div>
    )
}

export default Header;