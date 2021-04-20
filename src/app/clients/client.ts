export interface IClient {
    "clientId" : number;
    "fullName" : string;
    "phoneNumber" : string;
    "dog" : string;
    "reservation" : string;
}
export class Client implements IClient {
    constructor(public clientId: number,
                public fullName: string,
                public phoneNumber: string,
                public dog: string,
                public reservation: string){}
}