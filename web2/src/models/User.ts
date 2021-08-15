import {Eventing} from "./eventing";
import { Sync } from "./Sync";
import {Attributes} from "./Attributes";

const apiUrl = 'http://localhost:3000/users'
export interface UserInput{
    id?:number,
    name?: string,
    age?: number
}
export class User{
   public events: Eventing=new Eventing()
    public sync: Sync<UserInput>=new Sync<UserInput>(apiUrl)   
    public attributes: Attributes<UserInput>
    constructor(data: UserInput){
        this.attributes=new Attributes<UserInput>(data)
    }
    get on(){
       return this.events.on
    }
    get trigger(){
        return this.events.trigger
    }
    get get(){
        return this.attributes.get
    }
}