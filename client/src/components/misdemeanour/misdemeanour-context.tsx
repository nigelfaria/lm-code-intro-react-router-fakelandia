import { createContext } from 'react';
import { Misdemeanour } from '../../types/misdemeanours.types';

interface MisdemeanoursContextType {
  misdemeanours: Misdemeanour[];
  setMisdemeanours: React.Dispatch<React.SetStateAction<Misdemeanour[]>>;
}

const MisdemeanoursContext = createContext<MisdemeanoursContextType>({
  misdemeanours: [],
  setMisdemeanours: () => {},
});

export default MisdemeanoursContext;
