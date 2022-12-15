import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResindentInfo = ({url}) => {

    const [ resident, setResident] = useState({})

    useEffect(() => {
        axios.get(`${url}`)
            .then(res => setResident(res.data))

    }, [])


    // console.log(resident)

    return (
        <li className="resident-item">
            <div className="resident-card">
                <img src={resident.image} alt="" />
                <p><b>Name:</b> {resident.name}</p>
                <p><b>Status:</b> {resident.status}</p>
                <p><b>Birthplace:</b> {resident.origin?.name}</p>
                <p><b>Number of episodes where appear:</b> {resident.episode?.length}</p>
            </div>
        </li>
    );
};

export default ResindentInfo;