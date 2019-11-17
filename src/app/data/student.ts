import { Entity } from './entity';
import { Address } from './Address';

export class Student extends Entity {
    id: number;
    firstName: string;
    secondName: string;
    address: Address;
}
