import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
    name:string;
    location:{
        lat:number;
        lng:number;
    }
    constructor(){
        this.name =faker.name.firstName()
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }
    markerInfo():string {
        return `<h1>User : ${this.name}</h1>
        <h2>Lat : ${this.location.lat} 
        Lng : ${this.location.lng}</h2>`
    }
}