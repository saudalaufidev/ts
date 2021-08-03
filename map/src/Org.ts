import faker from 'faker';

export class Org{
    name: string;
    location:{
        lat:number;
        lng:number;
    }
    constructor(){
        this.name=faker.company.companyName()
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }
}