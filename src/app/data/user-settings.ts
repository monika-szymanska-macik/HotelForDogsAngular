export interface IUserSettings {
    "firstName": string;
    "lastName": string;
    "phoneNumber": string;
    "firstDay": Date;
    "lastDay": Date;
    "dogWeight": string;
    "comments": string;
    "regulations": boolean;
}
export class UserSettings implements IUserSettings{
    constructor(
        public firstName: string,
        public lastName: string,
        public phoneNumber: string,
        public firstDay: Date,
        public lastDay: Date,
        public dogWeight: string,
        public comments: string,
        public regulations: boolean
    ){}
}
