import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import axiosWithAuth from '../helpers/axiosWithAuth';

const PrivateRoute = () => {
    const {input} = useHistory()

    useEffect(() => {
        axiosWithAuth().get('/colors')
        .then(res => {
            push('/bubble-page')
        })
        .catch(err => {
            push('/')
        })
    }, [])

    return(
        <div>
            <h3>Lets see if you're allowed in or not</h3>
        </div>
    )
}

export default PrivateRoute







//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in