import { Dog } from "../dog/dog";

export interface IClient {
    "clientId" : number;
    "fullName" : string;
    "phoneNumber" : string;
    "reservation" : string;
    "dog" : string;
}
export class Client implements IClient {
    constructor(public clientId: number,
                public fullName: string,
                public phoneNumber: string,
                public reservation: string,
                public dog: string){}
}