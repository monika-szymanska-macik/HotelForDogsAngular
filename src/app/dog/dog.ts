export interface IDog {
    "dogId" : number;
    "name" : string;
    "additionalInformation" : string;
    "weight" : string;
}
export class Dog implements IDog {
    constructor(public dogId: number,
                public name: string,
                public additionalInformation: string,
                public weight: string){}
}