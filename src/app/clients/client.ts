export interface IClient {
    "clientId" : number;
    "client" : string;
    "phoneNumber" : string;
    "dog" : string;
    "reservation" : string;
}
export class Client implements IClient {
    constructor(public clientId: number,
                public client: string,
                public phoneNumber: string,
                public dog: string,
                public reservation: string){}
}