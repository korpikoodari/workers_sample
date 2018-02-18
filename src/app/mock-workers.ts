import { Employee } from './employee';
import {Role} from './role'
export const EMPLOYEES: Employee[] = [
  { id: 11, name: 'Mr. Nice' ,role: Role.Developer},
  { id: 12, name: 'Narco' ,role:  Role.Operator},
  { id: 13, name: 'Bombasto',role : Role.Manager },
  { id: 14, name: 'Celeritas' ,role : Role.Owner},
  { id: 15, name: 'Magneta' ,role : Role.Owner},
  { id: 16, name: 'RubberMan' ,role :Role.Manager},
  { id: 17, name: 'Dynama' ,role: Role.Operator},
  { id: 18, name: 'Dr IQ' ,role :Role.Developer},
  { id: 19, name: 'Magma' ,role : Role.Developer},
  { id: 20, name: 'Tornado',role :Role.Developer }
];
