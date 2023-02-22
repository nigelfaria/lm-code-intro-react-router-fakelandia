import { misdemeanourMap } from "../../types/misdemeanours.types";
import { useContext, useState } from "react";
import MisdemeanoursContext from "./misdemeanour-context";

export const MisdemeanourTable: React.FC = () => {
    const { misdemeanours, setMisdemeanours } = useContext(MisdemeanoursContext);
    const [filterValue, setFilterValue] = useState('all');
    const filteredMisdemeanours = misdemeanours.filter(misdemeanour => {
        if (filterValue === 'all') {
            return true;
        }
        return misdemeanour.misdemeanour === filterValue;
    });
    return (
        <>
            <select className='misdemeanours__filter' name='selectedMisdemeanour'
                value={filterValue} onChange={e => setFilterValue(e.target.value)}>
                <option value='all'>All</option>;
                <option value='rudeness'>Mild Public Rudeness 🤪</option>;
                <option value='lift'>Speaking in a Lift 🗣</option>;
                <option value='vegetables'>Not Eating Your Vegetables 🥗</option>;
                <option value='united'>Supporting Manchester United 😈</option>;
            </select>

            <table className='misdemeanours__table'>
                <thead>
                    <tr>
                        <th className='misdemeanours__header'>CitizenId</th>
                        <th className='misdemeanours__header'>Date</th>
                        <th className='misdemeanours__header' >Misdemeanour</th>
                        <th className='misdemeanours__header' >Punishment Idea</th>

                    </tr>
                </thead>
                <tbody>

                    {filteredMisdemeanours.map(misdemeanour => (
                        <tr key={misdemeanour.citizenId} className="misdemeanours__row">
                            <td className='misdemeanours__cell'>{misdemeanour.citizenId}</td>
                            <td className="misdemeanours__cell">{misdemeanour.date}</td>
                            <td className="misdemeanours__cell">{misdemeanourMap.get(misdemeanour.misdemeanour)}</td>
                            <td className="misdemeanours__cell--image"><img src='https://picsum.photos/50/50' /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>

    );
};