import React, { useState, useEffect } from 'react';
import MisdemeanoursContext from './misdemeanour-context';
import { Misdemeanour } from '../../types/misdemeanours.types';
import { MisdemeanourTable } from './misdemeanour-table';

export const Misdemeanours: React.FC = () => {
    const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);
    const misdemeanourUrl = "http://localhost:8080/api/misdemeanours/5";
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(misdemeanourUrl);
                const data = await response.json();
                setMisdemeanours(data.misdemeanours);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <MisdemeanoursContext.Provider value={{ misdemeanours, setMisdemeanours }}>
        <div className='misdemeanours'>
            <MisdemeanourTable/>
        </div>
        </ MisdemeanoursContext.Provider>

    );

};

