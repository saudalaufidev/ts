
type Callback=()=> void;
export class Eventing{
    events:{[key: string]:Callback[]}={}
    // change on from methode to function to fix undefine error due to this issue
    on=(eventName:string, callback:Callback):void=>{
        const handlers=this.events[eventName] || [];
        handlers.push(callback)
        this.events[eventName]=handlers;

    }
    // change trigger from methode to function to fix undefine error due to this issue
    trigger=(eventName:string):void=>{
        const handlers=this.events[eventName];
        if(!handlers || handlers.length===0){
            return;
        }
        handlers.forEach(cb=>{
            cb();
        })
    }
}