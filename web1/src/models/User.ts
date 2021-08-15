import axios,{AxiosResponse}  from 'axios';


interface UserInput{
    id?:number,
    name?: string,
    age?: number
}
type Callback=()=> void;

export class User{
    jsonServerAPIurl = 'http://localhost:3000/users'
    events:{[key: string]:Callback[]}={}
    constructor(private data:UserInput) {}
    get(userInfo:string):string|number{
        return this.data[userInfo]
    }
    set(update:UserInput):void{
        Object.assign(this.data, update)
    }
    on(eventName:string, callback:Callback):void{
        const handlers=this.events[eventName] || [];
        handlers.push(callback)
        this.events[eventName]=handlers;

    }
    trigger(eventName:string):void{
        const handlers=this.events[eventName];
        if(!handlers || handlers.length===0){
            return;
        }
        handlers.forEach(cb=>{
            cb();
        })
    }
    fetch():void{        
        axios.get(this.jsonServerAPIurl + `/${this.get('id')}`)
        .then((res:AxiosResponse):void=>{
            this.set(res.data) 
        })
    }
    save():void{
        const id=this.get('id')
        if(id){
            axios.put(this.jsonServerAPIurl+`/${id}`,this.data)
        }else {
            axios.post(this.jsonServerAPIurl,this.data)
        }
    }
}