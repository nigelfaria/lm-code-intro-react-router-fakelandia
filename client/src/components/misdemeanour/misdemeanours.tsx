import React, { useState, useEffect } from 'react';
import { Misdemeanour } from '../../types/misdemeanours.types';

export const Misdemeanours: React.FC = () => {
    const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);
    const misdemeanourUrl = "http://localhost:8080/api/misdemeanours/5"
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
        <div className='misdemeanours'>
            <table className='misdemeanours__table'>
                <thead>
                    <tr>
                        <th className='misdemeanours__header'>CitizenId</th>
                        <th className='misdemeanours__header'>Date</th>
                        <th className='misdemeanours__header' >Misdemeanour</th>
                    </tr>
                </thead>
                <tbody>
                    {misdemeanours.map(misdemeanour => (
                        <tr key={misdemeanour.citizenId} className="misdemeanours__row">
                            <td className='misdemeanours__cell'>{misdemeanour.citizenId}</td>
                            <td className="misdemeanours__cell">{misdemeanour.date}</td>
                            <td className="misdemeanours__cell">{misdemeanour.misdemeanour}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};

